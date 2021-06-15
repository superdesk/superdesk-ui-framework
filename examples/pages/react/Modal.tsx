import * as React from "react";
import * as Markup from "../../js/react";
import { Button, Modal, PropsList, Prop } from "../../../app-typescript";

interface IState {
    modalVisible: boolean;
    modalFull: boolean;
}

export default class ModalDoc extends React.Component<{}, IState> {
    constructor(props) {
        super(props);

        this.state = {
            modalVisible: false,
            modalFull: false
        }
    }

    render() {
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
                        <Button text="Open Modal" onClick={() => this.setState({modalVisible: true})} />
                        <Modal visible={this.state.modalVisible} onHide={() => {this.setState({modalVisible: false})}}>
                            <p>This is some content inside modal</p>
                        </Modal>
                    </Markup.ReactMarkupPreview>
                    <Markup.ReactMarkupCode>{`
                        <Button text="Open Modal" onClick={() => this.setState({modalVisible: true})} />
                        <Modal visible={this.state.modalVisible} onHide={() => {this.setState({modalVisible: false})}}>
                            <p>This is some content inside modal</p>
                        </Modal>
                    `}
                    </Markup.ReactMarkupCode>
                </Markup.ReactMarkup>

                <h3 className="docs-page__h3">Full Modal Options</h3>
                <p className="docs-page__paragraph">
                    This is modal with all configurations set
                </p>
                <Markup.ReactMarkup>
                    <Markup.ReactMarkupPreview>
                        <Button text="Open Modal" onClick={() => this.setState({modalFull: true})} />
                        <Modal headerTemplate="This is some header test"
                            visible={this.state.modalFull} 
                            onHide={() => {this.setState({modalFull: false})}}>
                            <p>This is some content inside modal</p>
                        </Modal>
                    </Markup.ReactMarkupPreview>
                    <Markup.ReactMarkupCode>{`
                        <Button text="Open Modal" onClick={() => this.setState({modalVisible: true})} />
                        <Modal visible={this.state.modalVisible} onHide={() => {this.setState({modalVisible: false})}}>
                            <p>This is some content inside modal</p>
                        </Modal>
                    `}
                    </Markup.ReactMarkupCode>
                </Markup.ReactMarkup>

                <h3 className="docs-page__h3">Props</h3>
                <PropsList>
                    <Prop name='id' isRequired={false} type='string' default='null' description='Unique identifier of the element' />
                    <Prop name='className' isRequired={false} type='string' default='null' description='Style class of the component' />
                    <Prop name='theme' isRequired={false} type='light | dark' default='light' description='Item style' />
                    <Prop name='visible' isRequired={true} type='boolean' default='false' description='Specifies the visibility of the dialog' />
                    <Prop name='headerTemplate' isRequired={false} type='element' default='null' description='Label of header' />
                    <Prop name='footerTemplate' isRequired={false} type='element' default='null' description='Label of footer' />
                    <Prop name='closeOnEscape' isRequired={false} type='boolean' default='null' description='An array of objects to display' />
                    <Prop name='onShow' isRequired={false} type='function' default='null' description='Callback to invoke after modal is opened' />
                    <Prop name='onHide' isRequired={true} type='function' default='null' description='Callback to invoke after modal is closed' />
                </PropsList>
            </section>
        )
    }
}
