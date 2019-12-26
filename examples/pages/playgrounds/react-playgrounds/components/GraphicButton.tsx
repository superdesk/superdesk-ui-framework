import * as React from 'react';
import {Redirect} from 'react-router-dom';

interface IGraphicButton {
    children?: never;
    graphic?: 'components' | 'design' | 'playground' | 'react';
    text?: string;
    link?: string;
    smallText?: string;
}

export class GraphicButton extends React.PureComponent<IGraphicButton> {
    constructor(props){
        super(props);
        this.onSubmit=this.onSubmit.bind(this);
    }
    onSubmit=() =>{
        window.location.href = this.props.link;
    }
    render() {
        return (
            <a className='docs-page__graphic-btn' onClick={this.onSubmit}>
                <figure className='docs-page__graphic-btn-graphic'>
                    <img src={'/illustration-small--' + this.props.graphic +'.svg'} />
                </figure>
                <label className='docs-page__graphic-btn-label'>
                    <span className='docs-page__text'>{this.props.text}</span>
                    <span className='docs-page__small-text'>{this.props.smallText}</span>
                </label>
            </a>
        );
    }
}