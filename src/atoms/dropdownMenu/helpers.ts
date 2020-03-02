import { Placement } from './types';
import { assertUnreachable } from '@utility/helpers';
import {
  checkIsStyleComputed,
  computeElementHeight,
  computeElementWidth,
  ElementDimensions,
  getAlternativeStyle,
  getBoundingRect,
  getCSSComputedStyle,
  IsElementOutOfContainerMethod
} from '@utility/positionCompute';
import { MenuWrapperProps } from './DropdownMenu';

const MARGIN = 4;

export const isDropdownOutOfContainer: IsElementOutOfContainerMethod<
  Placement
> = ({ elementDimensions, containerDimensions, placement }) => {
  switch (placement) {
    case 'top':
      return (
        elementDimensions.rect.top - elementDimensions.totalHeight <
        containerDimensions.minHeight
      );
    case 'bottom':
      return (
        elementDimensions.rect.top +
          elementDimensions.rect.height +
          elementDimensions.totalHeight >
        containerDimensions.maxHeight
      );
    default:
      assertUnreachable(placement);
      return true;
  }
};

export const getControllerAndMenuDimensions = (
  menuRef: React.RefObject<HTMLElement>,
  buttonRef: React.RefObject<HTMLElement>,
  elementIsBefore?: boolean
): ElementDimensions => {
  const dropdownStyle = getCSSComputedStyle(menuRef.current, elementIsBefore);
  const isStyleComputed = checkIsStyleComputed(dropdownStyle);
  const { height = null, width = null } = isStyleComputed
    ? {}
    : getAlternativeStyle(dropdownStyle, menuRef.current); // Extra calculations For Edge
  const totalHeight = computeElementHeight(dropdownStyle, height);
  const totalWidth = computeElementWidth(dropdownStyle, width);
  const rect = getBoundingRect(buttonRef.current);

  return {
    totalHeight,
    totalWidth,
    rect
  };
};

export const getDropdownPosition = ({
  dockingSide,
  placement
}: MenuWrapperProps) => {
  return `${placement === 'top' ? 'bottom' : 'top'}: 100%;
  transform: translateY(${placement === 'top' ? -1 * MARGIN : MARGIN}px);
  ${dockingSide}: 0;`;
};
