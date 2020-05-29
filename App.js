import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, ListView, ScrollView, FlatList } from 'react-native';
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [goals, setGoals] = useState([]);

  function addGoalHandler(goalTitle) {
    setGoals(prevGoals => 
      [...prevGoals, { key: Math.random().toString(), value: goalTitle}]); //it takes old list of --goals--, adds a --goal--
    //setEnteredGoal("");
    setIsAddMode(false); 
  };

  console.log("rerendered");
  console.log(goals);

  function removeGoalHandler(goalId) {
    console.log("deleted goal: " + goalId);
    console.log(JSON.stringify(goals));

    setGoals(prevGoals => {
      return prevGoals.filter((goal) => goal.key !== goalId);
    })
  }

  const [isAddMode, setIsAddMode] = useState(false);

  function cancelGoalAdditionHandler(){
    setIsAddMode(false);
  }

  return (
    //#region region
    /*<View 
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
    </View>*/
    //#endregion

    <View style={styles.mainView}>
      <Button title="Add a goal" onPress={() => setIsAddMode(true)}/>
      <GoalInput visible={isAddMode} onAddedGoal={addGoalHandler} onCancel={cancelGoalAdditionHandler} ></GoalInput>

      {/* Scrollview for fewer items, but for a lot of data, use flatlist.
          In scrollview you have to map data, in flatlist you can pass it in a prop */}
      <FlatList
        keyExtractor={(item, index) => item.key}
        data={goals}
        renderItem={itemData => (
       <GoalItem id={itemData.item.key} onDelete={removeGoalHandler.bind(this, itemData.item.key)} title={itemData.item.value}/>)}>
      </FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
  mainView: {
    padding: 50
  },
});
