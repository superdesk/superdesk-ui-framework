import * as React from 'react';

interface IProps {
    children?: React.ReactNode;
}

export class OverlayPanel extends React.PureComponent<IProps> {
    render() {
        return (
            <div className='sd-main-content-grid__overlay'>
                <div className='sd-overlay-panel sd-overlay-panel--dark-ui'>
                    <div className='side-panel side-panel--shadow-right side-panel--dark-ui'>
                        {this.props.children}
                    </div>
                </div>
            </div>
        );
    }
}
