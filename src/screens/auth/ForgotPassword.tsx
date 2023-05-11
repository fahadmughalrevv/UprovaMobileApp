import React, { useState } from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { COLORS } from '../../utils/colors';
import { TextInput } from 'react-native-paper';
import ToggleSwitch from 'toggle-switch-react-native';
import { styles } from './styles';
import MainButton from '../../components/buttons/mainButton';
const ForgotPassword = (props: any) => {
    const [swtich, setSwitch] = useState(true)
    return (
        <View style={styles.container}>
            <View style={styles.upperPart}>
                <Image resizeMode='contain'  style={styles.upperLogo} source={require('../../assets/images/logo.png')} />
                <Text style={[styles.headingText, {color:COLORS.WHITE}]}>Forgot Your Password?</Text>
            </View>
            <View style={styles.body}>
                <View style={styles.whiteContainer}>
                    <View style={styles.innerPadding}>
                        <Text style={styles.basicText}>Enter your email address below and we will send you instructions on how to reset your password</Text>
                        <TextInput mode='outlined' label='Email Address' placeholder='Email Address' style={styles.inputField} />
                        <MainButton onPress={() => props.navigation.navigate('EmailCheck')} text='Reset Password' />
                        <View style={[styles.whiteContainerFooter, {height:60}]}>
                            <TouchableOpacity onPress={()=> props.navigation.navigate('Login')}>
                                <Text style={[styles.basicText, {color:COLORS.PRIMARYPURPLE}]}>Back to Login</Text>
                            </TouchableOpacity>
 
                        </View>
                    </View>
                    <View style={styles.innerFooterContainer}>
                        <TouchableOpacity>
                            <Text style={[styles.basicText, {color:COLORS.BLACK}]}>Help</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text style={[styles.basicText, {color:COLORS.BLACK}]}>Terms & Conditions</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text style={[styles.basicText, {color:COLORS.BLACK}]}>Privacy Policty</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    )
}
export default ForgotPassword; 