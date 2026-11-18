import * as React from 'react';
import classNames from 'classnames';
import {DraggableProvidedDragHandleProps} from '@hello-pangea/dnd';
import {ILayoutItem} from './FormLayoutEditor';
import {IconButton} from '../IconButton';
import {DragHandle} from '../DragHandle';

interface IProps {
    item: ILayoutItem;
    isDragging: boolean;
    isDraggingAny: boolean;
    isActive: boolean;
    dragHandleProps: DraggableProvidedDragHandleProps | null | undefined;
    renderItem: (item: ILayoutItem) => React.ReactNode;
    onEditItem: (itemId: string) => void;
    onRemoveItem: (itemId: string) => void;
}

export class FormLayoutItem extends React.PureComponent<IProps> {
    render() {
        const {item, isDragging, isDraggingAny, isActive, dragHandleProps, renderItem, onEditItem, onRemoveItem} =
            this.props;

        // Width is on the slot wrapper (form-layout-editor__item-slot--width-*), not on this element.
        const classes = classNames('form-layout-editor__item', {
            'form-layout-editor__item--is-dragging': isDragging,
            'form-layout-editor__item--any-dragging': isDraggingAny,
            'form-layout-editor__item--is-active': isActive,
        });

        return (
            <div className={classes}>
                <div className="form-layout-editor__item-handle" {...dragHandleProps}>
                    <DragHandle dotRows="5" dotsInRow="2" blank={true} />
                </div>
                <div className="form-layout-editor__item-content">
                    <div className="form-layout-editor__field">
                        <span className="form-layout-editor__field-label">{renderItem(item)}</span>
                        <span className="form-layout-editor__field-width label label--translucent">{item.width}</span>
                    </div>
                </div>
                <div className="form-layout-editor__item-actions">
                    <IconButton icon="pencil" size="small" ariaValue="Edit" onClick={() => onEditItem(item.id)} />
                    <IconButton icon="trash" size="small" ariaValue="Remove" onClick={() => onRemoveItem(item.id)} />
                </div>
            </div>
        );
    }
}
