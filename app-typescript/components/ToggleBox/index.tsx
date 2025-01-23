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
    toggleBoxRef?: React.RefObject<SimpleToggleBox>;
}

export interface IPropsCustomHeader {
    variant: 'custom-header'; // always visible
    header: React.ReactNode;
    children: React.ReactNode;
    getToggleButtonLabel: (isOpen: boolean) => string;
    initiallyOpen?: boolean;
    onToggle?(isOpen: boolean): void;
    toggleBoxRef?: React.RefObject<CustomHeaderToggleBox>;
}

type IProps = IPropsSimple | IPropsCustomHeader;

export class ToggleBox extends React.PureComponent<IProps> {
    render() {
        if (this.props.variant === "simple") {
            return (
                <SimpleToggleBox ref={this.props.toggleBoxRef} {...this.props} />
            );
        } else {
            return (
                <CustomHeaderToggleBox ref={this.props.toggleBoxRef} {...this.props} />
            );
        }
    }
}
