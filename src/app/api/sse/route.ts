import { NextRequest } from 'next/server';

let clients: WritableStreamDefaultWriter[] = [];

export async function GET(req: NextRequest) {
  const { readable, writable } = new TransformStream();
  const writer = writable.getWriter();
  const encoder = new TextEncoder();

  clients.push(writer);
  sendSessionCount();

  const keepAliveInterval = setInterval(() => {
    try {
      writer.write(encoder.encode(':\n\n'));
    } catch (error) {
      console.warn('[SSE] Error while keep-alive:', error);
    }
  }, 30000);

  const closeConnection = () => {
    clients = clients.filter((w) => w !== writer);
    sendSessionCount();
    clearInterval(keepAliveInterval);
    writer.close();
  };

  req.signal?.addEventListener('abort', closeConnection);

  writer.write(encoder.encode('event: connected\ndata: connected\n\n'));

  return new Response(readable, {
    headers: {
      'Content-Type': 'text/event-stream',
      'Cache-Control': 'no-cache, no-transform',
      Connection: 'keep-alive',
    },
  });
}

function sendSessionCount() {
  const encoder = new TextEncoder();
  const data = `data: ${clients.length}\n\n`;

  clients = clients.filter((writer) => {
    try {
      writer.write(encoder.encode(data));
      return true;
    } catch (err) {
      console.warn('[SSE] Error sending. Removing client.');
      return false;
    }
  });
}
