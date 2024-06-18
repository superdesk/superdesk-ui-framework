import * as React from 'react';
import * as Markup from '../../../js/react';

class BorderUtilitiesDoc extends React.Component {
    render() {
        return (
            <section className="docs-page__container">
                <h2 className="docs-page__h2">Border</h2>
                <p className="docs-page__paragraph">
                    Utility classes for controlling the borders of an element.. 
                </p>
                <div className='docs-page__container-block--border'>
                    <h3 className="docs-page__h3">Basic Border with neutral color</h3>
                    <p className='docs-page__paragraph'>
                        Utilities classes for adding a neutral 1px solid border to an element.
                    </p>
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
                                    <td>sd-border--x-light</td>
                                    <td>{'border: 1px solid var(--sd-colour-line--x-light);'}</td>
                                    <td><div className='border-example-box sd-border--x-light'></div></td>
                                </tr>
                                <tr>
                                    <td>sd-border--light</td>
                                    <td>{'border: 1px solid var(--sd-colour-line--light);'}</td>
                                    <td><div className='border-example-box sd-border--light'></div></td>
                                </tr>
                                <tr>
                                    <td>sd-border--medium</td>
                                    <td>{'border: 1px solid var(--sd-colour-line--medium);'}</td>
                                    <td><div className='border-example-box sd-border--medium'></div></td>
                                </tr>
                                <tr>
                                    <td>sd-border--strong</td>
                                    <td>{'border: 1px solid var(--sd-colour-line--strong);'}</td>
                                    <td><div className='border-example-box sd-border--strong'></div></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className='docs-page__container-block--border-width'>
                    <h3 className="docs-page__h3">Border Width</h3>
                    <p className='docs-page__paragraph'>
                        Utilities classes for overriding the border width of an element. Options are limited to common use cases.
                    </p>
                    <div className="utilities-table__container utilities-table__container--no-height">
                        <table className="table utilities-table">
                            <thead>
                                <tr>
                                    <th>Class</th>
                                    <th>Properties</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>border-0</td>
                                    <td>{'border-width: 0px;'}</td>
                                </tr>
                                <tr>
                                    <td>border-1</td>
                                    <td>{'border-width: 1px;'}</td>
                                </tr>
                                <tr>
                                    <td>border-2</td>
                                    <td>{'border-width: 2px;'}</td>
                                </tr>
                                <tr>
                                    <td>border-3</td>
                                    <td>{'border-width: 2px;'}</td>
                                </tr>
                                <tr>
                                    <td>border-4</td>
                                    <td>{'border-width: 4px;'}</td>
                                </tr>
                                <tr>
                                    <td>border-x-0</td>
                                    <td>
                                        {'border-inline-start-width: 0px;'}<br />
                                        {'border-inline-end-width: 0px;'}

                                    </td>
                                </tr>
                                <tr>
                                    <td>border-y-0</td>
                                    <td>
                                        {'border-block-start-width: 0px;'}<br />
                                        {'border-block-end-width: 0px;'}
                                    </td>
                                </tr>
                                <tr>
                                    <td>border-s-0</td>
                                    <td>
                                        {'border-inline-start-width: 0px;'}
                                    </td>
                                </tr>
                                <tr>
                                    <td>border-e-0</td>
                                    <td>
                                        {'border-inline-end-width: 0px;'}
                                    </td>
                                </tr>
                                <tr>
                                    <td>border-t-0</td>
                                    <td>
                                        {'border-top: 0px;'}
                                    </td>
                                </tr>
                                <tr>
                                    <td>border-b-0</td>
                                    <td>
                                        {'border-bottom: 0px;'}
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className='docs-page__container-block--border-style'>
                    <h3 className="docs-page__h3">Border Style</h3>
                    <p className='docs-page__paragraph'>
                        Utilities classes for overriding the border style of an element.
                    </p>
                    <div className="utilities-table__container utilities-table__container--no-height">
                        <table className="table utilities-table">
                            <thead>
                                <tr>
                                    <th>Class</th>
                                    <th>Properties</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>border-solid</td>
                                    <td>{'border-style: solid;'}</td>
                                </tr>
                                <tr>
                                    <td>border-dotted</td>
                                    <td>{'border-style: dotted;'}</td>
                                </tr>
                                <tr>
                                    <td>border-dashed</td>
                                    <td>{'border-style: dashed;'}</td>
                                </tr>
                                <tr>
                                    <td>border-double</td>
                                    <td>{'border-style: double;'}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

            </section>
        )
    }
}

export { BorderUtilitiesDoc };
