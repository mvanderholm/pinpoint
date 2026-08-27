import { View, Image, StyleSheet } from 'react-native';

const BADGE_DEFS = [
  { key: 'vip', source: require('../assets/PinPoint_VIP.jpg') },
  { key: 'doublePoints', source: require('../assets/BP2X.png') },
  { key: 'buyLocal', source: require('../assets/PP_BuyLocalStamp.jpg') },
];

// badges: { vip, doublePoints, buyLocal } — see lib/merchantBadges.js on the web side;
// mobile gets the same shape via the BADGES field merged in by pinpoint-web's /api/merchants routes.
export default function MerchantBadges({ badges, size = 28, style }) {
  const active = BADGE_DEFS.filter(b => badges?.[b.key]);
  if (active.length === 0) return null;

  return (
    <View style={[styles.row, style]}>
      {active.map(b => (
        <Image key={b.key} source={b.source} style={{ height: size, width: size * 2.4 }} resizeMode="contain" />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  row: { flexDirection: 'row', alignItems: 'center', gap: 6 },
});
