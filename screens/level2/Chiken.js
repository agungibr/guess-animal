import * as React from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Chiken = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.chiken}>
      <View style={[styles.view, styles.viewLayout]}>
        <View style={[styles.kotak, styles.iconLayout]} />
        <Text style={[styles.spider, styles.spiderTypo]}>Spider</Text>
      </View>
      <View style={[styles.view1, styles.viewLayout]}>
        <View style={[styles.kotak, styles.iconLayout]} />
        <Text style={[styles.chicken, styles.spiderTypo]}>Chicken</Text>
      </View>
      <View style={[styles.view2, styles.viewLayout]}>
        <View style={[styles.kotak, styles.iconLayout]} />
        <Text style={[styles.grasshopper, styles.spiderTypo]}>Grasshopper</Text>
      </View>
      <View style={[styles.view3, styles.viewLayout]}>
        <View style={[styles.kotak, styles.iconLayout]} />
        <Text style={[styles.butterfly, styles.spiderTypo]}>Butterfly</Text>
      </View>
      <Text style={[styles.level2, styles.level2Typo]}>Level 2</Text>
      <Text style={[styles.whatAnimalIs, styles.level2Typo]}>
        What animal is this?
      </Text>
      <Pressable
        style={styles.arrow}
        onPress={() => navigation.navigate("Home")}
      >
        <Image
          style={styles.iconLayout}
          resizeMode="cover"
          source={require("../../assets/arrow.png")}
        />
      </Pressable>
      <Image
        style={styles.cartoonHen5a2bc498e104291Icon}
        resizeMode="cover"
        source={require("../../assets/cartoonhen5a2bc498e10429-1.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  viewLayout: {
    height: 42,
    width: 321,
    position: "absolute",
  },
  iconLayout: {
    height: "100%",
    width: "100%",
  },
  spiderTypo: {
    textAlign: "left",
    color: "#000",
    fontFamily: "Poppins_semibold",
    fontWeight: "600",
    fontSize: 20,
    top: "14.29%",
    position: "absolute",
  },
  level2Typo: {
    height: 41,
    textAlign: "center",
    fontFamily: "Montserrat_bold",
    fontWeight: "700",
    color: "#000",
    position: "absolute",
  },
  kotak: {
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderRadius: 10,
    backgroundColor: "#ceedc7",
    borderStyle: "solid",
    borderColor: "rgba(0, 0, 0, 0.09)",
    borderWidth: 1,
    position: "absolute",
  },
  spider: {
    left: "39.88%",
  },
  view: {
    top: 632,
    left: 28,
    height: 42,
    width: 321,
  },
  chicken: {
    left: "35.83%",
  },
  view1: {
    top: 580,
    left: 28,
    height: 42,
    width: 321,
  },
  grasshopper: {
    left: "29.28%",
  },
  view2: {
    top: 528,
    left: 28,
    height: 42,
    width: 321,
  },
  butterfly: {
    left: "36.45%",
  },
  view3: {
    top: 476,
    left: 27,
  },
  level2: {
    top: 105,
    left: 110,
    fontSize: 40,
    width: 156,
  },
  whatAnimalIs: {
    top: 419,
    left: 30,
    fontSize: 25,
    width: 315,
  },
  arrow: {
    left: 21,
    top: 65,
    width: 24,
    height: 24,
    position: "absolute",
  },
  cartoonHen5a2bc498e104291Icon: {
    top: 158,
    left: 48,
    width: 290,
    height: 250,
    position: "absolute",
  },
  chiken: {
    backgroundColor: "#a7d2cb",
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
});

export default Chiken;
