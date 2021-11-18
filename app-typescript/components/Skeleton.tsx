
import React from 'react';
import classNames from 'classnames';

interface IProps {
    shape: string;
    size: string;
    width: string;
    height: string;
    borderRadius: string;
    animation: string;
    style: object;
    className: string;
}

export class Skeleton extends React.Component<IProps> {
    static defaultProps = {
        shape: 'rectangle',
        size: null,
        width: '100%',
        height: '1.2rem',
        borderRadius: null,
        animation: 'wave',
        style: null,
        className: null,
    };

    skeletonStyle() {
        if (this.props.size) {
            return { width: this.props.size, height: this.props.size, borderRadius: this.props.borderRadius };
        } else {
            return { width: this.props.width, height: this.props.height, borderRadius: this.props.borderRadius };
        }
    }

    render() {
        const skeletonClassName = classNames('p-skeleton p-component', {
            'p-skeleton-circle': this.props.shape === 'circle',
            'p-skeleton-none': this.props.animation === 'none',
        }, this.props.className);

        const style = this.skeletonStyle();

        return (
            <div style={style} className={skeletonClassName}></div>
        );
    }
}
