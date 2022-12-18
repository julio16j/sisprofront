import { Text } from 'react-native'
import { colors } from '../utils/colors'
import { fontSizes, fontWeights } from '../utils/fontStyles'
export default function DefaultText({style, children}) {
    let defaultStyle = style || {}
    let defaultColor = defaultStyle.color || colors.white
    let defaultFontSize = defaultStyle.fontSize || fontSizes.medium
    let defaultFontWeight = defaultStyle.weight || fontWeights.normal
    let defaultTextAlign = defaultStyle.textAlign || 'justify'
    return (
        <Text style={{
            color: defaultColor,
            fontSize: defaultFontSize,
            fontWeight: defaultFontWeight,
            textAlign: defaultTextAlign}}>
            {children}
        </Text>
    )
}