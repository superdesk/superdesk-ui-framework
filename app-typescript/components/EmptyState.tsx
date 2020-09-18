import * as React from 'react';
import classNames from 'classnames';

interface IProps {
    ilustration?: string;
    size?: 'small' | 'normal' | 'large';
    title?: string;
    description?: string;
}

export class EmptyState extends React.PureComponent<IProps> {
    render() {
        let defaultIlustrations = ['default']; // value of svg default, naming svg for default state 'empty-state_value'
        let randomIlustration = defaultIlustrations[Math.floor(Math.random() * defaultIlustrations.length)];
        let classes = classNames('content-state__image-l', {
            [`${randomIlustration}`]: this.props.ilustration === undefined,
            [`${this.props.size}`]: this.props.size !== 'normal' && this.props.size !== undefined,
        });

        let image = require(`../../app/img/empty_states/empty-state_${randomIlustration}.svg`);

        return (
            <div className='content-state__empty-info'>
                <figure className={classes} style={{ backgroundImage: `url(${image})` }}>
                </figure>
                <h3 className='content-state__heading'>
                    {this.props.title}
                </h3>
                <p className='content-state__description'>
                    {this.props.description}
                </p>
            </div>
        );
    }
}
