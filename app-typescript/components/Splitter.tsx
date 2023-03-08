import * as React from 'react';
import { default as Measure, ContentRect } from 'react-measure';

type MeasuredDimensions = {
    height: number;
    width: number;
};

export type SplitMeasuredSizes = {
    primary: number;
    splitter: number;
    secondary: number;
};

export type SplitterProps = {
    horizontal?: boolean;
    initialPrimarySize?: string;
    minPrimarySize?: string;
    minSecondarySize?: string;
    resetOnDoubleClick?: boolean;

    onSplitChanged?: (primarySize: string) => void;
    onMeasuredSizesChanged?: (sizes: SplitMeasuredSizes) => void;
};

export const Splitter = (props: React.PropsWithChildren<SplitterProps>): JSX.Element => {
    const {
        initialPrimarySize = '50%',
        minPrimarySize = '10%',
        minSecondarySize = '10%',
        resetOnDoubleClick = false,
        onSplitChanged,
        onMeasuredSizesChanged,
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
        if (onSplitChanged) {
            onSplitChanged(percent !== undefined ? `${percent}%` : initialPrimarySize);
        }
    }, [percent, initialPrimarySize]);

    React.useEffect(() => {
        if (onMeasuredSizesChanged) {
            onMeasuredSizesChanged({
                primary: currentPrimarySize,
                splitter: currentSplitterSize,
                secondary: currentContentSize - (currentPrimarySize + currentSplitterSize),
            });
        }
    }, [currentContentSize, currentPrimarySize, currentSplitterSize]);

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
        resetOnDoubleClick && setPercent(undefined);

    const children = React.Children.toArray(props.children);
    const primaryChild = children.length > 0 ? children[0] : <div />;
    const secondaryChild = children.length > 1 ? children[1] : <div />;

    const renderSizes = {
        primary: percent !== undefined ? `${percent}%` : initialPrimarySize,
        minPrimary: minPrimarySize ?? '0px',
        minSecondary: minSecondarySize ?? '0px',
    };

    const rootStyle = {
        '--react-split-min-primary': renderSizes.minPrimary,
        '--react-split-min-secondary': renderSizes.minSecondary,
        '--react-split-primary': renderSizes.primary,
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
