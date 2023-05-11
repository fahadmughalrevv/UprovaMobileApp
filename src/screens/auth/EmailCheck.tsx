import React, { useState } from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { COLORS } from '../../utils/colors'

const EmailCheck = (props:any) => {
    return(
        <View style={{flex:1, backgroundColor:COLORS.WHITE}}>
            <View style={{flex:0.1, backgroundColor:COLORS.PRIMARYPURPLE}}>

            </View>
            <View style={{flex:0.2}}>

            </View>
            <View style={{flex:0.7, padding:'5%',}}>
                <View>
                    <Text style={{fontSize:30, fontWeight:'bold', color:COLORS.BLACK}}>
                        Check Your Email
                    </Text>
                    <Text style={{fontSize:20, marginVertical:'5%', color:COLORS.BLACK}}>
                        If the account exists, we'll send a time sensitive link to your given email with instructions regarding what to do next
                    </Text>

                </View>
            </View>
        </View>
    )
}
export default EmailCheck