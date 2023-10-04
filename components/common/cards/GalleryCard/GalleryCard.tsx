import { Image, Text, TouchableOpacity, View } from "react-native";

import styles from "./GalleryCard.style";

interface GalleryCardProps {
  gallery: any; // TODO: temporary type
  handleNavigate: () => void;
}

export default function GalleryCard({
  handleNavigate,
  gallery,
}: GalleryCardProps) {
  return (
    <TouchableOpacity style={styles.container} onPress={handleNavigate}>
      <TouchableOpacity style={styles.logoContainer}>
        {/* <Image
        source={{ uri: job.employer_logo }}
        resizeMode="contain"
        style={styles.logoImage}
      /> */}
      </TouchableOpacity>

      <View style={styles.textContainer}>
        <Text style={styles.galleryName} numberOfLines={1}>
          {gallery.title}
        </Text>
        <Text style={styles.galleryStatus}>{gallery.is_closed ? "Gallery is currently closed" : "Open for visit"}</Text>
      </View>
    </TouchableOpacity>
  );
}
