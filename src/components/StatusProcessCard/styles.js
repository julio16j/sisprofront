import { StyleSheet } from 'react-native'
import { colors } from '../../utils/colors'
export const styles = StyleSheet.create({
    card: {
        width: '95%',
        alignItems: 'center',
        padding: 10,
        borderRadius: 3
    },
    scheduledAudienceCard: {
        backgroundColor: colors.primaryDark
    },
    upHeldCard: {
        backgroundColor: colors.sucess
    },
    onGoingCard: {
        width: '80%',
        backgroundColor: colors.warning
    }
    
})