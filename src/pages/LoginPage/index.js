import React from 'react'
import { View, Text, TouchableOpacity, TextInput } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { styles } from './styles'
import { colors } from '../../utils/colors'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons'
import { mockUserModel } from '../../model/userModel'
import { setData } from '../../services/asyncStorageService'
export default function LoginPage({ navigation, setUser }) {
    const user = mockUserModel()
    async function navigateToProcessList () {
        await setData('user', {...user, userType: null})
        setUser(user)
        navigation.navigate('UserListPage', {shouldGetUser: true})
    }
    return (
        <View style={styles.container}>
            <View style={styles.headerView}>
                <View>
                    <MaterialCommunityIcons style={{ marginBottom: 20 }}
                        name="bank"
                        size={96}
                        color={colors.white} />
                    <Text style={styles.text}>
                        SISPRO
                    </Text>
                </View>
            </View>
            <View style={styles.contentView}>
                <View style={styles.formView}>
                    <View style={styles.userView}>
                        <TextInput style={styles.inputText} placeholder="CPF/CNPJ" />
                    </View>
                    <View style={styles.passwordView}>
                        <TextInput style={styles.inputText} placeholder="Senha" />
                        <TouchableOpacity>
                            <MaterialCommunityIcons
                                name="eye-off"
                                size={24}
                                color={colors.fontDarkGray} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.buttonView}>
                        <TouchableOpacity style={styles.loginButton} onPress={navigateToProcessList}>
                            <Text style={styles.textButton}>Entrar</Text>
                            <MaterialCommunityIcons name="arrow-right" size={32} color={colors.white} />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <StatusBar style='light' />
        </View>
    )
}