import { Text, View } from "react-native";

import styles from "./Point.style";

interface PointProps {
  children: React.ReactNode;
}

export default function Point({ children }: PointProps) {
  return (
    <View style={styles.pointWrapper}>
      <View style={styles.pointDot} />
      <Text style={styles.pointText}>{children}</Text>
    </View>
  );
}
