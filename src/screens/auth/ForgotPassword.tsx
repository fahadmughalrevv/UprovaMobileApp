import React, { useState } from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { COLORS } from '../../utils/colors';
import { TextInput } from 'react-native-paper';
import ToggleSwitch from 'toggle-switch-react-native';
const ForgotPassword = (props: any) => {
    const [swtich, setSwitch] = useState(true)
    return (
        <View style={{ flex: 1, padding: '5%', backgroundColor: COLORS.PRIMARYPURPLE, }}>
            <View style={{ flex: 0.25, justifyContent: 'flex-end', alignItems: 'center', }}>
                <Image resizeMode='contain' style={{ flex: 0.5, width: '40%' }} source={require('../../assets/images/logo.png')} />
                <Text style={{ fontSize: 26, color: COLORS.WHITE, fontWeight: 'bold' }}>Forgot Your Password?</Text>
            </View>
            <View style={{ flex: 0.6, }}>
                <View style={{ marginVertical: '5%', borderRadius: 20, backgroundColor: COLORS.WHITE }}>
                    <View style={{ padding: '5%' }}>
                        <Text style={{ fontSize: 18, color: COLORS.BLACK }}>Enter your email address below and we will send you instructions on how to reset your password</Text>
                        <TextInput mode='outlined' label='Email Address' placeholder='Email Address' style={{ height: 60, marginVertical: '2.5%' }} />
                        <ToggleSwitch
                            isOn={swtich}
                            onColor="green"
                            offColor="grey"
                            label="Save Username"
                            labelStyle={{ color: "black", }}
                            size="medium"
                            onToggle={isOn => setSwitch(isOn)}
                        />
                        <TouchableOpacity onPress={() => props.navigation.navigate('EmailCheck')} style={{ width: '100%', height: 65, justifyContent: 'center', alignItems: 'center', backgroundColor: COLORS.PRIMARYPURPLE, marginVertical: '5%', borderRadius: 15 }}>
                            <Text style={{ fontSize: 26, color: COLORS.WHITE, fontWeight: 'bold' }}>Reset Password</Text>

                        </TouchableOpacity>
                        <View style={{ alignItems: 'center', height: 60, justifyContent: 'center', paddingVertical: '2.5%' }}>
                            <TouchableOpacity onPress={()=> props.navigation.navigate('Login')}>
                                <Text style={{ fontSize: 18, fontWeight: '500', color: COLORS.PRIMARYPURPLE }}>Back to Login</Text>
                            </TouchableOpacity>
                            
                          
                        </View>
                    </View>
                    <View style={{ height: 60, borderBottomLeftRadius: 20, borderBottomRightRadius: 20, backgroundColor: 'lightgrey', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around' }}>
                        <TouchableOpacity>
                            <Text style={{ fontSize: 14, fontWeight: '500', color: COLORS.BLACK }}>Help</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text style={{ fontSize: 14, fontWeight: '500', color: COLORS.BLACK }}>Terms & Conditions</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text style={{ fontSize: 14, fontWeight: '500', color: COLORS.BLACK }}>Privacy Policty</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    )
}
export default ForgotPassword; 