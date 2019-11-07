import * as React from 'react';
import classNames from 'classnames';

interface IProps {
    text?: string;
    types?: string;
    square?: boolean;
}

export class TagLabels extends React.Component<IProps> {
    render() {
        let classes = classNames('tag-label', {
            [`tag-label--${this.props.types}`]: this.props.types,
            'tag-label--square': this.props.square,
        });

        return (
            <React.Fragment>
                <div className = {classes}>
                    {this.props.text}
                    <button className = 'tag-label__remove'>
                        <i className = 'icon-close-small'></i>
                    </button>
                </div>
            </React.Fragment>
        );
    }
}
