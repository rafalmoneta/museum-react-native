import { Image, Text, TouchableOpacity, View } from "react-native";

import styles from "./ArtworkCard.style";

interface ArtworkCardProps {
  item: any; // TODO: temporary type
  handleNavigate: () => void;
}

export default function ArtworkCard({
  item,
  handleNavigate,
}: ArtworkCardProps) {
  const uri = `https://www.artic.edu/iiif/2/${item?.image_id}/full/600,/0/default.jpg`;

  return (
    <TouchableOpacity style={styles.container} onPress={handleNavigate}>
      <View style={styles.artworkImageContainer}>
        <Image
          source={{ uri }}
          resizeMode="cover"
          style={styles.artworkImage}
        />
      </View>

      <Text style={styles.artworkTitle} numberOfLines={1}>
        {item.title}
      </Text>

      <View style={styles.artworkDetails}>
        <Text>{item.artist_title}</Text>
        <Text style={styles.artworkOrigin}>{item.place_of_origin}</Text>
      </View>
    </TouchableOpacity>
  );
}
