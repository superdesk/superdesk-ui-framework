import * as React from 'react';
import { Dialog as PrimeDialog } from '@superdesk/primereact/dialog';
import classNames from 'classnames';

interface IProps {
    id?: string;
    className?: string;
    theme?: string;
    visible?: boolean;
    contentBg?: 'default' | 'medium' | 'dark';
    contentPadding?: 'none' | 'small' | 'medium' | 'large';
    size?: 'small' | 'medium' | 'large' | 'x-large';
    maximized?: boolean;
    headerTemplate?: JSX.Element | string;
    footerTemplate?: JSX.Element | string;
    closeOnEscape?: boolean;
    zIndex?: number;
    onShow?(): void;
    onHide(): void;
}

export class Modal extends React.Component<IProps, {}> {
    render() {
        let classes = classNames({
            [`p-dialog-content--${this.props.size}`]: this.props.size,
            'p-dialog-content--default': this.props.contentBg === undefined,
            [`p-dialog-content--${this.props.contentBg}`]: this.props.contentBg,
            'p-dialog-content--s-padding': this.props.contentPadding === undefined,
            [`p-dialog-content--${this.props.contentPadding}`]: this.props.contentPadding,
        }, this.props.className);
        return (
            <div style={{display: 'content'}}
                data-theme={this.props.theme !== 'dark' ? null : 'dark-ui' }>
                <PrimeDialog
                    id={this.props.id}
                    visible={this.props.visible}
                    header={this.props.headerTemplate}
                    footer={this.props.footerTemplate}
                    closeOnEscape={this.props.closeOnEscape}
                    maximized={this.props.maximized}
                    contentClassName={classes}
                    onShow={this.props.onShow}
                    onHide={this.props.onHide}
                    zIndex={this.props.zIndex}
                >
                    {this.props.children}
                </PrimeDialog>
            </div>
        );
    }
}
