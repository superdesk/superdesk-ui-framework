import * as React from 'react';

import * as Markup from '../../js/react';

import {ResizablePanels} from '../../../app-typescript';
import {repeat} from 'lodash';

export class ResizablePanelsDoc extends React.Component {
    render() {
        return (
            <section className='docs-page__container'>

                <h2 className='docs-page__h2'>Resizable panels</h2>

                <p className='docs-page__paragraph'></p>
                <Markup.ReactMarkup>
                    <Markup.ReactMarkupPreview>
                        <div className='docs-page__content-row docs-page__content-row--no-margin'>
                            <div className='form__row'>
                                <ResizablePanels direction="horizontal" secondarySize={{default: 20}}>
                                    <div>
                                        {repeat('Lorem ipsum dolor sit amet ', 50)}
                                    </div>

                                    <div>
                                        {repeat('Lorem ipsum dolor sit amet ', 50)}
                                    </div>
                                </ResizablePanels>
                            </div>
                        </div>

                    </Markup.ReactMarkupPreview>

                    <Markup.ReactMarkupCode>{`
                        <ResizablePanels direction="horizontal" secondarySize={{default: 20}}>
                            <div>
                                {repeat('Lorem ipsum dolor sit amet', 50)}
                            </div>

                            <div>
                                {repeat('Lorem ipsum dolor sit amet', 50)}
                            </div>
                        </ResizablePanels>
                    `}</Markup.ReactMarkupCode>
                </Markup.ReactMarkup>
            </section>
        )
    }
}
