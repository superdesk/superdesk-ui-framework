import * as React from 'react';
import * as Markup from '../../js/react';
import {Loader} from '../../../app-typescript';

export default class LoaderDoc extends React.Component {
    render() {
        return (
            <section className='docs-page__container'>
                <h2 className='docs-page__h2'>Loader</h2>

                <Markup.ReactMarkup>
                    <Markup.ReactMarkupPreview>
                        <Loader />
                    </Markup.ReactMarkupPreview>

                    <Markup.ReactMarkupCode>{`
                        <Loader />
                    `}
                    </Markup.ReactMarkupCode>
                </Markup.ReactMarkup>
            </section>
        )
    }
}
