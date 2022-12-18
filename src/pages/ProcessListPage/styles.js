import { StyleSheet } from 'react-native'
import { colors } from '../../utils/colors'
import { fontWeights } from '../../utils/fontStyles'
export const styles = StyleSheet.create({
    container: {
        flex: 2,
        backgroundColor: colors.background
    },
    headerView: {
        flex: 0.28,
        backgroundColor: colors.primary,
        padding: 20,
        paddingTop: 5
    },
    titleView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    titleText: {
        color: colors.white,
        fontSize: 24,
        fontWeight: 'bold',
        marginRight: 20
    },
    marginLeftXs: {
        marginLeft: 5
    },
    flexDirectionRow: {
      flexDirection: 'row',
    },
    userNameView: {
        marginTop: 20,
        alignItems: 'center'
    },
    userNameText: {
        paddingLeft: 5,
        color: colors.white,
        fontSize: 16
    },
    userDocumentText: {
        fontWeight: 'bold'
    },
    paddingTopXs: {
        paddingTop: 5
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
    cardItem: {
        backgroundColor: colors.white,
        marginBottom: 20,
        padding: 10,
        borderRadius: 10
    },
    row: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        flex: 1
    },
    spaceBetween: {
        justifyContent: 'space-between'
    },
    newUpdateText: {
        color: colors.sucess,
        fontWeight: '700',
        fontSize: 16
    },
    clientOtherText: {
        fontSize: 14,
        color: colors.black,
    },
    fontDarkGray: {
        color: colors.fontDarkGray
    },
    processNumberText: {
        fontWeight: '500'
    },
    movimentDescriptionText: {
        fontWeight: fontWeights.bold,
    },
    helpIcon: {
        bottom: 4,
        borderRadius: 6,
        backgroundColor: colors.black,
        width: 12,
        height: 12,
        alignItems: 'center'
    }
})