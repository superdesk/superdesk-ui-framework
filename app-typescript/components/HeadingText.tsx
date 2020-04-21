import * as React from 'react';

interface IProps {
    heading: string;
    text: string;
    timestamp?: Date;
}

export class HeadingText extends React.PureComponent<IProps> {
    render() {
        return (
            <div className='sd-toast__message'>
                <div className='sd-toast__message-header'>
                    <h4 className='sd-toast__heading'>{this.props.heading}</h4>
                    {this.props.timestamp ?
                        <time>{this.props.timestamp.toLocaleString()}</time> : null}
                </div>
                <p>{this.props.text}</p>
            </div>
        );
    }
}
