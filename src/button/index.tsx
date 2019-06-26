import * as React from 'react';
import { FunctionComponent } from 'react';
import styled, { ThemeProvider } from 'styled-components';

export interface Props {
  title?: string;
  primary?: boolean;
}


export const BaseButton = styled.button`
  padding: 5px 16px 7px;
  border-radius: 2px;
  cursor: pointer;
  font-size: 16px;
  font-family: 'Source Sans Pro', Helvetica, Arial, sans-serif;
  line-height: 20px;
  color: ${props => props.theme.fg};
  background-color: ${props => props.theme.bg};

`;

const PrimaryTheme = {
  fg: '#ffffff',
  bg: '#007c97'
};

const InvertedTheme = ({ fg, bg }) => ({
  fg: bg,
  bg: fg
});

const Button: FunctionComponent<Props> = ({
  title = 'Nothing will happen!'
}: Props): JSX.Element => (
<ThemeProvider theme={PrimaryTheme}>
<ThemeProvider theme={InvertedTheme}>

   <BaseButton >{title}</BaseButton>
</ThemeProvider>
</ThemeProvider>
);

export default Button;
