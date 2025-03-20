import { NextResponse } from 'next/server';
import { hotels } from '@/data/hotels';

export async function GET() {
  // Simulate a delay like a real API
  await new Promise(resolve => setTimeout(resolve, 500));
  
  return NextResponse.json(hotels);
} 