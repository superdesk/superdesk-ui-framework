import * as React from 'react';
import {IllustrationButton, SvgIconIllustration, Prop, PropsList} from '../../../app-typescript';
import * as Markup from '../../js/react';

export class IllustrationButtonDoc extends React.Component {
    render() {
        return (
            <section className="docs-page__container">
                <h2 className="docs-page__h2">Illustration Button & SVG icon illustration</h2>
                <Markup.ReactMarkupCodePreview>{`
                    <IllustrationButton text='Headlines' onClick={()=> false}>
                        <SvgIconIllustration illustration='headlines' />
                    </IllustrationButton>
                `}
                </Markup.ReactMarkupCodePreview>
                <Markup.ReactMarkup>
                    <Markup.ReactMarkupPreview>
                        <div className="docs-page__content-row">
                            {/* Note: The style attribute is added only for the purpose of the demo */}
                            <div 
                                className='sd-grid-list sd-grid-list--xx-small sd-grid-list--gap-s sd-grid-list--no-margin'
                                style={{width:'290px'}}
                            >
                                <IllustrationButton text='Headlines' onClick={()=> false}>
                                    <SvgIconIllustration illustration='headlines' />
                                </IllustrationButton>

                                <IllustrationButton text='Keywords' onClick={()=> false}>
                                    <SvgIconIllustration illustration='keywords' />
                                </IllustrationButton>

                                <IllustrationButton text='Optimise' onClick={()=> false}>
                                    <SvgIconIllustration illustration='optimise' />
                                </IllustrationButton>

                                <IllustrationButton text='Summary' onClick={()=> false}>
                                    <SvgIconIllustration illustration='summary' />
                                </IllustrationButton>

                                <IllustrationButton text='Translate' onClick={()=> false}>
                                    <SvgIconIllustration illustration='translate' />
                                </IllustrationButton>
                            </div>
                        </div>
                    </Markup.ReactMarkupPreview>
                    <Markup.ReactMarkupCode>{`
                        // Note: The style attribute is added only for the purpose of the demo
                        <div className='sd-grid-list sd-grid-list--xx-small sd-grid-list--gap-s sd-grid-list--no-margin' style={{width:'290px'}}>
                            <IllustrationButton text='Headlines' onClick={()=> false}>
                                <SvgIconIllustration illustration='headlines' />
                            </IllustrationButton>

                            <IllustrationButton text='Keywords' onClick={()=> false}>
                                <SvgIconIllustration illustration='keywords' />
                            </IllustrationButton>

                            <IllustrationButton text='Optimise' onClick={()=> false}>
                                <SvgIconIllustration illustration='optimise' />
                            </IllustrationButton>

                            <IllustrationButton text='Summary' onClick={()=> false}>
                                <SvgIconIllustration illustration='summary' />
                            </IllustrationButton>

                            <IllustrationButton text='Translate' onClick={()=> false}>
                                <SvgIconIllustration illustration='translate' />
                            </IllustrationButton>
                        </div>
                    `}
                    </Markup.ReactMarkupCode>
                </Markup.ReactMarkup>
                
                <h3 className="docs-page__h3">Props</h3>
                <h4 className="docs-page__h4">IllustrationButton</h4>
                <PropsList>
                    <Prop name='text' isRequired={true} type='string' default='/' description='Button text label'/>
                    <Prop name='onClick' isRequired={true} type='function' default='false' description='Callback fired when a button is pressed.'/>
                    <Prop name='disabled' isRequired={false} type='boolean' default='false' description='Disables the Button, preventing mouse events.'/>
                </PropsList>

                <h3 className="docs-page__h3">Props</h3>
                <h4 className="docs-page__h4">SvgIconIllustration</h4>
                <PropsList>
                    <Prop name='illustration' isRequired={true} type='headlines | keywords | optimise | summary | translate' default='/' description='Choose the desired illustration.'/>
                </PropsList>
            </section>
        );
    }
}
