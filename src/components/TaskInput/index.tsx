import React, { useState } from "react";
import {
  KeyboardAvoidingView,
  Text,
  TextInput,
  TouchableOpacity,
  Keyboard,
  Platform,
  View,
} from "react-native";
import { styles } from "./styles";

interface TaskInputProps {
  addTask: (task: string) => void;
}

const TaskInput: React.FC<TaskInputProps> = ({ addTask }) => {
  const [task, setTask] = useState<string | null>(null);

  const handleAddTask = () => {
    Keyboard.dismiss();
    if (task) {
      addTask(task);
      setTask(null);
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.writeTaskWrapper}
    >
      <TextInput
        style={styles.input}
        placeholder={"Adicionar uma tarefa"}
        value={task || ""}
        onChangeText={(text) => setTask(text)}
      />
      <TouchableOpacity onPress={() => handleAddTask()}>
        <View style={styles.addWrapper}>
          <Text style={styles.addText}>+</Text>
        </View>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
};

export default TaskInput;
