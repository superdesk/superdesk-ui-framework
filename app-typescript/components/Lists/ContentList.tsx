import * as React from 'react';
import classNames from 'classnames';
import { Label } from '../Label';
import { IconLabel } from '../IconLabel';
import { IconButton } from '../IconButton';

interface IPropsItem {
    start?(): any;
    center?(): any;
    end?(): any;
    icons?(): any;
    onClick?(): void;
}

class ContentListItem extends React.PureComponent<IPropsItem> {
    render() {
        return (
            <li className='table-list__item table-list__item--clickable table-list__item--draggable'>
                <div className='table-list__item-content'>
                    <div className='table-list__item-content-block'>
                        {this.props.start && this.props.start()}
                    </div>
                    <div className='table-list__item-content-block table-list__item-content-block--center'>
                        {this.props.center && this.props.center()}
                    </div>
                    <div className='table-list__item-content-block'>
                        {this.props.end && this.props.end()}
                    </div>
                </div>
                {this.props.icons && <div className='table-list__slide-in-actions'>
                    {this.props.icons()}
                </div>}
            </li>
        );
    }
}

interface IProps {
    children?: React.ReactNode;
}

class ContentList extends React.PureComponent<IProps> {
    render() {
        let classes = classNames('table-list');
        return (
            <ul className={classes}>
                {this.props.children}
            </ul>
        );
    }
}

export {
    ContentList, ContentListItem
};
