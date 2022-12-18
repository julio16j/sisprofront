import React from 'react'
import { View, Text } from 'react-native'
import { StatusTypeEnum } from '../../model/enums/statusTypeEnum'
import { styles } from './styles'
import DefaultText from '../DefaultText'
import { colors } from '../../utils/colors'
export default function StatusProcessCard ({style, status}) {
    return (
        <View style={{flex: 1, ...style }}>
            <HandleStatusProcessCard status={status} />
        </View>
    )
}
function HandleStatusProcessCard({status}) {
    const textStyle = {color: colors.white, weight: '400', fontSize: 14}
    switch (status) {
        case (StatusTypeEnum.scheduledAudience):
            return (
                <View style={[styles.card, styles.scheduledAudienceCard]}>
                    <DefaultText style={textStyle}>Audiência Marcada</DefaultText>
                </View>
            )
            case (StatusTypeEnum.upHeld):
                return (
                    <View style={[styles.card, styles.upHeldCard]}>
                        <DefaultText style={textStyle}>Julgado Procedente</DefaultText>
                    </View>
            )
            default:
                return (
                    <View style={[styles.card, styles.onGoingCard]}>
                        <DefaultText style={textStyle}>Em Andamento</DefaultText>
                    </View>
                )
        }

}