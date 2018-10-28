import { InterpolationValue, GlobalStyleClass, DefaultTheme } from 'styled-components'

declare const normalize: InterpolationValue
declare const Normalize: (() => null) | GlobalStyleClass<{}, DefaultTheme>

export { normalize, Normalize }
export default normalize
