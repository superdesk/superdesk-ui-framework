import * as React from 'react';
import classNames from 'classnames';
import nextId from "react-id-generator";
import {Icon}  from '../../../../../app-typescript/index';

interface IProps {
    type?: 'expanded' | 'boxed' | 'collapsed';
    placeholder: string;
    focused? : boolean;
}

export class SearchBar extends React.PureComponent<IProps> {

    htmlId = nextId();

    render() {
        let classes = classNames('sd-searchbar', {
            [`sd-searchbar--${this.props.type}`] : this.props.type,
            'sd-searchbar--expanded': this.props.type === 'expanded' || this.props.type === undefined,
            'sd-searchbar--focused' : this.props.focused,
        });
        return (
            <div className={classes} role='Search'>
                <label className='sd-searchbar__icon' htmlFor={this.htmlId} aria-label={this.props.placeholder}></label>
                <input id={this.htmlId}
                    className="sd-searchbar__input"
                    type="text"
                    placeholder={this.props.placeholder} />
                <button className="sd-searchbar__cancel" aria-label='Clear search'>
                    <Icon name='remove-sign' />
                </button>
                <button className="sd-searchbar__search-btn" aria-label='Start search'>
                    <Icon name='chevron-right-thin' />
                </button>
            </div>
        );
    }
}
