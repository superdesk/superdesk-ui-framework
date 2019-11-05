import * as React from 'react';

interface IProps {
    text: string;
	link: boolean;
    size: string;
    transform: boolean;
    types: string;
    hollow: boolean;
    
}

export class Labels extends React.Component<IProps> {
    render() {
    	let classes = ['label'];
    	this.props.size ? classes.push('label--' + this.props.size) : null
        this.props.transform ? null : classes.push('label--no-transform')
        this.props.types ? classes.push('label--' + this.props.types) : null
        this.props.hollow ? classes.push('label--hollow') : null

        return (
            <div>
                {this.props.link? <a href= {this.props.link} className = {'label--' + this.props.types}>{this.props.text}</a> : <span className = {classes.join(' ')}>{this.props.text}</span>}
            </div>
        );
    }
}
