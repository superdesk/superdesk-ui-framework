import * as React from 'react';

interface IProps {
    children?: React.ReactNode;
}

export class PreviewPanel extends React.Component<IProps> {
    render() {
        return (
            <div className='sd-main-content-grid__preview'>
                <div className='side-panel__container'>
                    <div className='side-panel side-panel--shadow-right'>
                        {this.props.children}
                    </div>
                </div>
            </div>
        );
    }
}
