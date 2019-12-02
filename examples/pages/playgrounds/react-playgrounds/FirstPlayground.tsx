import * as React from 'react';
import * as Components from './components/Index';

interface IProps {
    children?: React.ReactNode;
}

interface IState {
    open: boolean;
    openA: boolean;
}

export class FirstPlayground extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {
            open: false,
            openA: false,
        }
        this.handleClick = this.handleClick.bind(this);
        this.handleClickA = this.handleClickA.bind(this);
    }

    handleClick(child: boolean) {
        this.setState({ open: child })
    }

    handleClickA(child: boolean) {
        this.setState({ openA: child })
    }

    render() {
        return (
            <Components.Layout header='First playground' openA={this.state.openA}>
                {/* TOOLBAR HEADER */}
                <Components.ToolbarHeader />
                {/* FILTER PANEL*/}
                <Components.FilterPanel />
                {/* MAIN CONTENT (Monitoring) */}
                <Components.MainContent handleClick={this.handleClick} handleClickA={this.handleClickA} />
                {/* PREVIEW PANEL*/}
                <Components.PreviewPanel open={this.state.open} />
                {/* OVERLAY PANEL (Send To) */}
                <Components.OverlayPanel />
            </Components.Layout>
        );
    }
}
