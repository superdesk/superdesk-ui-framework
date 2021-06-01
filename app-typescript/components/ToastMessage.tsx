import * as React from 'react';
import ToastText from './ToastText';
import classNames from 'classnames';

export type MessageProp =
    | React.ReactNode
    | string;

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

export const ToastMessage = ({
    id,
    message,
    type,
    icon,
    size,
    duration,
    position,
    closeElement,
}: IProps) => {
    const [show, setShow] = React.useState(false);
    const [enter, setEnter] = React.useState(false);
    let timer: number;
    React.useEffect(() => setShow(true), []);

    if (typeof duration === "number") {
        React.useEffect(() => {
            timer = window.setTimeout(() => {
                close(id, position);
            }, duration);
            return () => clearTimeout(timer);
        }, [enter]);
    }

    function onMouseEnter() {
        clearTimeout(timer);
    }

    function onMouseLeave() {
        setEnter(false);
    }

    function close(element: string, elementPosition: Position) {
        setShow(false);
        setTimeout(() => {
            closeElement(element, elementPosition);
        }, 100);
    }
    const classes = classNames('sd-toast', {
        [`sd-toast--${type}`]: type,
        [`sd-toast--${size}`]: size,
        ['sd-toast--enter']: !show && !enter,
        ['sd-toast--enter-active']: show,
        ['sd-toast--exit']: enter && !show,
        ['sd-toast--exit-active']: !show,
    });

    return (
        <div
            className={classes}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            aria-live="assertive"
            aria-atomic="true"
        >
            <ToastText id={id} title={message} icon={icon} onClose={() => close(id, position)} />
        </div>
    );
};
