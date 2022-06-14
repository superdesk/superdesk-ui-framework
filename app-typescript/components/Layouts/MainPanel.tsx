import * as React from 'react';
import classNames from 'classnames';

export interface IMainPanelProps {
    children?: React.ReactNode;
    className?: string;
    padding?: 'small' | 'medium' | 'large' | 'none';
    onScroll?(event: React.UIEvent<HTMLDivElement>): void;
    id?: string;
}

export class MainPanel extends React.PureComponent<IMainPanelProps> {

    render() {
        let classes = classNames('sd-main-content-grid__content', {
            'sd-padding--2': !this.props.padding || this.props.padding === 'small',
            'sd-padding--3': this.props.padding === 'medium',
            'sd-padding--4': this.props.padding === 'large',
            'sd-padding--0': this.props.padding === 'none',
        }, this.props.className);
        return (
            <div className={classes}>
                {this.props.children}
            </div>
        );
    }
}
