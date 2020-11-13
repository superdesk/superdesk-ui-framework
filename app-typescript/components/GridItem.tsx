import * as React from 'react';
import classNames from 'classnames';

class GridItemMedia extends React.PureComponent {
    render() {
        return (
            <div className='sd-grid-item__media'>
                {this.props.children}
            </div>
        );
    }
}

class GridItemContent extends React.PureComponent {
    render() {
        return (
            <div className='sd-grid-item__content'>
                {this.props.children}
            </div>
        );
    }
}

class GridItemContentBlock extends React.PureComponent {
    render() {
        return (
            <div className='sd-grid-item__content-block'>
                {this.props.children}
            </div>
        );
    }
}

class GridItemFooter extends React.PureComponent {
    render() {
        return (
            <div className='sd-grid-item__footer'>
                {this.props.children}
            </div>
        );
    }
}

interface IPropsFooterBlock {
    align?: 'left' | 'right';
}

class GridItemFooterBlock extends React.PureComponent<IPropsFooterBlock> {
    static defaultProps = {
        align: 'left'
    };
    render() {
        let classes = classNames('sd-grid-item__footer-block', {
            [`sd-grid-item__footer-block--${this.props.align}`]: this.props.align,
        });
        return (
            <div className={classes}>
                {this.props.children}
            </div>
        );
    }
}

interface IPropsFooterActions {
    autohide?: boolean;
}

class GridItemFooterActions extends React.PureComponent<IPropsFooterActions> {
    static defaultProps = {
        autohide: true
    };
    render() {
        let classes = classNames('sd-grid-item__footer-actions', {
            'sd-grid-item__footer-actions--visible': this.props.autohide === false,
        });
        return (
            <div className={classes}>
                {this.props.children}
            </div>
        );
    }
}

interface IPropsTime {
    time: string;
}

class GridItemTime extends React.PureComponent<IPropsTime> {
    render() {
        return (
            <time title={this.props.time}>
                {this.props.time}
            </time>
        );
    }
}

class GridItemTitle extends React.PureComponent {
    render() {
        return (
            <h4 className='sd-grid-item__title'>
                {this.props.children}
            </h4>
        );
    }
}

class GridItemSlug extends React.PureComponent {
    render() {
        return (
            <span className='sd-grid-item__slugline'>
                {this.props.children}
            </span>
        );
    }
}

class GridItemText extends React.PureComponent {
    render() {
        return (
            <p className='sd-grid-item--element-grow'>
                {this.props.children}
            </p>
        );
    }
}

class GridItemTopActions extends React.PureComponent {
    render() {
        return (
            <div className='sd-grid-item__top-actions'>
                {this.props.children}
            </div>
        );
    }
}
class GridItemCheckWrapper extends React.PureComponent {
    render() {
        return (
            <span className='sd-grid-item__checkbox'>
                {this.props.children}
            </span>
        );
    }
}

interface IProps {
    locked?: boolean;
    fetched?: boolean;
    onClick?(): void;
    itemtype?: 'audio' | 'composite' | 'file' | 'graphic' | 'photo' | 'slideshow' | 'text' | 'video' | string;
    status?: Array<'actioning' | 'selected' | 'activated' | string>;
}

export default class GridItem extends React.PureComponent<IProps> {
    static defaultProps = {
        locked: false,
        fetched: false,
        itemtype: 'file',
        status: []
    };

    render() {
        let classes = classNames('sd-grid-item', [
            `sd-grid-item__type--${this.props.itemtype}`, {
                'locked': this.props.locked,
                'sd-grid-item--with-click' : this.props.onClick,
                'fetched': this.props.fetched
            }], this.props.status);

        return (
            <div className={classes} onClick={this.props.onClick}>
                {this.props.children}
                <div className='sd-grid-item__state-border'></div>
            </div>
        );
    }
}

export { GridItem, GridItemContent, GridItemMedia, GridItemFooter, GridItemContentBlock, GridItemTime, GridItemTitle, GridItemText, GridItemSlug, GridItemFooterBlock, GridItemFooterActions, GridItemTopActions, GridItemCheckWrapper };
