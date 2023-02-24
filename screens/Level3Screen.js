import * as React from "react";
import { StyleSheet, View, Text, Pressable, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const Level3Screen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.level3Screen}>
      <Pressable
        style={[
          styles.pressable,
          styles.pressableLayout,
          styles.pressableLayout1,
        ]}
        onPress={() => navigation.navigate("False3Lvl3Screen")}
      >
        <View style={[styles.kotak, styles.iconLayout]} />
        <Text style={[styles.cat, styles.catTypo]}>Cat</Text>
      </Pressable>
      <Pressable
        style={[
          styles.pressable1,
          styles.pressableLayout,
          styles.pressableLayout1,
        ]}
        onPress={() => navigation.navigate("False2Lvl3Screen")}
      >
        <View style={[styles.kotak, styles.iconLayout]} />
        <Text style={[styles.dog, styles.catTypo]}>Dog</Text>
      </Pressable>
      <Pressable
        style={[
          styles.pressable2,
          styles.pressableLayout,
          styles.pressableLayout1,
        ]}
        onPress={() => navigation.navigate("CorrectLvl3Screen")}
      >
        <View style={[styles.kotak, styles.iconLayout]} />
        <Text style={[styles.fox, styles.catTypo]}>Fox</Text>
      </Pressable>
      <Pressable
        style={[styles.pressable3, styles.pressableLayout]}
        onPress={() => navigation.navigate("False1Lvl3Screen")}
      >
        <View style={[styles.kotak, styles.iconLayout]} />
        <Text style={[styles.wolf, styles.catTypo]}>Wolf</Text>
      </Pressable>
      <Image
        style={styles.iphoneX11ProLightBas}
        resizeMode="cover"
        source={require("../assets/iphone-x-11-pro--light--base11.png")}
      />
      <Text style={[styles.level3, styles.level3Typo]}>Level 3</Text>
      <Text style={[styles.whatAnimalIs, styles.level3Typo]}>
        What animal is this?
      </Text>
      <Pressable
        style={styles.arrow}
        onPress={() => navigation.navigate("HomeScreen")}
      >
        <Image
          style={styles.iconLayout}
          resizeMode="cover"
          source={require("../assets/arrow.png")}
        />
      </Pressable>
      <Image
        style={styles.foxIcon}
        resizeMode="cover"
        source={require("../assets/fox.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  pressableLayout: {
    height: 42,
    width: 321,
    position: "absolute",
  },
  pressableLayout1: {
    left: 28,
    height: 42,
    width: 321,
  },
  iconLayout: {
    height: "100%",
    width: "100%",
  },
  catTypo: {
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.poppinsSemibold,
    fontWeight: "600",
    fontSize: FontSize.size_base,
    top: "14.29%",
    position: "absolute",
  },
  level3Typo: {
    height: 41,
    textAlign: "center",
    fontFamily: FontFamily.montserratBold,
    fontWeight: "700",
    color: Color.black,
    position: "absolute",
  },
  kotak: {
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderRadius: Border.br_sm,
    backgroundColor: Color.lightgoldenrodyellow,
    borderStyle: "solid",
    borderColor: "rgba(0, 0, 0, 0.09)",
    borderWidth: 1,
    position: "absolute",
  },
  cat: {
    left: "44.24%",
  },
  pressable: {
    top: 632,
  },
  dog: {
    left: "43.61%",
  },
  pressable1: {
    top: 580,
  },
  fox: {
    left: "44.55%",
  },
  pressable2: {
    top: 528,
  },
  wolf: {
    left: "42.99%",
  },
  pressable3: {
    top: 476,
    left: 27,
  },
  iphoneX11ProLightBas: {
    top: 0,
    left: 0,
    width: 375,
    height: 44,
    position: "absolute",
    overflow: "hidden",
  },
  level3: {
    top: 105,
    left: 110,
    fontSize: FontSize.size_2xl,
    width: 156,
  },
  whatAnimalIs: {
    top: 419,
    left: 30,
    fontSize: FontSize.size_lg,
    width: 315,
  },
  arrow: {
    left: 21,
    top: 65,
    width: 24,
    height: 24,
    position: "absolute",
  },
  foxIcon: {
    top: 176,
    left: 34,
    borderRadius: Border.br_lg,
    width: 310,
    height: 223,
    position: "absolute",
  },
  level3Screen: {
    backgroundColor: Color.cornflowerblue,
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
});

export default Level3Screen;
