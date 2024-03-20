import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import discord from '@public/images/satochain/discord.png';
import footer_earth from '@public/images/satochain/footer_earth.png';
import footer_puzzle from '@public/images/satochain/footer_puzzle.png';
import logo_white from '@public/images/satochain/logo_white.png';
import x from '@public/images/satochain/x.png';

const Footer = () => {
  return (
    <footer className="footer container z-10 mx-auto">
      <div className="bg-primary relative flex  w-full flex-col items-center justify-between gap-[100px] rounded-[48px] border-2 border-solid border-white  px-6">
        <Image
          src={footer_earth}
          alt="footer_earth"
          width={286}
          height={286}
          className="absolute left-8 top-1/2 -translate-y-1/2"
        />
        <Image
          src={footer_puzzle}
          alt="footer_puzzle"
          width={286}
          height={286}
          className="absolute right-8 top-1/3 -translate-y-1/2"
        />
        <div className="flex flex-col items-center gap-8 pt-16">
          <div className="flex items-center gap-3">
            <Image src={logo_white} alt="logo_white" width={39} height={56} />
            <span className="text-[28px]/[50px] font-bold text-white">
              Satochain
            </span>
          </div>
          <div className="flex flex-col items-center gap-6">
            <span className="text-[45px]/[127%] font-[900] text-white">
              Make Bitcoin mass adopt
            </span>
            <span className="text-base/[24px] tracking-[0.5px] text-white">
              Engage, collaborate, and connect with thousands of Satochainer
              globally.
            </span>
          </div>
          <div className="flex items-center gap-4 pt-2">
            <div className="flex items-center gap-2 rounded-full bg-white/[0.1] py-1 pl-1 pr-4">
              <Image src={x} alt="x" width={40} height={40} />
              <span className="text-sm/[20px] font-bold tracking-[0.1px] text-white">
                Twitter
              </span>
            </div>
            <div className="flex items-center gap-2 rounded-full bg-white/[0.1] py-1 pl-4 pr-1">
              <span className="text-sm/[20px] font-bold tracking-[0.1px] text-white">
                Discord
              </span>
              <Image src={discord} alt="x" width={40} height={40} />
            </div>
          </div>
        </div>
        <div className="flex w-full items-center justify-between border-t border-solid border-white/[0.1] px-14 py-6">
          <span className="text-sm/[20px] tracking-[0.25px] text-white/[0.75]">
            © 2024 Satochain. All right reserved.
          </span>
          <ul className="flex items-center gap-4">
            <li className="p-[10px] text-sm/[20px] tracking-[0.25px] text-white">
              <Link href={''}>Privacy policy</Link>
            </li>
            <li className="p-[10px] text-sm/[20px] tracking-[0.25px] text-white">
              <Link href={''}>Explorer</Link>
            </li>
            <li className="p-[10px] text-sm/[20px] tracking-[0.25px] text-white">
              <Link href={''}>Satochain Bounty Program</Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
