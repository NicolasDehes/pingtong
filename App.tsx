import { NavigationContainer } from "@react-navigation/native";
import { DrawerContentScrollView, DrawerItemList, createDrawerNavigator } from "@react-navigation/drawer";

import 'react-native-gesture-handler';

import LogIn from "./components/Form/LogIn/LogIn";
import SignUp from "./components/Form/SignUp/SignUp";

import { styles } from "./App.style";

import { AppContext, AppContextElement} from "./components/Global/AppProvider";
import { useFonts } from "expo-font";
import { useState } from "react";
import Questionnaire from "./components/Form/Questionnaire/Questionnaire";

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

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView style={styles.drawerContent} {...props}>
      <DrawerItemList styles={{color: 'red'}} {...props} />
    </DrawerContentScrollView>
  );
}

export default function App() {
  // Load context
  const [context, setContext] = useState<AppContextElement>({
    username : "Toto",
    userEmail: "Totoo@ping.com",
    theme    : 'light'
  });

  // Load font
  const [fontLoaded] = useFonts({
    'Nunito-Light'     : require('./assets/fonts/Nunito-Light.ttf'),
    'Nunito-Regular'   : require('./assets/fonts/Nunito-Regular.ttf'),
    'Nunito-SemiBold'  : require('./assets/fonts/Nunito-SemiBold.ttf'),
  });

  if (!fontLoaded) {
    return null;
  }

  return (
    <AppContext.Provider value={context}>
      <NavigationContainer>
        <Drawer.Navigator screenOptions={{
          drawerItemStyle: styles.drawerItem,
          drawerLabelStyle: styles.drawerLabel,
        }} drawerContent={(props) => <CustomDrawerContent {...props} />}>
          <Drawer.Screen name="Se connecter" component={LogInScreen} />
          <Drawer.Screen name="S'inscrire" component={SignUpScreen} />
          <Drawer.Screen name="Questionnaire" component={Questionnaire} />
        </Drawer.Navigator>
      </NavigationContainer>
    </AppContext.Provider>
  );
}
