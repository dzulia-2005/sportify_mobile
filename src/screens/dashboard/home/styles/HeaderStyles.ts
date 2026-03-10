import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  header: {
    height: 280,
    justifyContent: 'flex-start', 
    paddingTop: 30,
    overflow:'hidden'
  },
  imageZoom:{
    transform: [{ scale: 2.2 }]
  },
  overlay: {
    padding: 20,
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center'
  },
  headerText: {
    color: '#00c951',
    fontSize: 28,
    fontWeight: 'bold',
  },
  darkOverlay:{
    ...StyleSheet.absoluteFill,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
  },
  bottomTextContainer: {
    alignItems: 'center',
    marginTop:20
  },
  bottomTitle: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 18,
    color: '#fff',
    marginBottom: 8,
  },
  bottomSubtitle: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 12,
    width: 260,
    lineHeight: 16,
  },
})