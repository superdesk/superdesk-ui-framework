import * as React from 'react';
import nextId from "react-id-generator";
interface IProps {
    text: string;
    flow?: 'top' | 'left' | 'right' | 'down'; // defaults to 'top'
}

export class Tooltip extends React.PureComponent<IProps> {
    htmlId = nextId();
    componentDidMount() {
        let tooltip = document.getElementById('t' + this.htmlId);
        tooltip?.setAttribute('data-sd-tooltip', this.props.text);
        if (this.props.flow) {
            tooltip?.setAttribute('data-flow', this.props.flow);
        }
    }
    render() {
        if (React.isValidElement(this.props.children)) {
            console.log(this.props.children);
            return (
                React.cloneElement(this.props.children, { id: 't' + this.htmlId })
            );
        } else {
            return (
                <React.Fragment />
            );
        }
    }
}
