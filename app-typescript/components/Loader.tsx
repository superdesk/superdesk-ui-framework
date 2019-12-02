import * as React from 'react';

interface IProps {
    overlay?: boolean;
}

export class Loader extends React.Component<IProps> {
    render() {

        if (this.props.overlay) {
            return (
                <div className='sd-loader'></div>
            );
        } else {
            return null;
        }
    }
}
