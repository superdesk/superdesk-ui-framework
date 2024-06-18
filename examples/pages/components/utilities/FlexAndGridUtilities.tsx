import * as React from 'react';
import * as Markup from '../../../js/react';

class FlexAndGridUtilitiesDoc extends React.Component {
    render() {
        return (
            <section className="docs-page__container">
                <h2 className="docs-page__h2">Flex & Grid</h2>

                <div className='docs-page__container-block--flex-direction'>
                    <h3 className="docs-page__h3">Flex Direction</h3>
                    <p className='docs-page__paragraph'>
                        Utilities classes for controlling the direction of flex items.
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
                                    <td>flex-row</td>
                                    <td>{'flex-direction: row !important;'}</td>
                                </tr>
                                <tr>
                                    <td>flex-col</td>
                                    <td>{'display: inline !important;'}</td>
                                </tr>
                                <tr>
                                    <td>flex-row-reverse</td>
                                    <td>{'flex-direction: row-reverse !important;'}</td>
                                </tr>
                                <tr>
                                    <td>flex-col-reverse</td>
                                    <td>{'flex-direction: column-reverse !important;'}</td>
                                </tr>

                            </tbody>
                        </table>
                    </div>
                </div>

                <div className='docs-page__container-block--flex-wrap'>
                    <h3 className="docs-page__h3">Flex Wrap</h3>
                    <p className='docs-page__paragraph'>
                        Utilities classes for controlling how flex items wrap.
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
                                    <td>flex-wrap</td>
                                    <td>{'flex-wrap: wrap;'}</td>
                                </tr>
                                <tr>
                                    <td>flex-nowrap</td>
                                    <td>{'flex-wrap: nowrap;'}</td>
                                </tr>
                                <tr>
                                    <td>flex-wrap-reverse</td>
                                    <td>{'flex-wrap: wrap-reverse;'}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className='docs-page__container-block--flex'>
                    <h3 className="docs-page__h3">Flex</h3>
                    <p className='docs-page__paragraph'>
                        Utilities classes for controlling how flex items both grow and shrink.
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
                                    <td>flex-1</td>
                                    <td>{'flex: 1 1 0%;'}</td>
                                </tr>
                                <tr>
                                    <td>flex-auto</td>
                                    <td>{'flex: 1 1 auto;'}</td>
                                </tr>
                                <tr>
                                    <td>flex-initial</td>
                                    <td>{'flex: 0 1 auto;'}</td>
                                </tr>
                                <tr>
                                    <td>flex-none</td>
                                    <td>{'flex: none;'}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className='docs-page__container-block--flex-grow-shrink'>
                    <h3 className="docs-page__h3">Flex Grow & Flex Shrink</h3>
                    <p className='docs-page__paragraph'>
                        Utilities classes for controlling how flex items individually grow or shrink.
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
                                <tr className='utilities-table__divider-row'>
                                    <td>Flex grow</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>flex-grow</td>
                                    <td>{'flex-grow: 1 !important;'}</td>
                                </tr>
                                <tr>
                                    <td>flex-grow-0</td>
                                    <td>{'flex-grow: 0 !important;'}</td>
                                </tr>
                                <tr className='utilities-table__divider-row'>
                                    <td>Flex shrink</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>flex-shrink</td>
                                    <td>{'flex-shrink: 1 !important;'}</td>
                                </tr>
                                <tr>
                                    <td>flex-shrink-0</td>
                                    <td>{'flex-shrink: 0 !important;'}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className='docs-page__container-block--flex-grow-shrink'>
                    <h3 className="docs-page__h3">Justify Content</h3>
                    <p className='docs-page__paragraph'>
                        Utilities classes for controlling how flex and grid items are positioned along a container's main axis.
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
                                    <td>justify-start</td>
                                    <td>{'justify-content: flex-start !important;'}</td>
                                </tr>
                                <tr>
                                    <td>justify-end </td>
                                    <td>{'justify-content: flex-end !important;'}</td>
                                </tr>
                                <tr>
                                    <td>justify-center</td>
                                    <td>{'justify-content: center !important;'}</td>
                                </tr>
                                <tr>
                                    <td>justify-between </td>
                                    <td>{'justify-content: space-between !important;'}</td>
                                </tr>
                                <tr>
                                    <td>justify-around</td>
                                    <td>{'justify-content: flex-start !important;'}</td>
                                </tr>
                                <tr>
                                    <td>justify-evenly</td>
                                    <td>{'justify-content: space-evenly !important;'}</td>
                                </tr>
                                <tr>
                                    <td>justify-normal</td>
                                    <td>{'justify-content: normal !important;'}</td>
                                </tr>
                                <tr>
                                    <td>justify-stretch</td>
                                    <td>{'justify-content: stretch !important;'}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className='docs-page__container-block--justify-items'>
                    <h3 className="docs-page__h3">Justify Items</h3>
                    <p className='docs-page__paragraph'>
                        Utilities classes for controlling how grid items are aligned along their inline axis.
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
                                    <td>justify-items-start</td>
                                    <td>{'justify-items: start;'}</td>
                                </tr>
                                <tr>
                                    <td>justify-items-end</td>
                                    <td>{'justify-items: end;'}</td>
                                </tr>
                                <tr>
                                    <td>justify-items-center</td>
                                    <td>{'justify-items: center;'}</td>
                                </tr>
                                <tr>
                                    <td>justify-items-stretch</td>
                                    <td>{'justify-items: stretch;'}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className='docs-page__container-block--justify-self'>
                    <h3 className="docs-page__h3">Justify Self</h3>
                    <p className='docs-page__paragraph'>
                        Utilities classes for controlling how an individual grid item is aligned along its inline axis.
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
                                    <td>justify-self-auto</td>
                                    <td>{'justify-self: auto;'}</td>
                                </tr>
                                <tr>
                                    <td>justify-self-start</td>
                                    <td>{'justify-self: start;'}</td>
                                </tr>
                                <tr>
                                    <td>justify-self-end</td>
                                    <td>{'justify-self: end;'}</td>
                                </tr>
                                <tr>
                                    <td>justify-items-center</td>
                                    <td>{'justify-self: center;'}</td>
                                </tr>
                                <tr>
                                    <td>justify-self-stretch</td>
                                    <td>{'justify-self: stretch;'}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className='docs-page__container-block--align-content'>
                    <h3 className="docs-page__h3">Align Content</h3>
                    <p className='docs-page__paragraph'>
                        Utilities classes for controlling how rows are positioned in multi-row flex and grid containers.
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
                                    <td>content-normal</td>
                                    <td>{'align-content: normal;'}</td>
                                </tr>
                                <tr>
                                    <td>content-center</td>
                                    <td>{'align-content: center;'}</td>
                                </tr>
                                <tr>
                                    <td>content-start</td>
                                    <td>{'align-content: start;'}</td>
                                </tr>
                                <tr>
                                    <td>content-end</td>
                                    <td>{'align-content: end;'}</td>
                                </tr>
                                <tr>
                                    <td>content-between</td>
                                    <td>{'align-content: space-between;'}</td>
                                </tr>
                                <tr>
                                    <td>content-around</td>
                                    <td>{'align-content: space-around;'}</td>
                                </tr>
                                <tr>
                                    <td>content-evenly</td>
                                    <td>{'align-content: space-evenly;'}</td>
                                </tr>
                                <tr>
                                    <td>content-baseline</td>
                                    <td>{'align-content: baseline;'}</td>
                                </tr>
                                <tr>
                                    <td>content-stretch</td>
                                    <td>{'align-content: stretch;'}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className='docs-page__container-block--align-items'>
                    <h3 className="docs-page__h3">Align Items</h3>
                    <p className='docs-page__paragraph'>
                        Utilities classes for controlling how flex and grid items are positioned along a container's cross axis.
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
                                    <td>items-start</td>
                                    <td>{'align-items: flex-start;'}</td>
                                </tr>
                                <tr>
                                    <td>items-end</td>
                                    <td>{'align-items: flex-end;'}</td>
                                </tr>
                                <tr>
                                    <td>items-center</td>
                                    <td>{'align-items: center;'}</td>
                                </tr>
                                <tr>
                                    <td>items-baseline</td>
                                    <td>{'align-items: baseline;'}</td>
                                </tr>
                                <tr>
                                    <td>items-stretch</td>
                                    <td>{'align-items: stretch;'}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className='docs-page__container-block--align-self'>
                    <h3 className="docs-page__h3">Align Self</h3>
                    <p className='docs-page__paragraph'>
                        Utilities classes for controlling how an individual flex or grid item is positioned along its container's cross axis.
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
                                    <td>self-auto</td>
                                    <td>{'align-self: auto;'}</td>
                                </tr>
                                <tr>
                                    <td>self-start</td>
                                    <td>{'align-self: flex-start;'}</td>
                                </tr>
                                <tr>
                                    <td>self-end</td>
                                    <td>{'align-self: flex-end;'}</td>
                                </tr>
                                <tr>
                                    <td>self-center</td>
                                    <td>{'align-self: center;'}</td>
                                </tr>
                                <tr>
                                    <td>self-baseline</td>
                                    <td>{'align-self: baseline;'}</td>
                                </tr>
                                <tr>
                                    <td>self-stretch</td>
                                    <td>{'align-self: stretch;'}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className='docs-page__container-block--place-content'>
                    <h3 className="docs-page__h3">Place Content</h3>
                    <p className='docs-page__paragraph'>
                        Utilities classes for controlling how content is justified and aligned at the same time.
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
                                    <td>place-content-center</td>
                                    <td>{'place-content: center;'}</td>
                                </tr>
                                <tr>
                                    <td>place-content-start</td>
                                    <td>{'place-content: start;'}</td>
                                </tr>
                                <tr>
                                    <td>place-content-end</td>
                                    <td>{'place-content: end;'}</td>
                                </tr>
                                <tr>
                                    <td>place-content-between</td>
                                    <td>{'place-content: space-between;'}</td>
                                </tr>
                                <tr>
                                    <td>place-content-around</td>
                                    <td>{'place-content: space-around;'}</td>
                                </tr>
                                <tr>
                                    <td>place-content-evenly</td>
                                    <td>{'place-content: space-evenly;'}</td>
                                </tr>
                                <tr>
                                    <td>place-content-baseline</td>
                                    <td>{'place-content: baseline;'}</td>
                                </tr>
                                <tr>
                                    <td>place-content-stretch</td>
                                    <td>{'place-content: stretch;'}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className='docs-page__container-block--place-items'>
                    <h3 className="docs-page__h3">Place Items</h3>
                    <p className='docs-page__paragraph'>
                        Utilities classes for controlling how items are justified and aligned at the same time.
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
                                    <td>place-items-start</td>
                                    <td>{'place-items: start;'}</td>
                                </tr>
                                <tr>
                                    <td>place-items-end</td>
                                    <td>{'place-items: end;'}</td>
                                </tr>
                                <tr>
                                    <td>place-items-center</td>
                                    <td>{'place-items: center;'}</td>
                                </tr>
                                <tr>
                                    <td>place-items-baseline</td>
                                    <td>{'place-items: baseline;'}</td>
                                </tr>
                                <tr>
                                    <td>place-items-stretch</td>
                                    <td>{'place-items: stretch;'}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className='docs-page__container-block--place-self'>
                    <h3 className="docs-page__h3">Place Self</h3>
                    <p className='docs-page__paragraph'>
                        Utilities classes for controlling how an individual item is justified and aligned at the same time.
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
                                    <td>place-self-auto</td>
                                    <td>{'place-self: auto;'}</td>
                                </tr>
                                <tr>
                                    <td>place-self-start</td>
                                    <td>{'place-self: start;'}</td>
                                </tr>
                                <tr>
                                    <td>place-self-end</td>
                                    <td>{'place-self: end;'}</td>
                                </tr>
                                <tr>
                                    <td>place-self-center</td>
                                    <td>{'place-self: center;'}</td>
                                </tr>
                                <tr>
                                    <td>place-self-stretch</td>
                                    <td>{'place-self: stretch;'}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

            </section>
        )
    }
}

export { FlexAndGridUtilitiesDoc };
