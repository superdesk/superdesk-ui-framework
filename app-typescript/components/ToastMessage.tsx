import * as React from 'react';
import ToastText from './ToastText';
import classNames from 'classnames';

export type MessageProp =
    | React.ReactNode
    | string;

export type Position = 'top' | 'bottom' | 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left';

export type NotesType = 'default' | 'primary' | 'success' | 'warning' | 'alert' | 'highlight' | 'light';

export interface IMessageOptions {
    message: MessageProp;
    id?: string;
    duration?: number | null;
    type?: NotesType;
    position?: Position;
    icon?: string;
}

interface IProps extends IMessageOptions {
    closeElement(id, position): void;
}

export const ToastMessage = ({
    id,
    message,
    type,
    icon,
    duration,
    position,
    closeElement,
}: IProps) => {
    const [show, setShow] = React.useState(true);
    const [enter, setEnter] = React.useState(false);
    let timer;
    React.useEffect(() => {
        if (typeof duration === "number") {
            timer = setTimeout(() => {
                setShow(false);
                close(id, position);
            }, duration);
            return () => clearTimeout(timer);
        }
    }, [enter]);

    function onMouseEnter() {
        clearInterval(timer);
    }

    function onMouseLeave() {
        setEnter(!enter);
    }

    function close(element: string, elementPosition: string) {
        setShow(false);
        setTimeout(() => {
            closeElement(element, elementPosition);
        }, 1000);
    }

    const classes = classNames('sd-toast', {
        [`sd-toast--${type}`]: type,
        ['show']: show,
    });

    return (
        <div
            className={classes}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
        >
            <ToastText id={id} title={message} icon={icon} onClose={() => close(id, position)} />
        </div>
    );
};
