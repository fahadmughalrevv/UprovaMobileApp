import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { COLORS } from '../../utils/colors';
import { styles } from './styles';
import { TextInput } from 'react-native-paper';
import MainButton from '../../components/buttons/mainButton';
const Register = (props: any) => {
    return (
        <View style={styles.container}>
            <View style={styles.upperPart}>
                <Image resizeMode='contain' style={styles.upperLogo} source={require('../../assets/images/logo.png')} />
                <Text style={[styles.headingText, { color: COLORS.WHITE }]}>Register</Text>
            </View>
            <View style={styles.body}>
                <View style={styles.whiteContainer}>
                    <View style={styles.innerPadding}>
                        <TextInput mode='outlined' label='Email Address' placeholder='Email Address' style={styles.inputField} />
                        <TextInput secureTextEntry={true} mode='outlined' label='Social Security Number' placeholder='Social Security Number' style={styles.inputField} />
                        <TextInput secureTextEntry={true} mode='outlined' label='Password' placeholder='Password' style={styles.inputField} />
                        <MainButton text='Register' />
                        <View style={[styles.whiteContainerFooter, { height: 60 }]}>
                            <View style={styles.footerLine}>
                                <Text style={styles.basicText}>Already have an Account?</Text>
                                <TouchableOpacity onPress={() => props.navigation.navigate('Login')}>
                                    <Text  style={[styles.basicText, {color:COLORS.PRIMARYPURPLE}]}>  Login</Text>
                                </TouchableOpacity>
                            </View>

                        </View>
                    </View>
                    <View style={{ height: 60, borderBottomLeftRadius: 20, borderBottomRightRadius: 20, backgroundColor: 'lightgrey', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around' }}>
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
export default Register; 