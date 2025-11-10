import { useState } from 'react';
import { Music, Volume2, VolumeX } from 'lucide-react';

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleMusic = () => {
    setIsPlaying(!isPlaying);
    console.log(isPlaying ? 'Music paused' : 'Music playing');
  };

  return (
    <div className="fixed top-3 right-3 md:top-4 md:right-4 z-50">
      <button
        onClick={toggleMusic}
        className="p-3 md:p-4 bg-primary/90 hover-elevate active-elevate-2 text-primary-foreground rounded-full backdrop-blur-md border border-primary-border shadow-lg transition-all duration-300"
        data-testid="button-music-toggle"
        aria-label={isPlaying ? 'Pause music' : 'Play music'}
      >
        {isPlaying ? (
          <Volume2 className="w-5 h-5 md:w-6 md:h-6 animate-pulse" />
        ) : (
          <VolumeX className="w-5 h-5 md:w-6 md:h-6" />
        )}
      </button>
      
      {isPlaying && (
        <div className="hidden md:block absolute top-full right-0 mt-2 px-4 py-2 bg-card/90 backdrop-blur-md rounded-lg border border-card-border text-sm font-sans text-muted-foreground whitespace-nowrap">
          <Music className="w-4 h-4 inline mr-2" />
          Romantic melody playing...
        </div>
      )}
    </div>
  );
}
