import { View, Text, Image, TextInput } from "react-native";

import { COLORS, FONTS, SIZES, assets } from "../constants";

const HomeHeader = ({ onSearch }) => {
  return (
    <View
      style={{
        backgroundColor: COLORS.primary,
        padding: SIZES.font,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Image
          source={assets.logo}
          resizeMode="contain"
          style={{ width: 90, height: 25 }}
        />
        <View style={{ width: 45, height: 45 }}>
          <Image
            source={assets.person01}
            resizeMode="contain"
            style={{ width: "100%", height: "100%" }}
          />
          <Image
            source={assets.badge}
            resizeMode="contain"
            style={{
              position: "absolute",
              bottom: 0,
              right: 0,
              width: 15,
              height: 15,
            }}
          />
        </View>
      </View>

      <View
        style={{
          marginVertical: SIZES.large,
        }}
      >
        <Text style={{ fontFamily: FONTS.regular, color: COLORS.white }}>
          Hello, Victoria 👋
        </Text>
        <Text
          style={{
            fontFamily: FONTS.bold,
            fontSize: SIZES.extraLarge,
            color: COLORS.white,
            marginTop: SIZES.small - 2,
          }}
        >
          Let's find a masterpiece
        </Text>
      </View>

      <View
        style={{
          marginTop: SIZES.small,
          backgroundColor: COLORS.gray,
          borderRadius: SIZES.font,
          width: "100%",
          flexDirection: "row",
          alignItems: "center",
          paddingVertical: SIZES.small,
          paddingHorizontal: SIZES.font,
        }}
      >
        <Image
          source={assets.search}
          resizeMode="contain"
          style={{
            width: 20,
            height: 20,
            marginRight: SIZES.medium,
          }}
        />
        <TextInput
          placeholder="Search NFTs"
          style={{ flex: 1 }}
          onChangeText={onSearch}
        />
      </View>
    </View>
  );
};

export default HomeHeader;
