import HeroSection from '@/components/HeroSection';
import LoveStorySection from '@/components/LoveStorySection';
import ArtInspiration from '@/components/ArtInspiration';
import DreamsGallery from '@/components/DreamsGallery';
import CountdownSection from '@/components/CountdownSection';
import LoveLetterReveal from '@/components/LoveLetterReveal';
import ConfessionWall from '@/components/ConfessionWall';
import FloatingHearts from '@/components/FloatingHearts';
import MusicPlayer from '@/components/MusicPlayer';
import ScrollProgress from '@/components/ScrollProgress';
import Footer from '@/components/Footer';

export default function Valentine() {
  return (
    <div className="relative">
      <ScrollProgress />
      <FloatingHearts />
      <MusicPlayer />
      
      <HeroSection />
      <LoveStorySection />
      <ArtInspiration />
      <DreamsGallery />
      <CountdownSection />
      <LoveLetterReveal />
      <ConfessionWall />
      <Footer />
    </div>
  );
}
