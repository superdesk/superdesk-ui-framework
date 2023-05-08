import * as React from 'react';

interface IPropsRotate {
    children: React.ReactNode;
    degrees: number;
}

export class Rotate extends React.PureComponent<IPropsRotate> {
    render() {
        return (
            <div
                style={{
                    transform: `rotate(${this.props.degrees}deg)`,
                }}
            >
                {this.props.children}
            </div>
        );
    }
}
