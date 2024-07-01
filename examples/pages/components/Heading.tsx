import * as React from 'react';
import * as Markup from '../../js/react';
import { PropsList, Prop, Heading } from '../../../app-typescript';

interface IProps {
    children?: React.ReactNode;
}

export default class HeadingDoc extends React.Component<IProps> {
    render() {
        return (
            <section className='docs-page__container'>
                <h2 className='docs-page__h2'>Heading</h2>
                
                <Markup.ReactMarkupCodePreview>{`
                    <Heading type='h2'>
                        Purus Dolor Ligula
                    </Heading>
                `}
                </Markup.ReactMarkupCodePreview>

                <p className="docs-page__paragraph">Heading component. By choosing the type (h1, h2, h3...) appropriate HTML tags will be rendered, preserving the semantcs.</p>

                <Markup.ReactMarkup>
                    <Markup.ReactMarkupPreview>
                        <p className="docs-page__paragraph">// Basic</p>
                        <div className='docs-page__content-row'>
                            <Heading type='h1'>Heading one example</Heading>
                        </div>
                        <div className='docs-page__content-row'>
                            <Heading type='h2'>Heading two example</Heading>
                        </div>
                        <div className='docs-page__content-row'>
                            <Heading type='h3'>Heading three example</Heading>
                        </div>
                        <div className='docs-page__content-row'>
                            <Heading type='h4'>Heading four example</Heading>
                        </div>
                        <div className='docs-page__content-row'>
                            <Heading type='h5'>Heading five example</Heading>
                        </div>
                        <div className='docs-page__content-row'>
                            <Heading type='h6'>Heading six example</Heading>
                        </div>

                        <p className="docs-page__paragraph">// Variations</p>

                        <div className='docs-page__content-row'>
                            <Heading fontStyle='serif' color='light' weight='strong' type='h1'>
                                Maecenas faucibus mollis interdum.
                            </Heading>
                        </div>
                        <div className='docs-page__content-row'>
                            <Heading type='h2' style='italic' align='end'>
                                Cras mattis consectetur purus sit amet fermentum.
                            </Heading>
                        </div>
                        <div className='docs-page__content-row'>
                            <Heading fontStyle='serif' type='h3' align='center' color='lighter'>
                                Etiam porta sem malesuada magna mollis euismod. Donec ullamcorper nulla.
                            </Heading>
                        </div>

                    </Markup.ReactMarkupPreview>
                    <Markup.ReactMarkupCode>{`
                        // Basic

                        <Heading type='h1'>Heading one example</Heading>
                        <Heading type='h2'>Heading two example</Heading>
                        <Heading type='h3'>Heading three example</Heading>
                        <Heading type='h4'>Heading four example</Heading>
                        <Heading type='h5'>Heading five example</Heading>
                        <Heading type='h6'>Heading six example</Heading>

                        // Variations

                        <Heading fontStyle='serif' color='light' weight='strong' type='h1'>
                            Maecenas faucibus mollis interdum.
                        </Heading>

                        <Heading type='h2' style='italic' align='end'>
                            Cras mattis consectetur purus sit amet fermentum.
                        </Heading>

                        <Heading  fontStyle='serif' type='h3' align='center' color='lighter'>
                            Etiam porta sem malesuada magna mollis euismod. Donec ullamcorper nulla.
                        </Heading>
  
                    `}
                    </Markup.ReactMarkupCode>
                </Markup.ReactMarkup>

                <h3 className="docs-page__h3">Props</h3>
                <PropsList>
                    <Prop name='type' isRequired={true} type='h1 | h2 | h3 | h4 | h5 | h6' default='/' description='Heading type (eg. H1, H2, H3... etc.)'/>
                    <Prop name='weight' isRequired={false} type='normal | medium | strong' default='normal' description='Change the default font weight.'/>
                    <Prop name='style' isRequired={false} type='normal | italic' default='normal' description='Change the default text style.'/>
                    <Prop name='align' isRequired={false} type='start | end | center | justify' default='start' description='Text-align'/>
                    <Prop name='fontStyle' isRequired={false} type='sans | serif' default='sans' description='Choose between default sans (Roboto) and serif (Merriweather) font styles. '/>
                    <Prop name='color' isRequired={false} type='normal | light | lighter' default='normal' description='Choose a different text colour. Additional two lighter shades are available.'/>
                    <Prop name='className' isRequired={false} type='string' default='/' description='Add helper classes or custom CSS styles'/>
                </PropsList>
            </section>
        )
    }
}