import * as React from 'react';

interface IProps {
    text: string;
    types: string;
    square: boolean;
    
}

export class TagLabels extends React.Component<IProps> {
    render() {
    	let classes = ['tag-label'];
        this.props.types ? classes.push('tag-label--' + this.props.types) : null
        this.props.square ? classes.push('tag-label--square') : null

        return (
            <div className = {classes.join(' ')}>
                 {this.props.text}
                 <button className = 'tag-label__remove'>
                     <i className = 'icon-close-small'></i>
                 </button>
            </div>
        );
    }
}
