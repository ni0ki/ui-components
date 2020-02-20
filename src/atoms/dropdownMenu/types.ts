export type OnClickFunction = (e: React.MouseEvent) => void;

export interface DropdownElementInfo {
  title: string;
  icon?: JSX.Element;
  onClick: OnClickFunction;
}

export type Placement = 'top' | 'bottom';

export type DockingSide = 'left' | 'right';
