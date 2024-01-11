import * as React from 'react';
import * as Components from './components/Index';
import { ButtonGroup, Button, NavButton, SubNav, Dropdown, Input, Select, Option } from '../../../../app-typescript/index';

interface IProps {
    children?: React.ReactNode;
}

interface IState {
    theme: 'dark' | 'light';
    itemType: string;
    dropDownState: string;
    openPreview: boolean;
    openFilter: boolean;
}

export class FirstPlayground extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {
            theme: 'light',
            itemType: 'itemtype01',
            dropDownState: '',
            openPreview: false,
            openFilter: false,
        }
        this.handleFilter = this.handleFilter.bind(this);
        this.handlePreview = this.handlePreview.bind(this);
        this.handleTheme = this.handleTheme.bind(this);
    }

    handleFilter() {
        this.setState((state) => ({
            openFilter: !state.openFilter,
        }));
    }

    handlePreview() {
        this.setState((state) => ({
            openPreview: !state.openPreview,
        }));
    }

    handleTheme() {
        if (this.state.theme === 'light') {
            this.setState({
                theme: 'dark'
            })
        } else {
            this.setState({
                theme: 'light'
            })
        }
    }

    render() {
        return (
            <Components.Layout header='First playground' theme={this.state.theme}>
                <Components.SidebarMenu
                    items={[
                        { icon: 'dashboard', size: 'big', tooltip: 'Dashboard' },
                        { icon: 'view', size: 'big' },
                        { icon: 'marked-star', size: 'big' },
                        { icon: 'spike', size: 'big' },
                        'divider',
                        { icon: 'personal', size: 'big' },
                        { icon: 'global-search', size: 'big' },
                        { icon: 'picture', size: 'big' }
                    ]}
                />

                <div className='sd-content-wrapper__main-content-area sd-main-content-grid comfort'>
                    <Components.HeaderPanel >
                        <SubNav>
                            <ButtonGroup align='inline'>
                                <Dropdown
                                    items={[
                                        {
                                            type: 'group', label: 'Archives', items: [
                                                'divider',
                                                { label: 'All archives', onSelect: () => this.setState({ dropDownState: 'All archives' }) },
                                                { label: 'Media archive', onSelect: () => this.setState({ dropDownState: 'Media archive' }) },
                                                { label: 'File archive', onSelect: () => this.setState({ dropDownState: 'File archive' }) },
                                                { label: 'AP images', onSelect: () => this.setState({ dropDownState: 'AP archive' }) },
                                            ]
                                        }
                                    ]}
                                >
                                    <NavButton onClick={() => false} />
                                </Dropdown>
                            </ButtonGroup>
                            <ButtonGroup align='end'>
                                <NavButton icon='dots-vertical' onClick={() => false} />
                            </ButtonGroup>
                        </SubNav>
                        <SubNav>
                            <ButtonGroup >
                                <NavButton icon='filter-large' onClick={this.handleFilter} />
                            </ButtonGroup>
                            <ButtonGroup align='end'>
                                <NavButton icon='adjust' onClick={this.handleTheme} />
                                <NavButton icon='th-list' onClick={() => false} />
                            </ButtonGroup>
                        </SubNav>
                    </Components.HeaderPanel>
                    {/* TOOLBAR HEADER */}

                    <Components.LeftPanel open={this.state.openFilter}>
                        <Components.Panel>
                            <Components.PanelHeader handleFilterParent={this.handleFilter} title='Advanced filters' />
                            <Components.PanelContent>
                                <Components.PanelContentBlock>
                                    <div className="form__group">
                                        <div className="form__item">
                                            <Input
                                                type='text'
                                                label='TITLE'
                                                inlineLabel={false}
                                                disabled={false}
                                                onChange={() => false}
                                            />
                                        </div>
                                    </div>
                                    <div className="form__group">
                                        <div className="form__item">
                                            <Select
                                                label='Source'
                                                value='Select ingest source...'
                                                inlineLabel={false}
                                                disabled={false}
                                                onChange={() => false}
                                            >
                                                <Option value="option-1">Select ingest source...</Option>
                                                <Option value="option-2">Associated Press</Option>
                                                <Option value="option-3">Reuters</Option>
                                            </Select>
                                        </div>
                                    </div>
                                    <div className="form__group" >
                                        <div className="form__item">
                                            <Input
                                                type='text'
                                                label='LOCATION'
                                                inlineLabel={false}
                                                disabled={false}
                                                onChange={() => false}
                                            />
                                        </div>
                                    </div>
                                    <div className="form__group">
                                        <div className="form__item">
                                            <Input
                                                type='text'
                                                label='CATEGORY'
                                                inlineLabel={false}
                                                disabled={false}
                                                onChange={() => false}
                                            />
                                        </div>
                                    </div>
                                    <div className="form__group">
                                        <div className="form__item">
                                            <Input
                                                type='text'
                                                label='SUBJECT'
                                                inlineLabel={false}
                                                disabled={false}
                                                onChange={() => false}
                                            />
                                        </div>
                                    </div>

                                    <div className="form__group">
                                        <div className="form__item">
                                            <Select label='Usage right'
                                                value='--- Not selected ---'
                                                info='Dolor in hendrerit.'
                                                inlineLabel={false}
                                                disabled={false}
                                                onChange={() => false}
                                            >
                                                <Option value="">--- Not selected ---</Option>
                                                <Option value="single">Single usage</Option>
                                                <Option value="time">Time restricted</Option>
                                                <Option value="bananas">Indefinite usage</Option>
                                                <Option value="indefinite">Pears</Option>
                                            </Select>
                                        </div>
                                    </div>
                                </Components.PanelContentBlock>
                            </Components.PanelContent>
                            <Components.PanelFooter>
                                <Button text='Clear' style='hollow' onClick={() => false} />
                                <Button text='Submit' type='primary' onClick={() => false} />
                            </Components.PanelFooter>
                        </Components.Panel>
                    </Components.LeftPanel>
                    {/* FILTER PANEL*/}

                    <Components.MainPanel>

                    </Components.MainPanel>
                    {/* MAIN CONTENT (Monitoring) */}

                    <Components.RightPanel open={this.state.openPreview} />
                    {/* PREVIEW PANEL*/}

                    <Components.OverlayPanel />
                    {/* OVERLAY PANEL (Send To) */}
                </div>
            </Components.Layout >
        );
    }
}
