import * as React from 'react';

interface IProps {
    children?: React.ReactNode;
}

export class MainContent extends React.Component<IProps> {
    render() {
        return (
            <div className='sd-main-content-grid__content sd-padding--2'>
                {this.props.children}
            </div>
        );
    }
}
