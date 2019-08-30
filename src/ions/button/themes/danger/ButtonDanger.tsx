import { $danger, $light } from '@globals/colors';
import {
  ThemeColors,
  WithTheme
} from '@ions/button/themes/themeWrapper/withTheme';

const dangerColors: ThemeColors = {
  background: {
    primary: $danger[500],
    secondary: $danger[700]
  },
  text: {
    primary: $light[100]
  }
};

const ButtonDanger = WithTheme(dangerColors);

export default ButtonDanger;
