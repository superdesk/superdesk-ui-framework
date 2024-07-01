export interface ICallbacks {
    onSingleClick: (event: React.MouseEvent) => void;
    onDoubleClick: (event: React.MouseEvent) => void;
}

export function setupSingleAndDoubleClick(): (event: React.MouseEvent, cb: ICallbacks) => void {
    let timer: number | undefined;
    let delay: number = 250;

    return (event, cb: ICallbacks) => {
        clearTimeout(timer);

        if (event.nativeEvent.detail === 1) {
            timer = window.setTimeout(() => {
                cb.onSingleClick(event);
            }, delay);
        } else if (event.nativeEvent.detail === 2) {
            cb.onDoubleClick(event);
        }
    };
}
