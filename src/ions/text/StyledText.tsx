import styled, { css } from 'styled-components';

export const fontFamily = css`
  @import url('https://fonts.googleapis.com/css?family=Public+Sans:400,500,600&display=swap');
  font-family: 'Public Sans', 'Helvetica Neue', Helvetica, Arial,
    'Lucida Grande', sans-serif;
`;
export const StyledText = styled.span`
  ${fontFamily}
  font-weight: 600;
`;
