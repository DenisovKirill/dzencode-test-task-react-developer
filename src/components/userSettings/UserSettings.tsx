import Image from 'next/image';
import { GearIcon } from '@/icons';

export const UserSettings = () => {
  return (
    <div className="relative">
      <div className="relative w-50 h-50 rounded-full overflow-hidden">
        <Image src="/images/user.png" alt="User photo" fill className="object-cover" priority />
      </div>
      <div className="w-12 h-12 flex items-center justify-center absolute bottom-2 right-2 rounded-full bg-white shadow-default cursor-pointer">
        <GearIcon className="size-6" color="var(--color-gray-400)" />
      </div>
    </div>
  );
};
