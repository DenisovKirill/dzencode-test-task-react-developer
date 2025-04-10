import { initializeDatabase } from '@/lib';

export async function GET() {
  try {
    console.log('Initializing database...');
    await initializeDatabase();
    return new Response(JSON.stringify({ message: 'Database initialized successfully' }), {
      status: 200,
    });
  } catch (error) {
    console.error('Error initializing database:', error);
    return new Response(JSON.stringify({ error: 'Database initialization failed' }), {
      status: 500,
    });
  }
}
