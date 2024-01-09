import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";

interface TaskProps {
  text: string;
}

const Task: React.FC<TaskProps> = (props) => {
  return (
    <View style={styles.item}>
      <View style={styles.itemLeft}>
        <View style={styles.square}></View>
        <Text style={styles.itemText}>{props.text}</Text>
      </View>
      <View style={styles.circular}></View>
    </View>
  );
};

export default Task;
