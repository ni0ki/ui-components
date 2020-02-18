export type OnClickFunction = (e: React.MouseEvent) => void;

export interface DropdownElementInfo {
  title: string;
  icon?: JSX.Element;
  onClick: OnClickFunction;
}
