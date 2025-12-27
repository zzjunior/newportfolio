"use client";

import { useEffect, useRef, useState } from "react";
import { useTheme } from "next-themes";

interface ParticlesProps {
  className?: string;
  quantity?: number;
}

export default function Particles({
  className = "",
  quantity = 100,
}: ParticlesProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Define tamanho do canvas
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: Particle[] = [];
    const mouse = { x: 0, y: 0 }; // Posição do mouse

    // Cria partículas
    for (let i = 0; i < quantity; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.2,
        vy: (Math.random() - 0.5) * 0.2,
        size: Math.random() * 2 + 0.3,
        opacity: Math.random() * 0.5 + 0.3,
        twinkleSpeed: Math.random() * 0.02 + 0.005,
      });
    }

    // Animação
    let animationId: number;
    let time = 0;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p) => {
        // Efeito de parallax suave baseado na posição do mouse
        const dx = (mouse.x - canvas.width / 2) * 0.02;
        const dy = (mouse.y - canvas.height / 2) * 0.02;

        p.x += p.vx;
        p.y += p.vy;

        // Reinicia partícula quando sai da tela
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        // Efeito de piscar suave (twinkle)
        const twinkle = Math.sin(time * p.twinkleSpeed) * 0.3 + 0.7;
        const opacity = p.opacity * twinkle;

        ctx.fillStyle = theme === "dark" 
          ? `rgba(255, 255, 255, ${opacity})` 
          : `rgba(106, 90, 205, ${opacity})`;

        ctx.beginPath();
        // Desenha com offset de parallax
        ctx.arc(p.x + dx, p.y + dy, p.size, 0, Math.PI * 2);
        ctx.fill();
      });

      time++;
      animationId = requestAnimationFrame(animate);
    };

    animate();

    // Captura movimento do mouse
    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    // Resize handler
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
    };
  }, [quantity, theme, mounted]);

  return (
    <div className={className}>
      <canvas ref={canvasRef} className="pointer-events-none" />
    </div>
  );
}

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  twinkleSpeed: number;
}