import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { useFonts } from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { styles } from "./App.styles";
import 'react-native-gesture-handler';

import { Button } from "@rneui/themed"

import LogIn from "./components/Form/LogIn/LogIn";
import SignUp from "./components/Form/SignUp/SignUp";

import { AppContext, AppContextElement} from "./components/Global/AppProvider";
import { useState } from "react";
import Questionnaire from "./components/Form/Questionnaire/Questionnaire";


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
      <TouchableOpacity
        style={styles.drawerItem}
        onPress={() => navigation.navigate("Questionnaire")}
      >
        <Text>Questionnaire</Text>
      </TouchableOpacity>
    </View>
  );
}

export default function App() {
  const [context, setContext] = useState<AppContextElement>({
    username : "Toto",
    userEmail: "Totoo@ping.com",
    theme    : 'light'
  });
  return (
    <AppContext.Provider value={context}>
      <NavigationContainer>
        <Drawer.Navigator drawerContent={(props) => <DrawerContent {...props} />}>
          <Drawer.Screen name="Se connecter" component={LogInScreen} />
          <Drawer.Screen name="S'inscrire" component={SignUpScreen} />
          <Drawer.Screen name="Questionnaire" component={Questionnaire} />
        </Drawer.Navigator>
      </NavigationContainer>
    </AppContext.Provider>
  );
}
