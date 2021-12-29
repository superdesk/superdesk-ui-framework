import * as React from 'react';
import * as Markup from '../../js/react';
import { PropsList, Prop, Container, Text, Heading, Button, ButtonGroup } from '../../../app-typescript';

interface IProps {
    children?: React.ReactNode;
}

export default class ContainerDoc extends React.Component<IProps> {
    render() {
        return (
            <section className='docs-page__container'>
                <h2 className='docs-page__h2'>Container</h2>
                
                <Markup.ReactMarkupCodePreview>{`
                    <Container>
                        Cum sociis natoque penatibus et magnis dis parturient...
                    </Container>
                `}
                </Markup.ReactMarkupCodePreview>

                <p className="docs-page__paragraph">
                    The Container is a convenient layout component with different layout options and support for external CSS classes.
                    The display model is <code>flex</code> by default, but can be changed with the <code>display</code> prop. It is 
                    intended to be used with helper CSS classes to achieve desired styling options
                </p>

                <Markup.ReactMarkup>
                    <Markup.ReactMarkupPreview>
                        <p className="docs-page__paragraph">// Basic</p>
                        <div className='docs-page__content-row'>
                            <Container>
                                Large size, justified. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Sed posuere consectetur
                                est at lobortis. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Morbi leo risus, porta ac
                                consectetur ac, vestibulum at eros. Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare
                                sem lacinia quam venenatis vestibulum. 
                            </Container>
                        </div>

                        <p className="docs-page__paragraph">// Usage examples</p>

                        <div className='docs-page__content-row'>
                            <Container gap="large" className='sd-border--medium sd-font-size--medium sd-padding--2 sd-radius--large'>
                                <span>Curabitur blandit tempus porttitor.</span>
                                <Button text="Test button" type="primary" onClick={()=> false} />
                                <Button text="Test button" type="highlight" onClick={()=> false} />
                                <ButtonGroup align="end">
                                    <Button text="Cancel" onClick={()=> false} type="default" style="hollow" />
                                    <Button text="Submit" onClick={()=> false} type="primary" />
                                </ButtonGroup>
                            </Container>
                        </div>

                        <div className='docs-page__content-row'>
                            <Container gap="large" direction='column' className='sd-radius--medium sd-panel-bg--000 sd-shadow--z2 sd-padding--3 sd-state--focus'>
                                <Heading type='h3'>Curabitur blandit tempus porttitor.</Heading>
                                <Text color='light'>
                                    Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
                                    Sed posuere consectetur est at lobortis. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
                                    Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Integer posuere erat a ante venenatis dapibus
                                    posuere velit aliquet. Aenean eu leo quam.
                                </Text>
                                <ButtonGroup align="end">
                                    <Button text="Cancel" onClick={()=> false} type="default" style="hollow" />
                                    <Button text="Submit" onClick={()=> false} type="primary" />
                                </ButtonGroup>
                            </Container>
                        </div>

                        <div className='docs-page__content-row'>
                            <Container gap="large" theme='dark-ui' direction='column' className='sd-radius--medium sd-panel-bg--000 sd-shadow--z2 sd-padding--3 sd-state--focus'>
                                <Heading type='h3'>Curabitur blandit tempus porttitor.</Heading>
                                <Text color='light'>
                                    Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
                                    Sed posuere consectetur est at lobortis. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
                                    Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Integer posuere erat a ante venenatis dapibus
                                    posuere velit aliquet. Aenean eu leo quam.
                                </Text>
                                <ButtonGroup align="end">
                                    <Button text="Cancel" onClick={()=> false} type="default" style="hollow" />
                                    <Button text="Submit" onClick={()=> false} type="primary" />
                                </ButtonGroup>
                            </Container>
                        </div>
                        
                    </Markup.ReactMarkupPreview>
                    <Markup.ReactMarkupCode>{`
                        // Basic

                        <Container>
                            Large size, justified. Praesent commodo cursus magna, vel scelerisque nisl consectetur et... 
                        </Container>

                        // Usage examples

                        <Container gap="large" className='sd-border--medium sd-font-size--medium sd-padding--2 sd-radius--large'>
                            <span>Curabitur blandit tempus porttitor.</span>
                            <Button text="Test button" type="primary" onClick={()=> false} />
                            <Button text="Test button" type="highlight" onClick={()=> false} />
                            <ButtonGroup align="end">
                                <Button text="Cancel" onClick={()=> false} type="default" style="hollow" />
                                <Button text="Submit" onClick={()=> false} type="primary" />
                            </ButtonGroup>
                        </Container>

                        <Container gap="large" direction='column' className='sd-radius--medium sd-panel-bg--000 sd-shadow--z2 sd-padding--3 sd-state--focus'>
                            <Heading type='h3'>Curabitur blandit tempus porttitor.</Heading>
                            <Text color='light'>
                                Praesent commodo cursus magna, vel scelerisque nisl consectetur et...
                            </Text>
                            <ButtonGroup align="end">
                                <Button text="Cancel" onClick={()=> false} type="default" style="hollow" />
                                <Button text="Submit" onClick={()=> false} type="primary" />
                            </ButtonGroup>
                        </Container>

                        <Container gap="large" theme='dark-ui' direction='column' className='sd-radius--medium sd-panel-bg--000 sd-shadow--z2 sd-padding--3 sd-state--focus'>
                        <Heading type='h3'>Curabitur blandit tempus porttitor.</Heading>
                        <Text color='light'>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur et...
                        </Text>
                        <ButtonGroup align="end">
                            <Button text="Cancel" onClick={()=> false} type="default" style="hollow" />
                            <Button text="Submit" onClick={()=> false} type="primary" />
                        </ButtonGroup>
                    </Container>
  
                    `}
                    </Markup.ReactMarkupCode>
                </Markup.ReactMarkup>

                <h3 className="docs-page__h3">Props</h3>
                <PropsList>
                    <Prop name='display' isRequired={false} type='flex | inline-flex | block' default='flex' description='Change the default display mode (flex).'/>
                    <Prop name='direction' isRequired={false} type='row | column' default='row' description='Change the flex-direction property.'/>
                    <Prop name='gap' isRequired={false} type='none | small |  medium | large' default='none' description='Set the gap between elements inside the Container.'/>
                    <Prop name='theme' isRequired={false} type='light-ui | dark-ui' default='/' description='Choose the UI theme. It will inherit the default theme if not set. All items inside will inherit the theme of the Container if it is set.'/>
                    <Prop name='className' isRequired={false} type='string' default='/' description='Add helper classes or custom CSS styles'/>
                </PropsList>
            </section>
        )
    }
}