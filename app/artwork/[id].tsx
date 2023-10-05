import React from "react";
import {
  ActivityIndicator,
  Image,
  RefreshControl,
  SafeAreaView,
  ScrollView,
  Text,
  View,
} from "react-native";
import { Stack, useGlobalSearchParams, useRouter } from "expo-router";

import { COLORS, SIZES, SHADOWS } from "../../constants";
import {
  ArtworkInfoDescription,
  ArtworkInfoPoints,
  ArtworkInfoTabs,
  ArtworkInfoWelcome,
  Point,
  ScreenHeaderBtn,
} from "../../components";
import useFetch from "../../hooks/useFetch";
import { replacePTags } from "../../utils/replacePTags";

const ARTOWORK_TABS = ["Artwork Info", "Description", "Artist Bio"];

export default function ArtworkPage() {
  const params = useGlobalSearchParams();
  const router = useRouter();
  const { data, isLoading, error, refetch } = useFetch(
    `artworks/${params.id}`,
    {}
  );

  const [isRefreshing, setIsRefreshing] = React.useState(false);
  const [activeTab, setActiveTab] = React.useState(ARTOWORK_TABS[0]);

  const onRefresh = React.useCallback(() => {
    setIsRefreshing(true);
    refetch();
    setIsRefreshing(false);
  }, []);

  const artwork = (data as any) ?? null;
  const uri = `https://www.artic.edu/iiif/2/${artwork?.image_id}/full/600,/0/default.jpg`;

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.light.background }}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.light.background },
          headerShadowVisible: false,
          headerBackVisible: false,
          headerLeft: () => (
            <ScreenHeaderBtn
              fontAwesomeIconName="chevron-left"
              handlePress={() => router.back()}
            />
          ),
          headerRight: () => (
            <ScreenHeaderBtn
              fontAwesomeIconName="share-square"
              handlePress={() => {}}
            />
          ),
          headerTitle: "",
        }}
      />

      <ScrollView
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl refreshing={isRefreshing} onRefresh={onRefresh} />
        }
      >
        {isLoading ? (
          <ActivityIndicator size="large" color={COLORS.primary} />
        ) : error ? (
          <Text>Something went wrong</Text>
        ) : artwork === null ? (
          <Text>No data available</Text>
        ) : (
          <View style={{ padding: SIZES.medium, paddingBottom: 100 }}>
            <ArtworkInfoWelcome imageUri={uri} title={artwork.title} type={artwork.artwork_type_title} />

            <ArtworkInfoTabs
              tabs={ARTOWORK_TABS}
              activeTab={activeTab}
              setActiveTab={setActiveTab}
            />

            {/* switch case would be better? */}
            {activeTab === ARTOWORK_TABS[0] && (
              <ArtworkInfoPoints
                dateOfDisplay={artwork?.date_display}
                artist={artwork?.artist_display}
                placeOfOrigin={artwork?.place_of_origin}
                medium={artwork?.medium_display}
              />
            )}

            {activeTab === ARTOWORK_TABS[1] && (
              <ArtworkInfoDescription
                description={replacePTags(artwork?.description)}
              />
            )}

            {activeTab === ARTOWORK_TABS[2] && <View />}
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}
