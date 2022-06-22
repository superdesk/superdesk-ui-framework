import * as React from 'react';
import classNames from 'classnames';
import { Icon } from './Icon';
// import * as PanelElements from '../../app-typescript/components/Layouts/Panel';

interface IProps {
    hour?: any;
    minute?: any;
    second?: any;
}

interface IState {
    hour: any;
    minute: any;
    second: any;
}

export class DurationInput extends React.PureComponent<IProps, IState> {
    hourRef;
    minuteRef;
    secondRef;
    constructor(props: IProps) {
        super(props);
        this.state = {
            hour: this.props.hour ?? 0,
            minute: this.props.minute ?? 0,
            second: this.props.second ?? 0,
        };

        this.hourRef = React.createRef();
        this.minuteRef = React.createRef();
        this.secondRef = React.createRef();

    }

    componentDidUpdate(prevProps, prevState) {
        if (this.state.hour !== prevState.hour) {
            if (this.hourRef.current.value > 24) {
                this.setState({
                    hour: 0,
                });
            }
            if (this.minuteRef.current.value < 0) {
                this.setState({
                    hour: 24,
                });
            }
        }
        if (this.state.minute !== prevState.minute) {
            if (this.minuteRef.current.value > 59) {
                this.setState({
                    hour: this.state.hour + 1,
                    minute: 0,
                });
            }
            if (this.minuteRef.current.value < 0) {
                this.setState({
                    hour: this.state.hour > 0 ? this.state.hour - 1 : this.state.hour,
                    minute: 59,
                });
            }
        }
        if (this.state.second !== prevState.second) {
            if (this.secondRef.current.value > 59) {
                this.setState({
                    minute: this.state.minute + 1,
                    second: 0,
                });
            }
            if (this.secondRef.current.value < 0) {
                this.setState({
                    minute: this.state.minute - 1,
                    second: 59,
                });
            }
        }
      }

    render() {
        let classes = classNames('sd-dropzone__drop-target', {
            'sd-dropzone__drop-target--ondragover': this.state.hour,
        });

        return (
            <div className='duration-input'>
                <input
                max={24}
                type='number'
                value={this.state.hour}
                onChange={(e) => this.setState({hour: e.target.value})}
                ref={this.hourRef}/>
                <span>h</span>

                <input
                max={60}
                type='number'
                value={this.state.minute}
                onChange={(e) => this.setState({minute: e.target.value})}
                ref={this.minuteRef}/>
                <span>m</span>

                <input
                max={60}
                type='number'
                value={this.state.second}
                onChange={(e) => this.setState({second: e.target.value})}
                ref={this.secondRef}/>
                <span>s</span>
            </div>
        );
    }
}
