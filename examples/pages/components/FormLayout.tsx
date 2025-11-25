import * as React from 'react';
import * as Markup from '../../js/react';
import {
    Input,
    CheckGroup,
    Checkbox,
    PropsList,
    Prop,
    Button,
    ButtonGroup,
    TreeSelect,
    Text,
    Container,
    ContentDivider,
    SimpleList,
    SimpleListItem,
} from '../../../app-typescript';
import {FormLayout} from '../../../app-typescript/components/Form/FormLayout';
import {FormGroupV2} from '../../../app-typescript/components/Form/FormGroupV2';
import {FormGroupItem} from '../../../app-typescript/components/Form/FormGroupItem';

interface IState {
    spaces: 'compact' | 'standard' | 'relaxed';
    marginBottom: 'none' | 'spaces';
    showLegend: boolean;
    preserveSpaces: boolean;
    useGrid: boolean;
    showRowLabel: boolean;
    rowLabelEnabled: boolean;
    treeSelectValue: any;
    value1: string;
    value2: string;
    value3: string;
    value4: string;
    value5: string;
    checkbox1: boolean;
    checkbox2: boolean;
    checkbox3: boolean;
}

let treeSelectOptions = [{value: {name: 'Norwegian'}}, {value: {name: 'Suomi'}}, {value: {name: 'English'}}];

export default class FormLayoutDoc extends React.Component<{}, IState> {
    constructor(props) {
        super(props);
        this.state = {
            spaces: 'standard',
            marginBottom: 'none',
            showLegend: true,
            preserveSpaces: true,
            useGrid: true,
            showRowLabel: false,
            rowLabelEnabled: true,
            treeSelectValue: [],
            value1: '',
            value2: '',
            value3: '',
            value4: '',
            value5: '',
            checkbox1: false,
            checkbox2: false,
            checkbox3: false,
        };
    }

    render() {
        return (
            <section className="docs-page__container">
                <h2 className="docs-page__h2">Form Layout</h2>
                <p className="docs-page__paragraph">
                    The Form Layout system consists of three components that work together to create structured,
                    accessible forms:
                </p>
                <div className="docs-page__paragraph">
                    <SimpleList border density="compact">
                        <SimpleListItem stacked gap="small">
                            <strong className="font-mono">&lt;FormLayout&gt;</strong>
                            The container component that wraps form groups and provides spacing, margins, and optional
                            legend. Built on the native HTML fieldset element, it provides semantic grouping and
                            improved accessibility for form elements.
                        </SimpleListItem>
                        <SimpleListItem stacked gap="small">
                            <strong className="font-mono">&lt;FormGroupV2&gt;</strong>
                            Groups form items together, supports both grid and flex layouts.
                        </SimpleListItem>
                        <SimpleListItem stacked gap="small">
                            <strong className="font-mono">&lt;FormGroupItem&gt;</strong>
                            Wraps individual form fields, supports column spanning in grid mode and auto-width in flex
                            mode.
                        </SimpleListItem>
                    </SimpleList>
                </div>

                <h3 className="docs-page__h3 mt-4">Basic Usage</h3>
                <Markup.ReactMarkupCodePreview>
                    {`
                    <FormLayout legend="User Information">
                        <FormGroupV2 grid>
                            <FormGroupItem colSpan={2}>
                                <Input label="Email" value={''} onChange={() => {}} />
                            </FormGroupItem>
                            <FormGroupItem colSpan={2}>
                                <Input label="Password" type="password" value={''} onChange={() => {}} />
                            </FormGroupItem>
                        </FormGroupV2>
                    </FormLayout>
                `}
                </Markup.ReactMarkupCodePreview>

                <h3 className="docs-page__h3">FormLayout Options</h3>
                <div className="docs-page__paragraph mb-3">
                    <p className="mb-2">
                        <strong>Show legend</strong> <code>legend</code> : Adds a semantic fieldset legend for
                        accessibility and visual grouping.
                    </p>
                    <p className="mb-2">
                        <strong>Preserve spaces</strong> <code>preserveSpaces</code> : Reserves space for info/error
                        text on input fields, maintaining consistent spacing even when some fields don't have info text.
                    </p>
                    <p className="mb-2">
                        <strong>Spacing</strong> <code>spaces</code> : Controls the vertical spacing between form groups
                        (FormGroupV2 components). <strong>Compact</strong> uses less spacing, <strong>Standard</strong>{' '}
                        is the default balanced spacing, and <strong>Relaxed</strong> provides more breathing room.
                    </p>
                    <p className="mb-0">
                        <strong>Margin Bottom</strong> <code>marginBottom</code> : Controls the bottom margin of the
                        FormLayout. <strong>None</strong> removes the bottom margin (default). <strong>Spaces</strong>{' '}
                        adds a bottom margin equal to the row gap spacing - this is primarily for situations where two
                        FormLayout components are stacked on top of each other, providing seamless spacing of rows in
                        both FormLayout elements by matching the spacing between FormGroupV2 rows.
                    </p>
                </div>
                <Markup.ReactMarkup>
                    <Markup.ReactMarkupPreview>
                        <div className="docs-page__content-row">
                            <Container className="mb-2 px-2 py-1-5 radius-lg sd-border--light" gap="large">
                                <div className="py-0-5">
                                    <CheckGroup orientation="vertical">
                                        <Checkbox
                                            checked={this.state.showLegend}
                                            label={{text: 'Show legend'}}
                                            onChange={(value) => this.setState({showLegend: value})}
                                        />
                                        <Checkbox
                                            checked={this.state.preserveSpaces}
                                            label={{text: 'Preserve spaces'}}
                                            onChange={(value) => this.setState({preserveSpaces: value})}
                                        />
                                    </CheckGroup>
                                </div>
                                <ContentDivider margin="small" orientation="vertical" type="dotted" />
                                <div className="py-0-5">
                                    <Text size="small" weight="medium" className="mb-1-5">
                                        Spacing:
                                    </Text>
                                    <CheckGroup>
                                        <Checkbox
                                            checked={this.state.spaces === 'compact'}
                                            label={{text: 'Compact'}}
                                            onChange={() => this.setState({spaces: 'compact'})}
                                        />
                                        <Checkbox
                                            checked={this.state.spaces === 'standard'}
                                            label={{text: 'Standard'}}
                                            onChange={() => this.setState({spaces: 'standard'})}
                                        />
                                        <Checkbox
                                            checked={this.state.spaces === 'relaxed'}
                                            label={{text: 'Relaxed'}}
                                            onChange={() => this.setState({spaces: 'relaxed'})}
                                        />
                                    </CheckGroup>
                                </div>
                                <ContentDivider margin="small" orientation="vertical" type="dotted" />
                                <div className="py-0-5">
                                    <Text size="small" weight="medium" className="mb-1-5">
                                        Margin Bottom:
                                    </Text>
                                    <CheckGroup>
                                        <Checkbox
                                            checked={this.state.marginBottom === 'none'}
                                            label={{text: 'None'}}
                                            onChange={() => this.setState({marginBottom: 'none'})}
                                        />
                                        <Checkbox
                                            checked={this.state.marginBottom === 'spaces'}
                                            label={{text: 'Spaces'}}
                                            onChange={() => this.setState({marginBottom: 'spaces'})}
                                        />
                                    </CheckGroup>
                                </div>
                            </Container>

                            <div className="sd-border--medium p-4 radius-lg surface-color-base">
                                <FormLayout
                                    spaces={this.state.spaces}
                                    marginBottom={this.state.marginBottom}
                                    legend={this.state.showLegend ? 'Form Layout Example' : undefined}
                                    preserveSpaces={this.state.preserveSpaces}
                                >
                                    <FormGroupV2 grid>
                                        <FormGroupItem colSpan={2}>
                                            <Input
                                                label="First Name"
                                                value={this.state.value1}
                                                type="text"
                                                onChange={(value) => this.setState({value1: value})}
                                            />
                                        </FormGroupItem>
                                        <FormGroupItem colSpan={2}>
                                            <Input
                                                label="Last Name"
                                                value={this.state.value2}
                                                type="text"
                                                onChange={(value) => this.setState({value2: value})}
                                            />
                                        </FormGroupItem>
                                    </FormGroupV2>
                                    <FormGroupV2 grid>
                                        <FormGroupItem colSpan={2}>
                                            <Input
                                                label="Email"
                                                value={this.state.value3}
                                                type="text"
                                                info="Please enter a valid email address"
                                                onChange={(value) => this.setState({value3: value})}
                                            />
                                        </FormGroupItem>
                                        <FormGroupItem colSpan={2}>
                                            <Input
                                                label="Phone"
                                                value={this.state.value4}
                                                type="text"
                                                info="Include country code"
                                                onChange={(value) => this.setState({value4: value})}
                                            />
                                        </FormGroupItem>
                                    </FormGroupV2>
                                    <FormGroupV2 grid>
                                        <FormGroupItem colSpan={4}>
                                            <Input
                                                label="Address"
                                                value={this.state.value5}
                                                type="text"
                                                info="Street address, city, and postal code"
                                                onChange={(value) => this.setState({value5: value})}
                                            />
                                        </FormGroupItem>
                                    </FormGroupV2>
                                    <FormGroupV2 grid>
                                        <FormGroupItem colSpan={2}>
                                            <Input label="Username" value={''} type="text" onChange={() => {}} />
                                        </FormGroupItem>
                                        <FormGroupItem colSpan={2}>
                                            <Input label="Password" value={''} type="password" onChange={() => {}} />
                                        </FormGroupItem>
                                    </FormGroupV2>
                                </FormLayout>
                                {/* Second FormLayout example */}
                                <FormLayout
                                    spaces={this.state.spaces}
                                    marginBottom={this.state.marginBottom}
                                    preserveSpaces={this.state.preserveSpaces}
                                >
                                    <FormGroupV2 grid>
                                        <FormGroupItem colSpan={2}>
                                            <Input
                                                label="New: First Name"
                                                value={this.state.value1}
                                                type="text"
                                                onChange={(value) => this.setState({value1: value})}
                                            />
                                        </FormGroupItem>
                                        <FormGroupItem colSpan={2}>
                                            <Input
                                                label="New: Last Name"
                                                value={this.state.value2}
                                                type="text"
                                                onChange={(value) => this.setState({value2: value})}
                                            />
                                        </FormGroupItem>
                                    </FormGroupV2>
                                    <FormGroupV2 grid>
                                        <FormGroupItem colSpan={2}>
                                            <Input
                                                label="New: Email"
                                                value={this.state.value3}
                                                type="text"
                                                info="Please enter a valid email address"
                                                onChange={(value) => this.setState({value3: value})}
                                            />
                                        </FormGroupItem>
                                        <FormGroupItem colSpan={2}>
                                            <Input
                                                label="New: Phone"
                                                value={this.state.value4}
                                                type="text"
                                                info="Include country code"
                                                onChange={(value) => this.setState({value4: value})}
                                            />
                                        </FormGroupItem>
                                    </FormGroupV2>
                                    <FormGroupV2 grid>
                                        <FormGroupItem colSpan={4}>
                                            <Input
                                                label="New: Address"
                                                value={this.state.value5}
                                                type="text"
                                                info="Street address, city, and postal code"
                                                onChange={(value) => this.setState({value5: value})}
                                            />
                                        </FormGroupItem>
                                    </FormGroupV2>
                                    <FormGroupV2 grid>
                                        <FormGroupItem colSpan={2}>
                                            <Input label="New: Username" value={''} type="text" onChange={() => {}} />
                                        </FormGroupItem>
                                        <FormGroupItem colSpan={2}>
                                            <Input
                                                label="New: Password"
                                                value={''}
                                                type="password"
                                                onChange={() => {}}
                                            />
                                        </FormGroupItem>
                                    </FormGroupV2>
                                </FormLayout>
                            </div>
                        </div>
                    </Markup.ReactMarkupPreview>
                    <Markup.ReactMarkupCode>{`
                        <FormLayout
                            spaces="${this.state.spaces}"
                            marginBottom="${this.state.marginBottom}"
                            legend="${this.state.showLegend ? 'Form Layout Example' : ''}"
                            preserveSpaces={${this.state.preserveSpaces}}
                        >
                            <FormGroupV2 grid>
                                <FormGroupItem colSpan={2}>
                                    <Input label="First Name" value={''} onChange={() => {}} />
                                </FormGroupItem>
                                <FormGroupItem colSpan={2}>
                                    <Input label="Last Name" value={''} onChange={() => {}} />
                                </FormGroupItem>
                            </FormGroupV2>
                            <FormGroupV2 grid>
                                <FormGroupItem colSpan={2}>
                                    <Input label="Email" value={''} info="Please enter a valid email address" onChange={() => {}} />
                                </FormGroupItem>
                                <FormGroupItem colSpan={2}>
                                    <Input label="Phone" value={''} info="Include country code" onChange={() => {}} />
                                </FormGroupItem>
                            </FormGroupV2>
                            <FormGroupV2 grid>
                                <FormGroupItem colSpan={4}>
                                    <Input label="Address" value={''} info="Street address, city, and postal code" onChange={() => {}} />
                                </FormGroupItem>
                            </FormGroupV2>
                            <FormGroupV2 grid>
                                <FormGroupItem colSpan={2}>
                                    <Input label="Username" value={''} onChange={() => {}} />
                                </FormGroupItem>
                                <FormGroupItem colSpan={2}>
                                    <Input label="Password" type="password" value={''} onChange={() => {}} />
                                </FormGroupItem>
                            </FormGroupV2>
                        </FormLayout>
                        {/* Second FormLayout example */}
                        <FormLayout
                            spaces={this.state.spaces}
                            marginBottom={this.state.marginBottom}
                            preserveSpaces={this.state.preserveSpaces}
                        >
                            <FormGroupV2 grid>
                                <FormGroupItem colSpan={2}>
                                    <Input
                                        label="New: First Name"
                                        value={this.state.value1}
                                        type="text"
                                        onChange={(value) => this.setState({value1: value})}
                                    />
                                </FormGroupItem>
                                <FormGroupItem colSpan={2}>
                                    <Input
                                        label="New: Last Name"
                                        value={this.state.value2}
                                        type="text"
                                        onChange={(value) => this.setState({value2: value})}
                                    />
                                </FormGroupItem>
                            </FormGroupV2>
                            <FormGroupV2 grid>
                                <FormGroupItem colSpan={2}>
                                    <Input
                                        label="New: Email"
                                        value={this.state.value3}
                                        type="text"
                                        info="Please enter a valid email address"
                                        onChange={(value) => this.setState({value3: value})}
                                    />
                                </FormGroupItem>
                                <FormGroupItem colSpan={2}>
                                    <Input
                                        label="New: Phone"
                                        value={this.state.value4}
                                        type="text"
                                        info="Include country code"
                                        onChange={(value) => this.setState({value4: value})}
                                    />
                                </FormGroupItem>
                            </FormGroupV2>
                            <FormGroupV2 grid>
                                <FormGroupItem colSpan={4}>
                                    <Input
                                        label="New: Address"
                                        value={this.state.value5}
                                        type="text"
                                        info="Street address, city, and postal code"
                                        onChange={(value) => this.setState({value5: value})}
                                    />
                                </FormGroupItem>
                            </FormGroupV2>
                            <FormGroupV2 grid>
                                <FormGroupItem colSpan={2}>
                                    <Input
                                        label="New: Username"
                                        value={''}
                                        type="text"
                                        onChange={() => {}}
                                    />
                                </FormGroupItem>
                                <FormGroupItem colSpan={2}>
                                    <Input
                                        label="New: Password"
                                        value={''}
                                        type="password"
                                        onChange={() => {}}
                                    />
                                </FormGroupItem>
                            </FormGroupV2>
                        </FormLayout>
                    `}</Markup.ReactMarkupCode>
                </Markup.ReactMarkup>

                <h3 className="docs-page__h3">FormGroupV2 - Grid Layout</h3>
                <p className="docs-page__paragraph">
                    Grid layout uses a 4-column system. Use <code>colSpan</code> prop on FormGroupItem to control how
                    many columns each item spans (1-4).
                </p>
                <Markup.ReactMarkup>
                    <Markup.ReactMarkupPreview>
                        <div className="docs-page__content-row">
                            <div className="sd-border--medium p-4 radius-lg surface-color-base">
                                <FormLayout>
                                    <FormGroupV2 grid>
                                        <FormGroupItem colSpan={1}>
                                            <Input type="text" label="Col 1" value={''} onChange={() => {}} />
                                        </FormGroupItem>
                                        <FormGroupItem colSpan={1}>
                                            <Input type="text" label="Col 1" value={''} onChange={() => {}} />
                                        </FormGroupItem>
                                        <FormGroupItem colSpan={1}>
                                            <Input type="text" label="Col 1" value={''} onChange={() => {}} />
                                        </FormGroupItem>
                                        <FormGroupItem colSpan={1}>
                                            <Input type="text" label="Col 1" value={''} onChange={() => {}} />
                                        </FormGroupItem>
                                    </FormGroupV2>
                                    <FormGroupV2 grid>
                                        <FormGroupItem colSpan={2}>
                                            <Input type="text" label="Col 2" value={''} onChange={() => {}} />
                                        </FormGroupItem>
                                        <FormGroupItem colSpan={2}>
                                            <Input type="text" label="Col 2" value={''} onChange={() => {}} />
                                        </FormGroupItem>
                                    </FormGroupV2>
                                    <FormGroupV2 grid>
                                        <FormGroupItem colSpan={3}>
                                            <Input type="text" label="Col 3" value={''} onChange={() => {}} />
                                        </FormGroupItem>
                                        <FormGroupItem colSpan={1}>
                                            <Input type="text" label="Col 1" value={''} onChange={() => {}} />
                                        </FormGroupItem>
                                    </FormGroupV2>
                                    <FormGroupV2 grid>
                                        <FormGroupItem colSpan={4}>
                                            <Input
                                                type="text"
                                                label="Col 4 (Full Width)"
                                                value={''}
                                                onChange={() => {}}
                                            />
                                        </FormGroupItem>
                                    </FormGroupV2>
                                </FormLayout>
                            </div>
                        </div>
                    </Markup.ReactMarkupPreview>
                    <Markup.ReactMarkupCode>{`
                        <FormLayout>
                            <FormGroupV2 grid>
                                <FormGroupItem colSpan={1}>
                                    <Input type='text' label="Col 1" value={''} onChange={() => {}} />
                                </FormGroupItem>
                                <FormGroupItem colSpan={1}>
                                    <Input type='text' label="Col 1" value={''} onChange={() => {}} />
                                </FormGroupItem>
                                <FormGroupItem colSpan={1}>
                                    <Input type='text' label="Col 1" value={''} onChange={() => {}} />
                                </FormGroupItem>
                                <FormGroupItem colSpan={1}>
                                    <Input type='text' label="Col 1" value={''} onChange={() => {}} />
                                </FormGroupItem>
                            </FormGroupV2>
                            <FormGroupV2 grid>
                                <FormGroupItem colSpan={2}>
                                    <Input type='text' label="Col 2" value={''} onChange={() => {}} />
                                </FormGroupItem>
                                <FormGroupItem colSpan={2}>
                                    <Input type='text' label="Col 2" value={''} onChange={() => {}} />
                                </FormGroupItem>
                            </FormGroupV2>
                            <FormGroupV2 grid>
                                <FormGroupItem colSpan={3}>
                                    <Input type='text' label="Col 3" value={''} onChange={() => {}} />
                                </FormGroupItem>
                                <FormGroupItem colSpan={1}>
                                    <Input type='text' label="Col 1" value={''} onChange={() => {}} />
                                </FormGroupItem>
                            </FormGroupV2>
                            <FormGroupV2 grid>
                                <FormGroupItem colSpan={4}>
                                    <Input type='text' label="Col 4 (Full Width)" value={''} onChange={() => {}} />
                                </FormGroupItem>
                            </FormGroupV2>
                        </FormLayout>
                    `}</Markup.ReactMarkupCode>
                </Markup.ReactMarkup>

                <h3 className="docs-page__h3">FormGroupV2 - Flex Layout</h3>
                <p className="docs-page__paragraph">
                    Flex layout distributes items evenly. Use <code>autoWidth</code> prop on FormGroupItem to let items
                    size based on their content.
                </p>
                <Markup.ReactMarkup>
                    <Markup.ReactMarkupPreview>
                        <div className="docs-page__content-row">
                            <div className="sd-border--medium p-4 radius-lg surface-color-base">
                                <FormLayout>
                                    <FormGroupV2>
                                        <FormGroupItem>
                                            <Input type="text" label="Item 1" value={''} onChange={() => {}} />
                                        </FormGroupItem>
                                        <FormGroupItem>
                                            <Input type="text" label="Item 2" value={''} onChange={() => {}} />
                                        </FormGroupItem>
                                        <FormGroupItem>
                                            <Input type="text" label="Item 3" value={''} onChange={() => {}} />
                                        </FormGroupItem>
                                    </FormGroupV2>
                                    <FormGroupV2>
                                        <FormGroupItem>
                                            <Input type="text" label="Flex Item" value={''} onChange={() => {}} />
                                        </FormGroupItem>
                                        <FormGroupItem autoWidth>
                                            <ButtonGroup>
                                                <Button text="Test" onClick={() => {}} type="secondary" />
                                                <Button text="Test" onClick={() => {}} type="primary" />
                                            </ButtonGroup>
                                        </FormGroupItem>
                                    </FormGroupV2>
                                </FormLayout>
                            </div>
                        </div>
                    </Markup.ReactMarkupPreview>
                    <Markup.ReactMarkupCode>{`
                        <FormLayout>
                            <FormGroupV2>
                                <FormGroupItem>
                                    <Input type='text' label="Item 1" value={''} onChange={() => {}} />
                                </FormGroupItem>
                                <FormGroupItem>
                                    <Input type='text' label="Item 2" value={''} onChange={() => {}} />
                                </FormGroupItem>
                                <FormGroupItem>
                                    <Input type='text' label="Item 3" value={''} onChange={() => {}} />
                                </FormGroupItem>
                            </FormGroupV2>
                            <FormGroupV2>
                                <FormGroupItem>
                                    <Input type='text' label="Flex Item" value={''} onChange={() => {}} />
                                </FormGroupItem>
                                <FormGroupItem autoWidth>
                                    <ButtonGroup>
                                        <Button text="Submit" onClick={() => {}} type="primary" />
                                        <Button text="Cancel" onClick={() => {}} type="tertiary" />
                                    </ButtonGroup>
                                </FormGroupItem>
                            </FormGroupV2>
                        </FormLayout>
                    `}</Markup.ReactMarkupCode>
                </Markup.ReactMarkup>

                <h3 className="docs-page__h3">FormGroupV2 - Row Label</h3>
                <p className="docs-page__paragraph">
                    Use <code>rowLabel</code> to add a label for an entire form group row.
                </p>
                <Markup.ReactMarkup>
                    <Markup.ReactMarkupPreview>
                        <div className="docs-page__content-row">
                            <Container className="mb-2 px-2 py-1-5 radius-lg sd-border--light" gap="large">
                                <Checkbox
                                    checked={this.state.rowLabelEnabled}
                                    label={{text: 'Show row label'}}
                                    onChange={(value) => this.setState({rowLabelEnabled: value})}
                                />
                            </Container>
                            <div className="sd-border--medium p-4 radius-lg surface-color-base">
                                <FormLayout preserveSpaces>
                                    <FormGroupV2 grid>
                                        <FormGroupItem colSpan={2}>
                                            <Input
                                                label="Name"
                                                value={this.state.value1}
                                                type="text"
                                                onChange={(value) => this.setState({value1: value})}
                                            />
                                        </FormGroupItem>
                                        <FormGroupItem colSpan={2}>
                                            <Input
                                                label="Email"
                                                value={this.state.value2}
                                                type="text"
                                                onChange={(value) => this.setState({value2: value})}
                                            />
                                        </FormGroupItem>
                                    </FormGroupV2>
                                    <FormGroupV2
                                        grid
                                        rowLabel={this.state.rowLabelEnabled ? 'Preferences' : undefined}
                                        className="mb-1"
                                    >
                                        <FormGroupItem colSpan={4}>
                                            <CheckGroup>
                                                <Checkbox
                                                    checked={this.state.checkbox1}
                                                    label={{text: 'Option 1'}}
                                                    onChange={(value) => this.setState({checkbox1: value})}
                                                />
                                                <Checkbox
                                                    checked={this.state.checkbox2}
                                                    label={{text: 'Option 2'}}
                                                    onChange={(value) => this.setState({checkbox2: value})}
                                                />
                                                <Checkbox
                                                    checked={this.state.checkbox3}
                                                    label={{text: 'Option 3'}}
                                                    onChange={(value) => this.setState({checkbox3: value})}
                                                />
                                            </CheckGroup>
                                        </FormGroupItem>
                                    </FormGroupV2>
                                    <FormGroupV2 grid>
                                        <FormGroupItem colSpan={4}>
                                            <Input
                                                label="Additional Information"
                                                value={this.state.value3}
                                                type="text"
                                                onChange={(value) => this.setState({value3: value})}
                                            />
                                        </FormGroupItem>
                                    </FormGroupV2>
                                </FormLayout>
                            </div>
                        </div>
                    </Markup.ReactMarkupPreview>
                    <Markup.ReactMarkupCode>{`
                        <FormLayout>
                            <FormGroupV2 grid>
                                <FormGroupItem colSpan={2}>
                                    <Input label="Name" value={''} onChange={() => {}} />
                                </FormGroupItem>
                                <FormGroupItem colSpan={2}>
                                    <Input label="Email" value={''} onChange={() => {}} />
                                </FormGroupItem>
                            </FormGroupV2>
                            <FormGroupV2 grid${this.state.rowLabelEnabled ? ' rowLabel="Preferences"' : ''}  className="mb-1-5">
                                <FormGroupItem colSpan={4}>
                                    <CheckGroup>
                                        <Checkbox checked={false} label={{text: 'Option 1'}} onChange={() => {}} />
                                        <Checkbox checked={false} label={{text: 'Option 2'}} onChange={() => {}} />
                                        <Checkbox checked={false} label={{text: 'Option 3'}} onChange={() => {}} />
                                    </CheckGroup>
                                </FormGroupItem>
                            </FormGroupV2>
                            <FormGroupV2 grid>
                                <FormGroupItem colSpan={4}>
                                    <Input label="Additional Information" value={''} onChange={() => {}} />
                                </FormGroupItem>
                            </FormGroupV2>
                        </FormLayout>
                    `}</Markup.ReactMarkupCode>
                </Markup.ReactMarkup>

                <h3 className="docs-page__h3">Complete Example</h3>
                <p className="docs-page__paragraph">
                    A complete form example showing multiple form groups with different layouts and options.
                </p>
                <Markup.ReactMarkup>
                    <Markup.ReactMarkupPreview>
                        <div className="docs-page__content-row">
                            <div className="sd-border--medium p-4 radius-lg surface-color-base">
                                <FormLayout preserveSpaces legend="User Registration">
                                    <FormGroupV2 grid>
                                        <FormGroupItem colSpan={2}>
                                            <Input
                                                label="First Name"
                                                value={this.state.value1}
                                                type="text"
                                                required={true}
                                                onChange={(value) => this.setState({value1: value})}
                                            />
                                        </FormGroupItem>
                                        <FormGroupItem colSpan={2}>
                                            <Input
                                                label="Last Name"
                                                value={this.state.value2}
                                                type="text"
                                                onChange={(value) => this.setState({value2: value})}
                                            />
                                        </FormGroupItem>
                                    </FormGroupV2>
                                    <FormGroupV2 grid>
                                        <FormGroupItem colSpan={4}>
                                            <Input
                                                label="Email"
                                                value={this.state.value3}
                                                type="text"
                                                onChange={(value) => this.setState({value3: value})}
                                            />
                                        </FormGroupItem>
                                    </FormGroupV2>
                                    <FormGroupV2 grid>
                                        <FormGroupItem colSpan={2}>
                                            <Input
                                                label="Password"
                                                value={this.state.value4}
                                                type="password"
                                                required={true}
                                                info="Password must be at least 8 characters"
                                                onChange={(value) => this.setState({value4: value})}
                                            />
                                        </FormGroupItem>
                                        <FormGroupItem colSpan={2}>
                                            <Input
                                                label="Confirm Password"
                                                value={this.state.value5}
                                                type="password"
                                                required={true}
                                                onChange={(value) => this.setState({value5: value})}
                                            />
                                        </FormGroupItem>
                                    </FormGroupV2>
                                    <FormGroupV2 grid>
                                        <FormGroupItem colSpan={4}>
                                            <TreeSelect
                                                kind="synchronous"
                                                value={this.state.treeSelectValue}
                                                getOptions={() => treeSelectOptions}
                                                getLabel={(item) => item.name}
                                                getId={(item) => item.name}
                                                allowMultiple
                                                sortable
                                                label="Languages"
                                                onChange={(value) => this.setState({treeSelectValue: value})}
                                                placeholder="Add languages"
                                                width="medium"
                                            />
                                        </FormGroupItem>
                                    </FormGroupV2>
                                    <FormGroupV2 rowLabel="Additional fields">
                                        <FormGroupItem>
                                            <Input label="Field 1" value={''} type="text" onChange={() => {}} />
                                        </FormGroupItem>
                                        <FormGroupItem autoWidth>
                                            <ButtonGroup>
                                                <Button
                                                    iconOnly
                                                    icon="plus-large"
                                                    tooltip="Add field"
                                                    text="Add field"
                                                    onClick={() => {}}
                                                    type="tertiary"
                                                />
                                            </ButtonGroup>
                                        </FormGroupItem>
                                    </FormGroupV2>
                                </FormLayout>
                            </div>
                        </div>
                    </Markup.ReactMarkupPreview>
                    <Markup.ReactMarkupCode>{`
                        <FormLayout preserveSpaces legend="User Registration">
                            <FormGroupV2 grid>
                                <FormGroupItem colSpan={2}>
                                    <Input label="First Name" value={''} type="text" required={true} onChange={() => {}} />
                                </FormGroupItem>
                                <FormGroupItem colSpan={2}>
                                    <Input label="Last Name" value={''} type="text" onChange={() => {}} />
                                </FormGroupItem>
                            </FormGroupV2>
                            <FormGroupV2 grid>
                                <FormGroupItem colSpan={4}>
                                    <Input label="Email" value={''} type="text" onChange={() => {}} />
                                </FormGroupItem>
                            </FormGroupV2>
                            <FormGroupV2 grid>
                                <FormGroupItem colSpan={2}>
                                    <Input 
                                        label="Password" 
                                        value={''} 
                                        type="password" 
                                        required={true}
                                        info="Password must be at least 8 characters"
                                        onChange={() => {}} 
                                    />
                                </FormGroupItem>
                                <FormGroupItem colSpan={2}>
                                    <Input 
                                        label="Confirm Password" 
                                        value={''} 
                                        type="password" 
                                        required={true}
                                        onChange={() => {}} 
                                    />
                                </FormGroupItem>
                            </FormGroupV2>
                            <FormGroupV2 grid rowLabel="Language Preferences">
                                <FormGroupItem colSpan={4}>
                                    <TreeSelect
                                        kind="synchronous"
                                        value={[]}
                                        getOptions={() => options}
                                        getLabel={(item) => item.name}
                                        getId={(item) => item.name}
                                        allowMultiple
                                        sortable
                                        label="Languages"
                                        onChange={() => {}}
                                        placeholder="Add languages"
                                        width="medium"
                                    />
                                </FormGroupItem>
                            </FormGroupV2>
                            <FormGroupV2>
                                <FormGroupItem>
                                    <Input label="Additional Notes" value={''} type="text" onChange={() => {}} />
                                </FormGroupItem>
                                <FormGroupItem autoWidth>
                                    <ButtonGroup>
                                        <Button text="Submit" onClick={() => {}} type="primary" />
                                        <Button text="Cancel" onClick={() => {}} type="tertiary" />
                                    </ButtonGroup>
                                </FormGroupItem>
                            </FormGroupV2>
                        </FormLayout>
                    `}</Markup.ReactMarkupCode>
                </Markup.ReactMarkup>

                <h3 className="docs-page__h3">Best Practices</h3>
                <div className="docs-page__paragraph">
                    <SimpleList border density="compact">
                        <SimpleListItem stacked gap="small">
                            <p>
                                <strong>Use multiple FormGroupV2 components</strong> to logically separate form
                                sections. This is the recommended default pattern.
                            </p>
                        </SimpleListItem>
                        <SimpleListItem stacked gap="small">
                            <p>
                                <strong>Use grid layout</strong> when you need precise control over column widths and
                                alignment.
                            </p>
                        </SimpleListItem>
                        <SimpleListItem stacked gap="small">
                            <p>
                                <strong>Use flex layout</strong> when items should distribute evenly or when you need
                                auto-width items (like button groups).
                            </p>
                        </SimpleListItem>
                        <SimpleListItem stacked gap="small">
                            <p>
                                <strong>Set preserveSpaces</strong> to maintain consistent spacing when form fields have
                                varying amounts of info/error text.
                            </p>
                        </SimpleListItem>
                        <SimpleListItem stacked gap="small">
                            <p>
                                <strong>Use legends</strong> to provide semantic grouping and improve accessibility.
                            </p>
                        </SimpleListItem>
                        <SimpleListItem stacked gap="small">
                            <p>
                                <strong>Use rowLabel</strong> for form groups that need a descriptive label (e.g.,
                                checkbox groups).
                            </p>
                        </SimpleListItem>
                        <SimpleListItem stacked gap="small">
                            <p>
                                <strong>Use className sparingly</strong> - The className prop should only be used for
                                specific styling needs that cannot be achieved with the available props. For general
                                layout control, spacing, and styling, always prefer using the provided props (spaces,
                                marginBottom, grid, colSpan, etc.) instead of custom CSS classes. This ensures
                                consistency and maintainability.
                            </p>
                        </SimpleListItem>
                    </SimpleList>
                </div>

                <h3 className="docs-page__h3 mt-4">FormLayout Props</h3>
                <PropsList>
                    <Prop
                        name="children"
                        isRequired={true}
                        type="React.ReactNode"
                        default="/"
                        description="Form groups and form items to be rendered inside the layout."
                    />
                    <Prop
                        name="spaces"
                        isRequired={false}
                        type="'compact' | 'standard' | 'relaxed'"
                        default="'standard'"
                        description="Spacing between form elements. Defaults to 'standard'."
                    />
                    <Prop
                        name="marginBottom"
                        isRequired={false}
                        type="'none' | 'spaces'"
                        default="'none'"
                        description="Bottom margin for the form layout. 'spaces' adds a bottom margin equal to the row gap. Defaults to 'none'."
                    />
                    <Prop
                        name="legend"
                        isRequired={false}
                        type="string"
                        default="/"
                        description="Optional legend for the form layout/fieldset. Can be used to group items together semantically."
                    />
                    <Prop
                        name="className"
                        isRequired={false}
                        type="string"
                        default="/"
                        description="Additional CSS class names to apply to the form layout. Should only be used for specific styling needs that cannot be achieved with the available props. For general layout control, use the provided props (spaces, marginBottom, etc.) instead."
                    />
                    <Prop
                        name="preserveSpaces"
                        isRequired={false}
                        type="boolean"
                        default="false"
                        description="Reserve space for info text on input fields regardless of whether they are present. Useful for maintaining consistent spacing."
                    />
                </PropsList>

                <h3 className="docs-page__h3">FormGroupV2 Props</h3>
                <PropsList>
                    <Prop
                        name="children"
                        isRequired={true}
                        type="React.ReactNode"
                        default="/"
                        description="Form items to be rendered inside the group."
                    />
                    <Prop
                        name="grid"
                        isRequired={false}
                        type="boolean"
                        default="false"
                        description="Enable grid layout mode. When true, FormGroupItem components can use colSpan prop. When false, uses flex layout."
                    />
                    <Prop
                        name="rowLabel"
                        isRequired={false}
                        type="string"
                        default="/"
                        description="Optional label for the entire form group row. Useful for checkbox groups and similar components."
                    />
                    <Prop
                        name="inlineLabels"
                        isRequired={false}
                        type="boolean"
                        default="false"
                        description="Position labels inline. Currently defaults to false."
                    />
                    <Prop
                        name="className"
                        isRequired={false}
                        type="string"
                        default="/"
                        description="Additional CSS class names to apply to the form group. Should only be used for specific styling needs that cannot be achieved with the available props. For general layout control, use the provided props (grid, rowLabel, etc.) instead."
                    />
                </PropsList>

                <h3 className="docs-page__h3">FormGroupItem Props</h3>
                <PropsList>
                    <Prop
                        name="children"
                        isRequired={true}
                        type="React.ReactNode"
                        default="/"
                        description="Form field component to be rendered inside the item."
                    />
                    <Prop
                        name="colSpan"
                        isRequired={false}
                        type="1 | 2 | 3 | 4"
                        default="4"
                        description="Number of columns to span in grid layout mode. Only works with FormGroupV2 grid prop. Defaults to 4 (full width)."
                    />
                    <Prop
                        name="autoWidth"
                        isRequired={false}
                        type="boolean"
                        default="false"
                        description="Allow item to size based on content width. Only works with flex-based FormGroupV2 (when grid prop is not set). Useful for button groups and similar components."
                    />
                    <Prop
                        name="className"
                        isRequired={false}
                        type="string"
                        default="/"
                        description="Additional CSS class names to apply to the form group item. Should only be used for specific styling needs that cannot be achieved with the available props. For general layout control, use the provided props (colSpan, autoWidth, etc.) instead."
                    />
                </PropsList>
            </section>
        );
    }
}
