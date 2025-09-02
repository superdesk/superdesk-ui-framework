import * as React from 'react';
interface IPropsOverlay {
    overlay: true;
    backgroundColor?: React.CSSProperties['backgroundColor'];
}
interface IPropsInline {
    overlay?: false;
    width?: React.CSSProperties['width'];
    height?: React.CSSProperties['height'];
    backgroundColor?: React.CSSProperties['backgroundColor'];
}
type IProps = IPropsOverlay | IPropsInline;
export declare class Loader extends React.Component<IProps> {
    render(): JSX.Element;
}
export {};
