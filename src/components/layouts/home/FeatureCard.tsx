import Image from 'next/image';
import React from 'react';

import { TFeature } from './Features';

type Props = TFeature;

const FeatureCard = ({ description, image, title }: Props) => {
  return (
    <div className="flex flex-col items-center px-8 py-7">
      <Image src={image} width={230} height={230} alt={image} />
      <div className="mt-5 flex flex-col items-center gap-6">
        <span className="text-lin text-center text-[28px]/[36px] font-extrabold">
          {title}
        </span>
        <span className="text-center text-base/[24px] tracking-[0.5px] text-white/[0.82]">
          {description}
        </span>
      </div>
    </div>
  );
};

export default FeatureCard;
