import * as React from 'react';

import * as Markup from '../../js/react';

import {WithPagination} from '../../../app-typescript';
import {range} from 'lodash';

function getItems(pageNo: number): Promise<{items: Array<number>, itemCount: number}> {
    return new Promise((resolve) => {
        setTimeout(() => {
            return resolve({items: range(1, 500).slice((pageNo - 1) * 20, (pageNo - 1) * 20 + 20), itemCount: 500});
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
                        <WithPagination
                            getItems={(pageNo) => getItems(pageNo)}
                        >
                            {
                                (items) =>
                                    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                                        {items.map((x, i) => <div key={i}>{x}</div>)}
                                    </div>
                            }
                        </WithPagination>
                    </Markup.ReactMarkupPreview>
                    <Markup.ReactMarkupCode>{`
                        <WithPagination
                            getItems={(pageNo) => getItems(pageNo)}
                        >
                            {
                                (items) =>
                                    <div
                                        style={{
                                            display: 'flex',
                                            flexDirection: 'column',
                                            alignItems: 'center'
                                        }}
                                    >
                                        {items.map((x, i) => <div key={i}>{x}</div>)}
                                    </div>
                            }
                        </WithPagination>
                    `}</Markup.ReactMarkupCode>
                </Markup.ReactMarkup>
            </section>
        )
    }
}
