import * as React from 'react';
import SvgIcon from '@atoms/svg/base/SvgIcon';

const CopyPassword: React.FunctionComponent<
  import('../base/SvgIcon').IconProps
> = (props: import('../base/SvgIcon').IconProps): JSX.Element => (
  <SvgIcon {...props}>
    <React.Fragment>
      <path d='M12.25 9.75V10.75H13.25V12.25H12.25V13.25H10.75V12.25H9.75V10.75H10.75V9.75H12.25Z' />{' '}
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M6.5 17.5H16.5V5.50006H6.5V17.5ZM15 7.00006V16H8V7.00006H15Z'
      />{' '}
      <path d='M3.5 5.07142H5V4H7.7857V2.5H3.5V5.07142Z' />{' '}
      <path d='M9.21427 2.5H13.5V5.07142H12V4H9.21427V2.5Z' />{' '}
      <path d='M6.5 14.5V13H5V11.9286H3.5V14.5H6.5Z' />{' '}
      <path d='M3.5 11.0714V5.92856H5V11.0714H3.5Z' />{' '}
    </React.Fragment>
  </SvgIcon>
);

export default CopyPassword;
