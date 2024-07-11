import * as React from 'react';

interface IPropsOverlay {
    overlay: true;
    backgroundColor?: React.CSSProperties['backgroundColor'];
}

interface IPropsInline {
    overlay?: false;
    width?: React.CSSProperties['width'];
    height?: React.CSSProperties['height'];
    backgroundColor?: React.CSSProperties['backgroundColor'];
}

type IProps = IPropsOverlay | IPropsInline;

export class Loader extends React.Component<IProps> {
    render() {
        if (this.props.overlay) {
            return (
                <div className="sd-loader" style={{backgroundColor: this.props.backgroundColor}} />
            );
        } else {
            return (
                <div
                    className="sd-loader--inline"
                    style={{
                        width: this.props.width,
                        height: this.props.height,
                        backgroundColor: this.props.backgroundColor,
                    }}
                />
            );
        }
    }
}
