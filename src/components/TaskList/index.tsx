import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Task from "../Task";

interface TaskListProps {
  tasks: string[];
  completeTask: (index: number) => void;
}

const TaskList: React.FC<TaskListProps> = ({ tasks, completeTask }) => {
  return (
    <View style={styles.items}>
      {tasks.map((item, index) => (
        <TouchableOpacity key={index} onPress={() => completeTask(index)}>
          <Task text={item} />
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  items: {
    marginTop: 10,
  },
});

export default TaskList;
