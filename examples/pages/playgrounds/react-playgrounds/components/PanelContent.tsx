import * as React from 'react';

interface IProps {
    children?: React.ReactNode;
}

export class PanelContent extends React.PureComponent<IProps> {
    render() {
        return (
            <div className="side-panel__content">
                <div className="side-panel__content-block" >
                    {this.props.children}
                </div>
            </div>
        );
    }
}
