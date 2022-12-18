import React, { useState, useEffect, useRef } from 'react'
import { View, Text, TouchableOpacity, FlatList, TextInput, Animated, Easing } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { styles } from './styles'
import { colors } from '../../utils/colors'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons'
import Ionicons from '@expo/vector-icons/Ionicons'
import {Picker} from '@react-native-picker/picker'
import HelpMovimentModal from '../../components/HelpMovimentModal'
import { compareStatus } from '../../model/enums/statusTypeEnum'
import { getProcessList } from '../../services/processService'
import { compareDesc } from 'date-fns'
import RenderProcessList from './renderProcessList'
import { filterProcessModelByText } from '../../model/processModel'
import DefaultText from '../../components/DefaultText'
import { getData, removeData, setData } from '../../services/asyncStorageService'
export default function ProcessListPage({
    route,
    navigation,
    onPressClientHeaderButton,
    setOnPressClientHeaderButton
}) {
    const [selectedOrder, setSelectedOrder] = useState('date')
    const [filterText, setFilterText] = useState('')
    const [shouldFilter, setShouldFilter] = useState(false)
    const [processlist, setProcessList] = useState([])
    const [filteredProcessList, setFilteredProcessList] = useState([])
    const [showModal, setShowModal] = useState(false)
    const [movimentDetailed, setMovimentDetailed] = useState()
    const [showSearchField, setShowSearchField] = useState(false)
    let opacity = useRef(new Animated.Value(0.1)).current;
    const [user, setUser] = useState({})
    function detailMoviment (moviment) {
        setMovimentDetailed(moviment)
        setShowModal(true)
    }
    function animate () {
        opacity.setValue(0.01);
        Animated.timing(opacity, {
          toValue: 1,
          duration: 900,
          useNativeDriver: false,
          easing: Easing.ease
        }).start();
    }
    function filterProcessListByText (list, filterText) {
        return [...list.filter(filterProcessModelByText(filterText))]
    }
    async function getUserFromStorage () {
        setUser(await getData('user'))
    }
    useEffect (() => {
        if (onPressClientHeaderButton) {
            navigation.goBack()
            removeData('user')
            setOnPressClientHeaderButton(false)
        }
    })
    useEffect(() => {
        if (route.params.shouldGetUser) {
            getUserFromStorage()
        }
    }, [route.params])
    useEffect(() => {
        animate()
        setProcessList(getProcessList())
        setFilteredProcessList(getProcessList())
        setShouldFilter(true)
    }, [])
    useEffect(() => {
        if (!shouldFilter) return
        let auxList = [...filteredProcessList]
        if (filterText) {
            auxList = [filterProcessListByText(auxList, filterText)]
        } else {
            auxList = [...processlist]
        }
        auxList.sort((a, b) => {
            if (selectedOrder == 'date') {
                return compareDesc(a.lastUpdateDate, b.lastUpdateDate)
            } else {
                return compareStatus(a.status, b.status)
            }
        })
        setFilteredProcessList(auxList)
        
    }, [selectedOrder, filterText])
    return (
        <View style={styles.container}>
            <View style={styles.headerView}>
                <View style={styles.marginLeftXs}>
                    <View style={[styles.flexDirectionRow, styles.userNameView]}>
                        <Ionicons name="person" color="white" size={24} />
                        <Text style={styles.userNameText}>
                            { user.name }
                        </Text>
                    </View>
                    <View style={[styles.flexDirectionRow, styles.paddingTopXs]}>
                        <MaterialCommunityIcons name="badge-account" color="white" size={24} />
                        <Text style={[styles.userNameText, styles.userDocumentText]}>
                            { user.document }
                        </Text>
                    </View>
                    <View style={[styles.flexDirectionRow, styles.paddingTopSm, {justifyContent: 'flex-end'}]}>
                        <Animated.View  style={[styles.orderByView, {opacity: opacity, flex: opacity}]}>
                            {showSearchField
                                ? <TextInput
                                    style={{padding: 11, color: colors.white}}
                                    value={filterText}
                                    onChangeText={(newText) => {
                                        setFilterText(newText)
                                    }}
                                    placeholder='Digite para pesquisar...' />
                                : <Picker
                                placeholder='Ordenar por'
                                mode='dropdown'
                                style={[styles.orderBy]}
                                selectedValue={selectedOrder}
                                dropdownIconColor={colors.white}
                                onValueChange={(itemValue) =>
                                    setSelectedOrder(itemValue)
                                }>
                                <Picker.Item style={styles.orderByItem} label="Ordenar por data" value="date" />
                                <Picker.Item style={styles.orderByItem} label="Ordenar por status" value="status" />
                            </Picker>}
                        </Animated.View >
                        <TouchableOpacity style={styles.searchIconView}
                            onPress={() => {
                                setShowSearchField(!showSearchField)
                                animate()
                            }}>
                            <MaterialCommunityIcons
                                name={showSearchField ? "sort-variant" : "magnify"}
                                size={28}
                                color={colors.white} />
                        </TouchableOpacity>
                    </View>
                    <View>
                        <DefaultText style={styles.colorGray}>{handleProcessSizeDetailsText(processlist.length)}</DefaultText>
                    </View>
                </View>
            </View>
            <View style={styles.contentView}>
                <FlatList
                    data={filteredProcessList}
                    renderItem={(data)=>RenderProcessList(data.item, detailMoviment)}
                    keyExtractor={(item) => item.id}/>
            </View>
            <StatusBar style={'light'} />
            <HelpMovimentModal
                showModal={showModal}
                moviment={movimentDetailed}
                closeModal={() => setShowModal(false)} 
            />
        </View>
    )
}

function handleProcessPlural (size) {
    return size != 1 ? 's' : ''
}

function handleProcessSizeDetailsText (processlistLength) {
    return `${processlistLength} processo${handleProcessPlural(processlistLength)} ` +
        `recuperado${handleProcessPlural(processlistLength)}`
}
