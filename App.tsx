// App.tsx

import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  Image,
} from "react-native";
import TaskList from "./src/components/TaskList";
import TaskInput from "./src/components/TaskInput";

interface AppProps {}

const App: React.FC<AppProps> = () => {
  const [taskItems, setTaskItems] = useState<string[]>([]);
  const [searchText, setSearchText] = useState<string>("");

  const completeTask = (index: number) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy);
  };

  const deleteTask = (index: number) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy);
  };

  const filteredTasks = taskItems.filter((item) =>
    item.toLowerCase().includes(searchText.toLowerCase())
  );

  const addTask = (newTask: string) => {
    setTaskItems([...taskItems, newTask]);
  };

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={require("./src/assets/logo.png")} style={styles.logo} />
      </View>

      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          paddingHorizontal: 20,
        }}
        keyboardShouldPersistTaps="handled"
      >
        <View style={styles.tasksWrapper}>
          <TextInput
            style={styles.searchInput}
            placeholder={"Buscar tarefa"}
            value={searchText}
            onChangeText={(text) => setSearchText(text)}
          />
          <Text style={styles.sectionTitle}>Tarefas do dia</Text>
          <TaskList
            tasks={filteredTasks}
            completeTask={completeTask}
            deleteTask={deleteTask}
          />
        </View>
      </ScrollView>

      <TaskInput addTask={addTask} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  logoContainer: {
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 60,
  },
  logo: {
    width: 57,
    height: 54,
  },
  tasksWrapper: {
    paddingTop: 30,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 10,
  },
  searchInput: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: "#FFF",
    borderRadius: 10,
    borderColor: "#C0C0C0",
    borderWidth: 1,
    marginBottom: 10,
  },
});

export default App;
