import * as React from 'react';
import * as Components from './components/Index';
import { ButtonGroup, Button, NavButton, SubNav, Dropdown, CheckButtonGroup, RadioButton } from '../../../../app-typescript/index';

interface IProps {
    children?: React.ReactNode;
}

interface IState {
    theme: 'dark' | 'light';
    itemType: string;
    dropDownState: string;
    openPreview: boolean;
}

export class SamsPlayground extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {
            theme: 'light',
            itemType: 'itemtype01',
            dropDownState: '',
            openPreview: false,
        }
        this.handlePreview = this.handlePreview.bind(this);
        this.handleTheme = this.handleTheme.bind(this);
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
                                    <NavButton text={this.state.dropDownState ? this.state.dropDownState : 'All Archives'} onClick={()=> false} />
                            </Dropdown>
                        </ButtonGroup>
                        <ButtonGroup align='right'>
                            <NavButton icon='dots-vertical' onClick={() => false} />
                        </ButtonGroup>
                    </SubNav>
                    <SubNav theme={this.state.theme}>
                        <ButtonGroup align='inline'>
                            <NavButton icon='filter-large' onClick={this.handlePreview} />
                        </ButtonGroup>
                        <CheckButtonGroup padded>
                            <RadioButton value={this.state.itemType} onChange={(value)=> this.setState({itemType: value})} options={[
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
                <Components.FilterPanel />

                {/* MAIN CONTENT (Monitoring) */}
                <Components.MainContent />
                {/* PREVIEW PANEL*/}
                <Components.PreviewPanel open={this.state.openPreview} />
                {/* OVERLAY PANEL (Send To) */}
                <Components.OverlayPanel />
            </Components.Layout>
        );
    }
}
