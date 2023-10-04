import { View, ScrollView, SafeAreaView, Text } from "react-native";
import { COLORS } from "../../constants";
import { Welcome, UpdatedArtwork, Galleries } from "../../components";

const Home = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.light.background }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            flex: 1,
            padding: 12,
          }}
        >
          <Welcome />
          <UpdatedArtwork />
          <Galleries />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
