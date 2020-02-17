import defaultTheme from 'gatsby-theme-docz/src/theme';
import { merge } from 'lodash/fp';

export const customTheme = merge(defaultTheme, {
  colors: {
    header: {
      bg: 'orange'
    }
  }
});
