import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const MatchesPage = () => {
  return (
    <View style={style.container}>
        <Text style={style.text}>matches pagee</Text>
    </View>
  )
}

const style = StyleSheet.create({
    container:{flex:1,justifyContent:'center',alignItems:'center'},
    text:{fontSize:18,fontWeight:'bold'}
})

export default MatchesPage