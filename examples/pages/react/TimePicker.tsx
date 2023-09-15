import * as React from 'react';
import * as Markup from '../../js/react';
import {PropsList, Prop} from '../../../app-typescript';
import {TimePicker} from '../../../app-typescript/components/TimePicker';
import {TimePickerV2} from '../../../app-typescript/components/TimePickerV2';

let minutes = Array.from(Array(60).keys());
let changedMinutes = minutes.filter((num) => num % 15 !== 0)

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
                allowSeconds
                label='This is Label'
                info='This is info'
            />
        );
    }
}

export default class TimePickerDoc extends React.Component<{}, {time: string}> {
    constructor(props) {
        super(props);

        this.state = {
            time: '14:00',
        };
    }

    render() {
        return (
            <section className="docs-page__container">
                <h2 className="docs-page__h2">Time picker</h2>
                <Markup.ReactMarkupCodePreview>{`
                    <TimePicker
                        value={this.state.time}
                        onChange={(time) => {
                            this.setState({time});
                        }}
                    />
                `}</Markup.ReactMarkupCodePreview>
                <Markup.ReactMarkup>
                    <Markup.ReactMarkupPreview>
                        <div className='docs-page__content-row'>
                            <TimePickerExample />
                        </div>
                    </Markup.ReactMarkupPreview>
                    <Markup.ReactMarkupCode>{`
                        <TimePicker
                            value={this.state.time}
                            onChange={(time) => {
                                this.setState({time});
                            }}
                            allowSeconds
                            label='This is Label'
                            info='This is info'
                        />
                    `}</Markup.ReactMarkupCode>
                </Markup.ReactMarkup>

                <p className='docs-page__paragraph'>TimePickerV2:</p>
                <Markup.ReactMarkup>
                    <Markup.ReactMarkupPreview>
                        <div className='docs-page__content-row'>
                            <TimePickerV2
                                value={this.state.time}
                                label='This is Label'
                                disabledOptions={{
                                    minutes: changedMinutes,
                                }}
                                onChange={(time) => {
                                    this.setState({time});
                                }}     
                            />
                        </div>
                    </Markup.ReactMarkupPreview>
                    <Markup.ReactMarkupCode>{`
                        <TimePickerV2
                            value={this.state.time}
                            label='This is Label'
                            disableOptions={{
                                minutes: changedMinutes,
                            }}
                            onChange={(time) => {
                                this.setState({time})
                            }}
                        />
                    `}</Markup.ReactMarkupCode>
                </Markup.ReactMarkup>

                <h3 className='docs-page__h3'>Props</h3>
                <PropsList>
                    <Prop name='value' isRequired={true} type='string' default='/' description='Item value.' />
                    <Prop name='allowSeconds' isRequired={true} type='string' default='/' description='Allow seconds.' />
                    <Prop name='onChange' isRequired={true} type='Function' default='/' description='Callback to invoke when value changes.'/>
                    <Prop name='label' isRequired={false} type='string' default='/' description='Label of component.' />
                    <Prop name='inlineLabel' isRequired={false} type='boolean' default='false' description='Position labels as inline.' />
                    <Prop name='tabindex' isRequired={false} type='number' default='/' description='Indicates an element can be focused on, and determines how that focus is handled.'/>
                    <Prop name='info' isRequired={false} type='string' default='/' description='Info message of component.' />
                    <Prop name='error' isRequired={false} type='string' default='/' description='Error message of component.' />
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
