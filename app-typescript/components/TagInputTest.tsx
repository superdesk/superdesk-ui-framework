import * as React from 'react';
import { AutoComplete } from 'primereact/autocomplete';

//   work in progress used Autocomplete from primereact miss:
//  1. style for component
//  2. category select
//  3. freetype text

interface IProps {
    items: Array<any>;
    keyValue: string; // Field of a suggested object to resolve and display
    minLength?: number;
}

interface IState {
    selectedItem: any;
    filteredItems: any;
}

export class TagInputTest extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {
            selectedItem: null,
            filteredItems: null,
        };

        this.searchItem = this.searchItem.bind(this);
        this.itemTemplate = this.itemTemplate.bind(this);
        this.handleItem = this.handleItem.bind(this);
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

    handleItem(e: any) {
        this.setState({ selectedItem: e.value });
    }

    render() {
        return (
            <div>
                <AutoComplete
                    value={this.state.selectedItem}
                    suggestions={this.state.filteredItems}
                    completeMethod={this.searchItem}
                    field={this.props.keyValue}
                    multiple
                    dropdown={true}
                    minLength={this.props.minLength ? this.props.minLength : 1}
                    onChange={(e) => this.handleItem(e)} />

            </div>
        );
    }
}
