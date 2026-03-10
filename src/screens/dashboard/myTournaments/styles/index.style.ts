import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0b1b33",
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  header: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "700",
    marginBottom: 20,
    textAlign: "center",
  },
  list: {
    paddingBottom: 40,
  },
  card: {
    backgroundColor: "rgba(255,255,255,0.08)",
    borderRadius: 12,
    marginBottom: 20,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.15)",
  },
  image: {
    width: "100%",
    height: 150,
  },
  infoContainer: {
    padding: 14,
  },
  title: {
    color: "#00b4d8",
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 6,
  },
  info: {
    color: "#cbd5e1",
    fontSize: 14,
  },
  AddTournament:{
    backgroundColor:"#00c951",
    borderRadius:10,
    paddingVertical:10,
    marginBottom:20
  },
  AddTournamentText:{
    color:'#fff',
    fontWeight:'bold',
    textAlign:'center',
    fontSize:16
}
});