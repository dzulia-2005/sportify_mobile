import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#0A0F24'
  },
  HeaderContainer:{
    flexDirection:'row',
    justifyContent:'space-between',
    paddingTop:20,
    paddingBottom:10,
    paddingHorizontal:10,
    alignItems:'center'
  },
  HeaderTitle:{
    color:'#fff',
    fontSize:24,
    fontWeight:'bold'
  },
  HeaderBtnContainer:{
    backgroundColor:'#00c951',
    borderRadius:10,
    paddingVertical:10,
    paddingHorizontal:15
  },
  HeaderBtnTitle:{
    color:'#fff',
    fontSize:16
  },

  CardListContainer:{
    backgroundColor:'#061325',
    width:'100%',
    minHeight: 600,
    borderRadius:10,
    flexDirection:'column',
    alignItems: 'center',
    paddingVertical: 20,
  },

  CardContainer:{
    backgroundColor:'#0b1b33',
    width:'90%',
    height:100,
    borderRadius: 10,
    marginBottom:10,
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center'
  },
  CardLeftSide:{
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    gap:10
  },
  TeamTitle:{
    color:'#fff',
    fontWeight:'bold',
    fontSize:16
  },
  imageWrapper: {
    width:80,
    height: 80,
    backgroundColor: '#fff',
    justifyContent: 'center', 
    alignItems: 'center',
    borderRadius: 100,
    overflow: 'hidden',
  },
  
  image: {
    width: 80,
    height: 80,
  },
})