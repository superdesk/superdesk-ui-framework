import * as React from 'react';
import * as Markup from '../../js/react';
import { ContentDivider, Button, Prop, PropsList } from '../../../app-typescript';

export default class ContentDividerDoc extends React.Component {

    render() {
        return (
            <section className="docs-page__container">
                <h2 className="docs-page__h2">Content Divider</h2>
                <Markup.ReactMarkupCodePreview>{`
                    <ContentDivider>
                        Child element
                    </ContentDivider>
                `}
                </Markup.ReactMarkupCodePreview>
                <h3 className="docs-page__h3">No text</h3>
                <p className="docs-page__paragraph"></p>
                <Markup.ReactMarkup>
                    <Markup.ReactMarkupPreview>
                        <div className='docs-page__content-row'>
                            <p>Maecenas sed diam eget risus varius blandit sit amet non magna.
                            Maecenas faucibus mollis interdum. Donec ullamcorper nulla non metus
                            auctor fringilla.</p>
                            <ContentDivider />
                            <p>Vestibulum id ligula porta felis euismod semper. Integer posuere erat
                            a ante venenatis dapibus posuere velit aliquet. Aenean lacinia bibendum
                            nulla sed consectetur. Morbi leo risus, porta ac consectetur ac, vestibulum
                            at eros. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            <ContentDivider type="dashed" />
                            <p>Donec ullamcorper nulla non metus auctor fringilla. Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit. Nullam quis risus eget urna mollis ornare vel eu leo.
                            Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras mattis consectetur
                            purus sit amet fermentum. Nulla vitae elit libero, a pharetra augue.</p>
                            <ContentDivider type="dotted" />
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dapibus, tellus
                            ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet
                            risus. Donec id elit non mi porta gravida at eget metus. Cras justo odio, dapibus ac
                            facilisis in, egestas eget quam.</p>
                        </div>
                    </Markup.ReactMarkupPreview>
                    <Markup.ReactMarkupCode>{`
                        <p>Maecenas sed diam eget risus varius...</p>

                        <ContentDivider />

                        <p>Vestibulum id ligula porta felis euismod...</p>

                        <ContentDivider type="dashed" />

                        <p>Donec ullamcorper nulla non metus auctor fringilla...</p>

                        <ContentDivider type="dotted" />

                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
                    `}
                    </Markup.ReactMarkupCode>
                </Markup.ReactMarkup>

                <h3 className="docs-page__h3">With text</h3>
                <p className="docs-page__paragraph"></p>
                <Markup.ReactMarkup>
                    <Markup.ReactMarkupPreview>
                        <div className='docs-page__content-row'>
                            <ContentDivider>
                                Centered (default)
                            </ContentDivider>
                            <p>Maecenas sed diam eget risus varius blandit sit amet non magna.
                            Maecenas faucibus mollis interdum. Donec ullamcorper nulla non metus
                            auctor fringilla. Aenean eu leo quam. Pellentesque ornare sem lacinia
                            quam venenatis vestibulum.</p>
                            <ContentDivider align="left">
                                Left aligned
                            </ContentDivider>
                            <p>Maecenas sed diam eget risus varius blandit sit amet non magna.
                            Donec id elit non mi porta gravida at eget metus. Cras mattis consectetur
                            purus sit amet fermentum. Etiam porta sem malesuada magna mollis euismod.
                            Cras mattis consectetur purus sit amet fermentum.</p>
                            <ContentDivider align="right" type="dotted">
                                Right aligned
                            </ContentDivider>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
                            Donec id elit non mi porta gravida at eget metus. Praesent commodo cursus magna,
                            vel scelerisque nisl consectetur et. Etiam porta sem malesuada magna mollis euismod.
                            Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum
                            massa justo sit amet risus. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
                        </div>
                    </Markup.ReactMarkupPreview>
                    <Markup.ReactMarkupCode>{`
                        <ContentDivider>
                            Centered (default)
                        </ContentDivider>

                        <p>Maecenas sed diam eget...</p>

                        <ContentDivider align="left">
                            Left aligned
                        </ContentDivider>

                        <p>Maecenas sed diam eget risus...</p>

                        <ContentDivider align="right" type="dotted">
                            Right aligned
                        </ContentDivider>

                        <p>Praesent commodo cursus magna...</p>
                    `}
                    </Markup.ReactMarkupCode>
                </Markup.ReactMarkup>

                <h3 className="docs-page__h3">Vertical</h3>
                <p className="docs-page__paragraph"></p>
                <Markup.ReactMarkup>
                    <Markup.ReactMarkupPreview>
                        <p className="docs-page__paragraph">// Basic</p>
                        <div className='docs-page__content-row'>
                            <span>Option one</span>
                            <ContentDivider orientation="vertical" type="dotted" />
                            <span>Option two</span>
                            <ContentDivider orientation="vertical" type="dotted" />
                            <span>Option three</span>
                        </div>
                        <p className="docs-page__paragraph ">// With text</p>
                        <p className="docs-page__paragraph--small sd-margin-b--3">Inside a flex container (flex-direction: column;).</p>
                        <div className='docs-page__content-row sd-display--flex'>
                            <div style={{width:'100%'}}>
                                Cras justo odio, dapibus ac facilisis in, egestas eget quam. Cum sociis natoque penatibus et
                                magnis dis parturient montes, nascetur ridiculus mus. Maecenas sed diam eget risus varius blandit
                                sit amet. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Aenean lacinia bibendum nulla
                                sed consectetur. Vivamus sagittis lacus vel augue.
                            </div>
                            <ContentDivider orientation="vertical">
                                or
                            </ContentDivider>
                            <div style={{width:'100%'}}>
                                Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec id elit non mi porta gravida at eget metus.
                                Cras mattis consectetur purus sit amet fermentum. Maecenas sed diam eget risus varius blandit sit amet non magna.
                                Nullam id dolor id nibh ultricies vehicula ut id elit. Donec sed odio dui. Nulla vitae elit libero, a pharetra augue.
                            </div>
                        </div>
                    </Markup.ReactMarkupPreview>
                    <Markup.ReactMarkupCode>{`
                        // Basic

                        <span>Option one</span>
                        <ContentDivider orientation="vertical" type="dotted" />
                        <span>Option two</span>
                        <ContentDivider orientation="vertical" type="dotted" />
                        <span>Option three</span>

                        // With text

                        <div>
                            Cras justo odio, dapibus ac facilisis in, egestas eget quam...
                        </div>

                        <ContentDivider orientation="vertical">
                            or
                        </ContentDivider>

                        <div>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur et...
                        </div>
                    `}
                    </Markup.ReactMarkupCode>
                </Markup.ReactMarkup>

                <h3 className="docs-page__h3">Props</h3>
                <PropsList>
                    <Prop name='type' isRequered={false} type='dashed | dotted | solid' default='solid' description='Border style of the divider.'/>
                    <Prop name='orientation' isRequered={false} type='horizontal | vertical' default='horizontal' description='Defines if the divider is horizontal or vertical. Default is horizontal.'/>
                    <Prop name='align' isRequered={false} type='center | left | right' default='right' description='Text alignment inside the divider. Should not be used without any text inside the divider. The vertical divider has no alignment options.'/>
                    <Prop name='border' isRequered={false} type='boolean' default='true' description='Removes the border if set to true. Should be generally avoided especially if there is textual content. It can be used to add space between elements if there is no other option.'/>
                </PropsList>
            </section>
        )
    }
}
