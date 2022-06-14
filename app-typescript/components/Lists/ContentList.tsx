import * as React from 'react';
import classNames from 'classnames';

interface IPropsItem {
    action?: React.ReactNode;
    locked?: boolean;
    itemColum: Array<{itemRow: Array<{content: any}>, border?: boolean, fullwidth?: boolean}>;
    activated?: boolean;
    selected?: boolean;
    fetched?: boolean;
    loading?: boolean;
    onClick?(): void;
}

class ContentListItem extends React.PureComponent<IPropsItem> {
    render() {
        let classes = classNames('sd-list-item sd-list-item-group sd-list-item-group--space-between-items', {
            'sd-list-item--activated': this.props.activated,
            'sd-list-item--selected': this.props.selected,
            'fetched': this.props.fetched,
            'actioning': this.props.loading,
    });

        return (
            <div className={classes} onClick={this.props.onClick}>
                <div className="sd-list-item sd-shadow--z1">
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
                    <div className="sd-list-item__action-menu">
                        {this.props.action}
                    </div>
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
        fetched?: boolean,
        onClick?(): void,
    }>;
}

interface IItemArray {
    itemRow: Array<{content: React.ReactNode}>;
    border?: boolean;
    fullwidth?: boolean;
}

class ContentList extends React.PureComponent<IProps> {
    render() {
        let classes = classNames('sd-list-item-group sd-list-item-group--space-between-items');
        return (
            <ul className={classes}>
                {this.props.items.map((item, index) => {
                    return <ContentListItem
                    key={index}
                    itemColum={item.itemColum}
                    locked={item.locked}
                    action={item.action}
                    loading={item.loading}
                    activated={item.activated}
                    selected={item.selected}
                    fetched={item.fetched}
                    onClick={item.onClick} />;
                })}
            </ul>
        );
    }
}

export {
    ContentList, ContentListItem
};
