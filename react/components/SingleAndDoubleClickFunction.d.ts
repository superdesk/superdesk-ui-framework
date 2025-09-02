export interface ICallbacks {
    onSingleClick: (event: React.MouseEvent) => void;
    onDoubleClick: (event: React.MouseEvent) => void;
}
export declare function setupSingleAndDoubleClick(): (event: React.MouseEvent, cb: ICallbacks) => void;
