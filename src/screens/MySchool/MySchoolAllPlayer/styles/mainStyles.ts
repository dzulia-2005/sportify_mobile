import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
    backgroundColor: '#050b16',
    paddingTop: 60,
    paddingHorizontal: 15,
  },
  searchInput: {
    backgroundColor: '#0e1630',
    color: '#fff',
    borderWidth: 1,
    borderColor: '#1f2b4a',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 15,
    fontSize: 16,
    marginBottom: 20,
  },
  tableContainer: {
    backgroundColor: '#0b1120',
    borderRadius: 10,
    padding: 10,
  },
  header: {
    flexDirection: 'row',
    backgroundColor: '#131b33',
    paddingVertical: 12,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  headerText: {
    color: '#bfc4d6',
    fontWeight: '600',
    fontSize: 14,
    textAlign: 'center',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#0e1630',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#1a2444',
  },
  imageContainer: {
    flex: 1,
    alignItems: 'center',
  },
  image: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  cell: {
    color: '#dfe6f2',
    fontSize: 14,
    textAlign: 'center',
  },
  AddPlayerBtnContainer:{
    paddingVertical:15,
    backgroundColor:'#00c951',
    borderRadius:10,
    marginBottom:15
  },
  AddPlayerBtnText:{
    color:'#fff',
    fontSize:16,
    fontWeight:'bold',
    textAlign:"center"
  }
});