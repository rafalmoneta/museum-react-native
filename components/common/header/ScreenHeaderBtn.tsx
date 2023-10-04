import React from "react";
import { TouchableOpacity } from "react-native";

import styles from "./ScreenHeader.style";
import FontAwesomeIcon from "../icon/Icon";
import { FontAwesome } from "@expo/vector-icons";

interface ScreenHeaderBtnProps {
  fontAwesomeIconName: React.ComponentProps<typeof FontAwesome>["name"];
  handlePress: () => void;
}

const ScreenHeaderBtn = ({
  fontAwesomeIconName,
  handlePress,
}: ScreenHeaderBtnProps) => {
  return (
    <TouchableOpacity style={styles.btnContainer} onPress={handlePress}>
      <FontAwesomeIcon name={fontAwesomeIconName} />
    </TouchableOpacity>
  );
};

export default ScreenHeaderBtn;
