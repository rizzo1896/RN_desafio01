import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  listHeader: {
    marginTop: 32,
    marginBottom: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  ListDescription: {
    flexDirection: "row",
  },
  created: {
    color: "#4EA8DE",
  },
  createdNumber: {
    marginLeft: 8,
    backgroundColor: "#333333",
    height: 24,
    width: 24,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    color: "#FFFFFF",
  },
  done: {
    color: "#8284FA",
  },
  doneNumber: {
    marginLeft: 8,
    backgroundColor: "#333333",
    height: 24,
    width: 24,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    color: "#FFFFFF",
  },

  listBody: {
    borderTopColor: "#333333",
    borderTopWidth: 1,
  },
  listBodyInfo: {
    marginTop: 60,
    alignItems: "center",
  },
  icon: {
    marginBottom: 16,
  },
  listBodyEmpty: {
    textAlign: "center",
    fontSize: 14,
  },
  title: {
    color: "#808080",
    fontWeight: "bold",
  },
  subtitle: {
    color: "#808080",
    fontWeight: "normal",
  },
});
