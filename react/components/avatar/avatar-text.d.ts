import * as React from 'react';
import {IPropsBase} from './interfaces';
interface IPropsTextAvatar extends IPropsBase {
    text: string;
}
export declare class AvatarContentText extends React.PureComponent<IPropsTextAvatar> {
    render(): JSX.Element;
}
export {};
