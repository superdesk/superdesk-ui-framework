import * as React from 'react';

interface IProps {
    children?: React.ReactNode;
}

export class CoreLayoutOverlay extends React.PureComponent<IProps> {
    render() {
        return (
            <footer className='sd-notifications-slot'>
                {this.props.children}
            </footer>
        );
    }
}