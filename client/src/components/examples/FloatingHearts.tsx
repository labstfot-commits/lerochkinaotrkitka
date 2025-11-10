import FloatingHearts from '../FloatingHearts';

export default function FloatingHeartsExample() {
  return (
    <div className="h-screen flex items-center justify-center bg-background">
      <p className="text-2xl text-muted-foreground">Move your mouse to see hearts</p>
      <FloatingHearts />
    </div>
  );
}
