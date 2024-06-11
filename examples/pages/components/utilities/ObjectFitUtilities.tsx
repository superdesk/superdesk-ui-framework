import * as React from 'react';
import * as Markup from '../../../js/react';

class ObjectFitUtilitiesDoc extends React.Component {
    render() {
        return (
            <section className="docs-page__container">
                <h2 className="docs-page__h2">Object Fit</h2>
                <p className="docs-page__paragraph">
                    Utilities for managing how a replaced element's content should be resized. 
                </p>
                <div className='docs-page__container-block--object-fit'>
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
                                    <td>object-contain</td>
                                    <td>{'object-fit: 0;'}</td>
                                </tr>
                                <tr>
                                    <td>object-cover</td>
                                    <td>{'object-fit: cover;'}</td>
                                </tr>
                                <tr>
                                    <td>object-fill</td>
                                    <td>{'object-fit: fill;'}</td>
                                </tr>
                                <tr>
                                    <td>object-none</td>
                                    <td>{'object-fit: none;'}</td>
                                </tr>
                                <tr>
                                    <td>object-scale-down</td>
                                    <td>{'object-fit: scale-down;'}</td>
                                </tr>

                            </tbody>
                        </table>
                    </div>
                </div>

            </section>
        )
    }
}

export { ObjectFitUtilitiesDoc };
