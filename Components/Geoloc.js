import React from "react";
import { StyleSheet, Text, View, SafeAreaView, PermissionsAndroid, Button } from "react-native";

const requestLocationPermission = async () => {
    try {
        const granted = await PermissionsAndroid.request(
            /* J'ai changé le PermissionsAndroid.PERMISSIONS.CAMERA par la location => reactnative.dev/docs/permissionsandroid.html */
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
            title: "Location Permission",
            message:
            "Authoriser l'application à acceder aux données de localisation GPS ",
            buttonNeutral: "Ask Me Later",
            buttonNegative: "Cancel",
            buttonPositive: "OK"
        }
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log("You can use the GPS ");
        } else {
        console.log("Location permission denied");
        }
    } catch (err) {
        console.warn(err);
    }
};

const App = () => (
    <View style={styles.container}>
        <Text style={styles.item}>Try permissions</Text>
        <Button title="request permissions" onPress={requestLocationPermission} />
    </View>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        paddingTop: 5,
        backgroundColor: "#ecf0f1",
        padding: 8
    },
    item: {
        margin: 24,
        fontSize: 18,
        fontWeight: "bold",
        textAlign: "center"
    }
});

export default App;