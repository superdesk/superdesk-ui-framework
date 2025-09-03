import * as React from 'react';
import {IPropsBase} from './interfaces';
interface IPropsImageAvatar extends IPropsBase {
    imageUrl?: string | null;
    onClick?(): void;
}
export declare class AvatarContentImage extends React.PureComponent<IPropsImageAvatar> {
    render(): JSX.Element;
}
export {};
