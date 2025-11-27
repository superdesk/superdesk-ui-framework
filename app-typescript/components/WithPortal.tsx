import * as React from 'react';
import {createPortal} from 'react-dom';

interface IProps {
    active: boolean;
    'data-test-id'?: string;
    children: React.ReactChild;
}

export function findParent(element: HTMLElement | null) {
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

    shouldComponentUpdate(nextProps: Readonly<IProps>): boolean {
        if (this.props.active === true && nextProps.active === false) {
            return true;
        }

        if (nextProps.active === false) {
            return false;
        }

        if (nextProps.active === true) {
            return (
                this.props.children !== nextProps.children || this.props['data-test-id'] !== nextProps['data-test-id']
            );
        }

        return false;
    }

    componentDidMount(): void {
        this.dataTheme = findParent(this.ref.current)?.getAttribute('data-theme') ?? undefined;
    }

    render() {
        return (
            <div ref={this.ref}>
                {this.props.active &&
                    createPortal(
                        <div data-theme={this.dataTheme} data-test-id={this.props['data-test-id']}>
                            {this.props.children}
                        </div>,
                        document.body,
                    )}
            </div>
        );
    }
}
