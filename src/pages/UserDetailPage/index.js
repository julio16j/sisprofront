import React, {useState} from 'react'
import { View, Text, TouchableOpacity, TextInput } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { styles } from './styles'
import { colors } from '../../utils/colors'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons'
import { UserTypeEnum } from '../../model/enums/userTypeEnum'
import DefaultText from '../../components/DefaultText'
import {Picker} from '@react-native-picker/picker'
export default function UserDetailPage({route, navigation}) {
    const [selectUserType, setUserType] = useState(UserTypeEnum.client)
    return (
        <View style={styles.container}>
            <View style={styles.contentView}>
                <View style={styles.formView}>
                    <View style={styles.userInput}>
                        <TextInput selectionColor={colors.black} style={styles.textInput} placeholder="Nome Completo" />
                    </View>
                    <View style={styles.userInput}>
                        <TextInput selectionColor={colors.black} style={styles.textInput} placeholder="E-mail" />
                    </View>
                    <View style={styles.userInput}>
                        <TextInput selectionColor={colors.black} style={styles.textInput} placeholder="Telefone" />
                    </View>
                    <View style={styles.userInput}>
                        <TextInput selectionColor={colors.black} style={styles.textInput} placeholder="CPF/CNPJ" />
                    </View>
                    <View style={[styles.orderByView]}>
                        <Picker
                            placeholder='Ordenar por'
                            mode='dropdown'
                            style={[styles.orderBy]}
                            selectedValue={selectUserType}
                            dropdownIconColor={colors.fontDarkGray}
                            onValueChange={(itemValue) =>
                                setUserType(itemValue)
                            }>
                            <Picker.Item style={styles.orderByItem} label="Cliente" value={UserTypeEnum.client} />
                            <Picker.Item style={styles.orderByItem} label="Admin" value={UserTypeEnum.admin} />
                        </Picker>
                    </View>
                </View>
                <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 20}}>
                    <View />
                    <TouchableOpacity style={styles.loginButton} onPress={()=>{}}>
                        <DefaultText style={styles.textButton}>Salvar</DefaultText>
                        <MaterialCommunityIcons name="clipboard-check-outline" size={24} color={colors.white} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.floatingActionButton} onPress={() => {}}>
                        <MaterialCommunityIcons name="trash-can-outline" size={24} color={colors.white}/>
                    </TouchableOpacity>
                </View>
            </View>
            <StatusBar style="auto" />
        </View>
    )
}
