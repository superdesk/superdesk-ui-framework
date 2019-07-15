import * as React from 'react';

interface IProps {
    message: string;
}

export class HelloWorld extends React.Component<IProps> {
    render() {
        return (
            <div>
                <span>{this.props.message}</span>
            </div>
        );
    }
}
