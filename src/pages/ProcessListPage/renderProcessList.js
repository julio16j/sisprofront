import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { PersonTypeEnum } from '../../model/enums/personTypeEnum'
import StatusProcessCard from '../../components/StatusProcessCard'
import DefaultText from '../../components/DefaultText'
import { fontSizes, fontWeights } from '../../utils/fontStyles'
import { styles } from './styles'
import { colors } from '../../utils/colors'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons'
import Ionicons from '@expo/vector-icons/Ionicons'
import { format } from 'date-fns'
export default function RenderProcessList (process, onHelpButton) {
    if (process.client) {
        return (
            <View style={styles.cardItem}>
                <View style={[styles.row, {justifyContent: 'space-between'}]}>
                    <Text style={[styles.fontDarkGray, styles.processNumberText]}>N° {process.number}</Text>
                    {process.newUpdate ?
                        <View style={[styles.row, {flex: 0.95}]}>
                            <Text style={styles.newUpdateText}>
                                Nova Atualização
                            </Text>
                            <MaterialCommunityIcons style={styles.marginLeftXs} name="alarm-light" color={colors.sucess} size={24} />
                        </View>
                        :null
                    }
                </View>
                <View style={[{...styles.row}, styles.paddingTopSm, {justifyContent: 'space-between'}]}>
                    <View style={[styles.row]}>
                        <Ionicons name="person" color={colors.black} size={18} />
                        <Text numberOfLines={1} style={[styles.clientOtherText, styles.marginLeftXs, {flex: 1}]}>
                            { process.client.name }
                        </Text>
                    </View>
                    <View style={[styles.row, {flex: 0.83}]}>
                        <MaterialCommunityIcons name={handleIconPart(process.other.personType)} color={colors.error} size={24} />
                        <Text numberOfLines={1} style={[styles.clientOtherText, styles.marginLeftXs, {flex: 1}]}>
                            { process.other.name}
                        </Text>
                    </View>
                </View>
                <View>
                    <View style={[styles.row, styles.paddingTopSm]}>
                        <MaterialCommunityIcons name="calendar-blank" color={colors.fontDarkGray} size={18} />
                        <Text style={[styles.fontDarkGray, styles.marginLeftXs]}>
                            {format(process.lastUpdateDate, 'dd/MM/yyyy HH:mm')}
                        </Text>
                    </View>
                </View>
                <View style={[styles.row, styles.paddingTopSm, {alignItems: 'center'}]}>
                    <StatusProcessCard status={process.status} />
                    <TouchableOpacity onPress={() => onHelpButton(process.moviment)} style={{flex: 1, flexDirection: 'row', justifyContent: 'center'}}>
                        <DefaultText style={{weight: fontWeights.bold, color: colors.black, textAlign: 'center'}}>
                            {`${process.moviment.message} ${process.date || ''}`}
                        </DefaultText>
                        <View style={styles.helpIcon} >
                            <DefaultText style={{color: colors.white, fontSize: fontSizes.small}} >?</DefaultText>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

function handleIconPart (typerPerson) {
    if (typerPerson == PersonTypeEnum.Legal) {
        return 'domain'
    } return 'account'
}