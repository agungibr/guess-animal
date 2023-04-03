const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";

import Splash from "./Splash";
import Home from "./Home";

import Ant from "./level1/Ant";
import Dog from "./level1/Dog";
import Cat from "./level1/Cat";
import Pig from "./level1/Pig";
import Cow from "./level1/Cow";

import Bird from "./level2/Bird";
import Dove from "./level2/Dove";
import Frog from "./level2/Frog";
import Duck from "./level2/Duck";
import Chiken from "./level2/Chiken";

import Snake from "./level3/Snake";
import Bat from "./level3/Bat";
import Monkey from "./level3/Monkey";
import Owl from "./level3/Owl";
import Camel from "./level3/Camel";

import Lion from "./level4/Lion";
import Bull from "./level4/Bull";
import Grizzly from "./level4/Grizzly";
import Hawk from "./level4/Hawk";
import Crocodile from "./level4/Crocodile";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);
  const [fontsLoaded, error] = useFonts({
    Poppins_semibold: require("../assets/fonts/Poppins_semibold.ttf"),
    Montserrat_medium: require("../assets/fonts/Montserrat_medium.ttf"),
    Montserrat_bold: require("../assets/fonts/Montserrat_bold.ttf"),
    Nunito_extrabold: require("../assets/fonts/Nunito_extrabold.ttf"),
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
              name="Home"
              component={Home}
            />
            <Stack.Screen
              name="Lion"
              component={Lion}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Bull"
              component={Bull}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Grizzly"
              component={Grizzly}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Hawk"
              component={Hawk}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Crocodile"
              component={Crocodile}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Snake"
              component={Snake}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Bat"
              component={Bat}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Monkey"
              component={Monkey}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Owl"
              component={Owl}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Camel"
              component={Camel}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Bird"
              component={Bird}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Dove"
              component={Dove}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Frog"
              component={Frog}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Duck"
              component={Duck}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Chiken"
              component={Chiken}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Ant"
              component={Ant}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Dog"
              component={Dog}
            />
            <Stack.Screen
              name="Cat"
              component={Cat}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Pig"
              component={Pig}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Cow"
              component={Cow}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Splash"
              component={Splash}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;
