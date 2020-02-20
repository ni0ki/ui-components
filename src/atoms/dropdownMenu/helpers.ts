import { Placement } from './types';
import {
  checkIsStyleComputed,
  computeTooltipHeight,
  getAlternativeStyle,
  getBoundingRect,
  getContainerBoundaries
} from '@atoms/tooltip/helpers';
import { assertUnreachable } from '@utility/helpers';

const isElementOutOfContainer = ({
  rect,
  totalHeight,
  container,
  placement
}: {
  rect: ClientRect;
  totalHeight: number;
  container: Element | Window;
  placement: Placement;
}): boolean => {
  let { maxHeight, minHeight } = getContainerBoundaries(container);

  switch (placement) {
    case 'top':
      return rect.top - totalHeight < minHeight;
    case 'bottom':
      return rect.top + rect.height + totalHeight > maxHeight;
    default:
      assertUnreachable(placement);
      return true;
  }
};

const getCSSComputedStyle = (ref: React.RefObject<HTMLElement>) =>
  window.getComputedStyle(ref.current as Element);

const isDropdownOutScreen = (
  placement: Placement,
  menuRef: React.RefObject<HTMLElement>,
  containerRef?: React.RefObject<HTMLElement>
): boolean => {
  const dropdownStyle = getCSSComputedStyle(menuRef);
  const isStyleComputed = checkIsStyleComputed(dropdownStyle);
  const { height = null } = isStyleComputed
    ? {}
    : getAlternativeStyle(dropdownStyle, menuRef.current); // Extra calculations For Edge

  const totalHeight = computeTooltipHeight(dropdownStyle, height);
  const rect = getBoundingRect(menuRef.current);
  const container = (containerRef && containerRef.current) || window;

  return isElementOutOfContainer({
    rect,
    totalHeight,
    container,
    placement
  });
};

export const getDropdownPlacement = (
  placement: Placement,
  possibilities: Placement[],
  menuRef: React.RefObject<HTMLElement | null>,
  containerRef?: React.RefObject<HTMLElement>
): Placement | null => {
  if (!placement) {
    throw new Error(
      'Dropdown cannot be displayed in the container Element/Window due to its incompatible size.' +
        'Please consider reducing it or better position tooltiped' +
        'element in the screen.'
    );
  }

  if (null === menuRef.current) {
    return null;
  }

  if (
    !isDropdownOutScreen(
      placement,
      menuRef as React.RefObject<HTMLElement>,
      containerRef
    )
  ) {
    return placement;
  }

  const newPossibilities = possibilities.filter(
    possiblePlacement => placement !== possiblePlacement
  );
  const [firstPossiblePlacement] = newPossibilities;

  return getDropdownPlacement(
    firstPossiblePlacement,
    newPossibilities,
    menuRef,
    containerRef
  );
};
