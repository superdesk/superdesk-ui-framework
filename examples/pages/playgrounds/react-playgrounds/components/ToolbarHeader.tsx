import * as React from 'react';

interface IProps {
    children?: React.ReactNode;
}

export class ToolbarHeader extends React.Component<IProps> {
    render() {
        return (
            <div className='sd-main-content-grid__header'>
                {this.props.children}
            </div>
        );
    }
}
