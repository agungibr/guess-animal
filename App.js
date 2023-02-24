const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import Level4Screen from "./screens/Level4Screen";
import Level3Screen from "./screens/Level3Screen";
import Level2Screen from "./screens/Level2Screen";
import HomeScreen from "./screens/HomeScreen";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);
  const [fontsLoaded, error] = useFonts({
    Poppins: require("./assets/fonts/Poppins.ttf"),
    Poppins_semibold: require("./assets/fonts/Poppins_semibold.ttf"),
    Montserrat: require("./assets/fonts/Montserrat.ttf"),
    Montserrat_medium: require("./assets/fonts/Montserrat_medium.ttf"),
    Montserrat_bold: require("./assets/fonts/Montserrat_bold.ttf"),
    Nunito: require("./assets/fonts/Nunito.ttf"),
    Nunito_extrabold: require("./assets/fonts/Nunito_extrabold.ttf"),
  });

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="ScoreCardLvl4"
              component={ScoreCardLvl4}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="CorrectLvl4Screen"
              component={CorrectLvl4Screen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="False3Lvl4Screen"
              component={False3Lvl4Screen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="False2Lvl4Screen"
              component={False2Lvl4Screen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="False1Lvl4Screen"
              component={False1Lvl4Screen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Level4Screen"
              component={Level4Screen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="False3Lvl3Screen"
              component={False3Lvl3Screen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="False2Lvl3Screen"
              component={False2Lvl3Screen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ScoreCardLvl3"
              component={ScoreCardLvl3}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="CorrectLvl3Screen"
              component={CorrectLvl3Screen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="False1Lvl3Screen"
              component={False1Lvl3Screen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Level3Screen"
              component={Level3Screen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="False3Lvl2Screen"
              component={False3Lvl2Screen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="False2Lvl2Screen"
              component={False2Lvl2Screen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ScoreCardLvl2"
              component={ScoreCardLvl2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="CorrectLvl2Screen"
              component={CorrectLvl2Screen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="False1Lvl2Screen"
              component={False1Lvl2Screen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Level2Screen"
              component={Level2Screen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Level1ScreenQ3"
              component={Level1ScreenQ3}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="FalseLvl1Q2"
              component={FalseLvl1Q2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Level1ScreenQ2"
              component={Level1ScreenQ2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ScoreCardLvl1"
              component={ScoreCardLvl1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="CorrectLvl1Q1"
              component={CorrectLvl1Q1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Level1ScreenQ1"
              component={Level1ScreenQ1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="HomeScreen"
              component={HomeScreen}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;
