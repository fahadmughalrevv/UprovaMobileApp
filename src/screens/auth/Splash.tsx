import React from 'react'
import {View,Image} from 'react-native'
import { styles } from './styles';
const Splash = (props:any) => {
    setTimeout(() => {
        props.navigation.replace('Login');
    }, 2000);
    return (
        <View style={styles.splashContainer}>
            <Image style= {styles.splashImage} resizeMode='contain' source={require('../../assets/images/logodark.png')} />
        </View>
    )
}
export default Splash ; 