import * as React from 'react';

interface IProps {
    children?: React.ReactNode;
    open?: boolean;
}

export class AuthoringContent extends React.PureComponent<IProps> {
    render() {
        if (this.props.open) {
            return (
                <React.Fragment>
                    <div className='sd-content-wrapper__content-splitter'></div>
                    <div className='sd-content-wrapper__authoring-content-area'>
                        <div className='sd-authoring-page'>
                            <div className='sd-authoring-page__header'>
                                <div className='subnav subnav--darker'>
                                    <div className="subnav__stretch-bar">
                                        <figure className="avatar">VS</figure>
                                    </div>
                                    <div className='subnav__stretch-bar subnav__stretch-bar--right'>
                                        <button className='btn'>Cancel</button>
                                        <button className='btn btn--primary'>Save</button>
                                    </div>
                                    <button className='navbtn'>
                                        <i className='big-icon--minimize'></i>
                                    </button>
                                    <button className='navbtn'>
                                        <i className='icon-dots-vertical'></i>
                                    </button>
                                    <button className='navbtn navbtn--highlighted'>
                                        <i className='big-icon--send-to'></i>
                                    </button>
                                </div>
                            </div>
                            <div className='sd-authoring-page__main-container'></div>
                            <div className='sd-authoring-page__side-tabs sd-sidetab-menu sd-sidetab-menu--right sd-sidetab-menu--static'>
                                <ul>
                                    <li data-sd-tooltip='Info' data-flow='left'>
                                        <a className='sd-sidetab-menu__btn'>
                                            <i className='sd-sidetab-menu__main-icon big-icon--info'></i>
                                            <i className='sd-sidetab-menu__helper-icon icon-close-small'></i>
                                        </a>
                                    </li>
                                    <li data-sd-tooltip='Find & Replace' data-flow='left'>
                                        <a className='sd-sidetab-menu__btn'>
                                            <i className='sd-sidetab-menu__main-icon big-icon--find-replace'></i>
                                            <i className='sd-sidetab-menu__helepr-icon icon-close-small'></i>
                                        </a>
                                    </li>
                                    <li data-sd-tooltip='Comments' data-flow='left'>
                                        <a className='sd-sidetab-menu__btn'>
                                            <i className='sd-sidetab-menu__main-icon big-icon--chat'></i>
                                            <i className='sd-sidetab-menu__helepr-icon icon-close-small'></i>
                                        </a>
                                    </li>
                                    <li data-sd-tooltip='Versions / History' data-flow='left'>
                                        <a className='sd-sidetab-menu__btn'>
                                            <i className='sd-sidetab-menu__main-icon big-icon--history'></i>
                                            <i className='sd-sidetab-menu__helepr-icon icon-close-small'></i>
                                        </a>
                                    </li>
                                    <li data-sd-tooltip='Macros' data-flow='left'>
                                        <a className='sd-sidetab-menu__btn'>
                                            <i className='sd-sidetab-menu__main-icon big-icon--macro'></i>
                                            <i className='sd-sidetab-menu__helepr-icon icon-close-small'></i>
                                        </a>
                                    </li>
                                    <li data-sd-tooltip='Macros' data-flow='left'>
                                        <a className='sd-sidetab-menu__btn'>
                                            <i className='sd-sidetab-menu__main-icon big-icon--comments'></i>
                                            <i className='sd-sidetab-menu__helepr-icon icon-close-small'></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className='sd-authoring-page__publish-container'></div>
                        </div>
                    </div>
                </React.Fragment>
            )
        } else {
            return null;
        }
    }
}
