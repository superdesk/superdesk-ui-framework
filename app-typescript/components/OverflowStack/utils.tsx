import * as React from 'react';

export const HIDDEN_ITEM_STYLE: React.CSSProperties = {
    position: 'absolute',
    visibility: 'hidden',
    pointerEvents: 'none',
    whiteSpace: 'nowrap',
} as const;

export const defaultIndicator = (count: number) => <span className="overflow-stack__indicator-content">+{count}</span>;

export const renderHiddenItemDefault = (item: React.ReactNode, index: number) => (
    <div key={index} className="overflow-stack__popover-item">
        {item}
    </div>
);
