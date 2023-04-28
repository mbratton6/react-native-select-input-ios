import PropTypes from 'prop-types'
import { Text } from 'react-native'
import { TextPropTypes} from 'deprecated-react-native-prop-types'


export default {
  enabled: PropTypes.bool,
  labelStyle: PropTypes.oneOfType([
    TextPropTypes.style,
    PropTypes.arrayOf(TextPropTypes.style)
  ]),
  onEndEditing: PropTypes.func,
  onSubmitEditing: PropTypes.func,
  onValueChange: PropTypes.func,
  options: PropTypes.array,
  value: PropTypes.any
}
