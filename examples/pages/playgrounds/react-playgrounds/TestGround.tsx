import * as React from 'react';
import * as Components from './components/Index';
import { ButtonGroup, Button, NavButton, SubNav, Dropdown, CheckButtonGroup, RadioButton, Input, Select, Option, Label, Icon, IconButton, Checkbox, CheckGroup, GridList, Badge } from '../../../../app-typescript/index';
import * as GridElements from '../../../../app-typescript/components/GridItem';

import dummy_items from '../dummy-data/items';


interface IProps {
    children?: React.ReactNode;
}

interface IState {
    itemType: string;
    itemSelected1: boolean;
    itemSelected2: boolean;
    itemSelected3: boolean;
    value1: boolean;
    value2: boolean;
    value3: boolean;
    value4: boolean;
}

export class TestGround extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {
            itemType: 'itemtype01',
            itemSelected1: false,
            itemSelected2: false,
            itemSelected3: false,
            value1: false,
            value2: false,
            value3: false,
            value4: false,
        }
    }

    changeStatus(item: any, status: string) {
        if (item.status.includes(status)) {
            item.status.splice(item.status.indexOf(status), 1);
        } else {
            item.status.push(status);
        }
    }

    render() {
        return (
            <Components.Layout header='Testing Ground'>
                <Components.LayoutContainer>
                    <Components.MainPanel >
                    <div className='form__row'>
                            {/* <CheckGroup>
                                <Checkbox checked={this.state.value1} label={{text:'Checkbox label right'}} onChange={(value) => this.setState(() => ({ value1: value }))} />
                                <Checkbox checked={this.state.value2} label={{text:'Check me!'}} onChange={(value) => this.setState(() => ({ value2: value }))} />
                                <Checkbox checked={this.state.value3} label={{text:'Check me too!'}} onChange={(value) => this.setState(() => ({ value3: value }))} />
                                <Checkbox checked={this.state.value4} label={{text:'I"m disabled:('}} disabled= {true} onChange={(value) => this.setState(() => ({ value4: value }))} />
                            </CheckGroup> */}
                            <div className="sd-check__group-new sd-check__group-new--vertical">
                                <span className="sd-check-new__wrapper" tabIndex={-1}>
                                    <input type="checkbox" className="sd-check-new__input" id="id33" value="test" tabIndex={0} />
                                    <span className="sd-check-new"></span>
                                    <label className="" htmlFor="id33" >Check me!</label>
                                </span>

                                <span className="sd-check-new__wrapper" tabIndex={-1}>
                                    <input type="checkbox" className="sd-check-new__input" id="id34" value="test" tabIndex={0} />
                                    <span className="sd-check-new"></span>
                                    <label className="" htmlFor="id34" >Check me too!</label>
                                </span>

                                <span className="sd-check-new__wrapper" tabIndex={-1}>
                                    <input type="checkbox" className="sd-check-new__input" id="id35" value="test" disabled tabIndex={0} />
                                    <span className="sd-check-new"></span>   
                                    <label className="" htmlFor="id35" >Me too, me too!</label>
                                </span>
                            </div>

                            <div className="sd-check__group-new sd-check__group-new--vertical sd-margin-t--4">
                                <span className="sd-check-new__wrapper" tabIndex={-1}>
                                    <input type="radio" className="sd-check-new__input" id="id36" name="testradio" tabIndex={0} />
                                    <span className="sd-radio-new"></span>
                                    <label className="" htmlFor="id36" >Check me!</label>
                                </span>

                                <span className="sd-check-new__wrapper" tabIndex={-1}>
                                    <input type="radio" className="sd-check-new__input" id="id37" name="testradio" tabIndex={0} />
                                    <span className="sd-radio-new"></span>
                                    <label className="" htmlFor="id37" >Check me too!</label>
                                </span>

                                <span className="sd-check-new__wrapper" tabIndex={-1}>
                                    <input type="radio" className="sd-check-new__input" id="id38" name="testradio" tabIndex={0} />
                                    <span className="sd-radio-new"></span>   
                                    <label className="" htmlFor="id38" >Me too, me too!</label>
                                </span>
                            </div>

                            <div className="sd-check__group-new  sd-margin-t--4">
                                <span className="sd-check-new__wrapper" tabIndex={-1} label-position="left">
                                    <input type="checkbox" className="sd-check-new__input" id="id39" value="test" tabIndex={0} />
                                    <span className="sd-check-new"></span>
                                    <label className="" htmlFor="id39" >Check me, I'm on the left!</label>
                                </span>

                                <span className="sd-check-new__wrapper" tabIndex={-1} label-position="left">
                                    <input type="checkbox" className="sd-check-new__input" id="id40" value="test" tabIndex={0} />
                                    <span className="sd-check-new"></span>
                                    <label className="" htmlFor="id40" >I'm on left too!</label>
                                </span>
                            </div>
                            <div className="sd-check-button__group sd-check-button__group--left sd-margin-t--4">
                                <span className="sd-check-button sd-check-button--native" tabIndex={-1} >
                                    <input type="checkbox" className="sd-check-button__input" id="id14" value="test" tabIndex={0} />
                                    <label className="sd-check-button__text-label" htmlFor="id14">
                                        <i className="icon-th-list" aria-hidden="true"></i>
                                        <span className="sd-check-button__text-label-inner">Button style rules!</span>
                                    </label>
                                </span>
                                <span className="sd-check-button sd-check-button--native" tabIndex={-1} >
                                    <input type="checkbox" className="sd-check-button__input" id="id15" value="test" tabIndex={0} />
                                    <label className="sd-check-button__text-label" htmlFor="id15" aria-label="">
                                        <i className="icon-th" aria-hidden="true"></i>
                                        <span className="sd-check-button__text-label-inner">Button style rules!</span>
                                    </label>
                                </span>
                                <span className="sd-check-button sd-check-button--native" tabIndex={-1} >
                                    <input type="checkbox" className="sd-check-button__input" disabled id="id16" value="test" tabIndex={0} />
                                    <label className="sd-check-button__text-label" htmlFor="id16">
                                        <span className="sd-check-button__text-label-inner">Button style rules!</span>
                                    </label>
                                </span>
                                <span className="sd-check-button sd-check-button--native" tabIndex={-1} >
                                    <input type="checkbox" className="sd-check-button__input" id="id17" value="test" tabIndex={0} />
                                    <label className="sd-check-button__text-label" htmlFor="id17" aria-label="testing the label for SR">
                                        <i className="icon-th" aria-hidden="true"></i>
                                    </label>
                                </span>

                            </div>
                        </div>
                    </Components.MainPanel>
                    {/* MAIN CONTENT (Monitoring) */}
                </Components.LayoutContainer>
            </Components.Layout >
        );
    }
}
