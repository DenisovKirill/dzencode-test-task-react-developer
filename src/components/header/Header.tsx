import Image from 'next/image';
import { DateTime, TextInput, SessionCounter } from '@/components';

export const Header = () => {
  return (
    <header className="h-16 bg-white flex items-center justify-between px-64">
      <div className="flex items-center gap-20">
        <div className="flex items-center gap-2">
          <Image src="/images/user-shield.png" alt="User shield" priority width={40} height={40} />
          <h1 className="text-xl font-bold text-green-500">INVENTORY</h1>
        </div>
        <TextInput placeholder="Search" name="search" id="search" />
      </div>
      <div className="flex items-center gap-6">
        <DateTime />
        <SessionCounter />
      </div>
    </header>
  );
};
