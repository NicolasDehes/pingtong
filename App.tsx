import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import NunitoSemiBold from './assets/Nunito-SemiBold.ttf';
import { useFonts } from "expo-font"
// import { NavigationContainer } from "@react-navigation/native";
// import { createStackNavigator } from "@react-navigation/stack";
// import LogIn from './components/Form/LogIn/LogIn'
import SignUp from './components/Form/SignUp/SignUp'

// const Stack = createStackNavigator();

export default function App() {
  const [isFontLoaded] = useFonts({
    "Nunito-SemiBold": NunitoSemiBold,
  });
  return (
    // <NavigationContainer>
    //   <Stack.Navigator initialRouteName="LogIn">
    //     <Stack.Screen name="LogIn" component={LogIn} />
    //     <Stack.Screen name="SignUp" component={SignUp} />
    //   </Stack.Navigator>
    // </NavigationContainer>
    <SignUp />
  );
}