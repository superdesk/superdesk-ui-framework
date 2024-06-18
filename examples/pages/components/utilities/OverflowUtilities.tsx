import * as React from 'react';
import * as Markup from '../../../js/react';

class OverflowUtilitiesDoc extends React.Component {
    render() {
        return (
            <section className="docs-page__container">
                <h2 className="docs-page__h2">Overflow</h2>
                <p className="docs-page__paragraph">
                Utility classes for managing how an element deals with content that exceeds the container's size. 
                </p>
                <div className='docs-page__container-block--position'>
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
                                    <td>overflow-auto</td>
                                    <td>{'overflow: auto !important;'}</td>
                                </tr>
                                <tr>
                                    <td>overflow-hidden</td>
                                    <td>{'overflow: hidden !important;'}</td>
                                </tr>
                                <tr>
                                    <td>overflow-scroll</td>
                                    <td>{'overflow: scroll !important;'}</td>
                                </tr>
                                <tr>
                                    <td>overflow-visible</td>
                                    <td>{'overflow: visible !important;'}</td>
                                </tr>
                                <tr>
                                    <td>overflow-clip</td>
                                    <td>{'overflow: clip !important;'}</td>
                                </tr>

                                <tr>
                                    <td>overflow-x-auto</td>
                                    <td>{'overflow-x: auto !important;'}</td>
                                </tr>
                                <tr>
                                    <td>overflow-y-auto</td>
                                    <td>{'overflow-y: auto !important;'}</td>
                                </tr>
                                <tr>
                                    <td>overflow-x-hidden</td>
                                    <td>{'overflow-x: hidden !important;'}</td>
                                </tr>
                                <tr>
                                    <td>overflow-y-hidden</td>
                                    <td>{'overflow-y: hidden !important;'}</td>
                                </tr>
                                <tr>
                                    <td>overflow-x-scroll</td>
                                    <td>{'overflow-x: scroll !important;'}</td>
                                </tr>
                                <tr>
                                    <td>overflow-y-scroll</td>
                                    <td>{'overflow-y: scroll !important;'}</td>
                                </tr>
                                <tr>
                                    <td>overflow-x-visible</td>
                                    <td>{'overflow-x: visible !important;'}</td>
                                </tr>
                                <tr>
                                    <td>overflow-y-visible</td>
                                    <td>{'overflow-y: visible !important;'}</td>
                                </tr>
                                <tr>
                                    <td>overflow-x-clip</td>
                                    <td>{'overflow-x: clip !important;'}</td>
                                </tr>
                                <tr>
                                    <td>overflow-y-clip</td>
                                    <td>{'overflow-y: clip !important;'}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

            </section>
        )
    }
}

export { OverflowUtilitiesDoc };
