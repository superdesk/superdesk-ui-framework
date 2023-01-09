import * as React from 'react';

import * as Markup from '../../js/react';

import {WithPagination} from '../../../app-typescript';
import {range} from 'lodash';

function getItems(): Promise<{items: Array<number>, itemCount: number}> {
    return new Promise((resolve) => {
        setTimeout(() => {
            return resolve({items: range(1, 20), itemCount: 500});
        }, 1000);
    });
};

export class WithPaginationDocs extends React.Component {
    render() {
        return (
            <section className='docs-page__container'>

                <h2 className='docs-page__h2'>With pagination</h2>

                <p className='docs-page__paragraph'></p>
                <Markup.ReactMarkup>
                    <Markup.ReactMarkupPreview>
                        <div className='docs-page__content-row docs-page__content-row--no-margin'>
                            <div className='form__row'>
                                <WithPagination
                                    getItems={(pageNo) => getItems(pageNo)}
                                >
                                    {
                                        (items) => <>{items.map((x, i) => <div key={i}>{x}</div>)}</>
                                    }
                                </WithPagination>
                            </div>
                        </div>

                    </Markup.ReactMarkupPreview>

                    <Markup.ReactMarkupCode>{`
                        <div className='docs-page__content-row docs-page__content-row--no-margin'>
                        <div className='form__row'>
                            <WithPagination
                                getItems={() => getItems()}
                            >
                                {
                                    (items) => <>{items.map((x, i) => <div key={i}>{x}</div>)}</>
                                }
                            </WithPagination>
                        </div>
                        </div>
                    `}</Markup.ReactMarkupCode>
                </Markup.ReactMarkup>
            </section>
        )
    }
}
