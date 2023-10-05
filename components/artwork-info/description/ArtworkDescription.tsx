import { Text, View } from "react-native";

import styles from "./ArtworkDescription.style";

export default function ArtworkInfoDescription({
  description,
}: {
  description: string;
}) {
  return (
    <View style={styles.container}>
      <Text style={styles.headText}>About the Artwork:</Text>

      <View style={styles.contentBox}>
        <Text style={styles.contextText}>{description}</Text>
      </View>
    </View>
  );
}
