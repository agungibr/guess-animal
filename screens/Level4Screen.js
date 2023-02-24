import * as React from "react";
import { StyleSheet, View, Text, Pressable, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const Level4Screen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.level4Screen}>
      <Pressable
        style={[
          styles.pressable,
          styles.pressableLayout,
          styles.pressableLayout1,
        ]}
        onPress={() => navigation.navigate("CorrectLvl4Screen")}
      >
        <View style={[styles.kotak, styles.iconLayout]} />
        <Text style={[styles.polarBear, styles.buffaloTypo]}>Polar Bear</Text>
      </Pressable>
      <Pressable
        style={[
          styles.pressable1,
          styles.pressableLayout,
          styles.pressableLayout1,
        ]}
        onPress={() => navigation.navigate("False3Lvl4Screen")}
      >
        <View style={[styles.kotak, styles.iconLayout]} />
        <Text style={[styles.hedgehog, styles.buffaloTypo]}>Hedgehog</Text>
      </Pressable>
      <Pressable
        style={[
          styles.pressable2,
          styles.pressableLayout,
          styles.pressableLayout1,
        ]}
        onPress={() => navigation.navigate("False2Lvl4Screen")}
      >
        <View style={[styles.kotak, styles.iconLayout]} />
        <Text style={[styles.elephant, styles.buffaloTypo]}>Elephant</Text>
      </Pressable>
      <Pressable
        style={[styles.pressable3, styles.pressableLayout]}
        onPress={() => navigation.navigate("False1Lvl4Screen")}
      >
        <View style={[styles.kotak, styles.iconLayout]} />
        <Text style={[styles.buffalo, styles.buffaloTypo]}>Buffalo</Text>
      </Pressable>
      <Image
        style={styles.iphoneX11ProLightBas}
        resizeMode="cover"
        source={require("../assets/iphone-x-11-pro--light--base1.png")}
      />
      <Text style={[styles.level4, styles.level4Typo]}>Level 4</Text>
      <Text style={[styles.whatAnimalIs, styles.level4Typo]}>
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
        style={styles.polarBearIcon}
        resizeMode="cover"
        source={require("../assets/polar-bear.png")}
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
  buffaloTypo: {
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.poppinsSemibold,
    fontWeight: "600",
    fontSize: FontSize.size_base,
    top: "14.29%",
    position: "absolute",
  },
  level4Typo: {
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
  polarBear: {
    left: "33.96%",
  },
  pressable: {
    top: 632,
  },
  hedgehog: {
    left: "33.64%",
  },
  pressable1: {
    top: 580,
  },
  elephant: {
    left: "36.14%",
  },
  pressable2: {
    top: 528,
  },
  buffalo: {
    left: "38.94%",
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
  level4: {
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
  polarBearIcon: {
    top: 189,
    left: 32,
    borderRadius: Border.br_lg,
    width: 311,
    height: 187,
    position: "absolute",
  },
  level4Screen: {
    backgroundColor: Color.burlywood,
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
});

export default Level4Screen;
