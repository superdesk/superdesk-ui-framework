import * as React from 'react';

interface IProps {
    children?: React.ReactNode;
}

export class CoreLayoutFooter extends React.PureComponent<IProps> {
    render() {
        return (
            <footer className='sd-bottom-bar'>
                {this.props.children}
            </footer>
        );
    }
}
