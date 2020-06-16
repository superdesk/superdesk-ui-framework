import * as React from 'react';
import * as Markup from '../../js/react';
import { TagInput } from '../../../app-typescript';

export default class TagInputDoc extends React.Component {
    render() {
        return (
            <React.Fragment>
                <section className="docs-page__container">
                    <h2 className="docs-page__h2">Tag Input</h2>
                    <Markup.ReactMarkupCodePreview>{`
                    
                `}
                    </Markup.ReactMarkupCodePreview>
                    <p className='docs-page__paragraph'>TESTING</p>
                    <Markup.ReactMarkup>
                        <Markup.ReactMarkupPreview>
                        <TagInput />
                        </Markup.ReactMarkupPreview>
                        <Markup.ReactMarkupCode>{`

                    `}
                        </Markup.ReactMarkupCode>
                    </Markup.ReactMarkup>
                    <p className='docs-page__paragraph'>TESTING</p>
                    <Markup.ReactMarkup>
                        <Markup.ReactMarkupPreview>
                        <TagInput items={['one', 'two', 'three']}/>
                        </Markup.ReactMarkupPreview>
                        <Markup.ReactMarkupCode>{`

                    `}
                        </Markup.ReactMarkupCode>
                    </Markup.ReactMarkup>
                    <p className='docs-page__paragraph'>TESTING</p>
                    <Markup.ReactMarkup>
                        <Markup.ReactMarkupPreview>

                        </Markup.ReactMarkupPreview>
                        <Markup.ReactMarkupCode>{`

                    `}
                        </Markup.ReactMarkupCode>
                    </Markup.ReactMarkup>
                </section>
            </React.Fragment>
        )
    }
}
