import { $light, $secondary } from '@globals/colors';
import {
  ThemeColors,
  WithTheme
} from '@ions/button/themes/themeWrapper/withTheme';

const secondaryColors: ThemeColors = {
  background: {
    primary: $secondary[500],
    secondary: $secondary[700]
  },
  text: {
    primary: $light[100],
    secondary: $secondary[500]
  }
};

const ButtonSecondary = WithTheme(secondaryColors);

export default ButtonSecondary;
