import * as React from 'react';
import { default as Measure, ContentRect } from 'react-measure';

type MeasuredDimensions = {
    height: number;
    width: number;
};

export type SplitterProps = {
    unit?: 'px' | 'percent';
    initialPrimarySize?: number;
    minPrimarySize?: number;
    minSecondarySize?: number;
    onSizeChange?(primary: number, secondary: number): void;
    children: [React.ReactNode, React.ReactNode];
};

export const Splitter = (props: React.PropsWithChildren<SplitterProps>): JSX.Element => {
    const {
        unit = 'percent',
        initialPrimarySize = '50',
        minPrimarySize = '10',
        minSecondarySize = '10',
        onSizeChange,
    } = props;

    const [contentMeasuredDimensions, setContentMeasuredDimensions] = React.useState<MeasuredDimensions>({
        height: 0,
        width: 0,
    });
    const [primaryMeasuredDimensions, setPrimaryMeasuredDimensions] = React.useState<MeasuredDimensions>({
        height: 0,
        width: 0,
    });

    const [splitterMeasuredDimensions] = React.useState<MeasuredDimensions>({
        height: 0,
        width: 0,
    });

    const currentContentSize = React.useMemo(
        () => (contentMeasuredDimensions.width),
        [contentMeasuredDimensions],
    );
    const currentPrimarySize = React.useMemo(
        () => (primaryMeasuredDimensions.width),
        [primaryMeasuredDimensions],
    );
    const currentSplitterSize = React.useMemo(
        () => (splitterMeasuredDimensions.width),
        [splitterMeasuredDimensions],
    );

    const [percent, setPercent] = React.useState<number | undefined>(undefined);

    const [clientStart, setClientStart] = React.useState(0);
    const [primaryStart, setPrimaryStart] = React.useState(0);

    React.useEffect(() => {
        if (onSizeChange) {
            onSizeChange(
                currentPrimarySize,
                currentContentSize - (currentPrimarySize + currentSplitterSize),
            );
        }
    }, [currentContentSize, currentPrimarySize]);

    const onMeasureContent = (contentRect: ContentRect) =>
        contentRect.bounds &&
        setContentMeasuredDimensions({ height: contentRect.bounds.height, width: contentRect.bounds.width });

    const onMeasurePrimary = (contentRect: ContentRect) =>
        contentRect.bounds &&
        setPrimaryMeasuredDimensions({ height: contentRect.bounds.height, width: contentRect.bounds.width });

    const onSplitPointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
        event.currentTarget.setPointerCapture(event.pointerId);
        setClientStart(event.clientX);
        setPrimaryStart(currentPrimarySize);
    };

    const onSplitPointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
        if (event.currentTarget.hasPointerCapture(event.pointerId)) {
            const position = event.clientX;
            const primarySize = primaryStart + (position - clientStart);
            const newPrimary = Math.max(0, Math.min(primarySize, currentContentSize));
            const newPercent = (newPrimary / currentContentSize) * 100;
            setPercent(newPercent);
        }
    };

    const onSplitPointerUp = (event: React.PointerEvent<HTMLDivElement>) => {
        event.currentTarget.releasePointerCapture(event.pointerId);
    };

    const onSplitDoubleClick = () =>
        setPercent(undefined);

    const children = React.Children.toArray(props.children);
    const primaryChild = children.length > 0 ? children[0] : <div />;
    const secondaryChild = children.length > 1 ? children[1] : <div />;

    const renderSizes = {
        unit: unit === 'percent' ? '%' : 'px',
        initialPrimarySize: percent !== undefined ? `${percent}` : initialPrimarySize,
        minPrimary: minPrimarySize ?? '0px',
        minSecondary: minSecondarySize ?? '0px',
    };

    const rootStyle = {
        '--react-split-min-primary': renderSizes.minPrimary + renderSizes.unit,
        '--react-split-min-secondary': renderSizes.minSecondary + renderSizes.unit,
        '--react-split-primary': renderSizes.initialPrimarySize + renderSizes.unit,
    } as React.CSSProperties;

    return (
        <Measure bounds onResize={onMeasureContent}>
            {({ measureRef: contentRef }) => (
                <div className="sd-splitter" ref={contentRef}>
                    <div className="sd-splitter__container" style={rootStyle}>
                        <Measure bounds onResize={onMeasurePrimary}>
                            {({ measureRef: primaryRef }) => (
                                <div className="sd-splitter__container--content" ref={primaryRef}>
                                    {primaryChild}
                                </div>
                            )}
                        </Measure>

                        <div
                            className="splitter"
                            tabIndex={-1}
                            onPointerDown={onSplitPointerDown}
                            onPointerUp={onSplitPointerUp}
                            onPointerMove={onSplitPointerMove}
                            onDoubleClick={onSplitDoubleClick}
                        >
                            <div className="sd-splitter__container--content">
                                <div className="default-splitter">
                                    <div className="line" />
                                </div>
                            </div>
                        </div>
                        <div className="sd-splitter__container--content">
                            {secondaryChild}
                        </div>
                    </div>
                </div>
            )}
        </Measure>
    );
};
