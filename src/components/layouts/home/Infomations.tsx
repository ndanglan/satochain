import Image from 'next/image';
import React, { ReactNode, useMemo } from 'react';

import Button from '@/components/ui/button';

import infomations_1 from '@public/images/satochain/information_1.png';
import infomations_2 from '@public/images/satochain/information_2.png';
import infomations_3 from '@public/images/satochain/information_3.png';
import tick from '@public/images/satochain/tick.png';

export type TInformation = {
  image: string;
  title: string;
  content: ReactNode;
  position: 'left' | 'right';
};

const Infomations = () => {
  const infomations = useMemo<TInformation[]>(
    () => [
      {
        image: infomations_1.src,
        title: 'sBTC: Unlocking Bitcoin by Satochain',
        content: (
          <ul className="flex flex-col items-start gap-3">
            <li className="flex items-center gap-2">
              <Image src={tick.src} width={26} height={20} alt="information" />
              <span className="text-base/[24px] tracking-[0.5px] text-white">
                Trust-minimized
              </span>
            </li>
            <li className="flex items-center gap-2">
              <Image src={tick.src} width={26} height={20} alt="information" />
              <span className="text-base/[24px] tracking-[0.5px] text-white">
                Decentralized
              </span>
            </li>
            <li className="flex items-center gap-2">
              <Image src={tick.src} width={26} height={20} alt="information" />
              <span className="text-base/[24px] tracking-[0.5px] text-white">
                Censorship resistant
              </span>
            </li>
          </ul>
        ),
        position: 'left',
      },
      {
        image: infomations_2.src,
        title: 'Earn BTC by participating as validators',
        content: (
          <div className="mt-6">
            <span className="text-base/[24px] tracking-[0.5px] text-white/[0.82]">
              Hold and temporarily secure BTC, Satochain`s native currency, to
              bolster the network`s security and consensus. Over 2000 bitcoins
              have been allocated as consensus rewards
            </span>
            <Button className="mt-10" variant={'outline'}>
              Mint your key now
            </Button>
          </div>
        ),
        position: 'right',
      },
      {
        image: infomations_3.src,
        title: 'Build powerful apps, secured by Bitcoin',
        content: (
          <div className="mt-6">
            <span className="text-base/[24px] tracking-[0.5px] text-white/[0.82]">
              Transactions on the Satochain layer are automatically finalized on
              Bitcoin, allowing for the creation of apps and digital assets that
              are integrated with the robust security of Bitcoin.
            </span>
            <Button className="mt-10" variant={'outline'}>
              Start Building
            </Button>
          </div>
        ),
        position: 'left',
      },
    ],
    [],
  );
  return (
    <div className=" flex flex-col items-center pb-36">
      {infomations.map((item, index) => {
        return (
          <div
            key={item.title}
            className={`relative w-full ${index > 0 ? 'pt-[300px]' : 'pt-[600px]'}`}
          >
            <div className="grid w-full  grid-cols-1 items-center gap-8 md:grid-cols-2">
              <div
                className={`relative ${item.position === 'left' ? 'order-1' : 'order-2'} h-full`}
              >
                <Image
                  src={item.image}
                  width={600}
                  height={600}
                  alt="information"
                  className="absolute left-0 top-0 w-full -translate-y-1/3"
                />
              </div>
              <div
                className={`${item.position === 'left' ? 'order-2' : 'order-1'}`}
              >
                <div
                  className={`linear_card max-w-[584px] ${item.position === 'left' ? 'float-left' : 'float-right'}`}
                >
                  <span className="text-lin text-[45px]/[127%] font-black">
                    {item.title}
                  </span>
                  <div className="mt-[72px]">{item.content}</div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Infomations;
