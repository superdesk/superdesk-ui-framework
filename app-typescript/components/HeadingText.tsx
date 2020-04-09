import * as React from 'react';

interface IProps {
    heading: string;
    text: string;
    timestamp?: Date;
}

export class HeadingText extends React.PureComponent<IProps> {
    render() {
        return (
            <React.Fragment>
                <div className='sd-toast__message-header'>
                    <h4 className='sd-toast__heading'>{this.props.heading}</h4>
                    {this.props.timestamp ?
                        <time>{this.props.timestamp.toLocaleString()}</time> : null}
                </div>
                <p>{this.props.text}</p>
            </React.Fragment>
        );
    }
}
