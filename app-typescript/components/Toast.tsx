import * as React from 'react';
import * as ReactDOM from "react-dom";
import { MessageProp, IMessageOptions } from './ToastMessage';
import ToastWrapper from './ToastWrapper';

const TOAST_ID = "react-toast";

class Toasted {
    componentRef: ToastWrapper | null;
    constructor() {
        this.componentRef = null;
        let element = null;
        const existingElement = document.getElementById(TOAST_ID);

        if (existingElement) {
            element = existingElement;
        } else {
            const el = document.createElement("div");
            el.id = TOAST_ID;
            el.className = "sd-toast__container sd-toast__container--top ng-scope";
            document.body.appendChild(el);
            element = el;
        }
        ReactDOM.render(
            <ToastWrapper ref={(ref) => {
                this.componentRef = ref;
            }} />, element);
    }

    notify(message: MessageProp, options: IMessageOptions) {
        if (this.componentRef != null) {
            this.componentRef.notify(message, options);
        }
    }
}

const toast = new Toasted();

export default toast;
