import * as React from 'react';
import classNames from 'classnames';
import { Icon } from './Icon';
import { Tooltip } from './Tooltip';
interface IProps {
    id?: string;
    ariaValue: string;
    toolTipFlow?: 'top' | 'left' | 'right' | 'down';
    type?: 'default' | 'primary' | 'highlight' | 'darker';
    state?: 'normal' | 'active'; // defaults to 'normal'
    value?: 'button' | 'submit' | 'reset'; // defaults to 'button'
    onClick(): void;
}
export class CreateButton extends React.PureComponent<IProps> {
    static defaultProps = {
        toolTipFlow: 'left',
    };
    render() {
        let classes = classNames('sd-create-btn', {
            'sd-navbtn--active': this.props.state === 'active',
            [`sd-navbtn--${this.props.type}`]: this.props.type,
        });
        const value = this.props.value === undefined ? 'button' : this.props.value;
        return (
            <Tooltip text={this.props.ariaValue} flow={this.props.toolTipFlow}>
                <button type={value}
                    className={classes}
                    tabIndex={0}
                    onClick={this.props.onClick}
                    aria-label={this.props.ariaValue}
                    id={this.props.id}>
                        <Icon name="plus-large" />
                        <span className="circle"></span>
                </button>
            </Tooltip>
        );
    }
}
