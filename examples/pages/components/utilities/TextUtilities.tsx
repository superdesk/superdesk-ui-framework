import * as React from 'react';
import * as Markup from '../../../js/react';

class TextUtilitiesDoc extends React.Component {
    render() {
        return (
            <section className="docs-page__container">
                <h2 className="docs-page__h2">Text Utilities</h2>

                <div className='docs-page__container-block--font-size'>
                    <h3 className="docs-page__h3">Font Size</h3>
                    <p className="docs-page__paragraph">
                        The root (HTML) font size is conveniently set to 10px, which makes 1rem equal to 10px by default.
                        This approach simplifies the calculation of font sizes rem units. Font size helpers classes are
                        calculated based on the <code>--text-size--base</code> variable, with a value of 1rem.
                    </p>
                    <div className="utilities-table__container">
                        <table className="table utilities-table">
                            <thead>
                                <tr>
                                    <th>Class</th>
                                    <th>Properties</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>text-2xs</td>
                                    <td>{'font-size: var(--text-size-x-small);'} <span className="doc-text--highlight">/* 10px */</span></td>
                                </tr>
                                <tr>
                                    <td>text-xs</td>
                                    <td>{'font-size: var(--text-size-x-small);'} <span className="doc-text--highlight">/* 12px */</span></td>
                                </tr>
                                <tr>
                                    <td>text-sm</td>
                                    <td>{'font-size: var(--text-size-small);'} <span className="doc-text--highlight">/* 14px */</span></td>
                                </tr>
                                <tr>
                                    <td>text-md</td>
                                    <td>{'font-size: var(--text-size-medium);'} <span className="doc-text--highlight">/* 16px */</span></td>
                                </tr>
                                <tr>
                                    <td>text-lg</td>
                                    <td>{'font-size: var(--text-size-large;'} <span className="doc-text--highlight">/* 20px */</span></td>
                                </tr>
                                <tr>
                                    <td>text-xl</td>
                                    <td>{'font-size: var(--text-size-x-large);'} <span className="doc-text--highlight">/* 24px */</span></td>
                                </tr>
                                <tr>
                                    <td>text-2xl</td>
                                    <td>{'font-size: var(--text-size-xx-large);'} <span className="doc-text--highlight">/* 32px */</span></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className='docs-page__container-block--font-weight'>
                    <h3 className="docs-page__h3">Font Weight</h3>
                    <div className="utilities-table__container">
                        <table className="table utilities-table">
                            <thead>
                                <tr>
                                    <th>Class</th>
                                    <th>Properties</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>font-light</td>
                                    <td>{'font-weight: 300;'}</td>
                                </tr>
                                <tr>
                                    <td>font-normal</td>
                                    <td>{'font-weight: 400;'}</td>
                                </tr>
                                <tr>
                                    <td>font-medium</td>
                                    <td>{'font-weight: 500;'}</td>
                                </tr>
                                <tr>
                                    <td>font-semibold</td>
                                    <td>{'font-weight: 600;'}</td>
                                </tr>
                                <tr>
                                    <td>font-bold</td>
                                    <td>{'font-weight: 700;'}</td>
                                </tr>
                                <tr>
                                    <td>font-black</td>
                                    <td>{'font-weight: 900;'}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className='docs-page__container-block--font-style'>
                    <h3 className="docs-page__h3">Font Style</h3>
                    <div className="utilities-table__container">
                        <table className="table utilities-table">
                            <thead>
                                <tr>
                                    <th>Class</th>
                                    <th>Properties</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>italic</td>
                                    <td>{'font-style: italic;'}</td>
                                </tr>
                                <tr>
                                    <td>non-italic</td>
                                    <td>{'font-style: normal;'}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className='docs-page__container-block--line-clamp'>
                    <h3 className="docs-page__h3">Line Clamp</h3>
                    <p className="docs-page__paragraph">
                        Utility classes for clamping text to a specific number of lines.
                    </p>
                    <div className="utilities-table__container">
                        <table className="table utilities-table">
                            <thead>
                                <tr>
                                    <th>Class</th>
                                    <th>Properties</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>line-clamp-1</td>
                                    <td>
                                        {'overflow: hidden;'}<br />
                                        {'display: -webkit-box;'}<br />
                                        {'-webkit-box-orient: vertical;'}<br />
                                        {'-webkit-line-clamp: 1;'}
                                    </td>
                                </tr>
                                <tr>
                                    <td>line-clamp-2</td>
                                    <td>
                                        {'overflow: hidden;'}<br />
                                        {'display: -webkit-box;'}<br />
                                        {'-webkit-box-orient: vertical;'}<br />
                                        {'-webkit-line-clamp: 2;'}
                                    </td>
                                </tr>
                                <tr>
                                    <td>line-clamp-3</td>
                                    <td>
                                        {'overflow: hidden;'}<br />
                                        {'display: -webkit-box;'}<br />
                                        {'-webkit-box-orient: vertical;'}<br />
                                        {'-webkit-line-clamp: 3;'}
                                    </td>
                                </tr>
                                <tr>
                                    <td>line-clamp-4</td>
                                    <td>
                                        {'overflow: hidden;'}<br />
                                        {'display: -webkit-box;'}<br />
                                        {'-webkit-box-orient: vertical;'}<br />
                                        {'-webkit-line-clamp: 4;'}
                                    </td>
                                </tr>
                                <tr>
                                    <td>line-clamp-5</td>
                                    <td>
                                        {'overflow: hidden;'}<br />
                                        {'display: -webkit-box;'}<br />
                                        {'-webkit-box-orient: vertical;'}<br />
                                        {'-webkit-line-clamp: 5;'}
                                    </td>
                                </tr>
                                <tr>
                                    <td>line-clamp-6</td>
                                    <td>
                                        {'overflow: hidden;'}<br />
                                        {'display: -webkit-box;'}<br />
                                        {'-webkit-box-orient: vertical;'}<br />
                                        {'-webkit-line-clamp: 6;'}
                                    </td>
                                </tr>
                                <tr>
                                    <td>line-clamp-none</td>
                                    <td>
                                        {'overflow: hidden;'}<br />
                                        {'display: -webkit-box;'}<br />
                                        {'-webkit-box-orient: vertical;'}<br />
                                        {'-webkit-line-clamp: none;'}
                                    </td>
                                </tr>

                            </tbody>
                        </table>
                    </div>
                </div>

                <div className='docs-page__container-block--font-style'>
                    <h3 className="docs-page__h3">Text Align</h3>
                    <div className="utilities-table__container">
                        <table className="table utilities-table">
                            <thead>
                                <tr>
                                    <th>Class</th>
                                    <th>Properties</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>text-start</td>
                                    <td>{'text-align: start;'}</td>
                                </tr>
                                <tr>
                                    <td>text-center</td>
                                    <td>{'text-align: center;'}</td>
                                </tr>
                                <tr>
                                    <td>text-end</td>
                                    <td>{'text-align: end;'}</td>
                                </tr>
                                <tr>
                                    <td>text-justify</td>
                                    <td>{'text-align: justify;'}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className='docs-page__container-block--text-color'>
                    <h3 className="docs-page__h3">Text Color</h3>
                    <div className="utilities-table__container">
                        <table className="table utilities-table">
                            <thead>
                                <tr>
                                    <th>Class</th>
                                    <th>Properties</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>text-color-normal</td>
                                    <td>{'color: var(--color-text) !important'}</td>
                                    <td><span className='text-color-normal'>Aa</span></td>
                                </tr>
                                <tr>
                                    <td>text-color-muted</td>
                                    <td>{'color: var(--color-text-light) !important;'}</td>
                                    <td><span className='text-color-muted'>Aa</span></td>
                                </tr>
                                <tr>
                                    <td>text-color-subdued</td>
                                    <td>{'color: var(--color-text-lighter) !important;'}</td>
                                    <td><span className='text-color-subdued'>Aa</span></td>
                                </tr>
                                <tr>
                                    <td>text-color-inverse</td>
                                    <td>{'color: var(--color-text--inverse) !important;'}</td>
                                    <td style={{backgroundColor: 'var(--color-text-lighter)',}}><span className='text-color-inverse'>Aa</span></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className='docs-page__container-block--text-transform'>
                    <h3 className="docs-page__h3">Text Transform</h3>
                    <div className="utilities-table__container">
                        <table className="table utilities-table">
                            <thead>
                                <tr>
                                    <th>Class</th>
                                    <th>Properties</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>text-uppercase</td>
                                    <td>{'text-transform: uppercase;'}</td>
                                </tr>
                                <tr>
                                    <td>text-lowercase</td>
                                    <td>{'text-transform: lowercase;'}</td>
                                </tr>
                                <tr>
                                    <td>text-capitalize</td>
                                    <td>{'text-transform: capitalize;'}</td>
                                </tr>
                                <tr>
                                    <td>text-normal-case</td>
                                    <td>{'text-transform: none !important;'}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className='docs-page__container-block--text-decoration'>
                    <h3 className="docs-page__h3">Text Decoration</h3>
                    <div className="utilities-table__container">
                        <table className="table utilities-table">
                            <thead>
                                <tr>
                                    <th>Class</th>
                                    <th>Properties</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>text-underline</td>
                                    <td>{'text-decoration: underline;'}</td>
                                </tr>
                                <tr>
                                    <td>text-line-through</td>
                                    <td>{'text-decoration: line-through;'}</td>
                                </tr>
                                <tr>
                                    <td>text-no-underline</td>
                                    <td>{'text-decoration: none;'}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className='docs-page__container-block--text-overflow'>
                    <h3 className="docs-page__h3">Text Overflow</h3>
                    <div className="utilities-table__container">
                        <table className="table utilities-table">
                            <thead>
                                <tr>
                                    <th>Class</th>
                                    <th>Properties</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>text-ellipsis</td>
                                    <td>
                                        {'overflow: hidden;'}<br />
                                        {'text-overflow: ellipsis;'}<br />
                                        {'white-space: nowrap;'}
                                    </td>
                                </tr>
                                <tr>
                                    <td>text-clip</td>
                                    <td>
                                        {'text-overflow: clip;'}
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className='docs-page__container-block--text-wrap'>
                    <h3 className="docs-page__h3">Text Wrap</h3>
                    <div className="utilities-table__container">
                        <table className="table utilities-table">
                            <thead>
                                <tr>
                                    <th>Class</th>
                                    <th>Properties</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>text-wrap</td>
                                    <td>{'text-wrap: wrap;'}</td>
                                </tr>
                                <tr>
                                    <td>text-nowrap</td>
                                    <td>{'text-wrap: nowrap;'}</td>
                                </tr>
                                <tr>
                                    <td>text-balance</td>
                                    <td>{'text-wrap: balance;'}</td>
                                </tr>
                                <tr>
                                    <td>text-pretty</td>
                                    <td>{'text-wrap: pretty;'}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className='docs-page__container-block--text-wrap'>
                    <h3 className="docs-page__h3">Word Break</h3>
                    <div className="utilities-table__container">
                        <table className="table utilities-table">
                            <thead>
                                <tr>
                                    <th>Class</th>
                                    <th>Properties</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>break-normal</td>
                                    <td>
                                        {'overflow-wrap: normal;'}<br />
                                        {'word-break: normal;'}
                                    </td>
                                </tr>
                                <tr>
                                    <td>break-words</td>
                                    <td>{'overflow-wrap: break-word;'}</td>
                                </tr>
                                <tr>
                                    <td>break-all</td>
                                    <td>{'word-break: break-all;'}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
        )
    }
}

export { TextUtilitiesDoc };
