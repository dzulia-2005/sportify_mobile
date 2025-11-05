import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({

  titleContainer:{
    alignItems:'center',
    justifyContent:'center'
  },

  container: {
    flex: 1,
    backgroundColor: '#0b1b33',
    justifyContent: 'center',
    paddingTop: 40,
  },
  title: {
    color: '#00c951',
    fontSize: 22,
    fontWeight: '600',
    marginBottom: 20,
},
  table: {
    width: '100%',
    paddingHorizontal:15
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#112244',
    borderRadius: 10,
    padding: 12,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#00c95155',
    width:'100%'
  },
  logoContainer: {
    width: 60,
    height: 60,
    borderRadius: 30,
    overflow: 'hidden',
    marginRight: 15,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#08162c',
  },
  logo: {
    width: 50,
    height: 50,
  },
  name: {
    color: 'white',
    fontSize: 16,
    fontWeight: '500',
  },
});