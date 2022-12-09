import { StyleSheet } from 'react-native'
import { colors } from '../../utils/colors'
export const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    headerView: {
        flex: 0.8,
        backgroundColor: colors.primary,
        alignItems: 'center',
        padding: 40,
    },
    rowIcons: {
        alignItems: 'center'
    },
    contentView: {
        flex: 1,
        backgroundColor: colors.background,
        padding: 20
    },
    text: {
        color: colors.white,
        fontSize: 32,
        fontWeight: 'bold'
    },
    formView: {
        flex: 1,
        padding: 20,
        shadowColor: '#000000',
        shadowOffset: { width: -2, height: 4 },
        shadowOpacity: 1,
        shadowRadius: 3,
        borderRadius: 10,
        backgroundColor: 'white',
        bottom: 100
    },
    userInput: {
        borderColor: colors.fontDarkGray,
        borderStyle: 'solid',
        borderWidth: 2,
        borderRadius: 10,
        padding: 10,
        marginBottom: 20
    },
    passwordView: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderColor: colors.fontDarkGray,
        borderStyle: 'solid',
        borderWidth: 2,
        borderRadius: 10,
        padding: 10,
        fontSize: 20,
        marginBottom: 20
    },
    textInput: {
        fontSize: 50
    },
    loginButton: {
        backgroundColor: colors.primary,
        borderRadius: 40,
        flexDirection: 'row',
        paddingVertical: 5,
        paddingHorizontal: 10,
        width: 100,
        justifyContent: 'space-between'
    },
    buttonView: {
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },
    textButton: {
        color: colors.white,
        fontSize: 16
    }
})