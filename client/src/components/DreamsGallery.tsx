import { Card } from '@/components/ui/card';
import walkingImage from '@assets/generated_images/Couple_walking_together_illustration_b0a7be79.png';
import artistImage from '@assets/generated_images/Artist_at_easel_illustration_b7f5bcb5.png';
import coffeeImage from '@assets/generated_images/Coffee_moment_illustration_a1ddfb6c.png';
import cityImage from '@assets/generated_images/City_sunset_illustration_6d3a5266.png';
import galleryImage from '@assets/generated_images/Gallery_visit_illustration_e2fa8d21.png';
import umbrellaImage from '@assets/generated_images/Umbrella_rain_illustration_73250f83.png';

const dreams = [
  {
    id: 1,
    title: 'Первая встреча',
    description: 'Когда мы наконец встретимся и пойдём гулять вместе',
    image: walkingImage,
  },
  {
    id: 2,
    title: 'Смотреть, как ты творишь',
    description: 'Наблюдать за тем, как рождается искусство в твоих руках',
    image: artistImage,
  },
  {
    id: 3,
    title: 'Кофе и разговоры',
    description: 'Часы бесед в уютном кафе, где время останавливается',
    image: coffeeImage,
  },
  {
    id: 4,
    title: 'Закаты вместе',
    description: 'Любоваться красотой мира, стоя рядом',
    image: cityImage,
  },
  {
    id: 5,
    title: 'Искусство и вдохновение',
    description: 'Вместе исследовать галереи и музеи',
    image: galleryImage,
  },
  {
    id: 6,
    title: 'Под одним зонтом',
    description: 'Даже дождь станет романтичным, когда мы вместе',
    image: umbrellaImage,
  },
];

export default function DreamsGallery() {
  return (
    <section className="min-h-screen py-24 px-4 bg-card" data-testid="section-dreams">
      <div className="max-w-6xl mx-auto space-y-16">
        <div className="text-center space-y-4 animate-fade-in">
          <h2 className="font-serif text-4xl md:text-5xl text-foreground" data-testid="text-dreams-title">
            Мечты о нашей встрече
          </h2>
          <p className="font-sans text-xl text-muted-foreground max-w-2xl mx-auto">
            Всё, о чём я думаю, представляя наше будущее вместе
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {dreams.map((dream, index) => (
            <Card
              key={dream.id}
              className="group overflow-hidden hover-elevate cursor-pointer transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
              data-testid={`card-dream-${dream.id}`}
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={dream.image}
                  alt={dream.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent" />
              </div>
              <div className="p-6 space-y-2">
                <h3 className="font-serif text-2xl text-foreground" data-testid={`text-dream-title-${dream.id}`}>
                  {dream.title}
                </h3>
                <p className="font-sans text-muted-foreground" data-testid={`text-dream-description-${dream.id}`}>
                  {dream.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
