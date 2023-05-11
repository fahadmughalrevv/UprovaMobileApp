import {StyleSheet} from 'react-native'
import { COLORS } from '../../utils/colors'
export const styles = StyleSheet.create({
    container:{ flex: 1, padding: '5%', backgroundColor: COLORS.PRIMARYPURPLE, },
    upperPart:{ flex: 0.25, justifyContent: 'flex-end', alignItems: 'center', },
    headingText:{ fontSize: 26, color: COLORS.WHITE, fontWeight: 'bold' },
    whiteContainer:{ marginVertical: '5%', borderRadius: 20, backgroundColor: COLORS.WHITE },
    inputField:{ height: 60, marginVertical: '2.5%' },
    whiteContainerFooter:{ alignItems: 'center', height: 140, justifyContent: 'space-between', paddingVertical: '2.5%' },
    basicText:{ fontSize: 18, fontWeight: '500', }
})