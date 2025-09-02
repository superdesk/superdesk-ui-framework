import * as React from 'react';
interface IProps {
    children?: React.ReactNode;
    density?: 'compact' | 'comfortable' | 'loose';
    border?: boolean;
    className?: string;
    width?: 'none' | 'x-small' | 'small' | 'medium' | 'large';
    id?: string;
}
interface IPropsItem {
    stacked?: boolean;
    justify?: 'flex-start' | 'flex-end' | 'center' | 'space-between';
    gap?: 'none' | 'small' | 'medium' | 'large';
    id?: string;
}
declare class SimpleListItem extends React.PureComponent<IPropsItem> {
    render(): JSX.Element;
}
declare class SimpleList extends React.PureComponent<IProps> {
    render(): JSX.Element;
}
export { SimpleList, SimpleListItem };
