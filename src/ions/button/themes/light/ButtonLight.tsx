import { $light } from '@globals/colors';
import {
  ThemeColors,
  WithTheme
} from '@ions/button/themes/themeWrapper/withTheme';

const lightColors: ThemeColors = {
  background: {
    primary: $light[300],
    secondary: $light[400]
  },
  text: {
    primary: $light[700],
    secondary: $light[700]
  }
};

const ButtonLight = WithTheme(lightColors);

export default ButtonLight;
