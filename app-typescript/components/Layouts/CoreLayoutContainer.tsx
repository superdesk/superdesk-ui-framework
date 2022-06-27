import * as React from 'react';

interface IProps {
    children?: React.ReactNode;
    theme?: string;
}

export class CoreLayoutContainer extends React.PureComponent<IProps> {
    render() {
        return (
            <div className='sd-page-grid--test docs-page__full-width-helper' data-theme={this.props.theme}>
                {this.props.children}
            </div>
        );
    }
}