import * as React from "react";
import { StyleSheet, View, Text, Image } from "react-native";

const Cow = () => {
  return (
    <View style={styles.cow}>
      <View style={[styles.view, styles.viewLayout]}>
        <View style={styles.kotak} />
        <Text style={[styles.cow1, styles.antTypo]}>Cow</Text>
      </View>
      <View style={[styles.view1, styles.viewLayout]}>
        <View style={styles.kotak} />
        <Text style={[styles.ant, styles.antTypo]}>Ant</Text>
      </View>
      <View style={[styles.view2, styles.viewLayout]}>
        <View style={styles.kotak} />
        <Text style={[styles.ant, styles.antTypo]}>Fox</Text>
      </View>
      <View style={[styles.view3, styles.viewLayout]}>
        <View style={styles.kotak} />
        <Text style={[styles.bird, styles.antTypo]}>Bird</Text>
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
        style={styles.ad32cea58679bee75941384439c93aIcon}
        resizeMode="cover"
        source={require("../../assets/6ad32cea58679bee75941384439c93a4removebgpreview-1.png")}
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
  antTypo: {
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
  cow1: {
    left: "42.99%",
  },
  view: {
    top: 632,
    left: 28,
    height: 42,
    width: 321,
  },
  ant: {
    left: "44.55%",
  },
  view1: {
    top: 580,
    left: 28,
    height: 42,
    width: 321,
  },
  view2: {
    top: 528,
    left: 28,
    height: 42,
    width: 321,
  },
  bird: {
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
  ad32cea58679bee75941384439c93aIcon: {
    top: 179,
    left: 58,
    borderRadius: 20,
    width: 261,
    height: 214,
    position: "absolute",
  },
  cow: {
    backgroundColor: "#ffbab4",
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
});

export default Cow;
