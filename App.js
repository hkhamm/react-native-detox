import { StatusBar } from "expo-status-bar"
import React, { useState } from "react"
import { Button, StyleSheet, Text, View } from "react-native"

export default function App() {
    const [text, setText] = useState("Welcome")
    return (
        <View style={styles.container}>
            <Text testID="welcome">{text}!!!</Text>
            <Button title="Say Hello" testID="hello_button" onPress={() => setText("Hello")} />
            <Button title="Say World" testID="world_button" onPress={() => setText("World")} />
            <StatusBar style="auto" />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
})
