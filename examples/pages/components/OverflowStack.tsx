import * as React from 'react';
import * as Markup from '../../js/react';
import {
    PropsList,
    Prop,
    OverflowStack,
    Badge,
    Tag,
    Button,
    ButtonGroup,
    IconButton,
    Label,
    CheckboxButton,
    ResizablePanels,
    Checkbox,
} from '../../../app-typescript';

interface IProps {
    children?: React.ReactNode;
}

interface ContentTypeItem {
    id: string;
    label: string;
    icon: string;
    checked: boolean;
}

interface IState {
    customIndicatorCount: number;
    value1: boolean;
    value2: boolean;
    value3: boolean;
    value4: boolean;
    value5: boolean;
    value6: boolean;
    contentTypes: ContentTypeItem[];
}

export default class OverflowStackDoc extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {
            customIndicatorCount: 0,
            value1: false,
            value2: false,
            value3: false,
            value4: false,
            value5: true,
            value6: false,
            contentTypes: [
                {id: 'text', label: 'Text', icon: 'text', checked: false},
                {id: 'photo', label: 'Photo', icon: 'photo', checked: true},
                {id: 'video', label: 'Video', icon: 'video', checked: false},
                {id: 'audio', label: 'Audio', icon: 'audio', checked: true},
                {id: 'slideshow', label: 'Slideshow', icon: 'slideshow', checked: false},
                {id: 'composite', label: 'Composite', icon: 'composite', checked: false},
            ],
        };
    }

    handleContentTypeChange = (id: string, checked: boolean) => {
        this.setState((prevState) => ({
            contentTypes: prevState.contentTypes.map((item) => (item.id === id ? {...item, checked} : item)),
        }));
    };

    render() {
        // Sample data for examples
        const labelItems = [
            <Label size="large" key="1" text="Breaking News" type="primary" />,
            <Label size="large" key="2" text="Sports" type="success" />,
            <Label size="large" key="3" text="Entertainment" type="warning" />,
            <Label size="large" key="4" text="Politics" type="highlight" />,
            <Label size="large" key="5" text="Technology" type="primary" />,
            <Label size="large" key="6" text="Health" type="success" />,
        ];

        const tagItems = [
            <Tag key="1" text="React" />,
            <Tag key="2" text="TypeScript" />,
            <Tag key="3" text="JavaScript" />,
            <Tag key="4" text="HTML" />,
            <Tag key="5" text="CSS" />,
        ];

        const buttonItems = [
            <IconButton key="1" icon="list-view" ariaValue="List" onClick={() => false} />,
            <IconButton key="2" icon="grid-view" ariaValue="Grid" onClick={() => false} />,
            <IconButton key="3" icon="kanban-view" ariaValue="Kanban" onClick={() => false} />,
            <IconButton key="4" icon="preview-large" ariaValue="Preview" onClick={() => false} />,
        ];
        const checkbuttonItems = [
            <CheckboxButton
                key="1"
                label={{text: 'Text', icon: 'text', hidden: true}}
                onChange={(value) => this.setState(() => ({value1: value}))}
            />,
            <CheckboxButton
                key="2"
                label={{text: 'Photo', icon: 'photo', hidden: true}}
                onChange={(value) => this.setState(() => ({value2: value}))}
            />,
            <CheckboxButton
                key="3"
                label={{text: 'Video', icon: 'video', hidden: true}}
                onChange={(value) => this.setState(() => ({value3: value}))}
            />,
            <CheckboxButton
                key="4"
                label={{text: 'Slideshow', icon: 'slideshow', hidden: true}}
                onChange={(value) => this.setState(() => ({value4: value}))}
            />,
            <CheckboxButton
                key="5"
                label={{text: 'Audio', icon: 'audio'}}
                onChange={(value) => this.setState(() => ({value5: value}))}
            />,
            <CheckboxButton
                key="6"
                label={{text: 'Composite', icon: 'composite'}}
                onChange={(value) => this.setState(() => ({value6: value}))}
            />,
        ];

        return (
            <section className="docs-page__container">
                <h2 className="docs-page__h2">OverflowStack</h2>

                <Markup.ReactMarkupCodePreview>
                    {`
                        <OverflowStack 
                            items={[
                                <Label text="Item 1" type="primary" />,
                                <Label text="Item 2" type="success" />,
                                <Label text="Item 3" type="warning" />,
                            ]}
                            max={2}
                        />
                    `}
                </Markup.ReactMarkupCodePreview>

                <p className="docs-page__paragraph ">
                    OverflowStack is a generic component for displaying a controlled number of items in a horizontal
                    stack. When the number of items exceeds the maximum, a "+N" indicator is shown. Clicking the
                    indicator opens a popover with all (or only hidden) items.
                </p>

                <h3 className="docs-page__h3 docs-page__h3--small-top-m">Basic Examples</h3>
                <Markup.ReactMarkup>
                    <Markup.ReactMarkupPreview>
                        <p className="docs-page__paragraph">// Badge Stack (max 3 items)</p>
                        <div className="docs-page__content-row">
                            <OverflowStack items={labelItems} max={3} />
                        </div>

                        <p className="docs-page__paragraph">// Tag Stack (max 4 items)</p>
                        <div className="docs-page__content-row">
                            <OverflowStack items={tagItems} max={4} />
                        </div>

                        <p className="docs-page__paragraph">// CheckButton Stack (show only hidden in popover)</p>
                        <div className="docs-page__content-row">
                            <OverflowStack items={checkbuttonItems} showOnlyHiddenInPopover={true} max={4} />
                        </div>
                    </Markup.ReactMarkupPreview>
                    <Markup.ReactMarkupCode>
                        {`
                            // Badge Stack (max 3 items)
                            <OverflowStack 
                                items={[
                                    <Label size='large' key="1" text="Breaking News" type="primary" />,
                                    <Label size='large' key="2" text="Sports" type="success" />,
                                    <Label size='large' key="3" text="Entertainment" type="warning" />,
                                    <Label size='large' key="4" text="Politics" type="highlight" />,
                                    <Label size='large' key="5" text="Technology" type="primary" />,
                                    <Label size='large' key="6" text="Health" type="success" />,
                                ]}
                                max={3}
                            />
                            // Tag Stack (max 4 items)
                            <OverflowStack
                                items={[
                                    <Tag key="1" text="React" />,
                                    <Tag key="2" text="TypeScript" />,
                                    <Tag key="3" text="JavaScript" />,           
                                    <Tag key="4" text="HTML" />,
                                    <Tag key="5" text="CSS" />,
                                ]}
                                max={4}
                            />
                            // CheckButton Stack (show only hidden in popover)
                            <OverflowStack
                                items={[
                                    <CheckboxButton key="1" label={{text: 'Text', icon: 'text', hidden: true}} onChange={(value) => this.setState(() => ({ value1: value }))} />,
                                    <CheckboxButton key="2" label={{text: 'Photo', icon: 'photo', hidden: true}}  onChange={(value) => this.setState(() => ({ value2: value }))} />,
                                    <CheckboxButton key="3" label={{text: 'Video', icon: 'video', hidden: true}}  onChange={(value) => this.setState(() => ({ value3: value }))} />,
                                    <CheckboxButton key="4" label={{text: 'Slideshow', icon: 'slideshow', hidden: true}}  onChange={(value) => this.setState(() => ({ value4: value }))} />,
                                    <CheckboxButton key="5" label={{text: 'Audio', icon: 'audio'}}  onChange={(value) => this.setState(() => ({ value5: value }))} />,
                                    <CheckboxButton key="6" label={{text: 'Composite', icon: 'composite'}}  onChange={(value) => this.setState(() => ({ value6: value }))} />,
                                ]}
                                showOnlyHiddenInPopover={true}
                                max={4}
                            />
                        `}
                    </Markup.ReactMarkupCode>
                </Markup.ReactMarkup>

                <h3 className="docs-page__h3 docs-page__h3--small-top-m">Gap Variations</h3>
                <Markup.ReactMarkup>
                    <Markup.ReactMarkupPreview>
                        <p className="docs-page__paragraph">// Compact (default)</p>
                        <div className="docs-page__content-row">
                            <OverflowStack items={tagItems.slice(0, 4)} gap="compact" max="show-all" />
                        </div>

                        <p className="docs-page__paragraph">// Loose</p>
                        <div className="docs-page__content-row">
                            <OverflowStack items={tagItems.slice(0, 4)} gap="loose" max="show-all" />
                        </div>

                        <p className="docs-page__paragraph">
                            // None (no gap; should only be used in rare cases where components have already have visual
                            spacing)
                        </p>
                        <div className="docs-page__content-row">
                            <OverflowStack items={tagItems.slice(0, 4)} gap="none" max="show-all" />
                        </div>
                    </Markup.ReactMarkupPreview>
                    <Markup.ReactMarkupCode>
                        {`
                            <OverflowStack items={tagItems.slice(0, 4)} max={4} gap="compact" />
                            <OverflowStack items={tagItems.slice(0, 4)} max={4} gap="loose" />
                            <OverflowStack items={tagItems.slice(0, 4)} max={4} gap="none" />
                        `}
                    </Markup.ReactMarkupCode>
                </Markup.ReactMarkup>

                <h3 className="docs-page__h3 docs-page__h3--small-top-m">Overlap Mode</h3>
                <Markup.ReactMarkup>
                    <Markup.ReactMarkupPreview>
                        <p className="docs-page__paragraph">// Overlapping items - items move up on hover</p>
                        <div className="docs-page__content-row">
                            <OverflowStack items={labelItems} max={4} overlap={true} />
                        </div>
                    </Markup.ReactMarkupPreview>
                    <Markup.ReactMarkupCode>
                        {`
                            <OverflowStack 
                                items={[
                                    <Label size='large' key="1" text="Breaking News" type="primary" />,
                                    <Label size='large' key="2" text="Sports" type="success" />,
                                    <Label size='large' key="3" text="Entertainment" type="warning" />,
                                    <Label size='large' key="4" text="Politics" type="highlight" />,
                                    <Label size='large' key="5" text="Technology" type="primary" />,
                                    <Label size='large' key="6" text="Health" type="success" />,
                                ]}
                                max={4}
                                overlap={true}
                            />
                        `}
                    </Markup.ReactMarkupCode>
                </Markup.ReactMarkup>

                <h3 className="docs-page__h3 docs-page__h3--small-top-m">Popover Options</h3>
                <Markup.ReactMarkup>
                    <Markup.ReactMarkupPreview>
                        <p className="docs-page__paragraph">// Show all items in popover (default)</p>
                        <div className="docs-page__content-row">
                            <OverflowStack items={labelItems} max={3} showOnlyHiddenInPopover={false} />
                        </div>

                        <p className="docs-page__paragraph">// Show only hidden items in popover</p>
                        <div className="docs-page__content-row">
                            <OverflowStack items={labelItems} max={3} showOnlyHiddenInPopover />
                        </div>
                    </Markup.ReactMarkupPreview>
                    <Markup.ReactMarkupCode>
                        {`
                            // Show all items in popover (default)
                            <OverflowStack items={labelItems} max={3} showOnlyHiddenInPopover={false} />

                            // Show only hidden items in popover
                            <OverflowStack items={labelItems} max={3} showOnlyHiddenInPopover />
                        `}
                    </Markup.ReactMarkupCode>
                </Markup.ReactMarkup>

                <h3 className="docs-page__h3 docs-page__h3--small-top-m">Dynamic Overflow (Auto)</h3>
                <p className="docs-page__paragraph">
                    Auto overflow - dynamically calculates visible items based on available space
                    <br />
                    (Resize the two containers below to see items adjust).
                </p>
                <Markup.ReactMarkup>
                    <Markup.ReactMarkupPreview>
                        <p className="docs-page__paragraph">// Show all items in popover (default)</p>
                        <ResizablePanels direction="horizontal" secondarySize={{default: 10}}>
                            <div className="left-panel py-3 ps-3 sd-border--medium radius-lg me-0-5">
                                <OverflowStack items={labelItems} overflow="auto" indicatorStyle="dots" />
                                <br />
                                <OverflowStack items={tagItems} overflow="auto" />
                            </div>
                            <div className="right-panel p-2"></div>
                        </ResizablePanels>
                        <p className="docs-page__paragraph">// Show only hidden items in popover</p>
                        <ResizablePanels direction="horizontal" secondarySize={{default: 10}}>
                            <div className="left-panel py-3 ps-3 sd-border--medium radius-lg me-0-5">
                                <OverflowStack
                                    items={labelItems}
                                    overflow="auto"
                                    showOnlyHiddenInPopover={true}
                                    indicatorStyle="dots"
                                />
                                <br />
                                <OverflowStack items={tagItems} overflow="auto" showOnlyHiddenInPopover={true} />
                            </div>
                            <div className="right-panel p-2"></div>
                        </ResizablePanels>
                    </Markup.ReactMarkupPreview>
                    <Markup.ReactMarkupCode>
                        {`
                            // Auto overflow - dynamically calculates visible items based on available space
                            <OverflowStack
                                items={labelItems}
                                overflow="auto"
                                indicatorStyle="dots"
                            />

                            // Auto overflow with tags
                            <OverflowStack
                                items={tagItems}
                                overflow="auto"
                            />
                        `}
                    </Markup.ReactMarkupCode>
                </Markup.ReactMarkup>

                <h3 className="docs-page__h3 docs-page__h3--small-top-m">Indicator Style</h3>
                <Markup.ReactMarkup>
                    <Markup.ReactMarkupPreview>
                        <p className="docs-page__paragraph">// Default: Show count "+N"</p>
                        <div className="docs-page__content-row">
                            <OverflowStack items={labelItems} max={3} indicatorStyle="count" />
                        </div>

                        <p className="docs-page__paragraph">// Show dots icon instead of count</p>
                        <div className="docs-page__content-row">
                            <OverflowStack items={labelItems} max={3} indicatorStyle="dots" />
                        </div>
                    </Markup.ReactMarkupPreview>
                    <Markup.ReactMarkupCode>
                        {`
                            // Default: Show count "+N"
                            <OverflowStack
                                items={labelItems}
                                max={3}
                                indicatorStyle="count"
                            />

                            // Show dots icon instead of count
                            <OverflowStack
                                items={labelItems}
                                max={3}
                                indicatorStyle="dots"
                            />
                        `}
                    </Markup.ReactMarkupCode>
                </Markup.ReactMarkup>

                <h3 className="docs-page__h3 docs-page__h3--small-top-m">Custom Indicator</h3>
                <Markup.ReactMarkup>
                    <Markup.ReactMarkupPreview>
                        <p className="docs-page__paragraph">// Custom "+N" button style</p>
                        <div className="docs-page__content-row">
                            <OverflowStack
                                items={tagItems}
                                max={3}
                                renderIndicator={(count) => <Tag text={`+${count} more`} />}
                            />
                        </div>
                    </Markup.ReactMarkupPreview>
                    <Markup.ReactMarkupCode>
                        {`
                            <OverflowStack
                                items={tagItems}
                                max={3}
                                renderIndicator={(count) => (
                                    <Tag text={'+' + count + ' more'} />
                                )}
                            />
                        `}
                    </Markup.ReactMarkupCode>
                </Markup.ReactMarkup>

                <h3 className="docs-page__h3 docs-page__h3--small-top-m">Custom Popover Content</h3>
                <Markup.ReactMarkup>
                    <Markup.ReactMarkupPreview>
                        <p className="docs-page__paragraph">// Custom popover item rendering</p>
                        <div className="docs-page__content-row">
                            <OverflowStack
                                items={labelItems}
                                max={3}
                                renderPopoverItem={(item, index) => (
                                    <div
                                        key={index}
                                        style={{
                                            padding: '8px',
                                            borderBottom: '1px solid var(--sd-colour-line--light)',
                                        }}
                                    >
                                        <span style={{marginRight: '8px'}}>#{index + 1}</span>
                                        {item}
                                    </div>
                                )}
                            />
                        </div>
                    </Markup.ReactMarkupPreview>
                    <Markup.ReactMarkupCode>
                        {`
                            <OverflowStack
                                items={items}
                                max={3}
                                renderPopoverItem={(item, index) => (
                                    <div key={index}>
                                        <span>#{index + 1}</span>
                                        {item}
                                    </div>
                                )}
                            />
                        `}
                    </Markup.ReactMarkupCode>
                </Markup.ReactMarkup>

                <h3 className="docs-page__h3 docs-page__h3--small-top-m">Custom Click Handler</h3>
                <Markup.ReactMarkup>
                    <Markup.ReactMarkupPreview>
                        <p className="docs-page__paragraph">
                            // Custom onClick handler (popover won't open automatically)
                        </p>
                        <div className="docs-page__content-row">
                            <OverflowStack
                                items={labelItems}
                                max={3}
                                onIndicatorClick={() => {
                                    this.setState((state) => ({
                                        customIndicatorCount: state.customIndicatorCount + 1,
                                    }));
                                }}
                            />
                            {this.state.customIndicatorCount > 0 && (
                                <span style={{marginLeft: '16px'}}>
                                    Clicked {this.state.customIndicatorCount} times
                                </span>
                            )}
                        </div>
                    </Markup.ReactMarkupPreview>
                    <Markup.ReactMarkupCode>
                        {`
                            // Custom onClick handler (popover won't open automatically)
                            <OverflowStack
                                items={items}
                                max={3}
                                onIndicatorClick={() => console.log('Clicked!')}
                            />
                        `}
                    </Markup.ReactMarkupCode>
                </Markup.ReactMarkup>

                <h3 className="docs-page__h3 docs-page__h3--small-top-m">Data-Driven API (Different Rendering)</h3>
                <p className="docs-page__paragraph">
                    Use itemsData with renderVisibleItem and renderHiddenItem to render items differently in the stack
                    vs popover. Perfect for showing CheckboxButton in stack and Checkbox in popover while maintaining
                    shared state. Try toggling items and opening the popover!
                </p>
                <Markup.ReactMarkup>
                    <Markup.ReactMarkupPreview>
                        <div className="docs-page__content-row">
                            <OverflowStack<ContentTypeItem>
                                itemsData={this.state.contentTypes}
                                max={3}
                                indicatorStyle="dots"
                                renderVisibleItem={(data) => (
                                    <CheckboxButton
                                        checked={data.checked}
                                        label={{text: data.label, icon: data.icon, hidden: true}}
                                        onChange={(checked) => this.handleContentTypeChange(data.id, checked)}
                                    />
                                )}
                                renderHiddenItem={(data) => (
                                    <Checkbox
                                        checked={data.checked}
                                        label={{text: data.label}}
                                        onChange={(checked) => this.handleContentTypeChange(data.id, checked)}
                                    />
                                )}
                            />
                        </div>
                    </Markup.ReactMarkupPreview>
                    <Markup.ReactMarkupCode>
                        {`
                            // Define your data structure
                            interface ContentTypeItem {
                                id: string;
                                label: string;
                                icon: string;
                                checked: boolean;
                            }

                            const [contentTypes, setContentTypes] = useState<ContentTypeItem[]>([
                                { id: 'text', label: 'Text', icon: 'text', checked: false },
                                { id: 'photo', label: 'Photo', icon: 'photo', checked: true },
                                // ... more items
                            ]);

                            const handleChange = (id: string, checked: boolean) => {
                                setContentTypes(prev => 
                                    prev.map(item => item.id === id ? { ...item, checked } : item)
                                );
                            };

                            // Use the data-driven API
                            <OverflowStack<ContentTypeItem>
                                itemsData={contentTypes}
                                max={3}
                                indicatorStyle="dots"
                                renderVisibleItem={(data) => (
                                    <CheckboxButton
                                        checked={data.checked}
                                        label={{text: data.label, icon: data.icon, hidden: true}}
                                        onChange={(checked) => handleChange(data.id, checked)}
                                    />
                                )}
                                renderHiddenItem={(data) => (
                                    <Checkbox
                                        checked={data.checked}
                                        label={{text: data.label}}
                                        onChange={(checked) => handleChange(data.id, checked)}
                                    />
                                )}
                            />
                        `}
                    </Markup.ReactMarkupCode>
                </Markup.ReactMarkup>

                <h3 className="docs-page__h3">Props</h3>
                <p className="docs-page__paragraph">
                    <strong>Note:</strong> OverflowStack supports two APIs: Simple (using <code>items</code>) and
                    Data-Driven (using <code>itemsData</code>). Use the Simple API for straightforward cases. Use the
                    Data-Driven API when you need different rendering in the stack vs popover.
                </p>
                <PropsList>
                    <Prop
                        name="items"
                        isRequired={false}
                        type="Array<React.ReactNode>"
                        default="/"
                        description="[Simple API] Array of items to display in the stack. Can be any React components. Use this OR itemsData, not both."
                    />
                    <Prop
                        name="itemsData"
                        isRequired={false}
                        type="Array<T>"
                        default="/"
                        description="[Data-Driven API] Array of data objects to render. Use with renderVisibleItem and renderHiddenItem for different rendering in stack vs popover. Use this OR items, not both."
                    />
                    <Prop
                        name="renderVisibleItem"
                        isRequired={false}
                        type="(data: T, index: number) => React.ReactNode"
                        default="/"
                        description="[Data-Driven API] Render function for items visible in the stack. Required when using itemsData."
                    />
                    <Prop
                        name="renderHiddenItem"
                        isRequired={false}
                        type="(data: T, index: number) => React.ReactNode"
                        default="/"
                        description="[Data-Driven API] Render function for items in the popover. If not provided, renderVisibleItem will be used for both."
                    />
                    <Prop
                        name="max"
                        isRequired={false}
                        type="number | 'show-all'"
                        default="4"
                        description="Maximum number of items to show inline. If exceeded, a '+N' indicator is shown. Use 'show-all' to display all items without an indicator. Only used when overflow='fixed'."
                    />
                    <Prop
                        name="overflow"
                        isRequired={false}
                        type="'fixed' | 'auto'"
                        default="'fixed'"
                        description="Overflow behavior. 'fixed' uses the max prop to determine visible items. 'auto' dynamically calculates how many items fit based on available container space."
                    />
                    <Prop
                        name="gap"
                        isRequired={false}
                        type="'compact' | 'loose' | 'none'"
                        default="'compact'"
                        description="Gap between items. compact: 4px, loose: 8px, none: 0px. Ignored when overlap is true."
                    />
                    <Prop
                        name="overlap"
                        isRequired={false}
                        type="boolean"
                        default="false"
                        description="Whether items should overlap (like avatars). When true, items have negative margin and expand on hover."
                    />
                    <Prop
                        name="showOnlyHiddenInPopover"
                        isRequired={false}
                        type="boolean"
                        default="false"
                        description="Show only hidden items in popover (true) or all items (false)."
                    />
                    <Prop
                        name="indicatorStyle"
                        isRequired={false}
                        type="'count' | 'dots'"
                        default="'count'"
                        description="Style of the overflow indicator. 'count' shows '+N' with the number of hidden items, 'dots' shows a dots icon without the count."
                    />
                    <Prop
                        name="renderIndicator"
                        isRequired={false}
                        type="(count: number) => React.ReactNode"
                        default="/"
                        description="Custom render function for the '+N' indicator button. If not provided, a default button will be rendered."
                    />
                    <Prop
                        name="renderPopoverItem"
                        isRequired={false}
                        type="(item: React.ReactNode, index: number) => React.ReactNode"
                        default="/"
                        description="[Simple API] Custom render function for items in the popover. If not provided, items will be rendered as-is. Only used with 'items' prop."
                    />
                    <Prop
                        name="onIndicatorClick"
                        isRequired={false}
                        type="() => void"
                        default="/"
                        description="Custom onClick handler for the '+N' button. If provided, popover will not be shown automatically."
                    />
                    <Prop
                        name="indicatorRadius"
                        isRequired={false}
                        type="'x-small' | 'small' | 'medium' | 'full'"
                        default="'full'"
                        description="Border radius for the indicator button."
                    />
                    <Prop
                        name="className"
                        isRequired={false}
                        type="string"
                        default="/"
                        description="Additional className for the container."
                    />
                </PropsList>
            </section>
        );
    }
}
