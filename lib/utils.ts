import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { format } from "date-fns"
import { BOOKING_SYSTEMS, DATE_FORMATS } from "../config/constants"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const formatDateForBooking = (date: Date, system: keyof typeof BOOKING_SYSTEMS) => {
  return format(date, DATE_FORMATS[system]);
};

export const createBookingUrl = (baseUrl: string, params: Record<string, string>) => {
  const bookingSystem = Object.entries(BOOKING_SYSTEMS)
    .find(([_, domain]) => baseUrl.includes(domain))?.[0] || 'DEFAULT';
  
  return `${baseUrl}?${new URLSearchParams(params)}`;
};
