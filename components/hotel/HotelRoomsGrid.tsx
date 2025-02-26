import { Room, RoomOffer } from "@/types";
import HotelRoomCard from "./HotelRoomCard";

interface HotelRoomsProps {
  rooms: Room[];
}

const HotelRooms = ({ rooms }: HotelRoomsProps) => {
  return (
    <div className="space-y-6 w-full">
      <h2 className="text-2xl font-semibold">Room Types</h2>
      <div className="grid grid-cols-1 gap-8 w-full">
        {rooms.map((room, index) => (
          <HotelRoomCard 
            key={index} 
            room={room} 
          />
        ))}
      </div>
    </div>
  );
};

export default HotelRooms; 