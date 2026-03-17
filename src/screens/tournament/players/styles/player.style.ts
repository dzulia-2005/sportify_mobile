import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container:{
    backgroundColor:'#0b1b33',
    flex:1,
    paddingVertical:20,
    paddingHorizontal:10,
    flexDirection:'column',
    gap:20,
    alignItems:"center"
  },
  header:{
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    marginVertical:20,
  },
  input:{
    width:300,
    height:40,
    backgroundColor:'#1e293b',
    borderRadius:10,
    padding:10,
    color:'#fff'
  },
  cardTeams:{
    backgroundColor:'#1e2939',
    width:350,
    height:100,
    borderRadius:10,
    paddingHorizontal:10,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    marginBottom:10
  },
  image:{
    width:60,
    height:60,
    borderRadius:100
  },
  rightSide:{
    flexDirection:'row',
    alignItems:'center',
    gap:10
  },
  skeletonImageContainer: {
    width: 90,
    height: 90,
    borderRadius: 10,
    backgroundColor: '#1f2937',
    overflow: 'hidden',
  },
  shimmer: {
    width: 40,
    height: '100%',
    backgroundColor: 'rgba(255,255,255,0.12)',
  },
})