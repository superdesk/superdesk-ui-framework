import * as React from 'react';
import * as Markup from '../../js/react';
import { PropsList, Prop, Button, ButtonGroup, IconButton, Label, SlidingToolbar } from '../../../app-typescript';
import * as PanelElements from '../../../app-typescript/components/Layouts/Panel';

interface IProps {
    children?: React.ReactNode;
}

interface IState {
    openPanel1: boolean;
    openPanel2: boolean;
    openPanel3: boolean;
    openPanel4: boolean;
    openToolbar1: boolean;
}

export default class PanelDoc extends React.Component<IProps, IState> {
     constructor(props: IProps) {
         super(props);
         this.state = {
             openPanel1: true,
             openPanel2: true,
             openPanel3: true,
             openPanel4: true,
             openToolbar1: true
         }
    }

    // handlePanel() {
    //     this.setState((state) => ({
    //         openPanel: !state.openPanel,
    //     }));
    // }

    render() {
        return (
            <section className='docs-page__container'>
                <h2 className='docs-page__h2'>Panel</h2>
                
                <Markup.ReactMarkupCodePreview>{`
                    <Panel  side='left' size="small">
                        <PanelHeader title='Title for the Panel' handlePanelParent={()=> false}>
                        </PanelHeader>
                        <PanelContent>
                            <PanelContentBlock>
                                ...
                            </PanelContentBlock>
                        </PanelContent>
                        <PanelFooter>
                            <Button text='Clear' style='hollow' onClick={() => false} />
                            <Button text='Submit' type='primary' onClick={() => false} />
                        </PanelFooter>
                    </Panel>
                `}
                </Markup.ReactMarkupCodePreview>

                <p className="docs-page__paragraph">...</p>

                <Markup.ReactMarkup>
                    <Markup.ReactMarkupPreview>
                        <p className="docs-page__paragraph">// Left</p>
                        <div className='sd-display--flex' style={{border: '1px solid var(--sd-colour-line--medium)', backgroundColor: 'var(--sd-colour-panel-bg--100)', maxHeight: '400px'}}>
                            {this.state.openPanel1 ? null : 
                                <div className='sd-display--flex sd-flex--items-center sd-flex--justify-center sd-flex--grow'>
                                    <Button text="Open Panel" style="filled" onClick={() => this.setState({'openPanel1': true})} />
                                </div> 
                            }
                            <PanelElements.Panel side='left' background='light' open={this.state.openPanel1} size='x-small'>
                                <PanelElements.PanelHeader title='This is the title for the Panel' onClose={() => this.setState({'openPanel1': false})}>
                                </PanelElements.PanelHeader>
                                <PanelElements.PanelContent>
                                    <PanelElements.PanelContentBlock>
                                        <p className='sd-margin-b--2'>Maecenas sed diam eget risus varius blandit sit amet non magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas faucibus mollis interdum.
                                            Cras justo odio, dapibus ac facilisis in, egestas eget quam. Aenean lacinia bibendum nulla sed consectetur. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                        <p>Aenean lacinia bibendum nulla sed consectetur. Etiam porta sem malesuada magna mollis euismod. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis
                                            vestibulum. Nullam quis risus eget urna mollis ornare vel eu leo. Curabitur blandit tempus porttitor. Aenean lacinia bibendum nulla sed consectetur.</p>
                                    </PanelElements.PanelContentBlock>
                                </PanelElements.PanelContent>
                                <PanelElements.PanelFooter>
                                    <Button text='Clear' style='hollow' onClick={() => false} />
                                    <Button text='Submit' type='primary' onClick={() => false} />
                                </PanelElements.PanelFooter>
                            </PanelElements.Panel>
                        </div>
                    </Markup.ReactMarkupPreview>
                    <Markup.ReactMarkupCode>{`
                        // Left
                        {this.state.openPanel1 ? null : 
                            <div className='sd-display--flex sd-flex--items-center sd-flex--justify-center sd-flex--grow'>
                                <Button text="Open Panel" style="filled" onClick={() => this.setState({'openPanel1': true})} />
                            </div> 
                        }
                        <PanelElements.Panel side='left' background='light' open={this.state.openPanel1} size='x-small'>
                            <PanelElements.PanelHeader title='This is the title for the Panel' onClose={() => this.setState({'openPanel1': false})}>
                            </PanelElements.PanelHeader>
                            <PanelElements.PanelContent>
                                <PanelElements.PanelContentBlock>
                                    <p className='sd-margin-b--2'>Maecenas sed diam eget risus varius blandit sit amet non magna...</p>
                                    <p>Aenean lacinia bibendum nulla sed consectetur. Etiam porta sem malesuada...</p>
                                </PanelElements.PanelContentBlock>
                            </PanelElements.PanelContent>
                            <PanelElements.PanelFooter>
                                <Button text='Clear' style='hollow' onClick={() => false} />
                                <Button text='Submit' type='primary' onClick={() => false} />
                            </PanelElements.PanelFooter>
                        </PanelElements.Panel>
                    `}
                    </Markup.ReactMarkupCode>
                </Markup.ReactMarkup>

                <Markup.ReactMarkup>
                    <Markup.ReactMarkupPreview>
                        <p className="docs-page__paragraph">// Right, custom elements inside the footer + dark theme.</p>
                        <div className='sd-display--flex' style={{border: '1px solid var(--sd-colour-line--medium)', backgroundColor: 'var(--sd-colour-panel-bg--100)', maxHeight: '400px'}}>
                            {this.state.openPanel2 ? null :
                                <div className='sd-display--flex sd-flex--items-center sd-flex--justify-center sd-flex--grow'>
                                    <Button text="Open Panel" style="filled" onClick={() => this.setState({'openPanel2': true})} />
                                </div>
                            }
                            <PanelElements.Panel side='right' background='light' open={this.state.openPanel2} size='small' theme="dark">
                                <PanelElements.PanelHeader title='Right panel title' onClose={()=> this.setState({openPanel2: false})} color='blueGreyDarker'>
                                </PanelElements.PanelHeader>
                                <PanelElements.PanelContent>
                                    <PanelElements.PanelContentBlock>
                                        <p className='sd-margin-b--2'>Curabitur blandit tempus porttitor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed odio dui. Aenean eu leo quam. Pellentesque ornare sem 
                                            lacinia quam venenatis vestibulum.</p>
                                        <p className='sd-margin-b--2'>Donec ullamcorper nulla non metus auctor fringilla. Cras mattis consectetur purus sit amet fermentum. Donec id elit non mi porta gravida at eget metus.
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Duis mollis, est non commodo luctus,
                                            nisi erat porttitor ligula, eget lacinia odio sem nec elit. Vestibulum id ligula porta felis euismod semper.</p>
                                        <p>Aenean lacinia bibendum nulla sed consectetur. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam porta sem malesuada
                                            magna mollis euismod. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.</p>
                                    </PanelElements.PanelContentBlock>
                                </PanelElements.PanelContent>
                                <PanelElements.PanelFooter>
                                    <ButtonGroup align='start'>
                                        <Button text='one' style='hollow' onClick={()=> false} />
                                        <Button text='two' style='hollow' onClick={()=> false} />
                                        <Label text='Published' type='primary' style='translucent'/>
                                    </ButtonGroup>
                                    <ButtonGroup align='end'>
                                        <IconButton icon='pencil' ariaValue={'Edit'} onClick={() => false}  />
                                        <IconButton icon='dots-vertical' ariaValue={'More options'} onClick={() => false}  />
                                    </ButtonGroup>
                                </PanelElements.PanelFooter>
                            </PanelElements.Panel>
                        </div>
                    </Markup.ReactMarkupPreview>
                    <Markup.ReactMarkupCode>{`
                        // Right, custom elements inside the footer + dark theme.

                        {this.state.openPanel2 ? null :
                            <div className='sd-display--flex sd-flex--items-center sd-flex--justify-center sd-flex--grow'>
                                <Button text="Open Panel" style="filled" onClick={() => this.setState({'openPanel2': true})} />
                            </div>
                        }
                        <PanelElements.Panel side='right' background='light' open={this.state.openPanel2} size='small' theme="dark-ui">
                            <PanelElements.PanelHeader title='Right panel title' onClose={()=> this.setState({openPanel2: false})} color='blueGreyDarker'>
                            </PanelElements.PanelHeader>
                            <PanelElements.PanelContent>
                                <PanelElements.PanelContentBlock>
                                    <p className='sd-margin-b--2'>Curabitur blandit tempus porttitor. Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
                                    <p className='sd-margin-b--2'>Donec ullamcorper nulla non metus auctor fringilla. Cras mattis consectetur purus sit amet fermentum...</p>
                                    <p>Aenean lacinia bibendum nulla sed consectetur. Cum sociis natoque penatibus et magnis dis parturient...</p>
                                </PanelElements.PanelContentBlock>
                            </PanelElements.PanelContent>
                            <PanelElements.PanelFooter>
                                <ButtonGroup align='start'>
                                    <Button text='one' style='hollow' onClick={()=> false} />
                                    <Button text='two' style='hollow' onClick={()=> false} />
                                    <Label text='Published' type='primary' style='translucent'/>
                                </ButtonGroup>
                                <ButtonGroup align='end'>
                                    <IconButton icon='pencil' ariaValue={'Edit'} onClick={() => false}  />
                                    <IconButton icon='dots-vertical' ariaValue={'More options'} onClick={() => false}  />
                                </ButtonGroup>
                            </PanelElements.PanelFooter>
                        </PanelElements.Panel>
                    `}
                    </Markup.ReactMarkupCode>
                </Markup.ReactMarkup>

                <Markup.ReactMarkup>
                    <Markup.ReactMarkupPreview>
                        <p className="docs-page__paragraph">// With PanelHeaderSlidingToolbar element inside the PanelHeader</p>
                        <div className='sd-display--flex' style={{border: '1px solid var(--sd-colour-line--medium)', backgroundColor: 'var(--sd-colour-panel-bg--100)', maxHeight: '400px'}}>
                            {this.state.openPanel3 ? null :
                                <div className='sd-display--flex sd-flex--items-center sd-flex--justify-center sd-flex--grow'>
                                    <Button text="Open Panel" style="filled" onClick={() => this.setState({'openPanel3': true})} />
                                </div>
                            }
                            <PanelElements.Panel side='left' background='light' open={this.state.openPanel3} size='small'>
                                <PanelElements.PanelHeader title='Donec sed odio dui' onClose={()=> this.setState({openPanel3: false})}>
                                {!this.state.openToolbar1 ? null :
                                    <PanelElements.PanelHeaderSlidingToolbar>
                                        <ButtonGroup align='end'>
                                            <Button text='Cancel' style='hollow' onClick={()=> this.setState({openToolbar1: false})} />
                                            <Button text='Save' style='hollow' type='primary' onClick={()=> this.setState({openToolbar1: false})} />
                                        </ButtonGroup>
                                    </PanelElements.PanelHeaderSlidingToolbar>
                                }
                                </PanelElements.PanelHeader>
                                <PanelElements.PanelContent>
                                    <PanelElements.PanelContentBlock>
                                        <p className='sd-margin-b--2'>Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Donec id elit non mi porta gravida
                                            at eget metus. Nulla vitae elit libero, a pharetra augue. Maecenas faucibus mollis interdum. Vivamus sagittis lacus vel augue laoreet rutrum faucibus
                                            dolor auctor. Nulla vitae elit libero, a pharetra augue.</p>
                                        <p>Donec ullamcorper nulla non metus auctor fringilla. Cras mattis consectetur purus sit amet fermentum. Donec id elit non mi porta gravida at eget metus.
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Duis mollis, est non commodo luctus,
                                            nisi erat porttitor ligula, eget lacinia odio sem nec elit. Vestibulum id ligula porta felis euismod semper.</p>
                                    </PanelElements.PanelContentBlock>
                                </PanelElements.PanelContent>
                                <PanelElements.PanelFooter>
                                    {this.state.openToolbar1 ? null :
                                        <ButtonGroup align='start'>
                                            <Button text='Open Slide In Toolbar' style='hollow' onClick={()=> this.setState({openToolbar1: true})} />
                                        </ButtonGroup>
                                    }
                                    <ButtonGroup align='end'>
                                        <IconButton icon='dots-vertical' ariaValue={'More options'} onClick={() => false}  />
                                    </ButtonGroup>
                                </PanelElements.PanelFooter>
                            </PanelElements.Panel>
                        </div>
                    </Markup.ReactMarkupPreview>
                    <Markup.ReactMarkupCode>{`
                        // With PanelHeaderSlidingToolbar element inside the PanelHeader

                        {this.state.openPanel3 ? null :
                            <div className='sd-display--flex sd-flex--items-center sd-flex--justify-center sd-flex--grow'>
                                <Button text="Open Panel" style="filled" onClick={() => this.setState({'openPanel3': true})} />
                            </div>
                        }
                        <PanelElements.Panel side='left' background='light' open={this.state.openPanel3} size='small'>
                            <PanelElements.PanelHeader title='Donec sed odio dui' onClose={()=> this.setState({openPanel3: false})}>
                            {!this.state.openToolbar1 ? null :
                                <PanelElements.PanelHeaderSlidingToolbar>
                                    <ButtonGroup align='end'>
                                        <Button text='Cancel' style='hollow' onClick={()=> this.setState({openToolbar1: false})} />
                                        <Button text='Save' style='hollow' type='primary' onClick={()=> this.setState({openToolbar1: false})} />
                                    </ButtonGroup>
                                </PanelElements.PanelHeaderSlidingToolbar>
                            }
                            </PanelElements.PanelHeader>
                            <PanelElements.PanelContent>
                                <PanelElements.PanelContentBlock>
                                    <p className='sd-margin-b--2'>Fusce dapibus, tellus ac cursus commodo...</p>
                                    <p>Donec ullamcorper nulla non metus auctor fringilla. Cras mattis consectetur purus...</p>
                                </PanelElements.PanelContentBlock>
                            </PanelElements.PanelContent>
                            <PanelElements.PanelFooter>
                                {this.state.openToolbar1 ? null :
                                    <ButtonGroup align='start'>
                                        <Button text='Open Slide In Toolbar' style='hollow' onClick={()=> this.setState({openToolbar1: true})} />
                                    </ButtonGroup>
                                }
                                <ButtonGroup align='end'>
                                    <IconButton icon='dots-vertical' ariaValue={'More options'} onClick={() => false}  />
                                </ButtonGroup>
                            </PanelElements.PanelFooter>
                        </PanelElements.Panel>
                    `}
                    </Markup.ReactMarkupCode>
                </Markup.ReactMarkup>

                <Markup.ReactMarkup>
                    <Markup.ReactMarkupPreview>
                        <p className="docs-page__paragraph">// With PanelTools (allowing custom actions) + dark theme</p>
                        <div className='sd-display--flex' style={{border: '1px solid var(--sd-colour-line--medium)', backgroundColor: 'var(--sd-colour-panel-bg--100)', maxHeight: '400px'}}>
                            {this.state.openPanel4 ? null :
                                <div className='sd-display--flex sd-flex--items-center sd-flex--justify-center sd-flex--grow'>
                                    <Button text="Open Panel" style="filled" onClick={() => this.setState({'openPanel4': true})} />
                                </div>
                            }
                            <PanelElements.Panel side='left' background='light' open={this.state.openPanel4} size='x-small' theme='dark'>
                                <PanelElements.PanelHeader title='Donec sed odio dui'>
                                    <PanelElements.PanelTools tools={[
                                        {title: 'Delete', icon: 'trash', onClick: () => false, ariaValue: 'Delete' },
                                        {title: 'Edit', icon: 'pencil', onClick: () => false, ariaValue: 'Edit' },
                                        {title: 'Close', icon: 'close-small', onClick: ()=> this.setState({openPanel4: false}), ariaValue: 'Close' },
                                    ]} />
                                </PanelElements.PanelHeader>
                                <PanelElements.PanelContent>
                                    <PanelElements.PanelContentBlock>
                                        <p className='sd-margin-b--2'>Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Donec id elit non mi porta gravida
                                            at eget metus. Nulla vitae elit libero, a pharetra augue.</p>
                                        <p>Donec ullamcorper nulla non metus auctor fringilla. Cras mattis consectetur purus sit amet fermentum. Donec id elit non mi porta gravida at eget metus.
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                    </PanelElements.PanelContentBlock>
                                </PanelElements.PanelContent>
                                <PanelElements.PanelFooter>
                                    <Button text='Cancel' style='hollow' onClick={() => false} />
                                    <Button text='Save' type='primary' onClick={() => false} />
                                </PanelElements.PanelFooter>
                            </PanelElements.Panel>
                        </div>
                    </Markup.ReactMarkupPreview>
                    <Markup.ReactMarkupCode>{`
                        // With PanelTools (allowing custom actions) + dark theme

                        {this.state.openPanel4 ? null :
                            <div className='sd-display--flex sd-flex--items-center sd-flex--justify-center sd-flex--grow'>
                                <Button text="Open Panel" style="filled" onClick={() => this.setState({'openPanel4': true})} />
                            </div>
                        }
                        <PanelElements.Panel side='left' background='light' open={this.state.openPanel4} size='x-small' theme='dark-ui'>
                            <PanelElements.PanelHeader title='Donec sed odio dui'>
                                <PanelElements.PanelTools tools={[
                                    {title: 'Delete', icon: 'trash', onClick: () => false, ariaValue: 'Delete' },
                                    {title: 'Edit', icon: 'pencil', onClick: () => false, ariaValue: 'Edit' },
                                    {title: 'Close', icon: 'close-small', onClick: ()=> this.setState({openPanel4: false}), ariaValue: 'Close' },
                                ]} />
                            </PanelElements.PanelHeader>
                            <PanelElements.PanelContent>
                                <PanelElements.PanelContentBlock>
                                    <p className='sd-margin-b--2'>Fusce dapibus, tellus ac cursus commodo, tortor mauris...</p>
                                    <p>Donec ullamcorper nulla non metus auctor fringilla. Cras mattis consectetur purus sit amet...</p>
                                </PanelElements.PanelContentBlock>
                            </PanelElements.PanelContent>
                            <PanelElements.PanelFooter>
                                <Button text='Cancel' style='hollow' onClick={() => false} />
                                <Button text='Save' type='primary' onClick={() => false} />
                            </PanelElements.PanelFooter>
                        </PanelElements.Panel>
                    `}
                    </Markup.ReactMarkupCode>
                </Markup.ReactMarkup>
                

                <h3 className="docs-page__h3">Props</h3>
                <p className="docs-page__paragraph">Panel</p>
                <PropsList>
                    <Prop name='size' isRequired={false} type='xx-small | x-small | small | medium | large | x-large | xx-large  | xxx-large  | full | auto' default='small' description='Specifies the width of the panel.'/>
                    <Prop name='side' isRequired={false} type='left | right' default='left' description='Defines the side of the panel. It will also add the appropriate shadow on the opsite side.'/>
                    <Prop name='theme' isRequired={false} type='light | dark' default='/' description='Explicitly define the theme of the panel. All child elements and the content will inherit the selected theme.'/>
                    <Prop name='background' isRequired={false} type='transparent | light | grey' default='light' description='Background colour of the panel.'/>
                    <Prop name='open' isRequired={false} type='boolean' default='false' description='Toggles the open/closed state of the panel.'/>
                    <Prop name='ClassName' isRequired={false} type='string' default='false' description='Add custom classes to modify the default behaviour or specify the placement in complex layouts.'/>
                </PropsList>

                <p className="docs-page__paragraph">PanelHeader</p>
                <PropsList>
                    <Prop name='title' isRequired={false} type='string' default='/' description='Specifies the title of the panel.'/>
                    <Prop name='zIndex' isRequired={false} type='number' default='1' description='Increase the z-index of the header if needed.'/>
                    <Prop name='theme' isRequired={false} type='light | dark' default='/' description='Explicitly define the theme just for the of Panel Header. All child elements and the content inside the Header will inherit the selected theme.'/>
                    <Prop name='color' isRequired={false} type='light | darker | blueGrey | blueGreyDarker' default='light' description='Background colour of the Panel Header. blueGrey and blueGreyDarker will also change the text colour to white.'/>
                    <Prop name='ClassName' isRequired={false} type='string' default='false' description='Add custom or helper classes to modify the default behaviour if needed. Use only if necessary.'/>
                </PropsList>

                <p className="docs-page__paragraph">PanelContent</p>
                <PropsList>
                    <Prop name='loading' isRequired={false} type='boolean' default='false' description='Loading state.'/>
                    <Prop name='empty' isRequired={false} type='boolean' default='false' description='Empty state'/>
                    <Prop name='emptyTemplate' isRequired={false} type='ReactNode' default='/' description='Use the EmptyState component to define the image and text for the empty state.'/>
                </PropsList>

                <p className="docs-page__paragraph">PanelContentBlock</p>
                <PropsList>
                    <Prop name='flex' isRequired={false} type='boolean' default='false' description='Change to flex display mode.'/>
                    <Prop name='padding' isRequired={false} type='0 | 1-5 | 3' default='2' description='Choose padding for the content block. Defaults to 2 (16px) without specifiying a value.'/>
                    <Prop name='ClassName' isRequired={false} type='string' default='false' description='Add custom or helper classes to modify the default behaviour or layout if needed.'/>
                </PropsList>
            </section>
        )
    }
}
