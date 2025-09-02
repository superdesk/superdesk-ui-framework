import * as React from 'react';
interface IProps<T> {
    getItems(pageNo: number, pageSize: number, signal: AbortSignal): Promise<{
        items: Array<T>;
        itemCount: number;
    }>;
    children: (items: Array<T>) => JSX.Element;
    pageSize?: number;
}
interface IState<T> {
    currentPage: number;
    items: Array<T> | null;
}
export declare function getPagination(currentPage: number, totalPages: number): Array<number | 'dots'>;
export declare class WithPagination<T> extends React.PureComponent<IProps<T>, IState<T>> {
    private pageCount;
    private abortController;
    private ref;
    private inProgress;
    constructor(props: IProps<T>);
    getPageSize(): number;
    switchPage(page: number): void;
    componentDidMount(): void;
    render(): JSX.Element | null;
}
export {};
