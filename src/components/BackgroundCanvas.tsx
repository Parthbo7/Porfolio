import { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  alpha: number;
  baseAlpha: number;
}

interface GlowingBlob {
  x: number;
  y: number;
  targetX: number;
  targetY: number;
  radius: number;
  color: string;
  speed: number;
}

export const BackgroundCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Track resizing
    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // Track mouse coordinates
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.targetX = e.clientX;
      mouseRef.current.targetY = e.clientY;
    };
    window.addEventListener('mousemove', handleMouseMove);

    // Initialize glowing background blobs
    const blobs: GlowingBlob[] = [
      {
        x: width * 0.25,
        y: height * 0.3,
        targetX: width * 0.25,
        targetY: height * 0.3,
        radius: Math.min(width, height) * 0.35,
        color: 'rgba(235, 203, 192, 0.45)', // pastel pinkish beige
        speed: 0.015,
      },
      {
        x: width * 0.75,
        y: height * 0.7,
        targetX: width * 0.75,
        targetY: height * 0.7,
        radius: Math.min(width, height) * 0.4,
        color: 'rgba(215, 218, 230, 0.35)', // soft pastel blue-gray
        speed: 0.012,
      },
      {
        x: width * 0.5,
        y: height * 0.5,
        targetX: width * 0.5,
        targetY: height * 0.5,
        radius: Math.min(width, height) * 0.3,
        color: 'rgba(238, 230, 212, 0.4)', // warm yellow-beige
        speed: 0.02,
      },
    ];

    // Initialize small ambient particles
    const particles: Particle[] = [];
    const particleCount = 45;
    for (let i = 0; i < particleCount; i++) {
      const baseAlpha = 0.15 + Math.random() * 0.35;
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: -0.1 - Math.random() * 0.4, // float upwards slowly
        size: 1 + Math.random() * 2,
        alpha: baseAlpha,
        baseAlpha,
      });
    }

    // 3D Cube Vertices & Edges for abstract geometric overlay
    const cubeVertices = [
      { x: -1, y: -1, z: -1 },
      { x: 1, y: -1, z: -1 },
      { x: 1, y: 1, z: -1 },
      { x: -1, y: 1, z: -1 },
      { x: -1, y: -1, z: 1 },
      { x: 1, y: -1, z: 1 },
      { x: 1, y: 1, z: 1 },
      { x: -1, y: 1, z: 1 }
    ];

    const cubeEdges = [
      [0, 1], [1, 2], [2, 3], [3, 0], // back face
      [4, 5], [5, 6], [6, 7], [7, 4], // front face
      [0, 4], [1, 5], [2, 6], [3, 7]  // connection lines
    ];

    let cubeRotX = 0;
    let cubeRotY = 0;

    // Main animation loop
    const animate = () => {
      // Clear with background tone
      ctx.fillStyle = '#EFE5E0';
      ctx.fillRect(0, 0, width, height);

      // Smooth mouse coordinates
      const mouse = mouseRef.current;
      mouse.x += (mouse.targetX - mouse.x) * 0.08;
      mouse.y += (mouse.targetY - mouse.y) * 0.08;

      // Draw Glowing Blobs with high blur
      ctx.save();
      ctx.globalCompositeOperation = 'multiply';
      
      blobs.forEach((blob) => {
        // Parallax drift based on smoothed mouse
        const dx = (mouse.x - width / 2) * (blob.speed * 2);
        const dy = (mouse.y - height / 2) * (blob.speed * 2);
        
        blob.x += (blob.targetX + dx - blob.x) * 0.05;
        blob.y += (blob.targetY + dy - blob.y) * 0.05;

        // Random organic movement
        blob.targetX += (Math.random() - 0.5) * 1.5;
        blob.targetY += (Math.random() - 0.5) * 1.5;

        // Keep target within boundaries
        const margin = 100;
        if (blob.targetX < margin) blob.targetX = margin;
        if (blob.targetX > width - margin) blob.targetX = width - margin;
        if (blob.targetY < margin) blob.targetY = margin;
        if (blob.targetY > height - margin) blob.targetY = height - margin;

        // Radial Gradient representing soft glow
        const gradient = ctx.createRadialGradient(
          blob.x,
          blob.y,
          0,
          blob.x,
          blob.y,
          blob.radius
        );
        gradient.addColorStop(0, blob.color);
        gradient.addColorStop(0.5, blob.color.replace(/[\d\.]+\)$/, '0.15)'));
        gradient.addColorStop(1, 'rgba(239, 229, 224, 0)');

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(blob.x, blob.y, blob.radius, 0, Math.PI * 2);
        ctx.fill();
      });
      ctx.restore();

      // Render rotating abstract 3D wireframe cube
      cubeRotX += 0.002;
      cubeRotY += 0.0035;
      
      const cosX = Math.cos(cubeRotX);
      const sinX = Math.sin(cubeRotX);
      const cosY = Math.cos(cubeRotY);
      const sinY = Math.sin(cubeRotY);

      const rotated = cubeVertices.map(v => {
        // Y-axis rotation
        let x1 = v.x * cosY - v.z * sinY;
        let z1 = v.z * cosY + v.x * sinY;
        // X-axis rotation
        let y2 = v.y * cosX - z1 * sinX;
        let z2 = z1 * cosX + v.y * sinX;
        return { x: x1, y: y2, z: z2 };
      });

      // Position: bottom left with light parallax response
      const cubeCenterX = width * 0.15 + (mouse.x - width / 2) * 0.015;
      const cubeCenterY = height * 0.78 + (mouse.y - height / 2) * 0.015;
      const cubeScale = Math.min(width, height) * 0.09;

      const projected = rotated.map(v => {
        const dist = 3; // depth perspective
        const s = cubeScale * dist / (v.z + dist);
        return {
          x: v.x * s + cubeCenterX,
          y: v.y * s + cubeCenterY
        };
      });

      ctx.save();
      ctx.strokeStyle = 'rgba(212, 175, 55, 0.12)';
      ctx.lineWidth = 1.2;
      cubeEdges.forEach(edge => {
        const p1 = projected[edge[0]];
        const p2 = projected[edge[1]];
        ctx.beginPath();
        ctx.moveTo(p1.x, p1.y);
        ctx.lineTo(p2.x, p2.y);
        ctx.stroke();
      });
      ctx.restore();

      // Render & Update Particles
      ctx.fillStyle = '#111111';
      particles.forEach((p) => {
        // Ambient motion
        p.x += p.vx;
        p.y += p.vy;

        // Mouse repelling physics
        const dx = p.x - mouse.x;
        const dy = p.y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        
        if (dist < 150) {
          const force = (150 - dist) / 150;
          const angle = Math.atan2(dy, dx);
          
          p.x += Math.cos(angle) * force * 3;
          p.y += Math.sin(angle) * force * 3;
          p.alpha = Math.min(1, p.baseAlpha + force * 0.5);
        } else {
          p.alpha += (p.baseAlpha - p.alpha) * 0.05;
        }

        // Warp particle around screen borders
        if (p.y < -10) {
          p.y = height + 10;
          p.x = Math.random() * width;
        }
        if (p.x < -10) p.x = width + 10;
        if (p.x > width + 10) p.x = -10;

        // Draw particle
        ctx.globalAlpha = p.alpha;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      });
      
      ctx.globalAlpha = 1.0; // reset
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="fixed inset-0 w-screen h-screen -z-20 pointer-events-none"
    />
  );
};
