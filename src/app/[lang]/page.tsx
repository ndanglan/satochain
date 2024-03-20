import Image from 'next/image';

import Providers from '@/components/Providers';
import Footer from '@/components/layouts/common/Footer';
import Navbar from '@/components/layouts/common/Navbar';
import Features from '@/components/layouts/home/Features';
import HeroSection from '@/components/layouts/home/HeroSection';
import Infomations from '@/components/layouts/home/Infomations';
import { EZIndexDecoration } from '@/enum';

import bg_gradient_left from '@public/images/satochain/bg_gradient_left.png';
import bg_gradient_right from '@public/images/satochain/bg_gradient_right.png';

export default function Home() {
  return (
    <Providers>
      <main className="relative flex min-h-screen flex-col overflow-hidden bg-white pb-[140px] dark:bg-black">
        <Navbar />
        <div className="container mx-auto">
          <HeroSection />
        </div>
        <Features />
        <Infomations />
        <Footer />
        <Image
          src={bg_gradient_left.src}
          width={228}
          height={228}
          alt="bg_gradient_left"
          className={`absolute left-0 top-0 ${EZIndexDecoration['a']}`}
        />
        <Image
          src={bg_gradient_right.src}
          width={975}
          height={875}
          alt="bg_gradient_right"
          className={`absolute right-0 top-0 ${EZIndexDecoration['a']}`}
        />
      </main>
    </Providers>
  );
}
