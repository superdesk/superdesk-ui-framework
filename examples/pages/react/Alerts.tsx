import * as React from 'react';
import * as Markup from '../../js/react';
import { Alert, Prop, PropsList } from '../../../app-typescript';

export default class AlertDoc extends React.Component {
    render() {
        return (
            <section className="docs-page__container">
                <h2 className="docs-page__h2">Alerts</h2>
                <Markup.ReactMarkupCodePreview>{`
                   <Alert style='hollow' size='normal' type='primary' restoreIcon='info'>
                        This is an info text example.
                   </Alert>
                `}
                </Markup.ReactMarkupCodePreview>
                <p className="docs-page__paragraph">Provide contextual feedback or info messages for user actions with the handful of available alert box options.</p>

                <Markup.ReactMarkup>
                    <Markup.ReactMarkupPreview>

                    <p className="docs-page__paragraph">// Hollow style (preferred usage)</p>

                    <Alert style='hollow' size='normal' restoreIcon='info'>
                        Fusce nec ex et dolor rhoncus iaculis maximus sit amet lorem. Nunc posuere, ligula quis dictum tempor, lectus diam pharetra est, id fringilla leo urna vel arcu.
                    </Alert>
                    <Alert icon="info-sign" style='hollow' size='normal' type='primary' restoreIcon='info'>
                        Integer elementum vestibulum ipsum a rhoncus. Cras et tortor tempus, imperdiet neque sit amet, imperdiet elit. Nunc eleifend sollicitudin molestie. Aliquam nec enim orci.
                    </Alert>
                    <Alert icon="warning-sign" style='hollow' size='normal' type='warning' restoreIcon='info'>
                        Sed tincidunt ipsum metus, consectetur vestibulum turpis luctus in. Vestibulum ut ex vulputate, lacinia mauris vel, accumsan libero. Morbi dapibus non felis et convallis. Sed at dolor vel nisl aliquam vehicula.
                    </Alert>
                    <Alert style='hollow' size='normal' type='alert' restoreIcon='info'>
                        Sed tincidunt ipsum metus, consectetur vestibulum turpis luctus in. Vestibulum ut ex vulputate, lacinia mauris vel, accumsan libero. Morbi dapibus non felis et convallis. Sed at dolor vel nisl aliquam vehicula.
                    </Alert>
                    <Alert style='hollow' size='normal' type='success' restoreIcon='info'>
                        Sed tincidunt ipsum metus, consectetur vestibulum turpis luctus in. Vestibulum ut ex vulputate, lacinia mauris vel, accumsan libero. Morbi dapibus non felis et convallis. Sed at dolor vel nisl aliquam vehicula.
                    </Alert>
                    <Alert style='hollow' size='normal' type='highlight' restoreIcon='info'>
                        Sed tincidunt ipsum metus, consectetur vestibulum turpis luctus in. Vestibulum ut ex vulputate, lacinia mauris vel, accumsan libero. Morbi dapibus non felis et convallis. Sed at dolor vel nisl aliquam vehicula.
                    </Alert>
                    <Alert style='hollow' size='normal' type='sd-green' restoreIcon='help'>
                        In mattis tellus odio, quis dictum sapien pellentesque in. Phasellus dignissim tempus ante at congue. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis maximus bibendum lacinia.
                    </Alert>

                    <p className="docs-page__paragraph">// Filled</p>

                    <Alert icon="exclamation-sign" style='filled' size='normal' restoreIcon='info'>
                        Nullam quis risus eget urna mollis ornare vel eu leo. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec ullamcorper nulla non metus auctor fringilla.
                    </Alert>
                    <Alert style='filled' size='normal' type='primary' restoreIcon='info'>
                        Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis. Praesent vulputate eros nisi, et porta magna eleifend et.
                    </Alert>
                    <Alert icon="warning-sign" style='filled' size='normal' type='warning' restoreIcon='info'>
                        Praesent vulputate eros nisi, et porta magna eleifend et. Duis non sagittis erat. Nulla facilisi. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                    </Alert>
                    <Alert style='filled' size='normal' type='alert' restoreIcon='info'>
                        Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis. Praesent vulputate eros nisi, et porta magna eleifend et.
                    </Alert>
                    <Alert style='filled' size='normal' type='success' restoreIcon='info'>
                        Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Nulla vitae elit libero, a pharetra augue. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
                    </Alert>
                    <Alert style='filled' size='normal' type='highlight' restoreIcon='info'>
                        Donec ullamcorper nulla non metus auctor fringilla. Sed posuere consectetur est at lobortis. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.
                    </Alert>
                    <Alert style='filled' size='normal' type='sd-green' restoreIcon='info'>
                        Vestibulum id ligula porta felis euismod semper. Nullam id dolor id nibh ultricies vehicula ut id elit. Nulla vitae elit libero, a pharetra augue. Sed posuere consectetur est at lobortis. Aenean eu leo quam.
                    </Alert>

                    <p className="docs-page__paragraph">// Small</p>

                    <Alert icon="info-sign" style='hollow' size='small' type='primary' restoreIcon='info'>
                        Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Fusce dapibus, tellus ac cursus.
                    </Alert>
                    <Alert style='filled' size='small' type='highlight' restoreIcon='info'>
                        Maecenas sed diam eget risus varius blandit sit amet non magna. Curabitur blandit tempus porttitor. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec ullamcorper nulla non metus auctor fringilla. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.
                    </Alert>
                    </Markup.ReactMarkupPreview>
                    <Markup.ReactMarkupCode>{`
                        // Hollow style (preferred usage)
                        
                        <Alert style='hollow' size='normal' restoreIcon='info'>
                            Fusce nec ex et dolor rhoncus iaculis maximus sit amet lorem. Nunc posuere, ligula quis dictum tempor, lectus diam pharetra est, id fringilla leo urna vel arcu.
                        </Alert>
                        <Alert icon="info-sign" style='hollow' size='normal' type='primary' restoreIcon='info'>
                            Integer elementum vestibulum ipsum a rhoncus. Cras et tortor tempus, imperdiet neque sit amet, imperdiet elit. Nunc eleifend sollicitudin molestie. Aliquam nec enim orci.
                        </Alert>
                        <Alert icon="warning-sign" style='hollow' size='normal' type='warning' restoreIcon='info'>
                            Sed tincidunt ipsum metus, consectetur vestibulum turpis luctus in. Vestibulum ut ex vulputate, lacinia mauris vel, accumsan libero. Morbi dapibus non felis et convallis. Sed at dolor vel nisl aliquam vehicula.
                        </Alert>
                        <Alert style='hollow' size='normal' type='alert' restoreIcon='info'>
                            Sed tincidunt ipsum metus, consectetur vestibulum turpis luctus in. Vestibulum ut ex vulputate, lacinia mauris vel, accumsan libero. Morbi dapibus non felis et convallis. Sed at dolor vel nisl aliquam vehicula.
                        </Alert>
                        <Alert style='hollow' size='normal' type='success' restoreIcon='info'>
                            Sed tincidunt ipsum metus, consectetur vestibulum turpis luctus in. Vestibulum ut ex vulputate, lacinia mauris vel, accumsan libero. Morbi dapibus non felis et convallis. Sed at dolor vel nisl aliquam vehicula.
                        </Alert>
                        <Alert style='hollow' size='normal' type='highlight' restoreIcon='info'>
                            Sed tincidunt ipsum metus, consectetur vestibulum turpis luctus in. Vestibulum ut ex vulputate, lacinia mauris vel, accumsan libero. Morbi dapibus non felis et convallis. Sed at dolor vel nisl aliquam vehicula.
                        </Alert>
                        <Alert style='hollow' size='normal' type='sd-green' restoreIcon='help'>
                            In mattis tellus odio, quis dictum sapien pellentesque in. Phasellus dignissim tempus ante at congue. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis maximus bibendum lacinia.
                        </Alert>

                        // Filled

                        <Alert icon="exclamation-sign" style='filled' size='normal' restoreIcon='info'>
                            Nullam quis risus eget urna mollis ornare vel eu leo. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec ullamcorper nulla non metus auctor fringilla.
                        </Alert>
                        <Alert style='filled' size='normal' type='primary' restoreIcon='info'>
                            Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis. Praesent vulputate eros nisi, et porta magna eleifend et.
                        </Alert>
                        <Alert icon="warning-sign" style='filled' size='normal' type='warning' restoreIcon='info'>
                            Praesent vulputate eros nisi, et porta magna eleifend et. Duis non sagittis erat. Nulla facilisi. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                        </Alert>
                        <Alert style='filled' size='normal' type='alert' restoreIcon='info'>
                            Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis. Praesent vulputate eros nisi, et porta magna eleifend et.
                        </Alert>
                        <Alert style='filled' size='normal' type='success' restoreIcon='info'>
                            Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Nulla vitae elit libero, a pharetra augue. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
                        </Alert>
                        <Alert style='filled' size='normal' type='highlight' restoreIcon='info'>
                            Donec ullamcorper nulla non metus auctor fringilla. Sed posuere consectetur est at lobortis. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.
                        </Alert>
                        <Alert style='filled' size='normal' type='sd-green' restoreIcon='info'>
                            Vestibulum id ligula porta felis euismod semper. Nullam id dolor id nibh ultricies vehicula ut id elit. Nulla vitae elit libero, a pharetra augue. Sed posuere consectetur est at lobortis. Aenean eu leo quam.
                        </Alert>

                        // Small

                        <Alert icon="info-sign" style='hollow' size='small' type='primary' restoreIcon='info'>
                            Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Fusce dapibus, tellus ac cursus.
                        </Alert>
                        <Alert style='filled' size='small' type='highlight' restoreIcon='info'>
                            Maecenas sed diam eget risus varius blandit sit amet non magna. Curabitur blandit tempus porttitor. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec ullamcorper nulla non metus auctor fringilla. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.
                        </Alert>
                    `}
                    </Markup.ReactMarkupCode>
                </Markup.ReactMarkup>

                <h3 className="docs-page__h3">Props</h3>
                <PropsList>
                    <Prop name='type' isRequired={false} type='default | primary | success | warning | alert | highlight | sd-green' default='default' description='Default + semantic colour variations (e.g. primary, success etc.)'/>
                    <Prop name='style' isRequired={false} type='filled | hollow' default='filled' description='Alerts may be one of styles such as hollow alerts, alerts without background (text-only) or default filled.'/>
                    <Prop name='size' isRequired={false} type='normal | small' default='normal' description='Choose between a normal or small alert.'/>
                    <Prop name='margin' isRequired={false} type='none | small | normal | large' default='normal' description='Specifies the bottom margin of the alert.'/>
                    <Prop name='icon' isRequired={false} type='string' default='-' description='Adds an icon at the beggining of the alert dialogue. To specify na icon use the names from the Icon component.'/>
                    <Prop name='banner' isRequired={false} type='boolean' default='false' description='Setting to true will remove the box-shadow and border-radius. Use this option to display the alert in toolbars and similar.'/>
                    <Prop name='restoreIcon' isRequired={false} type='info | help' default='info' description=''/>
                </PropsList>
            </section>
        )
    }
}
