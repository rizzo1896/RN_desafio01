import React, { useState } from "react";

// Components
import { Text, TextInput, TouchableHighlight, View } from "react-native";
import { ToDoList } from "../../components/todoList";

// Icons
import { Ionicons } from "@expo/vector-icons";

// Types
import { taskProps } from "../../types/task";

// Stores
import TasksStore from "../../store/tasks";

// Styles
import { styles } from "./styles";

export const Home = () => {
  const [text, setText] = useState("");

  const [isPress, setIsPress] = useState(false);

  const handleAddTask = () => {
    const newTask: taskProps = {
      id: Math.random(),
      text,
      isChecked: false,
    };

    TasksStore.addTask(newTask);
    setText("");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>
        <Text style={styles.logo.firstHalf}>to</Text>
        <Text style={styles.logo.secondHalf}>do</Text>
      </Text>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Adicione uma nova tarefa"
          placeholderTextColor="#808080"
          value={text}
          onChangeText={(text) => setText(text)}
        />

        <TouchableHighlight
          activeOpacity={1}
          underlayColor={"#4EA8DE"}
          style={isPress ? styles.addBtnActive : styles.addBtn}
          onHideUnderlay={() => setIsPress(false)}
          onShowUnderlay={() => setIsPress(true)}
          onPress={() => handleAddTask()}
        >
          <Ionicons
            name="md-add-circle-outline"
            style={styles.addBtn.icon}
            // onPress={handleAddTask}
          ></Ionicons>
        </TouchableHighlight>
      </View>

      <ToDoList />
    </View>
  );
};
