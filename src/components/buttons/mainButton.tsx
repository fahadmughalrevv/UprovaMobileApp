import React from 'react'
import { TouchableOpacity, Text } from 'react-native'
import { styles } from './styles'
const MainButton = (props: any) => {
    return (
        <TouchableOpacity style={styles.mainButton}>
            <Text style={styles.btnText}>Login</Text>

        </TouchableOpacity>
    )
}
export default MainButton;