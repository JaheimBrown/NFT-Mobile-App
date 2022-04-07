import { View, Text, TouchableOpacity, Image } from "react-native";
import { COLORS, SIZES, FONTS, SHADOWS } from "../constants";

export const RectButton = ({ minWidth, fontSize, handlePress }) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: COLORS.primary,
        borderRadius: SIZES.extraLarge,
        padding: SIZES.small,
        minWidth: minWidth,
      }}
      onPress={handlePress}
    >
      <Text
        style={{
          fontFamily: FONTS.semiBold,
          fontSize: fontSize,
          color: COLORS.white,
          textAlign: "center",
        }}
      >
        Place a bid
      </Text>
    </TouchableOpacity>
  );
};

export const CircleButton = ({ imgUrl, handlePress, ...props }) => {
  return (
    <TouchableOpacity
      style={{
        width: 40,
        height: 40,
        backgroundColor: COLORS.white,
        position: "absolute",
        borderRadius: SIZES.extraLarge,
        alignItems: "center",
        justifyContent: "center",
        ...SHADOWS.light,
        ...props,
      }}
      onPress={handlePress}
    >
      <Image
        source={imgUrl}
        resizeMode="cover"
        style={{
          width: 24,
          height: 24,
        }}
      />
    </TouchableOpacity>
  );
};
