import * as React from 'react';
import { StyleSheet, View, Text, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Color, FontFamily, FontSize, Border } from '../GlobalStyles';

const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.homeScreen}>
      <Pressable
        style={[styles.level4, styles.levelLayout, styles.levelPosition]}
        onPress={() => navigation.navigate('Level4Screen')}>
        <View style={[styles.level4Child, styles.levelLayout]} />
        <Text style={[styles.level41, styles.levelTypo]}>Level 4</Text>
      </Pressable>
      <Pressable
        style={[styles.level3, styles.levelLayout, styles.levelPosition]}
        onPress={() => navigation.navigate('Level3Screen')}>
        <View style={[styles.level4Child, styles.levelLayout]} />
        <Text style={[styles.level41, styles.levelTypo]}>Level 3</Text>
      </Pressable>
      <Pressable
        style={[styles.level2, styles.levelLayout, styles.levelPosition]}
        onPress={() => navigation.navigate('Level2Screen')}>
        <View style={[styles.level4Child, styles.levelLayout]} />
        <Text style={[styles.level41, styles.levelTypo]}>Level 2</Text>
      </Pressable>
      <Pressable
        style={[styles.level1, styles.levelLayout, styles.levelPosition]}
        onPress={() => navigation.navigate('Level1ScreenQ1')}>
        <View style={[styles.level4Child, styles.levelLayout]} />
        <Text style={[styles.level11, styles.levelTypo]}>Level 1</Text>
      </Pressable>
      <Text style={styles.guessAnimal}>Guess Animal</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  levelLayout: {
    height: 95,
    width: 312,
    position: 'absolute',
  },
  levelPosition: {
    left: 31,
    width: 312,
    position: 'absolute',
  },
  levelTypo: {
    height: 33,
    textAlign: 'left',
    fontFamily: FontFamily.montserratMedium,
    fontWeight: '500',
    lineHeight: 27,
    fontSize: FontSize.size_xl,
    top: 31,
    color: Color.black,
    position: 'absolute',
  },
  level4Child: {
    top: 0,
    left: 0,
    borderRadius: Border.br_md,
    backgroundColor: Color.white,
    width: 312,
    position: 'absolute',
  },
  level41: {
    left: 93,
    width: 125,
  },
  level4: {
    top: 618,
  },
  level3: {
    top: 488,
  },
  level2: {
    top: 358,
  },
  level11: {
    left: 96,
    width: 119,
  },
  level1: {
    top: 228,
  },
  guessAnimal: {
    top: 111,
    left: 20,
    fontSize: 36,
    letterSpacing: 5.4,
    lineHeight: 50,
    fontWeight: '800',
    fontFamily: FontFamily.nunitoExtrabold,
    textAlign: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 335,
    color: Color.black,
    position: 'absolute',
  },
  homeScreen: {
    backgroundColor: '#ffdca9',
    flex: 1,
    width: '100%',
    height: 812,
    overflow: 'hidden',
  },
});

export default HomeScreen;
