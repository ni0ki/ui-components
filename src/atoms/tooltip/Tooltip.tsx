import * as React from 'react';
import styled from 'styled-components';
import { fontFamily } from '@ions/text/Text';
import { $light } from '@globals/colors';
import {
  computeTotalTooltipHeight,
  computeTotalTooltipWidth,
  getNextPossiblePosition,
  getTooltipBgColorByType,
  handleTooltipArrowPosition,
  handleTooltipPosition
} from './helpers';
import { assertUnreachable } from '@utility/helpers';

export type TooltipType = 'info' | 'success' | 'error';

interface Props extends Partial<WrapperProps> {
  title: string;
}

interface State {
  placement: Placement;
}

export interface WrapperProps {
  placement: Placement;
  type: TooltipType;
  options: {
    tooltipMaxWidth?: string;
    container?: Element;
  };
}

export const enum Placement {
  RIGHT = 'right',
  LEFT = 'left',
  TOP = 'top',
  BOTTOM = 'bottom'
}

export type PossiblePlacements = {
  [key in Placement]: { outOfScreen: boolean };
};

const TooltipWrapper = styled.span<WrapperProps>`
  > :first-child:hover {
    position: relative;
  }

  > :first-child::before {
    ${fontFamily}
    visibility: hidden;
    opacity: 0;
    font-size: 0.75rem;
    line-height: 1.25;
    display: inline-block;
    box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.2);
    border-radius: 4px;
    padding: 8px;
    background-color: ${({ type }: WrapperProps) =>
      getTooltipBgColorByType(type)};
    content: attr(data-tooltip);
    color: ${$light[100]};
    position: absolute;
    max-width: ${({ options }: WrapperProps) =>
      options.tooltipMaxWidth ? `${options.tooltipMaxWidth}px` : '300px'};
    width: max-content;
    @supports (-ms-ime-align: auto) {
      width: 100%;
    }
    word-wrap: break-word;
    transform: translate(-50%, 0);
    text-align: center;
    z-index: 1001;
    transition: opacity 0.3s ease-in-out;
    ${handleTooltipPosition}
  }

  > :first-child:hover::before {
    visibility: visible;
    opacity: 1;
  }

  > :first-child::after {
    display: inline-block;
    visibility: hidden;
    opacity: 0;
    width: 0;
    height: 0;
    border-left: 7px solid transparent;
    border-right: 7px solid transparent;
    border-top: 7px solid
      ${({ type }: WrapperProps) => getTooltipBgColorByType(type)};
    position: absolute;
    content: '';
    z-index: 1002;
    transition: opacity 0.3s ease-in-out;
    ${handleTooltipArrowPosition}
  }

  > :first-child:hover::after {
    visibility: visible;
    opacity: 1;
  }
`;

class Tooltip extends React.Component<Props, State> {
  private ref: React.ReactNode;
  private tooltipPossiblePlacements: PossiblePlacements;

  public constructor(props: Props) {
    super(props);
    this.state = {
      placement: props.placement || Placement.TOP
    };
    this.tooltipPossiblePlacements = {
      top: { outOfScreen: false },
      right: { outOfScreen: false },
      left: { outOfScreen: false },
      bottom: { outOfScreen: false }
    };
  }

  public componentDidUpdate(prevProps: Props): void {
    console.log('**did update', prevProps.title, this.props.title);
  }

  private checkPosition(placement: Placement | undefined): Placement {
    if (!placement) {
      throw new Error(
        'Tooltip cannot be displayed in the container Element/Window due to its incompatible size. Please consider reducing it or better position tooltiped element in the screen.'
      );
    }

    const placementInfo = this.tooltipPossiblePlacements[placement];

    if (!placementInfo) {
      throw new Error('Unexpected placement for tooltip');
    }

    if (!placementInfo.outOfScreen) {
      const outOfScreen = this.checkIfOutScreen(placement);
      if (!outOfScreen) {
        return placement;
      }

      this.tooltipPossiblePlacements[placement].outOfScreen = outOfScreen;
    }

    return this.checkPosition(
      getNextPossiblePosition(this.tooltipPossiblePlacements)
    );
  }

  private checkIfOutScreen(placement: Placement): boolean {
    const tooltip = window.getComputedStyle(this.ref as Element, ':before');
    // does not work for Edge => I need to check if the height and width don't contain number or have percentage in them (which is the case for edge)
    // then the solution would be to get theses styles, create a non visible dom element with them get the getBoundingClientRect of it and then remove it
    const totalWidth = computeTotalTooltipWidth(tooltip);
    const totalHeight = computeTotalTooltipHeight(tooltip, placement);

    const rect = (this.ref as Element).getBoundingClientRect();
    return this.isOffscreen(rect, totalWidth, totalHeight, placement);
  }

  private setToVisible(event: MouseEvent) {
    this.ref = event.currentTarget;
    try {
      const placement = this.checkPosition(
        this.props.placement || Placement.TOP
      );
      this.setState({ placement });
    } catch (e) {
      console.error(e);
    }
  }

  private isOffscreen(
    rect: DOMRect | ClientRect,
    extraWidth: number,
    extraHeight: number,
    placement: Placement
  ): boolean {
    let maxHeight: number;
    let minHeight: number;
    let maxWidth: number;
    let minWidth: number;
    if (!this.props.options || !this.props.options.container) {
      maxHeight = window.innerHeight;
      minHeight = 0;
      maxWidth = window.innerWidth;
      minWidth = 0;
    } else {
      const a = this.props.options.container.getBoundingClientRect();
      maxHeight = a.top + a.height;
      minHeight = a.top;
      minWidth = a.left;
      maxWidth = a.left + a.width;
    }

    switch (placement) {
      case Placement.TOP:
        return (
          rect.top - extraHeight < minHeight ||
          rect.left + rect.width / 2 + extraWidth / 2 > maxWidth ||
          rect.left + rect.width / 2 - extraWidth / 2 < minWidth
        );
      case Placement.BOTTOM:
        return (
          rect.top + rect.height + extraHeight > maxHeight ||
          rect.left + rect.width / 2 + extraWidth / 2 > maxWidth ||
          rect.left + rect.width / 2 - extraWidth / 2 < minWidth
        );
      case Placement.RIGHT:
        return (
          rect.left + rect.width + extraWidth > maxWidth ||
          rect.top + rect.height / 2 - extraHeight / 2 < minHeight ||
          rect.top + rect.height / 2 + extraHeight / 2 > maxHeight
        );
      case Placement.LEFT:
        return (
          rect.left - extraWidth < minWidth ||
          rect.top + rect.height / 2 - extraHeight / 2 < minHeight ||
          rect.top + rect.height / 2 + extraHeight / 2 > maxHeight
        );

      default:
        assertUnreachable(placement);
        return true;
    }
  }
  public componentDidMount(): void {
    console.log('**did mount');
  }

  public render() {
    const {
      title = 'Default',
      type = 'info',
      children,
      options = {}
    } = this.props;
    const childrenWithProps = React.Children.map(children, child => {
      if (React.isValidElement(child)) {
        return React.cloneElement(child, {
          'data-tooltip': title,
          onMouseEnter: this.setToVisible.bind(this)
        });
      }
    });

    return (
      <TooltipWrapper
        type={type}
        placement={this.state.placement}
        options={options}
      >
        {childrenWithProps}
      </TooltipWrapper>
    );
  }
}

export default Tooltip;
