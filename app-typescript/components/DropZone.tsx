import * as React from 'react';
import classNames from 'classnames';
import { Icon } from './Icon';
import { Button } from './Button';
interface IProps {
    icon?: boolean;
    text: string;
    actionText: string;
    heading?: string;
    className?: string;
    width?: 'auto' | 'full';
    type?: 'default' | 'primary' | 'highlight' | 'darker';
    state?: 'normal' | 'active'; // defaults to 'normal'
    value?: 'button' | 'submit' | 'reset'; // defaults to 'button'
    // onClick(): void;
}
export class DropZone extends React.PureComponent<IProps> {
    render() {
        let classes = classNames('sd-dropzone__drop-target', {
            'sd-dropzone__drop-target--active': this.props.state === 'active',
            [`sd-dropzone__drop-target--${this.props.type}`]: this.props.type,
        }, this.props.className);
        return (
            <div className={classes}>
                <div className='sd-dropzone__target-border'></div>
                {this.props.icon ?
                    <figure className='sd-dropzone__icon' aria-hidden='true'>
                        <Icon name='upload-alt' size='big' />
                    </figure> : null
                }
                {this.props.heading ?
                    <h4 className='sd-dropzone__heading'>{this.props.heading}</h4> : null
                }
                <p className='sd-dropzone__description'>{this.props.text}</p>
                <Button text={this.props.actionText} style='hollow' onClick={() => false} />
            </div>
        );
    }
}
