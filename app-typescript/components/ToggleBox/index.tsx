import * as React from 'react';
import {SimpleToggleBox} from './SimpleToggleBox';
import {CustomHeaderToggleBox} from './CustomHeaderToggleBox';

export interface IPropsSimple {
    variant: 'simple';
    title: string;
    badge?: JSX.Element;
    children: React.ReactNode;
    circledChevron?: boolean;
    initiallyOpen?: boolean; // defaults to false
    largeTitle?: boolean;

    className?: string;
    margin?: 'none' | 'small' | 'normal' | 'large';
    onOpen?(): void;
    onClose?(): void;
}

export interface IPropsCustomHeader {
    variant: 'custom-header'; // always visible
    header: React.ReactNode;
    children: React.ReactNode;
    toggleButtonLabel: string;
    initiallyOpen?: boolean;
    onToggle?(isOpen: boolean): void;
}

type IProps = IPropsSimple | IPropsCustomHeader;

export class ToggleBox extends React.PureComponent<IProps> {
    render() {
        if (this.props.variant === "simple") {
            return (
                <SimpleToggleBox {...this.props} />
            );
        } else {
            return (
                <CustomHeaderToggleBox {...this.props} />
            );
        }
    }
}
