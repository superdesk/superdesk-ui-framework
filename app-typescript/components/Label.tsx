import * as React from 'react';

interface IProps {
    text?: string;
	link?: string;
    sizes?: string;
    noTransform?: boolean;
    types?: string;
    hollow?: boolean;
}

export class Label extends React.Component<IProps> {
    render() {
    	let classes = ['label'];
    	this.props.sizes ? classes.push('label--' + this.props.sizes) : null
        this.props.noTransform ? classes.push('label--no-transform') : null
        this.props.types ? classes.push('label--' + this.props.types) : null
        this.props.hollow ? classes.push('label--hollow') : null

        return (
            <React.Fragment>
                {this.props.link? <a href= {this.props.link} className = {classes.join(' ')}>{this.props.text}</a> : <span className = {classes.join(' ')}>{this.props.text}</span>}
            </React.Fragment>
        );
    }
}
