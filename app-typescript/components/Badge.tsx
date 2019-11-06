import * as React from 'react';

interface IProps {
    text: string;
    types: string;
    square: boolean;
    
}

export class Badge extends React.Component<IProps> {
    render() {
    	let classes = ['badge'];
        this.props.types ? classes.push('badge--' + this.props.types) : null
        this.props.square ? classes.push('badge--square') : null

        return (
            <div>
                 <span className = {classes.join(' ')}>{this.props.text}</span>
            </div>
        );
    }
}
