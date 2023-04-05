import * as React from 'react';

import * as Markup from '../../js/react';
import {DatePicker, PropsList, Prop, DatePickerISO} from '../../../app-typescript';

class DatePickerExample extends React.PureComponent<{}, {date: Date}> {
    constructor(props: Readonly<{}>) {
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
            required
            tabindex={1}
            label={'This is Label'}
            info={'This is info'}
            error={'This is error'}
            />
        );
    }
}

export default class DatePickerDoc extends React.Component {
    constructor(props: Readonly<{}>) {
        super(props);

        this.state = {
            today: new Date(),
        };
    }
    render() {
        return (
            <section className="docs-page__container">
                <h2 className="docs-page__h2">Date picker</h2>
                <Markup.ReactMarkupCodePreview>{`
                    class DatePickerExample extends React.PureComponent<{}, {date: Date}> {
                        constructor(props) {
                            super(props);
                            this.state = {date: new Date()};
                        }
                        render() {
                            return (
                                <DatePicker
                                    value={this.state.date}
                                    dateFormat="YYYY-MM-DD"
                                    onChange={(date) => {
                                        this.setState({date});
                                    }}
                                    required
                                    tabindex={1}
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
                            <DatePickerExample />
                        </div>

                        <p className="docs-page__paragraph">// DatePickerISO</p>
                        <div className='docs-page__content-row'>
                            <DatePickerISO
                            value={'2019-01-01'}
                            dateFormat="YYYY-MM-DD"
                            onChange={(date) => {
                                this.setState({date});
                            }}   
                            tabindex={1}
                            label={'This is Label'}
                            info={'This is info'}
                            error={'This is error'}
                            />
                        </div>
                    </Markup.ReactMarkupPreview>
                    <Markup.ReactMarkupCode>{`
                         <DatePicker
                            value={this.state.date}
                            onChange={(date) => {
                                this.setState({date});
                            }}
                            disabled={false}
                            dateFormat="YYYY-MM-DD"
                            shortcuts={[
                                {label: 'tomorrow', days: 1},
                                {label: 'yesterday', days: -1},
                            ]}
                            locale={{
                                firstDayOfWeek: 1,
                                dayNames: [
                                    "domingo", "lunes", "martes", "miércoles",
                                    "jueves", "viernes", "sábado",
                                ],
                                dayNamesShort: [
                                    "dom", "lun", "mar", "mié",
                                    "jue", "vie", "sáb",
                                ],
                                dayNamesMin: [
                                    "D", "L", "M", "X",
                                    "J", "V", "S",
                                ],
                                monthNames: [
                                    "enero", "febrero", "marzo", "abril",
                                    "mayo", "junio", "julio", "agosto",
                                    "septiembre", "octubre", "noviembre",
                                    "diciembre",
                                ],
                                monthNamesShort: [
                                    "ene", "feb", "mar", "abr", "may",
                                    "jun", "jul", "ago", "sep", "oct",
                                    "nov", "dic",
                                ],
                            }}
                        />
                    `}</Markup.ReactMarkupCode>
                </Markup.ReactMarkup>
                <p className="docs-page__paragraph">DatePicker with headerButtonBar:</p>
                <Markup.ReactMarkup>
                    <Markup.ReactMarkupPreview>
                        <div className='docs-page__content-row'>
                        <DatePicker
                            value={this.state.today}
                            dateFormat="YYYY-MM-DD"
                            onChange={(today) => {
                                this.setState({today});
                            }}
                            required
                            tabindex={1}
                            label={'This is Label'}
                            info={'This is info'}
                            error={'This is error'}
                            headerButtonBar={[{days: 0, label: 'today'}, {days: 1, label: 'tomorow'}, {days: 2, label: 'in 2 days'}]}
                        />
                        </div>
                    </Markup.ReactMarkupPreview>
                    <Markup.ReactMarkupCode>{`
                        <DatePicker
                            value={this.state.date}
                            dateFormat="YYYY-MM-DD"
                            onChange={(date) => {
                                this.setState({date});
                            }}
                            required
                            tabindex={1}
                            label={'This is Label'}
                            info={'This is info'}
                            error={'This is error'}
                            headerButtonBar={[{days: 0, label: 'today'}, {days: 1, label: 'tomorow'}, {days: 2, label: 'in 2 days'}]}
                        />
                    `}</Markup.ReactMarkupCode>
                </Markup.ReactMarkup>

                <h3 className='docs-page__h3'>Props</h3>
                <PropsList>
                    <Prop name='value' isRequired={false} type='Date' default='/' description='Item value' />
                    <Prop name='dateFormat' isRequired={true} type='string' default='/' description='Date format to use, i.e. "MM/DD/YYYY"' />
                    <Prop name='locale' isRequired={false} type='string' default='/' description='see: https://primefaces.org/primereact/showcase/#/calendar' />
                    <Prop name='headerButtonBar' isRequired={false} type='Array' default='/' description='Aditional button in header, ex. [{label: "today", days: 0}, {label: "tomorrow", days: 1}]' />
                    <Prop name='label' isRequired={false} type='string' default='/' description='Input label'/>
                    <Prop name='info' isRequired={false} type='string' default='/' description='Hint text'/>
                    <Prop name='error' isRequired={false} type='string' default='/' description='Error text'/>
                    <Prop name='inlineLabel' isRequired={false} type='boolean' default='false' description='Position labels as inline'/>
                    <Prop name='required' isRequired={false} type='boolean' default='false' description='Mark field as required'/>
                    <Prop name='disabled' isRequired={false} type='boolean' default='false' description='Mark field as disabled'/>
                    <Prop name='invalid' isRequired={false} type='boolean' default='false' description='Mark field as invalid'/>
                </PropsList>

                <h3 className='docs-page__h3'>Events</h3>
                <PropsList>
                    <Prop name='onChange' isRequired={true} type='function' default='/' description='Returns value of date input' />
                </PropsList>
            </section>
        );
    }
}
