import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Hotel } from '@/data/hotels';

// Define a service using a base URL and expected endpoints
export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: '/api' }),
  tagTypes: ['Hotels', 'Bookings'],
  endpoints: (builder) => ({
    // Get all hotels
    getHotels: builder.query<Hotel[], void>({
      query: () => 'hotels',
      providesTags: ['Hotels'],
    }),
    
    // Get a single hotel by ID
    getHotelById: builder.query<Hotel, string>({
      query: (id) => `hotels/${id}`,
      providesTags: (result, error, id) => [{ type: 'Hotels', id }],
    }),
    
    // Search hotels with filters
    searchHotels: builder.query<Hotel[], { 
      destination?: string; 
      startDate?: string; 
      endDate?: string;
      guests?: number;
      rooms?: number;
    }>({
      query: (params) => ({
        url: 'hotels/search',
        method: 'GET',
        params,
      }),
      providesTags: ['Hotels'],
    }),
    
    // Create a booking
    createBooking: builder.mutation<
      { success: boolean; bookingId: string }, 
      { 
        hotelId: string; 
        startDate: string; 
        endDate: string; 
        guests: number; 
        rooms: number;
        totalPrice: number;
      }
    >({
      query: (booking) => ({
        url: 'bookings',
        method: 'POST',
        body: booking,
      }),
      invalidatesTags: ['Bookings'],
    }),
    
    // Get user bookings
    getUserBookings: builder.query<any[], void>({
      query: () => 'bookings/user',
      providesTags: ['Bookings'],
    }),
  }),
});

// Export hooks for usage in components
export const {
  useGetHotelsQuery,
  useGetHotelByIdQuery,
  useSearchHotelsQuery,
  useCreateBookingMutation,
  useGetUserBookingsQuery,
} = api; 