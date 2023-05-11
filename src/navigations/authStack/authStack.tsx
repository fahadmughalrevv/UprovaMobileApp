import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splash from '../../screens';
import Login from '../../screens/auth/Login';
import Register from '../../screens/auth/Register';
import ForgotPassword from '../../screens/auth/ForgotPassword';
import EmailCheck from '../../screens/auth/EmailCheck';
const Stack = createNativeStackNavigator();
const AuthStack = () => {
    return (
        <Stack.Navigator >
            <Stack.Screen name='Splash' component={Splash} options={{ headerShown: false }} />
            <Stack.Screen name='Login' component={Login} options={{ headerShown: false }} />
            <Stack.Screen name='Register' component={Register} options={{ headerShown: false }} />
            <Stack.Screen name='ForgotPassword' component={ForgotPassword} options={{ headerShown: false }} />
            <Stack.Screen name='EmailCheck' component={EmailCheck} options={{ headerShown: false }} />

        </Stack.Navigator>
    )
}
export default AuthStack;