import * as React from 'react';
import Tooltip from '@atoms/tooltip/Tooltip';

interface Props {
  item: number;
  innerRef: React.RefObject<HTMLUListElement>;
}

class ItemWithTooltip extends React.Component<
  Props,
  { itemOneClicked: boolean }
> {
  public constructor(props: Props) {
    super(props);
    this.state = {
      itemOneClicked: false
    };
  }

  private clickCb = () => {
    if (this.props.item === 1) {
      this.setState({ itemOneClicked: true });
      setTimeout(() => this.setState({ itemOneClicked: false }), 500);
    }
  };

  private getTitle = () => {
    const { item } = this.props;
    if (item == 1 && !this.state.itemOneClicked) {
      return `Item 1`;
    } else if (item == 1 && this.state.itemOneClicked) {
      return `This is a custom title for item 1 after click appended with an extra long text to test the placement auto change behaviour`;
    } else {
      return `Tooltip for item ${item} on hover.`;
    }
  };

  public render() {
    const { item, innerRef } = this.props;
    return (
      <React.Fragment>
        <li
          style={{
            border: 'solid 1px lightgray',
            padding: ' 0 4px',
            borderRadius: '4px',
            display: 'flex',
            justifyContent: 'space-around'
          }}
        >
          <span>Item {item}</span>
          <Tooltip
            placement={item === 1 ? 'left' : 'bottom'}
            type={item === 1 && this.state.itemOneClicked ? 'success' : 'info'}
            options={{
              tooltipMaxWidth: 150,
              container: innerRef ? innerRef.current : null
            }}
            title={this.getTitle()}
          >
            <button style={{ marginRight: '20px' }} onClick={this.clickCb}>
              Hover me
            </button>
          </Tooltip>
        </li>
        <hr></hr>
      </React.Fragment>
    );
  }
}

class TooltipDemo extends React.Component<
  {},
  { ref: React.RefObject<HTMLUListElement> }
> {
  private ref: React.RefObject<HTMLUListElement>;
  public constructor(props: {}) {
    super(props);
    this.ref = React.createRef();
    this.state = {
      ref: this.ref
    };
  }

  public componentDidMount(): void {
    this.setState({ ref: this.ref });
  }

  public render() {
    return (
      <ul
        ref={this.ref}
        style={{
          height: '200px',
          width: '40%',
          padding: 0,
          overflow: 'hidden',
          overflowY: 'scroll'
        }}
      >
        {[...Array(13)].map((_, key) => (
          <ItemWithTooltip innerRef={this.state.ref} key={key} item={key} />
        ))}
      </ul>
    );
  }
}

export default TooltipDemo;
