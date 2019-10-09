import * as React from 'react';
import {
  ButtonDanger,
  ButtonDark,
  ButtonLight,
  ButtonSecondary,
  ButtonSuccess
} from '@ions';
import { assertUnreachable } from '@utility/helpers';

// Downside: Docz will display all props including React.ButtonHTMLAttributes ones
// https://github.com/doczjs/docz/issues/895
export interface BaseButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Default is "false"
   */
  disabled?: boolean;
  /**
   * Default is "contained"
   */
  variant?: ButtonVariant;
  /**
   * Default is "false"
   */
  large?: boolean;
  children?: React.ReactNode;
}

interface Props extends BaseButtonProps {
  nature: ButtonTypes;
}

export const enum ButtonVariant {
  contained = 'contained',
  text = 'text'
}

export const enum ButtonTypes {
  DANGER = 'danger',
  SECONDARY = 'secondary',
  DARK = 'dark',
  LIGHT = 'light',
  SUCCESS = 'success'
}

const Button: React.FunctionComponent<Props> = (props: Props): JSX.Element => {
  const renderButtonByType = ({ nature, ...props }: Props): JSX.Element => {
    switch (nature) {
      case ButtonTypes.DANGER:
        return <ButtonDanger {...props} />;
      case ButtonTypes.SECONDARY:
        return <ButtonSecondary {...props} />;
      case ButtonTypes.DARK:
        return <ButtonDark {...props} />;
      case ButtonTypes.LIGHT:
        return <ButtonLight {...props} />;
      case ButtonTypes.SUCCESS:
        return <ButtonSuccess {...props} />;
      default:
        return assertUnreachable(nature);
    }
  };

  return renderButtonByType(props);
};

export default Button;
