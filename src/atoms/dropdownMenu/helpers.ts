import { Placement } from './types';
import { assertUnreachable } from '@utility/helpers';
import { IsElementOutOfContainerMethod } from '@utility/positionCompute';

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
