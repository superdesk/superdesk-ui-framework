import * as React from 'react';
import { Icon, IconButton } from '../../../../../app-typescript/index';

interface IProps {
    children?: React.ReactNode;
    title?: string;
    handlePanelParent(): void;
}

export class PanelHeader extends React.PureComponent<IProps> {
    constructor(props: IProps) {
        super(props);
        this.handlePanel=this.handlePanel.bind(this);
    }

    handlePanel() {
        this.props.handlePanelParent();
    }
    render() {
        return (
            <div className="side-panel__header side-panel__header--border-b">
                <a aria-abel='Close' className="icn-btn side-panel__close" onClick={this.handlePanel}>
                    <Icon name='close-small' />
                </a>
                <h3 className="side-panel__heading">{this.props.title}</h3>
                {this.props.children}
            </div>
        );
    }
}
