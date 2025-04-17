'use client';
import { useEffect, useState } from 'react';
import clsx from 'clsx';

export const SessionCounter = () => {
  const [count, setCount] = useState<number | null>(null);
  const [isBlinking, setIsBlinking] = useState<boolean>(false);

  useEffect(() => {
    const eventSource = new EventSource('https://sse-server-qvkz.onrender.com/sse');

    eventSource.addEventListener('sessionCount', (event: MessageEvent) => {
      const value = parseInt(event.data, 10);
      if (!isNaN(value)) {
        setCount((prev) => {
          if (prev !== value) {
            setIsBlinking(true);
            setTimeout(() => setIsBlinking(false), 300);
          }
          return value;
        });
      }
    });

    eventSource.onerror = (err) => {
      console.error('[SSE] Connection error:', err);
    };

    return () => {
      eventSource.close();
    };
  }, []);

  return (
    <div
      className={clsx(
        'bg-green-500 text-white p-4 rounded font-semibold transition-all duration-300',
        {
          'animate-pulse bg-green-600 scale-105': isBlinking,
        },
      )}
    >
      <h2 className="text-lg">Active sessions: {count ?? '—'}</h2>
    </div>
  );
};
