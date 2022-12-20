import React, { useState } from 'react'
import { View, Text, TouchableOpacity, TextInput, Alert } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { styles } from './styles'
import { colors } from '../../utils/colors'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons'
import { mockUserModel } from '../../model/userModel'
import { setData } from '../../services/asyncStorageService'
import Spinner from 'react-native-loading-spinner-overlay'
import { login } from '../../services/authenticationService'
import { UserTypeEnum, UserTypeToJson } from '../../model/enums/userTypeEnum'
export default function LoginPage({ navigation, setUser }) {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)
    const [showPassword, setShowPassword] = useState(false)
    function showAlert (message, error) {
        return Alert.alert(
            message,
            error,
            [{}],
            {
              cancelable: true,
              onDismiss: () => {}
            }
          );
      }
    async function attemptLogin() {
        setLoading(true)
        try {
            const user = await login(username, password)
            await setData('user', { ...user, userType: UserTypeToJson(user.userType) })
            setUser(user)
            navigation.navigate('ProcessListPage', {shouldGetUser: true})
        } catch (error) {
            showAlert("Erro ao Entrar", error)
            console.log(error)
        } finally {
            setLoading(false)
        }
        
    }
    return (
        <View style={styles.container}>
            <Spinner
                visible={loading}
                animation='fade'
            />
            <View style={styles.headerView}>
                <View style={{ alignItems: 'center' }}>
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
                        <TextInput
                            value={username}
                            onChangeText={(text) => setUsername(text)}
                            selectionColor={colors.black} style={styles.inputText}
                            placeholder="CPF/CNPJ" />
                    </View>
                    <View style={styles.passwordView}>
                        <TextInput
                            value={password}
                            onChangeText={(text) => setPassword(text)}
                            selectionColor={colors.black}
                            secureTextEntry={!showPassword} style={styles.inputText} placeholder="Senha" />
                        <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                            <MaterialCommunityIcons
                                name={showPassword ? "eye" : "eye-off"}
                                size={24}
                                color={colors.fontDarkGray} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.buttonView}>
                        <TouchableOpacity style={styles.loginButton} onPress={attemptLogin}>
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
