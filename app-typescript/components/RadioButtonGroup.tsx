import * as React from 'react';
import classNames from 'classnames';
import nextId from "react-id-generator";
import {FormLabel} from './Form/FormLabel';
interface IProps {
    value?: string;
    group?: {
        orientation?: 'horizontal' | 'vertical'; // defaults to 'horizontal'
        grid?: boolean;
        align?: 'start' | 'end' | 'center' | 'inline'; // defaults to 'left'
        padded?: boolean; // adds predefined space to the side based on the alignment and orientation.
        groupLabel?: string;
        groupLabelledBy?: string;
    };
    options: Array<{
        label: string,
        value: string,
        icon?: string;
        labelHidden?: boolean,
        disabled?: boolean
    }>;
    required?: boolean;
    onChange(nextValue: string): void;

}
export class RadioButtonGroup extends React.Component<IProps> {
    htmlId = nextId();

    constructor(props: IProps) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(item: any) {
        if (!item.disabled) {
            this.props.onChange(item.value);
        }
    }

    render() {
        let classes = classNames('sd-check-button__group', {
            [`sd-check-button__group--${this.props.group?.align}`]: this.props.group?.align,
            [`sd-check-button__group--start`]: !this.props.group?.grid && this.props.group?.align === undefined,
            [`button-group--vertical`]: this.props.group?.orientation === 'vertical',
            [`sd-check-button__group--grid`]: this.props.group?.grid,
            [`sd-check-button__group--padded`]: this.props.group?.padded === true,
        });
        return (
            <React.Fragment>
                {!this.props.group?.groupLabel ?
                    <div role="radiogroup" className={classes} aria-labelledby={this.props.group?.groupLabelledBy}>{
                        this.props.options.map((item: any, index: number) => (
                            <span className="sd-check-button sd-check-button--native"
                                key={index}
                                tabIndex={-1}>

                                <input type="radio" className="sd-check-button__input"
                                    id={this.htmlId + index}
                                    tabIndex={0}
                                    name={this.htmlId}
                                    onChange={() => this.handleChange(item)}
                                    disabled={item.disabled}
                                    required={this.props.required} />

                                <label className="sd-check-button__text-label" htmlFor={this.htmlId + index}
                                    aria-label={item.labelHidden ? item.label : undefined}>

                                    { item.icon ?  <i className={`icon-${item.icon}`} aria-hidden="true" /> : null }
                                    { !item.labelHidden || !item.icon ?
                                        <span className="sd-check-button__text-label-inner">{item.label}</span> : null }
                                </label>
                            </span>
                        ))
                    }</div>
                : null }
                {this.props.group?.groupLabel ?
                    <div className='sd-check-button__group-wrapper'>

                        <FormLabel forId={this.htmlId + 'group'} text={this.props.group.groupLabel} />
                        <div role="radiogroup" id={this.htmlId + 'group'} className={classes}>{
                            this.props.options.map((item: any, index: number) => (
                                <span className="sd-check-button sd-check-button--native"
                                    key={index}
                                    tabIndex={-1}>

                                    <input type="radio" className="sd-check-button__input"
                                        id={this.htmlId + index}
                                        tabIndex={0}
                                        name={this.htmlId}
                                        onChange={() => this.handleChange(item)}
                                        disabled={item.disabled}
                                        required={this.props.required} />

                                    <label className="sd-check-button__text-label" htmlFor={this.htmlId + index}
                                        aria-label={item.labelHidden ? item.label : undefined}>

                                        { item.icon ?  <i className={`icon-${item.icon}`} aria-hidden="true" /> : null }
                                        { !item.labelHidden || !item.icon ?
                                            <span className="sd-check-button__text-label-inner">
                                                {item.label}
                                            </span> : null }
                                    </label>
                                </span>
                            ))
                        }</div>
                    </div>
                : null }
            </React.Fragment>
        );
    }
}
