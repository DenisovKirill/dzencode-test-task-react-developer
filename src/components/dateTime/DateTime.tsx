'use client';

import { useEffect, useState } from 'react';
import { ClockIcon } from '@/icons';
import { formatDate, formatTime } from '@/lib';

export const DateTime = () => {
  const [time, setTime] = useState<Date>(new Date());

  useEffect(() => {
    const timerId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timerId);
  }, []);

  return (
    <div className="flex items-end">
      <div className="flex flex-col">
        <div suppressHydrationWarning>{formatDate(time)}</div>
        <div className="flex items-center gap-2">
          <ClockIcon color="var(--color-green-500)" />
          <div suppressHydrationWarning>{formatTime(time)}</div>
        </div>
      </div>
    </div>
  );
};
