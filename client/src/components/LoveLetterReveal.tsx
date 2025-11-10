import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Mail, Heart } from 'lucide-react';

export default function LoveLetterReveal() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="min-h-screen py-16 md:py-24 px-4 flex items-center justify-center bg-accent/20" data-testid="section-love-letter">
      <div className="max-w-2xl w-full">
        <div className="text-center space-y-6 md:space-y-8 mb-8 md:mb-12 animate-fade-in">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-foreground px-4" data-testid="text-letter-title">
            Письмо для тебя
          </h2>
          <p className="font-sans text-lg md:text-xl text-muted-foreground px-4">
            Нажми, чтобы открыть
          </p>
        </div>

        <div className="relative perspective-1000">
          <Card
            className={`cursor-pointer transition-all duration-700 transform ${
              isOpen ? 'rotate-0 scale-100' : 'rotate-0 scale-95'
            } hover-elevate`}
            onClick={() => setIsOpen(!isOpen)}
            data-testid="card-love-letter"
          >
            {!isOpen ? (
              <div className="p-8 md:p-12 text-center space-y-6">
                <Mail className="w-20 h-20 md:w-24 md:h-24 text-primary mx-auto animate-pulse" />
                <p className="font-script text-2xl md:text-3xl text-foreground">
                  Валерия
                </p>
                <p className="font-sans text-base md:text-lg text-muted-foreground">
                  Нажми, чтобы прочитать
                </p>
              </div>
            ) : (
              <div className="p-6 md:p-8 space-y-6 animate-fade-in" data-testid="content-letter">
                <div className="flex items-center justify-between">
                  <Heart className="text-primary w-6 h-6 md:w-8 md:h-8" />
                  <Heart className="text-primary w-6 h-6 md:w-8 md:h-8" />
                </div>
                
                <div className="space-y-4 md:space-y-6 font-sans text-base md:text-lg leading-relaxed text-foreground/90">
                  <p className="font-script text-2xl md:text-3xl text-primary mb-4">
                    Моя дорогая Валерия,
                  </p>
                  
                  <p>
                    Пишу тебе это письмо, хотя мы ещё не встречались. Но иногда сердце знает больше, чем глаза. 
                    И моё сердце уже давно знает, что ты особенная.
                  </p>
                  
                  <p>
                    Я восхищаюсь твоим талантом, твоей способностью видеть красоту и создавать её. 
                    Художница — это не просто профессия, это способ видеть мир. И я хочу научиться видеть его твоими глазами.
                  </p>
                  
                  <p>
                    Расстояние между нами — это всего лишь временное препятствие. Главное — это то, что мы нашли друг друга, 
                    и что каждый день я жду того момента, когда смогу увидеть твою улыбку вживую.
                  </p>
                  
                  <p className="font-script text-xl md:text-2xl text-primary pt-4">
                    С любовью и нетерпением,
                    <br />
                    Твой
                  </p>
                </div>

                <div className="flex items-center justify-between pt-4">
                  <Heart className="text-primary w-6 h-6 md:w-8 md:h-8" />
                  <Heart className="text-primary w-6 h-6 md:w-8 md:h-8" />
                </div>
              </div>
            )}
          </Card>
        </div>
      </div>
    </section>
  );
}
