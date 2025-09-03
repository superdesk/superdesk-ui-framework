import * as React from 'react';
interface IProps {
    id?: string;
    title?: string | React.ReactNode;
    icon?: string;
    onClose: () => void;
}
declare const ToastText: ({id, title, icon, onClose}: IProps) => JSX.Element;
export default ToastText;
