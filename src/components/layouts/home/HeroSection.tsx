'use client';

import Image from 'next/image';

import Button from '@/components/ui/button';
import { EZIndexDecoration } from '@/enum';

import arrow_right from '@public/images/satochain/arrow_right.png';
import hero_right from '@public/images/satochain/hero_right.png';

const HeroSection = () => {
  return (
    <section className="relative z-[2] grid grid-cols-2 gap-7">
      <div className="flex  flex-col items-start gap-7 pb-32 pt-28">
        <span className="text-16/[127%] font-black tracking-[-0.25px] text-white">
          Build for Bitcoin
        </span>
        <span className="text-xl/[30px] tracking-[0.5px] text-white/[0.82]">
          Enhance Bitcoin`s economy using secure,
          <br /> Bitcoin-based apps and smart contracts.
        </span>
        <Button
          size={'lg'}
          className="mt-3 text-base/[36px]  font-bold tracking-[0.15px]"
          rightIcon={
            <Image
              src={arrow_right.src}
              width={32}
              height={32}
              alt="arrow_right"
            />
          }
        >
          Mint Entry Key
        </Button>
      </div>
      <div className={`relative ${EZIndexDecoration['b']} pb-32 pt-28`}>
        <Image
          src={hero_right.src}
          width={588}
          height={638}
          alt="hero_right"
          className={`absolute left-2 top-0 ${EZIndexDecoration['b']}`}
        />
      </div>
    </section>
  );
};

export default HeroSection;
