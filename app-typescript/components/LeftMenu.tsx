import * as React from "react";
import classNames from "classnames";
import Scrollspy from "react-scrollspy";

interface IMenuItem {
  id: string;
  label: string;
  route?: string;
  ref?: string;
  onClick?(): void;
}

interface IMenuGroup {
  label: string;
  items: Array<IMenuItem>;
}

interface IMenu {
  className?: string;
  groups: Array<IMenuGroup>;
  activeItemId: string;
  ariaLabel?: string;
  scrollSpy?: string;
  offset?: number; 
  style?: "default" | "inverse" | "blanc";
  onSelect(id: string, route: string): void;
}

interface IState {
  active: string;   
}

export class LeftMenu extends React.PureComponent<IMenu, IState> {
  constructor(props: IMenu) {
    super(props);

    this.state = {
      active: "",
    };
  }

  handleClick(item: IMenuItem, event?: React.MouseEvent) {
    event?.preventDefault();

    this.setState({
      active: item.id,
    });

    if (item.ref) {
      return document
        .getElementById(item.ref)
        ?.scrollIntoView({ block: "nearest", behavior: "smooth" });
    }

    if (item.onClick) {
      return item.onClick();
    }

    this.props.onSelect(item.id, item.route ? item.route : "");
  }

  render() {
    let classes = classNames(
      "sd-left-nav",
      {
        "sd-left-nav--default": this.props.style === undefined,
        [`sd-left-nav--${this.props.style}`]:
          this.props.style || this.props.style !== undefined,
      },
      this.props.className
    );

    const scrollspyList = () => {
      let scrollSpyList: string[] = [];
      let scrollSpyItems: JSX.Element[] = [];
      this.props.groups.map((element, index) => {
        scrollSpyList = [...scrollSpyList, element.label];
        scrollSpyItems.push(
          <span className="sd-left-nav__group-header" key={"group-" + index}>
            {element.label}
          </span>
        );

        element.items.map((elementOfItem, indexOfItem) => {
          scrollSpyList = [...scrollSpyList, `${elementOfItem.ref}`];

          scrollSpyItems.push(
            <a
              key={"item-" + indexOfItem}
              onClick={(event) => {
                this.handleClick(elementOfItem, event);
              }}
              className="sd-left-nav__btn"
            >
              {elementOfItem.label}
            </a>
          );
        });
      });

      return (
        <Scrollspy
          offset={this.props.offset ? this.props.offset : -300} 
          items={scrollSpyList}
          rootEl={this.props.scrollSpy}
          currentClassName="sd-left-nav__btn--active"
        >
          {scrollSpyItems.map((element) => element)}
        </Scrollspy>
      );
    };

    const defaultList = () => {
      return this.props.groups.map((group, i) => {
        return (
          <React.Fragment key={i}>
            <span className="sd-left-nav__group-header">{group.label}</span>
            {group.items.map((item, j) => {
              return (
                <button
                  key={j}
                  onClick={(event) => {
                    this.handleClick(item, event);
                  }}
                  className={
                    item.id === this.state.active
                      ? "sd-left-nav__btn sd-left-nav__btn--active"
                      : "sd-left-nav__btn"
                  }
                >
                  {item.label}
                </button>
              );
            })}
          </React.Fragment>
        );
      });
    };

    return (
      <nav className={classes} aria-label={this.props.ariaLabel}>
        {this.props.scrollSpy ? scrollspyList() : defaultList()}
      </nav>
    );
  }
}
