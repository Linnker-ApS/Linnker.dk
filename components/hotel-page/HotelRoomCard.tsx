import { Room } from "@/types";

interface HotelRoomCardProps {
  room: Room;
}

const HotelRoomCard = ({ room }: HotelRoomCardProps) => {
  return (
    <div className="border rounded-md bg-white overflow-hidden h-full w-full">
      <div className="grid md:grid-cols-3 gap-6 h-full">
        <div className="relative h-full min-h-[300px]">
          <img
            src={room.imageUrl}
            alt={room.name}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
        <div className="md:col-span-2 p-6">
          <h3 className="text-xl font-semibold mb-2">{room.name}</h3>
          <p className="text-gray-600 mb-4">{room.description}</p>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <span className="font-medium">Size:</span> {room.size}
            </div>
            <div>
              <span className="font-medium">Occupancy:</span> {room.occupancy}
            </div>
          </div>
          <div className="mt-4">
            <h4 className="font-medium mb-2">Room Amenities</h4>
            <div className="grid grid-cols-2 gap-2 text-sm">
              {room.amenities.map((amenity, i) => (
                <div key={i} className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-[#FFB700] rounded-full" />
                  <span>{amenity}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelRoomCard; 