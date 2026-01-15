import * as React from 'react';
import {Label} from './Label';

type StateType =
    | 'draft'
    | 'ingested'
    | 'routed'
    | 'fetched'
    | 'submitted'
    | 'in_progress'
    | 'published'
    | 'spiked'
    | 'scheduled'
    | 'corrected'
    | 'killed'
    | 'recalled'
    | 'unpublished'
    | 'correction'
    | 'being_corrected';

interface IStateColorConfig {
    type?: 'default' | 'primary' | 'success' | 'warning' | 'alert' | 'highlight' | 'sd-green';
    color?: string;
    style?: 'filled' | 'hollow';
}

interface IProps {
    state: StateType;
    text: string;
    onClick?: () => void;
    color?: string;
    noTransform?: boolean;
    size?: 'small' | 'normal' | 'large';
    mappingOverride?: Partial<Record<StateType, IStateColorConfig>>;
}

export class StateLabel extends React.PureComponent<IProps> {
    private stateColorMap: Record<StateType, IStateColorConfig> = {
        draft: {type: 'default', style: 'hollow'},
        ingested: {type: 'primary', style: 'hollow'},
        routed: {type: 'primary', style: 'hollow'},
        fetched: {type: 'primary', style: 'hollow'},
        submitted: {type: 'warning', style: 'hollow'},
        in_progress: {type: 'warning', style: 'hollow'},
        published: {type: 'success', style: 'hollow'},
        spiked: {type: 'alert', style: 'hollow'},
        recalled: {type: 'alert', style: 'hollow'},
        killed: {type: 'alert', style: 'hollow'},
        scheduled: {type: 'highlight', style: 'hollow'},
        corrected: {type: 'sd-green', style: 'hollow'},
        correction: {color: 'pink--500', style: 'filled'},
        being_corrected: {color: 'pink--500', style: 'hollow'},
        unpublished: {type: 'alert', style: 'hollow'},
    };

    private getColorConfig(state: StateType): IStateColorConfig {
        const {mappingOverride} = this.props;
        const override = mappingOverride?.[state];
        const defaultConfig = this.stateColorMap[state] || {type: 'default'};

        return override ? {...defaultConfig, ...override} : defaultConfig;
    }

    render() {
        const {state, text, onClick, color, noTransform, size} = this.props;
        const colorConfig = this.getColorConfig(state);

        return (
            <Label
                text={text}
                type={color ? undefined : colorConfig.type}
                color={color || colorConfig.color}
                style={colorConfig.style || 'hollow'}
                onClick={onClick}
                noTransform={noTransform}
                size={size}
            />
        );
    }
}
