import * as React from 'react';

import * as Markup from '../../js/react';
import {PropsList, Prop} from '../../../app-typescript';
import {TimePicker} from '../../../app-typescript/components/TimePicker';

class TimePickerExample extends React.PureComponent<{}, {time: string}> {
    constructor(props: Readonly<{}>) {
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
            required
            tabindex={1}
            label={'This is Label'}
            info={'This is info'}
            error={'This is error'}
            allowSeconds
            />
        );
    }
}

export default class TimePickerDoc extends React.Component {
    render() {
        return (
            <section className="docs-page__container">
                <h2 className="docs-page__h2">Time picker</h2>
                <Markup.ReactMarkupCodePreview>{`
                    class TimePickerExample extends React.PureComponent<{}, {time: string}> {
                        constructor(props) {
                            super(props);
                            this.state = {time: ''};
                        }
                        render() {
                            return (
                                <TimePicker
                                value={this.state.time}
                                onChange={(time) => {
                                    this.setState({time});
                                }}
                                label={'This is Label'}
                                info={'This is info'}
                                error={'This is error'}
                                />
                            );
                        }
                    }
                `}</Markup.ReactMarkupCodePreview>
                <Markup.ReactMarkup>
                    <Markup.ReactMarkupPreview>
                        <div className='docs-page__content-row'>
                            <TimePickerExample />
                        </div>
                    </Markup.ReactMarkupPreview>
                    <Markup.ReactMarkupCode>{`
                        <TimePickerExample
                            value={this.state.time}
                            disabled={false}
                            required={true}
                            onChange={(time) => {
                                this.setState({time});
                            }}
                        />
                    `}</Markup.ReactMarkupCode>
                </Markup.ReactMarkup>

                <h3 className='docs-page__h3'>Props</h3>
                <PropsList>
                    <Prop name='value' isRequired={true} type='string' default='/' description='Item value.' />
                    <Prop name='allowSeconds' isRequired={true} type='string' default='/' description='Allow seconds.' />
                    <Prop name='required' isRequired={false} type='boolean' default='false' description='Mark field as required.' />
                    <Prop name='disabled' isRequired={false} type='boolean' default='false' description='Mark field as disabled.' />
                </PropsList>

                <h3 className='docs-page__h3'>Events</h3>
                <PropsList>
                    <Prop name='onChange' isRequired={true} type='function' default='/' description='Returns value of time input.' />
                </PropsList>
            </section>
        );
    }
}
