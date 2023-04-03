import * as React from "react";
import { StyleSheet, View, Text, Image } from "react-native";

const Hawk = () => {
  return (
    <View style={styles.hawk}>
      <View style={[styles.view, styles.viewLayout]}>
        <View style={styles.kotak} />
        <Text style={[styles.polarBear, styles.hawk1Typo]}>Polar Bear</Text>
      </View>
      <View style={[styles.view1, styles.viewLayout]}>
        <View style={styles.kotak} />
        <Text style={[styles.hedgehog, styles.hawk1Typo]}>Hedgehog</Text>
      </View>
      <View style={[styles.view2, styles.viewLayout]}>
        <View style={styles.kotak} />
        <Text style={[styles.elephant, styles.hawk1Typo]}>Elephant</Text>
      </View>
      <View style={[styles.view3, styles.viewLayout]}>
        <View style={styles.kotak} />
        <Text style={[styles.hawk1, styles.hawk1Typo]}>Hawk</Text>
      </View>
      <Text style={[styles.level4, styles.level4Typo]}>Level 4</Text>
      <Text style={[styles.whatAnimalIs, styles.level4Typo]}>
        What animal is this?
      </Text>
      <Image
        style={styles.arrowIcon}
        resizeMode="cover"
        source={require("../../assets/arrow.png")}
      />
      <Image
        style={styles.sketsaGambarBurungElang6ReIcon}
        resizeMode="cover"
        source={require("../../assets/sketsagambarburungelang6removebgpreview.png")}
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
  hawk1Typo: {
    textAlign: "left",
    color: "#000",
    fontFamily: "Poppins_semibold",
    fontWeight: "600",
    fontSize: 20,
    top: "14.29%",
    position: "absolute",
  },
  level4Typo: {
    height: 41,
    textAlign: "center",
    fontFamily: "Montserrat_bold",
    fontWeight: "700",
    color: "#000",
    position: "absolute",
  },
  kotak: {
    height: "100%",
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
    width: "100%",
  },
  polarBear: {
    left: "33.96%",
  },
  view: {
    top: 632,
    left: 28,
    height: 42,
    width: 321,
  },
  hedgehog: {
    left: "33.64%",
  },
  view1: {
    top: 580,
    left: 28,
    height: 42,
    width: 321,
  },
  elephant: {
    left: "36.14%",
  },
  view2: {
    top: 528,
    left: 28,
    height: 42,
    width: 321,
  },
  hawk1: {
    left: "41.12%",
  },
  view3: {
    top: 476,
    left: 27,
  },
  level4: {
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
  arrowIcon: {
    top: 65,
    left: 21,
    width: 24,
    height: 24,
    position: "absolute",
  },
  sketsaGambarBurungElang6ReIcon: {
    top: 144,
    left: 0,
    width: 438,
    height: 277,
    position: "absolute",
  },
  hawk: {
    backgroundColor: "#febe8c",
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
});

export default Hawk;
