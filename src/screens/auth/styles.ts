import {StyleSheet} from 'react-native'
import { COLORS } from '../../utils/colors'
export const styles = StyleSheet.create({
    splashContainer:{flex:1, justifyContent:'center', backgroundColor:'white', alignItems:'center'},
    splashImage:{ width:'70%'},
    container:{ flex: 1, padding: '5%', backgroundColor: COLORS.PRIMARYPURPLE, },
    upperPart:{ flex: 0.25, justifyContent: 'flex-end', alignItems: 'center', },
    upperLogo:{ flex: 0.5, width: '40%' },
    headingText:{ fontSize: 26,  fontWeight: 'bold' },
    body:{ flex: 0.6, },
    innerPadding:{ padding: '2.5%' },
    whiteContainer:{ marginVertical: '5%', borderRadius: 20, backgroundColor: COLORS.WHITE },
    inputField:{ height: 60, marginVertical: '2.5%' },
    whiteContainerFooter:{ alignItems: 'center', justifyContent: 'space-between', paddingVertical: '2.5%' },
    basicText:{ fontSize: 18, fontWeight: '500', },
    footerLine:{ flexDirection: 'row' },
    innerFooterContainer:{ height: 60, borderBottomLeftRadius: 20, borderBottomRightRadius: 20, backgroundColor: 'lightgrey', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around' }
})