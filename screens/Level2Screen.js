import * as React from "react";
import { StyleSheet, View, Text, Pressable, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const Level2Screen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.level2Screen}>
      <Pressable
        style={[
          styles.pressable,
          styles.pressableLayout,
          styles.pressableLayout1,
        ]}
        onPress={() => navigation.navigate("False3Lvl2Screen")}
      >
        <View style={[styles.kotak, styles.iconLayout]} />
        <Text style={[styles.spider, styles.spiderTypo]}>Spider</Text>
      </Pressable>
      <Pressable
        style={[
          styles.pressable1,
          styles.pressableLayout,
          styles.pressableLayout1,
        ]}
        onPress={() => navigation.navigate("False2Lvl2Screen")}
      >
        <View style={[styles.kotak, styles.iconLayout]} />
        <Text style={[styles.scorpion, styles.spiderTypo]}>Scorpion</Text>
      </Pressable>
      <Pressable
        style={[
          styles.pressable2,
          styles.pressableLayout,
          styles.pressableLayout1,
        ]}
        onPress={() => navigation.navigate("CorrectLvl2Screen")}
      >
        <View style={[styles.kotak, styles.iconLayout]} />
        <Text style={[styles.grasshopper, styles.spiderTypo]}>Grasshopper</Text>
      </Pressable>
      <Pressable
        style={[styles.pressable3, styles.pressableLayout]}
        onPress={() => navigation.navigate("False1Lvl2Screen")}
      >
        <View style={[styles.kotak, styles.iconLayout]} />
        <Text style={[styles.butterfly, styles.spiderTypo]}>Butterfly</Text>
      </Pressable>
      <Image
        style={styles.iphoneX11ProLightBas}
        resizeMode="cover"
        source={require("../assets/iphone-x-11-pro--light--base17.png")}
      />
      <Text style={[styles.level2, styles.level2Typo]}>Level 2</Text>
      <Text style={[styles.whatAnimalIs, styles.level2Typo]}>
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
        style={styles.grasshopperIcon}
        resizeMode="cover"
        source={require("../assets/grasshopper.png")}
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
  spiderTypo: {
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.poppinsSemibold,
    fontWeight: "600",
    fontSize: FontSize.size_base,
    top: "14.29%",
    position: "absolute",
  },
  level2Typo: {
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
  spider: {
    left: "39.88%",
  },
  pressable: {
    top: 632,
  },
  scorpion: {
    left: "35.83%",
  },
  pressable1: {
    top: 580,
  },
  grasshopper: {
    left: "29.28%",
  },
  pressable2: {
    top: 528,
  },
  butterfly: {
    left: "36.45%",
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
  level2: {
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
  grasshopperIcon: {
    top: 199,
    left: 29,
    borderRadius: Border.br_lg,
    width: 319,
    height: 167,
    position: "absolute",
  },
  level2Screen: {
    backgroundColor: Color.powderblue,
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
});

export default Level2Screen;
