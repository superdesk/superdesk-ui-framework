import * as React from 'react';
import classNames from 'classnames';
import {Icon} from '../Icon';
import {HeaderPadding} from './AuthoringMain';

interface IProps {
    children?: React.ReactNode;
    collapsed?: boolean;
    headerPadding?: HeaderPadding;
    hideCollapseButton?: boolean;
}

interface IState {
    collapsed: boolean;
}

export class AuthoringInnerHeader extends React.PureComponent<IProps, IState> {
    constructor(props: IProps) {
        super(props);

        this.state = {
            collapsed: this.props.collapsed ? this.props.collapsed : false,
        };
    }

    render() {
        const hideCollapseButton = this.props.hideCollapseButton ?? false;

        const classes = classNames('sd-editor-content__authoring-header', {
            'authoring-header--collapsed': this.state.collapsed,
            'sd-editor-content__authoring-header--collapsible': !hideCollapseButton,
        });
        const {headerPadding} = this.props;

        return (
            <header
                style={{
                    paddingBlockStart: headerPadding?.top,
                    paddingBlockEnd: headerPadding?.bottom,
                    paddingInlineStart: headerPadding?.inlineStart,
                    paddingInlineEnd: headerPadding?.inlineEnd,
                }}
                className={classes}
            >
                <div className="authoring-header__holder">{this.props.children}</div>
                {!hideCollapseButton && (
                    <button
                        className="authoring-header__toggle"
                        onClick={() => this.setState({collapsed: !this.state.collapsed})}
                    >
                        <Icon name="chevron-up-thin" />
                    </button>
                )}
            </header>
        );
    }
}
