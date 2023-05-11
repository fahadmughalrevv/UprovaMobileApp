import React from 'react'
import { TouchableOpacity, Text } from 'react-native'
import { styles } from './styles'
const MainButton = (props: any) => {
    return (
        <TouchableOpacity onPress={props.onPress} style={styles.mainButton}>
            <Text style={styles.btnText}>{props.text}</Text>

        </TouchableOpacity>
    )
}
export default MainButton;