import * as React from 'react';
import * as Components from './components/Index';
import { Checkbox, RadioGroup, CheckboxButton, RadioButtonGroup, Button, NavButton, SubNav, Dropdown, CheckButtonGroup, Input, Select, Option, Label, Icon, IconButton, CheckGroup, GridList, Badge, ThemeSelector, Container } from '../../../../app-typescript/index';
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
    value1: string;
    value2: string;
    value3: string;
    value4: string;
    value5: string;
    value6: string;
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
                        </div>
                        {/* <hr />
                        <div className="sd-theme-selector__list">
                            <div className="sd-theme-selector__item">
                                <figure className="sd-theme-selector__item-thumb" data-theme="light-ui">
                                    <svg viewBox="0 0 156 94" xmlns="http://www.w3.org/2000/svg">
                                        <g fill="none" fillRule="evenodd">
                                            <path d="m0 0h156v94h-156z" fill="var(--sd-colour-panel-bg--100)"/>
                                            <circle cx="144" cy="33" fill="var(--color-text-lighter)" r="4"/>
                                            <rect fill="var(--sd-colour-interactive)" height="15" rx="2" width="58" x="91" y="71"/>
                                            <g fill="var(--sd-colour-btn-bg-neutral)">
                                                <rect height="15" rx="2" width="58" x="29" y="52"/>
                                                <rect height="15" rx="2" width="58" x="29" y="71"/>
                                                <rect height="15" rx="2" width="58" x="91" y="52"/>
                                            </g>
                                            <g fill="#fff">
                                                <rect height="3" rx="1.5" width="9" x="99" y="77"/>
                                                <rect height="3" rx="1.5" width="11" x="130" y="77"/>
                                                <rect height="3" rx="1.5" width="18" x="110" y="77"/>
                                            </g>
                                            <g fill="var(--color-text-light)">
                                                <rect height="3" rx="1.5" width="9" x="37" y="58"/>
                                                <rect height="3" rx="1.5" width="11" x="68" y="58"/>
                                                <rect height="3" rx="1.5" width="18" x="48" y="58"/>
                                                <rect height="3" rx="1.5" width="9" x="37" y="77"/>
                                                <rect height="3" rx="1.5" width="11" x="68" y="77"/>
                                                <rect height="3" rx="1.5" width="18" x="48" y="77"/>
                                                <rect height="3" rx="1.5" width="9" x="99" y="58"/>
                                                <rect height="3" rx="1.5" width="11" x="130" y="58"/>
                                                <rect height="3" rx="1.5" width="18" x="110" y="58"/>
                                            </g>
                                            <g fill="var(--color-text)">
                                                <rect height="4" rx="2" width="11" x="29" y="31"/>
                                                <rect height="4" rx="2" width="14" x="70" y="31"/>
                                                <rect height="4" rx="2" width="23" x="43" y="31"/>
                                            </g>
                                            <path d="m0 22h22v72h-22z" fill="var(--sd-colour-sidebar-menu--00)"/>
                                            <circle cx="11" cy="52" fill="var(--sd-colour-interactive)" r="6"/>
                                            <g fill="var(--color-icon-default)" opacity=".75">
                                                <circle cx="11" cy="34" r="6"/>
                                                <circle cx="11" cy="70" r="6"/>
                                            </g>
                                            <path d="m0 0h156v22h-156z" fill="var(--sd-colour-top-menu)"/>
                                            <path d="m0 22h156v1h-156z" fill="var(--sd-colour--shadow-line)"/>
                                            <g fill="hsla(214, 13%, 65%, 1)" opacity="1">
                                                <rect height="4" rx="2" width="11" x="31" y="9"/>
                                                <rect height="4" rx="2" width="23" x="45" y="9"/>
                                            </g>
                                            <path d="m22 44h134v1h-134z" fill="var(--sd-colour-line--medium)"/>
                                            <path d="m0 0h22v22h-22z" fill="var(--sd-colour-top-menu__btn)"/>
                                            <path d="m15 13v1h-8v-1zm0-3v1h-8v-1zm0-3v1h-8v-1z" fill="#fff"/>
                                        </g>
                                    </svg>
                                </figure>
                                <div className="sd-theme-selector__item-action">
                                    <input type="radio" className="sd-theme-selector__input" id="id50" name="id5" />
                                    <span className="sd-radio-new"></span>
                                    <label className="sd-theme-selector__label" htmlFor="id50">Light</label>
                                </div>
                            </div>

                            <div className="sd-theme-selector__item">
                                <figure className="sd-theme-selector__item-thumb" data-theme="dark-ui">
                                    <svg viewBox="0 0 156 94" xmlns="http://www.w3.org/2000/svg">
                                        <g fill="none" fillRule="evenodd">
                                            <path d="m0 0h156v94h-156z" fill="var(--sd-colour-panel-bg--100)"/>
                                            <circle cx="144" cy="33" fill="var(--color-text-lighter)" r="4"/>
                                            <rect fill="var(--sd-colour-interactive)" height="15" rx="2" width="58" x="91" y="71"/>
                                            <g fill="var(--sd-colour-btn-bg-neutral)">
                                                <rect height="15" rx="2" width="58" x="29" y="52"/>
                                                <rect height="15" rx="2" width="58" x="29" y="71"/>
                                                <rect height="15" rx="2" width="58" x="91" y="52"/>
                                            </g>
                                            <g fill="#fff">
                                                <rect height="3" rx="1.5" width="9" x="99" y="77"/>
                                                <rect height="3" rx="1.5" width="11" x="130" y="77"/>
                                                <rect height="3" rx="1.5" width="18" x="110" y="77"/>
                                            </g>
                                            <g fill="var(--color-text-light)">
                                                <rect height="3" rx="1.5" width="9" x="37" y="58"/>
                                                <rect height="3" rx="1.5" width="11" x="68" y="58"/>
                                                <rect height="3" rx="1.5" width="18" x="48" y="58"/>
                                                <rect height="3" rx="1.5" width="9" x="37" y="77"/>
                                                <rect height="3" rx="1.5" width="11" x="68" y="77"/>
                                                <rect height="3" rx="1.5" width="18" x="48" y="77"/>
                                                <rect height="3" rx="1.5" width="9" x="99" y="58"/>
                                                <rect height="3" rx="1.5" width="11" x="130" y="58"/>
                                                <rect height="3" rx="1.5" width="18" x="110" y="58"/>
                                            </g>
                                            <g fill="var(--color-text)">
                                                <rect height="4" rx="2" width="11" x="29" y="31"/>
                                                <rect height="4" rx="2" width="14" x="70" y="31"/>
                                                <rect height="4" rx="2" width="23" x="43" y="31"/>
                                            </g>
                                            <path d="m0 22h22v72h-22z" fill="var(--sd-colour-sidebar-menu--00)"/>
                                            <circle cx="11" cy="52" fill="var(--sd-colour-interactive)" r="6"/>
                                            <g fill="var(--color-icon-default)" opacity=".75">
                                                <circle cx="11" cy="34" r="6"/>
                                                <circle cx="11" cy="70" r="6"/>
                                            </g>
                                            <path d="m0 0h156v22h-156z" fill="var(--sd-colour-top-menu)"/>
                                            <path d="m0 22h156v1h-156z" fill="var(--sd-colour--shadow-line)"/>
                                            <g fill="hsla(214, 13%, 65%, 1)" opacity="1">
                                                <rect height="4" rx="2" width="11" x="31" y="9"/>
                                                <rect height="4" rx="2" width="23" x="45" y="9"/>
                                            </g>
                                            <path d="m22 44h134v1h-134z" fill="var(--sd-colour-line--medium)"/>
                                            <path d="m0 0h22v22h-22z" fill="var(--sd-colour-top-menu__btn)"/>
                                            <path d="m15 13v1h-8v-1zm0-3v1h-8v-1zm0-3v1h-8v-1z" fill="#fff"/>
                                        </g>
                                    </svg>
                                </figure>
                                <div className="sd-theme-selector__item-action">
                                    <input type="radio" className="sd-theme-selector__input" id="id50" name="id5" />
                                    <span className="sd-radio-new"></span>
                                    <label className="sd-theme-selector__label" htmlFor="id50">Dark</label>
                                </div>
                            </div>

                            <div className="sd-theme-selector__item">
                                <figure className="sd-theme-selector__item-thumb" data-theme="accessible-light-ui">
                                    <svg viewBox="0 0 156 94" xmlns="http://www.w3.org/2000/svg">
                                        <g fill="none" fillRule="evenodd">
                                            <path d="m0 0h156v94h-156z" fill="var(--sd-colour-panel-bg--100)"/>
                                            <circle cx="144" cy="33" fill="var(--color-text-lighter)" r="4"/>
                                            <rect fill="var(--sd-colour-interactive)" height="15" rx="2" width="58" x="91" y="71"/>
                                            <g fill="var(--sd-colour-btn-bg-neutral)">
                                                <rect height="15" rx="2" width="58" x="29" y="52"/>
                                                <rect height="15" rx="2" width="58" x="29" y="71"/>
                                                <rect height="15" rx="2" width="58" x="91" y="52"/>
                                            </g>
                                            <g fill="#fff">
                                                <rect height="3" rx="1.5" width="9" x="99" y="77"/>
                                                <rect height="3" rx="1.5" width="11" x="130" y="77"/>
                                                <rect height="3" rx="1.5" width="18" x="110" y="77"/>
                                            </g>
                                            <g fill="var(--color-text-light)">
                                                <rect height="3" rx="1.5" width="9" x="37" y="58"/>
                                                <rect height="3" rx="1.5" width="11" x="68" y="58"/>
                                                <rect height="3" rx="1.5" width="18" x="48" y="58"/>
                                                <rect height="3" rx="1.5" width="9" x="37" y="77"/>
                                                <rect height="3" rx="1.5" width="11" x="68" y="77"/>
                                                <rect height="3" rx="1.5" width="18" x="48" y="77"/>
                                                <rect height="3" rx="1.5" width="9" x="99" y="58"/>
                                                <rect height="3" rx="1.5" width="11" x="130" y="58"/>
                                                <rect height="3" rx="1.5" width="18" x="110" y="58"/>
                                            </g>
                                            <g fill="var(--color-text)">
                                                <rect height="4" rx="2" width="11" x="29" y="31"/>
                                                <rect height="4" rx="2" width="14" x="70" y="31"/>
                                                <rect height="4" rx="2" width="23" x="43" y="31"/>
                                            </g>
                                            <path d="m0 22h22v72h-22z" fill="var(--sd-colour-sidebar-menu--00)"/>
                                            <circle cx="11" cy="52" fill="var(--sd-colour-interactive)" r="6"/>
                                            <g fill="var(--color-icon-default)" opacity=".75">
                                                <circle cx="11" cy="34" r="6"/>
                                                <circle cx="11" cy="70" r="6"/>
                                            </g>
                                            <path d="m0 0h156v22h-156z" fill="var(--sd-colour-top-menu)"/>
                                            <path d="m0 22h156v1h-156z" fill="var(--sd-colour--shadow-line)"/>
                                            <g fill="hsla(214, 13%, 65%, 1)" opacity="1">
                                                <rect height="4" rx="2" width="11" x="31" y="9"/>
                                                <rect height="4" rx="2" width="23" x="45" y="9"/>
                                            </g>
                                            <path d="m22 44h134v1h-134z" fill="var(--sd-colour-line--medium)"/>
                                            <path d="m0 0h22v22h-22z" fill="var(--sd-colour-top-menu__btn)"/>
                                            <path d="m15 13v1h-8v-1zm0-3v1h-8v-1zm0-3v1h-8v-1z" fill="#fff"/>
                                        </g>
                                    </svg>
                                </figure>
                                <div className="sd-theme-selector__item-action">
                                    <input type="radio" className="sd-theme-selector__input" id="id50" name="id5" />
                                    <span className="sd-radio-new"></span>
                                    <label className="sd-theme-selector__label" htmlFor="id50">High Contrast</label>
                                </div>
                            </div>
                        </div> */}
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
