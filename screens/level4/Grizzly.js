import * as React from "react";
import { StyleSheet, View, Text, Image } from "react-native";

const Grizzly = () => {
  return (
    <View style={styles.grizzly}>
      <View style={[styles.view, styles.viewLayout]}>
        <View style={styles.kotak} />
        <Text style={[styles.grizzly1, styles.buffaloTypo]}>Grizzly</Text>
      </View>
      <View style={[styles.view1, styles.viewLayout]}>
        <View style={styles.kotak} />
        <Text style={[styles.hedgehog, styles.buffaloTypo]}>Hedgehog</Text>
      </View>
      <View style={[styles.view2, styles.viewLayout]}>
        <View style={styles.kotak} />
        <Text style={[styles.elephant, styles.buffaloTypo]}>Elephant</Text>
      </View>
      <View style={[styles.view3, styles.viewLayout]}>
        <View style={styles.kotak} />
        <Text style={[styles.buffalo, styles.buffaloTypo]}>Buffalo</Text>
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
        style={styles.pngtreeBigGrizzlyBearStandIcon}
        resizeMode="cover"
        source={require("../../assets/pngtreebiggrizzlybearstandingpngimage-1989231removebgpreview.png")}
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
  buffaloTypo: {
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
  grizzly1: {
    left: "39.56%",
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
  buffalo: {
    left: "38.94%",
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
  pngtreeBigGrizzlyBearStandIcon: {
    top: 159,
    left: 64,
    width: 247,
    height: 247,
    position: "absolute",
  },
  grizzly: {
    backgroundColor: "#febe8c",
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
});

export default Grizzly;
