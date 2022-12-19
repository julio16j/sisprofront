import { StyleSheet } from 'react-native'
import { colors } from '../../utils/colors'
export const styles = StyleSheet.create({
    container: {
        flex: 2,
        backgroundColor: colors.background
    },
    headerView: {
        flex: 0.12,
        backgroundColor: colors.primary,
        padding: 20,
        paddingTop: 5
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
    },
    flexDirectionRow: {
        flexDirection: 'row',
    },
    paddingTopSm: {
        paddingTop: 10
    },
    orderByView: {
        backgroundColor: colors.backgroundBlueLight,
        borderRadius: 4,
        marginRight: 5,
        color: colors.white
    },
    orderBy: {
        height: 50,
        color: colors.white,
        justifyContent: 'center',
        alignItems: 'center'
    },
    orderByItem: {
        fontSize: 16,
        justifyContent: 'center',
        alignItems: 'center',
        color: colors.backgroundBlueLight,
    },
    searchIconView: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.backgroundBlueLight,
        borderRadius: 4,
        padding: 10
    },
    colorGray: {
        color: colors.fontGray
    },
    contentView: {
        flex: 1,
        paddingVertical: 20,
        paddingHorizontal: 10
    },
    fontDarkGray: {
        color: colors.fontDarkGray
    },
    userDocumentText: {
        fontWeight: '500'
    },
    row: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        flex: 1
    },
    userText: {
        fontSize: 14,
        color: colors.black,
    },
    marginLeftXs: {
        marginLeft: 5
    },
    cardItem: {
        backgroundColor: colors.white,
        marginBottom: 20,
        padding: 10,
        borderRadius: 10
    },

})