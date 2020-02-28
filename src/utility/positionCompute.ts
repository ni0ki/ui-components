/** Both tooltips and dropdown use the DOM to make sure
 * they are fitting in a container
 */

const containsNumber = (value: string) => /\d/.test(value);
const containsChar = (value: string, char: string) =>
  value.indexOf(char) !== -1;

export const checkIsStyleComputed = (style: CSSStyleDeclaration) => {
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
  element: EventTarget | null
) => {
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
  (element as Element).appendChild(innerDiv);
  let { height, width } = innerDiv.getBoundingClientRect();
  innerDiv.remove();

  return { height: height.toString(), width: width.toString() };
};

export const getBoundingRect = (element: Element | null): ClientRect => {
  if (element) {
    return element.getBoundingClientRect();
  } else {
    return {
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      width: 0,
      height: 0
    };
  }
};

export const getContainerBoundaries = (
  container: Element | Window
): ContainerDimensions => {
  if (container === window) {
    return {
      maxHeight: window.innerHeight,
      minHeight: 0,
      maxWidth: window.innerWidth,
      minWidth: 0
    };
  }
  const containerRect = getBoundingRect(container as Element);

  return {
    maxHeight: containerRect.top + containerRect.height,
    minHeight: containerRect.top,
    minWidth: containerRect.left,
    maxWidth: containerRect.left + containerRect.width
  };
};

export const getCSSComputedStyle = (
  ref: Element | null,
  getBeforePseudoElement?: boolean
) =>
  window.getComputedStyle(
    ref as Element,
    getBeforePseudoElement ? ':before' : undefined
  );

export const getElementDimensions = (
  menuRef: React.RefObject<HTMLElement>,
  elementIsBefore?: boolean
): ElementDimensions => {
  const dropdownStyle = getCSSComputedStyle(menuRef.current, elementIsBefore);
  const isStyleComputed = checkIsStyleComputed(dropdownStyle);
  const { height = null, width = null } = isStyleComputed
    ? {}
    : getAlternativeStyle(dropdownStyle, menuRef.current); // Extra calculations For Edge
  const totalHeight = computeElementHeight(dropdownStyle, height);
  const totalWidth = computeElementWidth(dropdownStyle, width);
  const rect = getBoundingRect(menuRef.current);

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

export type IsElementOutOfContainerMethod<T> = (params: {
  elementDimensions: ElementDimensions;
  containerDimensions: ContainerDimensions;
  placement: T;
}) => boolean;

export const getElementPlacement = <T>(
  isElementOutOfContainerMethod: IsElementOutOfContainerMethod<T>,
  placement: T,
  possibilities: T[],
  elementDimensions: ElementDimensions,
  containerDimensions: ContainerDimensions
): T | null => {
  if (!placement) {
    throw new Error(
      'Element cannot be displayed in the container Element/Window due to its incompatible size.' +
        'Please consider reducing it or better position tooltiped' +
        'element in the screen.'
    );
  }

  if (
    !isElementOutOfContainerMethod({
      elementDimensions,
      containerDimensions,
      placement
    })
  ) {
    return placement;
  }

  const newPossibilities = possibilities.filter(
    possiblePlacement => placement !== possiblePlacement
  );
  const [firstPossiblePlacement] = newPossibilities;

  return getElementPlacement(
    isElementOutOfContainerMethod,
    firstPossiblePlacement,
    newPossibilities,
    elementDimensions,
    containerDimensions
  );
};
