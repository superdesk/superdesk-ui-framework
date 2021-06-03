import * as React from 'react';
import * as ReactDOM from "react-dom";
import {MessageProp, IMessageOptions, Position} from './ToastMessage';
import ToastWrapper from './ToastWrapper';

const TOAST_ID = "react-toast";

interface IMessageId {
    id: string;
    position: Position;
}

class Toasted {
    componentRef: ToastWrapper | null;

    constructor() {
        this.componentRef = null;
    }

    setup() {
        if (this.componentRef != null) {
            return;
        }

        let element = null;
        const existingElement = document.getElementById(TOAST_ID);

        if (existingElement) {
            element = existingElement;
        } else {
            const el = document.createElement("div");
            el.id = TOAST_ID;
            el.className = "sd-toast__container sd-toast__container--top";
            document.body.appendChild(el);
            element = el;
        }

        ReactDOM.render(
            <ToastWrapper ref={(ref) => {
                this.componentRef = ref;
            }} />, element);
    }

    notify(message: MessageProp, options: Partial<IMessageOptions>): IMessageId | null {
        this.setup();

        if (this.componentRef != null) {
            return this.componentRef.notify(message, options);
        }

        return null;
    }

    close(messageId: IMessageId) {
        if (this.componentRef != null) {
            this.componentRef.requestClose(messageId.id, messageId.position);
        }
    }
}

export const toasted = new Toasted();
