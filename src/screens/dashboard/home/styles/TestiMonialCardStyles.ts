import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    headerText:{
        paddingVertical:10,
        fontWeight:'bold',
        justifyContent:'center',
        alignItems:'center'
    },
    HeaderSecondText:{
        justifyContent:'center',
        alignItems:'center',
        color:'#fff',
        paddingTop:5,
        width:245
    },
    HeaderFirstText:{
        fontSize:24,
        color:'#fff'
    },
    CardContainer:{
        paddingHorizontal:40,
        paddingVertical:50
    },
  card: {
    backgroundColor: '#1E293B',
    padding: 24,
    borderRadius: 16,
    shadowColor: '#3B82F6',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 10,
    alignItems: 'center',
    textAlign: 'center',
    marginVertical: 20,
  },
  quote: {
    color: '#D1D5DB',
    fontStyle: 'italic',
    marginBottom: 16,
    textAlign: 'center',
  },
  userContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 4,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 40,
    backgroundColor: '#334155',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
  },
  userName: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  role: {
    color: '#9CA3AF',
    fontSize: 12,
  },
});