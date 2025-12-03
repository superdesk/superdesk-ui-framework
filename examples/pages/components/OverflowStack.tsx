import * as React from 'react';
import * as Markup from '../../js/react';
import {
    PropsList,
    Prop,
    OverflowStack,
    Tag,
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
    checkboxValues: {
        value1: boolean;
        value2: boolean;
        value3: boolean;
        value4: boolean;
        value5: boolean;
        value6: boolean;
    };
    contentTypes: ContentTypeItem[];
}

export default class OverflowStackDoc extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {
            customIndicatorCount: 0,
            checkboxValues: {
                value1: false,
                value2: false,
                value3: false,
                value4: false,
                value5: true,
                value6: false,
            },
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

        const checkbuttonItems = [
            <CheckboxButton
                key="1"
                label={{text: 'Text', icon: 'text', hidden: true}}
                checked={this.state.checkboxValues.value1}
                onChange={(value) =>
                    this.setState((prevState) => ({checkboxValues: {...prevState.checkboxValues, value1: value}}))
                }
            />,
            <CheckboxButton
                key="2"
                label={{text: 'Photo', icon: 'photo', hidden: true}}
                checked={this.state.checkboxValues.value2}
                onChange={(value) =>
                    this.setState((prevState) => ({checkboxValues: {...prevState.checkboxValues, value2: value}}))
                }
            />,
            <CheckboxButton
                key="3"
                label={{text: 'Video', icon: 'video', hidden: true}}
                checked={this.state.checkboxValues.value3}
                onChange={(value) =>
                    this.setState((prevState) => ({checkboxValues: {...prevState.checkboxValues, value3: value}}))
                }
            />,
            <CheckboxButton
                key="4"
                label={{text: 'Slideshow', icon: 'slideshow', hidden: true}}
                checked={this.state.checkboxValues.value4}
                onChange={(value) =>
                    this.setState((prevState) => ({checkboxValues: {...prevState.checkboxValues, value4: value}}))
                }
            />,
            <CheckboxButton
                key="5"
                label={{text: 'Audio', icon: 'audio'}}
                checked={this.state.checkboxValues.value5}
                onChange={(value) =>
                    this.setState((prevState) => ({checkboxValues: {...prevState.checkboxValues, value5: value}}))
                }
            />,
            <CheckboxButton
                key="6"
                label={{text: 'Composite', icon: 'composite'}}
                checked={this.state.checkboxValues.value6}
                onChange={(value) =>
                    this.setState((prevState) => ({checkboxValues: {...prevState.checkboxValues, value6: value}}))
                }
            />,
        ];

        return (
            <section className="docs-page__container">
                <h2 className="docs-page__h2">OverflowStack</h2>

                <Markup.ReactMarkupCodePreview>
                    {`
                        <OverflowStack
                            type="simple"
                            items={[
                                <Label text="Item 1" type="primary" />,
                                <Label text="Item 2" type="success" />,
                                <Label text="Item 3" type="warning" />,
                            ]}
                            overflow={{
                                type: 'fixed',
                                max: 2,
                            }}
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
                            <OverflowStack
                                items={labelItems}
                                overflow={{
                                    type: 'fixed',
                                    max: 3,
                                }}
                                type="simple"
                            />
                        </div>

                        <p className="docs-page__paragraph">// Tag Stack (max 4 items)</p>
                        <div className="docs-page__content-row">
                            <OverflowStack
                                items={tagItems}
                                overflow={{
                                    type: 'fixed',
                                    max: 3,
                                }}
                                type="simple"
                            />
                        </div>

                        <p className="docs-page__paragraph">// CheckButton Stack (show only hidden in popover)</p>
                        <div className="docs-page__content-row">
                            <OverflowStack
                                type="simple"
                                items={checkbuttonItems}
                                showOnlyHiddenInPopover={true}
                                overflow={{
                                    type: 'fixed',
                                    max: 4,
                                }}
                            />
                        </div>
                    </Markup.ReactMarkupPreview>
                    <Markup.ReactMarkupCode>
                        {`
                            // Badge Stack (max 3 items)
                            <OverflowStack
                                type="simple"
                                items={[
                                    <Label size='large' key="1" text="Breaking News" type="primary" />,
                                    <Label size='large' key="2" text="Sports" type="success" />,
                                    <Label size='large' key="3" text="Entertainment" type="warning" />,
                                    <Label size='large' key="4" text="Politics" type="highlight" />,
                                    <Label size='large' key="5" text="Technology" type="primary" />,
                                    <Label size='large' key="6" text="Health" type="success" />,
                                ]}
                                overflow={{
                                    type: 'fixed',
                                    max: 3,
                                }}
                            />

                            // Tag Stack (max 4 items)
                            <OverflowStack
                                type="simple"
                                items={[
                                    <Tag key="1" text="React" />,
                                    <Tag key="2" text="TypeScript" />,
                                    <Tag key="3" text="JavaScript" />,
                                    <Tag key="4" text="HTML" />,
                                    <Tag key="5" text="CSS" />,
                                ]}
                                overflow={{
                                    type: 'fixed',
                                    max: 3,
                                }}
                            />

                            // CheckButton Stack (show only hidden in popover)
                            <OverflowStack
                                type="simple"
                                items={[
                                    <CheckboxButton key="1" label={{text: 'Text', icon: 'text', hidden: true}} checked={value1} onChange={(value) => setValue1(value)} />,
                                    <CheckboxButton key="2" label={{text: 'Photo', icon: 'photo', hidden: true}} checked={value2} onChange={(value) => setValue2(value)} />,
                                    <CheckboxButton key="3" label={{text: 'Video', icon: 'video', hidden: true}} checked={value3} onChange={(value) => setValue3(value)} />,
                                    <CheckboxButton key="4" label={{text: 'Slideshow', icon: 'slideshow', hidden: true}} checked={value4} onChange={(value) => setValue4(value)} />,
                                    <CheckboxButton key="5" label={{text: 'Audio', icon: 'audio'}} checked={value5} onChange={(value) => setValue5(value)} />,
                                    <CheckboxButton key="6" label={{text: 'Composite', icon: 'composite'}} checked={value6} onChange={(value) => setValue6(value)} />,
                                ]}
                                showOnlyHiddenInPopover={true}
                                overflow={{
                                    type: 'fixed',
                                    max: 4,
                                }}
                            />
                        `}
                    </Markup.ReactMarkupCode>
                </Markup.ReactMarkup>

                <h3 className="docs-page__h3 docs-page__h3--small-top-m">Gap Variations</h3>
                <Markup.ReactMarkup>
                    <Markup.ReactMarkupPreview>
                        <p className="docs-page__paragraph">// Compact (default)</p>
                        <div className="docs-page__content-row">
                            <OverflowStack
                                items={tagItems.slice(0, 4)}
                                gap="compact"
                                overflow={{
                                    type: 'fixed',
                                    max: 'show-all',
                                }}
                                type="simple"
                            />
                        </div>

                        <p className="docs-page__paragraph">// Loose</p>
                        <div className="docs-page__content-row">
                            <OverflowStack
                                items={tagItems.slice(0, 4)}
                                gap="loose"
                                overflow={{
                                    type: 'fixed',
                                    max: 'show-all',
                                }}
                                type="simple"
                            />
                        </div>

                        <p className="docs-page__paragraph">
                            // None (no gap; should only be used in rare cases where components have already have visual
                            spacing)
                        </p>
                        <div className="docs-page__content-row">
                            <OverflowStack
                                items={tagItems.slice(0, 4)}
                                gap="none"
                                overflow={{
                                    type: 'fixed',
                                    max: 'show-all',
                                }}
                                type="simple"
                            />
                        </div>
                    </Markup.ReactMarkupPreview>
                    <Markup.ReactMarkupCode>
                        {`
                            // Compact (default)
                            <OverflowStack
                                type="simple"
                                items={tagItems.slice(0, 4)}
                                gap="compact"
                                overflow={{
                                    type: 'fixed',
                                    max: 'show-all',
                                }}
                            />

                            // Loose
                            <OverflowStack
                                type="simple"
                                items={tagItems.slice(0, 4)}
                                gap="loose"
                                overflow={{
                                    type: 'fixed',
                                    max: 'show-all',
                                }}
                            />

                            // None (no gap; should only be used in rare cases where components have already have visual spacing)
                            <OverflowStack
                                type="simple"
                                items={tagItems.slice(0, 4)}
                                gap="none"
                                overflow={{
                                    type: 'fixed',
                                    max: 'show-all',
                                }}
                            />
                        `}
                    </Markup.ReactMarkupCode>
                </Markup.ReactMarkup>

                <h3 className="docs-page__h3 docs-page__h3--small-top-m">Overlap Mode</h3>
                <Markup.ReactMarkup>
                    <Markup.ReactMarkupPreview>
                        <p className="docs-page__paragraph">// Overlapping items - items move up on hover</p>
                        <div className="docs-page__content-row">
                            <OverflowStack
                                items={labelItems}
                                overflow={{
                                    type: 'fixed',
                                    max: 4,
                                }}
                                type="simple"
                                overlap={true}
                            />
                        </div>
                    </Markup.ReactMarkupPreview>
                    <Markup.ReactMarkupCode>
                        {`
                            <OverflowStack
                                type="simple"
                                items={[
                                    <Label size='large' key="1" text="Breaking News" type="primary" />,
                                    <Label size='large' key="2" text="Sports" type="success" />,
                                    <Label size='large' key="3" text="Entertainment" type="warning" />,
                                    <Label size='large' key="4" text="Politics" type="highlight" />,
                                    <Label size='large' key="5" text="Technology" type="primary" />,
                                    <Label size='large' key="6" text="Health" type="success" />,
                                ]}
                                overflow={{
                                    type: 'fixed',
                                    max: 4,
                                }}
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
                            <OverflowStack
                                items={labelItems}
                                overflow={{
                                    type: 'fixed',
                                    max: 4,
                                }}
                                type="simple"
                                showOnlyHiddenInPopover={false}
                            />
                        </div>

                        <p className="docs-page__paragraph">// Show only hidden items in popover</p>
                        <div className="docs-page__content-row">
                            <OverflowStack
                                items={labelItems}
                                overflow={{
                                    type: 'fixed',
                                    max: 3,
                                }}
                                type="simple"
                                showOnlyHiddenInPopover
                            />
                        </div>
                    </Markup.ReactMarkupPreview>
                    <Markup.ReactMarkupCode>
                        {`
                            // Show all items in popover (default)
                            <OverflowStack
                                type="simple"
                                items={labelItems}
                                overflow={{
                                    type: 'fixed',
                                    max: 3,
                                }}
                                showOnlyHiddenInPopover={false}
                            />

                            // Show only hidden items in popover
                            <OverflowStack
                                type="simple"
                                items={labelItems}
                                overflow={{
                                    type: 'fixed',
                                    max: 3,
                                }}
                                showOnlyHiddenInPopover
                            />
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
                                <OverflowStack
                                    items={labelItems}
                                    overflow={{type: 'auto'}}
                                    type="simple"
                                    indicatorStyle="dots"
                                />
                                <br />
                                <OverflowStack items={tagItems} overflow={{type: 'auto'}} type="simple" />
                            </div>
                            <div className="right-panel p-2"></div>
                        </ResizablePanels>
                        <p className="docs-page__paragraph">// Show only hidden items in popover</p>
                        <ResizablePanels direction="horizontal" secondarySize={{default: 10}}>
                            <div className="left-panel py-3 ps-3 sd-border--medium radius-lg me-0-5">
                                <OverflowStack
                                    items={labelItems}
                                    overflow={{type: 'auto'}}
                                    type="simple"
                                    showOnlyHiddenInPopover={true}
                                    indicatorStyle="dots"
                                />
                                <br />
                                <OverflowStack
                                    items={tagItems}
                                    overflow={{type: 'auto'}}
                                    type="simple"
                                    showOnlyHiddenInPopover={true}
                                />
                            </div>
                            <div className="right-panel p-2"></div>
                        </ResizablePanels>
                    </Markup.ReactMarkupPreview>
                    <Markup.ReactMarkupCode>
                        {`
                            // Show all items in popover (default)
                            <ResizablePanels direction="horizontal" secondarySize={{default: 10}}>
                                <div className="left-panel py-3 ps-3 sd-border--medium radius-lg me-0-5">
                                    <OverflowStack
                                        type="simple"
                                        items={labelItems}
                                        overflow={{type: 'auto'}}
                                        indicatorStyle="dots"
                                    />
                                    <br />
                                    <OverflowStack
                                        type="simple"
                                        items={tagItems}
                                        overflow={{type: 'auto'}}
                                    />
                                </div>
                                <div className="right-panel p-2"></div>
                            </ResizablePanels>

                            // Show only hidden items in popover
                            <ResizablePanels direction="horizontal" secondarySize={{default: 10}}>
                                <div className="left-panel py-3 ps-3 sd-border--medium radius-lg me-0-5">
                                    <OverflowStack
                                        type="simple"
                                        items={labelItems}
                                        overflow={{type: 'auto'}}
                                        showOnlyHiddenInPopover={true}
                                        indicatorStyle="dots"
                                    />
                                    <br />
                                    <OverflowStack
                                        type="simple"
                                        items={tagItems}
                                        overflow={{type: 'auto'}}
                                        showOnlyHiddenInPopover={true}
                                    />
                                </div>
                                <div className="right-panel p-2"></div>
                            </ResizablePanels>
                        `}
                    </Markup.ReactMarkupCode>
                </Markup.ReactMarkup>

                <h3 className="docs-page__h3 docs-page__h3--small-top-m">Indicator Style</h3>
                <Markup.ReactMarkup>
                    <Markup.ReactMarkupPreview>
                        <p className="docs-page__paragraph">// Default: Show count "+N"</p>
                        <div className="docs-page__content-row">
                            <OverflowStack
                                items={labelItems}
                                overflow={{max: 3, type: 'fixed'}}
                                type="simple"
                                indicatorStyle="count"
                            />
                        </div>

                        <p className="docs-page__paragraph">// Show dots icon instead of count</p>
                        <div className="docs-page__content-row">
                            <OverflowStack
                                items={labelItems}
                                overflow={{max: 3, type: 'fixed'}}
                                type="simple"
                                indicatorStyle="dots"
                            />
                        </div>
                    </Markup.ReactMarkupPreview>
                    <Markup.ReactMarkupCode>
                        {`
                            // Default: Show count "+N"
                            <OverflowStack
                                type="simple"
                                items={labelItems}
                                overflow={{
                                    type: 'fixed',
                                    max: 3,
                                }}
                                indicatorStyle="count"
                            />

                            // Show dots icon instead of count
                            <OverflowStack
                                type="simple"
                                items={labelItems}
                                overflow={{
                                    type: 'fixed',
                                    max: 3,
                                }}
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
                                overflow={{max: 3, type: 'fixed'}}
                                type="simple"
                                renderIndicator={(count) => <Tag text={`+${count} more`} />}
                            />
                        </div>
                    </Markup.ReactMarkupPreview>
                    <Markup.ReactMarkupCode>
                        {`
                            <OverflowStack
                                type="simple"
                                items={tagItems}
                                overflow={{
                                    type: 'fixed',
                                    max: 3,
                                }}
                                renderIndicator={(count) => (
                                    <Tag text={'+ ' + count + ' more'} />
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
                                overflow={{max: 3, type: 'fixed'}}
                                type="simple"
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
                            // Custom popover item rendering
                            <OverflowStack
                                type="simple"
                                items={labelItems}
                                overflow={{
                                    type: 'fixed',
                                    max: 3,
                                }}
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
                                overflow={{max: 3, type: 'fixed'}}
                                type="simple"
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
                                type="simple"
                                items={labelItems}
                                overflow={{
                                    type: 'fixed',
                                    max: 3,
                                }}
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
                        `}
                    </Markup.ReactMarkupCode>
                </Markup.ReactMarkup>

                <h3 className="docs-page__h3 docs-page__h3--small-top-m">Data-Driven API</h3>
                <p className="docs-page__paragraph">
                    Use itemsData with renderVisibleItem and renderHiddenItem to render items differently in the stack
                    vs popover. Perfect for showing CheckboxButton in stack and Checkbox in popover while maintaining
                    shared state. Try toggling items and opening the popover!
                </p>
                <Markup.ReactMarkup>
                    <Markup.ReactMarkupPreview>
                        <div className="docs-page__content-row">
                            <OverflowStack
                                type="data"
                                indicatorStyle="dots"
                                overflow={{max: 3, type: 'fixed'}}
                                items={this.state.contentTypes}
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
                                type="data"
                                itemsData={contentTypes}
                                overflow={{
                                    type: 'fixed',
                                    max: 3,
                                }}
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
                    <strong>Note:</strong> OverflowStack supports two APIs via the <code>type</code> prop:
                </p>
                <ul>
                    <li>
                        <strong>
                            Simple (<code>type="simple"</code>):
                        </strong>{' '}
                        Use <code>items</code> prop for straightforward cases where items render the same everywhere
                    </li>
                    <li>
                        <strong>
                            Data-Driven (<code>type="data"</code>):
                        </strong>{' '}
                        Use <code>itemsData</code> with <code>renderVisibleItem</code> and <code>renderHiddenItem</code>{' '}
                        when you need different rendering in the stack vs popover
                    </li>
                </ul>
                <PropsList>
                    <Prop
                        name="type"
                        isRequired={true}
                        type="'simple' | 'data'"
                        default="/"
                        description="API mode: 'simple' for using items prop, 'data' for using itemsData with render functions."
                    />
                    <Prop
                        name="items"
                        isRequired={false}
                        type="Array<React.ReactNode>"
                        default="/"
                        description="[Simple API - type='simple'] Array of items to display in the stack. Can be any React components."
                    />
                    <Prop
                        name="itemsData"
                        isRequired={false}
                        type="Array<T>"
                        default="/"
                        description="[Data-Driven API - type='data'] Array of data objects to render. Use with renderVisibleItem and renderHiddenItem."
                    />
                    <Prop
                        name="renderVisibleItem"
                        isRequired={false}
                        type="(data: T, index: number) => React.ReactNode"
                        default="/"
                        description="[Data-Driven API - type='data'] Render function for items visible in the stack. Required when type='data'."
                    />
                    <Prop
                        name="renderHiddenItem"
                        isRequired={false}
                        type="(data: T, index: number) => React.ReactNode"
                        default="/"
                        description="[Data-Driven API - type='data'] Render function for items in the popover. If not provided, renderVisibleItem will be used for both."
                    />
                    <Prop
                        name="overflow"
                        isRequired={false}
                        type="{ type: 'fixed', max?: number | 'show-all' } | { type: 'auto' }"
                        default="{ type: 'fixed', max: 4 }"
                        description="Overflow configuration. For 'fixed' type, max determines visible items (defaults to 4, use 'show-all' for no limit). For 'auto' type, dynamically calculates items based on available space."
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
                        description="[Simple API - type='simple'] Custom render function for items in the popover. If not provided, items will be rendered as-is."
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
                        name="containerClassName"
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
