import * as React from 'react';

interface IProps {
	text?: string;
    sizes?: string;
    expanded?: boolean;
    types?: string;
    hollow?: boolean;
    textOnly?: boolean;
    disabled?: boolean;
    icons?: string;
    dark?: boolean;
    iconBtn?: boolean;
    circle?: boolean;
}

export class Button extends React.Component<IProps> {
    render() {
    	let classes = [];
        this.props.iconBtn ? classes.push('icn-btn') : classes.push('btn');
        this.props.expanded ? classes.push('btn--expanded') : null;
    	this.props.sizes ? classes.push('btn--' + this.props.sizes) : null;
    	this.props.types ? classes.push('btn--' + this.props.types) : null;
    	this.props.hollow ? classes.push('btn--hollow') : null;
    	this.props.textOnly ? classes.push('btn--text-only') : null;
    	this.props.disabled ? classes.push('btn--disabled') : null;
    	!this.props.text ? classes.push('btn--icon-only') : null;
        this.props.dark ? classes.push('btn--ui-dark') : null;
        this.props.circle ? classes.push('btn--icon-only-circle'): null;

        return (
            <React.Fragment>
                <button className={classes.join(' ')}>
                    {this.props.icons ? <i className = {'icon-' + this.props.icons}></i> : null}
                    {this.props.text}
                </button>
            </React.Fragment>
        );
    }
}