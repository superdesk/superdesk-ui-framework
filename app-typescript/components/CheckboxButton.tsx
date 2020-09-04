import * as React from 'react';
import nextId from "react-id-generator";
interface IProps {
    checked: boolean;
    label: string;
    icon?: string;
    iconOnly?: boolean;
    disabled?: boolean;
    onChange(nextValue: boolean): void;
}

export class CheckboxButton extends React.PureComponent<IProps> {
    constructor(props: IProps) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }
    htmlId = nextId();
    handleChange() {
        if (this.props.disabled) {
            return;
        }
        this.props.onChange(!this.props.checked);
    }

    render() {
        return (
            <React.Fragment>
                <input type='checkbox' className='visuallyhidden' id={this.htmlId} />
                <span className={'sd-check-button' +
                    (this.props.disabled ? ' sd-check-new--disabled' :
                        (this.props.checked ? ' checked' : ''))}
                    onClick={this.handleChange}>
                    {this.props.icon ? <i className={`icon-${this.props.icon}`}></i> : null}
                    {this.props.disabled ?
                        (<label
                            className={'sd-check-button__text-label sd-label--disabled ' + (this.props.iconOnly ? 'visuallyhidden' : '')}
                            aria-label={this.props.iconOnly ? this.props.label : ''}
                            htmlFor={this.htmlId}>
                            {!this.props.iconOnly ? this.props.label : null}
                        </label>) :
                        (<label
                            className={'sd-check-button__text-label ' + (this.props.iconOnly ? 'visuallyhidden' : '')}
                            aria-label={this.props.iconOnly ? this.props.label : ''}
                            htmlFor={this.htmlId}>
                            {!this.props.iconOnly ? this.props.label : null}
                        </label>)}
                </span>
            </React.Fragment>
        );
    }
}
