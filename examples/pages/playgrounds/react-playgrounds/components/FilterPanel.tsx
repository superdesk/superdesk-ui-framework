import * as React from 'react';

interface IProps {
    children?: React.ReactNode;
}

export class FilterPanel extends React.PureComponent<IProps> {
    render() {
        return (
            <div className='sd-main-content-grid__filter'>
                <div className='side-panel__container'>
                    <div className='side-panel side-panel--transparent side-panel--shadow-left'>
                        {this.props.children}
                    </div>
                </div>
            </div>
        );
    }
}
