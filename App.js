import * as React from 'react'
import { useEffect, useCallback, useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import WelcomePage from './src/pages/WelcomePage'
import LoginPage from './src/pages/LoginPage'
import ProcessListPage from './src/pages/ProcessListPage'
import { useFonts } from 'expo-font'
import * as SplashScreen from 'expo-splash-screen'
import { ModalPortal } from 'react-native-modals'
import { colors } from './src/utils/colors'
import CustomDrawerView from './src/components/CustomDrawerView'
import { UserTypeEnum } from './src/model/enums/userTypeEnum'
import LogoutButton from './src/components/LogoutButton'
import UserListPage from './src/pages/UserListPage'
import UserDetailPage from './src/pages/UserDetailPage'
import {decode, encode} from 'base-64'

if (!global.btoa) {
global.btoa = encode;
}

if (!global.atob) {
global.atob = decode;
}

const Drawer = createDrawerNavigator()
export default function App() {
  const [user, setUser] = useState({})
  const [processlistScreenOptions, setProcessListScreenOptions] = useState({ title: 'Processos'})
  const [onPressClientHeaderButton, setOnPressClientHeaderButton] = useState(false)
  const [fontsLoaded] = useFonts({
    'Roboto': require('./assets/fonts/roboto/Roboto-Regular.ttf'),
    'Roboto-Bold': require('./assets/fonts/roboto/Roboto-Bold.ttf'),
    'Roboto-Medium': require('./assets/fonts/roboto/Roboto-Medium.ttf'),
    'Roboto-Italic': require('./assets/fonts/roboto/Roboto-Italic.ttf')
  })
  useEffect (() => {
    let screenOptions = { title: 'Processos'}
    if (user.userType == UserTypeEnum.client) {
      screenOptions.headerLeft = () => {
        return (
          <LogoutButton onPress={() => {
            setOnPressClientHeaderButton(true)}} />
        )
      }
    } else {
      screenOptions.swipeEnabled = true
    }
    setProcessListScreenOptions(screenOptions)
  }, [user.userType])
  useEffect(() => {
    async function prepare() {
      await SplashScreen.preventAutoHideAsync()
    }
    prepare()
    onLayoutRootView()
  }, [fontsLoaded])

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync()
    }
  }, [fontsLoaded])

  if (!fontsLoaded) {
    return null
  }

  return (
      <NavigationContainer>
        <Drawer.Navigator
          backBehavior='history'
          screenOptions={{
            headerTitleAlign: 'center',
            headerTintColor: colors.white,
            headerStyle: {backgroundColor: colors.primary},
            swipeEnabled: false
          }}
          drawerContent={(props) => <CustomDrawerView {...props} user={user} />}
        >
          <Drawer.Screen options={{headerShown: false}} name="WelcomePage" component={WelcomePage} />
          <Drawer.Screen options={{headerShown: false}} name="LoginPage">
            {(props) => <LoginPage {...props} setUser={setUser} />}
          </Drawer.Screen>
          <Drawer.Screen
            options={processlistScreenOptions}
            name="ProcessListPage">
            {(props) => <ProcessListPage {...props}
              onPressClientHeaderButton={onPressClientHeaderButton}
              setOnPressClientHeaderButton={setOnPressClientHeaderButton}
            />}
          </Drawer.Screen>
          <Drawer.Screen options={{title: 'Usuários', swipeEnabled: true}} name="UserListPage" component={UserListPage} />
          <Drawer.Screen options={{title: 'Cadastro', swipeEnabled: true}} name="UserDetailPage" component={UserDetailPage} />
        </Drawer.Navigator>
        <ModalPortal />
      </NavigationContainer>
  )
}
