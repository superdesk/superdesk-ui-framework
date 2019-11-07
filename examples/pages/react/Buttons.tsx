import * as React from 'react';
import * as Markup from '../../js/react';

import { Button } from '../../../app-typescript';

export default class ButtonsDoc extends React.Component {
    render() {
        return (
            <section className="docs-page__container">
                <h2 className="docs-page__h2">Buttons</h2>
                <h3 className="docs-page__h3">Sizing</h3>

                <Markup.ReactMarkup>
                    <Markup.ReactMarkupPreview>
                    <div className='docs-page__content-row'>
                        <Button text='button small' sizes='small'/>
                        <Button text='button default'/>
                        <Button text='button large' sizes='large'/>
                    </div>
                    <div className='docs-page__content-row'>
                        <Button text='small expanded button' expanded={true} sizes='small'/>
                    </div>                    
                    <div className='docs-page__content-row'>
                        <Button text='default expanded button' expanded={true}/>
                    </div>
                    <div className='docs-page__content-row'>
                        <Button text='large expanded button' expanded={true} sizes='large'/>
                    </div>
                    </Markup.ReactMarkupPreview>
                    <Markup.ReactMarkupCode>
                       
                    </Markup.ReactMarkupCode>
                </Markup.ReactMarkup>

                <h3 className="docs-page__h3">Coloring</h3>
                <Markup.ReactMarkup>
                    <Markup.ReactMarkupPreview>
                    <div className='docs-page__content-row'>
                        <Button text='default'/>
                        <Button text='primary' types='primary'/>
                        <Button text='success' types='success'/>
                        <Button text='warning' types='warning'/>
                        <Button text='alert' types='alert'/>
                        <Button text='highlight' types='highlight'/>
                        <Button text='sd-green' types='sd-green'/>
                    </div>
                    </Markup.ReactMarkupPreview>
                    <Markup.ReactMarkupCode>
                       
                    </Markup.ReactMarkupCode>
                </Markup.ReactMarkup>

                <h3 className="docs-page__h3">Hollow style</h3>
                <Markup.ReactMarkup>
                    <Markup.ReactMarkupPreview>
                    <div className='docs-page__content-row'>
                        <Button text='default' hollow={true}/>
                        <Button text='primary' types='primary' hollow={true}/>
                        <Button text='success' types='success' hollow={true}/>
                        <Button text='warning' types='warning' hollow={true}/>
                        <Button text='alert' types='alert' hollow={true}/>
                        <Button text='highlight' types='highlight' hollow={true}/>
                        <Button text='sd-green' types='sd-green' hollow={true}/>
                    </div>
                    </Markup.ReactMarkupPreview>
                    <Markup.ReactMarkupCode>
                       
                    </Markup.ReactMarkupCode>
                </Markup.ReactMarkup>

                <h3 className="docs-page__h3">Text only (without background)</h3>
                <Markup.ReactMarkup>
                    <Markup.ReactMarkupPreview>
                    <div className='docs-page__content-row'>
                        <Button text='default' textOnly={true}/>
                        <Button text='primary' types='primary' textOnly={true}/>
                        <Button text='success' types='success' textOnly={true}/>
                        <Button text='warning' types='warning' textOnly={true}/>
                        <Button text='alert' types='alert' textOnly={true}/>
                        <Button text='highlight' types='highlight' textOnly={true}/>
                        <Button text='sd-green' types='sd-green' textOnly={true}/>
                    </div>
                    </Markup.ReactMarkupPreview>
                    <Markup.ReactMarkupCode>
                       
                    </Markup.ReactMarkupCode>
                </Markup.ReactMarkup>

                <h3 className="docs-page__h3">Disabled</h3>
                <Markup.ReactMarkup>
                    <Markup.ReactMarkupPreview>
                    <div className='docs-page__content-row'>
                        <Button text='default' disabled={true}/>
                        <Button text='primary' types='primary' disabled={true}/>
                        <Button text='success' types='success' disabled={true}/>
                        <Button text='warning' types='warning' disabled={true}/>
                        <Button text='alert' types='alert' disabled={true}/>
                        <Button text='highlight' types='highlight' disabled={true}/>
                        <Button text='sd-green' types='sd-green' disabled={true}/>
                    </div>
                    <div className='docs-page__content-row'>
                        <Button text='default' hollow={true} disabled={true}/>
                        <Button text='primary' types='primary' hollow={true} disabled={true}/>
                        <Button text='success' types='success' hollow={true} disabled={true}/>
                        <Button text='warning' types='warning' hollow={true} disabled={true}/>
                        <Button text='alert' types='alert' hollow={true} disabled={true}/>
                        <Button text='highlight' types='highlight' hollow={true} disabled={true}/>
                        <Button text='sd-green' types='sd-green' hollow={true} disabled={true}/>
                    </div>
                    <div className='docs-page__content-row'>
                        <Button text='default' textOnly={true} disabled={true}/>
                        <Button text='primary' types='primary' textOnly={true} disabled={true}/>
                        <Button text='success' types='success' textOnly={true} disabled={true}/>
                        <Button text='warning' types='warning' textOnly={true} disabled={true}/>
                        <Button text='alert' types='alert' textOnly={true} disabled={true}/>
                        <Button text='highlight' types='highlight' textOnly={true} disabled={true}/>
                        <Button text='sd-green' types='sd-green' textOnly={true} disabled={true}/>
                    </div>
                    </Markup.ReactMarkupPreview>
                    <Markup.ReactMarkupCode>
                       
                    </Markup.ReactMarkupCode>
                </Markup.ReactMarkup>

                <h3 className="docs-page__h3">Buttons with icon font and text</h3>
                <p className="docs-page__paragraph ng-scope">Buttons can be combined with the the icon font. No extra modifiers are needed, just adding any of the available classes from the Icon font to an <code>&lt;i&gt;</code> tag placed before the button text.</p>
                <Markup.ReactMarkup>
                    <Markup.ReactMarkupPreview>
                    <p className="docs-page__paragraph">// Default size</p>
                    <div className='docs-page__content-row'>
                        <Button text='default' icons='info-sign'/>
                        <Button text='primary' types='primary' icons='plus-sign'/>
                        <Button text='success' types='success' icons='ok'/>
                        <Button text='alert' types='alert' icons='warning-sign'/>
                        <Button text='default' icons='info-sign' hollow={true}/>
                        <Button text='primary' types='primary' icons='plus-sign' hollow={true}/>
                        <Button text='success' types='success' icons='ok'  hollow={true}/>
                        <Button text='warning' types='warning' icons='warning-sign' hollow={true}/>
                        <Button text='default' icons='info-sign' disabled={true}/>
                        <Button text='primary' types='primary' icons='plus-sign' disabled={true}/>
                    </div>
                    <p className="docs-page__paragraph">// Large size</p>
                    <div className='docs-page__content-row'>
                        <Button text='default' icons='info-sign' sizes='large'/>
                        <Button text='primary' types='primary' icons='plus-sign' sizes='large'/>
                        <Button text='success' types='success' icons='ok' sizes='large'/>
                        <Button text='default' icons='info-sign' hollow={true} sizes='large'/>
                        <Button text='primary' types='primary' icons='plus-sign' hollow={true} sizes='large'/>
                    </div>
                    <p className="docs-page__paragraph">// Small size</p>
                    <div className='docs-page__content-row'>
                        <Button text='default' icons='info-sign' sizes='small'/>
                        <Button text='primary' types='primary' icons='plus-sign' sizes='small'/>
                    </div>
                    </Markup.ReactMarkupPreview>
                    <Markup.ReactMarkupCode>
                       
                    </Markup.ReactMarkupCode>
                </Markup.ReactMarkup>

                <h3 className="docs-page__h3">Buttons with icon font only</h3>
                <p className="docs-page__paragraph ng-scope">For buttons without any text, only an icon, the modifier <code>btn--icon-only</code> is needed to ajust the padding and width of the button.</p>
                <Markup.ReactMarkup>
                    <Markup.ReactMarkupPreview>
                    <p className="docs-page__paragraph">// Default</p>
                    <div className='docs-page__content-row'>
                        <Button icons='info-sign'/>
                        <Button types='primary' icons='plus-sign'/>
                        <Button types='success' icons='ok'/>
                    </div>
                    <p className="docs-page__paragraph">// Large</p>
                    <div className='docs-page__content-row'>
                        <Button types='warning' icons='exclamation-sign' sizes='large'/>
                        <Button types='primary' icons='plus-sign' hollow={true} sizes='large'/>
                        <Button types='highlight' icons='bell' sizes='large'/>
                    </div>
                    <p className="docs-page__paragraph">// Small</p>
                    <div className='docs-page__content-row'>
                        <Button types='alert' hollow={true} icons='kill' sizes='small'/>
                        <Button icons='calendar' sizes='small'/>
                        <Button types='primary' hollow={true} icons='refresh' sizes='small'/>
                    </div>
                    <p className="docs-page__paragraph">// Circle default</p>
                    <div className='docs-page__content-row'>
                        <Button icons='info-sign' circle={true}/>
                        <Button types='primary' icons='plus-large' circle={true}/>
                        <Button types='success' icons='ok' circle={true}/>
                    </div>
                    <p className="docs-page__paragraph">// Circle large</p>
                    <div className='docs-page__content-row'>
                        <Button types='warning' icons='exclamation-sign' sizes='large' circle={true}/>
                        <Button types='primary' icons='plus-large' hollow={true} sizes='large' circle={true}/>
                        <Button types='highlight' icons='bell' sizes='large' circle={true}/>
                    </div>
                    <p className="docs-page__paragraph">// Circle small</p>
                    <div className='docs-page__content-row'>
                        <Button types='alert' icons='close-small' sizes='small' circle={true}/>
                        <Button types='primary' icons='plus-large' sizes='small' circle={true}/>
                        <Button types='sd-green' icons='star' sizes='small' circle={true}/>
                    </div>
                    </Markup.ReactMarkupPreview>
                    <Markup.ReactMarkupCode>
                       
                    </Markup.ReactMarkupCode>
                </Markup.ReactMarkup>

                <h3 className="docs-page__h3">Dark UI</h3>
                <p className="docs-page__paragraph ng-scope">To have appropriate button colors on dark background, just add class <code>btn--ui-dark</code> to regular markup.</p>
                <Markup.ReactMarkup>
                    <Markup.ReactMarkupPreview>
                    <p className="docs-page__paragraph">// Default style</p>
                    <div className='docs-page__content-row docs-page__content-row--ui-dark'>
                        <Button text='default' dark={true}/>
                        <Button text='primary' types='primary' dark={true}/>
                        <Button text='success' types='success' dark={true}/>
                        <Button text='warning' types='warning' dark={true}/>
                        <Button text='alert' types='alert' dark={true}/>
                        <Button text='highlight' types='highlight' dark={true}/>
                        <Button text='sd-green' types='sd-green' dark={true}/>
                    </div>
                    <p className="docs-page__paragraph">// Hollow style</p>
                    <div className='docs-page__content-row docs-page__content-row--ui-dark'>
                        <Button text='default' hollow={true} dark={true}/>
                        <Button text='primary' types='primary' hollow={true} dark={true}/>
                        <Button text='success' types='success' hollow={true} dark={true}/>
                        <Button text='warning' types='warning' hollow={true} dark={true}/>
                        <Button text='alert' types='alert' hollow={true} dark={true}/>
                        <Button text='highlight' types='highlight' hollow={true} dark={true}/>
                        <Button text='sd-green' types='sd-green' hollow={true} dark={true}/>
                    </div>
                    <p className="docs-page__paragraph">// Text only style</p>
                    <div className='docs-page__content-row docs-page__content-row--ui-dark'>
                        <Button text='default' textOnly={true} dark={true}/>
                        <Button text='primary' types='primary' textOnly={true} dark={true}/>
                        <Button text='success' types='success' textOnly={true} dark={true}/>
                        <Button text='warning' types='warning' textOnly={true} dark={true}/>
                        <Button text='alert' types='alert' textOnly={true} dark={true}/>
                        <Button text='highlight' types='highlight' textOnly={true} dark={true}/>
                        <Button text='sd-green' types='sd-green' textOnly={true} dark={true}/>
                    </div>
                    <p className="docs-page__paragraph">// Disabled</p>
                    <div className='docs-page__content-row docs-page__content-row--ui-dark'>
                        <Button text='default' disabled={true} dark={true}/>
                        <Button text='primary' types='primary' disabled={true} dark={true}/>
                        <Button text='success' types='success' disabled={true} dark={true}/>
                        <Button text='warning' types='warning' disabled={true} dark={true}/>
                        <Button text='alert' types='alert' disabled={true} dark={true}/>
                        <Button text='highlight' types='highlight' disabled={true} dark={true}/>
                        <Button text='sd-green' types='sd-green' disabled={true} dark={true}/>
                        <Button text='default' hollow={true} disabled={true} dark={true}/>
                        <Button text='primary' types='primary' hollow={true} disabled={true} dark={true}/>
                        <Button text='success' types='success' hollow={true} disabled={true} dark={true}/>
                        <Button text='warning' types='warning' hollow={true} disabled={true} dark={true}/>
                        <Button text='alert' types='alert' hollow={true} disabled={true} dark={true}/>
                        <Button text='highlight' types='highlight' hollow={true} disabled={true} dark={true}/>
                        <Button text='sd-green' types='sd-green' hollow={true} disabled={true} dark={true}/>
                        <Button text='default' textOnly={true} disabled={true} dark={true}/>
                        <Button text='primary' types='primary' textOnly={true} disabled={true} dark={true}/>
                        <Button text='success' types='success' textOnly={true} disabled={true} dark={true}/>
                        <Button text='warning' types='warning' textOnly={true} disabled={true} dark={true}/>
                        <Button text='alert' types='alert' textOnly={true} disabled={true} dark={true}/>
                        <Button text='highlight' types='highlight' textOnly={true} disabled={true} dark={true}/>
                        <Button text='sd-green' types='sd-green' textOnly={true} disabled={true} dark={true}/>
                    </div>
                    </Markup.ReactMarkupPreview>
                    <Markup.ReactMarkupCode>
                       
                    </Markup.ReactMarkupCode>
                </Markup.ReactMarkup>

                <h3 className="docs-page__h3">Plain icon button</h3>
                <p className="docs-page__paragraph ng-scope">
                    Plain icon buttons don't use the base <code>.btn</code> class like other buttons, instead a separate class ( <code>.icn-btn</code> ) 
                    is used to simpify the implementation and make it more flexible. It is intended mostly for actions on list items, toolbars etc. 
                    The font color is set to inherit so it will take it from the nearest parent where the color is defined. Tooltips are also suppored 
                    (see the Tooltip section for implementation details).  
                </p>
                <Markup.ReactMarkup>
                    <Markup.ReactMarkupPreview>
                        <Button iconBtn={true} icons='close-small' tooltip='I support tooltips!'/>
                        <Button iconBtn={true} icons='plus-large'/>
                        <Button iconBtn={true} icons='dots-vertical'/>
                        <Button iconBtn={true} icons='trash'/>
                        <Button iconBtn={true} icons='close-small' tooltip='My tooltip is on right.' flow='right'/>
                        <p className="docs-page__paragraph">// Dark UI</p>
                        <div className="docs-page__content-row docs-page__content-row--ui-dark" style={{color:'white'}}>
                            <Button iconBtn={true} icons='close-small' tooltip='I support tooltips!' dark={true}/>
                            <Button iconBtn={true} icons='plus-large' dark={true}/>
                            <Button iconBtn={true} icons='dots-vertical' dark={true}/>
                            <Button iconBtn={true} icons='trash' dark={true}/>
                            <Button iconBtn={true} icons='close-small' tooltip='My tooltip is on right.' flow='right' dark={true}/>
                        </div>
                    </Markup.ReactMarkupPreview>
                    <Markup.ReactMarkupCode>
                       
                    </Markup.ReactMarkupCode>
                </Markup.ReactMarkup>
            </section>
        )
    }
}
