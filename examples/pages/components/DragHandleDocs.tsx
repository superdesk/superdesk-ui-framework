import * as React from 'react';
import {DragHandle, Prop, PropsList } from '../../../app-typescript';
import * as Markup from '../../js/react';

export default class DragHandleDocs extends React.Component {
    render() {
        return (
            <section className="docs-page__container">
                <h2 className="docs-page__h2">Drag handle</h2>
                <Markup.ReactMarkupCodePreview>{`
                    <DragHandle />
                `}
                </Markup.ReactMarkupCodePreview>
                <Markup.ReactMarkup>
                    <Markup.ReactMarkupPreview>
                        <p className="docs-page__paragraph">// Default</p>
                        <div className="docs-page__content-row">
                            <DragHandle />
                        </div>
                        <p className="mt-2 docs-page__paragraph">// Some size examples</p>
                        <p className="docs-page__paragraph--small">
                            The number of dotted rows and dots in each row can be adjusted independently,
                            offering a wide range of size options.
                        </p>
                        <div className="docs-page__content-row">
                            <div className='d-flex items-start sd-gap--medium'>
                                <DragHandle dotsInRow='2' dotRows='5' />
                                <DragHandle dotsInRow='2' dotRows='8' />
                                <DragHandle dotsInRow='3' dotRows='6' />
                                <DragHandle dotsInRow='3' dotRows='8' />
                                <DragHandle dotsInRow='3' dotRows='10' />
                                <DragHandle dotsInRow='5' dotRows='4' />
                            </div>

                        </div>
                        <p className="docs-page__paragraph">// Blank</p>
                        <p className="docs-page__paragraph--small">
                            This option will remove all default styles from the components container, like padding and background color.
                            To be used within list items, draggable labels, and similar contexts.
                        </p>
                        <div className="docs-page__content-row">
                            <div className='d-flex items-start sd-gap--medium'>
                                <DragHandle blank={true} />
                                <DragHandle dotsInRow='2' dotRows='10' blank={true} />
                                <DragHandle dotsInRow='4' dotRows='10' blank={true} />
                                <DragHandle dotsInRow='5' dotRows='4' blank={true} />
                                <DragHandle dotsInRow='3' dotRows='4' blank={true} />
                                
                            </div>
                        </div>
                    </Markup.ReactMarkupPreview>
                    <Markup.ReactMarkupCode>{`
                    // Default
                    <DragHandle />

                    // Some size examples
                    // The number of dotted rows and dots in each row can be adjusted independently,
                    offering a wide range of size options.   
                    
                    <DragHandle dotsInRow='2' dotRows='5' />
                    <DragHandle dotsInRow='2' dotRows='8' />
                    <DragHandle dotsInRow='3' dotRows='6' />
                    <DragHandle dotsInRow='3' dotRows='8' />
                    <DragHandle dotsInRow='3' dotRows='10' />
                    <DragHandle dotsInRow='5' dotRows='4' />

                    // Blank
                    // This option will remove all default styles from the components container, like padding and background color.
                    To be used within list items, draggable labels, and similar contexts.

                    <DragHandle blank={true} />
                    <DragHandle dotsInRow='2' dotRows='10' blank={true} />
                    <DragHandle dotsInRow='4' dotRows='10' blank={true} />
                    <DragHandle dotsInRow='5' dotRows='4' blank={true} />
                    <DragHandle dotsInRow='3' dotRows='4' blank={true} />

                    `}
                    </Markup.ReactMarkupCode>
                </Markup.ReactMarkup>

                <h3 className="docs-page__h3">Props</h3>
                <PropsList>
                    <Prop name='blank' isRequired={false} type='boolean' default='false' description='Set to true to remove all the default styling from the wrapper, leaving only the dots exposed. This should be applied if the drag handle is used in list items, draggable labels, or similar contexts.'/>
                    <Prop name='dotRows' isRequired={false} type='4 | 5 | 6 | 7 | 8 | 10' default='4' description='Set the number of dotted rows and, as a result, the height of the drag handle.'/>
                    <Prop name='dotsInRow' isRequired={false} type='2 | 3 | 4 | 5' default='2' description='Set the number of dots in the row. This will also affect the overall wdth of the component.'/>
                    <Prop name='dotColor' isRequired={false} type='light | dark' default='currentColor' description='The dots are using the theme text color by default, so this option should be used in rare cases where there is a need to explicitly change this.'/>
                    <Prop name='className' isRequired={false} type='string' default='/' description='Add custom classes to modify or override the default styles of the component.'/>
                </PropsList>
            </section>
        );
    }
}
