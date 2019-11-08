import * as React from 'react';

import * as Markup from '../../js/react';

import { Alert } from '../../../app-typescript';

export default class AlertDoc extends React.Component {
    render() {
        return (
            <section className="docs-page__container">
                <h2 className="docs-page__h2">Alerts</h2>
                <p className="docs-page__paragraph">Provide contextual feedback or info messages for user actions with the handful of available alert box options.</p>
                <Markup.ReactMarkup>
                    <Markup.ReactMarkupPreview>
                    <p className="docs-page__paragraph">// Hollow style (preferred usage)</p>
                    <Alert hollow={true}>
                        Fusce nec ex et dolor rhoncus iaculis maximus sit amet lorem. Nunc posuere, ligula quis dictum tempor, lectus diam pharetra est, id fringilla leo urna vel arcu.
                    </Alert>
                    <Alert 
                    hollow={true}
                    typeAlert='alert'
                    typeInfo='alert'>
                        Sed tincidunt ipsum metus, consectetur vestibulum turpis luctus in. Vestibulum ut ex vulputate, lacinia mauris vel, accumsan libero. Morbi dapibus non felis et convallis. Sed at dolor vel nisl aliquam vehicula.
                    </Alert>
                    <Alert hollow={true} typeAlert='sd-green' typeInfo='sd-green' helpIcon={true}>
                    In mattis tellus odio, quis dictum sapien pellentesque in. Phasellus dignissim tempus ante at congue. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis maximus bibendum lacinia.
                    </Alert>
                    <Alert hollow={true} typeAlert='primary' typeInfo='primary'>
                        Integer elementum vestibulum ipsum a rhoncus. Cras et tortor tempus, imperdiet neque sit amet, imperdiet elit. Nunc eleifend sollicitudin molestie. Aliquam nec enim orci.
                    </Alert>
                    <p className="docs-page__paragraph">// Filled</p>
                    <Alert typeAlert='sd-green' typeInfo='sd-green'>
                        Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis. Praesent vulputate eros nisi, et porta magna eleifend et.
                    </Alert>
                    <Alert typeAlert='warning' typeInfo='warning'>
                        Praesent vulputate eros nisi, et porta magna eleifend et. Duis non sagittis erat. Nulla facilisi. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                    </Alert>
                    <p className="docs-page__paragraph">// Small</p>
                    <Alert hollow={true} small={true} typeAlert='primary' typeInfo='primary'>
                        Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.
                    </Alert>
                    <Alert small={true} typeAlert='highlight' typeInfo='highlight'>
                        Maecenas sed diam eget risus varius blandit sit amet non magna. Curabitur blandit tempus porttitor. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec ullamcorper nulla non metus auctor fringilla. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.
                    </Alert>
                    </Markup.ReactMarkupPreview>
                    <Markup.ReactMarkupCode>
                       
                    </Markup.ReactMarkupCode>
                </Markup.ReactMarkup>

            </section>
        )
    }
}
