import * as React from 'react';
import {
  ButtonDanger,
  ButtonGhost,
  ButtonPrimary,
  ButtonSecondary
} from '@ions/button/themes';
import { assertUnreachable } from '@utility/helpers';

// Downside: Docz will display all props including React.ButtonHTMLAttributes ones
// https://github.com/doczjs/docz/issues/895
export interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * The button's nature
   */
  nature: 'danger' | 'secondary' | 'primary' | 'ghost';
  /**
   * Activates the button dark mode
   */
  theme?: 'default' | 'dark';
  /**
   * Disabled state of the button
   * @default false
   */
  disabled?: boolean;
  /**
   * A large style option
   @default false
   */
  size?: 'small' | 'medium' | 'large';

  /**
   * A ref object
   @default undefined
   */
  ref?: React.RefObject<HTMLButtonElement>;
}

const Button: React.FunctionComponent<Props> = (
  props: Props
): JSX.Element | null => {
  const renderButtonByType = ({
    nature,
    ...props
  }: Props): JSX.Element | null => {
    switch (nature) {
      case 'danger':
        return <ButtonDanger {...props} />;
      case 'secondary':
        return <ButtonSecondary {...props} />;
      case 'primary':
        return <ButtonPrimary {...props} />;
      case 'ghost':
        return <ButtonGhost {...props} />;
      default:
        return assertUnreachable(nature);
    }
  };

  return renderButtonByType(props);
};

export default Button;
