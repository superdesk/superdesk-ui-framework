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
}

export class Card extends React.PureComponent<IProps> {
    render() {
        return (
            <div
                style={{
                    width: '100%',
                    background: 'var(--sd-item__main-Bg)',
                    borderRadius: 'var(--b-radius--medium)',
                    padding: `calc( ${this.props.paddingBase} * var(--base-increment))`,
                    boxShadow: 'var(--sd-shadow--z2)',
                    paddingBlock: this.props.paddingBlock,
                    paddingBlockStart: this.props.paddingBlockStart,
                    paddingBlockEnd: this.props.paddingBlockEnd,
                    paddingInline: this.props.paddingInline,
                    paddingInlineStart: this.props.paddingInlineStart,
                    paddingInlineEnd: this.props.paddingInlineEnd,
                }}
            >
                {this.props.children}
            </div>
        );
    }
}
