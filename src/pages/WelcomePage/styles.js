import { StyleSheet } from 'react-native'
import { colors } from '../../utils/colors'
export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
        justifyContent: 'space-between',
        flexDirection: 'column',
        paddingTop: 100,
        paddingBottom: 10
    },
    text: {
        fontFamily: 'Roboto',
        fontWeight: '400',
        fontSize: 30,
        textAlign: 'center',
        color: colors.primary,
        marginBottom: 20
    },
    contentView: {
        alignItems: 'center'
    },
    floatingActionButton: {
        width: 64,
        height: 64,
        backgroundColor: colors.primary,
        position: 'absolute',
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
        bottom: 50,
        right: 20
    }
})