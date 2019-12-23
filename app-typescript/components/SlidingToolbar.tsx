import * as React from 'react';

interface IProps {
    multi: boolean;
}

export class SlidingToolbar extends React.PureComponent<IProps> {
    render() {
        return (
            <div className={this.props.multi ? 'multi-action-bar' : 'action-bar'}>
                {this.props.children}
            </div>
        );
    }
}
