import React from 'react';

interface IProps {
    message: string;
}

export class HelloWorld extends React.Component<IProps> {
    render() {
        return (
            <div>
                <span>{this.props.message}</span>
                <span>{this.props.there_is_no_such_property_and_build_should_fail}</span>
            </div>
        );
    }
}
