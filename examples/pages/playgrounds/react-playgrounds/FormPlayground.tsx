import * as React from 'react';
import * as Components from './components/Index';
import {
    Checkbox,
    CheckGroup,
    Button,
    Input,
    IconButton,
    Container,
    ButtonGroup,
    TreeSelect,
    ResizablePanels,
} from '../../../../app-typescript/index';

import {FormLayout} from '../../../../app-typescript/components/Form/FormLayout';
import {FormGroupNew} from '../../../../app-typescript/components/Form/FormGroupNew';
import {FormGroupItemNew} from '../../../../app-typescript/components/Form/FormGroupItemNew';

interface IProps {
    children?: React.ReactNode;
}

interface IState {
    itemType: string;
    itemSelected1: boolean;
    itemSelected2: boolean;
    itemSelected3: boolean;
    value1?: string;
    value2?: string;
    value3?: string;
    value4?: string;
    value5?: string;
    value6?: string;
    selctedTheme: string;
    invalid: boolean;
    date: any;
    time: string | null;
    modalPlanningTemplates: boolean;
    modalSaveEvent: boolean;
    modalSaveEvent2: boolean;
    modalSaveEvent3: boolean;
    modalSaveEvent4: boolean;
    treeSelectValue: any;
    value: any;
    valueS2: any;
    thisTheme: string;
    isExpanded: boolean;
    openCollapsibleOne: boolean;
    openCollapsibleTwo: boolean;
    openCollapsibleThree: boolean;
    openCollapsibleFour: boolean;
    openCollapsibleFive: boolean;
    value22: boolean;
    value23: boolean;
    value24: boolean;
    value25: boolean;
}

let options2 = [
    {
        value: {name: 'A long category Category1'},
    },
    {
        value: {name: 'Category2'},
    },
    {
        value: {name: 'Category3'},
    },
];
let options3 = [
    {
        value: {name: 'Norvegian'},
    },
    {
        value: {name: 'Suomi'},
    },
    {
        value: {name: 'English'},
    },
];
let options4 = [
    {
        value: {name: 'Turku, Finland'},
    },
    {
        value: {name: 'Helsinki, Finland'},
    },
    {
        value: {name: 'Rovaniemi, Finland'},
    },
];

export class FormPlayground extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {
            itemType: 'itemtype01',
            itemSelected1: false,
            itemSelected2: false,
            itemSelected3: false,
            value1: undefined,
            value2: undefined,
            value3: undefined,
            value4: undefined,
            value5: undefined,
            value6: undefined,
            selctedTheme: 'light',
            invalid: false,
            date: new Date('2022-01-08'),
            time: '16:50',
            modalPlanningTemplates: false,
            modalSaveEvent: false,
            modalSaveEvent2: false,
            modalSaveEvent3: false,
            modalSaveEvent4: false,
            treeSelectValue: [],
            value: undefined,
            valueS2: undefined,
            thisTheme: 'light-ui',
            isExpanded: false,
            openCollapsibleOne: false,
            openCollapsibleTwo: false,
            openCollapsibleThree: false,
            openCollapsibleFour: false,
            openCollapsibleFive: false,
            value22: false,
            value23: false,
            value24: false,
            value25: false,
        };
    }

    changeStatus(item: any, status: string) {
        if (item.status.includes(status)) {
            item.status.splice(item.status.indexOf(status), 1);
        } else {
            item.status.push(status);
        }
    }

    toggleTheme = () => {
        this.setState({
            thisTheme: this.state.thisTheme === 'light-ui' ? 'dark-ui' : 'light-ui',
        });
    };

    toggleExpand = () => {
        this.setState((prevState) => ({isExpanded: !prevState.isExpanded}));
    };

    render() {
        return (
            <Components.Layout header="Testing Ground" theme={this.state.thisTheme}>
                <Components.LayoutContainer>
                    <Components.MainPanel>
                        <Container className="p-sticky top-0 z-2">
                            <ButtonGroup align="end">
                                <IconButton
                                    icon="adjust"
                                    ariaValue="Toggle theme"
                                    onClick={this.toggleTheme}
                                    toolTipFlow="left"
                                />
                            </ButtonGroup>
                        </Container>

                        <hr />

                        <Container gap="large" className="sd-border--medium text-md p-0 radius-lg mb-3">
                            <ResizablePanels direction="horizontal" secondarySize={{default: 20}}>
                                <div className="left-panel p-3">
                                    <h4 className="docs-page__h4 mt-0">Pattern 1</h4>
                                    <p className="docs-page__paragraph docs-page__paragraph--large">
                                        Multiple Form Groups (Logical Separation) - <strong>Recommended Default</strong>
                                    </p>

                                    <Container className="form-container sd-border--medium p-4 radius-lg surface-color-base mt-3">
                                        <FormLayout preserveSpaces legend="Optional legend: Multiple Form Groups">
                                            <FormGroupNew grid>
                                                <FormGroupItemNew colSpan={1}>
                                                    <Input
                                                        label="First Name"
                                                        value={''}
                                                        type="text"
                                                        required={true}
                                                        tabindex={0}
                                                        onChange={(value) => this.setState({value: value})}
                                                    />
                                                </FormGroupItemNew>
                                                <FormGroupItemNew colSpan={1}>
                                                    <Input
                                                        label="Last Name"
                                                        value={''}
                                                        type="text"
                                                        tabindex={0}
                                                        onChange={(value) => this.setState({value: value})}
                                                    />
                                                </FormGroupItemNew>

                                                <FormGroupItemNew colSpan={1}>
                                                    <Input
                                                        label="Username"
                                                        value={''}
                                                        type="text"
                                                        tabindex={0}
                                                        onChange={(value) => this.setState({value: value})}
                                                    />
                                                </FormGroupItemNew>
                                                <FormGroupItemNew colSpan={1}>
                                                    <Input
                                                        label="Sign-off"
                                                        value={''}
                                                        type="text"
                                                        tabindex={0}
                                                        onChange={(value) => this.setState({value: value})}
                                                    />
                                                </FormGroupItemNew>
                                            </FormGroupNew>
                                            <FormGroupNew grid>
                                                <FormGroupItemNew colSpan={2}>
                                                    <Input
                                                        label="Email"
                                                        value={''}
                                                        type="text"
                                                        tabindex={0}
                                                        onChange={(value) => this.setState({value: value})}
                                                    />
                                                </FormGroupItemNew>
                                                <FormGroupItemNew colSpan={1}>
                                                    <Input
                                                        label="Password"
                                                        value={''}
                                                        type="password"
                                                        tabindex={0}
                                                        required={true}
                                                        info="Password must be at least 8 characters long"
                                                        onChange={(value) => this.setState({value: value})}
                                                    />
                                                </FormGroupItemNew>
                                                <FormGroupItemNew colSpan={1}>
                                                    <Input
                                                        label="Confirm Password"
                                                        value={''}
                                                        type="password"
                                                        tabindex={0}
                                                        required={true}
                                                        info="Confirm password must match the password"
                                                        onChange={(value) => this.setState({value: value})}
                                                    />
                                                </FormGroupItemNew>
                                            </FormGroupNew>
                                            <FormGroupNew grid>
                                                <FormGroupItemNew colSpan={2}>
                                                    <TreeSelect
                                                        kind={'synchronous'}
                                                        value={this.state.treeSelectValue}
                                                        getOptions={() => options3}
                                                        getLabel={(item) => item.name}
                                                        getId={(item) => item.name}
                                                        allowMultiple
                                                        sortable
                                                        label="Languages"
                                                        onChange={() => false}
                                                        placeholder="Add languages"
                                                        width="medium"
                                                    ></TreeSelect>
                                                </FormGroupItemNew>
                                                <FormGroupItemNew colSpan={2}>
                                                    <Input
                                                        label="Password"
                                                        value={''}
                                                        type="password"
                                                        tabindex={0}
                                                        onChange={(value) => this.setState({value: value})}
                                                    />
                                                    {/* <Text>Password must be at least 8 characters long</Text> */}
                                                </FormGroupItemNew>
                                            </FormGroupNew>

                                            <FormGroupNew grid rowLabel="SomeCheckboxes">
                                                <FormGroupItemNew colSpan={4}>
                                                    <CheckGroup>
                                                        <Checkbox
                                                            checked={this.state.value22}
                                                            label={{text: 'Checkbox one'}}
                                                            onChange={(value) =>
                                                                this.setState(() => ({value22: value}))
                                                            }
                                                        />
                                                        <Checkbox
                                                            checked={this.state.value23}
                                                            label={{text: 'Checkbox two'}}
                                                            onChange={(value) =>
                                                                this.setState(() => ({value23: value}))
                                                            }
                                                        />

                                                        <Checkbox
                                                            checked={this.state.value24}
                                                            label={{text: 'Checkbox three'}}
                                                            onChange={(value) =>
                                                                this.setState(() => ({value24: value}))
                                                            }
                                                        />
                                                    </CheckGroup>
                                                </FormGroupItemNew>
                                            </FormGroupNew>

                                            <FormGroupNew grid>
                                                <FormGroupItemNew colSpan={3}>
                                                    <Input
                                                        label="Username"
                                                        value={''}
                                                        type="text"
                                                        tabindex={0}
                                                        onChange={(value) => this.setState({value: value})}
                                                    />
                                                </FormGroupItemNew>
                                                <FormGroupItemNew colSpan={1}>
                                                    <Input
                                                        label="Password"
                                                        value={''}
                                                        type="password"
                                                        tabindex={0}
                                                        onChange={(value) => this.setState({value: value})}
                                                    />
                                                </FormGroupItemNew>
                                            </FormGroupNew>

                                            <FormGroupNew>
                                                <FormGroupItemNew>
                                                    <Input
                                                        label="Another Input"
                                                        value={''}
                                                        type="text"
                                                        tabindex={0}
                                                        onChange={(value) => this.setState({value: value})}
                                                    />
                                                </FormGroupItemNew>
                                                <FormGroupItemNew>
                                                    <Input
                                                        label="Another Input"
                                                        value={''}
                                                        type="password"
                                                        tabindex={0}
                                                        onChange={(value) => this.setState({value: value})}
                                                    />
                                                </FormGroupItemNew>
                                                {/* <FormGroupItemNew autoWidth>
                                                    <div className="form-group-new__text-block">Testing text block</div>
                                                    
                                                </FormGroupItemNew> */}
                                                <FormGroupItemNew>
                                                    <Container className="form-group-new-item__inner">
                                                        <div className="form-group-new__text-block">Test:</div>
                                                        <Input
                                                            label="Another Input"
                                                            value={''}
                                                            type="password"
                                                            tabindex={0}
                                                            onChange={(value) => this.setState({value: value})}
                                                        />

                                                        <Button text="Submit" onClick={() => false} type="primary" />
                                                    </Container>
                                                </FormGroupItemNew>
                                                <FormGroupItemNew autoWidth>
                                                    <ButtonGroup>
                                                        <Button text="Submit" onClick={() => false} type="primary" />
                                                        <Button text="Cancel" onClick={() => false} type="tertiary" />
                                                    </ButtonGroup>
                                                </FormGroupItemNew>
                                            </FormGroupNew>
                                        </FormLayout>
                                    </Container>

                                    <hr />
                                    <h4 className="docs-page__h4 mt-0">Pattern 2</h4>
                                    <p className="docs-page__paragraph docs-page__paragraph--large">
                                        Single Form Group (All Items Together) -{' '}
                                        <strong>Only if the code logic requires it</strong>
                                    </p>

                                    <Container className="form-container sd-border--medium p-4 radius-lg surface-color-base">
                                        <FormLayout
                                            preserveSpaces
                                            legend="Optional legend: All items in one Form Group"
                                        >
                                            <FormGroupNew grid>
                                                <FormGroupItemNew colSpan={1}>
                                                    <Input
                                                        label="First Name"
                                                        value={''}
                                                        type="text"
                                                        required={true}
                                                        tabindex={0}
                                                        onChange={(value) => this.setState({value: value})}
                                                    />
                                                </FormGroupItemNew>
                                                <FormGroupItemNew colSpan={1}>
                                                    <Input
                                                        label="Last Name"
                                                        value={''}
                                                        type="text"
                                                        tabindex={0}
                                                        onChange={(value) => this.setState({value: value})}
                                                    />
                                                </FormGroupItemNew>
                                                <FormGroupItemNew colSpan={1}>
                                                    <Input
                                                        label="Username"
                                                        value={''}
                                                        type="text"
                                                        tabindex={0}
                                                        onChange={(value) => this.setState({value: value})}
                                                    />
                                                </FormGroupItemNew>
                                                <FormGroupItemNew colSpan={1}>
                                                    <Input
                                                        label="Sign-off"
                                                        value={''}
                                                        type="text"
                                                        tabindex={0}
                                                        onChange={(value) => this.setState({value: value})}
                                                    />
                                                </FormGroupItemNew>
                                                <FormGroupItemNew colSpan={2}>
                                                    <Input
                                                        label="Email"
                                                        value={''}
                                                        type="text"
                                                        tabindex={0}
                                                        onChange={(value) => this.setState({value: value})}
                                                    />
                                                </FormGroupItemNew>
                                                <FormGroupItemNew colSpan={1}>
                                                    <Input
                                                        label="Password"
                                                        value={''}
                                                        type="password"
                                                        tabindex={0}
                                                        required={true}
                                                        info="Password must be at least 8 characters long"
                                                        onChange={(value) => this.setState({value: value})}
                                                    />
                                                </FormGroupItemNew>
                                                <FormGroupItemNew colSpan={1}>
                                                    <Input
                                                        label="Confirm Password"
                                                        value={''}
                                                        type="password"
                                                        tabindex={0}
                                                        required={true}
                                                        info="Confirm password must match the password"
                                                        onChange={(value) => this.setState({value: value})}
                                                    />
                                                </FormGroupItemNew>
                                                <FormGroupItemNew colSpan={2}>
                                                    <TreeSelect
                                                        kind={'synchronous'}
                                                        value={this.state.treeSelectValue}
                                                        getOptions={() => options3}
                                                        getLabel={(item) => item.name}
                                                        getId={(item) => item.name}
                                                        allowMultiple
                                                        sortable
                                                        label="Languages"
                                                        onChange={() => false}
                                                        placeholder="Add languages"
                                                        width="medium"
                                                    ></TreeSelect>
                                                </FormGroupItemNew>
                                                <FormGroupItemNew colSpan={2}>
                                                    <Input
                                                        label="Password"
                                                        value={''}
                                                        type="password"
                                                        tabindex={0}
                                                        onChange={(value) => this.setState({value: value})}
                                                    />
                                                    {/* <Text>Password must be at least 8 characters long</Text> */}
                                                </FormGroupItemNew>
                                                <FormGroupItemNew colSpan={4}>
                                                    <CheckGroup>
                                                        <Checkbox
                                                            checked={this.state.value22}
                                                            label={{text: 'Checkbox one'}}
                                                            onChange={(value) =>
                                                                this.setState(() => ({value22: value}))
                                                            }
                                                        />
                                                        <Checkbox
                                                            checked={this.state.value23}
                                                            label={{text: 'Checkbox two'}}
                                                            onChange={(value) =>
                                                                this.setState(() => ({value23: value}))
                                                            }
                                                        />

                                                        <Checkbox
                                                            checked={this.state.value24}
                                                            label={{text: 'Checkbox three'}}
                                                            onChange={(value) =>
                                                                this.setState(() => ({value24: value}))
                                                            }
                                                        />
                                                    </CheckGroup>
                                                </FormGroupItemNew>
                                                <FormGroupItemNew colSpan={3}>
                                                    <Input
                                                        label="Username"
                                                        value={''}
                                                        type="text"
                                                        tabindex={0}
                                                        onChange={(value) => this.setState({value: value})}
                                                    />
                                                </FormGroupItemNew>
                                                <FormGroupItemNew colSpan={1}>
                                                    <Input
                                                        label="Password"
                                                        value={''}
                                                        type="password"
                                                        tabindex={0}
                                                        onChange={(value) => this.setState({value: value})}
                                                    />
                                                </FormGroupItemNew>
                                            </FormGroupNew>
                                        </FormLayout>
                                    </Container>
                                </div>
                                <div className="right-panel p-2"></div>
                            </ResizablePanels>
                        </Container>
                    </Components.MainPanel>
                    {/* MAIN CONTENT (Monitoring) */}
                </Components.LayoutContainer>
            </Components.Layout>
        );
    }
}
