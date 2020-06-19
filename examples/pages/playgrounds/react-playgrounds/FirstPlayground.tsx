import * as React from 'react';
import * as Components from './components/Index';
import { ButtonGroup, Button, NavButton, SubNav, Dropdown, CheckButtonGroup, RadioButton, Icon, Input, Select, Option } from '../../../../app-typescript/index';

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
                {/* TOOLBAR HEADER */}
                <Components.ToolbarHeader >
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
                                <NavButton onClick={() => false} />
                            </Dropdown>
                        </ButtonGroup>
                        <ButtonGroup align='right'>
                            <NavButton icon='dots-vertical' onClick={() => false} />
                        </ButtonGroup>
                    </SubNav>
                    <SubNav theme={this.state.theme}>
                        <ButtonGroup >
                            <NavButton icon='filter-large' onClick={this.handleFilter} />
                        </ButtonGroup>
                        <CheckButtonGroup >
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
                <Components.FilterPanel openF={this.state.openFilter} >
                    <div className="side-panel__header side-panel__header--border-b">
                        <a className="icn-btn side-panel__close" onClick={this.handleFilter}>
                            <Icon name='close-small' />
                        </a>
                        <h3 className="side-panel__heading">Advanced filters</h3>
                    </div>
                    <Components.ContentPanel>
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

                    </Components.ContentPanel>
                    <Components.FooterPanel>
                        <Button text='Clear' style='hollow' onClick={() => false} />
                        <Button text='Submit' type='primary' onClick={() => false} />
                    </Components.FooterPanel>
                </Components.FilterPanel>
                {/* MAIN CONTENT (Monitoring) */}
                <Components.MainContent>

                </Components.MainContent>
                {/* PREVIEW PANEL*/}
                <Components.PreviewPanel open={this.state.openPreview} />
                {/* OVERLAY PANEL (Send To) */}
                <Components.OverlayPanel />
            </Components.Layout >
        );
    }
}
