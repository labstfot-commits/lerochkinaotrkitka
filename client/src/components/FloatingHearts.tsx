import { useEffect, useState } from 'react';
import { Heart } from 'lucide-react';

interface HeartParticle {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
}

export default function FloatingHearts() {
  const [hearts, setHearts] = useState<HeartParticle[]>([]);

  useEffect(() => {
    let heartId = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const newHeart: HeartParticle = {
        id: heartId++,
        x: e.clientX,
        y: e.clientY,
        size: 12 + Math.random() * 8,
        opacity: 0.6,
      };

      setHearts((prev) => [...prev.slice(-15), newHeart]);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setHearts((prev) =>
        prev
          .map((heart) => ({
            ...heart,
            y: heart.y - 2,
            opacity: heart.opacity - 0.02,
          }))
          .filter((heart) => heart.opacity > 0)
      );
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {hearts.map((heart) => (
        <Heart
          key={heart.id}
          className="absolute text-primary transition-all duration-100"
          style={{
            left: `${heart.x}px`,
            top: `${heart.y}px`,
            width: `${heart.size}px`,
            height: `${heart.size}px`,
            opacity: heart.opacity,
            transform: 'translate(-50%, -50%)',
          }}
        />
      ))}
    </div>
  );
}
