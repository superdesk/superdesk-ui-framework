import * as React from 'react';
import classNames from 'classnames';

interface IProps {
    children: React.ReactNode;
    autoWidth?: boolean; // defaults to 'false'.
    // 'autoWidth' works only with flex based FormGroupNew.
    colSpan?: 1 | 2 | 3 | 4; // defaults to '4' (full width).
    // 'colSpan' works only with grid based FormGroupNew.
}

export class FormGroupItemNew extends React.PureComponent<IProps> {
    render() {
        let classes = classNames('form-group-new-item', {
            'form-group-new-item--auto-width': this.props.autoWidth,
            'form-group-new-item--span-1': this.props.colSpan === 1,
            'form-group-new-item--span-2': this.props.colSpan === 2,
            'form-group-new-item--span-3': this.props.colSpan === 3,
            'form-group-new-item--span-4': this.props.colSpan === 4 || !this.props.colSpan,
        });
        return <div className={classes}>{this.props.children}</div>;
    }
}
