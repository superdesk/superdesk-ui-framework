import * as React from 'react';
interface IProps {
    children?: React.ReactNode;
    open?: boolean;
}

export class LeftPanel extends React.PureComponent<IProps> {
    render() {
        return (
            <div className={'sd-main-content-grid__filter' + (this.props.open ? ' open-filters' : '')}>
                {this.props.children}
            </div>
        );
    }
}
