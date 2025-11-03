import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"#0b1b33",
    alignItems:'center',
    justifyContent:'center',
    paddingHorizontal: 30,
  },

  title:{
    color:"#00b4d8",
    fontSize:36,
    fontWeight:'bold',
    marginBottom:10
  },

  subtitle:{
    color:'#cbd5e1',
    fontSize:16,
    marginBottom:40
  },

  input:{
    width:"100%",
    backgroundColor:"#11294f",
    borderRadius:10,
    padding:14,
    marginBottom:15,
    color:'#fff',
    fontSize:16
  },
  button:{
    paddingTop:20,
    width:'100%',
    alignItems:'center',
    borderRadius:10,
    padding:14,
    marginBottom:15,
    backgroundColor:'#0077b6'
  },
  buttonText:{
    color:'#fff',
    fontWeight:'600',
    fontSize:17,
  },
  haveAccount:{
    flexDirection:'row'
  },
  AccountText:{
    color:'#fff',
  },
  LoginText:{
    color:"#00b4d8",
  },
  AccountFirstText:{
    color: "#a0aec0",
  }

})