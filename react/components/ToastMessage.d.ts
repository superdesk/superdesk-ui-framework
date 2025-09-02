import * as React from 'react';
export type MessageProp = React.ReactNode | string;
export type Position = 'top' | 'bottom' | 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left';
export type NotesType = 'default' | 'primary' | 'success' | 'warning' | 'alert' | 'highlight' | 'light';
export interface IMessageOptions {
    id: string;
    position: Position;
    message?: MessageProp;
    duration?: number | null;
    type?: NotesType;
    icon?: string;
    size?: 'fixed-s' | 'fixed-m' | 'fixed-l' | 'fixed-xl';
}
interface IProps extends IMessageOptions {
    closeElement(id: string, position: Position): void;
}
export declare const ToastMessage: ({ id, message, type, icon, size, duration, position, closeElement }: IProps) => JSX.Element;
export {};
