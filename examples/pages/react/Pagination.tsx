import * as React from 'react';
import * as Markup from '../../js/react';
import { PropsList, Prop } from '../../../app-typescript';


export default class PaginationDoc extends React.Component {
    render() {
        return (
            <section className='docs-page__container'>
                <h2 className='docs-page__h2'>Pagination</h2>
                <p></p>
                <Markup.ReactMarkupCodePreview>{`
                    <Pagination count={10} />
                `}
                </Markup.ReactMarkupCodePreview>

                <Markup.ReactMarkup>
                    <Markup.ReactMarkupPreview>
                        <p className="docs-page__paragraph docs-page__h3--small-top-m">Comming soon!</p>
                    </Markup.ReactMarkupPreview>
                    <Markup.ReactMarkupCode>{`
                        // Comming soon!       
                    `}
                    </Markup.ReactMarkupCode>
                </Markup.ReactMarkup>

                <h3 className="docs-page__h3">Props</h3>
                <PropsList>
                    <Prop name='count' isRequered={false} type='number' default='/' description='/' />
                </PropsList>
            </section>
        );
    }
}
