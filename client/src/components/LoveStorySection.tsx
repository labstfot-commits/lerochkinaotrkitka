import { useEffect, useState } from 'react';
import { Paintbrush } from 'lucide-react';

const storyParagraphs = [
  "Валерия, каждый день я думаю о тебе, хотя мы ещё ни разу не виделись. Но разве расстояние может помешать двум сердцам найти друг друга?",
  "Ты — художница, создающая красоту своими руками. А я — человек, который мечтает однажды увидеть, как ты творишь, как улыбаешься, погружённая в свой мир искусства.",
  "Я представляю, как мы гуляем вместе, как делимся мыслями, как смеёмся над чем-то, понятным только нам двоим. Это кажется таким близким и таким далёким одновременно.",
  "Но я верю, что наша встреча — это вопрос времени. И каждый день приближает нас к тому моменту, когда я смогу сказать тебе всё это лично, глядя в твои глаза.",
];

export default function LoveStorySection() {
  const [visibleParagraphs, setVisibleParagraphs] = useState<number[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setVisibleParagraphs((prev) => {
              if (prev.includes(index)) return prev;
              return [...prev, index];
            });
          }
        });
      },
      { threshold: 0.3 }
    );

    document.querySelectorAll('[data-paragraph]').forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="min-h-screen py-24 px-4 relative overflow-hidden" data-testid="section-love-story">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/10 to-primary/5" />
      
      <div className="relative max-w-4xl mx-auto space-y-16">
        <div className="text-center space-y-4 animate-fade-in">
          <Paintbrush className="w-12 h-12 text-primary mx-auto" />
          <h2 className="font-serif text-4xl md:text-5xl text-foreground" data-testid="text-story-title">
            История, написанная сердцем
          </h2>
        </div>

        <div className="space-y-12">
          {storyParagraphs.map((paragraph, index) => (
            <p
              key={index}
              data-paragraph
              data-index={index}
              className={`font-sans text-xl md:text-2xl text-foreground/90 leading-relaxed text-center transition-all duration-1000 ${
                visibleParagraphs.includes(index)
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 0.2}s` }}
              data-testid={`text-story-paragraph-${index}`}
            >
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
