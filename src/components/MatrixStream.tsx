'use client';

import { useEffect, useRef } from 'react';

export default function MatrixStream() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    const chars = '01AI_YOLO_PYTORCH_CUDA_TENSOR_RAG_NN_TINYML_9876543210';
    const fontSize = 11;
    const columns = Math.floor(width / fontSize);
    const drops: number[] = Array.from({ length: columns }, () => Math.floor(Math.random() * -100));

    const render = () => {
      ctx.fillStyle = 'rgba(3, 4, 8, 0.08)';
      ctx.fillRect(0, 0, width, height);

      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        // Only render matrix rain on the far left 15% and far right 15% of viewport to avoid covering main content
        const xPos = i * fontSize;
        const isEdgeColumn = xPos < width * 0.12 || xPos > width * 0.88;

        if (isEdgeColumn) {
          const char = chars[Math.floor(Math.random() * chars.length)];
          const yPos = drops[i] * fontSize;

          ctx.fillStyle = Math.random() > 0.85 ? '#ffffff' : '#00f3ff';
          ctx.globalAlpha = Math.random() * 0.7 + 0.3;
          ctx.fillText(char, xPos, yPos);
          ctx.globalAlpha = 1;
        }

        if (drops[i] * fontSize > height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-[1] opacity-60"
    />
  );
}
