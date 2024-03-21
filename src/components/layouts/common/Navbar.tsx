'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useMemo } from 'react';

import Button from '@/components/ui/button/index.tsx';

import evm_icon from '@public/images/satochain/evm_icon.png';
import logo_primary from '@public/images/satochain/logo_primary.png';
import unisat_icon from '@public/images/satochain/unisat_icon.png';

import NavLink from './NavLink.tsx';

const Navbar = () => {
  const navLinks = useMemo(() => {
    return [
      {
        title: 'Home',
        path: '/',
      },
      {
        title: 'Mint key',
        path: '/mint-key',
        hot: true,
      },
      {
        title: 'Faucet',
        path: '/faucet',
      },
      {
        title: 'Swap',
        path: '/swap',
      },
      {
        title: 'Explorer',
        path: '',
      },
      {
        title: 'Bridge',
        path: '',
      },
    ];
  }, []);

  return (
    <nav>
      <div className="container mx-auto flex flex-wrap items-center justify-between py-2 lg:py-4">
        <div className="flex flex-1 items-center gap-8">
          <div className="flex items-center justify-center gap-2">
            <Image
              src={logo_primary.src}
              width={26}
              height={37}
              alt="logo_primary"
            />
            <Link
              href={'/'}
              className="text-xl/[32px] font-bold text-white max-xl:text-base/[24px]"
            >
              Satochain
            </Link>
          </div>
          <div className="menu" id="navbar">
            <ul className=" flex flex-row">
              {navLinks.map((link, index) => (
                <li key={index} className="mx-0">
                  <NavLink href={link.path} title={link.title} hot={link.hot} />
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="flex items-center justify-center gap-3">
          <Button
            intent={'linear'}
            variant={'outline'}
            className="flex-1 max-xl:text-xs"
            leftIcon={
              <Image
                src={unisat_icon.src}
                width={21}
                height={21}
                alt="unisat_icon"
              />
            }
          >
            Connect UniSat
          </Button>
          <Button
            intent={'linear'}
            variant={'outline'}
            className="flex-1 max-xl:text-xs"
            leftIcon={
              <Image src={evm_icon.src} width={21} height={21} alt="evm_icon" />
            }
          >
            Connect EVM
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
