import React, { useState } from 'react';
import {StyleSheet, Text, View} from 'react-native';
import { Switch } from 'react-native';

export default function SettingsScreen() {
    const [notificationsEnabled, setNotificationsEnabled] = useState(false);

    const toggleNotifications = () => {
        setNotificationsEnabled(previousState => !previousState);
    };

    return (
        <View style={styles.container}>
            <Text>Notifications</Text>
            <Switch
                trackColor={{ false: "#767577", true: "#81b0ff" }}
                thumbColor={notificationsEnabled ? "#f5dd4b" : "#f4f3f4"}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleNotifications}
                value={notificationsEnabled}
            />
            <Text>{notificationsEnabled ? 'Уведомления включены' : 'Уведомления выключены'}</Text>
        </View>
    );
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});