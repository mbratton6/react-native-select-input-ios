import PropTypes from 'prop-types'
import { Text } from 'react-native'
import { TextPropTypes} from 'deprecated-react-native-prop-types'


export default {
  onPress: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  textAlign: PropTypes.string.isRequired,
  textStyle: PropTypes.oneOfType([
    TextPropTypes.style,
    PropTypes.arrayOf(TextPropTypes.style)
  ])
}
