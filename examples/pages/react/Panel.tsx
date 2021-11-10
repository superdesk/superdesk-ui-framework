import * as React from 'react';
import * as Markup from '../../js/react';
import { PropsList, Prop, Button, ButtonGroup, IconButton, Label } from '../../../app-typescript';
import * as PanelElements from '../../../app-typescript/components/Layouts/Panel';

interface IProps {
    children?: React.ReactNode;
}

interface IState {
    openPanel1: boolean;
    openPanel2: boolean;
}

export default class PanelDoc extends React.Component<IProps, IState> {
     constructor(props: IProps) {
         super(props);
         this.state = {
             openPanel1: true,
             openPanel2: true
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

                <p className="docs-page__paragraph">Grid list component implemented with CSS grid. The list is responsive by default, no additional media query is needed. Any container item can be placed inside the grid list but it's ideally combined with the GridItem.</p>

                <Markup.ReactMarkup>
                    <Markup.ReactMarkupPreview>
                        <p className="docs-page__paragraph">// Left</p>
                        <div className='sd-display--flex' style={{border: '1px solid var(--sd-colour-line--medium)', backgroundColor: 'var(--sd-colour-panel-bg--100)', maxHeight: '360px'}}>
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
                                        <p>Maecenas sed diam eget risus varius blandit sit amet non magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas faucibus mollis interdum.
                                            Cras justo odio, dapibus ac facilisis in, egestas eget quam. Aenean lacinia bibendum nulla sed consectetur. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                        <p>Aenean lacinia bibendum nulla sed consectetur. Etiam porta sem malesuada magna mollis euismod. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis
                                            vestibulum. Nullam quis risus eget urna mollis ornare vel eu leo. Curabitur blandit tempus porttitor. Aenean lacinia bibendum nulla sed consectetur. Morbi leo
                                            risus, porta ac consectetur ac, vestibulum at eros.</p>
                                    </PanelElements.PanelContentBlock>
                                </PanelElements.PanelContent>
                                <PanelElements.PanelFooter>
                                    <Button text='Clear' style='hollow' onClick={() => false} />
                                    <Button text='Submit' type='primary' onClick={() => false} />
                                </PanelElements.PanelFooter>
                            </PanelElements.Panel>
                        </div>

                        <p className="docs-page__paragraph">// Right with custom elements inside footer.</p>
                        <div className='sd-display--flex' style={{border: '1px solid var(--sd-colour-line--medium)', backgroundColor: 'var(--sd-colour-panel-bg--100)', maxHeight: '360px'}}>
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
                                        <p>Curabitur blandit tempus porttitor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed odio dui. Aenean eu leo quam. Pellentesque ornare sem 
                                            lacinia quam venenatis vestibulum.</p>
                                        <p>Donec ullamcorper nulla non metus auctor fringilla. Cras mattis consectetur purus sit amet fermentum. Donec id elit non mi porta gravida at eget metus.
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
                        // default
  
                    `}
                    </Markup.ReactMarkupCode>
                </Markup.ReactMarkup>

                <h3 className="docs-page__h3">Props</h3>
                <PropsList>
                    <Prop name='size' isRequired={false} type='x-small | small | medium | large' default='small' description='Specifies the size of the items in the grid. '/>
                    <Prop name='gap' isRequired={false} type='small | medium | large | x-large' default='small' description='Defines the gap between the items inside the Grid list. '/>
                    <Prop name='margin' isRequired={false} type='0 | 1 | 2 | 3' default='3' description='Defines the margin around the Grid list. The values are based on multipliers of the the $sd-base-increment (equal to 8px). Setting the value to 3 results in a margin of 24px.'/>
                </PropsList>
            </section>
        )
    }
}