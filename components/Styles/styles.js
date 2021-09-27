import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    paddingTop: 23,
    backgroundColor: "teal",
    height: "100%",
  },
  input: {
    margin: 15,
    height: 40,
    borderWidth: 1,
    padding: 10,
    borderColor: "white",
    color: "white",
  },
  submitButton: {
    backgroundColor: "#ff6666",
    padding: 10,
    margin: 25,
    height: 40,
    borderRadius: 20,
    justifyContent: "center",
  },
  submitButtonText: {
    textAlign: "center",
    color: "white",
    fontWeight: "bold",
    fontSize: 18,
  },
  output: {
    textAlign: "center",
    fontSize: 30,
  },
  title: {
    paddingTop: 30,
    paddingBottom: 10,
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold",
    color: "white",
  },
  resultText: {
    paddingTop: 20,
    paddingBottom: 10,
    textAlign: "center",
    fontSize: 30,
    color: "yellow",
  },
  label: {
    marginLeft: 15,
    color: "white",
  },
});

export default styles;
