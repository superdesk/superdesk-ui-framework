import * as React from 'react';
import * as Markup from '../../js/react';
import { PropsList, Prop, Text } from '../../../app-typescript';

interface IProps {
    children?: React.ReactNode;
}

export default class TextDoc extends React.Component<IProps> {
    render() {
        return (
            <section className='docs-page__container'>
                <h2 className='docs-page__h2'>Text</h2>
                
                <Markup.ReactMarkupCodePreview>{`
                    <Text>Cum sociis natoque penatibus et magnis dis parturient...</Text>
                `}
                </Markup.ReactMarkupCodePreview>

                <p className="docs-page__paragraph">Text component.</p>

                <Markup.ReactMarkup>
                    <Markup.ReactMarkupPreview>
                        <p className="docs-page__paragraph">// Sizes and alignments</p>
                        <div className='docs-page__content-row sd-margin-b--5'>
                            <Text size='x-small' style='italic'>
                                Extra small size (x-small), default alignment (start), italic. Fusce dapibus, tellus ac cursus commodo,
                                tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Nullam quis risus eget urna mollis
                                ornare vel eu leo. Maecenas faucibus mollis interdum. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </Text>
                        </div>
                        <div className='docs-page__content-row sd-margin-b--5'>
                            <Text align='end'>
                                Default size (small), align to end. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
                                Sed posuere consectetur est at lobortis. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
                                Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Integer posuere erat a ante venenatis dapibus
                                posuere velit aliquet. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Praesent
                                commodo cursus magna, vel scelerisque nisl consectetur et. Nulla vitae elit libero, a pharetra augue. Morbi leo
                                risus, porta ac consectetur ac, vestibulum at eros.
                            </Text>
                        </div>
                        <div className='docs-page__content-row sd-margin-b--5'>
                            <Text size='medium' align='center'>
                                Medium size, center aligned. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Sed posuere
                                consectetur est at lobortis. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Morbi leo risus,
                                porta ac consectetur ac, vestibulum at eros.
                            </Text>
                        </div>
                        <div className='docs-page__content-row sd-margin-b--5'>
                            <Text size='large' align='justify'>
                                Large size, justified. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Sed posuere consectetur
                                est at lobortis. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Morbi leo risus, porta ac
                                consectetur ac, vestibulum at eros. Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare
                                sem lacinia quam venenatis vestibulum. 
                            </Text>
                        </div>

                        <p className="docs-page__paragraph">// Variations</p>
                        <div className='docs-page__content-row sd-margin-b--5'>
                            <Text weight='light' size='medium'>
                                Large size, justified. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Sed posuere consectetur
                                est at lobortis. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Morbi leo risus, porta ac
                                consectetur ac, vestibulum at eros. Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare
                                sem lacinia quam venenatis vestibulum. 
                            </Text>
                        </div>
                        <div className='docs-page__content-row sd-margin-b--5'>
                            <Text fontStyle='serif' weight='strong' size='medium' color='light' align='center'>
                                Large size, justified. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Sed posuere consectetur
                                est at lobortis. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Morbi leo risus, porta ac
                                consectetur ac, vestibulum at eros. Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare
                                sem lacinia quam venenatis vestibulum. 
                            </Text>
                        </div>
                        <div className='docs-page__content-row sd-margin-b--5'>
                            <Text fontStyle='serif' weight='light' size='small' align='start'>
                                Large size, justified. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Sed posuere consectetur
                                est at lobortis. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Morbi leo risus, porta ac
                                consectetur ac, vestibulum at eros. Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare
                                sem lacinia quam venenatis vestibulum. 
                            </Text>
                        </div>
                        
                    </Markup.ReactMarkupPreview>
                    <Markup.ReactMarkupCode>{`
                        // Sizes and alignments

                        <Text size='x-small' style='italic'>
                            Extra small size (x-small), default alignment (start), italic. Fusce dapibus, tellus...
                        </Text>

                        <Text align='end'>
                            Default size (small), align to end. Praesent commodo cursus magna...
                        </Text>

                        <Text size='medium' align='center'>
                            Medium size, center aligned. Praesent commodo cursus magna, vel scelerisque...
                        </Text>

                        <Text size='large' align='justify'>
                            Large size, justified. Praesent commodo cursus magna, vel scelerisque nisl...
                        </Text>

                        // Variations

                        <Text weight='light' size='medium'>
                            Large size, justified. Praesent commodo cursus magna, vel scelerisque nisl consectetur et...
                        </Text>

                        <Text fontStyle='serif' weight='medium' size='medium' color='light' align='center'>
                            Large size, justified. Praesent commodo cursus magna, vel scelerisque nisl consectetur et... 
                        </Text>

                        <Text className='' fontStyle='serif' weight='medium' size='medium' color='light' align='center'>
                            Large size, justified. Praesent commodo cursus magna, vel scelerisque nisl consectetur et... 
                        </Text>
                    `}
                    </Markup.ReactMarkupCode>
                </Markup.ReactMarkup>

                <h3 className="docs-page__h3">Props</h3>
                <PropsList>
                    <Prop name='weight' isRequired={false} type='light | normal | medium | strong' default='normal' description='Change the default font weight.'/>
                    <Prop name='size' isRequired={true} type='x-small | small | medium | large' default='small' description='Choose between four predefined font sizes.'/>
                    <Prop name='style' isRequired={false} type='normal | italic' default='normal' description='Change the default text style.'/>
                    <Prop name='align' isRequired={false} type='start | end | center | justify' default='start' description='Text-align'/>
                    <Prop name='fontStyle' isRequired={false} type='sans | serif' default='sans' description='Choose between the default – sans (Roboto) – and serif (Merriweather) font styles. '/>
                    <Prop name='color' isRequired={false} type='normal | light | lighter' default='normal' description='Choose a different text colour. Additional two lighter shades are available.'/>
                    <Prop name='className' isRequired={false} type='string' default='/' description='Add helper classes or custom CSS styles'/>
                </PropsList>
            </section>
        )
    }
}