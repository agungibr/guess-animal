import * as React from "react";
import axios from 'axios';
import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Dog = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.dog}>
      <View style={[styles.view, styles.viewLayout]}>
        <View style={[styles.kotak, styles.iconLayout]} />
        <Text style={[styles.dog1, styles.antTypo]}>Dog</Text>
      </View>
      <View style={[styles.view1, styles.viewLayout]}>
        <View style={[styles.kotak, styles.iconLayout]} />
        <Text style={[styles.ant, styles.antTypo]}>Ant</Text>
      </View>
      <View style={[styles.view2, styles.viewLayout]}>
        <View style={[styles.kotak, styles.iconLayout]} />
        <Text style={[styles.ant, styles.antTypo]}>Fox</Text>
      </View>
      <View style={[styles.view3, styles.viewLayout]}>
        <View style={[styles.kotak, styles.iconLayout]} />
        <Text style={[styles.bird, styles.antTypo]}>Bird</Text>
      </View>
      <Text style={[styles.level1, styles.level1Typo]}>Level 1</Text>
      <Text style={[styles.whatAnimalIs, styles.level1Typo]}>
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
        style={styles.pngClipartDogCartoonPuppyIcon}
        resizeMode="cover"
        source={require("../../assets/pngclipartdogcartoonpuppycutedogcutepuppypuppyanimalcartoondoglineartremovebgpreview-1.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  viewLayout: {
    height: 35,
    width: 280,
    position: "absolute",
  },
  iconLayout: {
    height: "100%",
    width: "100%",
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
  dog1: {
    left: "42.99%",
  },
  view: {
    top: 430,
    left: 25,
    height: 42,
    width: 321,
  },
  ant: {
    left: "44.55%",
  },
  view1: {
    top: 380,
    left: 25,
    height: 42,
    width: 321,
  },
  view2: {
    top: 330,
    left: 25,
    height: 42,
    width: 321,
  },
  bird: {
    left: "40%",
  },
  view3: {
    top: 280,
    left: 25,
  },
  level1: {
    top: 50,
    left: 90,
    fontSize: 30,
    width: 156,
  },
  whatAnimalIs: {
    top: 225,
    left: 25,
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
  pngClipartDogCartoonPuppyIcon: {
    top: 100,
    left: 125,
    borderRadius: 20,
    width: 78,
    height: 114,
    position: "absolute",
  },
  dog: {
    backgroundColor: "#ffbab4",
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
});

export default Dog;
