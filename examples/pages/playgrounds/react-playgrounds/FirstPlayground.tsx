import * as React from 'react';
import * as Components from './components/Index';

interface IProps {
    children?: React.ReactNode;
}

export class FirstPlayground extends React.Component<IProps> {
    render() {
        return (
            <Components.Layout header='First playground'>
                {/* TOOLBAR HEADER */}
                <Components.ToolbarHeader />
                {/* FILTER PANEL*/}
                <Components.FilterPanel />
                {/* MAIN CONTENT (Monitoring) */}
                <Components.MainContent />
                {/* PREVIEW PANEL*/}
                <Components.PreviewPanel />
                {/* OVERLAY PANEL (Send To) */}
                <Components.OverlayPanel />
            </Components.Layout>
        );
    }
}
