import { $danger, $light, $success } from '@globals/colors';
import {
  Placement,
  PossiblePlacements,
  WrapperProps
} from './Tooltip';
import { assertUnreachable } from '@utility/helpers';
import { TooltipType } from '@atoms/tooltip/types';

const rightTooltipStyle = `
  margin-bottom: 0;
  bottom: auto;
  transform: translate(0, -50%);
  left: 100%;
  top: 50%;
  margin-left: 10px;
`;

const leftTooltipStyle = `
  margin-bottom: 0;
  bottom: auto;
  transform: translate(0, -50%);
  left: auto;
  right: 100%;
  top: 50%;
  margin-right: 10px;
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
  margin-top: 10px;
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
    case Placement.TOP:
      return topTooltipStyle;
    case Placement.RIGHT:
      return rightTooltipStyle;
    case Placement.LEFT:
      return leftTooltipStyle;
    case Placement.BOTTOM:
      return bottomTooltipStyle;
    default:
      return assertUnreachable(placement);
  }
};

export const handleTooltipArrowPosition = ({ placement }: WrapperProps) => {
  switch (placement) {
    case Placement.TOP:
      return topTooltipArrowStyle;
    case Placement.RIGHT:
      return rightTooltipArrowStyle;
    case Placement.LEFT:
      return leftTooltipArrowStyle;
    case Placement.BOTTOM:
      return bottomTooltipArrowStyle;
    default:
      return assertUnreachable(placement);
  }
};

export const getTooltipBgColorByType = (type: TooltipType) => {
  switch (type) {
    case 'info':
      return $light[700];
    case 'success':
      return $success[500];
    case 'error':
      return $danger[500];
    default:
      return assertUnreachable(type);
  }
};

export const getNextPossiblePosition = (
  possiblePlacements: PossiblePlacements
) => {
  return (Object.keys(possiblePlacements) as Placement[]).find(
    (placement: Placement) => !possiblePlacements[placement].outOfScreen
  );
};

const returnNumber = (value: number) => (isNaN(value) ? 0 : value);

export const computeTotalTooltipWidth = (tooltipStyle: CSSStyleDeclaration) => {
  const width =
    parseInt(tooltipStyle.paddingLeft || '0', 10) +
    parseInt(tooltipStyle.paddingRight || '0', 10) +
    parseInt(tooltipStyle.width || '0', 10);

  return returnNumber(width);
};

const getMarginByPlacement = (
  placement: Placement
): keyof CSSStyleDeclaration => {
  switch (placement) {
    case Placement.TOP:
      return 'marginBottom';
    case Placement.LEFT:
      return 'marginRight';
    case Placement.RIGHT:
      return 'marginLeft';
    case Placement.BOTTOM:
      return 'marginTop';

    default:
      return assertUnreachable(placement);
  }
};

export const computeTotalTooltipHeight = (
  tooltipStyle: CSSStyleDeclaration,
  placement: Placement
) => {
  const height =
    parseInt(tooltipStyle.paddingTop || '0', 10) +
    parseInt(tooltipStyle.paddingBottom || '0', 10) +
    parseInt(tooltipStyle[getMarginByPlacement(placement)] || '0', 10) +
    parseInt(tooltipStyle.height || '0', 10);

  return returnNumber(height);
};
