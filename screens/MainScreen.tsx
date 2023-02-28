import {NativeStackHeaderProps} from "@react-navigation/native-stack";
import {Button, StyleSheet, View} from "react-native";
import ProfileScreen, {user} from "./ProfileScreen";
import SettingsScreen from "./SettingsScreen";


export default function MainScreen({navigation}:NativeStackHeaderProps){

    return(
        <View style={styles.container}>
            <Button
                title="Profile"
                onPress={() => navigation.navigate('ProfileScreen', {user})}
            />
            <Button
                title="Settings"
                onPress={() => navigation.navigate('SettingsScreen')}
            />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});