import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { styles } from './styles'
import { colors } from '../../utils/colors'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons'
import Ionicons from '@expo/vector-icons/Ionicons'
import { format } from 'date-fns'
import { UserTypeEnum } from '../../model/enums/userTypeEnum'
export default function RenderUserList (user, onDetailButton) {
    if (user.name) {
        return (
            <TouchableOpacity style={styles.cardItem} onPress={() =>onDetailButton(user)}>
                <View style={[styles. row, {justifyContent: 'space-between'}]}>
                    <Text style={[styles.fontDarkGray, styles.userDocumentText]}>N° {user.document}</Text>
                </View>
                <View style={[{...styles.row}, styles.paddingTopSm, {justifyContent: 'space-between'}]}>
                    <View style={[styles.row]}>
                        <Ionicons name="person" color={colors.black} size={18} />
                        <Text style={[styles.userText, styles.marginLeftXs]}>
                            { user.name }
                        </Text>
                    </View>
                    <View style={[styles.row, {flex: 0.83}]}>
                        <MaterialCommunityIcons name='domain' color={colors.fontGray} size={24} />
                        <Text style={[styles.userText, styles.marginLeftXs]}>
                            {user.userType == UserTypeEnum.admin ? 'Admin' : 'Cliente'}
                        </Text>
                    </View>
                </View>
                <View>
                    <View style={[styles.row, styles.paddingTopSm]}>
                        <MaterialCommunityIcons name="calendar-blank" color={colors.fontDarkGray} size={18} />
                        <Text style={[styles.fontDarkGray, styles.marginLeftXs]}>
                            {format(user.createdDate, 'dd/MM/yyyy HH:mm')}
                        </Text>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }
}
