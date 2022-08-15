import * as React from 'react';
import classNames from 'classnames';
import nextId from "react-id-generator";
import { CheckButtonGroup } from './CheckButtonGroup';
import { CheckboxButton } from './CheckboxButton';
import { RadioButtonGroup } from './RadioButtonGroup';
import { Divider } from './Divider';
import { DatePicker } from './DatePicker';

interface IProps {
    value?: IRRule | null;
    onChange?(value: IRRule | null): void;
    firstDayOfWeek?: number; // [0, 6] ; 0 is Monday
    readOnly?: boolean;
    required?: boolean; // unless true, it should be possible to reset to empty value
}

interface IRRule {
    freq: 'DAILY' | 'WEEKLY' | 'MONTHLY' | 'YEARLY';
    interval: number;
    month: number; // [1, 12]
    monthday: number; // [-31, 31]
    weekday: number; // [0, 6] ; 0 is Monday
}

interface IState {
    mon: boolean;
    tue: boolean;
    wed: boolean;
    thu: boolean;
    fri: boolean;
    sat: boolean;
    sun: boolean;
    value: string;
    weeklyValue: string;
    date: any;
}

export class FrequencyInput extends React.PureComponent<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {
            mon: false,
            tue: false,
            wed: false,
            thu: false,
            fri: false,
            sat: false,
            sun: false,
            value: 'Daily',
            weeklyValue: '',
            date: new Date(),
        };
    }

    render() {
        // let InputClasses = classNames('sd-input__duration-input');

        // const classes = classNames('sd-input', {
        //     'sd-input--inline-label': this.props.inlineLabel,
        //     'sd-input--required': this.props.required,
        //     'sd-input--disabled': this.props.disabled,
        //     'sd-input--full-width': this.props.fullWidth,
        //     'sd-input--invalid': this.props.invalid || this.state.invalid,
        // });
        // const labelClasses = classNames('sd-input__label', {
        //     'a11y-only': this.props.labelHidden,
        // });

        // let htmlId = nextId();

        return (
            <div className='frequenci-input frequenci-input__wraper'>
                <div className='frequenci-input__radiobutton'>
                    <RadioButtonGroup options={[
                        {value: 'Daily', label: 'Daily'},
                        {value: 'Weekly', label: 'Weekly'},
                        {value: 'Monthly', label: 'Monthly'},
                    ]}
                    value={this.state.value}
                    onChange={(value) => this.setState(() => ({ value: value }))} />
                </div>

                <Divider size="x-large" border={true} />

                <div className='frequenci-input__checkbox'>
                    {this.state.value === 'Daily' && <CheckButtonGroup>
                        <CheckboxButton checked={this.state.mon} label={{text: 'Mon'}}
                        onChange={(value) => this.setState(() => ({ mon: value }))} />
                        <CheckboxButton checked={this.state.tue} label={{text: 'Tue'}}
                        onChange={(value) => this.setState(() => ({ tue: value }))} />
                        <CheckboxButton checked={this.state.wed} label={{text: 'Wed'}}
                        onChange={(value) => this.setState(() => ({ wed: value }))} />
                        <CheckboxButton checked={this.state.thu} label={{text: 'Thu'}}
                        onChange={(value) => this.setState(() => ({ thu: value }))} />
                        <CheckboxButton checked={this.state.fri} label={{text: 'Fri'}}
                        onChange={(value) => this.setState(() => ({ fri: value }))} />
                        <CheckboxButton checked={this.state.sat} label={{text: 'Sat'}}
                        onChange={(value) => this.setState(() => ({ sat: value }))} />
                        <CheckboxButton checked={this.state.sun} label={{text: 'Sun'}}
                        onChange={(value) => this.setState(() => ({ sun: value }))} />
                    </CheckButtonGroup>}

                    {this.state.value === 'Weekly' && <RadioButtonGroup options={[
                        {value: 'Mon', label: 'Mon'},
                        {value: 'Tue', label: 'Tue'},
                        {value: 'Wed', label: 'Wed'},
                        {value: 'Thu', label: 'Thu'},
                        {value: 'Fri', label: 'Fri'},
                        {value: 'Sat', label: 'Sat'},
                        {value: 'Sun', label: 'Sun'},
                    ]}
                    value={this.state.weeklyValue}
                    onChange={(value) => this.setState(() => ({ weeklyValue: value }))} />}

                    {this.state.value === 'Monthly'
                    && <DatePicker
                    value={this.state.date}
                    dateFormat="YYYY-MM-DD"
                    onChange={(date) => {
                        this.setState({date});
                    }}
                    tabindex={1}
                    labelHidden
                    inlineLabel />
                    }
                </div>
            </div>
        );
    }
}
