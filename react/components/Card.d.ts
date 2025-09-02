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
export declare class Card extends React.PureComponent<IProps> {
    render(): JSX.Element;
}
export {};
