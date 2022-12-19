import React, { useState, useEffect, useRef} from 'react'
import { View, TouchableOpacity, FlatList, TextInput, Animated, Easing } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { styles } from './styles'
import { colors } from '../../utils/colors'
import { Picker } from '@react-native-picker/picker'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons'
import DefaultText from '../../components/DefaultText'
import RenderProcessList from '../ProcessListPage/renderProcessList'
import { getUserList } from '../../services/userService'
import RenderUserList from './renderUserList'
import { compareDesc } from 'date-fns'
export default function UserListPage({navigation}) {
    const [showSearchField, setShowSearchField] = useState(false)
    const [filterText, setFilterText] = useState('')
    const [selectedOrder, setSelectedOrder] = useState('date')
    const [shouldFilter, setShouldFilter] = useState(false)
    const [userlist, setUserList] = useState([])
    const [filteredUserList, setFilteredUserList] = useState([])
    let opacity = useRef(new Animated.Value(0.1)).current;
    function animate () {
        opacity.setValue(0.01);
        Animated.timing(opacity, {
          toValue: 1,
          duration: 900,
          useNativeDriver: false,
          easing: Easing.ease
        }).start();
    }
    useEffect(() => {
        animate()
        setUserList(getUserList())
        setFilteredUserList(getUserList())
        setShouldFilter(true)
    }, [])
    useEffect(() => {
        if (!shouldFilter) return
        let auxList = [...filteredUserList]
        if (filterText) {
            auxList = [filterUserListByText(auxList, filterText)]
        } else {
            auxList = [...userlist]
        }
        auxList.sort((a, b) => {
            if (selectedOrder == 'date') {
                return compareDesc(a.createdDate, b.createdDate)
            } else {
                return a.name.localeCompare(b.name)
            }
        })
        setFilteredUserList(auxList)
        
    }, [selectedOrder, filterText])
    return (
        <View style={styles.container}>
            <View style={styles.headerView}>
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
                            <Picker.Item style={styles.orderByItem} label="Ordenar por nome" value="name" />
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
                    <DefaultText style={styles.colorGray}>{handleUserSizeDetailsText(userlist.length)}</DefaultText>
                </View>
            </View>
            <View style={styles.contentView}>
                <FlatList
                    data={filteredUserList}
                    renderItem={(data)=>RenderUserList(data.item, ()=>{})}
                    keyExtractor={(item) => item.id}/>
            </View>
            <StatusBar style="light" />
            <TouchableOpacity style={styles.floatingActionButton} onPress={() => navigation.navigate('LoginPage')}>
                <MaterialCommunityIcons name="plus" size={40} color="white" />
            </TouchableOpacity>
        </View>
    )
}

function handleUserPlural (size) {
    return size != 1 ? 's' : ''
}

function handleUserSizeDetailsText (userlistLength) {
    return `${userlistLength} usuário${handleUserPlural(userlistLength)} ` +
        `recuperado${handleUserPlural(userlistLength)}`
}