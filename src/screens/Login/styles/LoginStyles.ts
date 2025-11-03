import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0b1b33",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 30,
  },
  title: {
    color: "#00b4d8",
    fontSize: 36,
    fontWeight: "bold",
    marginBottom: 10,
  },
  subtitle: {
    color: "#cbd5e1",
    fontSize: 16,
    marginBottom: 40,
  },
  input: {
    width: "100%",
    backgroundColor: "#11294f",
    borderRadius: 10,
    padding: 14,
    marginBottom: 15,
    color: "#fff",
    fontSize: 16,
  },
  button: {
    width: "100%",
    backgroundColor: "#0077b6",
    borderRadius: 10,
    padding: 14,
    alignItems: "center",
    marginTop: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 17,
    fontWeight: "600",
  },
  forgot: {
    color: "#90e0ef",
    marginTop: 15,
  },
  bottomTextContainer: {
    flexDirection: "row",
    marginTop: 30,
  },
  bottomText: {
    color: "#a0aec0",
  },
  registerText: {
    color: "#00b4d8",
    fontWeight: "600",
  },
});