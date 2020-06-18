import * as React from 'react';
import * as Components from './components/Index';
import { ButtonGroup, Button, NavButton, SubNav, Dropdown, CheckButtonGroup, RadioButton, Icon } from '../../../../app-typescript/index';
import { Input } from '../../../../app-typescript/components/Input';
import { Select, Option } from '../../../../app-typescript/components/Select';

interface IProps {
    children?: React.ReactNode;
}

interface IState {
    openA: boolean;
    openFilter: boolean;
    theme: 'dark' | 'light';
    itemType: string;
    dropDownState: string;
    openPreview: boolean;
}

export class FirstPlayground extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {
            openA: false,
            openFilter: false,
            theme: 'light',
            itemType: 'itemtype01',
            dropDownState: '',
            openPreview: false,
        }
        this.handleClickA = this.handleClickA.bind(this);
        this.handleFilter = this.handleFilter.bind(this);
        this.handlePreview = this.handlePreview.bind(this);
        this.handleTheme = this.handleTheme.bind(this);
    }

    handleClickA(child: boolean) {
        this.setState({ openA: child })
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
            <Components.Layout header='First playground' openA={this.state.openA} theme={this.state.theme}>
                {/* TOOLBAR HEADER */}
                <Components.ToolbarHeader >
                    <SubNav theme={this.state.theme}>
                        <ButtonGroup>
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
                    <div className="side-panel__content">
                        <div className="side-panel__content-block" >
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
                        </div>
                    </div>
                    <div className="side-panel__footer side-panel__footer--button-box">
                        <div className="flex-grid flex-grid--boxed-small flex-grid--wrap-items flex-grid--small-2">
                            <Button text='Clear' style='hollow' onClick={() => false} />
                            <Button text='Submit' type='primary' onClick={() => false} />
                        </div>
                    </div>

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
