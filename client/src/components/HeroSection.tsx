import { useEffect, useState } from 'react';
import { Heart } from 'lucide-react';
import heroBackground from '@assets/generated_images/Watercolor_hero_background_texture_674d282c.png';

export default function HeroSection() {
  const [hearts, setHearts] = useState<Array<{ id: number; x: number; delay: number }>>([]);

  useEffect(() => {
    const newHearts = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      delay: Math.random() * 5,
    }));
    setHearts(newHearts);
  }, []);

  const scrollToContent = () => {
    window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
  };

  return (
    <section 
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url(${heroBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
      data-testid="section-hero"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background/80" />
      
      {hearts.map((heart) => (
        <Heart
          key={heart.id}
          className="absolute text-primary/20 animate-float"
          style={{
            left: `${heart.x}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${heart.delay}s`,
            width: `${20 + Math.random() * 30}px`,
            height: `${20 + Math.random() * 30}px`,
          }}
        />
      ))}

      <div className="relative z-10 text-center px-4 space-y-6 md:space-y-8 animate-fade-in max-w-4xl mx-auto">
        <h1 
          className="font-script text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-primary animate-fade-in-up leading-tight"
          data-testid="text-hero-title"
        >
          Для Валерии
        </h1>
        
        <p 
          className="font-sans text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed px-2"
          style={{ animationDelay: '0.3s' }}
          data-testid="text-hero-subtitle"
        >
          Расстояние — это всего лишь числа между двумя сердцами,
          <br className="hidden sm:block" />
          <span className="sm:hidden"> </span>
          которые бьются в унисон
        </p>

        <button
          onClick={scrollToContent}
          className="mt-8 md:mt-12 px-6 py-3 md:px-8 md:py-4 bg-primary/90 hover-elevate active-elevate-2 text-primary-foreground rounded-full font-sans text-base md:text-lg backdrop-blur-md border border-primary-border transition-all duration-300 shadow-lg"
          style={{ animationDelay: '0.6s' }}
          data-testid="button-start-journey"
        >
          Начать путешествие
        </button>
      </div>

      <div className="absolute bottom-8 animate-bounce">
        <Heart className="text-primary w-6 h-6" />
      </div>
    </section>
  );
}
