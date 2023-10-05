import React from "react";
import { useRouter } from "expo-router";
import { View, Text, Touchable } from "react-native";
import { ActivityIndicator } from "react-native";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";

import { COLORS, SIZES } from "../../../constants";
import useFetch from "../../../hooks/useFetch";
import ArtworkCard from "../../common/cards/ArtworkCard/ArtworkCard";

import styles from "./UpdatedArt.style";

export default function UpdatedArtwork() {
  const router = useRouter();

  const { data, isLoading, error } = useFetch("artworks", {});

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Updated Art</Text>
        
        <TouchableOpacity onPress={() => router.push(`/artworks`)}>
          <Text style={styles.headerBtn}>View All</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.cardsContainer}>
        {isLoading ? (
          <ActivityIndicator size="large" color={COLORS.primary} />
        ) : error ? (
          <Text>Something Went Wrong!</Text>
        ) : (
          <FlatList
            data={data}
            renderItem={({ item }) => (
              <ArtworkCard
                item={item}
                handleNavigate={() => {
                  router.push(`/artwork/${item.id}`);
                }}
              />
            )}
            keyExtractor={(item) => item?.id}
            contentContainerStyle={{ columnGap: SIZES.small }}
            horizontal
          />
        )}
      </View>
    </View>
  );
}
