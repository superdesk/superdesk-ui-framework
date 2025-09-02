import * as React from 'react';
interface IProps {
    name: string;
    isRequired: boolean;
    type: string;
    default: string;
    description: string;
}
declare class Prop extends React.PureComponent<IProps> {
    render(): JSX.Element;
}
declare class PropsList extends React.PureComponent {
    render(): JSX.Element;
}
export { Prop, PropsList };
