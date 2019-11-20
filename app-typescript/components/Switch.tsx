import * as React from 'react';
import classNames from 'classnames';

interface IProps {
    value: boolean;
    disabled?: boolean;
    onChange(nextValue: boolean): void;
}

export class Switch extends React.Component<IProps> {
    constructor(props: IProps) {
        super(props);
        this.state = {
            checked: this.props.value || false,
        };

        this.onClick = this.onClick.bind(this);
    }

    onClick() {
        if (this.props.disabled) {
            return;
        }

        return this.props.onChange(!this.props.value);
    }

    render() {
        let classes = classNames('sd-toggle', {
            'checked': this.props.value,
            'disabled': this.props.disabled,
        });

        return (
            <span className={classes} onClick={this.onClick}>
                <span className="inner" />
            </span>
        );
    }
}
