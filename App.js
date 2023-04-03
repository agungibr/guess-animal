import React, { useState, useEffect, useRef } from 'react';
import { View, Image, StyleSheet, Animated } from 'react-native';
import SplashScreen from './screens/Splash';
import Navigation from './screens/index';

import { useFonts } from "expo-font";

const App = () => {
  const [appIsReady, setAppIsReady] = useState(false);
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    // Put your app initialization logic here, such as loading data or setting up services
    // When your app is ready to be rendered, set appIsReady to true
    setTimeout(() => {
      setAppIsReady(true);
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 3000,
        useNativeDriver: true,
      }).start();
    }, 3000);
  }, []);

  if (!appIsReady) {
    return <SplashScreen />;
  }

  return (
    <Navigation/>
  );
};

export default App;