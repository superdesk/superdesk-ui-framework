import * as React from 'react';
interface IProps {
    text: string;
    onClick(event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void;
    children?: React.ReactNode;
    disabled?: boolean;
}
export declare class IllustrationButton extends React.PureComponent<IProps> {
    render(): JSX.Element;
}
export {};
