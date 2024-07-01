import * as React from 'react';
import * as Markup from '../../../js/react';

class OpacityUtilitiesDoc extends React.Component {
    render() {
        return (
            <section className="docs-page__container">
                <h2 className="docs-page__h2">Opacity</h2>
                <p className="docs-page__paragraph">
                    Utility classes for controlling the opacity of an element. 
                </p>
                <div className='docs-page__container-block--opacity'>
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
                                    <td>opacity-0</td>
                                    <td>{'opacity: 0;'}</td>
                                </tr>
                                <tr>
                                    <td>opacity-20</td>
                                    <td>{'opacity: 0.2;'}</td>
                                </tr>
                                <tr>
                                    <td>opacity-25</td>
                                    <td>{'opacity: 0.25;'}</td>
                                </tr>
                                <tr>
                                    <td>opacity-30</td>
                                    <td>{'opacity: 0.3;'}</td>
                                </tr>
                                <tr>
                                    <td>opacity-40</td>
                                    <td>{'opacity: 0.4;'}</td>
                                </tr>
                                <tr>
                                    <td>opacity-50</td>
                                    <td>{'opacity: 0.5;'}</td>
                                </tr>
                                <tr>
                                    <td>opacity-60</td>
                                    <td>{'opacity: 0.6;'}</td>
                                </tr>
                                <tr>
                                    <td>opacity-75</td>
                                    <td>{'opacity: 0.75;'}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

            </section>
        )
    }
}

export { OpacityUtilitiesDoc };
