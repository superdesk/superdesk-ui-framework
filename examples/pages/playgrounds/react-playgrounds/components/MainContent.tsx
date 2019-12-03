import * as React from 'react';

interface IProps {
    children?: React.ReactNode;
    handleClick(child): void;
    handleClickA(child): void;
}

interface IState {
    open: boolean;
    openA: boolean;
}

export class MainContent extends React.PureComponent<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {
            open: false,
            openA: false,
        };
        this.handleClick = this.handleClick.bind(this);
        this.handleClickA = this.handleClickA.bind(this);
    }

    handleClick() {
        this.setState((state) => ({
            open: !state.open,
        }));
        this.props.handleClick(this.state.open);
    }

    handleClickA() {
        this.setState((state) => ({
            openA: !state.openA,
        }));
        this.props.handleClickA(this.state.openA);
    }

    render() {
        return (
            <div className='sd-main-content-grid__content sd-padding--2'>
                <button onClick={this.handleClick}>Test preview</button>
                <button onClick={this.handleClickA}>Test authoring</button>
                {this.props.children}
            </div>
        );
    }
}
