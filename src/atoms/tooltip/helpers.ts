import { dashGreen00, functionalRed02, validatorGreen } from '@colors';
import { assertUnreachable } from '@utility/helpers';
import { WrapperProps } from './Tooltip';
import { Placement, TooltipType } from './types';
import { IsElementOutOfContainerMethod } from '@utility/positionCompute';
export const tooltipMargin = 10;
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

export const isTooltipOutOfContainer: IsElementOutOfContainerMethod<
  Placement
> = ({ elementDimensions, containerDimensions, placement }): boolean => {
  switch (placement) {
    case 'top':
      return (
        elementDimensions.rect.top - elementDimensions.totalHeight <
          containerDimensions.minHeight ||
        elementDimensions.rect.left +
          elementDimensions.rect.width / 2 +
          elementDimensions.totalWidth / 2 >
          containerDimensions.maxWidth ||
        elementDimensions.rect.left +
          elementDimensions.rect.width / 2 -
          elementDimensions.totalWidth / 2 <
          containerDimensions.minWidth
      );
    case 'bottom':
      return (
        elementDimensions.rect.top +
          elementDimensions.rect.height +
          elementDimensions.totalHeight >
          containerDimensions.maxHeight ||
        elementDimensions.rect.left +
          elementDimensions.rect.width / 2 +
          elementDimensions.totalWidth / 2 >
          containerDimensions.maxWidth ||
        elementDimensions.rect.left +
          elementDimensions.rect.width / 2 -
          elementDimensions.totalWidth / 2 <
          containerDimensions.minWidth
      );
    case 'right':
      return (
        elementDimensions.rect.left +
          elementDimensions.rect.width +
          elementDimensions.totalWidth >
          containerDimensions.maxWidth ||
        elementDimensions.rect.top +
          elementDimensions.rect.height / 2 -
          elementDimensions.totalHeight / 2 <
          containerDimensions.minHeight ||
        elementDimensions.rect.top +
          elementDimensions.rect.height / 2 +
          elementDimensions.totalHeight / 2 >
          containerDimensions.maxHeight
      );
    case 'left':
      return (
        elementDimensions.rect.left - elementDimensions.totalWidth <
          containerDimensions.minWidth ||
        elementDimensions.rect.top +
          elementDimensions.rect.height / 2 -
          elementDimensions.totalHeight / 2 <
          containerDimensions.minHeight ||
        elementDimensions.rect.top +
          elementDimensions.rect.height / 2 +
          elementDimensions.totalHeight / 2 >
          containerDimensions.maxHeight
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
