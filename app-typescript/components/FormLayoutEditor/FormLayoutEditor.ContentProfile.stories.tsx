import React from 'react';
import type {Meta} from '@storybook/react';
import {FormLayoutEditor, FLE_PHANTOM_ROW_ID} from './FormLayoutEditor';
import {FormLayoutEditorAddItemPopup} from './FormLayoutEditorAddItemPopup';
import type {ILayoutValue, IItemWidth} from './FormLayoutEditor';
import {FormLayout} from '../Form/FormLayout';
import {FormGroupV2} from '../Form/FormGroupV2';
import {FormGroupItem} from '../Form/FormGroupItem';
import {PageLayout} from '../Layouts/PageLayout';
import {Panel, PanelHeader, PanelContent, PanelContentBlock, PanelFooter} from '../Layouts/Panel';
import {Modal} from '../Modal';
import {Button} from '../Button';
import {Checkbox} from '../Checkbox';
import {Input} from '../Input';
import {Select, Option} from '../Select';
import {ButtonGroup} from '../ButtonGroup';
import {ContentDivider} from '../ContentDivider';

// ─── Types ────────────────────────────────────────────────────────────────────

interface IFieldDefinition {
    id: string;
    label: string;
    type: 'text' | 'select' | 'tree-select';
    required: boolean;
}

interface ILayoutRow {
    id: string;
    items: Array<{fieldId: string; width: IItemWidth}>;
}

interface ILayoutState {
    fieldDefinitions: Array<IFieldDefinition>;
    layout: Array<ILayoutRow>;
}

interface IState {
    isModalOpen: boolean;
    activeFieldId: string | null;
    pendingRequired: boolean;
    savedState: ILayoutState;
    workingState: ILayoutState;
}

// ─── Field definitions ────────────────────────────────────────────────────────

const ALL_FIELDS: Array<IFieldDefinition> = [
    {id: 'headline', label: 'Headline', type: 'text', required: false},
    {id: 'slugline', label: 'Slugline', type: 'text', required: false},
    {id: 'byline', label: 'Byline', type: 'text', required: false},
    {id: 'description', label: 'Description', type: 'text', required: false},
    {id: 'keywords', label: 'Keywords', type: 'text', required: false},
    {id: 'source', label: 'Source', type: 'text', required: false},
    {id: 'category', label: 'Category', type: 'text', required: false},
    {id: 'priority', label: 'Priority', type: 'select', required: false},
    {id: 'status', label: 'Status', type: 'select', required: false},
    {id: 'subject', label: 'Subject', type: 'tree-select', required: false},
    {id: 'genre', label: 'Genre', type: 'tree-select', required: false},
];

const INITIAL_LAYOUT_STATE: ILayoutState = {
    fieldDefinitions: ALL_FIELDS,
    layout: [
        {id: 'row-1', items: [{fieldId: 'headline', width: 'full'}]},
        {
            id: 'row-2',
            items: [
                {fieldId: 'slugline', width: 'half'},
                {fieldId: 'priority', width: 'half'},
            ],
        },
        {
            id: 'row-3',
            items: [
                {fieldId: 'byline', width: 'half'},
                {fieldId: 'source', width: 'half'},
            ],
        },
    ],
};

// ─── Conversion helpers ───────────────────────────────────────────────────────

function toEditorValue(layout: Array<ILayoutRow>): ILayoutValue {
    return layout.map((row) => ({
        id: row.id,
        items: row.items.map((item) => ({id: item.fieldId, width: item.width})),
    }));
}

function fromEditorValue(value: ILayoutValue): Array<ILayoutRow> {
    return value.map((row) => ({
        id: row.id,
        items: row.items.map((item) => ({fieldId: item.id, width: item.width})),
    }));
}

function deepCopyLayoutState(state: ILayoutState): ILayoutState {
    return {
        fieldDefinitions: state.fieldDefinitions.map((f) => ({...f})),
        layout: state.layout.map((row) => ({
            ...row,
            items: row.items.map((item) => ({...item})),
        })),
    };
}

/**
 * Redistribute widths evenly when a new item is added to a row.
 * Mirrors the logic in FormLayoutEditor.distributeWidths for ILayoutRow items.
 */
function distributeRowWidths(
    items: Array<{fieldId: string; width: IItemWidth}>,
): Array<{fieldId: string; width: IItemWidth}> {
    let width: IItemWidth;
    switch (items.length) {
        case 1:
            width = 'full';
            break;
        case 2:
            width = 'half';
            break;
        case 3:
            width = 'third';
            break;
        default:
            width = 'quarter';
    }
    return items.map((item) => ({...item, width}));
}

function widthToColSpan(width: IItemWidth): 1 | 2 | 3 | 4 {
    switch (width) {
        case 'quarter':
            return 1;
        case 'half':
            return 2;
        case 'three-quarter':
            return 3;
        case 'full':
        default:
            return 4;
    }
}

function areLayoutStatesEqual(a: ILayoutState, b: ILayoutState): boolean {
    return JSON.stringify(a) === JSON.stringify(b);
}

// ─── Mock field renderer ──────────────────────────────────────────────────────

function renderMockField(fieldId: string, state: ILayoutState): React.ReactNode {
    const fieldDef = state.fieldDefinitions.find((f) => f.id === fieldId);
    if (!fieldDef) {
        return null;
    }

    const {label, type, required} = fieldDef;

    if (type === 'select') {
        return (
            <Select label={label} required={required} value="" onChange={() => undefined}>
                <Option value="">-- Select --</Option>
                <Option value="1">Option 1</Option>
                <Option value="2">Option 2</Option>
            </Select>
        );
    }

    if (type === 'tree-select') {
        return (
            <Input
                type="text"
                label={`${label} (tree-select)`}
                required={required}
                value=""
                onChange={() => undefined}
            />
        );
    }

    // text
    return <Input type="text" label={label} required={required} value="" onChange={() => undefined} />;
}

function renderSavedLayout(state: ILayoutState): React.ReactNode {
    return (
        <FormLayout spaces="compact" legend="Article header example">
            {state.layout.map((row) => {
                const allThirds = row.items.every((i) => i.width === 'third');

                if (allThirds) {
                    return (
                        <FormGroupV2 key={row.id}>
                            {row.items.map((i) => (
                                <FormGroupItem key={i.fieldId}>{renderMockField(i.fieldId, state)}</FormGroupItem>
                            ))}
                        </FormGroupV2>
                    );
                }

                return (
                    <FormGroupV2 key={row.id} grid>
                        {row.items.map((i) => (
                            <FormGroupItem key={i.fieldId} colSpan={widthToColSpan(i.width)}>
                                {renderMockField(i.fieldId, state)}
                            </FormGroupItem>
                        ))}
                    </FormGroupV2>
                );
            })}
        </FormLayout>
    );
}

// ─── Main story component ─────────────────────────────────────────────────────

class ContentProfileStory extends React.PureComponent<{}, IState> {
    constructor(props: {}) {
        super(props);
        this.state = {
            isModalOpen: false,
            activeFieldId: null,
            pendingRequired: false,
            savedState: deepCopyLayoutState(INITIAL_LAYOUT_STATE),
            workingState: deepCopyLayoutState(INITIAL_LAYOUT_STATE),
        };
        this.handleOpenModal = this.handleOpenModal.bind(this);
        this.handleModalShow = this.handleModalShow.bind(this);
        this.handleModalCancel = this.handleModalCancel.bind(this);
        this.handleSaveAll = this.handleSaveAll.bind(this);
        this.handleEditorChange = this.handleEditorChange.bind(this);
        this.handleEditItem = this.handleEditItem.bind(this);
        this.handleRemoveItem = this.handleRemoveItem.bind(this);
        this.handlePickField = this.handlePickField.bind(this);
        this.handlePanelApply = this.handlePanelApply.bind(this);
        this.handlePanelCancel = this.handlePanelCancel.bind(this);
        this.renderAddItemContent = this.renderAddItemContent.bind(this);
        this.renderItem = this.renderItem.bind(this);
    }

    handleOpenModal() {
        this.setState((state) => ({
            isModalOpen: true,
            workingState: deepCopyLayoutState(state.savedState),
            activeFieldId: null,
        }));
    }

    handleModalShow() {
        // PrimeReact Dialog animates open via CSS transform: scale(...), so
        // getBoundingClientRect() returns scaled (wrong) widths during
        // FormLayoutRow.componentDidMount. onShow fires after the animation
        // completes. FormLayoutRow listens to window 'resize' and calls
        // updateHandlePositions there, so dispatching a synthetic resize event
        // re-measures handle positions once the dialog is fully laid out.
        window.dispatchEvent(new Event('resize'));
    }

    handleModalCancel() {
        this.setState((state) => ({
            isModalOpen: false,
            workingState: deepCopyLayoutState(state.savedState),
            activeFieldId: null,
        }));
    }

    handleSaveAll() {
        this.setState((state) => ({
            savedState: deepCopyLayoutState(state.workingState),
            isModalOpen: false,
            activeFieldId: null,
        }));
    }

    handleEditorChange(value: ILayoutValue) {
        this.setState((state) => ({
            workingState: {
                ...state.workingState,
                layout: fromEditorValue(value),
            },
        }));
    }

    handleEditItem(fieldId: string) {
        const {workingState} = this.state;
        const fieldDef = workingState.fieldDefinitions.find((f) => f.id === fieldId);
        this.setState({
            activeFieldId: fieldId,
            pendingRequired: fieldDef?.required ?? false,
        });
    }

    handleRemoveItem(fieldId: string) {
        this.setState((state) => {
            const newLayout = state.workingState.layout
                .map((row) => ({
                    ...row,
                    items: row.items.filter((i) => i.fieldId !== fieldId),
                }))
                .filter((row) => row.items.length > 0);
            return {
                workingState: {
                    ...state.workingState,
                    layout: newLayout,
                },
            };
        });
    }

    handlePickField(rowId: string, fieldId: string, closePopover: () => void) {
        this.setState((state) => {
            const {layout} = state.workingState;
            const newItem = {fieldId, width: 'full' as IItemWidth};
            let newLayout: Array<ILayoutRow>;

            if (rowId === FLE_PHANTOM_ROW_ID) {
                newLayout = [...layout, {id: `row-${Date.now()}`, items: [newItem]}];
            } else {
                newLayout = layout.map((row) => {
                    if (row.id !== rowId) {
                        return row;
                    }
                    return {...row, items: distributeRowWidths([...row.items, newItem])};
                });
            }

            return {
                workingState: {
                    ...state.workingState,
                    layout: newLayout,
                },
            };
        });
        closePopover();
    }

    handlePanelApply() {
        const {activeFieldId, pendingRequired} = this.state;
        if (activeFieldId == null) {
            return;
        }
        this.setState((state) => ({
            workingState: {
                ...state.workingState,
                fieldDefinitions: state.workingState.fieldDefinitions.map((f) => {
                    if (f.id !== activeFieldId) {
                        return f;
                    }
                    return {...f, required: pendingRequired};
                }),
            },
            activeFieldId: null,
        }));
    }

    handlePanelCancel() {
        this.setState({activeFieldId: null});
    }

    getUsedFieldIds(): Set<string> {
        const ids = new Set<string>();
        this.state.workingState.layout.forEach((row) => row.items.forEach((item) => ids.add(item.fieldId)));
        return ids;
    }

    renderItem(item: {id: string; width: IItemWidth}): React.ReactNode {
        const fieldDef = this.state.workingState.fieldDefinitions.find((f) => f.id === item.id);
        if (!fieldDef) {
            return item.id;
        }
        return fieldDef.label;
    }

    renderAddItemContent(rowId: string, closePopover: () => void): React.ReactNode {
        const usedIds = this.getUsedFieldIds();
        const available = ALL_FIELDS.filter((f) => !usedIds.has(f.id));
        const isNewRow = rowId === FLE_PHANTOM_ROW_ID;

        return (
            <FormLayoutEditorAddItemPopup
                isNewRow={isNewRow}
                items={available}
                onSelect={(id) => this.handlePickField(rowId, id, closePopover)}
            />
        );
    }

    render() {
        const {isModalOpen, activeFieldId, pendingRequired, savedState, workingState} = this.state;
        const activeField =
            activeFieldId != null ? workingState.fieldDefinitions.find((f) => f.id === activeFieldId) : null;

        const hasUnsavedChanges = !areLayoutStatesEqual(savedState, workingState);
        const isApplyDisabled = activeField == null || pendingRequired === activeField.required;

        const footerTemplate = (
            <ButtonGroup align="end">
                <Button text="Cancel" onClick={this.handleModalCancel} />
                <Button type="primary" text="Save all" onClick={this.handleSaveAll} disabled={!hasUnsavedChanges} />
            </ButtonGroup>
        );

        return (
            <div className="p-3 pt-1-5">
                <div className="mb-2 text-end">
                    <Button text="Edit Content Profile" type="primary" onClick={this.handleOpenModal} />
                </div>

                <ContentDivider margin="medium" orientation="horizontal" type="dotted" />

                <div className="mb-2 mx-auto" style={{maxWidth: '900px'}}>
                    {renderSavedLayout(savedState)}
                </div>

                <Modal
                    visible={isModalOpen}
                    size="x-large"
                    contentPadding="none"
                    headerTemplate="Editing Content Profile"
                    footerTemplate={footerTemplate}
                    onShow={this.handleModalShow}
                    onHide={this.handleModalCancel}
                >
                    <PageLayout
                        fullHeight
                        main={
                            <div className="p-2">
                                <FormLayoutEditor
                                    value={toEditorValue(workingState.layout)}
                                    onChange={this.handleEditorChange}
                                    renderItem={this.renderItem}
                                    onEditItem={this.handleEditItem}
                                    onRemoveItem={this.handleRemoveItem}
                                    onAddItem={() => {
                                        /* handled by renderAddItemContent */
                                    }}
                                    activeItemId={activeFieldId}
                                    renderAddItemContent={this.renderAddItemContent}
                                />
                            </div>
                        }
                        rightPanel={
                            <Panel side="right" size="x-small" open={activeFieldId != null}>
                                <PanelHeader title={activeField?.label ?? ''} onClose={this.handlePanelCancel} />
                                <PanelContent>
                                    <PanelContentBlock>
                                        <Checkbox
                                            label={{text: 'Mark as required'}}
                                            checked={pendingRequired}
                                            onChange={(v) => this.setState({pendingRequired: v})}
                                        />
                                    </PanelContentBlock>
                                </PanelContent>
                                <PanelFooter>
                                    <Button text="Cancel" type="tertiary" onClick={this.handlePanelCancel} />
                                    <Button
                                        text="Apply"
                                        type="primary"
                                        onClick={this.handlePanelApply}
                                        disabled={isApplyDisabled}
                                    />
                                </PanelFooter>
                            </Panel>
                        }
                        rightPanelOpen={activeFieldId != null}
                    />
                </Modal>
            </div>
        );
    }
}

// ─── Storybook metadata ───────────────────────────────────────────────────────

const meta = {
    title: 'Demos/Content Profile Editor',
    parameters: {layout: 'padded'},
} satisfies Meta;

export default meta;

export const ContentProfile = {
    render: () => <ContentProfileStory />,
    parameters: {controls: {disable: true}},
};
