import * as React from 'react';
import ToastText from './ToastText';
import classNames from 'classnames';

export type MessageProp =
    | React.ReactNode
    | string;

export type Position = 'top' | 'bottom' | 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left';

export type NotesType = 'default' | 'primary' | 'success' | 'warning' | 'alert' | 'highlight' | 'light';

export interface IMessageOptions {
    id?: string;
    duration?: number | null;
    type?: NotesType;
    position?: Position;
    icon?: string;
    show?: boolean;
}

interface IProps extends IMessageOptions {
    message: MessageProp;
    closeElement(id, position): void;
}

interface IState {
    show: boolean;
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
    const intervalRef = React.useRef();
    let timer;
    React.useEffect(() => {
        Timeout(id, duration);
    });

    function Timeout(element: string, timeout: number | null) {
        if (typeof timeout === "number") {
            timer = setTimeout(() => {
                setShow(false);
                setTimeout(() => {
                    close(element, position);
                }, 1000);
            }, timeout);
            intervalRef.current = timer;
            return () => clearTimeout(timer);
        }
    }

    function onMouseEnter() {
        clearInterval(intervalRef.current);
    }

    function onMouseLeave() {
        Timeout(id, duration);
    }

    function close(element: string, elementPosition: string) {
        closeElement(element, elementPosition);
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
