import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { useRouter } from "expo-router";

import styles from "./Welcome.style";
import { SIZES } from "../../../constants";
import FontAwesomeIcon from "../../common/icon/Icon";

// FETCH THESE ARTWORKS FROM THE API
const ARTWORK_TYPES = ["Painting", "Sculpture", "Photography", "Vessel"];

const Welcome = () => {
  const router = useRouter();
  const [activeArtworkType, setActiveArtworkType] = React.useState("Painting");

  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.userName}>Hello Art User!</Text>
        <Text style={styles.welcomeMessage}>Find you perfect art!</Text>
      </View>

      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput
            style={styles.searchInput}
            value=""
            onChange={() => {}}
            placeholder="What are you looking for?"
          />
        </View>

        <TouchableOpacity style={styles.searchBtn} onPress={() => {}}>
          <FontAwesomeIcon name="search"/>
        </TouchableOpacity>
      </View>

      <View style={styles.tabsContainer}>
        <FlatList
          data={ARTWORK_TYPES}
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.tab(activeArtworkType, item)}
              onPress={() => {
                setActiveArtworkType(item);
                // router.push(`search/${item}`);
              }}
            >
              <Text style={styles.tabText(activeArtworkType, item)}>
                {item}
              </Text>
            </TouchableOpacity>
          )}
          contentContainerStyle={{ columnGap: SIZES.small }}
          horizontal
        />
      </View>
    </View>
  );
};

export default Welcome;
