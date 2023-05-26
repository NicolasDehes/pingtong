import { NavigationContainer } from "@react-navigation/native";
import { DrawerContentScrollView, DrawerItemList, createDrawerNavigator } from "@react-navigation/drawer";
import 'react-native-gesture-handler';

import LogIn from "./components/Form/LogIn/LogIn";
import SignUp from "./components/Form/SignUp/SignUp";
import { styles } from "./App.style";

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
  return (
    <NavigationContainer>
      <Drawer.Navigator screenOptions={{
        drawerItemStyle: styles.drawerItem,
        drawerLabelStyle: styles.drawerLabel,
      }} drawerContent={(props) => <CustomDrawerContent {...props} />}>
        <Drawer.Screen name="Se connecter" component={LogInScreen} />
        <Drawer.Screen name="S'inscrire" component={SignUpScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
