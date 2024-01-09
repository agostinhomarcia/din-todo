import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  writeTaskWrapper: {
    bottom: 10,
    width: "100%",
    flexDirection: "row",
    justifyContent: "flex-end",
    paddingHorizontal: 10,
    alignItems: "center",
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: "#2684FC",
    borderRadius: 60,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#ccc",
    borderWidth: 1,
  },
  buttonContent: {
    flexDirection: "row",
    alignItems: "flex-end",
  },
  addText: {
    color: "#fff",
  },
  arrowImage: {
    marginLeft: 12,

    color: "#fff",
  },
  modalContent: {
    backgroundColor: "#FFF",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
  },
  logo: {
    width: 57,
    height: 54,
  },
  titleModal: {
    fontSize: 22,
    color: "#202124",
    marginTop: 20,
  },
  paragraph: {
    fontSize: 12,
    marginTop: 10,
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: "#FFF",
    borderRadius: 5,
    borderColor: "#C0C0C0",
    borderWidth: 1,
    width: 300,
    marginTop: 19,
    marginRight: 10,
  },

  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 10,
  },
});
