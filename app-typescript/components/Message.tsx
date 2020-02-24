import * as React from 'react';
import Text from './Text';
import classNames from 'classnames';

export type MessageProp =
    | React.ReactNode
    | string;

export type Position = 'top' | 'bottom' | 'right' | 'left';

export type  NotesType = 'default' | 'primary' | 'success' | 'warning' | 'alert' | 'highlight' | 'light';

export interface IMessageOptions {
    id: string;
    avatar?: string;
    duration?: number | null;
    type?: NotesType;
    position: Position;
    icon?: string;
}

interface IProps extends IMessageOptions {
    message: MessageProp;
    position: Position;
    closeElement(id, position): void;
}

export const Message = ({
    id,
    message,
    type,
    icon,
    avatar,
    duration,
    position,
    closeElement,
}: IProps) => {
    const container = React.useRef<HTMLDivElement | null>(null);
    const [durationTime, setDurationTime] = React.useState(duration);
    const intervalRef = React.useRef();

    React.useEffect(() => {
        TestTimeout(id, durationTime);
    }, [durationTime]);

    function TestTimeout(element: string, timeout: number | null) {
        let timer;
        if (typeof timeout === "number" && timeout !== null) {
            timer = setTimeout(() => {
                close(element, position);
            }, timeout);
            intervalRef.current = timer;
            return () => intervalRef.current;
        }
    }

    function onMouseEnter() {
        clearInterval(intervalRef.current);
    }

    function onMouseLeave() {
        TestTimeout(id, durationTime);
    }

    function close(element: string, elementPosition: string) {
        closeElement(element, elementPosition);
    }

    function showMessage() {
        if (typeof message === "string" || React.isValidElement(message)) {
            return <Text id={id} title={message} icon={icon} avatar={avatar} onClose={() => close(id, position)} />;
        }
        return null;
    }

    const classes = classNames('sd-toast', {
        [`sd-toast--${type}`]: type,
    });

    return (
        <div
            ref={container}
            className={classes}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
        >
            {showMessage()}
        </div>

    );
};
