import * as React from 'react';
import { ButtonLight } from '@ions/button/themes';
import { Props as SvgProps } from '@atoms/svg/base/SvgIcon';

interface Props {
  /**
   * The icon to wrap
   */
  children: React.ReactElement<SvgProps, 'svg'>;
}

// const IconWrapper = styled(ButtonLight)` // Unused currently due to styled-components tree-shaking issues.
//   min-width: 0;
//   padding: 6px;
//   height: 100%;
// `;

const SvgIconWrapper: React.FunctionComponent<Props> = ({
  children,
  ...props
}: Props): JSX.Element => (
  <ButtonLight
    variant='text'
    {...props}
    style={{ minWidth: 0, padding: '6px', height: '100%' }}
  >
    {children}
  </ButtonLight>
);

export default SvgIconWrapper;
