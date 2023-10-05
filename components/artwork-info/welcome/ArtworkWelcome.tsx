import { Image, Text, View } from "react-native";
import styles from "./ArtworkWelcome.styles";

interface ArtworkInfoWelcomeProps {
  imageUri: string;
  title: string;
  type?: string;
}

export default function ArtworkInfoWelcome({
  imageUri,
  title,
  type,
}: ArtworkInfoWelcomeProps) {
  return (
    <View style={{ flex: 1 }}>
      <Text style={styles.artworkInfoOrigin}>{type ?? "Artwork"}</Text>
      <Text style={styles.artworkInfoTitle}>{title}</Text>
      <Image source={{ uri: imageUri }} style={styles.artworkInfoImage} />
    </View>
  );
}
