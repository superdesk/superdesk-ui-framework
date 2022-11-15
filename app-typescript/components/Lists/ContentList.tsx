import * as React from 'react';
import classNames from 'classnames';

interface IPropsItem {
    action?: React.ReactNode;
    locked?: boolean;
    itemColum: Array<{ itemRow: Array<{ content: any }>, border?: boolean, fullwidth?: boolean }>;
    activated?: boolean;
    selected?: boolean;
    archived?: boolean;
    loading?: boolean;
    onClick?(): void;
    onDoubleClick?(): void;
}

class ContentListItem extends React.PureComponent<IPropsItem> {

    private timer: any;
    private delay = 200;
    private prevent = false;

    onSingleClick = () => {
        this.timer = setTimeout(() => {
            if (!this.prevent) {
                if (this.props.onClick) {
                    this.props.onClick();
                }
            }
        }, this.delay);
    }

    onDoubleClick = () => {
        clearTimeout(this.timer);
        this.prevent = true;
        if (this.props.onDoubleClick) {
            this.props.onDoubleClick();
        }
        setTimeout(() => {
            this.prevent = false;
        }, this.delay);
    }

    onActionMenuClick = (event: React.MouseEvent<HTMLElement>) => {
        event.preventDefault();
        event.stopPropagation();
    }

    render() {
        let classes = classNames('sd-list-item sd-shadow--z1', {
            'sd-list-item--activated': this.props.activated,
            'sd-list-item--selected': this.props.selected,
            'fetched': this.props.archived,
            'actioning': this.props.loading,
        });

        return (
            <div
                role='listitem'
                className={classes}
                onClick={this.onSingleClick}
                onDoubleClick={this.onDoubleClick}>
                {this.props.locked
                    ? <div className="sd-list-item__border sd-list-item__border--locked"></div>
                    : <div className="sd-list-item__border"></div>}
                {this.props.itemColum.map((item, index) => {
                    return <div
                        className={`sd-list-item__column ${item.fullwidth && 'sd-list-item__column--grow'} ${!item.border && 'sd-list-item__column--no-border'}`}
                        key={index}>
                        {item.itemRow.map((e, i) => {
                            return (
                                item.itemRow.length <= 1
                                    ? <React.Fragment key={i}>{e.content}</React.Fragment>
                                    : <div className="sd-list-item__row" key={i}>
                                        {e.content}
                                    </div>
                            );
                        })}
                    </div>;
                })}
                <div className="sd-list-item__action-menu" onClick={this.onActionMenuClick}>
                    {this.props.action}
                </div>
            </div>
        );
    }
}

interface IProps {
    items: Array<{
        itemColum: Array<IItemArray>,
        locked?: boolean,
        action?: React.ReactNode,
        loading?: boolean,
        activated?: boolean,
        selected?: boolean,
        archived?: boolean,
        onClick?(): void,
        onDoubleClick?(): void;
    }>;
}

interface IItemArray {
    itemRow: Array<{ content: React.ReactNode }>;
    border?: boolean;
    fullwidth?: boolean;
}

class ContentList extends React.PureComponent<IProps> {
    render() {
        let classes = classNames('sd-list-item-group sd-list-item-group--space-between-items');
        return (
            <div role='list' className={classes}>
                {this.props.items.map((item, index) => {
                    return <ContentListItem
                        key={index}
                        itemColum={item.itemColum}
                        locked={item.locked}
                        action={item.action}
                        loading={item.loading}
                        activated={item.activated}
                        selected={item.selected}
                        archived={item.archived}
                        onClick={item.onClick}
                        onDoubleClick={item.onDoubleClick} />;
                })}
            </div>
        );
    }
}

export {
    ContentList, ContentListItem
};
