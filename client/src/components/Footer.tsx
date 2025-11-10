import { Heart, Github } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-12 md:py-16 px-4 bg-card border-t border-card-border" data-testid="section-footer">
      <div className="max-w-4xl mx-auto text-center space-y-6">
        <div className="flex items-center justify-center gap-2 flex-wrap">
          <Heart className="text-primary w-5 h-5 md:w-6 md:h-6 animate-heartbeat" />
          <p className="font-script text-2xl md:text-3xl text-foreground">
            С любовью
          </p>
          <Heart className="text-primary w-5 h-5 md:w-6 md:h-6 animate-heartbeat" style={{ animationDelay: '0.5s' }} />
        </div>

        <p className="font-sans text-sm md:text-base text-muted-foreground px-4">
          Создано специально для Валерии
        </p>

        <div className="pt-4">
          <a
            href="https://github.com/labstfot-commits/lerochkinaotrkitka"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            data-testid="link-github"
          >
            <Github className="w-5 h-5" />
            <span className="font-sans text-sm">View on GitHub</span>
          </a>
        </div>

        <div className="pt-8 text-xs text-muted-foreground/60 font-sans">
          {new Date().getFullYear()} • Made with love
        </div>
      </div>
    </footer>
  );
}
