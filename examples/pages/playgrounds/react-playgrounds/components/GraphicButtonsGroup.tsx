import * as React from 'react';

interface IProps {
    children?: React.ReactNode;
}

export class GraphicButtonsGroup extends React.PureComponent<IProps> {
    render() {
        return (
            <div className='docs-page__button-grid'>
                {this.props.children}
            </div>
        );
    }
}