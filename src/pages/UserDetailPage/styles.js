import { StyleSheet } from 'react-native'
import { colors } from '../../utils/colors'
export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
    },
    rowIcons: {
        alignItems: 'center'
    },
    contentView: {
        backgroundColor: colors.background,
        padding: 20
    },
    text: {
        color: colors.white,
        fontSize: 32,
        fontWeight: 'bold'
    },
    formView: {
        padding: 20,
        borderRadius: 10,
        backgroundColor: 'white',
    },
    userInput: {
        borderColor: colors.fontDarkGray,
        borderStyle: 'solid',
        borderWidth: 2,
        borderRadius: 10,
        padding: 10,
        marginBottom: 20
    },
    textInput: {
        marginLeft: 10,
        fontSize: 16
    },
    loginButton: {
        backgroundColor: colors.primary,
        borderRadius: 40,
        flexDirection: 'row',
        paddingVertical: 5,
        paddingHorizontal: 20,
        width: 120,
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    buttonView: {
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },
    textButton: {
        color: colors.white,
        fontSize: 16
    },
    orderByView: {
        borderColor: colors.fontDarkGray,
        borderStyle: 'solid',
        borderWidth: 2,
        backgroundColor: colors.white,
        borderRadius: 10,
        marginRight: 5,
        color: colors.fontDarkGray
    },
    orderBy: {
        height: 50,
        color: colors.fontDarkGray,
        fontSize: 22,
        justifyContent: 'center',
        alignItems: 'center'
    },
    orderByItem: {
        fontSize: 16,
        justifyContent: 'center',
        alignItems: 'center',
        color: colors.fontDarkGray
    },
    floatingActionButton: {
        width: 32,
        height: 32,
        backgroundColor: colors.backgroundError,
        borderRadius: 16,
        justifyContent: 'center',
        alignItems: 'center'
    }
})