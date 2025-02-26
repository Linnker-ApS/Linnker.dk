import { DateRange as DayPickerRange } from "react-day-picker";

export type DateRange = DayPickerRange;

export interface GuestCount {
  adults: number;
  children: number;
  rooms: number;
} 