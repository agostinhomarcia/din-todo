import React from "react";
import { View, Text } from "react-native";
import { styles } from "./styles";

interface TaskProps {
  text: string;
}

const Task: React.FC<TaskProps> = ({ text }) => {
  return (
    <View style={styles.item}>
      <View>
        <Text style={styles.itemText}>{text}</Text>
      </View>
    </View>
  );
};

export default Task;
