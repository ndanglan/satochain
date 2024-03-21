import Image from 'next/image';
import React from 'react';

import Button from '@/components/ui/button';
import Input from '@/components/ui/input';

import bitcoin from '@public/images/satochain/bitcoin.png';

type Props = {};

const FaucetForm = (props: Props) => {
  return (
    <div className="max-w-[480px]">
      <h1 className="text-[45px]/[127%] font-black text-white">
        Bootstrap Your <br /> Testnet Wallet
      </h1>
      <div className="mt-6 flex w-full items-center gap-3">
        <span className="text-xl/[30px] tracking-[0.5px] text-white/[0.82]">
          Fund your testnet wallet with
        </span>
        <div className="flex items-center gap-2">
          <Image src={bitcoin.src} width={32} height={32} alt="bitcoin" />
          <span className="text-xl/[30px] tracking-[0.5px] text-white/[0.82]">
            sBTC
          </span>
        </div>
      </div>
      <div className="mt-10">
        <Input label="Wallet Address" placeholder="Fill..." />
      </div>
      <Button className="mt-12 w-full">Confirm</Button>
      <p className="mt-20 text-white/[0.82]">
        To ensure a sufficient balance for all users, the Faucet is set to
        dispense 0.001 testnet sBTC tokens for each wallet
      </p>
    </div>
  );
};

export default FaucetForm;
