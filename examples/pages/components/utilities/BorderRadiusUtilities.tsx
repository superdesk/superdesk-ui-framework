import * as React from 'react';
import * as Markup from '../../../js/react';

class BorderRadiusUtilitiesDoc extends React.Component {
    render() {
        return (
            <section className="docs-page__container">
                <h2 className="docs-page__h2">Border Radius</h2>
                <p className="docs-page__paragraph">
                    Utility classes for controlling the border radius of an element. 
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
                                    <td>radius-xs</td>
                                    <td>{'border-radius: var(--b-radius--x-small);'} <span className="doc-text--highlight">/* 2px */</span></td>
                                </tr>
                                <tr>
                                    <td>radius-sm</td>
                                    <td>{'border-radius: var(--b-radius--small);'} <span className="doc-text--highlight">/* 3px */</span></td>
                                </tr>
                                <tr>
                                    <td>radius-md</td>
                                    <td>{'border-radius: var(--b-radius--medium);'} <span className="doc-text--highlight">/* 4px */</span></td>
                                </tr>
                                <tr>
                                    <td>radius-lg</td>
                                    <td>{'border-radius: var(--b-radius--large);'} <span className="doc-text--highlight">/* 6px */</span></td>
                                </tr>
                                <tr>
                                    <td>radius-xl</td>
                                    <td>{'border-radius: var(--b-radius--x-large);'} <span className="doc-text--highlight">/* 8px */</span></td>
                                </tr>
                                <tr>
                                    <td>radius-full</td>
                                    <td>{'border-radius: var(--b-radius--full);'} <span className="doc-text--highlight">/* 9999px */</span></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

            </section>
        )
    }
}

export { BorderRadiusUtilitiesDoc };
