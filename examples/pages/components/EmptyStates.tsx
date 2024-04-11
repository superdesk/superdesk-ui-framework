import * as React from 'react';
import * as Markup from '../../js/react';
import { EmptyState, Button, Prop, PropsList } from '../../../app-typescript';

export default class EmptyStateDoc extends React.Component {
    render() {
        return (
            <section className='docs-page__container'>
                <h2 className='docs-page__h2'>Empty States</h2>
                
                <Markup.ReactMarkupCodePreview>{`
                    <EmptyState
                        title={gettext('This is an empty state example')}
                        description={gettext('Morbi leo risus, porta ac consectetur ac.')}
                    />
                `}
                </Markup.ReactMarkupCodePreview>

                <p className="docs-page__paragraph">Text info and illustrations for empty content areas in Superdesk.</p>

                <Markup.ReactMarkup>
                    <Markup.ReactMarkupPreview>
                        <div className="flex-grid flex-grid--boxed flex-grid--wrap-items flex-grid--small-3">
                            <div className="flex-grid__item content-state--empty" style={{height: 500}}>
                                <Button text="Primary action"  type="primary" expand={true} onClick={()=> false} />
                                <EmptyState
                                    title={'This is an example title'}
                                    description={'Morbi leo risus, porta ac consectetur ac.'}
                                    size="small"
                                    illustration="1"/>
                                <Button text="Secondary action" style="hollow" expand={true} onClick={()=> false} />
                            </div>
                            <div className="flex-grid__item content-state--empty" style={{height: 500}}>
                                <EmptyState
                                    title={'Empty state title'}
                                    description={'Nulla vitae elit libero, a pharetra augue.'}
                                    size="small"
                                    illustration="2"/>
                            </div>
                            <div className="flex-grid__item content-state--empty" style={{height: 500}}>
                                <Button text="Primary action"  type="primary" expand={true} onClick={()=> false} />
                                <EmptyState
                                    title={'Empty state example'}
                                    description={'Nulla vitae elit libero, a pharetra augue.'}
                                    size="small"
                                    illustration="3"/>
                                <Button text="Secondary action" style="hollow" expand={true} onClick={()=> false} />
                            </div>
                        </div>
                        <div className="flex-grid flex-grid--boxed flex-grid--wrap-items flex-grid--small-1">
                            <div className="flex-grid__item">
                                <EmptyState
                                    title={'Empty state title'}
                                    description={'Integer posuere erat a ante venenatis dapibus posuere velit aliquet.'}
                                    size="large"
                                    illustration="1"/>
                            </div>
                            <div className="flex-grid__item">
                                <EmptyState
                                    title={'Some title'}
                                    description={'Maecenas sed diam eget risus varius blandit sit amet non magna.'}
                                    size="large"
                                    illustration="2"/>
                            </div>
                            <div className="flex-grid__item">
                                <EmptyState
                                    title={'Empty state heading'}
                                    description={'Vestibulum id ligula porta felis euismod semper.'}
                                    size="large"
                                    illustration="3"/>
                            </div>
                            <div className="flex-grid__item">
                                <EmptyState
                                    title={'Dashboard heading'}
                                    description={'Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.'}
                                    size="large"
                                    illustration="dashboard"/>
                            </div>
                        </div>
                    </Markup.ReactMarkupPreview>
                    <Markup.ReactMarkupCode>{`
                        // Small 
                        <EmptyState
                            title={'This is an example title'}
                            description={'Morbi leo risus, porta ac consectetur ac.'}
                            size="small"
                            illustration="1"/>
                        <EmptyState
                            title={'Empty state title'}
                            description={'Nulla vitae elit libero, a pharetra augue.'}
                            size="small"
                            illustration="2"/>
                        <EmptyState
                            title={'Empty state example'}
                            description={'Nulla vitae elit libero, a pharetra augue.'}
                            size="small"
                            illustration="3"/>

                        // Large
                        <EmptyState
                            title={'Empty state title'}
                            description={'Integer posuere erat a ante venenatis dapibus posuere velit aliquet.'}
                            size="large"
                            illustration="1"/> 
                        <EmptyState
                            title={'Some title'}
                            description={'Maecenas sed diam eget risus varius blandit sit amet non magna.'}
                            size="large"
                            illustration="2"/>
                        <EmptyState
                            title={'Empty state heading'}
                            description={'Vestibulum id ligula porta felis euismod semper.'}
                            size="large"
                            illustration="3"/>
                        <EmptyState
                            title={'Dashboard heading'}
                            description={'Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.'}
                            size="large"
                            illustration="dashboard"/>      
                    `}
                    </Markup.ReactMarkupCode>
                </Markup.ReactMarkup>


                <h3 className="docs-page__h3">Props</h3>
                <PropsList>
                    <Prop name='title' isRequired={true} type='string' default='false' description='Title of the Empty state info block.'/>
                    <Prop name='description' isRequired={false} type='string' default='false' description='Additional information e.g. suggested actions etc.'/>
                    <Prop name='size' isRequired={false} type='small | large' default='small' description='Specifies the size and type of the illustration. Small should be used for narrow areas, like side panels, while large is suited for wider content areas. '/>
                    <Prop name='illustration' isRequired={false} type='string' default='1' description='In combination with the size prop this defines the illustration. Possible values: 1, 2, 3 and dashboard (with size large only).'/>
                </PropsList>

            </section>
        )
    }
}
