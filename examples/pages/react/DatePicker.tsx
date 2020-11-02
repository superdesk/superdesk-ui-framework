import * as React from 'react';

import * as Markup from '../../js/react';
import {DatePicker} from '../../../app-typescript';
import {TimePicker} from '../../../app-typescript/components/TimePicker';

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
                dateFormat="YYYY-MM-DD"
                onChange={(date) => {
                    this.setState({date});
                }}
            />
        );
    }
}

class TimePickerExample extends React.PureComponent<{}, {time: string}> {
    constructor(props) {
        super(props);

        this.state = {
            time: '',
        };
    }
    render() {
        return (
            <TimePicker
                value={this.state.time}
                onChange={(time) => {
                    this.setState({time});
                }}
            />
        );
    }
}

export default class DatePickerDoc extends React.Component {
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
                    <Markup.ReactMarkupCode>{`
                         <DatePickerExample />
                    `}</Markup.ReactMarkupCode>
                </Markup.ReactMarkup>

                <h2 className="docs-page__h2">Time picker</h2>
                <Markup.ReactMarkup>
                    <Markup.ReactMarkupPreview>
                        <div className='docs-page__content-row'>
                            <TimePickerExample />
                        </div>
                    </Markup.ReactMarkupPreview>
                    <Markup.ReactMarkupCode>{`
                        <TimePickerExample />
                    `}</Markup.ReactMarkupCode>
                </Markup.ReactMarkup>
            </section>
        );
    }
}
