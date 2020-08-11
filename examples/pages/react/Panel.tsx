import * as React from 'react';
import * as Markup from '../../js/react';
import { Button, IconButton, PropsList, Prop } from '../../../app-typescript';
import * as Components from '../playgrounds/react-playgrounds/components/Index';
import { LeftPanel, RightPanel, Panel, PanelHeader, PanelContent, PanelContentBlock, PanelFooter} from '../../pages/playgrounds/react-playgrounds/components';

interface IProps {
    children?: React.ReactNode;
}

interface IState {
    openPanel: boolean;
    openPanel2: boolean;
}

export default class PanelDoc extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {
            openPanel: true,
            openPanel2: true,
        }
        this.handleState = this.handleState.bind(this);
        this.handleState2 = this.handleState2.bind(this);
    }

    handleState() {
        this.setState((state) => ({
            openPanel: !state.openPanel,
        }));
    }
    handleState2() {
        this.setState((state) => ({
            openPanel2: !state.openPanel2,
        }));
    }

    render() {
        return (
            <section className='docs-page__container'>
                <h2 className='docs-page__h2'>Panel</h2>
                <p></p>
                <Markup.ReactMarkupCodePreview>{`
                    <Panel side='left'>
                        <PanelHeader title='Some title for the panel' />
                        <PanelContent>
                            <PanelContentBlock>
                            ...
                            </PanelContentBlock>
                        </PanelContent>
                        <PanelFooter>
                            ...
                        </PanelFooter>
                    </Panel>
                `}
                </Markup.ReactMarkupCodePreview>

                <p className="docs-page__paragraph">
                    The Panel is a layout element that slides into the main application screen either from the left or the right side. It can contain various type of content and actions. 
                    It consists of three areas – Header ( <code>PanelHeader</code> ), Content ( <code>PanelContent</code> ) and optionally the Footer ( <code>PanelFooter</code> ).
                    The content area is scrollable and can contain one or more content blocks ( <code>PanelContentBlock</code> ) for various layout options. The content block will accept any
                    component or HTML code.
                </p>

                <p className="docs-page__paragraph">
                    <b>Possible usage examples:</b> Advanced Search filter panel, Preview panel, Side-tab panels in the Editor etc.
                </p>

                <Markup.ReactMarkup>
                    <Markup.ReactMarkupPreview>
                    <Button text='Toggle Panel' onClick={this.handleState} />
                    <br />
                    <div className='sd-main-content-grid' style={{border: '1px solid rgba(0,0,0,0.12)', height:'600px', marginTop:'16px'}}>
                        <LeftPanel open={this.state.openPanel}>
                            <Panel background='grey' side='left'>
                                <PanelHeader handlePanelParent={this.handleState} title='Panel title' />
                                <PanelContent>
                                    <PanelContentBlock>
                                        <p className="sd-margin-b--3">
                                            Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Etiam porta sem malesuada magna mollis euismod. 
                                            Donec id elit non mi porta gravida at eget metus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eu leo quam. 
                                            Pellentesque ornare sem lacinia quam venenatis vestibulum. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                                        </p>
                                        <p className="sd-margin-b--3">
                                            Curabitur blandit tempus porttitor. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Praesent commodo cursus magna, 
                                            vel scelerisque nisl consectetur et. Vestibulum id ligula porta felis euismod semper. Duis mollis, est non commodo luctus, nisi erat 
                                            porttitor ligula, eget lacinia odio sem nec elit. Sed posuere consectetur est at lobortis.        
                                        </p>
                                        <p className="sd-margin-b--3">
                                            Donec ullamcorper nulla non metus auctor fringilla. Curabitur blandit tempus porttitor. Fusce dapibus, tellus ac cursus commodo, tortor mauris 
                                            condimentum nibh, ut fermentum massa justo sit amet risus. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                                        </p>
                                    </PanelContentBlock>
                                </PanelContent>
                                <PanelFooter>
                                    <Button text='Cancel' style='hollow' onClick={() => false} />
                                    <Button text='Submit' type='primary' onClick={() => false} />
                                </PanelFooter>
                            </Panel>
                        </LeftPanel>
                    </div>

                    </Markup.ReactMarkupPreview>
                    <Markup.ReactMarkupCode>{`
                        <Panel side='left' background='grey'>
                            <PanelHeader handleFilterParent={this.handleFilter} title='Panel title' />
                            <PanelContent>
                                <PanelContentBlock>
                                    <p>Praesent commodo cursus magna...</p>
                                    <p>Curabitur blandit tempus porttitor...</p>
                                    <p>Donec ullamcorper nulla non metus auctor fringilla...</p>
                                </PanelContentBlock>
                            </PanelContent>
                            <PanelFooter>
                                <Button text='Cancel' style='hollow' onClick={() => false} />
                                <Button text='Submit' type='primary' onClick={() => false} />
                            </PanelFooter>
                        </Panel>        
                    `}
                    </Markup.ReactMarkupCode>
                </Markup.ReactMarkup>

                <Components.GraphicButtonsGroup>
                    <Components.GraphicButton graphic='design' text='View design guidelines' smallText='Design guidelines' link='#/design/application-structure' />
                </Components.GraphicButtonsGroup>

                <Markup.ReactMarkup>
                    <Markup.ReactMarkupPreview>
                    <Button text='Toggle Panel' onClick={this.handleState2} />
                    <br />
                    <div className='sd-main-content-grid' style={{border: '1px solid rgba(0,0,0,0.12)', height:'700px', marginTop:'16px'}}>
                        <RightPanel open={this.state.openPanel2}>
                            <Panel side='right'>
                                <PanelHeader handlePanelParent={this.handleState2} title='Right panel title' />
                                <PanelContent>
                                    <PanelContentBlock flex={true}>
                                        <div className="side-panel__content-block-inner side-panel__content-block-inner--grow">
                                            <p className="sd-text__date-and-author"><time>Created 19.06.2020 by </time> <span className="sd-text__author">Mika Karapet</span></p> 
                                            <p className="sd-text__date-and-author"><time>Updated 3 hours ago by</time> <span className="sd-text__author">John Doe</span></p>
                                        </div>
                                        <div className="side-panel__content-block-inner side-panel__content-block-inner--right">
                                            <IconButton ariaValue='More' icon='dots-vertical' onClick={() => false} />
                                        </div>
                                    </PanelContentBlock>
                                    <PanelContentBlock padding='0' className='side-panel__content-block--image'>
                                        <img src="/d_trump.jpg" alt="test" />
                                    </PanelContentBlock>
                                    <PanelContentBlock>
                                        <div className="form__row">
                                            <label className="form-label">Title</label>
                                            <p className="sd-text__title">Homo Americanus Vulgaris Timorous - Moronicus</p>
                                        </div>
                                        <p className="sd-margin-b--3">
                                            Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Etiam porta sem malesuada magna mollis euismod. 
                                            Donec id elit non mi porta gravida at eget metus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eu leo quam. 
                                            Pellentesque ornare sem lacinia quam venenatis vestibulum. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                                            Curabitur blandit tempus porttitor. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Praesent commodo cursus
                                            magna, vel scelerisque nisl consectetur et.
                                        </p>
                                    </PanelContentBlock>
                                </PanelContent>
                            </Panel>
                        </RightPanel>
                    </div>

                    </Markup.ReactMarkupPreview>
                    <Markup.ReactMarkupCode>{`
                        <Panel side='right'>
                            <PanelHeader handlePanelParent={this.handleState2} title='Right panel title' />
                            <PanelContent>
                                <PanelContentBlock flex={true}>
                                    <div className="side-panel__content-block-inner side-panel__content-block-inner--grow">
                                        <p className="sd-text__date-and-author"><time>Created 19.06.2020 by </time> <span className="sd-text__author">Mika Karapet</span></p> 
                                        <p className="sd-text__date-and-author"><time>Updated 3 hours ago by</time> <span className="sd-text__author">John Doe</span></p>
                                    </div>
                                    <div className="side-panel__content-block-inner side-panel__content-block-inner--right">
                                        <IconButton ariaValue='More' icon='dots-vertical' onClick={() => false} />
                                    </div>
                                </PanelContentBlock>
                                <PanelContentBlock padding='0' className='side-panel__content-block--image'>
                                    <img src="/d_trump.jpg" alt="test" />
                                </PanelContentBlock>
                                <PanelContentBlock>
                                    <div className="form__row">
                                        <label className="form-label">Title</label>
                                        <p className="sd-text__title">Homo Americanus Vulgaris Timorous - Moronicus</p>
                                    </div>
                                    <p className="sd-margin-b--3">
                                        Praesent commodo cursus magna, vel scelerisque nisl consectetur et...
                                    </p>
                                </PanelContentBlock>
                            </PanelContent>
                        </Panel>       
                    `}
                    </Markup.ReactMarkupCode>
                </Markup.ReactMarkup>

                <h3 className="docs-page__h3">Props</h3>

                <h4 className="docs-page__h4--props-subtitle">Panel</h4>
                <PropsList>
                    <Prop name='side' isRequered={false} type='left | right' default='/' description='Specifies the side the Panel is placed in relation to the main content. It will add a shadow to the appropriate side in order to visually separate the Panel from the main content.' />
                    <Prop name='background' isRequered={false} type='transparent | light | grey | dark' default='light' description='Defines the backgroud color of the Panel.' />
                </PropsList>
                <h4 className="docs-page__h4--props-subtitle">PanelHeader</h4>
                <PropsList>
                    <Prop name='title' isRequered={false} type='string' default='/' description='Text for the panel heading.' />
                </PropsList>
                <h4 className="docs-page__h4--props-subtitle">PanelContentBlock</h4>
                <PropsList>
                    <Prop name='flex' isRequered={false} type='boolean' default='false' description='Adds display flex to the content block.' />
                    <Prop name='padding' isRequered={false} type='0 | 1-5 | 3' default='2' description='Padding overrides based on multiplers of the $sd-base-increment (8px). If not specified the value will be 2 (16px).' />
                    <Prop name='className' isRequered={false} type='string' default='/' description='Add any CSS class to the block for custom style and layout options.' />
                </PropsList>
            </section>
        );
    }
}
