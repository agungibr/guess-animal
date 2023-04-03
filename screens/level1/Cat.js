import * as React from "react";
import { StyleSheet, View, Text, Image } from "react-native";

const Cat = () => {
  return (
    <View style={styles.cat}>
      <View style={[styles.view, styles.viewLayout]}>
        <View style={styles.kotak} />
        <Text style={[styles.wolf, styles.pigTypo]}>Wolf</Text>
      </View>
      <View style={[styles.view1, styles.viewLayout]}>
        <View style={styles.kotak} />
        <Text style={[styles.pig, styles.pigTypo]}>Pig</Text>
      </View>
      <View style={[styles.view2, styles.viewLayout]}>
        <View style={styles.kotak} />
        <Text style={[styles.cat1, styles.pigTypo]}>Cat</Text>
      </View>
      <View style={[styles.view3, styles.viewLayout]}>
        <View style={styles.kotak} />
        <Text style={[styles.frog, styles.pigTypo]}>Frog</Text>
      </View>
      <Text style={[styles.level1, styles.level1Typo]}>Level 1</Text>
      <Text style={[styles.whatAnimalIs, styles.level1Typo]}>
        What animal is this?
      </Text>
      <Image
        style={styles.arrowIcon}
        resizeMode="cover"
        source={require("../../assets/arrow.png")}
      />
      <Image
        style={styles.icon}
        resizeMode="cover"
        source={require("../../assets/1482-1.png")}
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
  pigTypo: {
    textAlign: "left",
    color: "#000",
    fontFamily: "Poppins_semibold",
    fontWeight: "600",
    fontSize: 20,
    top: "14.29%",
    position: "absolute",
  },
  level1Typo: {
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
  wolf: {
    left: "42.99%",
  },
  view: {
    top: 632,
    left: 28,
    height: 42,
    width: 321,
  },
  pig: {
    left: "44.55%",
  },
  view1: {
    top: 580,
    left: 28,
    height: 42,
    width: 321,
  },
  cat1: {
    left: "44.24%",
  },
  view2: {
    top: 528,
    left: 28,
    height: 42,
    width: 321,
  },
  frog: {
    left: "43.61%",
  },
  view3: {
    top: 476,
    left: 27,
  },
  level1: {
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
  icon: {
    top: 166,
    left: 75,
    width: 218,
    height: 234,
    position: "absolute",
  },
  cat: {
    backgroundColor: "#ffbab4",
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
});

export default Cat;
