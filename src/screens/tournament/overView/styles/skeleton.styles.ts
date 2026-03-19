import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    skeletonTextSmall: {
        height: 10,
        width: 60,
        backgroundColor: '#1e2a47',
        borderRadius: 6,
        overflow: 'hidden',
        marginBottom: 6,
        },

        skeletonTextMedium: {
        height: 14,
        width: 140,
        backgroundColor: '#1e2a47',
        borderRadius: 6,
        overflow: 'hidden',
        marginBottom: 10,
        },

        skeletonTextLarge: {
        height: 14,
        width: 80,
        backgroundColor: '#1e2a47',
        borderRadius: 6,
        overflow: 'hidden',
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
   overviewContainer:{
    backgroundColor:'#0b1b33',
    flex:1
  },
  header:{
    flexDirection:'column',
    paddingVertical:30,
    alignItems:'center'
  },
  headerCardContainer:{
    flexDirection:'column',
    gap:10,
    marginVertical:20,
    backgroundColor:'#122240',
    padding:20,
    borderRadius:10
  },

  headerCard:{
    width:200,
    height:60,
    borderColor:'#233554',
    backgroundColor:'#233554',
    borderRadius:10,
    color:'#fff',
    padding:10
  },
  tournamentTimeLineContainer:{
    backgroundColor:'#122240',
    gap:10,
    height:110,
    width:240,
    borderRadius:10
  },
  timeLineTextContainer:{
    flexDirection:'row',
    justifyContent:"center",
    alignItems:'center',
    gap:5
  },
  timeRangeContainer:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    gap:20,
    paddingTop:10
  },
})