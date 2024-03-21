import Footer from '@/components/layouts/common/Footer';
import Features from '@/components/layouts/home/Features';
import HeroSection from '@/components/layouts/home/HeroSection';
import Infomations from '@/components/layouts/home/Infomations';

export default function Home() {
  return (
    <>
      <div className="container mx-auto">
        <HeroSection />
      </div>
      <Features />
      <Infomations />
      <Footer />
    </>
  );
}
