import * as React from 'react';
interface IProps {
    topMenu?: React.ReactNode;
    main?: React.ReactNode;
    slideInMenu?: React.ReactNode;
    footer?: React.ReactNode;
    overlay?: React.ReactNode;
    heading?: string;
    menuOpen?: boolean;
    onClick(): void;
    active?: boolean;
    menuId?: string;
    ariaControls?: string;
    buttonAnimation?: 'spin' | 'squeeze' | 'none';
    editorFullWidth?: boolean;
    openPanel?: boolean;
}
export declare class CoreLayout extends React.PureComponent<IProps> {
    render(): JSX.Element;
}
export {};
