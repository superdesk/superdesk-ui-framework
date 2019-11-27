import * as React from 'react';
import classNames from 'classnames';

interface IProps {
    children?: React.ReactNode;
    open?: boolean;
}

export class PreviewPanel extends React.Component<IProps> {
    render() {
        let classes = classNames('sd-main-content-grid__preview', {
            'open-preview': this.props.open,
        });
        return (
            <div className={classes}>
                <div className='side-panel__container'>
                    <div className='side-panel side-panel--shadow-right'>
                        <div className='side-panel__header'>
                            <div className='side-panel__tools'>
                                <a className='icn-btn'>
                                    <i className='icon-close-small'></i>
                                </a>
                            </div>
                            <ul className='nav-tabs'></ul>
                        </div>
                        <div className='side-panel__content'></div>
                        <div className='side-panel__footer'></div>
                    </div>
                </div>
            </div>
        );
    }
}
