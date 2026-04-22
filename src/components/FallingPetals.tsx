import React, { useEffect, useRef } from 'react';

const PETAL_COLORS = [
  'rgba(255,255,255,0.75)',   // jasmine white
  'rgba(255,215,0,0.55)',     // marigold gold
  'rgba(192,57,43,0.5)',      // red petal
  'rgba(255,220,100,0.6)',    // yellow marigold
  'rgba(255,200,200,0.5)',    // blush pink
];

const FallingPetals: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    class Petal {
      x: number = 0;
      y: number = 0;
      size: number = 0;
      color: string = '';
      speedY: number = 0;
      speedX: number = 0;
      rotation: number = 0;
      rotationSpeed: number = 0;
      wobble: number = 0;
      wobbleSpeed: number = 0;
      opacity: number = 0;

      constructor() {
        this.reset(true);
      }

      reset(initial: boolean) {
        this.x = Math.random() * canvas!.width;
        this.y = initial ? Math.random() * canvas!.height * -1 : -20;
        this.size = Math.random() * 8 + 4;
        this.color = PETAL_COLORS[Math.floor(Math.random() * PETAL_COLORS.length)];
        this.speedY = Math.random() * 1.2 + 0.4;
        this.speedX = (Math.random() - 0.5) * 0.8;
        this.rotation = Math.random() * Math.PI * 2;
        this.rotationSpeed = (Math.random() - 0.5) * 0.04;
        this.wobble = Math.random() * Math.PI * 2;
        this.wobbleSpeed = Math.random() * 0.03 + 0.01;
        this.opacity = Math.random() * 0.5 + 0.4;
      }

      update() {
        this.wobble += this.wobbleSpeed;
        this.x += this.speedX + Math.sin(this.wobble) * 0.5;
        this.y += this.speedY;
        this.rotation += this.rotationSpeed;
        if (this.y > canvas!.height + 20) this.reset(false);
      }

      draw() {
        ctx!.save();
        ctx!.translate(this.x, this.y);
        ctx!.rotate(this.rotation);
        ctx!.globalAlpha = this.opacity;
        ctx!.fillStyle = this.color;
        ctx!.beginPath();
        // Oval petal shape
        ctx!.ellipse(0, 0, this.size * 0.5, this.size, 0, 0, Math.PI * 2);
        ctx!.fill();
        ctx!.restore();
      }
    }

    const petals = Array.from({ length: 55 }, () => new Petal());

    const animatePetals = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      petals.forEach(p => {
        p.update();
        p.draw();
      });
      animationFrameId = requestAnimationFrame(animatePetals);
    };

    animatePetals();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} id="petal-canvas"></canvas>;
};

export default FallingPetals;
