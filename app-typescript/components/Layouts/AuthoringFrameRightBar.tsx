import * as React from 'react';

interface IProps {
    children?: React.ReactNode;
    closed?: boolean;
}

interface IState {
    children?: React.ReactNode;
    closed?: boolean;
}

export class AuthoringFrameRightBar extends React.PureComponent<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {
            closed: this.props.closed ? this.props.closed : false,
        };
    }
    componentDidUpdate(prevProps: Readonly<IProps>): void {
        if (prevProps.closed !== this.props.closed) {
            this.setState({
                closed: this.props.closed,
            });
        }
    }
    render() {
        return (
            !this.state.closed && <div className="sd-editor-grid__sidetabs-bar">
                {this.props.children}
            </div>
        );
    }
}
