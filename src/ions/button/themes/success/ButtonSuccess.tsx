import { $light, $success } from '@globals/colors';
import {
  ThemeColors,
  WithTheme
} from '@ions/button/themes/themeWrapper/withTheme';

const successColors: ThemeColors = {
  background: {
    primary: $success[500],
    secondary: $success[700]
  },
  text: {
    primary: $light[100]
  }
};

const ButtonSuccess = WithTheme(successColors);

export default ButtonSuccess;
