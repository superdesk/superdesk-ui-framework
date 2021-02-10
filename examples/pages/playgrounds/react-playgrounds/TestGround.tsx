import * as React from 'react';
import * as Components from './components/Index';
import { Checkbox, Radio, CheckboxButton, RadioButton, Button, NavButton, SubNav, Dropdown, CheckButtonGroup, Input, Select, Option, Label, Icon, IconButton, CheckGroup, GridList, Badge } from '../../../../app-typescript/index';
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
                    <Components.MainPanel>
                        <div className='form__row'>
                            <div className="sd-check__group-new sd-check__group-new--vertical">
                                <Checkbox label={{text: 'Not defined label side'}} onChange={(value) => console.log('value changed', value)} />
                                <Checkbox label={{text: 'Defined label side left', side: 'left'}} onChange={(value) => console.log('value changed', value)} />
                                <Checkbox label={{text: 'Defined label side right', side: 'right'}} onChange={(value) => console.log('value changed', value)} />
                                <Checkbox label={{text: 'Here label is hidden', hidden: true}} onChange={(value) => console.log('value changed', value)} />
                                <Checkbox label={{text: 'This checkbox is disabled'}} onChange={(value) => console.log('value changed', value)} disabled={true}/>
                            </div>

                            <hr />

                            <Radio options={[
                                {label: "First radio 1", value: "Value 1"},
                                {label: "First radio 2", value: "Value 2"},
                                {label: "First radio 3", value: "Value 3"},
                            ]} onChange={(value) => console.log('value changed', value)} />

                            <hr />

                            <div className="sd-check__group-new sd-check-button__group--left">
                                <CheckboxButton label={{text: 'Button style rules!'}} onChange={(value) => console.log('value changed', value)} />
                                <CheckboxButton label={{text: 'Button style rules again!', icon: 'th'}} onChange={(value) => console.log('value changed', value)} />
                                <CheckboxButton label={{text: 'Hell yeah!'}} onChange={(value) => console.log('value changed', value)} />
                            </div>

                            <hr />

                            <RadioButton options={[
                                {label: "Radio button with icon", value: "Value 1", icon: "th-list"},
                                {label: "Only icon", value: "Value 2", icon: "th", labelHidden: true},
                                {label: "Normal radio button", value: "Value 3"},
                            ]} onChange={(value) => console.log('value changed', value)} />
                        </div>
                    </Components.MainPanel>
                    {/* MAIN CONTENT (Monitoring) */}
                </Components.LayoutContainer>
            </Components.Layout >
        );
    }
}
