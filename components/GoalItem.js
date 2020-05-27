import React from "react";
import { View, Text, StyleSheet, TouchableHighlight, TouchableOpacity } from "react-native";

function GoalItem(props) {
    return (
        <TouchableOpacity activeOpacity={0.1} onPress={props.onDelete}>
            <View style={styles.goalListItem} >
                <Text>
                    {props.title}
                </Text>
            </View>
        </TouchableOpacity>
    );

};

const styles = StyleSheet.create({
    goalListItem: {
        marginVertical: 5,
        padding: 5,
        backgroundColor: "lavender",
        borderWidth: 1,
        borderStyle: "solid",
        borderRadius: 5,
    }
}
)
export default GoalItem;