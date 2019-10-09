import styled, { css } from 'styled-components';

interface TextProps {
  large?: boolean;
}

export const fontFamily = css`
  font-family: 'Source Sans Pro', Helvetica, Arial, sans-serif;
`;
const Text = styled.span<TextProps>`
  ${fontFamily}
  font-weight: 500;
  line-height: ${({ large }) => (large ? '1.33' : '1.5')};
  font-size: ${({ large }) => (large ? '1.125rem' : '1rem')};
`;

export default Text;
