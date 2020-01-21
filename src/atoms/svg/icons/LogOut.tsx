import * as React from 'react';
import SvgIcon from '@atoms/svg/base/SvgIcon';

const LogOut: React.FunctionComponent<import('../base/SvgIcon').IconProps> = (
  props: import('../base/SvgIcon').IconProps
): JSX.Element => (
  <SvgIcon {...props}>
    <React.Fragment>
      <path d='M9 3V12H9.0777L10.5 11.0518V2L9 3Z' />
      <path d='M15.5 10.9998C15.5 8.76145 14.1629 6.83539 12.2438 5.97683L13.1022 4.72301C15.4119 5.86673 17 8.24781 17 10.9998C17 14.8658 13.866 17.9998 10 17.9998C6.13401 17.9998 3 14.8658 3 10.9998C3 8.22201 4.61802 5.82211 6.963 4.69116L7.80515 5.95522C5.8599 6.80276 4.5 8.74248 4.5 10.9998C4.5 14.0374 6.96243 16.4998 10 16.4998C13.0376 16.4998 15.5 14.0374 15.5 10.9998Z' />{' '}
    </React.Fragment>
  </SvgIcon>
);

export default LogOut;
