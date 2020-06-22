import * as React from 'react';

interface IProps {
    children?: React.ReactNode;
}

export class MainPanel extends React.PureComponent<IProps> {
    render() { 
        return (
            <div className='sd-main-content-grid__content sd-padding--2'>
                {this.props.children}
            </div>
        );
    }
}
