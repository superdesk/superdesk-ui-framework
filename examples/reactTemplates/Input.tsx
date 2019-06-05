import React from 'react';
import Prism from '../js/prism';

export default class InputDoc extends React.Component {
    componentDidMount() {
        Prism.highlightAll();
    }

    render() {
        return (
            <div id="input">
                <h2 className="docs-page__h2">Input</h2>
                <pre className="line-numbers">
                    <code className="language-tsx">{`<Input field="name" placeholder="Please enter data" />`}</code>
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
                            <td>field</td>
                            <td>string</td>
                            <td></td>
                            <td>Specifies the name of input element</td>
                        </tr>
                        <tr>
                            <td>type</td>
                            <td>text || number || ...</td>
                            <td>text</td>
                            <td>Specifies the type of input element</td>
                        </tr>
                        <tr>
                            <td>className</td>
                            <td>string</td>
                            <td></td>
                            <td>Additional classes to input element</td>
                        </tr>
                        <tr>
                            <td>value</td>
                            <td>string || number</td>
                            <td>false</td>
                            <td>Specifies the value of input element</td>
                        </tr>
                        <tr>
                            <td>placeholder</td>
                            <td>string</td>
                            <td></td>
                            <td>Specifies a short hint that describes the expected value of an Input element</td>
                        </tr>
                        <tr>
                            <td>readOnly</td>
                            <td>boolean</td>
                            <td>false</td>
                            <td>Specifies that an input fied is read only</td>
                        </tr>
                        <tr>
                            <td>onChange</td>
                            <td>boolean</td>
                            <td></td>
                            <td>Triggers on value change</td>
                        </tr>
                        <tr>
                            <td>onBlur</td>
                            <td>boolean</td>
                            <td></td>
                            <td>Triggers on blur</td>
                        </tr>
                        <tr>
                            <td>onClick</td>
                            <td>boolean</td>
                            <td></td>
                            <td>Triggers on click</td>
                        </tr>
                        <tr>
                            <td>onFocus</td>
                            <td>boolean</td>
                            <td></td>
                            <td>Triggers on focus</td>
                        </tr>
                        <tr>
                            <td>refNode</td>
                            <td>function</td>
                            <td></td>
                            <td>Specifies the ref of input element</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}
