import * as React from 'react';
import { MessageProp, IMessageOptions } from './ToastMessage';
type State = {
    top: Array<IMessageOptions>;
    bottom: Array<IMessageOptions>;
    'top-right': Array<IMessageOptions>;
    'top-left': Array<IMessageOptions>;
    'bottom-right': Array<IMessageOptions>;
    'bottom-left': Array<IMessageOptions>;
};
export default class ToastWrapper extends React.PureComponent<{}, State> {
    static idCounter: number;
    state: State;
    constructor(props: {});
    notify: (message: MessageProp, options: Partial<IMessageOptions>) => {
        id: string;
        position: import("./ToastMessage").Position;
    };
    createToastState: (message: MessageProp, options: Partial<IMessageOptions>) => {
        id: string;
        message: MessageProp;
        icon: string | undefined;
        position: import("./ToastMessage").Position;
        duration: number | null | undefined;
        type: import("./ToastMessage").NotesType | undefined;
        size: "fixed-s" | "fixed-m" | "fixed-l" | "fixed-xl" | undefined;
    };
    requestClose: (id: string, position: keyof State) => void;
    render(): JSX.Element[];
}
export {};
