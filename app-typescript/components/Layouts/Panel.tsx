import * as React from 'react';
import { Icon } from '../Icon';
import { IconButton } from '../IconButton';
import { Spinner, LoadingOverlay } from '../Spinner';
import classNames from 'classnames';

// ============= Panel ============ //

interface IPropsPanel {
    children?: React.ReactNode;
    side?: 'left' | 'right';
    theme?: 'light-ui' | 'dark-ui';
    className?: string;
    size?: 'xx-small' | 'x-small' | 'small' | 'medium' | 'large' | 'x-large' | 'xx-large'  | 'xxx-large'  | 'full';
    background?: 'transparent' | 'light' | 'grey'; // defaults to light (white)
    open?: boolean;
}

export default class Panel extends React.PureComponent<IPropsPanel> {
    render() {
        let classes = classNames('side-panel', {
            [`side-panel--${this.props.side}`] : this.props.side,
            [`side-panel--${this.props.background}`]:
                this.props.background !== 'light' && this.props.background !== undefined,
        }, this.props.className);
        let classes2 = classNames('side-panel__container', {
            [`side-panel__container--${this.props.side}`] : this.props.side,
            [`side-panel__container--${this.props.size}`] : this.props.size,
            [`panel-open`]: this.props.open,
        });
        return (
            <div className={classes2} data-theme={this.props.theme || ''}>
                <div className={classes}>
                    {this.props.children}
                </div>
            </div>
        );
    }
}

// ============= Panel Header ============ //

interface IPropsPanelHeader {
    color?: 'light' | 'darker' | 'blueGrey' | 'blueGreyDarker'; // defaults to 'light'
    zIndex?: number;
    title?: string;
    theme?: 'light-ui' | 'dark-ui'; // defaults to 'light
    className?: string;
    onClose?(): void;
}

class PanelHeader extends React.PureComponent<IPropsPanelHeader> {
    constructor(props: IPropsPanelHeader) {
        super(props);

        this.onClose = this.onClose.bind(this);
    }
    onClose() {
        this.props.onClose ?
            this.props.onClose() : null;
    }
    render() {
        const  darkColors = ['blueGrey', 'blueGreyDarker'];

        let classes = classNames('side-panel__header side-panel__header--border-b', {
            [`side-panel__header--${this.props.color}`]: this.props.color || this.props.color !== undefined,
        }, this.props.className);
        let style = {
            zIndex: 10 + (this.props.zIndex ? this.props.zIndex : 0),
        };
        let defaultTheme = darkColors.includes(this.props.color || '') ? 'dark-ui' : null;

        return (
            <div data-theme={this.props.theme || defaultTheme} className={classes} style={style}>
                {this.props.onClose ?
                    <a className="icn-btn side-panel__close" onClick={this.onClose}>
                        <Icon name='close-small' />
                    </a> : null}
                    {this.props.title ?
                      <h3 className="side-panel__heading">{this.props.title}</h3> : null}
                {this.props.children}
            </div>
        );
    }
}

// ============= Panel Content ============ //

interface IPropsPanelContent {
    loading?: boolean;
    empty?: boolean;
    emptyTemplate?: React.ReactNode;
}

class PanelContent extends React.PureComponent<IPropsPanelContent> {
    render() {
        return (
            <div className="side-panel__content">
                {this.props.loading ?
                    <LoadingOverlay>
                        <Spinner size="large" /> 
                    </LoadingOverlay>  : null
                }
                {this.props.empty ?
                    <LoadingOverlay>
                        {this.props.emptyTemplate} 
                    </LoadingOverlay>  : null
                }
                {this.props.children}
            </div>
        );
    }
}

// ============= Panel Content Block ============ //

interface IPropsContentBlock {
    children?: React.ReactNode;
    flex?: boolean;
    padding?: '0' | '1-5' | '3'; // Defaults to 2 (16 pixels) without specifiying a value.
    className?: string;
}

class PanelContentBlock extends React.PureComponent<IPropsContentBlock> {
    render() {
        let classes = classNames('side-panel__content-block', this.props.className, {
            'side-panel__content-block--flex': this.props.flex,
            [`side-panel__content-block--padding-${this.props.padding}`]: this.props.padding,
        });
        return (
            <div className={classes}>
                {this.props.children}
            </div>
        );
    }
}

// ============= Panel Footer ============ //

class PanelFooter extends React.PureComponent {
    render() {
        return (
            <div className="side-panel__footer side-panel__footer--button-box">
                {this.props.children}
            </div>
        );
    }
}

// ============= Sliding Header Toolbar ============ //

interface IPropsSlidingToolbar {
    right?: boolean;
}

class PanelHeaderSlidingToolbar extends React.PureComponent<IPropsSlidingToolbar> {
    render() {
        const classes = classNames(
            'subnav__sliding-toolbar',
            {
                'subnav__sliding-toolbar--right': this.props.right,
            },
        );

        return (
            <div className={classes}>
                {this.props.children}
            </div>
        );
    }
}

// ============= Panel Tools ============ //

export interface IPanelTools {
    icon: string;
    title: string;
    onClick(): void;
    ariaValue: string;
}

interface IPropsPanelTools {
    children?: React.ReactNode;
    tools: Array<IPanelTools>;
}

class PanelTools extends React.PureComponent<IPropsPanelTools> {
    render() {
        return (
            <div className="side-panel__tools">
                {this.props.tools.map((tool) => (
                    <IconButton
                        key={tool.title}
                        id={tool.title}
                        icon={tool.icon}
                        ariaValue={tool.ariaValue}
                        onClick={tool.onClick}
                    />
                ))}
            </div>
        );
    }
}

export {
    Panel, PanelHeader, PanelContent, PanelContentBlock, PanelFooter, PanelHeaderSlidingToolbar,
    PanelTools
};
