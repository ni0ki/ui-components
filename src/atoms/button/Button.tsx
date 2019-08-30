import * as React from 'react';
import { BaseButtonProps } from '@atoms/button/types';
import {
  ButtonDanger,
  ButtonDark,
  ButtonLight,
  ButtonSecondary,
  ButtonSuccess
} from '@ions';

export const ButtonTypes = {
  danger: ButtonDanger,
  secondary: ButtonSecondary,
  dark: ButtonDark,
  light: ButtonLight,
  success: ButtonSuccess
};

interface Props extends BaseButtonProps {
  type: keyof typeof ButtonTypes;
}

const Button: React.FunctionComponent<Props> = (props: Props): JSX.Element => {
  const renderButtonByType = ({ type, ...props }: Props): JSX.Element => {
    const ButtonName = ButtonTypes[type];
    if (!ButtonName) {
      throw new Error(
        'Unknown button type. Please refer to the documentation to see possible types'
      );
    }

    return <ButtonName {...props} />;
  };

  return renderButtonByType(props);
};

export default Button;
