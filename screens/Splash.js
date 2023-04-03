import * as React from "react";
import { Image, StyleSheet, View, Text } from "react-native";

const Splash = () => {
  return (
    <View style={styles.splash}>
      <View style={styles.floorParent}>
        <View style={styles.appLogo}>
          <Text style={styles.guessAnimal}>{`Guess Animal`}</Text>
          <Image
            style={styles.logoIcon} source={require("../assets/logo.png")}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  guessAnimal: {
    top: 106,
    left: -13,
    fontSize: 36,
    letterSpacing: 5.4,
    lineHeight: 50,
    fontWeight: "800",
    fontFamily: "Nunito_extrabold",
    color: "#fff",
    textAlign: "center",
    position: "absolute",
  },
  logoIcon: {
    height: "60.24%",
    width: "80.65%",
    top: "0%",
    right: "9.68%",
    bottom: "39.76%",
    left: "9.68%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  appLogo: {
    top: 50,
    left: 241,
    width: 124,
    height: 166,
    position: "absolute",
  },
  floorParent: {
    top: 100,
    left: -125,
    width: 717,
    height: 650,
    position: "absolute",
  },
  splash: {
    backgroundColor: "#93bfcf",
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
});

export default Splash;