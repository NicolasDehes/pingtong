import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import NunitoSemiBold from "./assets/Nunito-SemiBold.ttf";
import { useFonts } from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { styles } from "./App.styles";
import 'react-native-gesture-handler';

import { Button } from "@rneui/themed"

import LogIn from "./components/Form/LogIn/LogIn";
import SignUp from "./components/Form/SignUp/SignUp";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function LogInScreen({ navigation }) {
  return (
    <LogIn navigation={navigation} />
  );
}

function SignUpScreen({ navigation }) {
  return (
    <SignUp navigation={navigation} />
  );
}

function DrawerContent({ navigation }) {
  return (
    <View style={styles.drawerContent}>
      <TouchableOpacity
        style={styles.drawerItem}
        onPress={() => navigation.navigate("Se connecter")}
      >
        <Text>Se connecter</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.drawerItem}
        onPress={() => navigation.navigate("S'inscrire")}
      >
        <Text>S'inscrire</Text>
      </TouchableOpacity>
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={(props) => <DrawerContent {...props} />}>
        <Drawer.Screen name="Se connecter" component={LogInScreen} />
        <Drawer.Screen name="S'inscrire" component={SignUpScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
