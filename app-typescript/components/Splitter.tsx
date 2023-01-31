import * as React from 'react';
import { default as Measure, ContentRect } from 'react-measure';

type MeasuredDimensions = {
    height: number;
    width: number;
};

type RenderSplitterProps = {
    pixelSize: number;
    horizontal: boolean;
    dragging: boolean;
};

export type SplitMeasuredSizes = {
    primary: number;
    splitter: number;
    secondary: number;
};

export type SplitProps = {
    horizontal?: boolean;
    initialPrimarySize?: string;
    minPrimarySize?: string;
    minSecondarySize?: string;
    splitterSize?: string;
    renderSplitter?: (props: RenderSplitterProps) => React.ReactNode | undefined;
    resetOnDoubleClick?: boolean;
    defaultSplitterColors?: {
        color: string;
        hover: string;
        drag: string;
    };

    onSplitChanged?: (primarySize: string) => void;

    onMeasuredSizesChanged?: (sizes: SplitMeasuredSizes) => void;
};

const getThinLineSize = (size: number) => `${size % 2 === 0 ? 2 : 3}px`;
const getCenteredMargin = (size: number) => `${Math.max(0, Math.floor(size / 2) - 1)}px`;

type Props = RenderSplitterProps & {
    color?: string;
    hoverColor?: string;
    dragColor?: string;
};

export const DefaultSplitter = (props: Props) => {
    const { dragging, pixelSize, color = 'silver', hoverColor = 'gray', dragColor = 'black' } = props;

    const cssProperties = {
        '--default-splitter-line-margin': getCenteredMargin(pixelSize),
        '--default-splitter-line-size': getThinLineSize(pixelSize),
        '--default-splitter-line-color': dragging ? dragColor : color,
        '--default-splitter-line-hover-color': dragging ? dragColor : hoverColor,
    } as React.CSSProperties;

    return (
        <div className="default-splitter" style={cssProperties}>
            <div className="line" />
        </div>
    );
};

export const Splitter = (props: React.PropsWithChildren<SplitProps>): JSX.Element => {
    const {
        horizontal = false,
        initialPrimarySize = '50%',
        minPrimarySize = '0px',
        minSecondarySize = '0px',
        splitterSize = '7px',
        renderSplitter,
        resetOnDoubleClick = false,
        defaultSplitterColors = {
            color: 'silver',
            hover: 'gray',
            drag: 'black',
        },
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
    const [splitterMeasuredDimensions, setSplitterMeasuredDimensions] = React.useState<MeasuredDimensions>({
        height: 0,
        width: 0,
    });

    const currentContentSize = React.useMemo(
        () => (horizontal ? contentMeasuredDimensions.height : contentMeasuredDimensions.width),
        [horizontal, contentMeasuredDimensions],
    );
    const currentPrimarySize = React.useMemo(
        () => (horizontal ? primaryMeasuredDimensions.height : primaryMeasuredDimensions.width),
        [horizontal, primaryMeasuredDimensions],
    );
    const currentSplitterSize = React.useMemo(
        () => (horizontal ? splitterMeasuredDimensions.height : splitterMeasuredDimensions.width),
        [horizontal, splitterMeasuredDimensions],
    );

    const [percent, setPercent] = React.useState<number | undefined>(undefined);

    const [clientStart, setClientStart] = React.useState(0);
    const [primaryStart, setPrimaryStart] = React.useState(0);
    const [dragging, setDragging] = React.useState(false);

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
    }, [horizontal, currentContentSize, currentPrimarySize, currentSplitterSize]);

    const onMeasureContent = (contentRect: ContentRect) =>
        contentRect.bounds &&
        setContentMeasuredDimensions({ height: contentRect.bounds.height, width: contentRect.bounds.width });

    const onMeasurePrimary = (contentRect: ContentRect) =>
        contentRect.bounds &&
        setPrimaryMeasuredDimensions({ height: contentRect.bounds.height, width: contentRect.bounds.width });

    const onMeasureSplitter = (contentRect: ContentRect) =>
        contentRect.bounds &&
        setSplitterMeasuredDimensions({ height: contentRect.bounds.height, width: contentRect.bounds.width });

    const onSplitPointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
        event.currentTarget.setPointerCapture(event.pointerId);
        setClientStart(horizontal ? event.clientY : event.clientX);
        setPrimaryStart(currentPrimarySize);
        setDragging(true);
    };

    const onSplitPointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
        if (event.currentTarget.hasPointerCapture(event.pointerId)) {
            const position = horizontal ? event.clientY : event.clientX;
            const primarySize = primaryStart + (position - clientStart);
            const newPrimary = Math.max(0, Math.min(primarySize, currentContentSize));
            const newPercent = (newPrimary / currentContentSize) * 100;
            setPercent(newPercent);
        }
    };

    const onSplitPointerUp = (event: React.PointerEvent<HTMLDivElement>) => {
        event.currentTarget.releasePointerCapture(event.pointerId);
        setDragging(false);
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

    const renderSplitterProps = {
        pixelSize: currentSplitterSize,
        horizontal,
        dragging: dragging,
    };

    const renderSplitVisual =
        renderSplitter ??
        (() => {
            return (
                <DefaultSplitter
                    {...renderSplitterProps}
                    color={dragging ? defaultSplitterColors.drag : defaultSplitterColors.color}
                    hoverColor={dragging ? defaultSplitterColors.drag : defaultSplitterColors.hover}
                />
            );
        });

    const rootClassName = horizontal ? 'split-container horizontal' : 'split-container vertical';

    const rootStyle = {
        '--react-split-min-primary': renderSizes.minPrimary,
        '--react-split-min-secondary': renderSizes.minSecondary,
        '--react-split-primary': renderSizes.primary,
        '--react-split-splitter': splitterSize,
    } as React.CSSProperties;

    return (
        <Measure bounds onResize={onMeasureContent}>
            {({ measureRef: contentRef }) => (
                <div className="react-split" ref={contentRef}>
                    <div className={rootClassName} style={rootStyle}>
                        <div className="primary">
                            <Measure bounds onResize={onMeasurePrimary}>
                                {({ measureRef: primaryRef }) => (
                                    <div className="full-content" ref={primaryRef}>
                                        {primaryChild}
                                    </div>
                                )}
                            </Measure>
                        </div>
                        <div
                            className="splitter"
                            tabIndex={-1}
                            onPointerDown={onSplitPointerDown}
                            onPointerUp={onSplitPointerUp}
                            onPointerMove={onSplitPointerMove}
                            onDoubleClick={onSplitDoubleClick}
                        >
                            <Measure bounds onResize={onMeasureSplitter}>
                                {({ measureRef: splitterRef }) => (
                                    <div className="full-content" ref={splitterRef}>
                                        {renderSplitVisual(renderSplitterProps)}
                                    </div>
                                )}
                            </Measure>
                        </div>
                        <div className="secondary">
                            <div className="full-content">{secondaryChild}</div>
                        </div>
                    </div>
                </div>
            )}
        </Measure>
    );
};
