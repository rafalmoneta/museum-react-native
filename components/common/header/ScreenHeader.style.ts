import { StyleSheet } from "react-native";

import { COLORS } from "../../../constants";

const styles = StyleSheet.create<any>({
  btnContainer: {
    width: 40,
    height: 40,
    backgroundColor: COLORS.light.background,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  btnImg: (dimension: string): any => ({
    width: dimension,
    height: dimension,
    borderRadius: 8,
  }),
});

export default styles;
