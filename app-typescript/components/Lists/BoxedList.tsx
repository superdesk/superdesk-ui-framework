import * as React from 'react';
import classNames from 'classnames';

class BoxedListMedia extends React.PureComponent {
    render() {
        return (
            <div className='boxed-list__item-media'>
                {this.props.children}
            </div>
        );
    }
}

class BoxedListContent extends React.PureComponent {
    render() {
        return (
            <div className='boxed-list__item-content'>
                {this.props.children}
            </div>
        );
    }
}

class BoxedListContentRow extends React.PureComponent {
    render() {
        return (
            <div className='boxed-list__item-content-row'>
                {this.props.children}
            </div>
        );
    }
}

class BoxedListFooter extends React.PureComponent {
    render() {
        return (
            <div className='boxed-list__item-footer'>
                {this.props.children}
            </div>
        );
    }
}

interface IPropsActions {
    children?: React.ReactNode;
    slideIn?: boolean; // defaults to 'compact'
}

class BoxedListActions extends React.PureComponent<IPropsActions> {
    public rootElement?: HTMLDivElement | null;

    render() {
        let classes = classNames({
            'boxed-list__actions--static': this.props.slideIn === undefined,
            'boxed-list__actions--slide-in': this.props.slideIn === true || this.props.slideIn !== undefined,
        });
        return (
            <div
                className={classes}
                ref={(el) => {
                    this.rootElement = el;
                }}
            >
                {this.props.children}
            </div>
        );
    }
}

interface IPropsItem {
    media?: React.ReactNode;
    footer?: React.ReactNode;
    actions?: React.ReactNode;
    children?: React.ReactNode;
    density?: 'compact' | 'comfortable' | 'loose';
    type?: 'default' | 'primary' | 'success' | 'warning' | 'alert' | 'highlight'; // defaults to 'default'
    clickable?: boolean;
    alignVertical?: 'start' | 'center';
    slideInActions?: boolean;
    selected?: boolean;
    onClick?(): void;
}

class BoxedListItem extends React.PureComponent<IPropsItem> {
    private actionsRef: BoxedListActions | null;

    constructor(props: IPropsItem) {
        super(props);

        this.actionsRef = null;
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event: React.MouseEvent<HTMLLIElement, MouseEvent>) {
        if (this.actionsRef?.rootElement != null && this.actionsRef.rootElement.contains(event.target as HTMLElement)) {
            return;
        } else {
            this.props.onClick?.();
        }
    }

    render() {
        let classes = classNames('boxed-list__item', {
            'boxed-list__item--comfortable': this.props.density === undefined,
            [`boxed-list__item--${this.props.density}`]: this.props.density || this.props.density !== undefined,
            'boxed-list__item--clickable': this.props.clickable === true,
            'boxed-list__item--selected': this.props.selected,
            [`boxed-list__item--${this.props.type}`]: this.props.type || this.props.type !== undefined,
            [`boxed-list__item--align-${this.props.alignVertical}`]: this.props.alignVertical,
        });
        return (
            <li className={classes} onClick={this.handleClick}>

                {this.props.media && (
                    <BoxedListMedia>
                        {this.props.media}
                    </BoxedListMedia>
                )}

                <BoxedListContent>
                    {this.props.children}
                </BoxedListContent>

                {this.props.footer && (
                    <BoxedListFooter>
                        {this.props.footer}
                    </BoxedListFooter>
                )}

                {this.props.actions && (
                    <BoxedListActions
                        slideIn={this.props.slideInActions}
                        ref={(ref) => {
                            this.actionsRef = ref;
                        }}
                    >
                        {this.props.actions}
                    </BoxedListActions>
                )}
            </li>
        );
    }
}

interface IProps {
    children?: React.ReactNode;
    density?: 'compact' | 'comfortable'; // defaults to 'compact'
}

class BoxedList extends React.PureComponent<IProps> {
    render() {
        let classes = classNames('boxed-list', {
            'boxed-list--compact': this.props.density === undefined,
            [`boxed-list--${this.props.density}`]: this.props.density || this.props.density !== undefined,
        });
        return (
            <ul className={classes}>
                {this.props.children}
            </ul>
        );
    }
}

export {
    BoxedList, BoxedListItem, BoxedListContentRow, BoxedListActions, BoxedListFooter
};
