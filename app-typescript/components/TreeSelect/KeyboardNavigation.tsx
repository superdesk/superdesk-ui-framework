const getButtonList = (menuRef: HTMLUListElement | undefined): Array<HTMLButtonElement> => {
    let list = Array.from(menuRef?.querySelectorAll(':scope > li') ?? []);
    let buttons: Array<HTMLButtonElement> = [];

    if (list != null) {
        [...list].filter((item) => {
            if (item.querySelectorAll('.suggestion-item--btn:not([disabled])').length > 0) {
                buttons.push(item.querySelector('.suggestion-item--btn') as HTMLButtonElement);
            }
        });
    }

    return buttons;
};

const nextElement = (
    buttons: Array<HTMLButtonElement>,
    currentIndex: number,
    e: KeyboardEvent,
) => {
    e.preventDefault();
    e.stopPropagation();

    if (buttons[currentIndex + 1]) {
        buttons[currentIndex + 1].focus();
    } else {
        buttons[0].focus();
    }
};

const prevElement = (
    buttons: Array<HTMLButtonElement>,
    currentIndex: number,
    e: KeyboardEvent,
    ref: (() => void) | undefined,
) => {
    e.preventDefault();
    e.stopPropagation();

    if (buttons[currentIndex - 1]) {
        buttons[currentIndex - 1].focus();
    } else if (currentIndex === 0) {
        if (ref) {
            ref();
        }
    } else {
        buttons[buttons.length - 1].focus();
    }
};

export const keyboardNavigation = (e?: KeyboardEvent, menuRef?: HTMLUListElement, ref?: () => void) => {
    let buttons = getButtonList(menuRef);
    const currentElement = document.activeElement;
    const currentIndex = Array.prototype.indexOf.call(buttons, currentElement);

    if (document.activeElement != null && buttons.includes(document.activeElement as HTMLButtonElement)) {
        if (e?.key === 'ArrowDown') {
            nextElement(buttons, currentIndex, e);
        } else if (e?.key === 'ArrowUp') {
            prevElement(buttons, currentIndex, e, ref);
        }
    }
};
