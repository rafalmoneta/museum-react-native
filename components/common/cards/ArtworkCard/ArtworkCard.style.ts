import { StyleSheet } from "react-native";

import { COLORS, FONT, SHADOWS, SIZES } from "../../../../constants";

const styles = StyleSheet.create<any>({
  container: {
    width: 250,
    padding: SIZES.small,
    backgroundColor: COLORS.white,
    borderRadius: SIZES.medium,
    justifyContent: "space-between",
    ...SHADOWS.medium, // TODO: why is this not working?
    shadowColor: COLORS.white,
  },
  artworkImageContainer: {
    width: "100%",
    height: 250,
    borderRadius: SIZES.medium,
    overflow: "hidden",
  },
  artworkImage: {
    width: "100%",
    height: "100%",
  },
  artworkTitle: {
    marginTop: SIZES.small,
    fontFamily: FONT.bold,
    fontSize: SIZES.medium,
    color: COLORS.secondary,
    textAlign: "center",
  },
  artworkDetails: {
    marginTop: SIZES.small,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  artworkOrigin: {
    fontFamily: FONT.regular,
    fontSize: SIZES.small,
    color: COLORS.gray,
  },
});

export default styles;
