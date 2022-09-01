import * as React from 'react';
import classNames from 'classnames';
import nextId from "react-id-generator";
import { CheckButtonGroup } from './CheckButtonGroup';
import { CheckboxButton } from './CheckboxButton';
import { RadioButtonGroup } from './RadioButtonGroup';
import { Divider } from './Divider';
import { DatePicker } from './DatePicker';
import { Select } from './Select';
import { Option } from './Select';
import { InputWrapper } from './Form';

import { Input } from './Input';
import { string } from 'prop-types';
import { getDaysInMonth } from 'date-fns/esm';

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
    end: string;
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
            value: 'Yearly',
            weeklyValue: '',
            date: new Date(),
            end: '',
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
            <>
            {/* <div className='frequenci-input frequenci-input__wraper'>
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
            </div> */}


            <div className='frequency-input'>
                <div className='start  sd-margin-y--2'>
                    <DatePicker
                    value={this.state.date}
                    dateFormat="YYYY-MM-DD"
                    onChange={(date) => {
                        this.setState({date});
                    }}
                    tabindex={1}
                    label='START'
                    inlineLabel />
                </div>

                <div className='main'>
                    <InputWrapper label='REPEAT' inlineLabel>
                        <RadioButtonGroup options={[
                            {value: 'Yearly', label: 'Yearly'},
                            {value: 'Monthly', label: 'Monthly'},
                            {value: 'Weekly', label: 'Weekly'},
                            {value: 'Daily', label: 'Daily'},
                            {value: 'Hourly', label: 'Hourly'},
                        ]}
                        value={this.state.value}
                        onChange={(value) => this.setState(() => ({ value: value }))} />

                    <div className='frequenci-input__checkbox'>
                        
                        {this.state.value === 'Yearly'
                        && <div className='container'>
                            
                            <RadioGroup months days dayInWeek weeks />
                        </div>
                        }

                        {this.state.value === 'Monthly'
                        && <div className='container'>
                            <div className='repet-container' style={{display: 'flex'}}>
                                <span>every</span>
                                <Input type='text' value='1' onChange={() => false} labelHidden inlineLabel />
                                <span>{'week(s)'}</span>
                            </div>
                            <RadioGroup days dayInWeek weeks /> 
                        </div>
                        }

                        {this.state.value === 'Weekly' &&
                        <div className='container'>
                            <div className='repet-container' style={{display: 'flex'}}>
                                <span>every</span>
                                <Input type='text' value='1' onChange={() => false} labelHidden inlineLabel />
                                <span>{'week(s)'}</span>
                            </div>
                            <CheckButtonGroup>
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
                        </CheckButtonGroup>
                        </div>}

                        {this.state.value === 'Daily' && <div className='repet-container' style={{display: 'flex'}}>
                            <span>every</span>
                            <Input type='text' value='1' onChange={() => false} labelHidden inlineLabel />
                            <span>{'day(s)'}</span>
                        </div>}

                        {this.state.value === 'Hourly' && <div className='repet-container' style={{display: 'flex'}}>
                            <span>every</span>
                            <Input type='text' value='1' onChange={() => false} labelHidden inlineLabel />
                            <span>{'hour(s)'}</span>
                        </div>}
                    </div>
                    </InputWrapper>
                </div>

                <div className='end  sd-margin-y--2'>
                    <Select label='END'
                    value={this.state.end}
                    inlineLabel={true}
                    onChange={(value) => this.setState({end: value})}> 
                        <Option value='Never'>Never</Option>
                        <Option value='After'>After</Option>
                        <Option value='OnDate'>On Date</Option>
                    </Select>

                    {this.state.end === 'After'
                    && <Input type='text' value='1' onChange={() => false} labelHidden inlineLabel />
                    }

                    {this.state.end === 'OnDate'
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
            </>
        );
    }
}

interface IProps {
    months?: boolean;
    days?: boolean;
    weeks?: boolean;
    dayInWeek?: boolean;
}

interface IStates {
    inputValue?: any,
    value?: any,
    optionValue: Array<Number>;
}

class RadioGroup extends React.PureComponent<IProps, IStates> {
    private monthRef: React.RefObject<HTMLInputElement>;
    constructor(props: IProps) {
        super(props);
        this.state = {
            inputValue: false,
            value: '1',
            optionValue: [],
        }

        this.daysInMonth = this.daysInMonth.bind(this);
        this.days = this.days.bind(this);
        this.monthRef = React.createRef();
    }

    daysInMonth (month, year) {
        return new Date(year, month, 0).getDate();
    }

    days(value) {
        let day;
        
        let niz: Array<any> = [];
        for (day = 1; day <= this.daysInMonth(value,2022); day++ ) {
            //this.setState({optionValue: [...this.state.optionValue, day]})
            //console.log(this.state.optionValue);
            
            //this.state.optionValue.push(day)
            niz = [...niz, day]
        }
        console.log(niz);
        this.setState({optionValue: niz})
        
    }
    componentDidMount() {
        this.days(1)
        
        // console.log(this.state.optionValue);
        
    }

    // componentDidUpdate(prevProps, prevState) {
    //     if (prevState.value !== this.state.value) {
    //         this.days();
    //     }
    // }

    render() {
        //console.log(this.daysInMonth(this.state.value,2022));
        
        //console.log(this.state.value);
       
        //console.log(this.state.optionValue);
        
        
        return (
            <div className='radio-group'>
                <div className={`radio-item ${this.state.inputValue === 'first' ? ' disabled' : ''}`} style={{display: 'flex'}}>
                    <div onChange={(e) => console.log(e)}>
                        <input type='radio' name='radio' value={'first'} onChange={(e) => this.setState({inputValue : e.target.value})} />
                    </div>

                    <span>on</span>
                   
                    {this.props.months && <Select
                    //value={'1'}
                    inlineLabel={true}
                    labelHidden
                    
                    onChange={(value) => {
                        //this.setState({optionValue: []})
                        this.setState({value: value});
                        this.days(value);
                        //console.log(this.state.optionValue);



                        //console.log(value);
                    }}
                    label={''}>
                        <Option value='1'>Jan</Option>
                        <Option value='2'>Feb</Option>
                        <Option value='3'>Mar</Option>
                        <Option value='4'>Apr</Option>
                        <Option value='5'>May</Option>
                        <Option value='6'>Jun</Option>
                        <Option value='7'>Jul</Option>
                        <Option value='8'>Aug</Option>
                        <Option value='9'>Sep</Option>
                        <Option value='10'>Oct</Option>
                        <Option value='11'>Nov</Option>
                        <Option value='12'>Dec</Option>
                    </Select>}
                
                    {this.props.days && <Select
                    value='Option 2'
                    inlineLabel={true}
                    labelHidden
                    onChange={(value) => false} label={''}>
                        {this.state.optionValue.map((e, i) => {
                            return <React.Fragment key={i}><Option>{e}</Option></React.Fragment>
                        })}
                    </Select>}
        
                </div>
                
                <div className={`radio-item ${this.state.inputValue === 'second' ? ' disabled' : ''}`} style={{display: 'flex'}}>
                    <div>
                        <input type='radio' name='radio' value={'second'} onChange={(e) => this.setState({inputValue : e.target.value})} />
                    </div>
                    <span>on the</span>
                    
                    {this.props.dayInWeek &&<Select
                    value='Option 2'
                    inlineLabel={true}
                    labelHidden
                    onChange={(value) => false} label={''}>
                        <Option value='First'>First</Option>
                        <Option value='Second'>Second</Option>
                        <Option value='Third'>Third</Option>
                        <Option value='Last'>Last</Option>
                    </Select>}
                    
                    {this.props.weeks && <Select
                    value='Option 2'
                    inlineLabel={true}
                    labelHidden
                    onChange={(value) => false} label={''}>
                        <Option value='Monday'>Monday</Option>
                        <Option value='Tuesday'>Tuesday</Option>
                        <Option value='Wednesday'>Wednesday</Option>
                        <Option value='Thursday'>Thursday</Option>
                        <Option value='Friday'>Friday</Option>
                        <Option value='Saturday'>Saturday</Option>
                        <Option value='Sunday'>Sunday</Option>
                        <Option value='Day'>Day</Option>
                        <Option value='Weekend day'>Weekend day</Option>
                    </Select>}
                    
                    {this.props.months && <><span>of</span><Select
                        value='Option 2'
                        inlineLabel={true}
                        labelHidden
                        onChange={(value) => false} label={''}>
                        <Option value='Jan'>Jan</Option>
                        <Option value='Feb'>Feb</Option>
                        <Option value='Mar'>Mar</Option>
                        <Option value='Apr'>Apr</Option>
                        <Option value='May'>May</Option>
                        <Option value='Jun'>Jun</Option>
                        <Option value='Jul'>Jul</Option>
                        <Option value='Aug'>Aug</Option>
                        <Option value='Sep'>Sep</Option>
                        <Option value='Oct'>Oct</Option>
                        <Option value='Nov'>Nov</Option>
                        <Option value='Dec'>Dec</Option>
                    </Select></>}
                    
                </div>
            </div>
        );
    }
}
function daysInMonth(arg0: number, arg1: number): any {
    throw new Error('Function not implemented.');
}

function month(month: any, year: any) {
    throw new Error('Function not implemented.');
}

