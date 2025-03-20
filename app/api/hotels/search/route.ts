import { NextResponse } from 'next/server';
import { hotels } from '@/data/hotels';

export async function GET(request: Request) {
  console.log("Search route called")
  const { searchParams } = new URL(request.url);
  const destination = searchParams.get('destination') || undefined;
  const startDate = searchParams.get('startDate') || undefined;
  const endDate = searchParams.get('endDate') || undefined;
  const guests = searchParams.get('guests') ? Number(searchParams.get('guests')) : undefined;
  const rooms = searchParams.get('rooms') ? Number(searchParams.get('rooms')) : undefined;
  
  // Filter hotels based on search params
  let filteredHotels = [...hotels];
  
  console.log(destination)
  if (destination) {
    filteredHotels = filteredHotels.filter(hotel => {
      console.log(destination, 'destination')
      console.log(hotel.location.city, 'HOTEL LOCATCON')
      console.log( hotel.location.city.toLowerCase().includes(destination.toLowerCase()) ||
      hotel.location.country.toLowerCase().includes(destination.toLowerCase()), 'IS EQUAL?')

      return destination.toLowerCase().includes(hotel.location.city.toLowerCase()) ||
      destination.toLowerCase().includes(hotel.location.country.toLowerCase())
    });


  }
  
  // Additional filtering logic can be added here
  
  // For example, checking availability based on dates
  
  // Simulate a delay like a real API
  await new Promise(resolve => setTimeout(resolve, 800));
  
  return NextResponse.json(filteredHotels);
} 