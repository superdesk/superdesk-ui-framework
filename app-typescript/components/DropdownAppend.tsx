import * as React from 'react';
import * as ReactDOM from "react-dom";
import DropdownMenu from './DropdownElement';

// class for append to body dropdown
const PLACEHOLDER_ID = "react-placeholder";

class DropdownAppend {
    componentRef: DropdownMenu | null;
    constructor() {
        this.componentRef = null;
        let element = null;
        const existingElement = document.getElementById(PLACEHOLDER_ID);

        if (existingElement) {
            element = existingElement;
        } else {
            const el = document.createElement("div");
            el.id = PLACEHOLDER_ID;

            // temporary styling move it to class
            el.style.position = 'absolute';
            el.style.top = '0';
            el.style.left = '0';
            el.style.width = '1px';
            el.style.height = '1px';
            el.style.zIndex = '1000';

            document.body.appendChild(el);
            element = el;
        }

        ReactDOM.render(
            <DropdownMenu ref={(ref) => {
                this.componentRef = ref;
            }} />, element);
    }

    append() {
        if (this.componentRef != null) {
            this.componentRef.append();
        }
    }
}

const dropdownAppend = new DropdownAppend();

export default dropdownAppend;
