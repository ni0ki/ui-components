import React from 'react';
import { theme, useConfig, ComponentsProvider } from 'docz';
import { Styled, ThemeProvider } from 'theme-ui';

import baseComponents from 'gatsby-theme-docz/src/components';
import { customTheme } from './customTheme';

const Theme = ({ children }) => {
  const config = useConfig();

  return (
    <ThemeProvider theme={config.themeConfig}>
      <ComponentsProvider components={baseComponents}>
        <Styled.root>{children}</Styled.root>
      </ComponentsProvider>
    </ThemeProvider>
  );
};

export default theme(customTheme)(Theme);
