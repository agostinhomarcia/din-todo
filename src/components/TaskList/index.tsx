import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import Task from "../Task";
import { styles } from "./styles";

interface TaskListProps {
  tasks: { text: string; completed: boolean }[];
  completeTask: (index: number) => void;
  deleteTask: (index: number) => void;
}

const TaskList: React.FC<TaskListProps> = ({
  tasks,
  completeTask,
  deleteTask,
}) => {
  return (
    <View style={styles.items}>
      {tasks.map((item, index) => (
        <TouchableOpacity
          key={index}
          style={styles.taskContainer}
          onPress={() => completeTask(index)}
        >
          <Image
            source={
              item.completed
                ? require("../../assets/check.png")
                : require("../../assets/not-check.png")
            }
            style={styles.check}
          />
          <Task
            text={item.text}
            completed={item.completed}
            onToggle={() => completeTask(index)}
          />
          <TouchableOpacity onPress={() => deleteTask(index)}>
            <Text>
              <Image
                source={require("../../assets/trash.png")}
                style={styles.trash}
              />
            </Text>
          </TouchableOpacity>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default TaskList;
