import * as React from 'react';
import classNames from 'classnames';
import {Icon} from '../Icon';

interface IProps {
    arialabel?: string;
    ariaControls?: string;
    onClick(): void;
    active?: boolean;
    disabled?: boolean;
}

export class BottomBarAction extends React.PureComponent<IProps> {
    render() {
        let classes = classNames(
            'sd-bottom-bar__action',
            {
                'sd-bottom-bar__action--active': this.props.active,
                'sd-bottom-bar__action--disabled': this.props.disabled,
            }
        );
        return (
            <button type='button'
                className={classes}
                tabIndex={0}
                onClick={this.props.onClick}
                aria-label={this.props.arialabel}
                aria-controls={this.props.ariaControls}
                aria-expanded={this.props.active}
                >
                    <Icon type='white' name='th-large' />
            </button>
        );
    }
}
