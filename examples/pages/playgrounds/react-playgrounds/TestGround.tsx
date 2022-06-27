import * as React from 'react';
import * as Components from './components/Index';
import { Checkbox, RadioGroup, CheckboxButton, RadioButtonGroup, Button, NavButton, SubNav, Dropdown, CheckButtonGroup, Input, Select, Option, Label, Icon, IconButton, CheckGroup, GridList, Badge, ThemeSelector, Container, IconLabel, Tooltip, Spinner } from '../../../../app-typescript/index';
import { Carousel } from '../../../../app-typescript/index';
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
    value1?: string;
    value2?: string;
    value3?: string;
    value4?: string;
    value5?: string;
    value6?: string;
    selctedTheme: string;
}

export class TestGround extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {
            itemType: 'itemtype01',
            itemSelected1: false,
            itemSelected2: false,
            itemSelected3: false,
            value1: undefined,
            value2: undefined,
            value3: undefined,
            value4: undefined,
            value5: undefined,
            value6: undefined,
            selctedTheme: 'light',
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
                        <h3 className="docs-page__h3 sd-margin-y--0">Table list</h3>
                        <hr />
                        <ul className='table-list'>
                            <li className='table-list__item table-list__item--clickable table-list__item--draggable'>
                                <div className='table-list__item-content'>
                                    <div className='table-list__item-content-block'>
                                        <Label style='translucent' text='aacc' />
                                        <Label style='translucent' type='primary' text='prlg' />
                                    </div>
                                    <div className='table-list__item-content-block table-list__item-content-block--center'>
                                        <span>Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.</span>
                                    </div>
                                    <div className='table-list__item-content-block'>
                                        <IconLabel style='translucent' text='Label success' type='success' icon='time' />
                                    </div>
                                </div>
                                <div className='table-list__slide-in-actions'>
                                    <IconButton icon='dots-vertical' size='small' ariaValue='More actions' onClick={()=> false} />
                                </div>
                            </li>
                            <li className='table-list__item table-list__item--clickable table-list__item--draggable'>
                                <div className='table-list__item-content'>
                                    <div className='table-list__item-content-block'>
                                        <Label style='translucent' type='warning' text='pokr' />
                                        <Label style='translucent' text='slika' />
                                    </div>
                                    <div className='table-list__item-content-block table-list__item-content-block--center'>
                                        <span>Nullam id dolor id nibh ultricies vehicula ut id elit.</span>
                                    </div>
                                    <div className='table-list__item-content-block'>
                                        <IconLabel style='translucent' text='Label success' type='success' icon='time' />
                                    </div>
                                </div>
                                <div className='table-list__slide-in-actions'>
                                    <IconButton icon='dots-vertical' size='small' ariaValue='More actions' onClick={()=> false} />
                                </div>
                            </li>
                            <li className='table-list__item table-list__item--clickable'>
                                <div className='table-list__item-content'>
                                    <div className='table-list__item-content-block'>
                                        <Label style='translucent' type='warning' text='pokr' />
                                        <Label style='translucent' text='slika' />
                                    </div>
                                    <div className='table-list__item-content-block table-list__item-content-block--center'>
                                        <span>Nullam id dolor id nibh ultricies vehicula ut id elit.</span>
                                    </div>
                                    <div className='table-list__item-content-block'>
                                        <IconLabel style='translucent' text='Label success' type='success' icon='time' />
                                    </div>
                                </div>
                                <div className='table-list__slide-in-actions'>
                                    <IconButton icon='pencil' size='small' ariaValue='More actions' onClick={()=> false} />
                                    <IconButton icon='trash' size='small' ariaValue='More actions' onClick={()=> false} />
                                </div>
                            </li>
                            <li className='table-list__item table-list__item--clickable table-list__item--selected'>
                                <div className='table-list__item-content'>
                                    <div className='table-list__item-content-block'>
                                        <Label style='translucent' type='warning' text='pokr' />
                                        <Label style='translucent' text='slika' />
                                    </div>
                                    <div className='table-list__item-content-block table-list__item-content-block--center'>
                                        <span>Nullam id dolor id nibh ultricies vehicula ut id elit.</span>
                                    </div>
                                    <div className='table-list__item-content-block'>
                                        <IconLabel style='translucent' text='Label success' type='success' icon='time' />
                                    </div>
                                </div>
                                <div className='table-list__slide-in-actions'>
                                    <IconButton icon='dots-vertical' size='small' ariaValue='More actions' onClick={()=> false} />
                                </div>
                            </li>
                            <li className='table-list__item table-list__item--clickable'>
                                <div className='table-list__item-content'>
                                    <div className='table-list__item-content-block'>
                                        <Label style='translucent' type='warning' text='pokr' />
                                        <Label style='translucent' text='slika' />
                                    </div>
                                    <div className='table-list__item-content-block table-list__item-content-block--center'>
                                        <span>Nullam id dolor id nibh ultricies vehicula ut id elit.</span>
                                    </div>
                                    <div className='table-list__item-content-block'>
                                        <IconLabel style='translucent' text='Label success' type='success' icon='time' />
                                    </div>
                                </div>
                                <div className='table-list__slide-in-actions'>
                                    <IconButton icon='dots-vertical' size='small' ariaValue='More actions' onClick={()=> false} />
                                </div>
                            </li>
                        </ul>

                        <h3 className="docs-page__h3 sd-margin-y--0 sd-margin-t--3">Table list with items between</h3>
                        <hr />
                        <ul className='table-list table-list--contained'>
                            <li className='table-list__item-container'>
                                <div className='table-list__item table-list__item--clickable table-list__item--draggable'>
                                    <div className='table-list__item-content'>
                                        <div className='table-list__item-content-block'>
                                            <Label style='translucent' text='aacc' />
                                            <Label style='translucent' type='primary' text='prlg' />
                                        </div>
                                        <div className='table-list__item-content-block table-list__item-content-block--center'>
                                            <span>Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.</span>
                                        </div>
                                        <div className='table-list__item-content-block'>
                                            <IconLabel style='translucent' text='Label success' type='success' icon='time' />
                                        </div>
                                    </div>
                                    <div className='table-list__slide-in-actions'>
                                        <IconButton icon='dots-vertical' size='small' ariaValue='More actions' onClick={()=> false} />
                                    </div>
                                </div>

                                <div className='table-list__add-bar-container'>
                                    <Tooltip text='Add item' flow='top' appendToBody={true}>
                                        <div className='table-list__add-bar'>
                                            <Button type="primary" icon="plus-large" text="Add item" size="small" shape="round" iconOnly={true} onClick={()=> false} />
                                        </div>
                                    </Tooltip>
                                </div>
                            </li>

                            <li className='table-list__item-container'>
                                <div className='table-list__item table-list__item--clickable table-list__item--draggable'>
                                    <div className='table-list__item-content'>
                                        <div className='table-list__item-content-block'>
                                            <Label style='translucent' type='warning' text='pokr' />
                                            <Label style='translucent' text='slika' />
                                        </div>
                                        <div className='table-list__item-content-block table-list__item-content-block--center'>
                                            <span>Nullam id dolor id nibh ultricies vehicula ut id elit.</span>
                                        </div>
                                        <div className='table-list__item-content-block'>
                                            <IconLabel style='translucent' text='Label success' type='success' icon='time' />
                                        </div>
                                    </div>
                                    <div className='table-list__slide-in-actions'>
                                        <IconButton icon='dots-vertical' size='small' ariaValue='More actions' onClick={()=> false} />
                                    </div>
                                </div>

                                <div className='table-list__add-bar-container'>
                                    <Tooltip text='Add item' flow='top' appendToBody={true}>
                                        <div className='table-list__add-bar'>
                                            <Button type="primary" icon="plus-large" text="Add item" size="small" shape="round" iconOnly={true} onClick={()=> false} />
                                        </div>
                                    </Tooltip>
                                </div>
                            </li>

                            <li className='table-list__item-container'>
                                <div className='table-list__item table-list__item--clickable table-list__item--draggable'>
                                    <div className='table-list__item-content'>
                                        <div className='table-list__item-content-block'>
                                            <Label style='translucent' type='warning' text='pokr' />
                                            <Label style='translucent' text='slika' />
                                        </div>
                                        <div className='table-list__item-content-block table-list__item-content-block--center'>
                                            <span>Nullam id dolor id nibh ultricies vehicula ut id elit.</span>
                                        </div>
                                        <div className='table-list__item-content-block'>
                                            <IconLabel style='translucent' text='Label success' type='success' icon='time' />
                                        </div>
                                    </div>
                                    <div className='table-list__slide-in-actions'>
                                        <IconButton icon='pencil' size='small' ariaValue='More actions' onClick={()=> false} />
                                        <IconButton icon='trash' size='small' ariaValue='More actions' onClick={()=> false} />
                                    </div>
                                </div>

                                <div className='table-list__add-bar-container'>
                                    <Tooltip text='Add item' flow='top' appendToBody={true}>
                                        <div className='table-list__add-bar'>
                                            <Button type="primary" icon="plus-large" text="Add item" size="small" shape="round" iconOnly={true} onClick={()=> false} />
                                        </div>
                                    </Tooltip>
                                </div>
                            </li>
                        </ul>

                        <hr /><hr />

                        <h3 className="docs-page__h3 sd-margin-y--0">Checkbox</h3>
                        <hr />
                        <div className="sd-check__group-new sd-check__group-new--vertical">
                            <Checkbox label={{text: 'Label side not defined'}} onChange={(value) => console.log('value changed', value)} />
                            <Checkbox label={{text: 'Defined label side - right', side: 'end'}} onChange={(value) => console.log('value changed', value)} />
                            <Checkbox label={{text: 'This checkbox is disabled'}} onChange={(value) => console.log('value changed', value)} disabled={true}/>
                        </div>

                        <hr />

                        <Checkbox label={{text: 'Defined label side - left', side: 'start'}} onChange={(value) => console.log('value changed', value)} />

                        <hr />

                        <Checkbox label={{text: 'The label is hidden here', hidden: true}} onChange={(value) => console.log('value changed', value)} />
                        
                        <hr />

                        <div className="sd-check-button__group sd-check-button__group--start">
                            <CheckboxButton label={{text: 'CheckboxButton rules!'}} onChange={(value) => console.log('value changed', value)} />
                            <CheckboxButton label={{text: 'CheckboxButton rules again!', icon: 'th'}} onChange={(value) => console.log('value changed', value)} />
                            <CheckboxButton label={{text: 'Hell yeah!'}} onChange={(value) => console.log('value changed', value)} />
                        </div>

                        <hr /><hr />
                        <h3 className="docs-page__h3 sd-margin-y--0 sd-margin-b--3">Duration input</h3>

                        
                        <div className="sd-input">
                            <label className="sd-input__label" id="duration01">Input label</label>
                            <div className="sd-input__duration-input" id="id06" aria-describedby="duration01">
                                <input type="number" className="" placeholder='00'/>
                                <span className="sd-input__suffix">h</span>
                                <input type="number" className="" placeholder='00'/>
                                <span className="sd-input__suffix">m</span>
                                <input type="number" className="" placeholder='00'/>
                                <span className="sd-input__suffix">s</span>
                            </div>
                            <div className="sd-input__char-count">0 / 30</div>
                            <div className="sd-input__message-box">
                                <div className="sd-input__hint">This is some hint message</div>
                            </div>
                        </div>

                        <hr />

                        <h3 className="docs-page__h3 sd-margin-t--2 sd-margin-b--0">Radio</h3>
                        <hr />
                        <div className="sd-check__group-new">
                            <RadioGroup value={this.state.value2} options={[
                                {label: "Radio 1", value: "somevalue1"},
                                {label: "Radio 2", value: "somevalue2"},
                                {label: "Radio 3", value: "somevalue3"},
                            ]} onChange={(value) => this.setState(() => ({ value2: value }))} />
                        </div>

                        <hr />

                        <div className="sd-check__group-new sd-check-button__group--left">
                            <RadioButtonGroup value={this.state.value3} options={[
                                {label: "RadioButton with an icon", value: "somevalue4", icon: "th-list"},
                                {label: "RadioButton with no visible text, only an icon", value: "somevalue5", icon: "th", labelHidden: true},
                                {label: "Normal RadioButton", value: "somevalue6"},
                            ]} onChange={(value) => this.setState(() => ({ value3: value }))} />
                        </div>


                        <hr />
                        
                        {/* <Carousel></Carousel> */}

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
                        <hr />
                        <div className="button-group button-group--comfort">
                            <div className="color-swatch colour-test--1"></div>
                            <div className="color-swatch colour-test--2"></div>
                            <Spinner />
                        </div>

                        <hr />
                        <Container className='sd-padding--4 sd-panel-bg--100 sd-radius--large'>
                            <ThemeSelector size='small' options={[
                                {label: 'Light', value: 'light', theme: 'light'},
                                {label: 'Dark', value: 'dark', theme: 'dark'},
                                {label: 'High Contrast', value: 'high-contrast', theme: 'contrast-light', disabled: true},
                            ]} onChange={($event)=>{this.setState({selctedTheme: $event})}} value={this.state.selctedTheme} />
                        </Container>
                        <hr />
                        <Container className='sd-padding--4 sd-panel-bg--100 sd-radius--large'>
                            <div className='sd-dropzone__drop-target'>
                                <div className='sd-dropzone__target-border'></div>
                                <figure className='sd-dropzone__icon'>
                                    <Icon name='upload-alt' size='big' />
                                </figure>
                                <h4 className='sd-dropzone__heading'>
                                    Upload files
                                </h4>
                                <p className='sd-dropzone__description'>Drag one or more files here to upload them, or just click the button below.</p>
                                <button className='btn btn--hollow sd-dropzone__action'>Attach files</button>
                            </div>
                        </Container>
                    </Components.MainPanel>
                    {/* MAIN CONTENT (Monitoring) */}
                </Components.LayoutContainer>
            </Components.Layout >
        );
    }
}
