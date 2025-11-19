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
import {FormGroupV2} from '../../../../app-typescript/components/Form/FormGroupV2';
import {FormGroupItem} from '../../../../app-typescript/components/Form/FormGroupItem';

interface IProps {
    children?: React.ReactNode;
}

interface IState {
    treeSelectValue: any;
    thisTheme: string;
    value22: boolean;
    value23: boolean;
    value24: boolean;
}

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

export class FormPlayground extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {
            treeSelectValue: [],
            thisTheme: 'light-ui',
            value22: false,
            value23: false,
            value24: false,
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
                                            <FormGroupV2 grid>
                                                <FormGroupItem colSpan={1}>
                                                    <Input
                                                        label="First Name"
                                                        value={''}
                                                        type="text"
                                                        required={true}
                                                        tabindex={0}
                                                        onChange={() => false}
                                                    />
                                                </FormGroupItem>
                                                <FormGroupItem colSpan={1}>
                                                    <Input
                                                        label="Last Name"
                                                        value={''}
                                                        type="text"
                                                        tabindex={0}
                                                        onChange={() => false}
                                                    />
                                                </FormGroupItem>

                                                <FormGroupItem colSpan={1}>
                                                    <Input
                                                        label="Username"
                                                        value={''}
                                                        type="text"
                                                        tabindex={0}
                                                        onChange={() => false}
                                                    />
                                                </FormGroupItem>
                                                <FormGroupItem colSpan={1}>
                                                    <Input
                                                        label="Sign-off"
                                                        value={''}
                                                        type="text"
                                                        tabindex={0}
                                                        onChange={() => false}
                                                    />
                                                </FormGroupItem>
                                            </FormGroupV2>
                                            <FormGroupV2 grid>
                                                <FormGroupItem colSpan={2}>
                                                    <Input
                                                        label="Email"
                                                        value={''}
                                                        type="text"
                                                        tabindex={0}
                                                        onChange={() => false}
                                                    />
                                                </FormGroupItem>
                                                <FormGroupItem colSpan={1}>
                                                    <Input
                                                        label="Password"
                                                        value={''}
                                                        type="password"
                                                        tabindex={0}
                                                        required={true}
                                                        info="Password must be at least 8 characters long"
                                                        onChange={() => false}
                                                    />
                                                </FormGroupItem>
                                                <FormGroupItem colSpan={1}>
                                                    <Input
                                                        label="Confirm Password"
                                                        value={''}
                                                        type="password"
                                                        tabindex={0}
                                                        required={true}
                                                        info="Confirm password must match the password"
                                                        onChange={() => false}
                                                    />
                                                </FormGroupItem>
                                            </FormGroupV2>
                                            <FormGroupV2 grid>
                                                <FormGroupItem colSpan={2}>
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
                                                </FormGroupItem>
                                                <FormGroupItem colSpan={2}>
                                                    <Input
                                                        label="Password"
                                                        value={''}
                                                        type="password"
                                                        tabindex={0}
                                                        onChange={() => false}
                                                    />
                                                    {/* <Text>Password must be at least 8 characters long</Text> */}
                                                </FormGroupItem>
                                            </FormGroupV2>

                                            <FormGroupV2 grid rowLabel="SomeCheckboxes" className="mb-1">
                                                <FormGroupItem colSpan={4}>
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
                                                </FormGroupItem>
                                            </FormGroupV2>

                                            <FormGroupV2 grid>
                                                <FormGroupItem colSpan={3}>
                                                    <Input
                                                        label="Username"
                                                        value={''}
                                                        type="text"
                                                        tabindex={0}
                                                        onChange={() => false}
                                                    />
                                                </FormGroupItem>
                                                <FormGroupItem colSpan={1}>
                                                    <Input
                                                        label="Password"
                                                        value={''}
                                                        type="password"
                                                        tabindex={0}
                                                        onChange={() => false}
                                                    />
                                                </FormGroupItem>
                                            </FormGroupV2>

                                            <FormGroupV2>
                                                <FormGroupItem>
                                                    <Input
                                                        label="Another Input"
                                                        value={''}
                                                        type="text"
                                                        tabindex={0}
                                                        onChange={() => false}
                                                    />
                                                </FormGroupItem>
                                                <FormGroupItem>
                                                    <Input
                                                        label="Another Input"
                                                        value={''}
                                                        type="password"
                                                        tabindex={0}
                                                        onChange={() => false}
                                                    />
                                                </FormGroupItem>
                                                <FormGroupItem>
                                                    <Container className="form-group-item__inner">
                                                        <div className="form-group__text-block">Test:</div>
                                                        <Input
                                                            label="Another Input"
                                                            value={''}
                                                            type="password"
                                                            tabindex={0}
                                                            onChange={() => false}
                                                        />

                                                        <Button text="Submit" onClick={() => false} type="primary" />
                                                    </Container>
                                                </FormGroupItem>
                                                <FormGroupItem autoWidth>
                                                    <ButtonGroup>
                                                        <Button text="Cancel" onClick={() => false} type="tertiary" />
                                                        <Button text="Submit" onClick={() => false} type="primary" />
                                                    </ButtonGroup>
                                                </FormGroupItem>
                                            </FormGroupV2>
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
                                            <FormGroupV2 grid>
                                                <FormGroupItem colSpan={1}>
                                                    <Input
                                                        label="First Name"
                                                        value={''}
                                                        type="text"
                                                        required={true}
                                                        tabindex={0}
                                                        onChange={() => false}
                                                    />
                                                </FormGroupItem>
                                                <FormGroupItem colSpan={1}>
                                                    <Input
                                                        label="Last Name"
                                                        value={''}
                                                        type="text"
                                                        tabindex={0}
                                                        onChange={() => false}
                                                    />
                                                </FormGroupItem>
                                                <FormGroupItem colSpan={1}>
                                                    <Input
                                                        label="Username"
                                                        value={''}
                                                        type="text"
                                                        tabindex={0}
                                                        onChange={() => false}
                                                    />
                                                </FormGroupItem>
                                                <FormGroupItem colSpan={1}>
                                                    <Input
                                                        label="Sign-off"
                                                        value={''}
                                                        type="text"
                                                        tabindex={0}
                                                        onChange={() => false}
                                                    />
                                                </FormGroupItem>
                                                <FormGroupItem colSpan={2}>
                                                    <Input
                                                        label="Email"
                                                        value={''}
                                                        type="text"
                                                        tabindex={0}
                                                        onChange={() => false}
                                                    />
                                                </FormGroupItem>
                                                <FormGroupItem colSpan={1}>
                                                    <Input
                                                        label="Password"
                                                        value={''}
                                                        type="password"
                                                        tabindex={0}
                                                        required={true}
                                                        info="Password must be at least 8 characters long"
                                                        onChange={() => false}
                                                    />
                                                </FormGroupItem>
                                                <FormGroupItem colSpan={1}>
                                                    <Input
                                                        label="Confirm Password"
                                                        value={''}
                                                        type="password"
                                                        tabindex={0}
                                                        required={true}
                                                        info="Confirm password must match the password"
                                                        onChange={() => false}
                                                    />
                                                </FormGroupItem>
                                                <FormGroupItem colSpan={2}>
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
                                                </FormGroupItem>
                                                <FormGroupItem colSpan={2}>
                                                    <Input
                                                        label="Password"
                                                        value={''}
                                                        type="password"
                                                        tabindex={0}
                                                        onChange={() => false}
                                                    />
                                                    {/* <Text>Password must be at least 8 characters long</Text> */}
                                                </FormGroupItem>
                                                <FormGroupItem colSpan={4}>
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
                                                </FormGroupItem>
                                                <FormGroupItem colSpan={3}>
                                                    <Input
                                                        label="Username"
                                                        value={''}
                                                        type="text"
                                                        tabindex={0}
                                                        onChange={() => false}
                                                    />
                                                </FormGroupItem>
                                                <FormGroupItem colSpan={1}>
                                                    <Input
                                                        label="Password"
                                                        value={''}
                                                        type="password"
                                                        tabindex={0}
                                                        onChange={() => false}
                                                    />
                                                </FormGroupItem>
                                            </FormGroupV2>
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
