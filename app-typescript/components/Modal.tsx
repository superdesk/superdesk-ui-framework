import React from 'react';
import { Dialog as PrimeDialog } from '@superdesk/primereact/dialog';

interface IProps {
    id?: string;
    className?: string;
    theme?: string;
    visible?: boolean;
    headerTemplate?: JSX.Element | string;
    footerTemplate?: JSX.Element;
    closeOnEscape?: boolean;
    onShow?(): void;
    onHide(): void;
}

export class Modal extends React.Component<IProps, {}> {
    render() {
        return <div style={{display: 'content'}}
            data-theme={this.props.theme !== 'dark' ? '' : 'dark-ui' }
            className={this.props.className}>
            <PrimeDialog
                id={this.props.id}
                visible={this.props.visible}
                header={this.props.headerTemplate}
                footer={this.props.footerTemplate}
                closeOnEscape={this.props.closeOnEscape}
                onShow={this.props.onShow}
                onHide={this.props.onHide}>
                {this.props.children}
            </PrimeDialog>
        </div>;
    }
}
