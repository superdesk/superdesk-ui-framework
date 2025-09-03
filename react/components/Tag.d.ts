interface IProps {
    text: string;
    label?: string;
    keyValue?: number;
    shade?: 'light' | 'darker' | 'highlight1' | 'highlight2' | 'inverse';
    shape?: 'round' | 'square';
    readOnly?: boolean;
    draggable?: boolean;
    onClick(): void;
}
export declare const Tag: ({text, keyValue, shade, shape, readOnly, onClick, label, draggable}: IProps) => JSX.Element;
export {};
