import * as React from 'react';

interface ISize {
    width: number;
    height: number;
}

interface IProps {
    children: (props: ISize) => JSX.Element;
    style?: React.CSSProperties;
}

interface IState {
    dimensions: ISize | 'not-initialized';
}

/**
 * Higher order component for dynamically retrieving dimensions of any element.
 * It uses `ResizeObserver` to listen for updates and re-render children efficiently.
 */
export class WithSizeObserver extends React.PureComponent<IProps, IState> {
    private el: HTMLDivElement | null;
    private observerInstance?: ResizeObserver;

    constructor(props: IProps) {
        super(props);

        this.state = {
            dimensions: 'not-initialized',
        };

        this.el = null;
    }

    componentDidMount() {
        this.observerInstance = new ResizeObserver((entries) => {
            this.setState({
                dimensions: {
                    width: Math.floor(entries[0].contentRect.width),
                    height: Math.floor(entries[0].contentRect.height),
                },
            });
        });

        if (this.el != null) {
            this.observerInstance.observe(this.el);
        }
    }

    componentWillUnmount() {
        if (this.observerInstance != null && this.el != null) {
            this.observerInstance.unobserve(this.el);
        }
    }

    render() {
        const {dimensions} = this.state;

        return (
            <div
                ref={(el) => {
                    this.el = el;
                }}
                style={{
                    position: 'relative',
                    width: '100%',
                    height: '100%',
                    ...this.props.style,
                }}
            >
                {/**
                 * Absolute positioning is needed for accurate calculation.
                 * Otherwise, initial calculation would work well,
                 * but if parent of `ResizeObserverComponent` is resized down,
                 * it would include its own size(which is based on the initial result from this component),
                 * including children, into calculation and would produce a wrong result.
                */}
                <div style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%'}}>
                    {
                        dimensions === 'not-initialized'
                            ? null
                            : this.props.children(dimensions)
                    }
                </div>
            </div>
        );
    }
}
