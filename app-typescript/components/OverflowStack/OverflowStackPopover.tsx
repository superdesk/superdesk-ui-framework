import * as React from 'react';
import {renderHiddenItemDefault} from './utils';
import type {IPropsOverflowStack} from './OverflowStack';

interface IPopoverContentProps<T> {
    max: number;
    closePopup(): void;
    showOnlyHiddenInPopover: boolean;
    propsRef: {current: IPropsOverflowStack<T> | null};
}

export class OverflowStackPopover<T> extends React.Component<IPopoverContentProps<T>> {
    render() {
        const {propsRef, max, showOnlyHiddenInPopover} = this.props;
        const props = propsRef.current;

        if (props == null) {
            return null;
        }

        const itemsToShow = showOnlyHiddenInPopover ? props.items.slice(max) : props.items;

        if (props.type === 'data') {
            const renderFn = props.renderHiddenItem ?? props.renderVisibleItem;

            return (
                <div className="overflow-stack__popover">
                    {itemsToShow.map((data, index) => (
                        <div key={index} className="overflow-stack__popover-item">
                            {renderFn(data as T, showOnlyHiddenInPopover ? index + max : index)}
                        </div>
                    ))}
                </div>
            );
        } else {
            const renderFn = props.renderPopoverItem ?? renderHiddenItemDefault;

            return (
                <div className="overflow-stack__popover">
                    {itemsToShow.map((item, index) => renderFn(item, showOnlyHiddenInPopover ? index + max : index))}
                </div>
            );
        }
    }
}
