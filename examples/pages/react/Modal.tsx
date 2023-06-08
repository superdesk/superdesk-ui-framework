import * as React from "react";
import * as Markup from "../../js/react";
import { Button, ButtonGroup, Modal, PropsList, Prop } from "../../../app-typescript";

interface IState {
    modalBasic: boolean;
    modalSmall: boolean;
    modalMedium: boolean;
    modalLarge: boolean;
    modalXLarge: boolean;
    modalFull: boolean;
    maximizableModal: boolean;
    top: boolean;
    bottom: boolean;
    left: boolean;
    right: boolean;
}

export default class ModalDoc extends React.Component<{}, IState> {
    constructor(props) {
        super(props);

        this.state = {
            modalBasic: false,
            modalSmall: false,
            modalMedium: false,
            modalLarge: false,
            modalXLarge: false,
            modalFull: false,
            maximizableModal: false,
            top: false,
            bottom: false,
            left: false,
            right: false,
        }
    }

    render() {
        const modalFullFooter=(
            <ButtonGroup align="end">
                <Button text='Cancel' onClick={() => {this.setState({modalFull:false})}}/>
                <Button type='primary' text='Save' onClick={() => {}}/>
            </ButtonGroup>
        );
        const modalLargeFooter=(
            <ButtonGroup align="end">
                <Button text='Cancel' onClick={() => {this.setState({modalLarge:false})}}/>
                <Button type='primary' text='Save' onClick={() => {}}/>
            </ButtonGroup>
        );
        const modalXLargeFooter=(
            <ButtonGroup align="end">
                <Button text='Cancel' onClick={() => {this.setState({modalXLarge:false})}}/>
                <Button type='primary' text='Save' onClick={() => {}}/>
            </ButtonGroup>
        );
        return (
            <section className="docs-page__container">
                <h2 className="docs-page__h2">Modal</h2>
                <Markup.ReactMarkupCodePreview>{`
                    <Modal visible={this.state.modalVisible} onHide={() => {this.setState({modalVisible: false})}}>
                        <p>This is some content inside modal</p>
                    </Modal>
                `}
                </Markup.ReactMarkupCodePreview>

                <h3 className="docs-page__h3">Basic Modal</h3>
                <p className="docs-page__paragraph">
                    This is basic modal configuration
                </p>
                <Markup.ReactMarkup>
                    <Markup.ReactMarkupPreview>
                        <ButtonGroup align="end">
                            <Button text="Basic (no size)" onClick={() => this.setState({modalBasic: true})} />
                            <Button text="Small" onClick={() => this.setState({modalSmall: true})} />
                            <Button text="Medium" onClick={() => this.setState({modalMedium: true})} />
                            <Button text="Large with footer" onClick={() => this.setState({modalLarge: true})} />
                            <Button text="Extra Large with footer" onClick={() => this.setState({modalXLarge: true})} />
                        </ButtonGroup>

                        <Modal headerTemplate="Basic modal"
                            maximizable
                            visible={this.state.modalBasic}
                            onHide={() => {this.setState({modalBasic: false})}}>
                            <p>This modal has no fixed size. It will adapt its size based on the content inside.</p>
                        </Modal>

                        <Modal headerTemplate="Small modal header"
                            visible={this.state.modalSmall}
                            size='small' onHide={() => {this.setState({modalSmall: false})}}>
                            <p>Small modal content. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, 
                            ut fermentum massa justo sit amet risus. Vestibulum id ligula porta felis euismod semper.</p>
                        </Modal>
                        
                        <Modal headerTemplate="Medium modal header"
                            visible={this.state.modalMedium}
                            size='medium' onHide={() => {this.setState({modalMedium: false})}}>
                            <p>Medium modal content. Etiam porta sem malesuada magna mollis euismod. Maecenas faucibus mollis interdum.
                            Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Duis mollis, est non
                            commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Nullam quis risus eget urna mollis
                            ornare vel eu leo. Donec id elit non mi porta gravida at eget metus. Nulla vitae elit libero, a pharetra augue.</p>
                        </Modal>
                        
                        <Modal headerTemplate="Large modal header"
                            visible={this.state.modalLarge}
                            footerTemplate={modalLargeFooter}
                            size='large' onHide={() => {this.setState({modalLarge: false})}}>
                            <p>Donec id elit non mi porta gravida at eget metus. Cras justo odio, dapibus ac facilisis in, egestas eget quam.
                            Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur
                            purus sit amet fermentum. Vestibulum id ligula porta felis euismod semper. Maecenas sed diam eget risus varius blandit
                            sit amet non magna. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. Vivamus sagittis lacus vel augue
                            laoreet rutrum faucibus dolor auctor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                            Maecenas sed diam eget risus varius blandit sit amet non magna. Duis mollis, est non commodo luctus, nisi erat porttitor ligula,
                            eget lacinia odio sem nec elit. Maecenas sed diam eget risus varius blandit sit amet non magna.</p>
                        </Modal>

                        <Modal headerTemplate="Extra large modal"
                            visible={this.state.modalXLarge}
                            footerTemplate={modalXLargeFooter}
                            size='x-large' onHide={() => {this.setState({modalXLarge: false})}}>
                            <p className="sd-margin-b--3">Aenean lacinia bibendum nulla sed consectetur. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Nullam id dolor id nibh
                            ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Nullam quis risus eget urna mollis ornare vel eu leo.
                            Etiam porta sem malesuada magna mollis euismod. Sed posuere consectetur est at lobortis.</p>

                            <p>Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum
                            nibh, ut fermentum massa justo sit amet risus. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Nullam id dolor id nibh 
                            ultricies vehicula ut id elit.</p>
                        </Modal>
                    </Markup.ReactMarkupPreview>
                    <Markup.ReactMarkupCode>{`
                        // Basic
                        <Button text="Basic (no size)" onClick={() => this.setState({modalBasic: true})} />
                        <Modal headerTemplate="Basic modal"
                               visible={this.state.modalBasic}
                               onHide={() => {this.setState({modalBasic: false})}}>
                            <p>Content...</p>
                        </Modal>

                        // Small
                        <Button text="Small" onClick={() => this.setState({modalSmall: true})} />
                        <Modal headerTemplate="Small modal header"
                               visible={this.state.modalSmall}
                               size='small' onHide={() => {this.setState({modalSmall: false})}}>
                            <p>Content...</p>
                        </Modal>

                        // Medium
                        <Button text="Medium" onClick={() => this.setState({modalMedium: true})} />
                        <Modal headerTemplate="Medium modal header"
                               visible={this.state.modalMedium}
                               size='medium' onHide={() => {this.setState({modalMedium: false})}}>
                            <p>Content...</p>
                        </Modal>

                        // Large
                        <Button text="Large with footer" onClick={() => this.setState({modalLarge: true})} />
                        const modalLargeFooter=(
                            <ButtonGroup align="end">
                                <Button text='Cancel' onClick={() => {this.setState({modalLarge:false})}}/>
                                <Button type='primary' text='Save' onClick={() => {}}/>
                            </ButtonGroup>
                        );
                        <Modal headerTemplate="Large modal header"
                               visible={this.state.modalLarge}
                               footerTemplate={modalLargeFooter}
                               size='large' onHide={() => {this.setState({modalLarge: false})}}>
                            <p>Content...</p>
                        </Modal>

                        // Extra large
                        <Button text="Extra Large with footer" onClick={() => this.setState({modalXLarge: true})} />
                        const modalXLargeFooter=(
                            <ButtonGroup align="end">
                                <Button text='Cancel' onClick={() => {this.setState({modalXLarge:false})}}/>
                                <Button type='primary' text='Save' onClick={() => {}}/>
                            </ButtonGroup>
                        );
                        <Modal headerTemplate="Extra large modal"
                               visible={this.state.modalXLarge}
                               footerTemplate={modalXLargeFooter}
                               size='x-large' onHide={() => {this.setState({modalXLarge: false})}}>
                            <p className="sd-margin-b--3">Content...</p>
                            <p>...</p>
                        </Modal>
                    `}
                    </Markup.ReactMarkupCode>
                </Markup.ReactMarkup>

                <h3 className="docs-page__h3">Maximised modal</h3>
                <p className="docs-page__paragraph">
                    Maximised modal with footer template and forced dark theme.
                </p>
                <Markup.ReactMarkup>
                    <Markup.ReactMarkupPreview>
                        <Button text="Open Modal" onClick={() => this.setState({modalFull: true})} />
                        <Modal headerTemplate="Another modal header"
                            footerTemplate={modalFullFooter}
                            visible={this.state.modalFull} 
                            theme='dark'
                            maximized={true}
                            className='testClass'
                            onHide={() => {this.setState({modalFull: false})}}>
                            <p className="sd-margin-b--3">Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Cum sociis natoque penatibus et magnis dis parturient montes,
                            nascetur ridiculus mus. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Nullam quis risus eget urna mollis ornare vel eu leo.
                            Vestibulum id ligula porta felis euismod semper.</p>

                            <p className="sd-margin-b--3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed odio dui. Duis mollis, est non commodo luctus, nisi erat porttitor ligula,
                            eget lacinia odio sem nec elit. Nullam quis risus eget urna mollis ornare vel eu leo. Donec id elit non mi porta gravida at eget metus.</p>

                            <p>Aenean lacinia bibendum nulla sed consectetur. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Nullam id dolor id nibh
                            ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Nullam quis risus eget urna mollis ornare vel eu leo.
                            Etiam porta sem malesuada magna mollis euismod. Sed posuere consectetur est at lobortis.</p>
                        </Modal>
                    </Markup.ReactMarkupPreview>
                    <Markup.ReactMarkupCode>{`
                        <Button text="Open Modal" onClick={() => this.setState({modalFull: true})} />
                        const modalFullFooter=(
                            <ButtonGroup align="end">
                                <Button text='Cancel' onClick={() => {this.setState({modalFull:false})}}/>
                                <Button type='primary' text='Save' onClick={() => {}}/>
                            </ButtonGroup>
                        );
                        <Modal headerTemplate="Another modal header"
                               footerTemplate={modalFullFooter}
                               visible={this.state.modalFull} 
                               theme='dark'
                               maximized={true}
                               onHide={() => {this.setState({modalFull: false})}}>
                            <p className="sd-margin-b--3">...</p>
                            <p className="sd-margin-b--3">...</p>
                            <p>...</p>
                        </Modal>
                    `}
                    </Markup.ReactMarkupCode>
                </Markup.ReactMarkup>
                
                <h3 className="docs-page__h3">Maximizable modal</h3>
                <Markup.ReactMarkup>
                    <Markup.ReactMarkupPreview>
                    <Button text="Maximizable modal" onClick={() => this.setState({maximizableModal: true})} />
                        <Modal headerTemplate="Maximizable modal"
                            maximizable
                            visible={this.state.maximizableModal}
                            size="small"
                            onHide={() => {this.setState({maximizableModal: false})}}>
                            <p className="sd-margin-b--3">Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Cum sociis natoque penatibus et magnis dis parturient montes,
                            nascetur ridiculus mus. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Nullam quis risus eget urna mollis ornare vel eu leo.
                            Vestibulum id ligula porta felis euismod semper.</p>

                            <p className="sd-margin-b--3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed odio dui. Duis mollis, est non commodo luctus, nisi erat porttitor ligula,
                            eget lacinia odio sem nec elit. Nullam quis risus eget urna mollis ornare vel eu leo. Donec id elit non mi porta gravida at eget metus.</p>

                            <p>Aenean lacinia bibendum nulla sed consectetur. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Nullam id dolor id nibh
                            ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Nullam quis risus eget urna mollis ornare vel eu leo.
                            Etiam porta sem malesuada magna mollis euismod. Sed posuere consectetur est at lobortis.</p>
                        </Modal>
                    </Markup.ReactMarkupPreview>
                    <Markup.ReactMarkupCode>{`
                        <Button text="Maximizable modal" onClick={() => this.setState({maximizableModal: true})} />
                        <Modal
                            headerTemplate="Maximizable modal"
                            maximizable
                            visible={this.state.maximizableModal}
                            size="small"
                            onHide={() => {this.setState({maximizableModal: false})}}>
                            {children}
                        </Modal>
                    `}
                    </Markup.ReactMarkupCode>
                </Markup.ReactMarkup>

                <h3 className="docs-page__h3">Optional positioning of modal</h3>
                <Markup.ReactMarkup>
                    <Markup.ReactMarkupPreview>
                        <ButtonGroup align="end">
                            <Button text="top" onClick={() => this.setState({top: true})} />
                            <Button text="bottom" onClick={() => this.setState({bottom: true})} />
                            <Button text="left" onClick={() => this.setState({left: true})} />
                            <Button text="right" onClick={() => this.setState({right: true})} />
                        </ButtonGroup>

                        <Modal headerTemplate="Modal with position top"
                            position="top"
                            visible={this.state.top}
                            onHide={() => {this.setState({top: false})}}>
                            <p>This modal has position top.</p>
                        </Modal>

                        <Modal headerTemplate="Modal with position bottom"
                            position="bottom"
                            visible={this.state.bottom}
                            onHide={() => {this.setState({bottom: false})}}>
                            <p>This modal has position bottom.</p>
                        </Modal>

                        <Modal headerTemplate="Modal with position left"
                            position="left"
                            visible={this.state.left}
                            onHide={() => {this.setState({left: false})}}>
                            <p>This modal has position left.</p>
                        </Modal>

                        <Modal headerTemplate="Modal with position right"
                            position="right"
                            visible={this.state.right}
                            onHide={() => {this.setState({right: false})}}>
                            <p>This modal has position right.</p>
                        </Modal>
                    </Markup.ReactMarkupPreview>
                    <Markup.ReactMarkupCode>{`
                        <Modal headerTemplate="Modal with position top"
                            position="top"
                            visible={this.state.top}
                            onHide={() => {this.setState({top: false})}}>
                            <p>This modal has position top.</p>
                        </Modal>

                        <Modal headerTemplate="Modal with position bottom"
                            position="bottom"
                            visible={this.state.bottom}
                            onHide={() => {this.setState({bottom: false})}}>
                            <p>This modal has position bottom.</p>
                        </Modal>

                        <Modal headerTemplate="Modal with position left"
                            position="left"
                            visible={this.state.left}
                            onHide={() => {this.setState({left: false})}}>
                            <p>This modal has position left.</p>
                        </Modal>

                        <Modal headerTemplate="Modal with position right"
                            position="right"
                            visible={this.state.right}
                            onHide={() => {this.setState({right: false})}}>
                            <p>This modal has position right.</p>
                        </Modal>
                    `}
                    </Markup.ReactMarkupCode>
                </Markup.ReactMarkup>

                <h3 className="docs-page__h3">Props</h3>
                <PropsList>
                    <Prop name='id' isRequired={false} type='string' default='null' description='Unique identifier of the element' />
                    <Prop name='className' isRequired={false} type='string' default='null' description='To add class to the content of component' />
                    <Prop name='theme' isRequired={false} type='light | dark' default='light' description='Item style' />
                    <Prop name='size' isRequired={false} type='small | medium | large | x-large' default='/' description='Size of the modal. If not defined it will adapt to the width of the content.' />
                    <Prop name='position' isRequired={false} type="center | top | bottom | left | right | top-left | top-right | bottom-left | bottom-right" default='center' description='Position of the dialog.' />
                    <Prop name='visible' isRequired={true} type='boolean' default='false' description='Specifies the visibility of the dialog' />
                    <Prop name='contentPadding' isRequired={true} type="'none' | 'small' | 'medium' | 'large'" default='false' description='Padding of content' />
                    <Prop name='contentBg' isRequired={true} type="'default' | 'medium' | 'dark'" default='false' description='Background of content' />
                    <Prop name='headerTemplate' isRequired={false} type='element' default='null' description='Label of header' />
                    <Prop name='footerTemplate' isRequired={false} type='element' default='null' description='Name of the footer template constant, created separately' />
                    <Prop name='closeOnEscape' isRequired={false} type='boolean' default='null' description='An array of objects to display' />
                    <Prop name='maximized' isRequired={false} type='boolean' default='null' description='Creates a full-screen modal id set to true.' />
                    <Prop name='maximizable' isRequired={false} type='boolean' default='null' description='By clicking on button set full-screen modal and return on defoult size.' />
                    <Prop name='onShow' isRequired={false} type='function' default='null' description='Callback to invoke after modal is opened' />
                    <Prop name='onHide' isRequired={true} type='function' default='null' description='Callback to invoke after modal is closed' />
                </PropsList>
            </section>
        )
    }
}
