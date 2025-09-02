import * as React from 'react';
interface IProps {
    text: string;
    innerLabel?: string;
    type?: 'default' | 'primary' | 'success' | 'warning' | 'alert' | 'highlight' | 'sd-green';
    size?: 'default' | 'large' | 'small';
    icon?: string;
    style?: 'basic' | 'translucent';
}
export declare class IconLabel extends React.PureComponent<IProps> {
    render(): JSX.Element;
}
export {};
