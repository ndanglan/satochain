import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Image from 'next/image';

import Providers from '@/components/Providers';
import Navbar from '@/components/layouts/common/Navbar';
import { EZIndexDecoration } from '@/enum';

import fav from '@public/images/favicon.png';
import bg_gradient_left from '@public/images/satochain/bg_gradient_left.png';
import bg_gradient_right from '@public/images/satochain/bg_gradient_right.png';

import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Lan Nguyen',
  description: 'Front-end developer',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link
          rel="icon"
          href={fav.src}
          type="image/<generated>"
          sizes="16x16"
        />
      </head>
      <body className={inter.className}>
        <Providers>
          <main className="relative flex min-h-screen flex-col overflow-hidden bg-white pb-[140px] dark:bg-black">
            <Navbar />
            {children}
            <Image
              src={bg_gradient_left.src}
              width={228}
              height={228}
              alt="bg_gradient_left"
              className={`absolute left-0 top-0 z-[-1]`}
            />
            <Image
              src={bg_gradient_right.src}
              width={975}
              height={875}
              alt="bg_gradient_right"
              className={`absolute right-0 top-0 z-[-1]`}
            />
          </main>
        </Providers>
      </body>
    </html>
  );
}
