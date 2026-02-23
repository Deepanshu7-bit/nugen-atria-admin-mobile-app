import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { bookings } from '../../../data/mockData';
import { ScreenContainer } from '../../../shared/components/ScreenContainer';
import { colors } from '../../../shared/theme/colors';

export function BookingsScreen() {
  return (
    <ScreenContainer>
      <Text style={styles.title}>Bookings</Text>
      {bookings.map((booking) => (
        <View key={booking.id} style={styles.card}>
          <Text style={styles.guest}>{booking.guestName}</Text>
          <Text style={styles.meta}>Room {booking.roomNumber}</Text>
          <Text style={styles.meta}>{booking.checkIn} → {booking.checkOut}</Text>
          <Text style={styles.status}>{booking.status}</Text>
        </View>
      ))}
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: colors.text,
    marginBottom: 4
  },
  card: {
    backgroundColor: colors.card,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 14,
    padding: 14
  },
  guest: {
    color: colors.text,
    fontWeight: '700',
    fontSize: 16
  },
  meta: {
    color: colors.muted,
    marginTop: 2
  },
  status: {
    marginTop: 8,
    color: colors.success,
    fontWeight: '600'
  }
});
