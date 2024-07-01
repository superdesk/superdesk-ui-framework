import * as React from 'react';
import * as Markup from '../../../js/react';

class PositionUtilitiesDoc extends React.Component {
    render() {
        return (
            <section className="docs-page__container">
                <h2 className="docs-page__h2">Position</h2>
                <p className="docs-page__paragraph">
                Utility classes for managing the placement of an element within the DOM. 
                </p>
                <div className='docs-page__container-block--position'>
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
                                    <td>p-static</td>
                                    <td>{'position: static;'}</td>
                                </tr>
                                <tr>
                                    <td>p-fixed</td>
                                    <td>{'position: fixed;'}</td>
                                </tr>
                                <tr>
                                    <td>p-absolute</td>
                                    <td>{'position: absolute;'}</td>
                                </tr>
                                <tr>
                                    <td>p-relative</td>
                                    <td>{'position: relative;'}</td>
                                </tr>
                                <tr>
                                    <td>p-sticky</td>
                                    <td>{'position: sticky;'}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

            </section>
        )
    }
}

export { PositionUtilitiesDoc };
