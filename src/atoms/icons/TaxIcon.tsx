import * as React from 'react';
import SvgWrapper from '@ions/icon/wrapper/SvgWrapper';

const TaxIcon: React.FunctionComponent<
  import('../../ions/icon/types').IconProps
> = (props: import('../../ions/icon/types').IconProps): JSX.Element => (
  <SvgWrapper {...props}>
    <React.Fragment>
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M9.9997 3.00293L2.25 7.68377H17.7494L9.9997 3.00293ZM9.9997 4.75531L12.3647 6.18378H7.63471L9.9997 4.75531Z'
      />
      <path d='M5.20329 14.2138V9.1227H6.70329V14.2138H5.20329Z' />
      <path d='M17.079 17.0003H2.91844V15.5003H17.079V17.0003Z' />
      <path d='M9.3771 14.2138V9.1227H10.8771V14.2138H9.3771Z' />
      <path d='M13.2952 14.2138V9.1227H14.7952V14.2138H13.2952Z' />
    </React.Fragment>
  </SvgWrapper>
);

export default TaxIcon;
