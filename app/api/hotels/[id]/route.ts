import { NextResponse } from 'next/server';
import { hotels } from '@/data/hotels';

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const id = params.id;
  const hotel = hotels.find(h => h.id === id);
  
  if (!hotel) {
    return NextResponse.json(
      { error: 'Hotel not found' },
      { status: 404 }
    );
  }
  
  // Simulate a delay like a real API
  await new Promise(resolve => setTimeout(resolve, 300));
  
  return NextResponse.json(hotel);
} 