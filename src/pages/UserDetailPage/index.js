import React from 'react'
import { View, Text, TouchableOpacity, TextInput } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { styles } from './styles'
import { colors } from '../../utils/colors'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons'
import Ionicons from '@expo/vector-icons/Ionicons'
export default function LoginPage() {
    return (
        <View style={styles.container}>
            <View style={styles.headerView}>
                <MaterialCommunityIcons style={{ marginBottom: 20 }}
                    name="bank"
                    size={96}
                    color={colors.white} />
                <Text style={styles.text}>
                    SISPRO
                </Text>
            </View>
            <View style={styles.contentView}>
                <View style={styles.formView}>
                    <View style={styles.userInput}>
                        <TextInput styles={styles.textInput} placeholder="CPF/CNPJ" />
                    </View>
                    <View style={styles.passwordView}>
                        <TextInput styles={styles.textInput} placeholder="Senha" />
                        <TouchableOpacity>
                            <MaterialCommunityIcons
                                name="eye-off"
                                size={24}
                                color={colors.fontDarkGray} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.buttonView}>
                        <TouchableOpacity style={styles.loginButton}>
                            <Text style={styles.textButton}>Entrar</Text>
                            <MaterialCommunityIcons name="arrow-right" size={24} color={colors.white} />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <StatusBar style="auto" />
        </View>
    )
}