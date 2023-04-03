import * as React from "react";
import { StyleSheet, View, Text, Image } from "react-native";

const Frog = () => {
  return (
    <View style={styles.frog}>
      <View style={[styles.view, styles.viewLayout]}>
        <View style={styles.kotak} />
        <Text style={[styles.crow, styles.batTypo]}>Crow</Text>
      </View>
      <View style={[styles.view1, styles.viewLayout]}>
        <View style={styles.kotak} />
        <Text style={[styles.scorpion, styles.batTypo]}>Scorpion</Text>
      </View>
      <View style={[styles.view2, styles.viewLayout]}>
        <View style={styles.kotak} />
        <Text style={[styles.bat, styles.batTypo]}>Bat</Text>
      </View>
      <View style={[styles.view3, styles.viewLayout]}>
        <View style={styles.kotak} />
        <Text style={[styles.frog1, styles.batTypo]}>Frog</Text>
      </View>
      <Text style={[styles.level2, styles.level2Typo]}>Level 2</Text>
      <Text style={[styles.whatAnimalIs, styles.level2Typo]}>
        What animal is this?
      </Text>
      <Image
        style={styles.arrowIcon}
        resizeMode="cover"
        source={require("../../assets/arrow.png")}
      />
      <Image
        style={styles.pngtreeYellowSpottedCartoonIcon}
        resizeMode="cover"
        source={require("../../assets/pngtreeyellowspottedcartoonfrogclipartpngimage-2367913removebgpreview-1.png")}
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
  batTypo: {
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
  crow: {
    left: "42.06%",
  },
  view: {
    top: 632,
    left: 28,
    height: 42,
    width: 321,
  },
  scorpion: {
    left: "35.83%",
  },
  view1: {
    top: 580,
    left: 28,
    height: 42,
    width: 321,
  },
  bat: {
    left: "44.55%",
  },
  view2: {
    top: 528,
    left: 28,
    height: 42,
    width: 321,
  },
  frog1: {
    left: "42.99%",
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
  arrowIcon: {
    top: 65,
    left: 21,
    width: 24,
    height: 24,
    position: "absolute",
  },
  pngtreeYellowSpottedCartoonIcon: {
    top: 161,
    left: 16,
    width: 346,
    height: 282,
    position: "absolute",
  },
  frog: {
    backgroundColor: "#a7d2cb",
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
});

export default Frog;
