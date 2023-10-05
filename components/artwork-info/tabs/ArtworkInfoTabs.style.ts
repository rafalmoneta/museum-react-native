import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES, SHADOWS } from "../../../constants";

const styles = StyleSheet.create<any>({
  container: {
    marginTop: SIZES.small,
    marginBottom: SIZES.small / 2,
  },
  btn: (name: string, activeTab: string) => ({
    paddingVertical: SIZES.small,
    paddingHorizontal: SIZES.xLarge,
    backgroundColor: name === activeTab ? COLORS.gray2 : "#F3F4F8",
    borderRadius: SIZES.medium,
    marginLeft: 2,
    ...SHADOWS.medium,
    shadowColor: COLORS.white,
  }),
  btnText: (name: string, activeTab: string) => ({
    fontFamily: "DMMedium",
    fontSize: SIZES.medium,
    color: name === activeTab ? "#FFF" : "#AAA9B8",
  }),
});

export default styles;
