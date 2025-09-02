import * as React from 'react';
import { IPropsBase } from './interfaces';
interface IProps extends IPropsBase {
    onClick?(): void;
}
export declare class AvatarContentAdd extends React.PureComponent<IProps> {
    render(): JSX.Element;
}
export {};
