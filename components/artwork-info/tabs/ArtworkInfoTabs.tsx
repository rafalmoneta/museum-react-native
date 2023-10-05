import React from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";

import styles from "./ArtworkInfoTabs.style";

interface TabButtonProps {
  name: string;
  activeTab: string;
  onHandleSearchType: () => void;
}

interface ArtworkInfoTabsProps {
  tabs: string[];
  activeTab: string;
  setActiveTab: (name: string) => void;
}

const TabButton = ({ name, activeTab, onHandleSearchType }: TabButtonProps) => {
  return (
    <TouchableOpacity
      style={styles.btn(name, activeTab)}
      onPress={onHandleSearchType}
    >
      <Text style={styles.btnText(name, activeTab)}>{name}</Text>
    </TouchableOpacity>
  );
};

const ArtworkInfoTabs = ({
  tabs,
  activeTab,
  setActiveTab,
}: ArtworkInfoTabsProps) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={tabs}
        renderItem={({ item }) => (
          <TabButton
            name={item}
            activeTab={activeTab}
            onHandleSearchType={() => setActiveTab(item)}
          />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ columnGap: 5 }}
      />
    </View>
  );
};

export default ArtworkInfoTabs;
