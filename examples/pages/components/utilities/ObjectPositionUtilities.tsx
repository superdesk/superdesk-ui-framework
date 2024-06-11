import * as React from 'react';
import * as Markup from '../../../js/react';

class ObjectPositionUtilitiesDoc extends React.Component {
    render() {
        return (
            <section className="docs-page__container">
                <h2 className="docs-page__h2">Object Position</h2>
                <p className="docs-page__paragraph">
                    Utilities for managing how a replaced element's content should be positioned within its container.
                </p>
                <div className='docs-page__container-block--object-position'>
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
                                    <td>object-bottom</td>
                                    <td>{'object-position: bottom;'}</td>
                                </tr>
                                <tr>
                                    <td>object-center</td>
                                    <td>{'object-position: center;'}</td>
                                </tr>
                                <tr>
                                    <td>object-left</td>
                                    <td>{'object-position: left;'}</td>
                                </tr>
                                <tr>
                                    <td>object-left-bottom</td>
                                    <td>{'object-position: left bottom;'}</td>
                                </tr>
                                <tr>
                                    <td>object-left-top</td>
                                    <td>{'object-position: left top;'}</td>
                                </tr>
                                <tr>
                                    <td>object-right</td>
                                    <td>{'object-position: right;'}</td>
                                </tr>
                                <tr>
                                    <td>object-right-bottom </td>
                                    <td>{'object-position: right bottom;'}</td>
                                </tr>
                                <tr>
                                    <td>object-right-top</td>
                                    <td>{'object-position: right top;'}</td>
                                </tr>
                                <tr>
                                    <td>object-top</td>
                                    <td>{'object-position: top;'}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

            </section>
        )
    }
}

export { ObjectPositionUtilitiesDoc };
