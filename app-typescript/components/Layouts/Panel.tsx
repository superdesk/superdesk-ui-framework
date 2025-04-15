import * as React from 'react';
import { IconButton } from '../IconButton';
import { Spinner, LoadingOverlay } from '../Spinner';
import classNames from 'classnames';
import {ButtonGroup} from '../ButtonGroup';
import {getNextZIndex} from '../../zIndex';

// ============= Panel ============ //

interface IPropsPanel {
    children?: React.ReactNode;
    side?: 'left' | 'right';
    theme?: 'light' | 'dark';
    className?: string;
    size?:
        'xx-small'
        | 'x-small'
        | 'small'
        | 'medium'
        | 'large'
        | 'x-large'
        | 'xx-large'
        | 'xxx-large'
        | 'full'
        | 'auto'
        | {custom: React.CSSProperties['width']};
    background?: 'transparent' | 'light' | 'grey'; // defaults to light (white)
    open?: boolean;
    ['data-test-id']?: string;
}

export default class Panel extends React.PureComponent<IPropsPanel> {
    render() {
        let classes = classNames('side-panel', {
            [`side-panel--${this.props.side}`]: this.props.side,
            [`side-panel--${this.props.background}`]:
                this.props.background !== 'light' && this.props.background !== undefined,
        }, this.props.className);

        const classes2Obj: {[className: string]: boolean} = {
            [`side-panel__container--${this.props.side}`]: this.props.side !== null,
            [`panel-open`]: this.props.open === true,
        };

        const style: React.CSSProperties = {};

        if (typeof this.props.size === 'string') {
            classes2Obj[`side-panel__container--${this.props.size}`] = true;
        } else if (this.props.size != null) {
            style.width = this.props.size.custom;
        }

        let classes2 = classNames('side-panel__container', classes2Obj);

        return (
            <div
                className={classes2}
                style={style}
                data-theme={this.props.theme ? `${this.props.theme}-ui` : null}
                data-test-id={this.props['data-test-id']}

            >
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
    title?: string;
    theme?: 'light-ui' | 'dark-ui'; // defaults to 'light
    className?: string;
    onClose?(): void;
    iconButtons?: Array<React.ReactNode>;
}

class PanelHeader extends React.PureComponent<IPropsPanelHeader> {
    private zIndex: number = getNextZIndex();
    constructor(props: IPropsPanelHeader) {
        super(props);
    }

    render() {
        const darkColors = ['blueGrey', 'blueGreyDarker'];

        let classes = classNames('side-panel__header side-panel__header--border-b', {
            [`side-panel__header--${this.props.color}`]: this.props.color || this.props.color !== undefined,
            'side-panel__header--has-close': this.props.onClose,
        }, this.props.className);

        let style = {
            zIndex: this.zIndex,
        };

        let defaultTheme = darkColors.includes(this.props.color || '') ? 'dark-ui' : null;

        return (
            <div data-theme={this.props.theme || defaultTheme} className={classes} style={style}>
                <div className='side-panel__header-wrapper'>
                    {this.props.title != null
                        && <div className="side-panel__header-inner">
                            <h3 className="side-panel__heading">{this.props.title}</h3>
                        </div>
                    }

                    {(this.props.onClose == null && this.props.iconButtons == null)
                        || (
                            <ButtonGroup
                                align='end'
                                spaces='no-space'
                                className='side-panel__btn-group'
                            >
                                {this.props.iconButtons != null
                                    && this.props.iconButtons
                                }
                                {this.props.onClose != null
                                    && (
                                        <IconButton
                                            icon='close-small'
                                            ariaValue='Close'
                                            onClick={this.props.onClose}
                                        />
                                    )
                                }
                            </ButtonGroup>
                        )
                    }
                </div>
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
                {this.props.loading
                    && <LoadingOverlay>
                        <Spinner size="large" />
                    </LoadingOverlay>
                }
                {this.props.empty
                    && <LoadingOverlay>
                        {this.props.emptyTemplate}
                    </LoadingOverlay>
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
    open?: boolean;
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
    Panel,
    PanelHeader,
    PanelContent,
    PanelContentBlock,
    PanelFooter,
    PanelHeaderSlidingToolbar,
    PanelTools,
};
