import * as React from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Camel = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.camel}>
      <View style={[styles.view, styles.viewLayout]}>
        <View style={[styles.kotak, styles.iconLayout]} />
        <Text style={[styles.cat, styles.catTypo]}>Cat</Text>
      </View>
      <View style={[styles.view1, styles.viewLayout]}>
        <View style={[styles.kotak, styles.iconLayout]} />
        <Text style={[styles.dog, styles.catTypo]}>Dog</Text>
      </View>
      <View style={[styles.view2, styles.viewLayout]}>
        <View style={[styles.kotak, styles.iconLayout]} />
        <Text style={[styles.fox, styles.catTypo]}>Fox</Text>
      </View>
      <View style={[styles.view3, styles.viewLayout]}>
        <View style={[styles.kotak, styles.iconLayout]} />
        <Text style={[styles.camel1, styles.catTypo]}>Camel</Text>
      </View>
      <Text style={[styles.level3, styles.level3Typo]}>Level 3</Text>
      <Text style={[styles.whatAnimalIs, styles.level3Typo]}>
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
        style={styles.kisspngCamelAnimationClipAIcon}
        resizeMode="cover"
        source={require("../../assets/kisspngcamelanimationclipart5af62d1316dbc1.png")}
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
  catTypo: {
    textAlign: "left",
    color: "#000",
    fontFamily: "Poppins_semibold",
    fontWeight: "600",
    fontSize: 20,
    top: "14.29%",
    position: "absolute",
  },
  level3Typo: {
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
  cat: {
    left: "44.24%",
  },
  view: {
    top: 632,
    left: 28,
    height: 42,
    width: 321,
  },
  dog: {
    left: "43.61%",
  },
  view1: {
    top: 580,
    left: 28,
    height: 42,
    width: 321,
  },
  fox: {
    left: "44.55%",
  },
  view2: {
    top: 528,
    left: 28,
    height: 42,
    width: 321,
  },
  camel1: {
    left: "39.56%",
  },
  view3: {
    top: 476,
    left: 27,
  },
  level3: {
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
  kisspngCamelAnimationClipAIcon: {
    top: 181,
    left: 0,
    width: 384,
    height: 256,
    position: "absolute",
  },
  camel: {
    backgroundColor: "#a8a3ec",
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
});

export default Camel;
