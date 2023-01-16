import * as React from 'react';
import { Chips } from '@superdesk/primereact/chips';
import '../../app/styles/form-elements/_tag-input.scss';

interface IProps {
    value: Array<string>;
    onChange(value: Array<string>): void;
    placeholder: string;
}

export class TagInput extends React.Component<IProps> {
    render() {
        const {onChange, value, placeholder} = this.props;

        return (
            <Chips
                className="p-chips-token-label p-chips-input-token p-chips-token-icon p-chips-multiple-container"
                allowDuplicate={false}
                separator=","
                onChange={({value}) => onChange(value)}
                value={value}
                placeholder={placeholder}
            />
        );
    }
}
