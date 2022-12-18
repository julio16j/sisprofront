import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { styles } from './styles'
import { colors } from '../../utils/colors'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons'
import SisProSvgComponent from '../../assets/sisproSvg'
export default function WelcomePage({ navigation }) {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.floatingActionButton} onPress={() => navigation.navigate('LoginPage')}>
                <MaterialCommunityIcons name="arrow-right" size={40} color="white" />
            </TouchableOpacity>
            <View style={styles.contentView}>
                <MaterialCommunityIcons style={{ marginBottom: 20 }}
                    name="bank"
                    size={96}
                    color={colors.primary} />
                <Text style={styles.text} >Bem vindo ao</Text>
                <Text style={{ ...styles.text, fontSize: 40, fontWeight: 'bold' }}>
                    SISPRO
                </Text>
                <Text style={styles.text} >Sistema de consulta processual</Text>
            </View>
            <View style={styles.contentView}>
                <SisProSvgComponent />
                <Text style={{ textAlign: 'center' }}>1.0.0</Text>
            </View>
            <StatusBar style="light" />
        </View>
    )
}