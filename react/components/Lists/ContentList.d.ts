import * as React from 'react';
interface IPropsItem {
    action?: React.ReactNode;
    locked?: boolean;
    itemColum: Array<{
        itemRow: Array<{
            content: any;
        }>;
        border?: boolean;
        fullwidth?: boolean;
    }>;
    activated?: boolean;
    selected?: boolean;
    archived?: boolean;
    loading?: boolean;
    onClick?(): void;
    onDoubleClick?(): void;
}
declare class ContentListItem extends React.PureComponent<IPropsItem> {
    private multiClickHandler;
    constructor(props: IPropsItem);
    onActionMenuClick: (event: React.MouseEvent<HTMLElement>) => void;
    render(): JSX.Element;
}
interface IProps {
    items: Array<{
        itemColum: Array<IItemArray>;
        locked?: boolean;
        action?: React.ReactNode;
        loading?: boolean;
        activated?: boolean;
        selected?: boolean;
        archived?: boolean;
        onClick?(): void;
        onDoubleClick?(): void;
    }>;
}
interface IItemArray {
    itemRow: Array<{
        content: React.ReactNode;
    }>;
    border?: boolean;
    fullwidth?: boolean;
}
declare class ContentList extends React.PureComponent<IProps> {
    render(): JSX.Element;
}
export { ContentList, ContentListItem };
