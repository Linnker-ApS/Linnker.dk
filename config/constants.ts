export const GUEST_LIMITS = {
  MIN_ADULTS: 1,
  MAX_ADULTS: 10,
  MIN_CHILDREN: 0,
  MAX_CHILDREN: 6,
  MIN_ROOMS: 1,
  MAX_ROOMS: 10
} as const;

export const BOOKING_SYSTEMS = {
  BROCHNER: 'brochner-hotels',
  DEFAULT: 'default'
} as const;

export const DATE_FORMATS = {
  BROCHNER: 'dd-MM-yyyy',
  DEFAULT: 'yyyy-MM-dd'
} as const; 