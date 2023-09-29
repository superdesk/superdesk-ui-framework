import * as React from "react";
import {createPortal} from 'react-dom';

interface IProps {
    container: Element;
    openDropdown: boolean;
    id: string;
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
                {
                    this.props.openDropdown
                    && (
                        createPortal(
                            <div
                                id={this.props.id}
                                data-test-id={this.props['data-test-id']}
                                data-theme={this.dataTheme}
                            >
                                {this.props.children}
                            </div>,
                            this.props.container,
                        )
                    )
                }
            </div>
        );
    }
}
