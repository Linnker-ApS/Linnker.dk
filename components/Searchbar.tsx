"use client";

import React, { FC, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Searchbar: FC = () => {
  const [checkIn, setCheckIn] = useState<Date | null>(null);
  const [checkOut, setCheckOut] = useState<Date | null>(null);

  return (
    <div className="container mx-auto px-4 -mt-8">
      <div className="bg-white bg-opacity-20 backdrop-blur-sm p-6 rounded-lg shadow-lg">
        <form className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="space-y-2">
            <label htmlFor="destination" className="block text-white font-medium">
              Destination
            </label>
            <input
              type="text"
              id="destination"
              className="w-full px-4 py-2 rounded-md bg-white bg-opacity-20 border border-white text-white placeholder-white"
              placeholder="Where are you going?"
            />
          </div>

          <div className="space-y-2">
            <label className="block text-white font-medium">
              Check-in
            </label>
            <DatePicker
              selected={checkIn}
              onChange={(date: Date | null) => setCheckIn(date)}
              selectsStart
              startDate={checkIn ?? undefined}
              endDate={checkOut ?? undefined}
              className="w-full px-4 py-2 rounded-md bg-white bg-opacity-20 border border-white text-white"
              placeholderText="Select date"
              dateFormat="MM/dd/yyyy"
            />
          </div>

          <div className="space-y-2">
            <label className="block text-white font-medium">
              Check-out
            </label>
            <DatePicker
              selected={checkOut}
              onChange={(date: Date | null) => setCheckOut(date)}
              selectsEnd
              startDate={checkIn ?? undefined}
              endDate={checkOut ?? undefined}
              minDate={checkIn ?? undefined}
              className="w-full px-4 py-2 rounded-md bg-white bg-opacity-20 border border-white text-white"
              placeholderText="Select date"
              dateFormat="MM/dd/yyyy"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="guests" className="block text-white font-medium">
              Guests
            </label>
            <select
              id="guests"
              className="w-full px-4 py-2 rounded-md bg-white bg-opacity-20 border border-white text-white"
            >
              <option value="1">1 Guest</option>
              <option value="2">2 Guests</option>
              <option value="3">3 Guests</option>
              <option value="4">4 Guests</option>
              <option value="5">5+ Guests</option>
            </select>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Searchbar;
