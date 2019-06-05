import React from 'react';
import Prism from '../js/prism';

export default class LabelDoc extends React.Component {
    componentDidMount() {
        Prism.highlightAll();
    }

    render() {
        return (
            <div id="labels">
                <h2 className="docs-page__h2">Labels</h2>
                <pre className="line-numbers">
                    <code className="language-tsx">{`<Label>Some label</Label>`}</code>
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
                            <td>row</td>
                            <td>boolean</td>
                            <td>false</td>
                            <td>Adds class `form-label` and remove default sd-line-input__label</td>
                        </tr>
                        <tr>
                            <td>light</td>
                            <td>boolean</td>
                            <td>false</td>
                            <td>Adds `form-label--light` class. Row also needs to be enabled</td>
                        </tr>
                        <tr>
                            <td>invalid</td>
                            <td>boolean</td>
                            <td>false</td>
                            <td>Adds `form-label--invalid` class. Row also need to be enabled</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}
