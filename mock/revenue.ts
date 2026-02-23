import { RevenuePoint } from '@/types';

const hotels = ['h1', 'h2', 'h3'];
const base = { h1: 4200, h2: 3600, h3: 2900 };

export const revenueData: RevenuePoint[] = Array.from({ length: 30 }).flatMap((_, i) => {
  const date = new Date(Date.now() - (29 - i) * 24 * 60 * 60 * 1000).toISOString().split('T')[0];
  return hotels.map((hotelId, index) => ({
    date,
    hotelId,
    amount: base[hotelId as keyof typeof base] + (i % 7) * 170 + index * 110
  }));
});
