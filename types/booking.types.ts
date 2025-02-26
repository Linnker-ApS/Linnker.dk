import { DateRange as DayPickerRange } from "react-day-picker";

export type DateRange = DayPickerRange;

export interface GuestCount {
  adults: number;
  children: number;
  rooms: number;
}

export interface RoomOffer {
  price: number;
  currency: string;
  perNight: boolean;
  freeCancellation: boolean;
  breakfast: boolean;
  paymentType: 'card' | 'cash';
  guests: number;
  rooms: number;
  taxes?: number;
} 