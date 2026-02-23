'use client';

import { useScopedData } from '@/hooks/useScopedData';

export function HotelSwitcher() {
  const { role, assignedHotels, selectedHotel, setSelectedHotel } = useScopedData();

  if (role !== 'OWNER') {
    return null;
  }

  return (
    <select className="select" value={selectedHotel} onChange={(event) => setSelectedHotel(event.target.value)}>
      <option value="ALL">All Hotels</option>
      {assignedHotels.map((hotel) => (
        <option key={hotel.id} value={hotel.id}>
          {hotel.name}
        </option>
      ))}
    </select>
  );
}
