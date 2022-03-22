import React from 'react';
import { Dialog as PrimeDialog } from '@superdesk/primereact/dialog';

interface IProps {
    id?: string;
    className?: string;
    theme?: string;
    visible?: boolean;
    size?: 'small' | 'medium' | 'large' | 'x-large';
    maximized?: boolean;
    headerTemplate?: JSX.Element | string;
    footerTemplate?: JSX.Element | string;
    closeOnEscape?: boolean;
    onShow?(): void;
    onHide(): void;
}

export class Modal extends React.Component<IProps, {}> {
    render() {
        return <div style={{display: 'content'}}
            data-theme={this.props.theme !== 'dark' ? null : 'dark-ui' }
            className={this.props.className}>
            <PrimeDialog
                id={this.props.id}
                visible={this.props.visible}
                header={this.props.headerTemplate}
                footer={this.props.footerTemplate}
                closeOnEscape={this.props.closeOnEscape}
                maximized={this.props.maximized}
                contentClassName={this.props.size ?
                    ('p-dialog-content--' + this.props.size) : undefined}
                onShow={this.props.onShow}
                onHide={this.props.onHide}>
                {this.props.children}
            </PrimeDialog>
        </div>;
    }
}
