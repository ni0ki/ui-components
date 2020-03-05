import { Placement as TooltipPlacement } from '@atoms/tooltip/types';
import { Placement as DropdownPlacement } from '@atoms/dropdownMenu/types';
/** Both tooltips and dropdown use the DOM to make sure
 * they are fitting in a container
 */

const containsNumber = (value: string) => /\d/.test(value);
const containsChar = (value: string, char: string) =>
  value.indexOf(char) !== -1;

export const isHeightAndWidthSet = (style: CSSStyleDeclaration) => {
  const { height, width } = style;
  if (!height || !width) {
    return false;
  }

  return (
    containsNumber(height) ||
    containsNumber(width) ||
    !containsChar(height, '%') ||
    !containsChar(width, '%')
  );
};

const returnNumber = (value: number) => (isNaN(value) ? 0 : value);

export const computeElementHeight = (
  elementStyle: CSSStyleDeclaration,
  alternativeHeight: string | null
) => {
  const height =
    parseInt(elementStyle.paddingTop || '0', 10) +
    parseInt(elementStyle.paddingBottom || '0', 10) +
    parseInt(elementStyle.marginTop || '0', 10) +
    parseInt(elementStyle.marginBottom || '0', 10) +
    parseInt(alternativeHeight || elementStyle.height || '0', 10);
  return returnNumber(height);
};

export const computeElementWidth = (
  tooltipStyle: CSSStyleDeclaration,
  alternativeWidth: string | null
) => {
  const width =
    parseInt(tooltipStyle.paddingLeft || '0', 10) +
    parseInt(tooltipStyle.paddingRight || '0', 10) +
    parseInt(tooltipStyle.marginLeft || '0', 10) +
    parseInt(tooltipStyle.marginRight || '0', 10) +
    parseInt(alternativeWidth || tooltipStyle.width || '0', 10);

  return returnNumber(width);
};

export const getAlternativeStyle = (
  initialStyle: CSSStyleDeclaration,
  element: Element | null
) => {
  if (!element) {
    return { height: '0', width: '0' };
  }
  let innerDiv = document.createElement('div');
  (Object.values(initialStyle) as (keyof CSSStyleDeclaration)[]).forEach(
    property => {
      if (
        property &&
        property !== 'length' &&
        property !== 'parentRule' &&
        !containsNumber(property.toString())
      ) {
        innerDiv.style[property] = initialStyle[property];
      }
    }
  );
  element.appendChild(innerDiv);
  let { height, width } = innerDiv.getBoundingClientRect();
  innerDiv.remove();

  return { height: height.toString(), width: width.toString() };
};

const defaultRect = {
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  width: 0,
  height: 0
};

export const getBoundingRect = (element: Element | null): ClientRect => {
  if (element) {
    return element.getBoundingClientRect();
  } else {
    return defaultRect;
  }
};

export const getContainerBoundaries = (
  container: Element | Window
): ContainerDimensions => {
  const isWindow = (element: Element | Window): element is Window =>
    element === window;

  if (isWindow(container)) {
    return {
      maxHeight: window.innerHeight,
      minHeight: 0,
      maxWidth: window.innerWidth,
      minWidth: 0
    };
  }
  const containerRect = getBoundingRect(container);

  return {
    maxHeight: containerRect.top + containerRect.height,
    minHeight: containerRect.top,
    minWidth: containerRect.left,
    maxWidth: containerRect.left + containerRect.width
  };
};

export const getCSSComputedStyle = (params: {
  element: Element;
  getBeforePseudoElement?: boolean;
}) => {
  return window.getComputedStyle(
    params.element,
    params.getBeforePseudoElement ? ':before' : undefined
  );
};

export const getElementDimensions = (params: {
  elementRef: React.RefObject<HTMLElement>;
  elementIsBefore?: boolean;
}) => {
  if (!params.elementRef.current) {
    return {
      totalHeight: 0,
      totalWidth: 0,
      rect: defaultRect
    };
  }

  const dropdownStyle = getCSSComputedStyle({
    element: params.elementRef.current,
    getBeforePseudoElement: params.elementIsBefore
  });
  if (!dropdownStyle) {
    return {
      totalHeight: 0,
      totalWidth: 0,
      rect: defaultRect
    };
  }

  const isStyleComputed = isHeightAndWidthSet(dropdownStyle);
  const { height = null, width = null } = isStyleComputed
    ? {}
    : getAlternativeStyle(dropdownStyle, params.elementRef.current); // Extra calculations For Edge
  const totalHeight = computeElementHeight(dropdownStyle, height);
  const totalWidth = computeElementWidth(dropdownStyle, width);
  const rect = getBoundingRect(params.elementRef.current);

  return {
    totalHeight,
    totalWidth,
    rect
  };
};

export interface ElementDimensions {
  rect: ClientRect;
  totalHeight: number;
  totalWidth: number;
}

interface ContainerDimensions {
  maxHeight: number;
  maxWidth: number;
  minHeight: number;
  minWidth: number;
}

type AllPlacements = TooltipPlacement | DropdownPlacement;

export type IsElementOutOfContainerMethod<T extends AllPlacements> = (params: {
  elementDimensions: ElementDimensions;
  containerDimensions: ContainerDimensions;
  placement: T;
}) => boolean;

interface ElementPlacementParams<T extends AllPlacements> {
  isElementOutOfContainerMethod: IsElementOutOfContainerMethod<T>;
  placement: T;
  possibilities: T[];
  elementDimensions: ElementDimensions;
  containerDimensions: ContainerDimensions;
}

export const getElementPlacement = <T extends AllPlacements>(
  params: ElementPlacementParams<T>
): T | null => {
  if (!params.placement) {
    throw new Error(
      'Element cannot be displayed in the container Element/Window due to its incompatible size.' +
        'Please consider reducing it or better position tooltiped' +
        'element in the screen.'
    );
  }

  if (
    !params.isElementOutOfContainerMethod({
      ...params
    })
  ) {
    return params.placement;
  }

  const newPossibilities = params.possibilities.filter(
    possiblePlacement => params.placement !== possiblePlacement
  );
  const [firstPossiblePlacement] = newPossibilities;

  return getElementPlacement({
    ...params,
    placement: firstPossiblePlacement,
    possibilities: newPossibilities
  });
};
