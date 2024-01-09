import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import Task from "../Task";
import { styles } from "./styles";

interface TaskListProps {
  tasks: string[];
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
            source={require("../../assets/check.png")}
            style={styles.check}
          />
          <Task text={item} />
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
