import * as React from 'react';
import * as Markup from '../../../js/react';

class SpacingUtilitiesDoc extends React.Component {
    render() {
        return (
            <section className="docs-page__container">
                <h2 className="docs-page__h2">Spacing Utilities</h2>
                <p className="docs-page__paragraph">
                    The Superdesk UI Framework provides various spacing utility classes to modify the positioning and look of elements. 
                    All values are set in multiples of the <code>--base-increment</code>  CSS variable, which is equivalent to 0.8rem (or 8px in our context), to ensure consistency. 
                </p>
                <div className='docs-page__container-block--padding'>
                    <h3 className="docs-page__h3">Padding</h3>
                    <div className="utilities-table__container">
                        <table className="table utilities-table">
                            <thead>
                                <tr>
                                    <th>Class</th>
                                    <th>Properties</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className='utilities-table__divider-row'>
                                    <td>all</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>p-0</td>
                                    <td>{'padding: 0 !important;'}</td>
                                </tr>
                                <tr>
                                    <td>p-0-5</td>
                                    <td>{'padding: calc(0.5 * var(--base-increment)) !important;'} <span className="doc-text--highlight">/* 4px */</span></td>
                                </tr>
                                <tr>
                                    <td>p-1</td>
                                    <td>{'padding: calc(1 * var(--base-increment)) !important;'} <span className="doc-text--highlight">/* 8px */</span></td>
                                </tr>
                                <tr>
                                    <td>p-1-5</td>
                                    <td>{'padding: calc(1.5 * var(--base-increment)) !important;'} <span className="doc-text--highlight">/* 12px */</span></td>
                                </tr>
                                <tr>
                                    <td>p-2</td>
                                    <td>{'padding: calc(2 * var(--base-increment)) !important;'} <span className="doc-text--highlight">/* 16px */</span></td>
                                </tr>
                                <tr>
                                    <td>p-3</td>
                                    <td>{'padding: calc(3 * var(--base-increment)) !important;'} <span className="doc-text--highlight">/* 24px */</span></td>
                                </tr>
                                <tr>
                                    <td>p-4</td>
                                    <td>{'padding: calc(4 * var(--base-increment)) !important;'} <span className="doc-text--highlight">/* 32px */</span></td>
                                </tr>
                                <tr>
                                    <td>p-5</td>
                                    <td>{'padding: calc(5 * var(--base-increment)) !important;'} <span className="doc-text--highlight">/* 40px */</span></td>
                                </tr>
                                {/* //-----------Inline--------// */}
                                <tr className='utilities-table__divider-row'>
                                    <td>inline start (left)</td>
                                    <td></td>
                                </tr>

                                <tr>
                                    <td>ps-0</td>
                                    <td>{'padding-inline-start: 0 !important;'}</td>
                                </tr>
                                <tr>
                                    <td>ps-0-5</td>
                                    <td>{'padding-inline-start: calc(0.5 * var(--base-increment)) !important;'} <span className="doc-text--highlight">/* 4px */</span></td>
                                </tr>
                                <tr>
                                    <td>ps-1</td>
                                    <td>{'padding-inline-start: calc(1 * var(--base-increment)) !important;'} <span className="doc-text--highlight">/* 8px */</span></td>
                                </tr>
                                <tr>
                                    <td>ps-1-5</td>
                                    <td>{'padding-inline-start: calc(1.5 * var(--base-increment)) !important;'} <span className="doc-text--highlight">/* 12px */</span></td>
                                </tr>
                                <tr>
                                    <td>ps-2</td>
                                    <td>{'padding-inline-start: calc(2 * var(--base-increment)) !important;'} <span className="doc-text--highlight">/* 16px */</span></td>
                                </tr>
                                <tr>
                                    <td>ps-3</td>
                                    <td>{'padding-inline-start: calc(3 * var(--base-increment)) !important;'} <span className="doc-text--highlight">/* 24px */</span></td>
                                </tr>
                                <tr>
                                    <td>ps-4</td>
                                    <td>{'padding-inline-start: calc(4 * var(--base-increment)) !important;'} <span className="doc-text--highlight">/* 32px */</span></td>
                                </tr>
                                <tr>
                                    <td>ps-5</td>
                                    <td>{'padding-inline-start: calc(5 * var(--base-increment)) !important;'} <span className="doc-text--highlight">/* 40px */</span></td>
                                </tr>

                                <tr className='utilities-table__divider-row'>
                                    <td>inline end (right)</td>
                                    <td></td>
                                </tr>

                                <tr>
                                    <td>pe-0</td>
                                    <td>{'padding-inline-end: 0 !important;'}</td>
                                </tr>
                                <tr>
                                    <td>pe-0-5</td>
                                    <td>{'padding-inline-end: calc(0.5 * var(--base-increment)) !important;'} <span className="doc-text--highlight">/* 4px */</span></td>
                                </tr>
                                <tr>
                                    <td>pe-1</td>
                                    <td>{'padding-inline-end: calc(1 * var(--base-increment)) !important;'} <span className="doc-text--highlight">/* 8px */</span></td>
                                </tr>
                                <tr>
                                    <td>pe-1-5</td>
                                    <td>{'padding-inline-end: calc(1.5 * var(--base-increment)) !important;'} <span className="doc-text--highlight">/* 12px */</span></td>
                                </tr>
                                <tr>
                                    <td>pe-2</td>
                                    <td>{'padding-inline-end: calc(2 * var(--base-increment)) !important;'} <span className="doc-text--highlight">/* 16px */</span></td>
                                </tr>
                                <tr>
                                    <td>pe-3</td>
                                    <td>{'padding-inline-end: calc(3 * var(--base-increment)) !important;'} <span className="doc-text--highlight">/* 24px */</span></td>
                                </tr>
                                <tr>
                                    <td>pe-4</td>
                                    <td>{'padding-inline-end: calc(4 * var(--base-increment)) !important;'} <span className="doc-text--highlight">/* 32px */</span></td>
                                </tr>
                                <tr>
                                    <td>pe-5</td>
                                    <td>{'padding-inline-end: calc(5 * var(--base-increment)) !important;'} <span className="doc-text--highlight">/* 40px */</span></td>
                                </tr>

                                <tr className='utilities-table__divider-row'>
                                    <td>inline (x)</td>
                                    <td></td>
                                </tr>

                                <tr>
                                    <td>px-0</td>
                                    <td>
                                        {'padding-inline-start: 0 !important;'}<br />
                                        {'padding-inline-end: 0 !important;'}
                                    </td>
                                </tr>
                                <tr>
                                    <td>px-0-5</td>
                                    <td>
                                        {'padding-inline-start: calc(0.5 * var(--base-increment)) !important;'} <span className="doc-text--highlight">/* 4px */</span><br />
                                        {'padding-inline-end: calc(0.5 * var(--base-increment)) !important;'} <span className="doc-text--highlight">/* 4px */</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>px-1</td>
                                    <td>
                                        {'padding-inline-start: calc(1 * var(--base-increment)) !important;'} <span className="doc-text--highlight">/* 8px */</span><br />
                                        {'padding-inline-end: calc(1 * var(--base-increment)) !important;'} <span className="doc-text--highlight">/* 8px */</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>px-1-5</td>
                                    <td>
                                        {'padding-inline-start: calc(1.5 * var(--base-increment)) !important;'} <span className="doc-text--highlight">/* 12px */</span><br />
                                        {'padding-inline-end: calc(1.5 * var(--base-increment)) !important;'} <span className="doc-text--highlight">/* 12px */</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>px-2</td>
                                    <td>
                                        {'padding-inline-start: calc(2 * var(--base-increment)) !important;'} <span className="doc-text--highlight">/* 16px */</span><br />
                                        {'padding-inline-end: calc(2 * var(--base-increment)) !important;'} <span className="doc-text--highlight">/* 16px */</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>px-3</td>
                                    <td>
                                        {'padding-inline-start: calc(3 * var(--base-increment)) !important;'} <span className="doc-text--highlight">/* 24px */</span><br />
                                        {'padding-inline-end: calc(3 * var(--base-increment)) !important;'} <span className="doc-text--highlight">/* 24px */</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>px-4</td>
                                    <td>
                                        {'padding-inline-start: calc(4 * var(--base-increment)) !important;'} <span className="doc-text--highlight">/* 32px */</span><br />
                                        {'padding-inline-end: calc(4 * var(--base-increment)) !important;'} <span className="doc-text--highlight">/* 32px */</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>px-5</td>
                                    <td>
                                        {'padding-inline-start: calc(5 * var(--base-increment)) !important;'} <span className="doc-text--highlight">/* 40px */</span><br />
                                        {'padding-inline-end: calc(5 * var(--base-increment)) !important;'} <span className="doc-text--highlight">/* 40px */</span>
                                    </td>
                                </tr>
                                {/* //-----------Block--------// */}
                                <tr className='utilities-table__divider-row'>
                                    <td>block start (top)</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>pt-0</td>
                                    <td>{'padding-block-start: 0 !important;'}</td>
                                </tr>
                                <tr>
                                    <td>pt-0-5</td>
                                    <td>{'padding-block-start: calc(0.5 * var(--base-increment)) !important;'} <span className="doc-text--highlight">/* 4px */</span></td>
                                </tr>
                                <tr>
                                    <td>pt-1</td>
                                    <td>{'padding-block-start: calc(1 * var(--base-increment)) !important;'} <span className="doc-text--highlight">/* 8px */</span></td>
                                </tr>
                                <tr>
                                    <td>pt-1-5</td>
                                    <td>{'padding-block-start: calc(1.5 * var(--base-increment)) !important;'} <span className="doc-text--highlight">/* 12px */</span></td>
                                </tr>
                                <tr>
                                    <td>pt-2</td>
                                    <td>{'padding-block-start: calc(2 * var(--base-increment)) !important;'} <span className="doc-text--highlight">/* 16px */</span></td>
                                </tr>
                                <tr>
                                    <td>pt-3</td>
                                    <td>{'padding-block-start: calc(3 * var(--base-increment)) !important;'} <span className="doc-text--highlight">/* 24px */</span></td>
                                </tr>
                                <tr>
                                    <td>pt-4</td>
                                    <td>{'padding-block-start: calc(4 * var(--base-increment)) !important;'} <span className="doc-text--highlight">/* 32px */</span></td>
                                </tr>
                                <tr>
                                    <td>pt-5</td>
                                    <td>{'padding-block-start: calc(5 * var(--base-increment)) !important;'} <span className="doc-text--highlight">/* 40px */</span></td>
                                </tr>

                                <tr className='utilities-table__divider-row'>
                                    <td>block end (bottom)</td>
                                    <td></td>
                                </tr>

                                <tr>
                                    <td>pb-0</td>
                                    <td>{'padding-inline-end: 0 !important;'}</td>
                                </tr>
                                <tr>
                                    <td>pb-0-5</td>
                                    <td>{'padding-block-end: calc(0.5 * var(--base-increment)) !important;'} <span className="doc-text--highlight">/* 4px */</span></td>
                                </tr>
                                <tr>
                                    <td>pb-1</td>
                                    <td>{'padding-block-end: calc(1 * var(--base-increment)) !important;'} <span className="doc-text--highlight">/* 8px */</span></td>
                                </tr>
                                <tr>
                                    <td>pb-1-5</td>
                                    <td>{'padding-block-end: calc(1.5 * var(--base-increment)) !important;'} <span className="doc-text--highlight">/* 12px */</span></td>
                                </tr>
                                <tr>
                                    <td>pb-2</td>
                                    <td>{'padding-block-end: calc(2 * var(--base-increment)) !important;'} <span className="doc-text--highlight">/* 16px */</span></td>
                                </tr>
                                <tr>
                                    <td>pe-3</td>
                                    <td>{'padding-block-end: calc(3 * var(--base-increment)) !important;'} <span className="doc-text--highlight">/* 24px */</span></td>
                                </tr>
                                <tr>
                                    <td>pb-4</td>
                                    <td>{'padding-block-end: calc(4 * var(--base-increment)) !important;'} <span className="doc-text--highlight">/* 32px */</span></td>
                                </tr>
                                <tr>
                                    <td>pb-5</td>
                                    <td>{'padding-block-end: calc(5 * var(--base-increment)) !important;'} <span className="doc-text--highlight">/* 40px */</span></td>
                                </tr>

                                <tr className='utilities-table__divider-row'>
                                    <td>block (y)</td>
                                    <td></td>
                                </tr>

                                <tr>
                                    <td>py-0</td>
                                    <td>
                                        {'padding-block-start: 0 !important;'}<br />
                                        {'padding-block-end: 0 !important;'}
                                    </td>
                                </tr>
                                <tr>
                                    <td>py-0-5</td>
                                    <td>
                                        {'padding-block-start: calc(0.5 * var(--base-increment)) !important;'} <span className="doc-text--highlight">/* 4px */</span><br />
                                        {'padding-block-end: calc(0.5 * var(--base-increment)) !important;'} <span className="doc-text--highlight">/* 4px */</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>py-1</td>
                                    <td>
                                        {'padding-block-start: calc(1 * var(--base-increment)) !important;'} <span className="doc-text--highlight">/* 8px */</span><br />
                                        {'padding-block-end: calc(1 * var(--base-increment)) !important;'} <span className="doc-text--highlight">/* 8px */</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>py-1-5</td>
                                    <td>
                                        {'padding-block-start: calc(1.5 * var(--base-increment)) !important;'} <span className="doc-text--highlight">/* 12px */</span><br />
                                        {'padding-block-end: calc(1.5 * var(--base-increment)) !important;'} <span className="doc-text--highlight">/* 12px */</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>py-2</td>
                                    <td>
                                        {'padding-block-start: calc(2 * var(--base-increment)) !important;'} <span className="doc-text--highlight">/* 16px */</span><br />
                                        {'padding-block-end: calc(2 * var(--base-increment)) !important;'} <span className="doc-text--highlight">/* 16px */</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>py-3</td>
                                    <td>
                                        {'padding-block-start: calc(3 * var(--base-increment)) !important;'} <span className="doc-text--highlight">/* 24px */</span><br />
                                        {'padding-block-end: calc(3 * var(--base-increment)) !important;'} <span className="doc-text--highlight">/* 24px */</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>py-4</td>
                                    <td>
                                        {'padding-block-start: calc(4 * var(--base-increment)) !important;'} <span className="doc-text--highlight">/* 32px */</span><br />
                                        {'padding-block-end: calc(4 * var(--base-increment)) !important;'} <span className="doc-text--highlight">/* 32px */</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>py-5</td>
                                    <td>
                                        {'padding-block-start: calc(5 * var(--base-increment)) !important;'} <span className="doc-text--highlight">/* 40px */</span><br />
                                        {'padding-block-end: calc(5 * var(--base-increment)) !important;'} <span className="doc-text--highlight">/* 40px */</span>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className='docs-page__container-block--margin'>
                    <h3 className="docs-page__h3">Margin</h3>
                    <div className="utilities-table__container">
                        <table className="table utilities-table">
                            <thead>
                                <tr>
                                    <th>Class</th>
                                    <th>Properties</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className='utilities-table__divider-row'>
                                    <td>all</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>m-0</td>
                                    <td>{'margin: 0 !important;'}</td>
                                </tr>
                                <tr>
                                    <td>m-0-5</td>
                                    <td>{'margin: calc(0.5 * var(--base-increment)) !important;'} <span className="doc-text--highlight">/* 4px */</span></td>
                                </tr>
                                <tr>
                                    <td>m-1</td>
                                    <td>{'margin: calc(1 * var(--base-increment)) !important;'} <span className="doc-text--highlight">/* 8px */</span></td>
                                </tr>
                                <tr>
                                    <td>m-1-5</td>
                                    <td>{'margin: calc(1.5 * var(--base-increment)) !important;'} <span className="doc-text--highlight">/* 12px */</span></td>
                                </tr>
                                <tr>
                                    <td>m-2</td>
                                    <td>{'margin: calc(2 * var(--base-increment)) !important;'} <span className="doc-text--highlight">/* 16px */</span></td>
                                </tr>
                                <tr>
                                    <td>m-3</td>
                                    <td>{'margin: calc(3 * var(--base-increment)) !important;'} <span className="doc-text--highlight">/* 24px */</span></td>
                                </tr>
                                <tr>
                                    <td>m-4</td>
                                    <td>{'margin: calc(4 * var(--base-increment)) !important;'} <span className="doc-text--highlight">/* 32px */</span></td>
                                </tr>
                                <tr>
                                    <td>m-5</td>
                                    <td>{'margin: calc(5 * var(--base-increment)) !important;'} <span className="doc-text--highlight">/* 40px */</span></td>
                                </tr>
                                {/* //-----------Inline--------// */}
                                <tr className='utilities-table__divider-row'>
                                    <td>inline start (left)</td>
                                    <td></td>
                                </tr>

                                <tr>
                                    <td>ms-0</td>
                                    <td>{'margin-inline-start: 0 !important;'}</td>
                                </tr>
                                <tr>
                                    <td>ms-0-5</td>
                                    <td>{'margin-inline-start: calc(0.5 * var(--base-increment)) !important;'} <span className="doc-text--highlight">/* 4px */</span></td>
                                </tr>
                                <tr>
                                    <td>ms-1</td>
                                    <td>{'margin-inline-start: calc(1 * var(--base-increment)) !important;'} <span className="doc-text--highlight">/* 8px */</span></td>
                                </tr>
                                <tr>
                                    <td>ms-1-5</td>
                                    <td>{'margin-inline-start: calc(1.5 * var(--base-increment)) !important;'} <span className="doc-text--highlight">/* 12px */</span></td>
                                </tr>
                                <tr>
                                    <td>ms-2</td>
                                    <td>{'margin-inline-start: calc(2 * var(--base-increment)) !important;'} <span className="doc-text--highlight">/* 16px */</span></td>
                                </tr>
                                <tr>
                                    <td>ms-3</td>
                                    <td>{'margin-inline-start: calc(3 * var(--base-increment)) !important;'} <span className="doc-text--highlight">/* 24px */</span></td>
                                </tr>
                                <tr>
                                    <td>ms-4</td>
                                    <td>{'margin-inline-start: calc(4 * var(--base-increment)) !important;'} <span className="doc-text--highlight">/* 32px */</span></td>
                                </tr>
                                <tr>
                                    <td>ms-5</td>
                                    <td>{'margin-inline-start: calc(5 * var(--base-increment)) !important;'} <span className="doc-text--highlight">/* 40px */</span></td>
                                </tr>

                                <tr className='utilities-table__divider-row'>
                                    <td>inline end (right)</td>
                                    <td></td>
                                </tr>

                                <tr>
                                    <td>me-0</td>
                                    <td>{'margin-inline-end: 0 !important;'}</td>
                                </tr>
                                <tr>
                                    <td>me-0-5</td>
                                    <td>{'margin-inline-end: calc(0.5 * var(--base-increment)) !important;'} <span className="doc-text--highlight">/* 4px */</span></td>
                                </tr>
                                <tr>
                                    <td>me-1</td>
                                    <td>{'margin-inline-end: calc(1 * var(--base-increment)) !important;'} <span className="doc-text--highlight">/* 8px */</span></td>
                                </tr>
                                <tr>
                                    <td>me-1-5</td>
                                    <td>{'margin-inline-end: calc(1.5 * var(--base-increment)) !important;'} <span className="doc-text--highlight">/* 12px */</span></td>
                                </tr>
                                <tr>
                                    <td>me-2</td>
                                    <td>{'margin-inline-end: calc(2 * var(--base-increment)) !important;'} <span className="doc-text--highlight">/* 16px */</span></td>
                                </tr>
                                <tr>
                                    <td>me-3</td>
                                    <td>{'margin-inline-end: calc(3 * var(--base-increment)) !important;'} <span className="doc-text--highlight">/* 24px */</span></td>
                                </tr>
                                <tr>
                                    <td>me-4</td>
                                    <td>{'margin-inline-end: calc(4 * var(--base-increment)) !important;'} <span className="doc-text--highlight">/* 32px */</span></td>
                                </tr>
                                <tr>
                                    <td>me-5</td>
                                    <td>{'margin-inline-end: calc(5 * var(--base-increment)) !important;'} <span className="doc-text--highlight">/* 40px */</span></td>
                                </tr>

                                <tr className='utilities-table__divider-row'>
                                    <td>inline (x)</td>
                                    <td></td>
                                </tr>

                                <tr>
                                    <td>mx-0</td>
                                    <td>
                                        {'margin-inline-start: 0 !important;'}<br />
                                        {'margin-inline-end: 0 !important;'}
                                    </td>
                                </tr>
                                <tr>
                                    <td>mx-0-5</td>
                                    <td>
                                        {'margin-inline-start: calc(0.5 * var(--base-increment)) !important;'} <span className="doc-text--highlight">/* 4px */</span><br />
                                        {'margin-inline-end: calc(0.5 * var(--base-increment)) !important;'} <span className="doc-text--highlight">/* 4px */</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>mx-1</td>
                                    <td>
                                        {'margin-inline-start: calc(1 * var(--base-increment)) !important;'} <span className="doc-text--highlight">/* 8px */</span><br />
                                        {'margin-inline-end: calc(1 * var(--base-increment)) !important;'} <span className="doc-text--highlight">/* 8px */</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>mx-1-5</td>
                                    <td>
                                        {'margin-inline-start: calc(1.5 * var(--base-increment)) !important;'} <span className="doc-text--highlight">/* 12px */</span><br />
                                        {'margin-inline-end: calc(1.5 * var(--base-increment)) !important;'} <span className="doc-text--highlight">/* 12px */</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>mx-2</td>
                                    <td>
                                        {'margin-inline-start: calc(2 * var(--base-increment)) !important;'} <span className="doc-text--highlight">/* 16px */</span><br />
                                        {'margin-inline-end: calc(2 * var(--base-increment)) !important;'} <span className="doc-text--highlight">/* 16px */</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>mx-3</td>
                                    <td>
                                        {'margin-inline-start: calc(3 * var(--base-increment)) !important;'} <span className="doc-text--highlight">/* 24px */</span><br />
                                        {'margin-inline-end: calc(3 * var(--base-increment)) !important;'} <span className="doc-text--highlight">/* 24px */</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>mx-4</td>
                                    <td>
                                        {'margin-inline-start: calc(4 * var(--base-increment)) !important;'} <span className="doc-text--highlight">/* 32px */</span><br />
                                        {'margin-inline-end: calc(4 * var(--base-increment)) !important;'} <span className="doc-text--highlight">/* 32px */</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>mx-5</td>
                                    <td>
                                        {'margin-inline-start: calc(5 * var(--base-increment)) !important;'} <span className="doc-text--highlight">/* 40px */</span><br />
                                        {'margin-inline-end: calc(5 * var(--base-increment)) !important;'} <span className="doc-text--highlight">/* 40px */</span>
                                    </td>
                                </tr>
                                {/* //-----------Block--------// */}
                                <tr className='utilities-table__divider-row'>
                                    <td>block start (top)</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>mt-0</td>
                                    <td>{'margin-block-start: 0 !important;'}</td>
                                </tr>
                                <tr>
                                    <td>mt-0-5</td>
                                    <td>{'margin-block-start: calc(0.5 * var(--base-increment)) !important;'} <span className="doc-text--highlight">/* 4px */</span></td>
                                </tr>
                                <tr>
                                    <td>mt-1</td>
                                    <td>{'margin-block-start: calc(1 * var(--base-increment)) !important;'} <span className="doc-text--highlight">/* 8px */</span></td>
                                </tr>
                                <tr>
                                    <td>mt-1-5</td>
                                    <td>{'margin-block-start: calc(1.5 * var(--base-increment)) !important;'} <span className="doc-text--highlight">/* 12px */</span></td>
                                </tr>
                                <tr>
                                    <td>mt-2</td>
                                    <td>{'margin-block-start: calc(2 * var(--base-increment)) !important;'} <span className="doc-text--highlight">/* 16px */</span></td>
                                </tr>
                                <tr>
                                    <td>mt-3</td>
                                    <td>{'margin-block-start: calc(3 * var(--base-increment)) !important;'} <span className="doc-text--highlight">/* 24px */</span></td>
                                </tr>
                                <tr>
                                    <td>mt-4</td>
                                    <td>{'margin-block-start: calc(4 * var(--base-increment)) !important;'} <span className="doc-text--highlight">/* 32px */</span></td>
                                </tr>
                                <tr>
                                    <td>mt-5</td>
                                    <td>{'margin-block-start: calc(5 * var(--base-increment)) !important;'} <span className="doc-text--highlight">/* 40px */</span></td>
                                </tr>

                                <tr className='utilities-table__divider-row'>
                                    <td>block end (bottom)</td>
                                    <td></td>
                                </tr>

                                <tr>
                                    <td>mb-0</td>
                                    <td>{'margin-inline-end: 0 !important;'}</td>
                                </tr>
                                <tr>
                                    <td>mb-0-5</td>
                                    <td>{'margin-block-end: calc(0.5 * var(--base-increment)) !important;'} <span className="doc-text--highlight">/* 4px */</span></td>
                                </tr>
                                <tr>
                                    <td>mb-1</td>
                                    <td>{'margin-block-end: calc(1 * var(--base-increment)) !important;'} <span className="doc-text--highlight">/* 8px */</span></td>
                                </tr>
                                <tr>
                                    <td>mb-1-5</td>
                                    <td>{'margin-block-end: calc(1.5 * var(--base-increment)) !important;'} <span className="doc-text--highlight">/* 12px */</span></td>
                                </tr>
                                <tr>
                                    <td>mb-2</td>
                                    <td>{'margin-block-end: calc(2 * var(--base-increment)) !important;'} <span className="doc-text--highlight">/* 16px */</span></td>
                                </tr>
                                <tr>
                                    <td>me-3</td>
                                    <td>{'margin-block-end: calc(3 * var(--base-increment)) !important;'} <span className="doc-text--highlight">/* 24px */</span></td>
                                </tr>
                                <tr>
                                    <td>mb-4</td>
                                    <td>{'margin-block-end: calc(4 * var(--base-increment)) !important;'} <span className="doc-text--highlight">/* 32px */</span></td>
                                </tr>
                                <tr>
                                    <td>mb-5</td>
                                    <td>{'margin-block-end: calc(5 * var(--base-increment)) !important;'} <span className="doc-text--highlight">/* 40px */</span></td>
                                </tr>

                                <tr className='utilities-table__divider-row'>
                                    <td>block (y)</td>
                                    <td></td>
                                </tr>

                                <tr>
                                    <td>my-0</td>
                                    <td>
                                        {'margin-block-start: 0 !important;'}<br />
                                        {'margin-block-end: 0 !important;'}
                                    </td>
                                </tr>
                                <tr>
                                    <td>my-0-5</td>
                                    <td>
                                        {'margin-block-start: calc(0.5 * var(--base-increment)) !important;'} <span className="doc-text--highlight">/* 4px */</span><br />
                                        {'margin-block-end: calc(0.5 * var(--base-increment)) !important;'} <span className="doc-text--highlight">/* 4px */</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>my-1</td>
                                    <td>
                                        {'margin-block-start: calc(1 * var(--base-increment)) !important;'} <span className="doc-text--highlight">/* 8px */</span><br />
                                        {'margin-block-end: calc(1 * var(--base-increment)) !important;'} <span className="doc-text--highlight">/* 8px */</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>my-1-5</td>
                                    <td>
                                        {'margin-block-start: calc(1.5 * var(--base-increment)) !important;'} <span className="doc-text--highlight">/* 12px */</span><br />
                                        {'margin-block-end: calc(1.5 * var(--base-increment)) !important;'} <span className="doc-text--highlight">/* 12px */</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>my-2</td>
                                    <td>
                                        {'margin-block-start: calc(2 * var(--base-increment)) !important;'} <span className="doc-text--highlight">/* 16px */</span><br />
                                        {'margin-block-end: calc(2 * var(--base-increment)) !important;'} <span className="doc-text--highlight">/* 16px */</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>my-3</td>
                                    <td>
                                        {'margin-block-start: calc(3 * var(--base-increment)) !important;'} <span className="doc-text--highlight">/* 24px */</span><br />
                                        {'margin-block-end: calc(3 * var(--base-increment)) !important;'} <span className="doc-text--highlight">/* 24px */</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>my-4</td>
                                    <td>
                                        {'margin-block-start: calc(4 * var(--base-increment)) !important;'} <span className="doc-text--highlight">/* 32px */</span><br />
                                        {'margin-block-end: calc(4 * var(--base-increment)) !important;'} <span className="doc-text--highlight">/* 32px */</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>my-5</td>
                                    <td>
                                        {'margin-block-start: calc(5 * var(--base-increment)) !important;'} <span className="doc-text--highlight">/* 40px */</span><br />
                                        {'margin-block-end: calc(5 * var(--base-increment)) !important;'} <span className="doc-text--highlight">/* 40px */</span>
                                    </td>
                                </tr>

                                <tr className='utilities-table__divider-row'>
                                    <td>auto</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>m-auto</td>
                                    <td>{'margin: auto !important;'}</td>
                                </tr>
                                <tr>
                                    <td>ms-auto</td>
                                    <td>
                                        {'margin-inline-start: auto !important;'}
                                    </td>
                                </tr>
                                <tr>
                                    <td>me-auto</td>
                                    <td>
                                        {'margin-inline-end: auto !important;'}
                                    </td>
                                </tr>
                                <tr>
                                    <td>mt-auto</td>
                                    <td>
                                        {'margin-block-start: auto !important;'}
                                    </td>
                                </tr>
                                <tr>
                                    <td>mb-auto</td>
                                    <td>
                                        {'margin-block-end: auto !important;'}
                                    </td>
                                </tr>
                                <tr>
                                    <td>mx-auto</td>
                                    <td>
                                        {'margin-inline-start: auto !important;'}<br />
                                        {'margin-inline-end: auto !important;'}
                                    </td>
                                </tr>
                                <tr>
                                    <td>my-auto</td>
                                    <td>
                                        {'margin-block-start: auto !important;'}<br />
                                        {'margin-block-end: auto !important;'}
                                    </td>
                                </tr>

                                

                            </tbody>
                        </table>
                    </div>
                </div>

                <div className='docs-page__container-block--gap'>
                    <h3 className="docs-page__h3">Gap</h3>
                    <div className="utilities-table__container">
                        <table className="table utilities-table">
                            <thead>
                                <tr>
                                    <th>Class</th>
                                    <th>Properties</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* <tr className='utilities-table__divider-row'>
                                    <td>all</td>
                                    <td></td>
                                </tr> */}
                                <tr>
                                    <td>gap-0</td>
                                    <td>{'gap: var(--gap-0);'} <span className="doc-text--highlight">/* 0px */</span></td>
                                </tr>
                                <tr>
                                    <td>gap-0-5</td>
                                    <td>{'gap: var(--gap-0-5);'} <span className="doc-text--highlight">/* 4px */</span></td>
                                </tr>
                                <tr>
                                    <td>gap-1</td>
                                    <td>{'gap: var(--gap-1);'} <span className="doc-text--highlight">/* 8px */</span></td>
                                </tr>
                                <tr>
                                    <td>gap-1-5</td>
                                    <td>{'gap: var(--gap-1-5);'} <span className="doc-text--highlight">/* 12px */</span></td>
                                </tr>
                                <tr>
                                    <td>gap-2</td>
                                    <td>{'gap: var(--gap-2);'} <span className="doc-text--highlight">/* 16px */</span></td>
                                </tr>
                                <tr>
                                    <td>gap-3</td>
                                    <td>{'gap: var(--gap-3);'} <span className="doc-text--highlight">/* 24px */</span></td>
                                </tr>
                                <tr>
                                    <td>gap-4</td>
                                    <td>{'gap: var(--gap-4);'} <span className="doc-text--highlight">/* 32px */</span></td>
                                </tr>
                                <tr>
                                    <td>gap-5</td>
                                    <td>{'gap: var(--gap-5);'} <span className="doc-text--highlight">/* 40px */</span></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

            </section>
        )
    }
}

export { SpacingUtilitiesDoc };