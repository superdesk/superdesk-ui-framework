import * as React from 'react';
import { Icon } from '../../../../../app-typescript/index';

interface IProps {
    children?: React.ReactNode;
    title?: string;
    handleFilterParent(): void;
}

export class PanelHeader extends React.PureComponent<IProps> {
    constructor(props: IProps) {
        super(props);

        this.handleFilter=this.handleFilter.bind(this);
    }

    handleFilter() {
        this.props.handleFilterParent();
    }
    render() {
        return (
            <div className="side-panel__header side-panel__header--border-b">
                <a className="icn-btn side-panel__close" onClick={this.handleFilter}>
                    <Icon name='close-small' />
                </a>
                <h3 className="side-panel__heading">{this.props.title}</h3>
                {this.props.children}
            </div>
        );
    }
}
