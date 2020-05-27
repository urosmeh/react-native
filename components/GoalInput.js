import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet, Modal } from "react-native";

function GoalInput(props) {
    const [enteredGoal, setEnteredGoal] = useState("");
    const enteredGoalHandler = (enteredText) => { //goal input handler
        setEnteredGoal(enteredText);
    };

    return (
        <Modal visible={props.visible} animationType="fade">
            <View style={styles.goalsForm}>
                <TextInput
                    style={styles.goalsTextInput}
                    onChangeText={enteredGoalHandler}
                    placeholder="write your goals here"
                    value={enteredGoal}></TextInput>

                <Button
                    title="Add"
                    onPress={() => props.onAddedGoal(enteredGoal)} />
            </View>
        </Modal>

    );
};

const styles = StyleSheet.create({
    goalsForm: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    },

    goalsTextInput: {
        width: "80%",
        padding: 5,
        borderWidth: 1,
        borderRadius: 5,
        marginBottom: 10,
    },
});

export default GoalInput;