import { create } from 'zustand';
import { DateRange } from 'react-day-picker';

interface SearchState {
  destination: string;
  dateRange: DateRange | undefined;
  guests: {
    adults: number;
    children: number;
    rooms: number;
  };
  setDestination: (destination: string) => void;
  setDateRange: (dateRange: DateRange | undefined) => void;
  setGuests: (type: 'adults' | 'children' | 'rooms', action: 'add' | 'subtract') => void;
  setInitialState: (state: Partial<SearchState>) => void;
}

export const useSearchStore = create<SearchState>((set) => ({
  destination: '',
  dateRange: undefined,
  guests: {
    adults: 2,
    children: 0,
    rooms: 1,
  },
  setDestination: (destination) => set({ destination }),
  setDateRange: (dateRange) => set({ dateRange }),
  setGuests: (type, action) => set((state) => ({
    guests: {
      ...state.guests,
      [type]: action === 'add' 
        ? state.guests[type] + 1 
        : Math.max(type === 'rooms' ? 1 : 0, state.guests[type] - 1)
    }
  })),
  setInitialState: (initialState) => set(initialState),
})); 