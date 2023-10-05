import { Text, View } from "react-native";

import Point from "../../common/point/Point";

interface ArtworkInfoPointsProps {
  dateOfDisplay: string;
  artist: string;
  placeOfOrigin: string;
  medium: string;
}

import styles from "./ArtworkInfoPoints.style";

export default function ArtworkInfoPoints({
  dateOfDisplay,
  artist,
  placeOfOrigin,
  medium,
}: ArtworkInfoPointsProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.headText}>Basic Info:</Text>

      <View style={styles.pointsBox}>
        <Point>Date of display: {dateOfDisplay}</Point>
        <Point>Artist: {artist}</Point>
        <Point>Place of origin: {placeOfOrigin}</Point>
        <Point>Medium: {medium}</Point>
      </View>
    </View>
  );
}
