import * as React from 'react';
import styled from 'styled-components';
import { white } from '@colors';
import { Placement } from '@atoms/tooltip/types';
import {
  checkIsStyleComputed,
  computeTooltipHeight,
  computeTooltipWidth,
  displayIfInContainer,
  getAlternativeStyle,
  getBoundingRect,
  getCSSComputedStyle,
  getTooltipBgColorByType,
  handleTooltipArrowPosition,
  handleTooltipPosition,
  isElementOutOfContainer,
  removeOutOfScreenPlacement
} from '@atoms/tooltip/helpers';

export interface Props {
  title: string;
  /**
   * The position of the tooltip
   * @default top
   */
  placement?: 'right' | 'left' | 'top' | 'bottom';
  /**
   * A type that defines the tooltip color
   * @default info
   */
  type?: 'info' | 'success' | 'error';
  /**
   * Extra options
   * @default {tooltipMaxWidth: 300 (in px), container: window}
   */
  options?: {
    /**
     * A max width for the tooltip
     */
    tooltipMaxWidth?: number;
    /**
     * An element as a container (if not the default window)
     */
    container?: HTMLElement | null;
  };
}

interface State {
  placement: Placement;
  outOfContainer: boolean;
}

export type WrapperProps = Omit<Required<Props>, 'title'> & {
  outOfContainer: boolean;
};

const TooltipWrapper = styled.span<WrapperProps>`
  > :first-child:hover {
    position: relative;
  }

  > :first-child::before {
    font-family: inherit;
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
    color: ${white};
    position: absolute;
    max-width: ${({ options }: WrapperProps) =>
      options.tooltipMaxWidth ? `${options.tooltipMaxWidth}px` : '300px'};
    width: max-content;
    @supports (-ms-ime-align: auto) {
      min-width: 50px;
    }
    word-wrap: break-word;
    transform: translate(-50%, 0);
    text-align: center;
    z-index: 1001;
    transition: opacity 0.1s ease-in-out;
    ${handleTooltipPosition}
  }

  > :first-child:hover::before {
    ${displayIfInContainer}
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
    transition: opacity 0.1s ease-in-out;
    ${handleTooltipArrowPosition}
  }

  > :first-child:hover::after {
    ${displayIfInContainer}
  }
`;

class Tooltip extends React.PureComponent<Props, State> {
  private ref: EventTarget | null;
  private coordinates: { top: number | null; left: number | null };
  private readonly tooltipPossiblePlacements: Placement[] = [];
  private readonly defaultPlacement: Placement;

  public constructor(props: Props) {
    super(props);
    this.defaultPlacement = 'top';
    this.ref = null;
    this.state = {
      placement: props.placement || this.defaultPlacement,
      outOfContainer: false
    };
    this.tooltipPossiblePlacements = ['top', 'left', 'right', 'bottom'];
    this.coordinates = {
      top: null,
      left: null
    };
  }

  public componentDidUpdate(prevProps: Props, prevState: State): void {
    // if state is the same (the update came from prop change) do calculate else if state changed (update caused by new positioning) do not calculate again
    if (prevState.placement !== this.state.placement || !this.ref) {
      return;
    }
    this.positionTooltip();
  }

  private onHover = (event: MouseEvent) => {
    const target = event.currentTarget;
    const { top: previousTop, left: previousLeft } = this.coordinates;
    const { top, left } = getBoundingRect(target);

    if (top === previousTop && left === previousLeft) {
      return;
    }

    this.coordinates = { ...this.coordinates, ...{ top, left } };
    this.ref = target;
    this.positionTooltip();
  };

  private getTooltipPlacement(
    placement: Placement,
    possibilities: Placement[]
  ): Placement {
    if (!placement) {
      throw new Error(
        'Tooltip cannot be displayed in the container Element/Window due to its incompatible size. Please consider reducing it or better position tooltiped element in the screen.'
      );
    }

    if (!this.isOutScreen(placement)) {
      return placement;
    }

    const newPossibilities = removeOutOfScreenPlacement(
      possibilities,
      placement
    );
    const [firstPossiblePlacement] = newPossibilities;

    return this.getTooltipPlacement(firstPossiblePlacement, newPossibilities);
  }

  private isOutScreen(placement: Placement): boolean {
    const tooltipStyle = getCSSComputedStyle(this.ref as Element);
    const isStyleComputed = checkIsStyleComputed(tooltipStyle);
    const { width = null, height = null } = isStyleComputed
      ? {}
      : getAlternativeStyle(tooltipStyle, this.ref); // Extra calculations For Edge

    const totalWidth = computeTooltipWidth(tooltipStyle, width);
    const totalHeight = computeTooltipHeight(tooltipStyle, height);
    const rect = getBoundingRect(this.ref);
    const { options } = this.props;
    const container =
      !options || !options.container ? window : options.container;

    return isElementOutOfContainer({
      rect,
      measurements: { totalWidth, totalHeight },
      container,
      placement
    });
  }

  private positionTooltip() {
    try {
      const placement = this.getTooltipPlacement(
        this.props.placement || this.defaultPlacement,
        this.tooltipPossiblePlacements
      );
      this.setState({ placement: placement });
    } catch (e) {
      this.setState({ outOfContainer: true });
      console.error(e);
    }
  }

  private cloneChildren = (title: string) => (child: React.ReactNode) => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, {
        'data-tooltip': title,
        onMouseEnter: this.onHover
      });
    }
  };

  public render() {
    const {
      title = 'Default',
      type = 'info',
      children,
      options = {}
    } = this.props;
    const childrenWithProps = React.Children.map(
      <div>{children}</div>, // Wrapping the children with a div to make sure that the tooltip will be attached to this div so any state modification of the initial children (disabled, etc..) won't affect the style of the tooltip
      this.cloneChildren(title)
    );

    return (
      <TooltipWrapper type={type} {...this.state} options={options}>
        {childrenWithProps}
      </TooltipWrapper>
    );
  }
}

export default Tooltip;
