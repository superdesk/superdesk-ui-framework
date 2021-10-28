import * as React from 'react';
import classNames from 'classnames';

interface IProps {
    children: React.ReactNode;
    autoWidth?: boolean;
}

export class FormItem extends React.PureComponent<IProps> {
    render() {
        let classes = classNames('form__item', {
            'form__item--auto-width': this.props.autoWidth,
        });
        return (
            <div className={classes}>
                {this.props.children}
            </div>
        );
    }
}
