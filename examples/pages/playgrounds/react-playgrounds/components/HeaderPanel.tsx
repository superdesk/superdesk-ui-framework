import * as React from 'react';

interface IProps {
    children?: React.ReactNode;
}

export class HeaderPanel extends React.PureComponent<IProps> {
    render() {
        return (
            <div className="side-panel__header side-panel__header--border-b">
                {this.props.children}
            </div>
        );
    }
}
