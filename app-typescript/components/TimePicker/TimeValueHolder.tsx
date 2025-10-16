import * as React from 'react';
import {classnames} from '@sourcefabric/common';

interface IProps {
    isActive?: boolean;
    value: string;
    onClick(event: React.MouseEvent<HTMLSpanElement>): void;
}

export class TimeValueHolder extends React.PureComponent<IProps> {
    private spanEl: React.RefObject<HTMLSpanElement>;

    constructor(props: IProps) {
        super(props);

        this.spanEl = React.createRef();
    }

    public scrollToValue() {
        this.spanEl.current?.scrollIntoView({block: 'start', behavior: 'smooth'});
    }

    render() {
        return (
            <span
                ref={this.props.isActive ? this.spanEl : undefined}
                onClick={this.props.onClick}
                className={classnames('p-1 time-unit', {
                    'time-unit-highlight': this.props.isActive ?? false,
                })}
            >
                {this.props.value}
            </span>
        );
    }
}
