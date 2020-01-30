import * as React from 'react';
import SvgWrapper from '@ions/icon/wrapper/SvgWrapper';

const BuildingIcon: React.FunctionComponent<
  import('../../ions/icon/types').IconProps
> = (props: import('../../ions/icon/types').IconProps): JSX.Element => (
  <SvgWrapper {...props}>
    <React.Fragment>
      <path d='M11.5 6.5H10.75V5H13V7.5H11.5V6.5Z' />
      <path d='M10.75 10.5H11.5V11.5H13V9H10.75V10.5Z' />
      <path d='M7.75 6.5H7V5H9.25V7.5H7.75V6.5Z' />
      <path d='M7 10.5H7.75V11.5H9.25V9H7V10.5Z' />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M9 15.5H10.5V18H16V2H4V18H9V15.5ZM7.5 16.5V14H12V16.5H14.5V3.5H5.5V16.5H7.5Z'
      />
    </React.Fragment>
  </SvgWrapper>
);

export default BuildingIcon;
