import React, { useState } from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { COLORS } from '../../utils/colors';
import { TextInput } from 'react-native-paper';
import ToggleSwitch from 'toggle-switch-react-native';
import { styles } from './styles';
import MainButton from '../../components/buttons/mainButton';
const Login = (props: any) => {
    const [swtich, setSwitch] = useState(true)
    return (
        <View style={styles.container}>
            <View style={styles.upperPart}>
                <Image resizeMode='contain' style={styles.upperLogo} source={require('../../assets/images/logo.png')} />
                <Text style={[styles.headingText, {color:COLORS.WHITE}]}>Login to your Account</Text>
            </View>
            <View style={styles.body}>
                <View style={styles.whiteContainer}>
                    <View style={styles.innerPadding}>
                        <TextInput mode='outlined' label='Email Address' placeholder='Email Address' style={styles.inputField} />
                        <TextInput secureTextEntry={true} mode='outlined' label='Password' placeholder='Password'style={styles.inputField} />
                        <ToggleSwitch
                            isOn={swtich}
                            onColor="green"
                            offColor="grey"
                            label="Save Username"
                            labelStyle={{ color: "black", }}
                            size="medium"
                            onToggle={isOn => setSwitch(isOn)}
                        />
                        <MainButton text='Login'/>
                       
                        <View style={[styles.whiteContainerFooter, {height:140}]}>
                            <TouchableOpacity onPress={()=> props.navigation.navigate('ForgotPassword')}>
                                <Text style={[styles.basicText, {color:COLORS.PRIMARYPURPLE}]}>Forgot Password</Text>
                            </TouchableOpacity>
                            <View style={styles.footerLine}>
                                <Text style={styles.basicText}>Haven't Setup Your Account yet?</Text>
                                <TouchableOpacity onPress={() => props.navigation.navigate('Register')}>
                                    <Text style={[styles.basicText, {color:COLORS.PRIMARYPURPLE}]}>  Register</Text>
                                </TouchableOpacity>
                            </View>
                            <TouchableOpacity>
                                <Text style={[styles.basicText, {color:COLORS.PRIMARYPURPLE}]} >Face ID</Text>
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
export default Login; 