import * as React from 'react';
import nextId from 'react-id-generator';
import tippy, {Instance, Placement} from 'tippy.js';
import {assertNever} from '../helpers';

interface IProps {
    text: string | undefined | null;
    flow?: 'top' | 'left' | 'right' | 'down'; // defaults to 'top'
    children(options: {attributes: {[name: string]: string}}): React.ReactNode;
}

function flowToPlacement(flow: IProps['flow']): Placement | undefined {
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

const tooltipAttributeName = 'data-with-tooltip';
const getTooltipSelector = (value: string) => `[${tooltipAttributeName}=${value}]`;

export class WithTooltip extends React.PureComponent<IProps> {
    private id: string;
    private instance: Instance | null;

    constructor(props: IProps) {
        super(props);

        this.id = nextId();

        this.instance = null;
    }

    private setupTooltip() {
        const placement = flowToPlacement(this.props.flow ?? 'top');
        const content = this.props.text;

        if (this.instance == null) {
            this.instance = tippy(getTooltipSelector(this.id), {
                placement: placement,
            })[0];

            if (this.instance == null) {
                // prevent crashing in unit tests
                return;
            }

            if (content != null) {
                this.instance.setContent(content);
            } else {
                this.instance.hide();
                this.instance.disable();
            }
        }

        const willBeEnabled = content != null;
        const isEnabled = this.instance.state.isEnabled;

        if (isEnabled && willBeEnabled) {
            this.instance.setContent(content);
        } else if (isEnabled) {
            // enabled now, but needs to be disabled
            this.instance.hide();
            this.instance.disable();
        } else if (willBeEnabled) {
            // disabled now, but needs to be enabled
            this.instance.setContent(content);
            this.instance.enable();
            this.instance.show();
        }
    }

    componentDidMount(): void {
        this.setupTooltip();
    }

    componentDidUpdate(): void {
        this.setupTooltip();
    }

    render() {
        return this.props.children({attributes: {[tooltipAttributeName]: this.id}});
    }
}

export class Tooltip extends React.PureComponent<Omit<IProps, 'children'>> {
    render() {
        return (
            <WithTooltip text={this.props.text} flow={this.props.flow}>
                {({attributes}) => (
                    <div {...attributes} style={{display: 'inline-flex'}}>
                        {this.props.children}
                    </div>
                )}
            </WithTooltip>
        );
    }
}
