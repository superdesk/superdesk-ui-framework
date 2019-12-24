import * as React from 'react';

interface IProps {
    multi: boolean;
}

export class SlidingToolbar extends React.PureComponent<IProps> {
    render() {
        return (
            <div className='subnav__sliding-toolbar'>
                {this.props.children}
            </div>
        );
    }
}
