import * as React from 'react';
import * as ReactDOM from "react-dom";
import Text from './Text';
import { IMessageOptions } from './Message';
import Wrapper from './Wrapper';

const TOAST_ID = "react-toast";

class Toasted {
    createToast?(message: string | React.ReactNode, options: IMessageOptions): void;

    constructor() {
        let element;
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
            <Wrapper notify={this.bind as any} />, element);
    }

    bind = (fn: () => void) => {
        this.createToast = fn;
        console.log(this.notify);
    }
    notify = (message: string | React.ReactNode, options: IMessageOptions) => {
        if (this.createToast) {
            return this.createToast(message, options);
        }
    }
}

const toast = new Toasted();

export default toast;
