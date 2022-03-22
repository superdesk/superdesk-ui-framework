import * as React from 'react';
import classNames from 'classnames';
import {FormLabel} from './Form/FormLabel';

interface IProps {
    orientation?: 'horizontal' | 'vertical'; // defaults to 'horizontal'
    grid?: boolean;
    align?: 'start' | 'end' | 'center' | 'inline'; // defaults to 'left'
    padded?: boolean; // adds predefined space to the side based on the alignment and orientation.
    groupLabel?: string;
    groupLabelledBy?: string;
}

export class CheckButtonGroup extends React.PureComponent<IProps> {
    render() {
        let classes = classNames('sd-check-button__group', {
            [`sd-check-button__group--${this.props.align}`]: this.props.align,
            [`sd-check-button__group--start`]: !this.props.grid && this.props.align === undefined,
            [`button-group--vertical`]: this.props.orientation === 'vertical',
            [`sd-check-button__group--grid`]: this.props.grid,
            [`sd-check-button__group--padded`]: this.props.padded === true,
        });

        return (
            <>
                {this.props.groupLabel ?
                    <div className='sd-check-button__group-wrapper' aria-labelledby={this.props.groupLabelledBy}>
                        <FormLabel forId={'group'} text={this.props.groupLabel} />
                        <div className={classes}>
                            {this.props.children}
                        </div>
                    </div>
                    :
                    <div className={classes}>
                        {this.props.children}
                    </div>
                }
            </>
        );
    }
}
