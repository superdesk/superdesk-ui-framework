import * as React from 'react';
import {IPropsBase} from './interfaces';
interface IPropsNumberAvatar extends IPropsBase {
    number: string;
}
export declare class AvatarContentNumber extends React.PureComponent<IPropsNumberAvatar> {
    render(): JSX.Element;
}
export {};
