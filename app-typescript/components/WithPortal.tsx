import * as React from "react";
import {createPortal} from 'react-dom';

interface IProps {
    active: boolean;
    'data-test-id'?: string;
}

export function findParent(
    element: HTMLElement | null,
) {
    let dataTheme = element;

    while (dataTheme != null && dataTheme?.getAttribute('data-theme') == null) {
        dataTheme = dataTheme.parentElement ?? null;
    }

    return dataTheme;
}

export class WithPortal extends React.Component<IProps> {
    private ref: React.RefObject<HTMLDivElement>;
    private dataTheme: string | undefined;

    constructor(props: IProps) {
        super(props);

        this.ref = React.createRef();
    }

    componentDidMount(): void {
        this.dataTheme = findParent(this.ref.current)?.getAttribute('data-theme') ?? undefined;
    }

    render() {
        return (
            <div ref={this.ref}>
                {this.props.active && (
                    createPortal(
                        <div data-theme={this.dataTheme} data-test-id={this.props['data-test-id']}>
                            {this.props.children}
                        </div>,
                        document.body,
                    )
                )}
            </div>
        );
    }
}
