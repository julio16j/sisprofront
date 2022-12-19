import { DrawerItem } from '@react-navigation/drawer';
import { View } from 'react-native';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons'
import { colors } from '../../utils/colors';
import DefaultText from '../DefaultText';
import { fontSizes } from '../../utils/fontStyles';
import { removeData } from '../../services/asyncStorageService';
export default function CustomDrawerView({navigation, user}) {
  return(
      <View>
        <View style={{alignItems: 'center', paddingTop: 50, paddingBottom: 20, backgroundColor: colors.primary}}>
          <MaterialCommunityIcons style={{ marginBottom: 20 }}
            name="bank"
            size={48}
            color={colors.white} />
          <DefaultText style={{fontSize: fontSizes.subititle}}>{user.name}</DefaultText>
          <DefaultText>N°{user.document}</DefaultText>
        </View>
        <DrawerItem label='Processos' icon={() => {
          return (
            <MaterialCommunityIcons
              name="bookshelf"
              size={24}
              color={colors.fontDarkGray} />
          )
        }} onPress={() => navigation.navigate('ProcessListPage', {shouldGetUser: true})} />
        <DrawerItem label='Listar Usuários' icon={() => {
          return (
            <MaterialCommunityIcons
              name="account-group"
              size={24}
              color={colors.fontDarkGray} />
          )
        }} onPress={() => navigation.navigate('UserListPage')} />
        <DrawerItem label='Cadastrar Usuários' icon={() => {
          return (
            <MaterialCommunityIcons
              name="account-multiple-plus"
              size={24}
              color={colors.fontDarkGray} />
          )
        }} onPress={() => {navigation.navigate('UserDetailPage', {isDetail: false})}} />
        <DrawerItem label='Sair' icon={() => {
          return (
            <MaterialCommunityIcons
              name="logout"
              size={24}
              color={colors.fontDarkGray} />
          )
        }} onPress={() => {
          removeData('user')
          navigation.navigate('LoginPage')
        }} />
      </View>
  );
}