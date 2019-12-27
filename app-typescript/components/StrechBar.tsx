import * as React from 'react';

export class StrechBar extends React.PureComponent {
    render() {
        return(
            <div className='subnav__stretch-bar'>
                {this.props.children}
            </div>
        );
    }
}
