import * as React from 'react';
import classNames from 'classnames';

interface IProps {
    value?: boolean;
    disabled?: boolean;
    onChange(nextValue: boolean): void;
}

interface IState {
    checked: boolean;
}

export class Switch extends React.Component<IProps, IState> {
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

        this.setState((state) => ({
            checked: !state.checked,
        }));

        return this.props.onChange(this.state.checked);
    }

    render() {
        let classes = classNames('sd-toggle', {
            'checked': this.state.checked,
            'disabled': this.props.disabled,
        });

        return (
            <span className={classes} onClick={this.onClick}>
                <span className="inner" />
            </span>
        );
    }
}
