import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { DateRange } from 'react-day-picker';

interface SerializableDateRange {
  from: string | null;
  to: string | null;
}

interface GuestsState {
  adults: number;
  children: number;
  rooms: number;
}

interface SearchState {
  destination: string;
  dateRange: SerializableDateRange | null;
  guests: GuestsState;
}

const initialState: SearchState = {
  destination: '',
  dateRange: null,
  guests: {
    adults: 2,
    children: 0,
    rooms: 1
  }
};

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setDestination: (state, action: PayloadAction<string>) => {
      state.destination = action.payload;
    },
    setDateRange: (state, action: PayloadAction<DateRange | undefined>) => {
      if (!action.payload) {
        state.dateRange = null;
        return;
      }
      
      // Convert Date objects to ISO strings for serialization
      state.dateRange = {
        from: action.payload.from ? action.payload.from.toISOString() : null,
        to: action.payload.to ? action.payload.to.toISOString() : null
      };
    },
    setGuests: (state, action: PayloadAction<{ type: keyof GuestsState, action: 'add' | 'subtract' }>) => {
      const { type, action: actionType } = action.payload;
      if (actionType === 'add') {
        state.guests[type] += 1;
      } else {
        state.guests[type] = Math.max(type === 'rooms' ? 1 : 0, state.guests[type] - 1);
      }
    },
    resetSearch: (state) => {
      return initialState;
    }
  }
});

export const { setDestination, setDateRange, setGuests, resetSearch } = searchSlice.actions;
export default searchSlice.reducer;

// Helper function to convert serialized dateRange back to DateRange with Date objects
export const getDateRangeWithDateObjects = (dateRange: SerializableDateRange | null): DateRange | undefined => {
  if (!dateRange || (!dateRange.from && !dateRange.to)) {
    return undefined;
  }
  
  return {
    from: dateRange.from ? new Date(dateRange.from) : undefined,
    to: dateRange.to ? new Date(dateRange.to) : undefined
  };
}; 