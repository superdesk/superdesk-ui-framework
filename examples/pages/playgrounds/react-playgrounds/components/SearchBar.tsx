import * as React from 'react';
import classNames from 'classnames';
import {Icon}  from '../../../../../app-typescript/index';

interface IProps {
    type?: 'expanded' | 'collapsed' | 'boxed';
    placeholder: string;
    focused? : boolean;
}

export class SearchBar extends React.PureComponent<IProps> {
    render() {
        let classes = classNames('sd-searchbar', {
            [`sd-searchbar--${this.props.type}`] : this.props.type,
            'sd-searchbar--expanded': this.props.type === 'expanded' || this.props.type === undefined,
            'sd-searchbar--focused' : this.props.focused,
        });
        return (
            <div className={classes}>
                <label className="sd-searchbar__icon"></label>
                <input id="search-input"
                    className="sd-searchbar__input"
                    type="text"
                    placeholder={this.props.placeholder} />
                <button className="sd-searchbar__cancel">
                    <Icon name='remove-sign' />
                </button>
                <button id="sd-searchbar__search-btn" className="sd-searchbar__search-btn">
                    <Icon name='chevron-right-thin' />
                </button>
            </div>
        );
    }
}
