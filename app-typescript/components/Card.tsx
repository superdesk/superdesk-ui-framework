import * as React from 'react';

interface IProps extends Pick<React.CSSProperties, 'paddingBlock'> {
    children: React.ReactNode;
    paddingBase: '0' | '1' | '2' | '3' | '4';
    paddingBlock?: React.CSSProperties['paddingBlock'];
    paddingBlockStart?: React.CSSProperties['paddingBlockStart'];
    paddingBlockEnd?: React.CSSProperties['paddingBlockEnd'];
    paddingInline?: React.CSSProperties['paddingInline'];
    paddingInlineStart?: React.CSSProperties['paddingInlineStart'];
    paddingInlineEnd?: React.CSSProperties['paddingInlineEnd'];
    style?: React.CSSProperties;
    'data-test-id'?: string;
}

export class Card extends React.PureComponent<IProps> {
    render() {
        const style: React.CSSProperties = {
            width: '100%',
            background: 'var(--sd-item__main-Bg)',
            borderRadius: 'var(--b-radius--medium)',
            boxShadow: 'var(--sd-shadow--z2)',
        };

        if (this.props.paddingBase != null) {
            style.padding = `calc( ${this.props.paddingBase} * var(--base-increment))`;
        }

        if (this.props.paddingBlock != null) {
            style.paddingBlock = this.props.paddingBlock;
        }

        if (this.props.paddingBlockStart != null) {
            style.paddingBlockStart = this.props.paddingBlockStart;
        }

        if (this.props.paddingBlockEnd != null) {
            style.paddingBlockEnd = this.props.paddingBlockEnd;
        }

        if (this.props.paddingInline != null) {
            style.paddingInline = this.props.paddingInline;
        }

        if (this.props.paddingInlineStart != null) {
            style.paddingInlineStart = this.props.paddingInlineStart;
        }

        if (this.props.paddingInlineEnd != null) {
            style.paddingInlineEnd = this.props.paddingInlineEnd;
        }

        return (
            <div style={{...style, ...this.props.style}} data-test-id={this.props['data-test-id']}>
                {this.props.children}
            </div>
        );
    }
}
