import * as React from 'react';

interface IProps {
    children?: React.ReactNode;
    id?: string;
}

export class CoreLayoutMain extends React.PureComponent<IProps> {
    render() {
        return (
            <section id={this.props.id} className='sd-content sd-content-wrapper'>
                {this.props.children}
            </section>
        );
    }
}