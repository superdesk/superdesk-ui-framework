import * as React from 'react';
import * as Markup from '../../js/react';
import {PropsList, Prop, DateTimePicker} from '../../../app-typescript';

class DateTimePickerExample extends React.PureComponent<{}, {dateTime: Date | null}> {
    constructor(props) {
        super(props);

        this.state = {
            dateTime: new Date(),
        };
    }

    render() {
        return (
            <DateTimePicker
                label={{text: "Planning date"}}
                value={this.state.dateTime}
                dateFormat="YYYY-MM-DD"
                onChange={(val) => {
                    const parsedVal = val != null ? new Date(val) : null;

                    this.setState({dateTime: parsedVal});
                }}
            />
        );
    }
}

interface IState {
    today: string;
    dateTime: Date | null;
}

export default class DateTimePickerDoc extends React.Component<{}, IState> {
    constructor(props) {
        super(props);

        this.state = {
            today: '',
            dateTime: new Date(),
        };
    }

    render() {
        return (
            <section className="docs-page__container">
                <h2 className="docs-page__h2">Date picker</h2>
                <Markup.ReactMarkupCodePreview>{`
                    <DateTimePicker
                        label="Planning datetime"
                        value={this.state.date}
                        dateFormat="YYYY-MM-DD"
                        onChange={(date) => {
                            this.setState({date});
                        }}
                    />
                `}</Markup.ReactMarkupCodePreview>
                <Markup.ReactMarkup>
                    <Markup.ReactMarkupPreview>
                        <div className='docs-page__content-row'>
                            <DateTimePickerExample />
                        </div>
                    </Markup.ReactMarkupPreview>
                    <Markup.ReactMarkupCode>{`
                        <DateTimePicker
                            value={this.state.date}
                            onChange={(date) => {
                                this.setState({date});
                            }}
                            dateFormat="YYYY-MM-DD"
                        />
                    `}</Markup.ReactMarkupCode>
                </Markup.ReactMarkup>

                <h3 className='docs-page__h3'>Props</h3>
                <PropsList>
                    <Prop name='value' isRequired={false} type='Date' default='null' description='Value of the component.' />
                    <Prop name='dateFormat' isRequired={true} type='string' default='/' description='Date format to use, i.e. "MM/DD/YYYY".' />
                    <Prop name='onChange' isRequired={true} type='Function' default='/' description='Callback to invoke when value changes.'/>
                    <Prop name='label' isRequired={false} type='string' default='/' description='Label of component.' />
                    <Prop name='required' isRequired={false} type='boolean' default='false' description='Mark field as required.' />
                    <Prop name='disabled' isRequired={false} type='boolean' default='false' description='Mark field as disabled.' />
                </PropsList>

                <h3 className='docs-page__h3'>Events</h3>
                <PropsList>
                    <Prop name='onChange' isRequired={true} type='function' default='/' description='Returns value of date input' />
                </PropsList>
            </section>
        );
    }
}
