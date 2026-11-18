import * as React from 'react';

export interface IFormLayoutEditorAddItemPopupItem {
    id: string;
    label: string;
}

interface IProps {
    isNewRow: boolean;
    items: Array<IFormLayoutEditorAddItemPopupItem>;
    onSelect: (id: string) => void;
}

export class FormLayoutEditorAddItemPopup extends React.PureComponent<IProps> {
    render() {
        const {isNewRow, items, onSelect} = this.props;

        return (
            <div className="form-layout-editor__add-item-popup">
                <strong className="form-layout-editor__add-item-popup__title">
                    {isNewRow ? 'Add field — new row' : 'Add field to row'}
                </strong>
                {items.length === 0 ? (
                    <p className="form-layout-editor__add-item-popup__empty-state">
                        All available fields are already in the layout.
                    </p>
                ) : (
                    <div className="form-layout-editor__add-item-popup__field-list">
                        {items.map((item) => (
                            <button
                                key={item.id}
                                className="form-layout-editor__add-item-popup__field-btn"
                                onClick={() => onSelect(item.id)}
                            >
                                {item.label}
                            </button>
                        ))}
                    </div>
                )}
            </div>
        );
    }
}
