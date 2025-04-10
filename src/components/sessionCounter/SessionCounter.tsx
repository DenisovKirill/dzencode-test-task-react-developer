'use client';
import { useEffect, useState } from 'react';

export const SessionCounter = () => {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    const eventSource = new EventSource('/api/sse');

    eventSource.onmessage = (event) => {
      const value = parseInt(event.data, 10);
      if (!isNaN(value)) {
        setCount(value);
      }
    };

    eventSource.onerror = (err) => {
      console.error('[SSE] Connection error:', err);
    };

    return () => {
      eventSource.close();
    };
  }, []);

  return (
    <div className="bg-green-500 text-white p-2 rounded font-semibold">
      <h2>Active sessions: {count ?? ''}</h2>
    </div>
  );
};
