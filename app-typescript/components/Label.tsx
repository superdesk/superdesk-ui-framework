import * as React from 'react';
import classNames from 'classnames';
interface IProps {
    text: string;
    link?: string;
    type?: 'default' | 'primary' | 'success' | 'warning' | 'alert' | 'highlight' | 'sd-green';
    color?: string; //  https://ui-framework.superdesk.org/#/components/colors
    size?: 'small' | 'normal' | 'large'; // defaults to 'normal'
    onClick?(): void;
    noTransform?: boolean;
    hexColor?: string;
    style?: 'filled' | 'hollow' | 'translucent'; // defaults to 'filled'
}
export class Label extends React.PureComponent<IProps> {
    render() {
        let classes = classNames('label', {
            [`label--${this.props.size}`]: this.props.size !== 'normal' && this.props.size !== undefined,
            'label--no-transform': this.props.noTransform,
            [`label--${this.props.type}`]: this.props.type !== undefined && !this.props.color,
            [`${this.props.color}`]: this.props.color !== undefined && !this.props.type && !this.props.style,
            [`label--${this.props.style}`]: this.props.style !== 'filled' && this.props.style !== undefined,
            [`hollow-${this.props.color}`]: this.props.color && this.props.style === 'hollow',
        });
        if (this.props.link || this.props.onClick) {
            if (this.props.style === 'hollow') {
                return (
                    <a className={classes} 
                        href={this.props.link}
                        onClick={this.props.onClick}
                        style={{color: this.props.hexColor, borderColor: this.props.hexColor}}>
                        {this.props.text}
                    </a>
                );
            } else if (this.props.style === 'translucent') {
                return (
                    <a className={classes}
                        href={this.props.link}
                        onClick={this.props.onClick}
                        style={{color: this.props.hexColor, backgroundColor: `${this.props.hexColor}33`}}>
                        {this.props.text}
                    </a>
                );
            } else  {
                return (
                    <a className={classes}
                        href={this.props.link}
                        onClick={this.props.onClick} style={{backgroundColor: this.props.hexColor}}>
                        {this.props.text}
                    </a>
                );
            }
            
        } else {
             if (this.props.style === 'hollow') {
                return (
                    <span className={classes}
                        style={{color: this.props.hexColor, borderColor: this.props.hexColor}}>
                        {this.props.text}
                    </span>
                );
            } else if (this.props.style === 'translucent') {
                return (
                    <span className={classes}
                        style={{color: this.props.hexColor, backgroundColor: `${this.props.hexColor}33`}}>
                        {this.props.text}
                    </span>
                );
            } else {
                return (
                    <span className={classes} style={{backgroundColor: this.props.hexColor}}>
                        {this.props.text}
                    </span>
                );
            }
        }
    }
}
