import { Card } from '@/components/ui/card';
import { Heart } from 'lucide-react';

const confessions = [
  {
    id: 1,
    text: 'Ты вдохновляешь меня становиться лучше каждый день',
    rotation: -2,
  },
  {
    id: 2,
    text: 'Твой талант и страсть к искусству завораживают',
    rotation: 3,
  },
  {
    id: 3,
    text: 'Я мечтаю услышать твой смех вживую',
    rotation: -1,
  },
  {
    id: 4,
    text: 'Расстояние делает моё сердце биться сильнее',
    rotation: 2,
  },
  {
    id: 5,
    text: 'Каждый день думаю о том, как прекрасна наша встреча',
    rotation: -3,
  },
  {
    id: 6,
    text: 'Ты — самое яркое, что случилось в моей жизни',
    rotation: 1,
  },
];

export default function ConfessionWall() {
  return (
    <section className="min-h-screen py-24 px-4 bg-card" data-testid="section-confessions">
      <div className="max-w-6xl mx-auto space-y-16">
        <div className="text-center space-y-4 animate-fade-in">
          <Heart className="w-12 h-12 text-primary mx-auto" />
          <h2 className="font-serif text-4xl md:text-5xl text-foreground" data-testid="text-confessions-title">
            Что я чувствую
          </h2>
          <p className="font-sans text-xl text-muted-foreground max-w-2xl mx-auto">
            Каждая записка — это частичка моего сердца
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {confessions.map((confession, index) => (
            <Card
              key={confession.id}
              className="p-8 hover-elevate transition-all duration-300 cursor-pointer group"
              style={{
                transform: `rotate(${confession.rotation}deg)`,
                animationDelay: `${index * 0.15}s`,
              }}
              data-testid={`card-confession-${confession.id}`}
            >
              <div className="space-y-4">
                <Heart className="w-6 h-6 text-primary opacity-50 group-hover:opacity-100 transition-opacity" />
                <p className="font-script text-2xl text-foreground leading-relaxed" data-testid={`text-confession-${confession.id}`}>
                  {confession.text}
                </p>
                <Heart className="w-6 h-6 text-primary opacity-50 group-hover:opacity-100 transition-opacity ml-auto" />
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
