import * as React from 'react';
import classNames from 'classnames';

interface IProps {
    illustration?: string;
    size?: 'small' | 'large';
    title: string;
    description?: string;
    absolutePositioned?: boolean;
}

export class EmptyState extends React.PureComponent<IProps> {
    render() {
        let classes = classNames('content-state__image', {
            'content-state__image--small': this.props.size === undefined,
            [`content-state__image--${this.props.size}`]: this.props.size || this.props.size !== undefined,
        });

        let image = require(
            `../../app/img/empty_states/empty-state--${
                this.props.size ? this.props.size : 'small'
            }-${
                this.props.illustration ? this.props.illustration : '1'
            }.svg`,
        );

        return (
            <div className={
                    'content-state--empty-container'
                    + (this.props.absolutePositioned ? ' content-state__empty-container--absolute' : '')}
                >
                <div className='content-state__empty-info'>
                    <figure className={classes}>
                        <img src={image} alt={this.props.illustration} />
                    </figure>
                    <h3 className='content-state__heading'>
                        {this.props.title}
                    </h3>
                    <p className='content-state__description'>
                        {this.props.description}
                    </p>
                </div>
            </div>
        );
    }
}
