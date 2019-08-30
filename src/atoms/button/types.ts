import * as React from 'react';

export enum ButtonVariant {
  contained = 'contained',
  text = 'text'
}

export interface BaseButtonProps extends React.HTMLProps<HTMLButtonElement> {
  /**
   * Default is "false"
   */
  disabled?: boolean;
  /**
   * Default is "contained"
   */
  variant?: keyof typeof ButtonVariant;
  children?: React.ReactNode;
}
