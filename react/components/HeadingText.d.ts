import * as React from 'react';
interface IProps {
    heading: string;
    text: string;
    timestamp?: Date;
}
export declare class HeadingText extends React.PureComponent<IProps> {
    render(): JSX.Element;
}
export {};
