import * as React from 'react';
import {SimpleToggleBox} from './SimpleToggleBox';
import {CustomHeaderToggleBox} from './CustomHeaderToggleBox';

export interface IPropsWithLabel {
    variant: 'simple';
    title: string;
    badge?: JSX.Element;
    children: React.ReactNode;
    hideUsingCSS?: boolean;
    initiallyOpen?: boolean; // defaults to false
    className?: string;
    margin?: 'none' | 'small' | 'normal' | 'large';
    onOpen?(): void;
    onClose?(): void;
}

export interface IPropsWithoutLabel {
    variant: 'custom-header';
    // always visible
    header: React.ReactNode;
    children: React.ReactNode;
    toggleButton: string;
    initiallyOpen?: boolean;
    onToggle?(isOpen: boolean): void;
}

type IProps = IPropsWithLabel | IPropsWithoutLabel;

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
