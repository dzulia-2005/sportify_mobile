import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


export const overViewIcon = ({color,size}:{color:string;size:number}) => {
    return <Icon name='school-outline' color={color} size={size}/>
}

export const playerIcon = ({color,size}:{color:string,size:number}) => {
    return <Icon name='account-group' color={color} size={size}/>
}

export const teamIcon = ({color,size}:{color:string;size:number}) => {
    return <Icon name='shield-account' color={color} size={size}/>
}