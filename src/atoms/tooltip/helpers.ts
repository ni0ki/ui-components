import { dashGreen00, functionalRed02, validatorGreen } from '@colors';
import { assertUnreachable } from '@utility/helpers';
import { WrapperProps } from './Tooltip';
import { Placement, TooltipType } from './types';
export const tooltipMargin = '10';
const rightTooltipStyle = `
  margin-bottom: 0;
  bottom: auto;
  transform: translate(0, -50%);
  left: 100%;
  top: 50%;
  margin-left: ${tooltipMargin}px;
`;

const leftTooltipStyle = `
  margin-bottom: 0;
  bottom: auto;
  transform: translate(0, -50%);
  left: auto;
  right: 100%;
  top: 50%;
  margin-right: ${tooltipMargin}px;
`;

const topTooltipStyle = `
  margin-bottom: 10px;
  bottom: 100%;
  left: 50%;
`;

const bottomTooltipStyle = `
  margin-bottom: 0;
  bottom: auto;
  left: 50%;
  top: 100%;
  margin-top: ${tooltipMargin}px;
`;

const topTooltipArrowStyle = `
  margin-bottom: 5px;
  bottom: 100%;
  transform: translate(-50%, 0);
  left: 50%;
`;

const rightTooltipArrowStyle = `
  margin-bottom: 0;
  bottom: auto;
  transform: rotate(90deg) translate(0, -50%);
  left: 100%;
  top: 50%;
  margin-left: -2px;
  margin-top: -4px;
`;

const leftTooltipArrowStyle = `
  margin-bottom: 0;
  bottom: auto;
  transform: rotate(-90deg) translate(0, -50%);
  left: auto;
  right: 100%;
  top: 50%;
  margin-right: -2px;
  margin-top: -4px;
`;

const bottomTooltipArrowStyle = `
  margin-bottom: 0;
  bottom: auto;
  transform: rotate(180deg) translate(-50%, 0);
  top: 100%;
  left: unset;
  right: 50%
  margin-top: 5px;
`;

export const handleTooltipPosition = ({ placement }: WrapperProps) => {
  switch (placement) {
    case 'top':
      return topTooltipStyle;
    case 'right':
      return rightTooltipStyle;
    case 'left':
      return leftTooltipStyle;
    case 'bottom':
      return bottomTooltipStyle;
    default:
      return assertUnreachable(placement);
  }
};

export const handleTooltipArrowPosition = ({ placement }: WrapperProps) => {
  switch (placement) {
    case 'top':
      return topTooltipArrowStyle;
    case 'right':
      return rightTooltipArrowStyle;
    case 'left':
      return leftTooltipArrowStyle;
    case 'bottom':
      return bottomTooltipArrowStyle;
    default:
      return assertUnreachable(placement);
  }
};

export const displayIfInContainer = ({ outOfContainer }: WrapperProps) => {
  return !outOfContainer
    ? `visibility: visible;
       opacity: 1;`
    : ``;
};

export const getTooltipBgColorByType = (type: TooltipType) => {
  switch (type) {
    case 'info':
      return dashGreen00;
    case 'success':
      return validatorGreen;
    case 'error':
      return functionalRed02;
    default:
      return assertUnreachable(type);
  }
};

const returnNumber = (value: number) => (isNaN(value) ? 0 : value);

export const computeTooltipWidth = (
  tooltipStyle: CSSStyleDeclaration,
  placement: Placement,
  alternativeWidth: string | null
) => {
  const width =
    parseInt(tooltipStyle.paddingLeft || '0', 10) +
    parseInt(tooltipStyle.paddingRight || '0', 10) +
    parseInt(tooltipMargin, 10) +
    parseInt(alternativeWidth || tooltipStyle.width || '0', 10);

  return returnNumber(width);
};

export const computeTooltipHeight = (
  tooltipStyle: CSSStyleDeclaration,
  placement: Placement,
  alternativeHeight: string | null
) => {
  const height =
    parseInt(tooltipStyle.paddingTop || '0', 10) +
    parseInt(tooltipStyle.paddingBottom || '0', 10) +
    parseInt(tooltipMargin, 10) +
    parseInt(alternativeHeight || tooltipStyle.height || '0', 10);

  return returnNumber(height);
};

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

export const getCSSComputedStyle = (ref: EventTarget | null) =>
  window.getComputedStyle(ref as Element, ':before');

export const getBoundingRect = (element: EventTarget | null): ClientRect => {
  return element
    ? (element as Element).getBoundingClientRect()
    : {
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        width: 0,
        height: 0
      };
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

const getContainerBoundaries = (container: Element | Window) => {
  if (container === window) {
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

export const isElementOutOfContainer = ({
  rect,
  measurements,
  container,
  placement
}: {
  rect: ClientRect;
  measurements: {
    totalWidth: number;
    totalHeight: number;
  };
  container: Element | Window;
  placement: Placement;
}): boolean => {
  let { totalWidth, totalHeight } = measurements;
  let { maxHeight, minHeight, maxWidth, minWidth } = getContainerBoundaries(
    container
  );

  switch (placement) {
    case 'top':
      return (
        rect.top - totalHeight < minHeight ||
        rect.left + rect.width / 2 + totalWidth / 2 > maxWidth ||
        rect.left + rect.width / 2 - totalWidth / 2 < minWidth
      );
    case 'bottom':
      return (
        rect.top + rect.height + totalHeight > maxHeight ||
        rect.left + rect.width / 2 + totalWidth / 2 > maxWidth ||
        rect.left + rect.width / 2 - totalWidth / 2 < minWidth
      );
    case 'right':
      return (
        rect.left + rect.width + totalWidth > maxWidth ||
        rect.top + rect.height / 2 - totalHeight / 2 < minHeight ||
        rect.top + rect.height / 2 + totalHeight / 2 > maxHeight
      );
    case 'left':
      return (
        rect.left - totalWidth < minWidth ||
        rect.top + rect.height / 2 - totalHeight / 2 < minHeight ||
        rect.top + rect.height / 2 + totalHeight / 2 > maxHeight
      );

    default:
      assertUnreachable(placement);
      return true;
  }
};

export const removeOutOfScreenPlacement = (
  possibilities: Placement[],
  placement: Placement
) => {
  return possibilities.filter(
    possiblePlacement => possiblePlacement !== placement
  );
};
