import { useEffect, useState } from 'react';
import { Heart, Calendar } from 'lucide-react';

export default function CountdownSection() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date('2025-02-14T00:00:00');

    const calculateTimeLeft = () => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="min-h-screen py-16 md:py-24 px-4 relative overflow-hidden" data-testid="section-countdown">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/10" />
      
      <div className="relative max-w-4xl mx-auto space-y-12 md:space-y-16 text-center">
        <div className="space-y-4 md:space-y-6 animate-fade-in">
          <Calendar className="w-12 h-12 md:w-16 md:h-16 text-primary mx-auto animate-pulse" />
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-foreground px-4" data-testid="text-countdown-title">
            До нашей встречи
          </h2>
          <p className="font-sans text-lg md:text-xl text-muted-foreground px-4">
            Каждая секунда приближает нас друг к другу
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {[
            { label: 'Дней', value: timeLeft.days },
            { label: 'Часов', value: timeLeft.hours },
            { label: 'Минут', value: timeLeft.minutes },
            { label: 'Секунд', value: timeLeft.seconds },
          ].map((item, index) => (
            <div
              key={item.label}
              className="space-y-3 md:space-y-4 p-4 md:p-8 bg-card/50 backdrop-blur-sm rounded-2xl border border-card-border hover-elevate"
              style={{ animationDelay: `${index * 0.1}s` }}
              data-testid={`countdown-${item.label.toLowerCase()}`}
            >
              <div className="font-serif text-4xl sm:text-5xl md:text-6xl text-primary font-bold" data-testid={`text-countdown-${item.label.toLowerCase()}`}>
                {item.value.toString().padStart(2, '0')}
              </div>
              <div className="font-sans text-xs md:text-sm text-muted-foreground uppercase tracking-wider">
                {item.label}
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center gap-4 pt-8">
          <Heart className="text-primary w-8 h-8 animate-heartbeat" />
          <Heart className="text-primary w-8 h-8 animate-heartbeat" style={{ animationDelay: '0.3s' }} />
          <Heart className="text-primary w-8 h-8 animate-heartbeat" style={{ animationDelay: '0.6s' }} />
        </div>
      </div>
    </section>
  );
}
