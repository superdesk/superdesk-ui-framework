import * as React from 'react';
import * as Markup from '../../../js/react';

class DisplayUtilitiesDoc extends React.Component {
    render() {
        return (
            <section className="docs-page__container">
                <h2 className="docs-page__h2">Display</h2>
                <p className="docs-page__paragraph">
                Utility classes for controlling the display box type of an element.
                </p>
                <div className='docs-page__container-block--display'>
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
                                    <td>d-block</td>
                                    <td>{'display: auto !important;'}</td>
                                </tr>
                                <tr>
                                    <td>d-inline-block</td>
                                    <td>{'display: inline-block !important;'}</td>
                                </tr>
                                <tr>
                                    <td>d-inline</td>
                                    <td>{'display: inline !important;'}</td>
                                </tr>
                                <tr>
                                    <td>d-flex</td>
                                    <td>{'display: flex !important;'}</td>
                                </tr>
                                <tr>
                                    <td>d-inline-flex</td>
                                    <td>{'display: inline-flex !important;'}</td>
                                </tr>
                                <tr>
                                    <td>d-grid</td>
                                    <td>{'display: grid !important;'}</td>
                                </tr>
                                <tr>
                                    <td>d-inline-grid</td>
                                    <td>{'display: inline-grid !important;'}</td>
                                </tr>
                                <tr>
                                    <td>d-contents</td>
                                    <td>{'display: contents !important;'}</td>
                                </tr>
                                <tr>
                                    <td>d-none</td>
                                    <td>{'display: none !important;'}</td>
                                </tr>
                                <tr>
                                    <td>d-flow-root</td>
                                    <td>{'display: flow-root !important;'}</td>
                                </tr>
                                <tr>
                                    <td>d-list-item</td>
                                    <td>{'display: list-item !important;'}</td>
                                </tr>
                                <tr>
                                    <td>d-table</td>
                                    <td>{'display: table;'}</td>
                                </tr>
                                <tr>
                                    <td>d-inline-table</td>
                                    <td>{'display: inline-table;'}</td>
                                </tr>
                                <tr>
                                    <td>d-table-caption</td>
                                    <td>{'display: table-caption;'}</td>
                                </tr>
                                <tr>
                                    <td>d-table-cell</td>
                                    <td>{'display: table-cell;'}</td>
                                </tr>
                                <tr>
                                    <td>d-table-column</td>
                                    <td>{'display: table-column;'}</td>
                                </tr>
                                <tr>
                                    <td>d-table-column-group</td>
                                    <td>{'display: table-column-group;'}</td>
                                </tr>
                                <tr>
                                    <td>d-table-footer-group</td>
                                    <td>{'display: table-footer-group;'}</td>
                                </tr>
                                <tr>
                                    <td>d-table-header-group</td>
                                    <td>{'display: table-header-group;'}</td>
                                </tr>
                                <tr>
                                    <td>d-table-row</td>
                                    <td>{'display: table-row;'}</td>
                                </tr>
                                <tr>
                                    <td>d-table-row-group</td>
                                    <td>{'display: table-row-group;'}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

            </section>
        )
    }
}

export { DisplayUtilitiesDoc };
