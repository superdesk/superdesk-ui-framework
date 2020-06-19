import * as React from 'react';
import * as Components from './components/Index';
import { ButtonGroup, Button, NavButton, SubNav, Dropdown, CheckButtonGroup, RadioButton, Input, Select, Option } from '../../../../app-typescript/index';

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

export class SamsPlayground extends React.Component<IProps, IState> {
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
            <Components.Layout header='SAMS playground' theme={this.state.theme}>
                <Components.SidebarMenu
                    items={[
                        { icon: 'dashboard', size: 'big' },
                        { icon: 'view', size: 'big' },
                        { icon: 'marked-star', size: 'big' },
                        { icon: 'spike', size: 'big' },
                        { icon: 'personal', size: 'big' },
                        { icon: 'global-search', size: 'big' },
                        { icon: 'picture', size: 'big', active: true }]} />
                <div id='leftContent' className='sd-content-wrapper__main-content-area sd-main-content-grid comfort'>
                    {/* TOOLBAR HEADER */}
                    <Components.ToolbarHeader>

                        <SubNav theme={this.state.theme}>
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
                                        }]}>
                                    <NavButton text={this.state.dropDownState ? this.state.dropDownState : 'All Archives'} onClick={() => false} />
                                </Dropdown>
                            </ButtonGroup>
                            <ButtonGroup align='right'>
                                <NavButton icon='dots-vertical' onClick={() => false} />
                            </ButtonGroup>
                        </SubNav>
                        <SubNav theme={this.state.theme}>
                            <ButtonGroup align='inline'>
                                <NavButton icon='filter-large' onClick={this.handleFilter} />
                            </ButtonGroup>
                            <CheckButtonGroup padded>
                                <RadioButton value={this.state.itemType} onChange={(value) => this.setState({ itemType: value })} options={[
                                    { value: 'itemtype01', label: 'All item types' },
                                    { value: 'itemtype02', label: 'Images only' },
                                    { value: 'itemtype03', label: 'Videos only' },
                                    { value: 'itemtype04', label: 'Documents only' }]} />
                            </CheckButtonGroup>
                            <ButtonGroup align='right'>
                                <NavButton icon='adjust' onClick={this.handleTheme} />
                                <NavButton icon='th-list' onClick={() => false} />
                            </ButtonGroup>
                        </SubNav>
                    </Components.ToolbarHeader>
                    {/* FILTER PANEL*/}
                    <div className={'sd-main-content-grid__filter' + (this.state.openFilter ? ' open-filters' : '')}>
                        <Components.SidePanel>
                            <Components.SidePanelHeader handleFilterParent={this.handleFilter} title='Advanced filters' />
                            <Components.SidePanelContent>
                                <div className="form__group">
                                    <div className="form__item">
                                        <Input label='TITLE'
                                            error='This is error message'
                                            inlineLabel={false}
                                            disabled={false}
                                            invalid={false}
                                            onChange={(value) => { }} />
                                    </div>
                                </div>
                                <div className="form__group">
                                    <div className="form__item">
                                        <Select label='Source'
                                            value='Select ingest source...'
                                            error='This is error message'
                                            inlineLabel={false}
                                            disabled={false}
                                            invalid={false}
                                            onChange={(value) => { }}>
                                            <Option value="option-1">Select ingest source...</Option>
                                            <Option value="option-2">Associated Press</Option>
                                            <Option value="option-3">Reuters</Option>
                                        </Select>
                                    </div>
                                </div>
                                <div className="form__group" >
                                    <div className="form__item">
                                        <Input label='LOCATION'
                                            error='This is error message'
                                            inlineLabel={false}
                                            disabled={false}
                                            invalid={false}
                                            onChange={(value) => { }} />
                                    </div>
                                </div>
                                <div className="form__group">
                                    <div className="form__item">
                                        <Input label='CATEGORY'
                                            error='This is error message'
                                            inlineLabel={false}
                                            disabled={false}
                                            invalid={false}
                                            onChange={(value) => { }} />
                                    </div>
                                </div>
                                <div className="form__group">
                                    <div className="form__item">
                                        <Input label='SUBJECT'
                                            error='This is error message'
                                            inlineLabel={false}
                                            disabled={false}
                                            invalid={false}
                                            onChange={(value) => { }} />
                                    </div>
                                </div>

                                <div className="form__group">
                                    <div className="form__item">
                                        <Select label='Usage right'
                                            value='--- Not selected ---'
                                            error='This is error message'
                                            info='Dolor in hendrerit.'
                                            inlineLabel={false}
                                            disabled={false}
                                            invalid={false}
                                            onChange={(value) => { }}>
                                            <Option value="">--- Not selected ---</Option>
                                            <Option value="single">Single usage</Option>
                                            <Option value="time">Time restricted</Option>
                                            <Option value="bananas">Indefinite usage</Option>
                                            <Option value="indefinite">Pears</Option>
                                        </Select>
                                    </div>
                                </div>
                            </Components.SidePanelContent>
                            <Components.SidePanelFooter>
                                <Button text='Clear' style='hollow' onClick={() => false} />
                                <Button text='Submit' type='primary' onClick={() => false} />
                            </Components.SidePanelFooter>
                        </Components.SidePanel>
                    </div>
                    {/* MAIN CONTENT (Monitoring) */}
                    <Components.MainContent >
                        <Button text='Open preview' onClick={this.handlePreview} />
                    </Components.MainContent>
                    {/* PREVIEW PANEL*/}
                    <div className={'sd-main-content-grid__preview' + (this.state.openPreview ? ' open-preview' : '')}>
                        <Components.SidePanel>
                            <Components.SidePanelHeader handleFilterParent={this.handlePreview} />
                            <Components.SidePanelContent />
                        </Components.SidePanel>
                    </div>
                    {/* OVERLAY PANEL (Send To) */}
                    <Components.OverlayPanel />
                </div>
            </Components.Layout>
        );
    }
}
