import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import fav from '@public/images/favicon.png';

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
      <body className={inter.className}>{children}</body>
    </html>
  );
}