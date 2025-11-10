import { useState, useRef, useEffect } from 'react';
import { Palette, Brush, Sparkles } from 'lucide-react';
import { Card } from '@/components/ui/card';

interface BrushStroke {
  id: number;
  x: number;
  y: number;
  color: string;
}

const artQuotes = [
  "Каждый твой мазок кисти — это магия, превращающая холст в историю",
  "Твоё искусство показывает мир таким, каким я хочу его видеть — полным красоты",
  "Ты не просто рисуешь — ты создаёшь эмоции, которые невозможно выразить словами",
  "Наблюдать за твоим творчеством — это как слушать симфонию в красках",
];

const paintColors = [
  { name: 'Розовая нежность', color: 'hsl(340, 75%, 65%)' },
  { name: 'Лавандовая мечта', color: 'hsl(270, 50%, 70%)' },
  { name: 'Персиковая заря', color: 'hsl(20, 80%, 75%)' },
  { name: 'Небесная лазурь', color: 'hsl(200, 70%, 65%)' },
  { name: 'Золотой закат', color: 'hsl(45, 85%, 65%)' },
];

export default function ArtInspiration() {
  const [brushStrokes, setBrushStrokes] = useState<BrushStroke[]>([]);
  const [selectedColor, setSelectedColor] = useState(paintColors[0].color);
  const [isDrawing, setIsDrawing] = useState(false);
  const canvasRef = useRef<HTMLDivElement>(null);
  const strokeIdRef = useRef(0);

  const handleCanvasInteraction = (e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>) => {
    if (!isDrawing) return;

    const rect = canvasRef.current?.getBoundingClientRect();
    if (!rect) return;

    let clientX: number, clientY: number;
    
    if ('touches' in e) {
      clientX = e.touches[0].clientX;
      clientY = e.touches[0].clientY;
    } else {
      clientX = e.clientX;
      clientY = e.clientY;
    }

    const x = ((clientX - rect.left) / rect.width) * 100;
    const y = ((clientY - rect.top) / rect.height) * 100;

    const newStroke: BrushStroke = {
      id: strokeIdRef.current++,
      x,
      y,
      color: selectedColor,
    };

    setBrushStrokes((prev) => [...prev, newStroke]);
  };

  const clearCanvas = () => {
    setBrushStrokes([]);
  };

  return (
    <section className="min-h-screen py-16 md:py-24 px-4 bg-gradient-to-br from-accent/30 via-background to-primary/5" data-testid="section-art-inspiration">
      <div className="max-w-6xl mx-auto space-y-12 md:space-y-16">
        <div className="text-center space-y-4 md:space-y-6 animate-fade-in">
          <Palette className="w-12 h-12 md:w-16 md:h-16 text-primary mx-auto" />
          <h2 className="font-serif text-3xl md:text-5xl text-foreground px-4" data-testid="text-art-title">
            Твоё искусство вдохновляет меня
          </h2>
          <p className="font-sans text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
            Художница, которая видит мир по-особенному
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          <Card className="p-6 md:p-8 space-y-6 hover-elevate" data-testid="card-art-canvas">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <Brush className="w-6 h-6 text-primary" />
                <h3 className="font-serif text-xl md:text-2xl text-foreground">
                  Создадим что-то вместе
                </h3>
              </div>
              <button
                onClick={clearCanvas}
                className="px-4 py-2 text-sm bg-secondary hover-elevate active-elevate-2 text-secondary-foreground rounded-md border border-secondary-border w-full sm:w-auto"
                data-testid="button-clear-canvas"
              >
                Очистить холст
              </button>
            </div>

            <div className="flex flex-wrap gap-2 md:gap-3">
              {paintColors.map((paint) => (
                <button
                  key={paint.name}
                  onClick={() => setSelectedColor(paint.color)}
                  className={`w-10 h-10 md:w-12 md:h-12 rounded-full border-2 transition-all hover:scale-110 active:scale-95 ${
                    selectedColor === paint.color ? 'border-primary ring-2 ring-primary/20' : 'border-border'
                  }`}
                  style={{ backgroundColor: paint.color }}
                  aria-label={paint.name}
                  data-testid={`button-color-${paint.name.toLowerCase().replace(/\s/g, '-')}`}
                />
              ))}
            </div>

            <div
              ref={canvasRef}
              onMouseDown={() => setIsDrawing(true)}
              onMouseUp={() => setIsDrawing(false)}
              onMouseLeave={() => setIsDrawing(false)}
              onMouseMove={handleCanvasInteraction}
              onTouchStart={() => setIsDrawing(true)}
              onTouchEnd={() => setIsDrawing(false)}
              onTouchMove={handleCanvasInteraction}
              className="relative w-full h-64 md:h-80 bg-card/50 rounded-lg border-2 border-dashed border-border cursor-crosshair overflow-hidden touch-none"
              data-testid="canvas-drawing"
            >
              {brushStrokes.map((stroke) => (
                <div
                  key={stroke.id}
                  className="absolute w-3 h-3 md:w-4 md:h-4 rounded-full animate-fade-in"
                  style={{
                    left: `${stroke.x}%`,
                    top: `${stroke.y}%`,
                    backgroundColor: stroke.color,
                    transform: 'translate(-50%, -50%)',
                    boxShadow: `0 0 10px ${stroke.color}`,
                  }}
                />
              ))}
              {brushStrokes.length === 0 && (
                <div className="absolute inset-0 flex items-center justify-center text-muted-foreground text-sm md:text-base px-4 text-center">
                  Рисуй пальцем или мышкой — создай что-то особенное
                </div>
              )}
            </div>

            <p className="text-xs md:text-sm text-muted-foreground text-center">
              Этот холст — символ того, как мы можем создавать красоту вместе
            </p>
          </Card>

          <div className="space-y-6 md:space-y-8">
            {artQuotes.map((quote, index) => (
              <Card
                key={index}
                className="p-6 md:p-8 hover-elevate transition-all duration-300 group"
                style={{ animationDelay: `${index * 0.1}s` }}
                data-testid={`card-art-quote-${index}`}
              >
                <div className="space-y-4">
                  <Sparkles className="w-6 h-6 md:w-8 md:h-8 text-primary opacity-50 group-hover:opacity-100 transition-opacity" />
                  <p className="font-sans text-lg md:text-xl text-foreground leading-relaxed" data-testid={`text-art-quote-${index}`}>
                    {quote}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>

        <div className="mt-12 md:mt-16 text-center space-y-6 animate-fade-in">
          <p className="font-script text-2xl md:text-4xl text-primary">
            Каждая твоя картина — это окно в мир, который хочется исследовать вместе
          </p>
        </div>
      </div>
    </section>
  );
}
