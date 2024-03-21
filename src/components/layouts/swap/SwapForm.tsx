'use client';

import Image from 'next/image';
import React, { useState } from 'react';

import Dropdown from '@/components/ui/dropdown';
import Input from '@/components/ui/input';

import bitcoin from '@public/images/satochain/bitcoin.png';
import dropdown from '@public/images/satochain/dropown.png';
import repeat from '@public/images/satochain/repeat.png';
import setting from '@public/images/satochain/setting.png';

import Button from '../../ui/button';

type Props = {};

const SwapForm = (props: Props) => {
  const [revert, setRevert] = useState<boolean>(false);
  return (
    <div className="bg-lin--grey mx-auto max-w-[630px] rounded-2xl border border-solid border-white/[0.16] p-10">
      <div className=" flex items-center justify-between">
        <h1 className="text-[45px]/[127%] font-black text-white">Swap</h1>
        <Image src={setting.src} width={32} height={32} alt="setting" />
      </div>
      <div className="mt-6">
        <label className="font-semibold text-[#888]" htmlFor="from">
          From
        </label>
        <div className="mt-1 flex items-center justify-between rounded-lg border border-solid border-[#888] bg-[rgba(247,99,12,0.08)] p-4 opacity-80">
          <div className="w-[130px]">
            <Dropdown.Root>
              <Dropdown.Trigger className="w-full">
                <div className="flex h-10 w-full items-center justify-center gap-4 rounded-lg border border-solid border-white/[0.16] px-2">
                  <Image
                    src={bitcoin.src}
                    width={24}
                    height={24}
                    alt="bitcoin"
                  />
                  <span className="text-white">sBTC</span>
                  <Image
                    src={dropdown.src}
                    width={24}
                    height={24}
                    alt="bitcoin"
                  />
                </div>
              </Dropdown.Trigger>
              <Dropdown.Content>
                <Dropdown.Group>
                  <span>test</span>
                </Dropdown.Group>
              </Dropdown.Content>
            </Dropdown.Root>
          </div>
          <div>
            <Input
              className="text-right text-[28px]/[36px] font-extrabold text-white/[0.87]"
              placeholder="0"
              variant="none"
            />
          </div>
        </div>
      </div>
      <div className="mt-6 flex items-center justify-center">
        <div className="flex h-10 w-10 items-center justify-center rounded border border-solid border-white/[0.1]">
          <Image src={repeat.src} width={18} height={20} alt="repeat" />
        </div>
      </div>
      <div className="mt-2">
        <label className="font-semibold text-[#888]" htmlFor="from">
          To
        </label>
        <div className="mt-1 flex items-center justify-between rounded-lg border border-solid border-[#888] bg-[rgba(247,99,12,0.08)] p-4 opacity-80">
          <div className="w-[130px]">
            <Dropdown.Root>
              <Dropdown.Trigger className="w-full">
                <div className="flex h-10 w-full items-center justify-center gap-4 rounded-lg border border-solid border-white/[0.16] px-2">
                  <Image
                    src={bitcoin.src}
                    width={24}
                    height={24}
                    alt="bitcoin"
                  />
                  <span className="text-white">sBTC</span>
                  <Image
                    src={dropdown.src}
                    width={24}
                    height={24}
                    alt="bitcoin"
                  />
                </div>
              </Dropdown.Trigger>
              <Dropdown.Content>
                <Dropdown.Group>
                  <span>test</span>
                </Dropdown.Group>
              </Dropdown.Content>
            </Dropdown.Root>
          </div>
          <div>
            <Input
              className="text-right text-[28px]/[36px] font-extrabold text-white/[0.87]"
              placeholder="0"
              variant="none"
            />
          </div>
        </div>
      </div>
      <div className="mt-10 flex flex-col gap-2 rounded-lg bg-white/[0.06] px-4 py-[10px]">
        <div className="flex items-center justify-between">
          <span className="text-sm/[20px] tracking-[0.25px] text-white/[0.48]">
            Exchange rate
          </span>
          <span className="text-sm/[20px] tracking-[0.1px]  text-white/[0.87]">
            -
          </span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-sm/[20px] tracking-[0.25px] text-white/[0.48]">
            Gas fee
          </span>
          <span className="text-sm/[20px] tracking-[0.1px]  text-white/[0.87]">
            0.00001 sBTC
          </span>
        </div>
      </div>
      <Button className="mt-10 w-full">Connect</Button>
    </div>
  );
};

export default SwapForm;
