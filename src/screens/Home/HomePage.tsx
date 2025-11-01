import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react'
import { Text, View ,Button,StyleSheet} from 'react-native';

type RootStackParamList = {
    Home:undefined;
    Matches:undefined;
}

type Props = NativeStackScreenProps<RootStackParamList,"Home">;

const HomePage:React.FC<Props> = ({navigation}) => {
  return (
    <View style={style.container}>
        <Text style={style.text}>home screen</Text>
        <Button title='go to matches' onPress={()=>navigation.navigate('Matches')}/>
    </View>
  )
}

const style = StyleSheet.create({
    container:{flex:1,justifyContent:'center',alignItems:'center'},
    text:{fontSize:18,fontWeight:'bold'}
})

export default HomePage