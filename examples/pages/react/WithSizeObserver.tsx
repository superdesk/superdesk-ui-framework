import * as React from 'react';
import * as Markup from '../../js/react';
import {WithSizeObserver} from '../../../app-typescript/components/WithSizeObserver';

export class WithSizeObserverDocs extends React.Component {
    render() {
        return (
            <section className='docs-page__container'>

                <h2 className='docs-page__h2'>WithSizeObserver</h2>

                <p>Higher order component for dynamically retrieving dimensions of any element.</p>

                <p>It uses `ResizeObserver` to listen for updates and re-render children efficiently.</p>

                <p className='docs-page__paragraph'></p>
                <Markup.ReactMarkup>
                    <Markup.ReactMarkupPreview>
                        <div className='docs-page__content-row docs-page__content-row--no-margin'>
                            <div className='form__row'>
                                <div style={{resize: 'both', overflow: 'auto', height: 40, outline: '1px solid red'}}>
                                    <WithSizeObserver>
                                        {({width, height}) => (
                                            <div>width: {width}px ; height: {height}px</div>
                                        )}
                                    </WithSizeObserver>
                                </div>
                            </div>
                        </div>

                    </Markup.ReactMarkupPreview>

                    <Markup.ReactMarkupCode>{`
                        <WithSizeObserver>
                            {({width, height}) => (
                                <div>width: {width}px ; height: {height}px</div>
                            )}
                        </WithSizeObserver>
                    `}</Markup.ReactMarkupCode>
                </Markup.ReactMarkup>
            </section>
        )
    }
}
