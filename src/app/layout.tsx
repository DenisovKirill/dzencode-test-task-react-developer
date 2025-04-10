import { ReactNode } from 'react';
import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import { Header, SideBar } from '@/components';

import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Awesome Test Task',
  description: 'Test task for dZENcode',
};

const RootLayout = ({
  children,
}: Readonly<{
  children: ReactNode;
}>) => {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <Header />
        <main className="flex grow overflow-hidden justify-center">
          <SideBar />
          <section className="grow py-10 px-20 overflow-y-auto inset-shadow-left bg-gray-100">
            {children}
          </section>
        </main>
      </body>
    </html>
  );
};

export default RootLayout;
