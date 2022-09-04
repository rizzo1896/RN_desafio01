import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0D0D0D",
    padding: 24,
  },
  logo: {
    color: "#FDFCFE",
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 48,
    marginBottom: 40,
    textAlign: "center",
    firstHalf: {
      color: "#5E60CE",
    },
    secondHalf: {
      color: "#4EA8DE",
    },
  },
  form: {
    width: "100%",
    flexDirection: "row",
  },
  input: {
    flex: 1,
    height: 54,
    backgroundColor: "#262626",
    padding: 16,
    borderRadius: 5,
    fontSize: 16,
    marginRight: 4,
    color: "#FFFFFF",
  },
  addBtn: {
    width: 54,
    height: 54,
    backgroundColor: "#1E6F9F",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    icon: {
      color: "#fff",
      fontSize: 28,
    },
  },
  addBtnActive: {
    width: 54,
    height: 54,
    backgroundColor: "#4EA8DE",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    icon: {
      color: "#fff",
      fontSize: 28,
    },
  },
});
