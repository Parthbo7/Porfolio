let audioCtx: AudioContext | null = null;
let ambientOsc: OscillatorNode | null = null;
let ambientOsc2: OscillatorNode | null = null;
let ambientGain: GainNode | null = null;

// Global sound master state
let AUDIO_ON = true;
let isVaultActive = false;
try {
  const saved = localStorage.getItem('AUDIO_ON');
  if (saved !== null) {
    AUDIO_ON = saved === 'true';
  }
} catch (e) {
  console.warn('[SoundManager] LocalStorage read failed:', e);
}

const initAudio = () => {
  if (!AUDIO_ON) return;
  if (!audioCtx) {
    const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
    if (AudioContextClass) {
      audioCtx = new AudioContextClass();
    }
  }
  if (audioCtx && audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
};

export const isAudioOn = () => AUDIO_ON;

export const setAudioState = (state: boolean) => {
  AUDIO_ON = state;
  try {
    localStorage.setItem('AUDIO_ON', String(state));
  } catch (e) {
    console.warn('[SoundManager] LocalStorage write failed:', e);
  }

  console.log(`[SoundManager] Audio state changed: ${state ? 'ENABLED' : 'MUTED'}`);

  if (!state) {
    // Mute immediately
    muteVaultAmbientAudio();
    stopAmbientHum();
  } else {
    // If the TV loop is supposed to run, we only unmute if the vault is active
    if (isVaultActive) {
      unmuteVaultAmbientAudio();
      startAmbientHum();
    }
  }

  // Broadcast state change
  window.dispatchEvent(new CustomEvent('audio-state-changed', { detail: state }));
};

export const toggleAudio = () => {
  setAudioState(!AUDIO_ON);
  return AUDIO_ON;
};

export const startAmbientHum = () => {
  if (!AUDIO_ON) return;
  try {
    initAudio();
    if (!audioCtx) return;

    if (ambientOsc) return; // Already running

    ambientGain = audioCtx.createGain();
    ambientGain.gain.setValueAtTime(0.0, audioCtx.currentTime);
    // Smooth fade in
    ambientGain.gain.linearRampToValueAtTime(0.04, audioCtx.currentTime + 2.0);
    ambientGain.connect(audioCtx.destination);

    // Deep low sub pad oscillator
    ambientOsc = audioCtx.createOscillator();
    ambientOsc.type = 'triangle';
    ambientOsc.frequency.setValueAtTime(55, audioCtx.currentTime); // A1 note
    
    // Add sub LFO detune
    ambientOsc.detune.setValueAtTime(-5, audioCtx.currentTime);
    ambientOsc.connect(ambientGain);
    ambientOsc.start();

    // Secondary mid-low harmonic
    ambientOsc2 = audioCtx.createOscillator();
    ambientOsc2.type = 'sine';
    ambientOsc2.frequency.setValueAtTime(110, audioCtx.currentTime); // A2 note
    ambientOsc2.detune.setValueAtTime(5, audioCtx.currentTime);
    
    // Low pass filter to make it very warm
    const lpFilter = audioCtx.createBiquadFilter();
    lpFilter.type = 'lowpass';
    lpFilter.frequency.setValueAtTime(150, audioCtx.currentTime);
    
    ambientOsc2.connect(lpFilter);
    lpFilter.connect(ambientGain);
    ambientOsc2.start();

    console.log('[SoundManager] Ambient hum started.');
  } catch (e) {
    console.warn("[SoundManager] Failed to start ambient hum:", e);
  }
};

export const stopAmbientHum = () => {
  try {
    if (ambientGain && audioCtx) {
      // Fade out smoothly
      ambientGain.gain.cancelScheduledValues(audioCtx.currentTime);
      ambientGain.gain.setValueAtTime(ambientGain.gain.value, audioCtx.currentTime);
      ambientGain.gain.linearRampToValueAtTime(0.0, audioCtx.currentTime + 0.8);
      
      setTimeout(() => {
        if (ambientOsc) {
          ambientOsc.stop();
          ambientOsc.disconnect();
          ambientOsc = null;
        }
        if (ambientOsc2) {
          ambientOsc2.stop();
          ambientOsc2.disconnect();
          ambientOsc2 = null;
        }
        if (ambientGain) {
          ambientGain.disconnect();
          ambientGain = null;
        }
        console.log('[SoundManager] Ambient hum stopped.');
      }, 900);
    }
  } catch (e) {
    console.warn("[SoundManager] Failed to stop ambient hum:", e);
  }
};

// ── Vault Old TV Ambient Audio (MP3 file-based) ──
let vaultAudioEl: HTMLAudioElement | null = null;
let vaultFadeInterval: ReturnType<typeof setInterval> | null = null;

const VAULT_TARGET_VOLUME = 0.18; // ~18% volume
const VAULT_FADE_DURATION = 2000; // 2 second fade
const VAULT_FADE_STEPS = 40;

// Preload TV Loop Audio immediately upon import
try {
  vaultAudioEl = new Audio('/src/assets/audio/Old TV Audio.mp3');
  vaultAudioEl.loop = true;
  vaultAudioEl.volume = 0;
  vaultAudioEl.preload = 'auto';
  console.log('[SoundManager] Secret Vault Old TV Audio preloaded.');
} catch (e) {
  console.warn('[SoundManager] Secret Vault Old TV Audio preloading failed:', e);
}

export const startVaultAmbientAudio = () => {
  isVaultActive = true;
  if (!AUDIO_ON) return;
  try {
    if (!vaultAudioEl) {
      vaultAudioEl = new Audio('/src/assets/audio/Old TV Audio.mp3');
      vaultAudioEl.loop = true;
      vaultAudioEl.volume = 0;
      vaultAudioEl.preload = 'auto';
    }

    // Clear any existing fade
    if (vaultFadeInterval) {
      clearInterval(vaultFadeInterval);
      vaultFadeInterval = null;
    }

    vaultAudioEl.volume = 0;
    vaultAudioEl.play().then(() => {
      console.log('[SoundManager] Old TV Audio playing...');
    }).catch((e) => {
      console.warn('[SoundManager] Old TV Audio autoplay blocked or failed:', e);
    });

    // Smooth fade in
    let step = 0;
    vaultFadeInterval = setInterval(() => {
      step++;
      if (vaultAudioEl) {
        vaultAudioEl.volume = Math.min(VAULT_TARGET_VOLUME, (step / VAULT_FADE_STEPS) * VAULT_TARGET_VOLUME);
      }
      if (step >= VAULT_FADE_STEPS) {
        if (vaultFadeInterval) clearInterval(vaultFadeInterval);
        vaultFadeInterval = null;
      }
    }, VAULT_FADE_DURATION / VAULT_FADE_STEPS);
  } catch (e) {
    console.warn('[SoundManager] Failed to start vault ambient audio:', e);
  }
};

export const stopVaultAmbientAudio = () => {
  isVaultActive = false;
  try {
    if (!vaultAudioEl) return;

    if (vaultFadeInterval) {
      clearInterval(vaultFadeInterval);
      vaultFadeInterval = null;
    }

    // Smooth fade out
    const startVol = vaultAudioEl.volume;
    let step = 0;
    const fadeOutSteps = 20;
    const fadeOutMs = 800;

    vaultFadeInterval = setInterval(() => {
      step++;
      if (vaultAudioEl) {
        vaultAudioEl.volume = Math.max(0, startVol * (1 - step / fadeOutSteps));
      }
      if (step >= fadeOutSteps) {
        if (vaultFadeInterval) clearInterval(vaultFadeInterval);
        vaultFadeInterval = null;
        if (vaultAudioEl) {
          vaultAudioEl.pause();
          vaultAudioEl.currentTime = 0;
        }
        console.log('[SoundManager] Old TV Audio stopped.');
      }
    }, fadeOutMs / fadeOutSteps);
  } catch (e) {
    console.warn('[SoundManager] Failed to stop vault ambient audio:', e);
  }
};

export const muteVaultAmbientAudio = () => {
  if (vaultAudioEl) {
    vaultAudioEl.volume = 0;
    vaultAudioEl.pause();
    console.log('[SoundManager] Old TV Audio muted.');
  }
};

export const unmuteVaultAmbientAudio = () => {
  if (!AUDIO_ON || !isVaultActive) return;
  if (vaultAudioEl) {
    vaultAudioEl.volume = VAULT_TARGET_VOLUME;
    vaultAudioEl.play().catch(() => {});
    console.log('[SoundManager] Old TV Audio unmuted.');
  }
};

// 40-60% click volume boost applied (gain default increased from 0.008 to 0.015)
export const playClickTick = (freq = 1500, duration = 0.03) => {
  if (!AUDIO_ON) return;
  try {
    initAudio();
    if (!audioCtx) return;

    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(freq, audioCtx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(300, audioCtx.currentTime + duration);

    // Boosted volume by ~85% (from 0.008 to 0.015) for premium click feedback
    gain.gain.setValueAtTime(0.015, audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.00001, audioCtx.currentTime + duration);

    osc.connect(gain);
    gain.connect(audioCtx.destination);

    osc.start();
    osc.stop(audioCtx.currentTime + duration + 0.01);
  } catch (e) {
    console.warn('[SoundManager] playClickTick failed:', e);
  }
};

// 40-60% beep volume boost applied (gain default increased from 0.015 to 0.025)
export const playBeep = (freq = 800, duration = 0.08) => {
  if (!AUDIO_ON) return;
  try {
    initAudio();
    if (!audioCtx) return;

    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(freq, audioCtx.currentTime);

    // Boosted volume by ~65% (from 0.015 to 0.025)
    gain.gain.setValueAtTime(0.025, audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.00001, audioCtx.currentTime + duration);

    osc.connect(gain);
    gain.connect(audioCtx.destination);

    osc.start();
    osc.stop(audioCtx.currentTime + duration + 0.01);
  } catch (e) {
    console.warn('[SoundManager] playBeep failed:', e);
  }
};

// Boosted volume (gain default increased from 0.012 to 0.02)
export const playUnlockSuccess = () => {
  if (!AUDIO_ON) return;
  try {
    initAudio();
    const ctx = audioCtx;
    if (!ctx) return;

    const now = ctx.currentTime;
    const notes = [261.63, 329.63, 392.00, 523.25, 659.25, 783.99, 1046.50]; // C major arpeggio
    
    notes.forEach((freq, idx) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, now + idx * 0.07);
      
      gain.gain.setValueAtTime(0, now);
      // Boosted volume (from 0.012 to 0.02)
      gain.gain.setValueAtTime(0.02, now + idx * 0.07);
      gain.gain.exponentialRampToValueAtTime(0.00001, now + idx * 0.07 + 0.35);
      
      osc.connect(gain);
      gain.connect(ctx.destination);
      
      osc.start(now + idx * 0.07);
      osc.stop(now + idx * 0.07 + 0.4);
    });

  } catch (e) {
    console.warn('[SoundManager] playUnlockSuccess failed:', e);
  }
};

// Boosted volume (gain default increased from 0.04/0.06 to 0.07/0.09)
export const playAccessDenied = () => {
  if (!AUDIO_ON) return;
  try {
    initAudio();
    const ctx = audioCtx;
    if (!ctx) return;

    const now = ctx.currentTime;
    
    // Low saw-tooth alarm pitch drop
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    
    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(120, now);
    osc.frequency.linearRampToValueAtTime(45, now + 0.55);
    
    // Low pass filter to make it very heavy and deep
    const filter = ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(250, now);
    
    // Boosted volume (from 0.04 to 0.07)
    gain.gain.setValueAtTime(0.07, now);
    gain.gain.exponentialRampToValueAtTime(0.00001, now + 0.58);
    
    osc.connect(filter);
    filter.connect(gain);
    gain.connect(ctx.destination);
    
    osc.start(now);
    osc.stop(now + 0.6);

    // Secondary sub hit
    const subOsc = ctx.createOscillator();
    const subGain = ctx.createGain();
    
    subOsc.type = 'sine';
    subOsc.frequency.setValueAtTime(50, now);
    
    // Boosted volume (from 0.06 to 0.09)
    subGain.gain.setValueAtTime(0.09, now);
    subGain.gain.exponentialRampToValueAtTime(0.00001, now + 0.58);
    
    subOsc.connect(subGain);
    subGain.connect(ctx.destination);
    
    subOsc.start(now);
    subOsc.stop(now + 0.6);

  } catch (e) {
    console.warn('[SoundManager] playAccessDenied failed:', e);
  }
};
