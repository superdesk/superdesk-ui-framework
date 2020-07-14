import * as React from 'react';
import * as Markup from '../../js/react';
import { TagInput } from '../../../app-typescript';

export default class TagInputDoc extends React.Component {
    render() {
        return (
            <React.Fragment>
                <section className="docs-page__container">
                    <h2 className="docs-page__h2">Tag Input</h2>
                    <p className="docs-page__paragraph">
                        A tag input is an input box that automatically creates tags – also called tokens – out of typed text every time a certain key is pressed. It's useful for tagging and highlighting information right on the input box.
                    </p>
                    <Markup.ReactMarkupCodePreview>{`
                    
                `}
                    </Markup.ReactMarkupCodePreview>
                    <p className='docs-page__paragraph'>TESTING</p>
                    <Markup.ReactMarkup>
                        <Markup.ReactMarkupPreview>
                        <p className="docs-page__paragraph">// Tag input with button for picking items from list</p>
                        <div className='form__row'>
                            <TagInput label='Cars' items={['Audi','BMW', 'Hyundai','Opel','Audi2','BMW2','Hyundai2','Opel2','Audi3','BMW3','Hyundai3','Opel3','Audi4','BMW4','Hyundai4','Opel4','Audi5','BMW5','Hyundai5','Opel5','Audi6','BMW6','Hyundai6','Opel6']} />
                        </div>

                        <p className="docs-page__paragraph">// Tag input with suggestions + freetype text</p>
                        <div className='form__row'>
                            <TagInput label='Cars' items={['Audi','BMW', 'Hyundai','Opel','Audi2','BMW2','Hyundai2','Opel2','Audi3','BMW3','Hyundai3','Opel3','Audi4','BMW4','Hyundai4','Opel4','Audi5','BMW5','Hyundai5','Opel5','Audi6','BMW6','Hyundai6','Opel6']} />
                        </div>

                        <p className="docs-page__paragraph">// Only freetype text</p>
                        <div className='form__row'>
                            <TagInput label='Cars'/>
                        </div>
                        </Markup.ReactMarkupPreview>
                        <Markup.ReactMarkupCode>{`

                    `}
                        </Markup.ReactMarkupCode>
                    </Markup.ReactMarkup>

                    <p className='docs-page__paragraph'>TESTING</p>
                    <Markup.ReactMarkup>
                        <Markup.ReactMarkupPreview>
                        <p className="docs-page__paragraph">// Tag input with button for picking items from list</p>
                        <div className='form__row'>
                            <TagInput label='Cars' items={['Audi','BMW', 'Hyundai','Opel','Audi2','BMW2','Hyundai2','Opel2','Audi3','BMW3','Hyundai3','Opel3','Audi4','BMW4','Hyundai4','Opel4','Audi5','BMW5','Hyundai5','Opel5','Audi6','BMW6','Hyundai6','Opel6']} />
                        </div>

                        <p className="docs-page__paragraph">// Tag input with suggestions + freetype text</p>
                        <div className='form__row'>
                            <TagInput label='Cars' items={['Audi','BMW', 'Hyundai','Opel','Audi2','BMW2','Hyundai2','Opel2','Audi3','BMW3','Hyundai3','Opel3','Audi4','BMW4','Hyundai4','Opel4','Audi5','BMW5','Hyundai5','Opel5','Audi6','BMW6','Hyundai6','Opel6']} />
                        </div>

                        <p className="docs-page__paragraph">// Only freetype text</p>
                        <div className='form__row'>
                            <TagInput label='Cars'/>
                        </div>
                        </Markup.ReactMarkupPreview>
                        <Markup.ReactMarkupCode>{`

                    `}
                        </Markup.ReactMarkupCode>
                    </Markup.ReactMarkup>

                    <p className='docs-page__paragraph'>TESTING</p>
                    <Markup.ReactMarkup>
                        <Markup.ReactMarkupPreview>
                        <p className="docs-page__paragraph">// Tag input with button for picking items from list</p>
                        <div className='form__row'>
                            <TagInput label='Cars' items={['Audi','BMW', 'Hyundai','Opel','Audi2','BMW2','Hyundai2','Opel2','Audi3','BMW3','Hyundai3','Opel3','Audi4','BMW4','Hyundai4','Opel4','Audi5','BMW5','Hyundai5','Opel5','Audi6','BMW6','Hyundai6','Opel6']} />
                        </div>

                        <p className="docs-page__paragraph">// Tag input with suggestions + freetype text</p>
                        <div className='form__row'>
                            <TagInput label='Cars' items={['Audi','BMW', 'Hyundai','Opel','Audi2','BMW2','Hyundai2','Opel2','Audi3','BMW3','Hyundai3','Opel3','Audi4','BMW4','Hyundai4','Opel4','Audi5','BMW5','Hyundai5','Opel5','Audi6','BMW6','Hyundai6','Opel6']} />
                        </div>

                        <p className="docs-page__paragraph">// Only freetype text</p>
                        <div className='form__row'>
                            <TagInput label='Cars'/>
                        </div>
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
