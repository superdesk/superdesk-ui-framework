import * as React from 'react';
import nextId from "react-id-generator";
import { Tooltip as PRTooltip } from '@superdesk/primereact/tooltip';
interface IProps {
    text: string;
    flow?: 'top' | 'left' | 'right' | 'down'; // defaults to 'top'
    appendToBody?: boolean;
    disabled?: boolean;
}

export const Tooltip: React.FC<IProps>  = ({appendToBody, children, disabled, ...otherProps}) =>
    disabled
    ? <React.Fragment>{children}</React.Fragment>
    : appendToBody
        ? <TooltipAppended {...otherProps}>{children}</TooltipAppended>
        : <TooltipBasic {...otherProps}>{children}</TooltipBasic>;

class TooltipBasic extends React.PureComponent<IProps> {
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
            const attrs = {id: 't' + this.htmlId};

            return (
                React.cloneElement(this.props.children, attrs)
            );
        } else {
            return (
                <React.Fragment />
            );
        }
    }
}

const TooltipAppended: React.FC<IProps> = ({children, flow, text}) => {
    const htmlId = nextId();
    const triggerId = "t" + htmlId;
    const position = flow === "down" ? "bottom" : flow;

    return (
        <React.Fragment>
            <PRTooltip target={"#" + triggerId} content={text} position={position ?? 'top'}/>
            {   React.isValidElement(children)
                    ? (() => {
                        const attrs = {id: triggerId};

                        return React.cloneElement(children, attrs);
                    })()
                    : <React.Fragment />
            }
        </React.Fragment>
    );
};
