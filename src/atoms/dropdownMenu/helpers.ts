import { Placement } from './types';
import { assertUnreachable } from '@utility/helpers';
import {
  computeElementHeight,
  computeElementWidth,
  ElementDimensions,
  getAlternativeStyle,
  getBoundingRect,
  getCSSComputedStyle,
  IsElementOutOfContainerMethod,
  isHeightAndWidthSet
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

interface GetControllerAndMenuDimensionsParams {
  menuRef: React.RefObject<HTMLElement>;
  controllerRef: React.RefObject<HTMLElement>;
  elementIsBefore?: boolean;
}

export const getControllerAndMenuDimensions = (
  params: GetControllerAndMenuDimensionsParams
): ElementDimensions => {
  if (!params.menuRef.current) {
    return {
      rect: {
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        width: 0,
        height: 0
      },
      totalHeight: 0,
      totalWidth: 0
    };
  }

  const dropdownStyle = getCSSComputedStyle({
    element: params.menuRef.current,
    getBeforePseudoElement: params.elementIsBefore
  });
  const isStyleComputed = isHeightAndWidthSet(dropdownStyle);
  const { height = null, width = null } = isStyleComputed
    ? {}
    : getAlternativeStyle(dropdownStyle, params.menuRef.current); // Extra calculations For Edge
  const totalHeight = computeElementHeight(dropdownStyle, height);
  const totalWidth = computeElementWidth(dropdownStyle, width);
  const rect = getBoundingRect(params.controllerRef.current);

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
