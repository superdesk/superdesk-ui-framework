import * as React from 'react';
import * as Components from './components/Index';
import { Input } from '../../../../app-typescript/components/Input';
import { Select, Option } from '../../../../app-typescript/components/Select';
import { Button } from '../../../../app-typescript/components/Button';

interface IProps {
    children?: React.ReactNode;
}

interface IState {
    open: boolean;
    openA: boolean;
    openF: boolean;
    theme: string;
}

export class FirstPlayground extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {
            open: false,
            openA: false,
            openF: false,
            theme: 'light',
        }
        this.handleClick = this.handleClick.bind(this);
        this.handleClickA = this.handleClickA.bind(this);
        this.handleFilter = this.handleFilter.bind(this);
        this.sendTheme = this.sendTheme.bind(this);
    }

    handleClick(child: boolean) {
        this.setState({ open: child })
    }

    handleClickA(child: boolean) {
        this.setState({ openA: child })
    }

    handleFilter(child: boolean) {
        this.setState({ openF: child })
    }

    sendTheme(child: string) {
        this.setState({ theme: child })
    }

    render() {
        return (
            <Components.Layout header='First playground' openA={this.state.openA} theme={this.state.theme}>
                {/* TOOLBAR HEADER */}
                <Components.ToolbarHeader />
                {/* FILTER PANEL*/}
                <Components.FilterPanel openF={this.state.openF} >
                    <div className="side-panel__header side-panel__header--border-b">
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
                <Components.MainContent
                    handleFilter={this.handleFilter}
                    handleClick={this.handleClick}
                    handleClickA={this.handleClickA}
                    sendTheme={this.sendTheme}>

                </Components.MainContent>
                {/* PREVIEW PANEL*/}
                <Components.PreviewPanel open={this.state.open} />
                {/* OVERLAY PANEL (Send To) */}
                <Components.OverlayPanel />
            </Components.Layout >
        );
    }
}
