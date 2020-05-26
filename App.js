import React, { useState } from 'react';
import { StyleSheet, Text, View,  Button, TextInput} from 'react-native';

export default function App() {
  const [outputText, setOutputText] = useState("Initial ...")

  return (
    <View 
      style={{
        padding: 50,
        flexDirection: "row",
        width: "80%",
        height: 300,
        justifyContent: "space-between",
        alignItems: "center"
      }}>
      <View style={{
        backgroundColor: "red",
        flex: 3,
        justifyContent: "center",
        alignItems: "center"
      }}>
        <Text>1</Text>
      </View>

      <View style={{
        backgroundColor: "green", 
        flex: 2, 
        justifyContent: "center",
        alignItems: "center"
      }}>
        <Text>2</Text>
      </View>

      <View style={{
        backgroundColor: "blue",
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
      }}>
        <Text>3</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
});
