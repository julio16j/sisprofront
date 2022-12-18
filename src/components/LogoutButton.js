import { TouchableOpacity } from 'react-native'
import { SimpleLineIcons } from '@expo/vector-icons'; 
import { colors } from '../utils/colors';
import { fontSizes } from '../utils/fontStyles';
export default function LogoutButton ({viewStyleProp, iconColorProp, iconSizeProp, onPress}) {
    let viewStyle = viewStyleProp || {marginLeft: 20}
    let iconColor = iconColorProp || colors.white
    let iconSize = iconSizeProp || fontSizes.subititle
    return (
        <TouchableOpacity style={viewStyle} onPress={onPress}>
            <SimpleLineIcons name="logout" size={iconSize} color={iconColor} />
        </TouchableOpacity>
    )
}