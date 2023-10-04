import React from "react";
import { useRouter } from "expo-router";
import { View, Text, Touchable } from "react-native";
import { ActivityIndicator } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

import { COLORS } from "../../../constants";
import useFetch from "../../../hooks/useFetch";

import styles from "./Galleries.style";
import GalleryCard from "../../common/cards/GalleryCard/GalleryCard";

export default function Galleries() {
  const router = useRouter();
  const { data, isLoading, error } = useFetch("galleries", {});
  
  const items = Array.isArray(data) ? data : [];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Galleries</Text>
        
        <TouchableOpacity onPress={() => router.push("/")}>
          <Text style={styles.headerBtn}>View All</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.galleryContainer}>
        {isLoading ? (
          <ActivityIndicator size="large" color={COLORS.primary} />
        ) : error ? (
          <Text>Something Went Wrong!</Text>
        ) : (
          items.map((gallery: any) => (
            <GalleryCard
              key={gallery.id}
              gallery={gallery}
              handleNavigate={() => {
                router.push(`/gallery/${gallery.id}`);
              }}
            />
          ))
        )}
      </View>
    </View>
  );
}
