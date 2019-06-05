import React from 'react';
import Prism from '../js/prism';

export default class LineInputDoc extends React.Component {
    componentDidMount() {
        Prism.highlightAll();
    }

    render() {
        return (
            <div id="line-input">
                <h2 className="docs-page__h2">Line Input</h2>
                <pre className="line-numbers">
                    <code className="language-tsx">{`<LineInput> {InputContent} </LineInput>`}</code>
                </pre>
                <br />
                <h3 className="docs-page__h3">Props</h3>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Type</th>
                            <th>Default</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>required</td>
                            <td>boolean</td>
                            <td>false</td>
                            <td>Adds class `sd-line-input--required`</td>
                        </tr>
                        <tr>
                            <td>invalid</td>
                            <td>boolean</td>
                            <td>false</td>
                            <td>Adds class `sd-line-input--invalid`</td>
                        </tr>
                        <tr>
                            <td>readOnly</td>
                            <td>boolean</td>
                            <td>false</td>
                            <td>Adds class `sd-line-input--disabled`</td>
                        </tr>
                        <tr>
                            <td>boxed</td>
                            <td>boolean</td>
                            <td>false</td>
                            <td>Adds class `sd-line-input--boxed`</td>
                        </tr>
                        <tr>
                            <td>isSelect</td>
                            <td>boolean</td>
                            <td>false</td>
                            <td>Adds class `sd-line-input--is-select`</td>
                        </tr>
                        <tr>
                            <td>noMargin</td>
                            <td>boolean</td>
                            <td>false</td>
                            <td>Adds class `sd-line-input--no-margin`</td>
                        </tr>
                        <tr>
                            <td>noLabel</td>
                            <td>boolean</td>
                            <td>false</td>
                            <td>Adds class `sd-line-input--no-label`</td>
                        </tr>
                        <tr>
                            <td>withButton</td>
                            <td>boolean</td>
                            <td>false</td>
                            <td>Adds class `sd-line-input--with-button`</td>
                        </tr>
                        <tr>
                            <td>labelLeft</td>
                            <td>boolean</td>
                            <td>false</td>
                            <td>Adds class `sd-line-input--label-left`</td>
                        </tr>
                        <tr>
                            <td>labelLeftAuto</td>
                            <td>boolean</td>
                            <td>false</td>
                            <td>Adds class `sd-line-input--label-left-auto`</td>
                        </tr>
                        <tr>
                            <td>borderBottom</td>
                            <td>boolean</td>
                            <td>true</td>
                            <td>If set false, removes class `sd-line-input--no-border-bottom`</td>
                        </tr>
                        <tr>
                            <td>hint</td>
                            <td>string</td>
                            <td></td>
                            <td>Adds hint in `sd-line-input` container  with class `sd-line-input__hint`</td>
                        </tr>
                        <tr>
                            <td>message</td>
                            <td>string</td>
                            <td></td>
                            <td>Adds message in `sd-line-input` container  with class `sd-line-input__message`</td>
                        </tr>
                        <tr>
                            <td>onClick</td>
                            <td>function</td>
                            <td></td>
                            <td>Function triggered on click</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}
