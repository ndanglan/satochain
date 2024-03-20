import Image from 'next/image';
import { useMemo } from 'react';

import FeatureCard from '@/components/layouts/home/FeatureCard';
import { EZIndexDecoration } from '@/enum';

import feature_1 from '@public/images/satochain/feature_1.png';
import feature_2 from '@public/images/satochain/feature_2.png';
import feature_3 from '@public/images/satochain/feature_3.png';
import planet from '@public/images/satochain/planet.png';

type Props = {};

export type TFeature = {
  image: string;
  title: string;
  description: string;
};

const Features = (props: Props) => {
  const features = useMemo<TFeature[]>(
    () => [
      {
        image: feature_1.src,
        title: 'Smart Contract',
        description:
          "The consensus mechanism linking Satochain with Bitcoin, enabling applications to utilize Bitcoin's security.",
      },
      {
        image: feature_2.src,
        title: 'Bitcoin DeFi',
        description:
          'Satochain brings DeFi to Bitcoin, unlocking over $300 billion in capital and setting the stage for activation of the Bitcoin economy.',
      },
      {
        image: feature_3.src,
        title: 'Bitcoin NFTs',
        description:
          "Satochain launches DeFi on Bitcoin, releasing over $300 billion in funds and catalyzing the Bitcoin economy's growth",
      },
    ],
    [],
  );
  return (
    <div
      className={`relative mt-72 ${EZIndexDecoration['a']}  min-h-[600px] w-full`}
    >
      <div className="container absolute left-1/2 z-[2] mx-auto flex w-full -translate-x-1/2 flex-col items-center gap-6">
        <span className="text-[45px]/[127%] font-black text-white">
          Features
        </span>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 ">
          {features.map((feature, index) => {
            return <FeatureCard {...feature} key={index} />;
          })}
        </div>
      </div>
      <Image
        src={planet.src}
        width={1440}
        height={1440}
        alt={'planet'}
        className="absolute left-0 top-0 z-[1] w-full -translate-y-1/3"
      />
    </div>
  );
};

export default Features;
