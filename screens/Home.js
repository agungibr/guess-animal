import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Home = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.home}>
      <Pressable
        style={[styles.level4, styles.levelLayout]}
        onPress={() => navigation.navigate("Crocodile")}
      >
        <View style={[styles.level4Child, styles.levelLayout]} />
        <Text style={[styles.level41, styles.levelTypo]}>Level 4</Text>
      </Pressable>
      <Pressable
        style={[styles.level3, styles.levelLayout]}
        onPress={() => navigation.navigate("Camel")}
      >
        <View style={[styles.level4Child, styles.levelLayout]} />
        <Text style={[styles.level41, styles.levelTypo]}>Level 3</Text>
      </Pressable>
      <Pressable
        style={[styles.level2, styles.levelLayout]}
        onPress={() => navigation.navigate("Chiken")}
      >
        <View style={[styles.level4Child, styles.levelLayout]} />
        <Text style={[styles.level41, styles.levelTypo]}>Level 2</Text>
      </Pressable>
      <Pressable
        style={[styles.level1, styles.levelLayout]}
        onPress={() => navigation.navigate("Dog")}
      >
        <View style={[styles.level4Child, styles.levelLayout]} />
        <Text style={[styles.level11, styles.levelTypo]}>Level 1</Text>
      </Pressable>
      <Text style={styles.guessAnimal}>Guess Animal</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  levelLayout: {
    height: 45,
    width: 280,
    position: "absolute",
  },
  levelTypo: {
    height: 33,
    textAlign: "left",
    fontFamily: "Montserrat_medium",
    fontWeight: "500",
    lineHeight: 20,
    fontSize: 25,
    top: 10,
    color: "#000",
    position: "absolute",
  },
  level4Child: {
    top: 0,
    left: 0,
    borderRadius: 15,
    backgroundColor: "#fff",
    width: 312,
    height: 10,
    position: "absolute",
  },
  level41: {
    left: 93,
    width: 125,
  },
  level4: {
    top: 400,
    left: 31,
    width: 312,
    position: "absolute",
  },
  level3: {
    top: 325,
    left: 30,
    width: 312,
    position: "absolute",
  },
  level2: {
    top: 250,
    left: 30,
    width: 312,
    position: "absolute",
  },
  level11: {
    left: 90,
    width: 190,
  },
  level1: {
    top: 175,
    left: 30,
    width: 312,
    position: "absolute",
  },
  guessAnimal: {
    top: 111,
    left: 0,
    fontSize: 36,
    letterSpacing: 1.0,
    lineHeight: 50,
    fontWeight: "800",
    fontFamily: "Nunito_extrabold",
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 335,
    color: "#000",
    position: "absolute",
  },
  home: {
    backgroundColor: "#ffdca9",
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
});

export default Home;
