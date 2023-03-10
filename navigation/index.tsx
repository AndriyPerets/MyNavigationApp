import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import ProfileScreen from "../screens/ProfileScreen";
import MainScreen from "../screens/MainScreen";
import SettingsScreen from "../screens/SettingsScreen";



const Stack = createStackNavigator();

export default function Navigation(){
    return(
        <NavigationContainer>
            <RootNavigator/>
        </NavigationContainer>
    )
}


function RootNavigator(){
    return(
        <Stack.Navigator initialRouteName="MainScreen">
            <Stack.Screen
                name="MainScreen"
                component={MainScreen}
                options={{title:"Main"}}
            />
            <Stack.Screen
                name="ProfileScreen"
                component={ProfileScreen}
                options={{title:"Profile"}}
            />
            <Stack.Screen
                name="SettingsScreen"
                component={SettingsScreen}
                options={{title:"Settings"}}
            />
        </Stack.Navigator>
    )
}