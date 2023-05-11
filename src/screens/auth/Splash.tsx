import React from 'react'
import {View, Text, Image} from 'react-native'

const Splash = (props:any) => {
    setTimeout(() => {
        props.navigation.replace('Login');
    }, 2000);
    return (
        <View style={{flex:1, justifyContent:'center', backgroundColor:'white', alignItems:'center'}}>
            <Image style= {{ width:'70%'}} resizeMode='contain' source={require('../../assets/images/logodark.png')} />
        </View>
    )
}
export default Splash ; 