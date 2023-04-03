import * as React from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Crocodile = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.crocodile}>
      <View style={[styles.view, styles.viewLayout]}>
        <View style={[styles.kotak, styles.iconLayout]} />
        <Text style={[styles.polarBear, styles.hedgehogTypo]}>Polar Bear</Text>
      </View>
      <View style={[styles.view1, styles.viewLayout]}>
        <View style={[styles.kotak, styles.iconLayout]} />
        <Text style={[styles.hedgehog, styles.hedgehogTypo]}>Hedgehog</Text>
      </View>
      <View style={[styles.view2, styles.viewLayout]}>
        <View style={[styles.kotak, styles.iconLayout]} />
        <Text style={[styles.elephant, styles.hedgehogTypo]}>Elephant</Text>
      </View>
      <View style={[styles.view3, styles.viewLayout]}>
        <View style={[styles.kotak, styles.iconLayout]} />
        <Text style={[styles.polarBear, styles.hedgehogTypo]}>Crocodille</Text>
      </View>
      <Text style={[styles.level4, styles.level4Typo]}>Level 4</Text>
      <Text style={[styles.whatAnimalIs, styles.level4Typo]}>
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
        style={styles.kisspngCrocodileAlligatorCaIcon}
        resizeMode="cover"
        source={require("../../assets/kisspngcrocodilealligatorcartooncrocodile5ab3dfb9c9c2f3.png")}
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
  hedgehogTypo: {
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
  arrow: {
    left: 21,
    top: 65,
    width: 24,
    height: 24,
    position: "absolute",
  },
  kisspngCrocodileAlligatorCaIcon: {
    top: 172,
    left: 17,
    width: 345,
    height: 222,
    position: "absolute",
  },
  crocodile: {
    backgroundColor: "#febe8c",
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
});

export default Crocodile;
