import * as React from 'react';

interface IProps {
    name: string;
    isRequered: boolean;
    type: string;
    default: string;
    description: string;
}

class Prop extends React.PureComponent<IProps> {
    render() {
        return (
            <React.Fragment>
                <tr>
                    <td>{this.props.name}</td>
                    <td>{this.props.isRequered ? 'yes' : 'no'}</td>
                    <td>{this.props.type}</td>
                    <td>{this.props.default}</td>
                    <td style={{width: '360px'}}>{this.props.description}</td>
                </tr>
            </React.Fragment>
        );
    }
}

class PropsList extends React.PureComponent {
    render() {
        return (
            <table style={{marginBottom: '40px'}}>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Required</th>
                        <th>Type</th>
                        <th>Default Value</th>
                        <th style={{width: '360px'}}>Description</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.children}
                </tbody>
            </table>
        );
    }
}

export { Prop, PropsList };
