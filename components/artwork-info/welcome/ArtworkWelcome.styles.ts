import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES } from "../../../constants";

const styles = StyleSheet.create<any>({
  artworkInfoOrigin: {
    fontFamily: FONT.regular,
    fontSize: SIZES.small,
    color: COLORS.gray,
    textAlign: "center",
  },
  artworkInfoTitle: {
    textAlign: "center",
    fontSize: SIZES.xxLarge,
    fontFamily: FONT.bold,
    marginBottom: 32,
  },
  artworkInfoImage: {
    width: "100%",
    aspectRatio: 1,
    borderRadius: SIZES.medium,
  },
});

export default styles;
