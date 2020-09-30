import React from 'react';
import { AutoComplete } from 'primereact/autocomplete';

interface IProps {
    items: Array<any>;
    keyValue: string; // Field of a suggested object to resolve and display
    minLength?: number; // Minimum number of characters to initiate a search
}

interface IState {
    selectedItem: any;
    filteredItems: any;
}

export class Autocomplete extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {
            selectedItem: null,
            filteredItems: null,
        };

        this.searchItem = this.searchItem.bind(this);
        this.itemTemplate = this.itemTemplate.bind(this);
    }

    searchItem(event: any) {
        setTimeout(() => {
            let filteredItems;
            if (!event.query.trim().length) {
                filteredItems = [...this.props.items];
            } else {
                filteredItems = this.props.items.filter((item) => {
                    return item[this.props.keyValue].toLowerCase().startsWith(event.query.toLowerCase());
                });
            }

            this.setState({ filteredItems });
        }, 250);
    }

    itemTemplate(item: any) {
        return (
            <div>
                <div>{item[this.props.keyValue]}</div>
            </div>
        );
    }

    render() {
        return (
            <div>
                <AutoComplete
                    value={this.state.selectedItem}
                    suggestions={this.state.filteredItems}
                    completeMethod={this.searchItem}
                    field={this.props.keyValue}
                    minLength={this.props.minLength ? this.props.minLength : 1}
                    onChange={(e) => this.setState({ selectedItem: e.value })} />
            </div>
        );
    }
}
