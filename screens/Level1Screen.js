import * as React from "react";
import { StyleSheet, View, Text, Pressable, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const Level1ScreenQ1 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.level1ScreenQ1}>
      <Pressable
        style={[
          styles.pressable,
          styles.pressableLayout,
          styles.pressablePosition,
        ]}
        onPress={() => navigation.navigate("Level1ScreenQ3")}
      >
        <View style={[styles.kotak, styles.iconLayout]} />
        <Text style={[styles.cow, styles.cowTypo]}>Cow</Text>
      </Pressable>
      <Pressable
        style={[
          styles.pressable1,
          styles.pressableLayout,
          styles.pressablePosition,
        ]}
        onPress={() => navigation.navigate("FalseLvl1Q2")}
      >
        <View style={[styles.kotak, styles.iconLayout]} />
        <Text style={[styles.ant, styles.cowTypo]}>Ant</Text>
      </Pressable>
      <Pressable
        style={[
          styles.pressable2,
          styles.pressableLayout,
          styles.pressablePosition,
        ]}
        onPress={() => navigation.navigate("Level1ScreenQ2")}
      >
        <View style={[styles.kotak, styles.iconLayout]} />
        <Text style={[styles.ant, styles.cowTypo]}>Fox</Text>
      </Pressable>
      <Pressable
        style={[styles.pressable3, styles.pressableLayout]}
        onPress={() => navigation.navigate("CorrectLvl1Q1")}
      >
        <View style={[styles.kotak, styles.iconLayout]} />
        <Text style={[styles.bird, styles.cowTypo]}>Bird</Text>
      </Pressable>
      <Image
        style={styles.iphoneX11ProLightBas}
        resizeMode="cover"
        source={require("../assets/iphone-x-11-pro--light--base17.png")}
      />
      <Text style={[styles.level1, styles.level1Typo]}>Level 1</Text>
      <Text style={[styles.whatAnimalIs, styles.level1Typo]}>
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
        style={styles.birdIcon}
        resizeMode="cover"
        source={require("../assets/bird.png")}
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
  pressablePosition: {
    left: 28,
    height: 42,
  },
  iconLayout: {
    height: "100%",
    width: "100%",
  },
  cowTypo: {
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.poppinsSemibold,
    fontWeight: "600",
    fontSize: FontSize.size_base,
    top: "14.29%",
    position: "absolute",
  },
  level1Typo: {
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
  cow: {
    left: "42.99%",
  },
  pressable: {
    top: 632,
  },
  ant: {
    left: "44.55%",
  },
  pressable1: {
    top: 580,
  },
  pressable2: {
    top: 528,
  },
  bird: {
    left: "43.61%",
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
  level1: {
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
  birdIcon: {
    top: 176,
    borderRadius: Border.br_lg,
    height: 214,
    width: 321,
    left: 28,
    position: "absolute",
  },
  level1ScreenQ1: {
    backgroundColor: Color.lightpink,
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
});

export default Level1ScreenQ1;
