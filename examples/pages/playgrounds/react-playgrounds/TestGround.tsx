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
                        <h3 className="docs-page__h3 sd-margin-y--0">Checkbox</h3>
                        <hr />
                        <div className="sd-check__group-new sd-check__group-new--vertical">
                            <Checkbox label={{text: 'Label side not defined'}} onChange={(value) => console.log('value changed', value)} />
                            <Checkbox label={{text: 'Defined label side - right', side: 'right'}} onChange={(value) => console.log('value changed', value)} />
                            <Checkbox label={{text: 'This checkbox is disabled'}} onChange={(value) => console.log('value changed', value)} disabled={true}/>
                        </div>

                        <hr />

                        <Checkbox label={{text: 'Defined label side - left', side: 'left'}} onChange={(value) => console.log('value changed', value)} />

                        <hr />

                        <Checkbox label={{text: 'The label is hidden here', hidden: true}} onChange={(value) => console.log('value changed', value)} />
                        
                        <hr />

                        <div className="sd-check__group-new sd-check-button__group--left">
                            <CheckboxButton label={{text: 'CheckboxButton rules!'}} onChange={(value) => console.log('value changed', value)} />
                            <CheckboxButton label={{text: 'CheckboxButton rules again!', icon: 'th'}} onChange={(value) => console.log('value changed', value)} />
                            <CheckboxButton label={{text: 'Hell yeah!'}} onChange={(value) => console.log('value changed', value)} />
                        </div>

                        <hr /><hr />

                        <h3 className="docs-page__h3 sd-margin-t--2 sd-margin-b--0">Radio</h3>
                        <hr />
                        <div className="sd-check__group-new">
                            <Radio options={[
                                {label: "Radio 1", value: "Value 1"},
                                {label: "Radio 2", value: "Value 2"},
                                {label: "Radio 3", value: "Value 3"},
                            ]} onChange={(value) => console.log('value changed', value)} />
                        </div>

                        <hr />

                        <div className="sd-check__group-new sd-check-button__group--left">
                            <RadioButton options={[
                                {label: "RadioButton with an icon", value: "Value 1", icon: "th-list"},
                                {label: "RadioButton with no visible text, only an icon", value: "Value 2", icon: "th", labelHidden: true},
                                {label: "Normal RadioButton", value: "Value 3"},
                            ]} onChange={(value) => console.log('value changed', value)} />
                        </div>
                        <hr />
                        <div className="sd-thumb-carousel" data-theme="dark-ui">
                            <div className="sd-thumb-carousel__header">
                                <h4 className="sd-thumb-carousel__heading">Mountain bike Championships gallery</h4>
                                <Badge text='6' type='light' />
                                <div className="sd-thumb-carousel__header-block--r">
                                    <time>Today, 08. April 14:25</time>
                                    <IconButton icon="trash" ariaValue="Remove" onClick={()=> false} />
                                </div>
                            </div>
                            <div className="sd-thumb-carousel__content">
                                <div className="sd-thumb-carousel__container">
                                    <button className="icn-btn sd-thumb-carousel__btn--prev" aria-label="Previous">
                                        <Icon name="chevron-left-thin" />
                                    </button>
                                    <div className="sd-thumb-carousel__items-content">
                                        <div className="sd-thumb-carousel__items-container">
                                            <div className="sd-thumb-carousel__item">
                                                <div className="sd-thumb-carousel__cover-image-icon">
                                                    <Icon name="star" />
                                                </div>
                                                <div className="sd-thumb-carousel__item-inner">
                                                    <img src="/carousel-thumb--01.jpg" alt="test" />
                                                </div>
                                            </div>
                                            <div className="sd-thumb-carousel__item">
                                                <div className="sd-thumb-carousel__item-inner">
                                                    <img src="/carousel-thumb--02.jpg" alt="test" />
                                                </div>
                                            </div>
                                            <div className="sd-thumb-carousel__item">
                                                <div className="sd-thumb-carousel__item-inner">
                                                    <img src="/d_trump_2.jpg" alt="test" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <button className="icn-btn sd-thumb-carousel__btn--next" aria-label="Next">
                                        <Icon name="chevron-right-thin" />
                                    </button>
                                </div>
                                <ul className="sd-thumb-carousel__indicators">
                                    <li className="sd-thumb-carousel__indicator sd-thumb-carousel__indicator--highlight"><button aria-label="1"></button></li>
                                    <li className="sd-thumb-carousel__indicator"><button aria-label="2"></button></li>
                                    <li className="sd-thumb-carousel__indicator"><button aria-label="3"></button></li>

                                </ul>
                            </div>
                            <div className="sd-thumb-carousel__description">
                                Nulla vitae elit libero, a pharetra augue. Nulla vitae elit libero, a pharetra augue. 
                                Donec id elit non mi porta gravida at eget metus. Etiam porta sem malesuada magna mollis euismod. 
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cum sociis natoque penatibus et magnis dis 
                                parturient montes, nascetur ridiculus mus.
                            </div>
                        </div>
                    </Components.MainPanel>
                    {/* MAIN CONTENT (Monitoring) */}
                </Components.LayoutContainer>
            </Components.Layout >
        );
    }
}
