import React from 'react';
import type {Meta} from '@storybook/react';
import {FormLayoutEditor, FLE_PHANTOM_ROW_ID} from './FormLayoutEditor';
import type {ILayoutValue, ILayoutItem} from './FormLayoutEditor';

const meta = {
    title: 'Components/FormLayoutEditor',
    component: FormLayoutEditor,
    tags: ['autodocs'],
    parameters: {
        // Use padded instead of centered — the centered layout creates a new CSS
        // stacking context that shifts position:fixed coordinates and offsets the
        // DnD drag ghost.  The portal fix handles Storybook iframes, but padded
        // is the right layout for an editor-style component anyway.
        layout: 'padded',
    },
} satisfies Meta<typeof FormLayoutEditor>;

export default meta;

// ─── Test data ───────────────────────────────────────────────────────────────

interface IFieldMeta {
    id: string;
    label: string;
}

const ALL_FIELDS: Array<IFieldMeta> = [
    {id: 'headline', label: 'Headline'},
    {id: 'abstract', label: 'Abstract'},
    {id: 'body', label: 'Body text'},
    {id: 'byline', label: 'By-line'},
    {id: 'dateline', label: 'Dateline'},
    {id: 'slugline', label: 'Slug'},
    {id: 'category', label: 'Category'},
    {id: 'urgency', label: 'Urgency'},
    {id: 'priority', label: 'Priority'},
    {id: 'location', label: 'Location'},
    {id: 'subject', label: 'Subject'},
    {id: 'genre', label: 'Genre'},
];

const INITIAL_VALUE: ILayoutValue = [
    {
        id: 'row-1',
        items: [{id: 'headline', width: 'full'}],
    },
    {
        id: 'row-2',
        items: [
            {id: 'slugline', width: 'half'},
            {id: 'urgency', width: 'quarter'},
            {id: 'priority', width: 'quarter'},
        ],
    },
    {
        id: 'row-3',
        items: [
            {id: 'byline', width: 'half'},
            {id: 'dateline', width: 'half'},
        ],
    },
];

// ─── Shared renderer ─────────────────────────────────────────────────────────

function renderItem(item: ILayoutItem): React.ReactNode {
    const fieldMeta = ALL_FIELDS.find((f) => f.id === item.id);
    return fieldMeta?.label ?? item.id;
}

// ─── Wrapper with popover picker ─────────────────────────────────────────────

interface IWrapperProps {
    initialValue: ILayoutValue;
}

interface IWrapperState {
    value: ILayoutValue;
}

class FormLayoutEditorWrapper extends React.PureComponent<IWrapperProps, IWrapperState> {
    constructor(props: IWrapperProps) {
        super(props);
        this.state = {value: props.initialValue};
        this.handleRemoveItem = this.handleRemoveItem.bind(this);
        this.handlePickField = this.handlePickField.bind(this);
        this.renderAddItemContent = this.renderAddItemContent.bind(this);
    }

    getUsedFieldIds(): Set<string> {
        const ids = new Set<string>();
        this.state.value.forEach((row) => row.items.forEach((item) => ids.add(item.id)));
        return ids;
    }

    handleRemoveItem(itemId: string) {
        this.setState((state) => ({
            value: state.value
                .map((row) => ({...row, items: row.items.filter((i) => i.id !== itemId)}))
                .filter((row) => row.items.length > 0),
        }));
    }

    handlePickField(rowId: string, fieldId: string, closePopover: () => void) {
        const {value} = this.state;
        const newItem: ILayoutItem = {id: fieldId, width: 'full'};

        let newValue: ILayoutValue;
        if (rowId === FLE_PHANTOM_ROW_ID) {
            // Create a brand-new row at the bottom
            newValue = [...value, {id: `row-${Date.now()}`, items: [newItem]}];
        } else {
            // Append to the existing row; component normalises widths on next render
            newValue = value.map((row) => {
                if (row.id !== rowId) {
                    return row;
                }
                return {...row, items: [...row.items, newItem]};
            });
        }

        this.setState({value: newValue});
        closePopover();
    }

    renderAddItemContent(rowId: string, closePopover: () => void): React.ReactNode {
        const usedIds = this.getUsedFieldIds();
        const available = ALL_FIELDS.filter((f) => !usedIds.has(f.id));
        const isNewRow = rowId === FLE_PHANTOM_ROW_ID;

        return (
            <div className="form-layout-editor__add-item-popup">
                <strong style={{display: 'block', fontSize: 13, marginBottom: 8}}>
                    {isNewRow ? 'Add field — new row' : 'Add field to row'}
                </strong>
                {available.length === 0 ? (
                    <p style={{margin: 0, fontSize: 12, opacity: 0.6}}>
                        All available fields are already in the layout.
                    </p>
                ) : (
                    <div style={{display: 'flex', flexDirection: 'column', gap: 4}}>
                        {available.map((field) => (
                            <button
                                key={field.id}
                                onClick={() => this.handlePickField(rowId, field.id, closePopover)}
                                style={{
                                    display: 'block',
                                    width: '100%',
                                    textAlign: 'left',
                                    padding: '5px 10px',
                                    borderRadius: 3,
                                    border: '1px solid var(--color-line-medium)',
                                    background: 'var(--color-item-bg-default)',
                                    cursor: 'pointer',
                                    fontSize: 13,
                                }}
                            >
                                {field.label}
                            </button>
                        ))}
                    </div>
                )}
            </div>
        );
    }

    render() {
        const {value} = this.state;

        return (
            <div style={{padding: '16px 24px', maxWidth: 860}}>
                <FormLayoutEditor
                    value={value}
                    onChange={(v) => this.setState({value: v})}
                    renderItem={renderItem}
                    onEditItem={(id) => {
                        // eslint-disable-next-line no-console
                        console.log('Edit item:', id);
                    }}
                    onRemoveItem={this.handleRemoveItem}
                    onAddItem={() => {
                        /* handled by renderAddItemContent */
                    }}
                    renderAddItemContent={this.renderAddItemContent}
                />

                {/* Debug view */}
                <details style={{marginTop: 16}}>
                    <summary style={{fontSize: 12, opacity: 0.5, cursor: 'pointer'}}>Current value (JSON)</summary>
                    <pre style={{fontSize: 11, opacity: 0.7, overflow: 'auto'}}>{JSON.stringify(value, null, 2)}</pre>
                </details>
            </div>
        );
    }
}

// ─── Stories ─────────────────────────────────────────────────────────────────

export const Default = {
    render: () => <FormLayoutEditorWrapper initialValue={INITIAL_VALUE} />,
    parameters: {controls: {disable: true}},
};

export const Empty = {
    render: () => <FormLayoutEditorWrapper initialValue={[]} />,
    parameters: {controls: {disable: true}},
};
