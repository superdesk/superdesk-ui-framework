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
    const intervalShow = React.useRef();
    React.useEffect(() => {
        TestTimeout(id, duration);
    });

    function TestTimeout(element: string, timeout: number | null) {
        let timer;
        let timerShow;
        if (typeof timeout === "number") {
            timerShow = setTimeout(() => {
                setShow(false);
            }, timeout - 1000);
            intervalShow.current = timerShow;

            timer = setTimeout(() => {
                close(element, position);
            }, timeout);
            intervalRef.current = timer;
            return () => intervalRef.current;
        }
    }

    function onMouseEnter() {
        clearInterval(intervalRef.current);
        clearInterval(intervalShow.current);
    }

    function onMouseLeave() {
        TestTimeout(id, duration);
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
