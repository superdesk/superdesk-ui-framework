import * as React from 'react';

interface IProps {
    name: string;
    isRequired: boolean;
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
                    <td>{this.props.isRequired ? 'yes' : 'no'}</td>
                    <td>{this.props.type}</td>
                    <td>{this.props.default}</td>
                    <td>{this.props.description}</td>
                </tr>
            </React.Fragment>
        );
    }
}

class PropsList extends React.PureComponent {
    render() {
        return (
            <table className="table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Required</th>
                        <th>Type</th>
                        <th>Default Value</th>
                        <th>Description</th>
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
