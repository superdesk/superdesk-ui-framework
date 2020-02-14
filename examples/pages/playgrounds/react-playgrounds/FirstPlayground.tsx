import * as React from 'react';
import * as Components from './components/Index';

interface IProps {
    children?: React.ReactNode;
}

interface IState {
    open: boolean;
    openA: boolean;
    theme: string;
}

export class FirstPlayground extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {
            open: false,
            openA: false,
            theme: '',
        }
        this.handleClick = this.handleClick.bind(this);
        this.handleClickA = this.handleClickA.bind(this);
        this.sendTheme = this.sendTheme.bind(this);
    }

    handleClick(child: boolean) {
        this.setState({ open: child })
    }

    handleClickA(child: boolean) {
        this.setState({ openA: child })
    }

    sendTheme(child: string) {
        this.setState({ theme: child})
    }

    render() {
        return (
            <Components.Layout header='First playground' openA={this.state.openA} theme={this.state.theme}>
                {/* TOOLBAR HEADER */}
                <Components.ToolbarHeader />
                {/* FILTER PANEL*/}
                <Components.FilterPanel />
                {/* MAIN CONTENT (Monitoring) */}
                <Components.MainContent handleClick={this.handleClick} 
                                        handleClickA={this.handleClickA}
                                        sendTheme={this.sendTheme}>

                </Components.MainContent>
                {/* PREVIEW PANEL*/}
                <Components.PreviewPanel open={this.state.open} />
                {/* OVERLAY PANEL (Send To) */}
                <Components.OverlayPanel />
            </Components.Layout>
        );
    }
}
