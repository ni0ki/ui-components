import { $light } from '@globals/colors';
import {
  ThemeColors,
  WithTheme
} from '@ions/button/themes/themeWrapper/withTheme';

const darkColors: ThemeColors = {
  background: {
    primary: $light[400],
    secondary: $light[500]
  },
  text: {
    primary: $light[700]
  }
};

const ButtonDark = WithTheme(darkColors);

export default ButtonDark;
