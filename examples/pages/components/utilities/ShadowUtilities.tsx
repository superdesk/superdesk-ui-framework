import * as React from 'react';
import * as Markup from '../../../js/react';

class ShadowUtilitiesDoc extends React.Component {
    render() {
        return (
            <section className="docs-page__container">
                <h2 className="docs-page__h2">Shadow Utilities</h2>
                <p className="docs-page__paragraph">
                    Utility classes for managing the shadow depth of an element.
                </p>

                <div className='docs-page__container-block--box-shadow'>
                    <h3 className="docs-page__h3">box-shadow</h3>
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
                                    <td>sd-shadow--z1</td>
                                    <td>{'box-shadow: var(--sd-shadow--z1);'}</td>
                                </tr>
                                <tr>
                                    <td>sd-shadow--z2</td>
                                    <td>{'box-shadow: var(--sd-shadow--z2);'}</td>
                                </tr>
                                <tr>
                                    <td>sd-shadow--z3</td>
                                    <td>{'box-shadow: var(--sd-shadow--z3);'}</td>
                                </tr>
                                <tr>
                                    <td>sd-shadow--z4</td>
                                    <td>{'box-shadow: var(--sd-shadow--z4);'}</td>
                                </tr>
                                <tr>
                                    <td>sd-shadow--none</td>
                                    <td>{'box-shadow: none;'}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className='docs-page__container-block'>
                        <h4 className="docs-page__h4">Usage</h4>
                        <div className="docs-page__code-window">
                            <div className="sd-grid-list">
                                <div className="docs-page__example-box sd-shadow--z1">
                                    <p>sd-shadow--z1</p>
                                </div>
                                <div className="docs-page__example-box sd-shadow--z2">
                                    <p>sd-shadow--z2</p>
                                </div>
                                <div className="docs-page__example-box sd-shadow--z3">
                                    <p>sd-shadow--z3</p>
                                </div>
                                <div className="docs-page__example-box sd-shadow--z4">
                                    <p>sd-shadow--z4</p>
                                </div>
                            
                            </div>
                        </div>
                    </div>
                </div>

                <div className='docs-page__container-block--drop-shadow'>
                    <h3 className="docs-page__h3">drop-shadow filter</h3>
                    <p className="docs-page__paragraph">
                        These helper classes utilize the <code>drop-shadow</code> filter. Use them exclusively to apply a shadow to an element that doesn't correspond to its bounding box, but instead uses the element's alpha mask, such as transparent PNG or SVG. For all other situations, it is recommended to use the above classes, based on the <code>box-shadow</code> property.
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
                                    <td>sd-drop-shadow--z1</td>
                                    <td>{'filter: var(--sd-drop-shadow--z1);'}</td>
                                </tr>
                                <tr>
                                    <td>sd-drop-shadow--z2</td>
                                    <td>{'filter: var(--sd-drop-shadow--z2);'}</td>
                                </tr>
                                <tr>
                                    <td>sd-drop-shadow--z3</td>
                                    <td>{'filter: var(--sd-drop-shadow--z3);'}</td>
                                </tr>
                                <tr>
                                    <td>sd-drop-shadow--z4</td>
                                    <td>{'filter: var(--sd-drop-shadow--z4);'}</td>
                                </tr>
                                <tr>
                                    <td>sd-drop-shadow--none</td>
                                    <td>{'filter: var(--sd-drop-shadow--none);'}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className='docs-page__container-block--drop-shadow'>
                    <h4 className="docs-page__h4">Basic usage</h4>
                    <div className="docs-page__code-window docs-page__example-box">
                            <div className="p-4">
                                <p className="text-md font-light text-color-subdued mb-2">sd-drop-shadow--z3</p>
                                <img className='sd-drop-shadow--z3' width={300} src='./../../../../app/img/SD-logo.svg' />
                            </div>
                    </div>
                </div>

            </section>
        )
    }
}

export { ShadowUtilitiesDoc };
