import * as React from 'react';

interface IProps {
    children?: React.ReactNode;
}

export class FormText extends React.PureComponent<IProps> {
    render() {
        return (
            <div className="form__text-block">
                {this.props.children}
            </div>
        );
    }
}