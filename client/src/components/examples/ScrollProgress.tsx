import ScrollProgress from '../ScrollProgress';

export default function ScrollProgressExample() {
  return (
    <>
      <ScrollProgress />
      <div className="h-[300vh] p-8">
        <p className="text-xl text-muted-foreground">Scroll down to see the progress bar</p>
      </div>
    </>
  );
}
