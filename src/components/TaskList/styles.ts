import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  items: {
    marginTop: 10,
  },
  taskContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderColor: "#ccc",
    borderWidth: 1,
    padding: 8,
    borderRadius: 8,
    marginBottom: 10,
  },
  checkContainer: {
    marginRight: 10,
  },
  check: {
    width: 30,
    height: 30,
  },
  trash: {
    width: 30,
    height: 30,
  },
  notCheck: {
    width: 30,
    height: 30,
  },
});
