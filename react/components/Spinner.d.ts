import * as React from 'react';
declare class LoadingOverlay extends React.PureComponent {
    render(): JSX.Element;
}
interface IProps {
    size?: 'mini' | 'small' | 'medium' | 'large';
}
declare class Spinner extends React.PureComponent<IProps> {
    render(): JSX.Element;
}
export { Spinner, LoadingOverlay };
