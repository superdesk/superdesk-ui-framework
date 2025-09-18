import * as React from 'react';
import {assertNever} from '../helpers';
import {IPropsTooltipV2, TooltipV2} from './TooltipV2';
import {Placement} from 'popper.js';

function flowToPlacement(flow: IPropsLegacy['flow']): Placement | undefined {
    switch (flow) {
        case undefined:
            return undefined;
        case 'top':
            return 'top';
        case 'right':
            return 'right';
        case 'down':
            return 'bottom';
        case 'left':
            return 'left';
        default:
            return assertNever(flow);
    }
}

interface IPropsLegacy {
    text: string | undefined | null;
    flow?: 'top' | 'left' | 'right' | 'down'; // defaults to 'top'
    content?: never; // added for discriminated union support with IPropsTooltipV2
}

type IProps = IPropsTooltipV2 | IPropsLegacy;

export class Tooltip extends React.PureComponent<IProps> {
    render() {
        if (this.props.content != null) {
            return <TooltipV2 {...this.props} />;
        } else {
            // backwards compatibility for legacy props
            return (
                <TooltipV2 content={this.props.text ?? ''} placement={flowToPlacement(this.props.flow)}>
                    {({attributes}) => (
                        <div {...attributes} style={{display: 'inline-flex'}}>
                            {this.props.children}
                        </div>
                    )}
                </TooltipV2>
            );
        }
    }
}
