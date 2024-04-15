import * as React from 'react';
import classNames from 'classnames';
import { DragHandleDots } from './DragHandleDots';

interface IProps {
    blank?: boolean;
    dotRows?: '4' | '5' | '6' | '7' | '8' | '10'; 
    dotsInRow?: '2' | '3' | '4' | '5';
    dotColor?: 'light' | 'dark'; // The default is the theme text color, this is an explicit override.
    className?: string;
}

const dotSize = 4; // Size of the single dot image (OneDot.svg) that gets repeated and forms the dotted pattern.

export class DragHandle extends React.PureComponent<IProps> {
    render() {
        let classes = classNames('drag-handle-wrapper', {
            [`drag-handle-wrapper--boxed`]: !this.props.blank,
            'drag-handle-wrapper--blank': this.props.blank,

        }, this.props.className);
        const calcSize=(numberOfDots:string)=> {
            return Number(numberOfDots) * dotSize - (dotSize/2);
        };
        return (
            <div className={classes}>
                <DragHandleDots 
                style={{width: calcSize(this.props.dotsInRow ?? '2'), height: calcSize(this.props.dotRows ?? '4')}}
                color={this.props.dotColor}/>
            </div>
        );
    }
}
