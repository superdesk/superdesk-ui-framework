import * as React from 'react';

import * as Markup from '../../js/react';
import {DatePicker} from '../../../app';

class DatePickerExample extends React.PureComponent<{}, {date: Date}> {
    constructor(props) {
        super(props);

        this.state = {
            date: new Date(),
        };
    }
    render() {
        return (
            <DatePicker
                value={this.state.date}
                onChange={(date) => {
                    this.setState({date});
                }}
            />
        );
    }
}

export default class IconLabelDoc extends React.Component {
    render() {
        return (
            <section className="docs-page__container">
                <h2 className="docs-page__h2">Date picker</h2>
                <Markup.ReactMarkup>
                    <Markup.ReactMarkupPreview>
                        <div className='docs-page__content-row'>
                            <DatePickerExample />
                        </div>
                    </Markup.ReactMarkupPreview>
                </Markup.ReactMarkup>
            </section>
        );
    }
}
