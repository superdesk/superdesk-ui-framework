import * as  React from 'react';
import nextId from "react-id-generator";
import { OverlayPanel } from '@superdesk/primereact/overlaypanel';
import { Loader } from "./Loader";

/**
 * @ngdoc react
 * @name SelectGrid
 * @description searchable select component with grid view of items
 */

export interface IItem {
    value: string;
    label: string;
    [extra: string]: any;
}

interface IProps {
    getItems(searchString: string | null): Promise<Array<IItem>>;
    onChange(value: IItem): void;
    itemTemplate: React.ComponentType<{ item: IItem | null }>;
    triggerTemplate: React.ComponentType<{onClick: (e: React.SyntheticEvent) => void; }>;
    label: string;
    filterPlaceholder?: string;
}

interface IState {
    items: Array<IItem>;
    loading: boolean;
}

const GRID_COLS = 3;
const GRID_ROWS = 5;
const PAGE_SIZE = GRID_COLS * GRID_ROWS

export class SelectGrid extends React.PureComponent<IProps, IState> {
    htmlId = nextId();
    buttonContainer: React.RefObject<HTMLDivElement>;
    overlayPanel: React.RefObject<OverlayPanel>;
    searchInput: React.RefObject<HTMLInputElement>;
    gridContainer: React.RefObject<HTMLDivElement>;

    constructor(props: IProps) {
        super(props);

        this.state = { items: [], loading: true };

        this.buttonContainer = React.createRef();
        this.overlayPanel = React.createRef();
        this.searchInput = React.createRef();
        this.gridContainer = React.createRef();
    }

    componentDidMount() {
        this.props.getItems(null).then((items) => {
            this.setState({ items, loading: false });
        });
    }

    componentWillUnmount() {
        document.removeEventListener('keydown', this.handleKeydown);
    }

    mountPopup = (event?: React.SyntheticEvent) => {
        if (!event) {
            this.overlayPanel.current?.hide();
        } else {
            this.overlayPanel.current?.toggle(event);
        }

        document.addEventListener('keydown', this.handleKeydown);
        setTimeout(() => { this.searchInput.current?.focus(); });
        this.loadItems();
    }

    search = (event: React.ChangeEvent<HTMLInputElement>) => {
        const searchString: string = event.target.value.toLowerCase();
        this.loadItems(searchString);
    }

    loadItems = (searchString: string | null = null) => {
        this.setState({ loading: true });
        this.props.getItems(searchString).then((items) => {
            this.setState({ items, loading: false });
        });
    }

    hidePopupAndRefocus = () => {
        document.removeEventListener('keydown', this.handleKeydown);
        this.overlayPanel.current?.hide();
        this.buttonContainer.current?.querySelector('button')?.focus();
    }

    select = (item: IItem) => {
        this.props.onChange(item);
        this.hidePopupAndRefocus();

        // trigger component update
        this.forceUpdate();
    }

    getItemElement = (index: number): HTMLDivElement | null | undefined => {
        return this.gridContainer.current?.querySelector(`[data-item-index="${index}"]`);
    }

    handleKeydown = (event: KeyboardEvent) => {
        const navKeys = [
            "Enter",
            "ArrowRight",
            "ArrowLeft",
            "ArrowUp",
            "ArrowDown",
            "PageDown",
            "PageUp",
        ];
        const activeElement = document.activeElement;

        if (event.code === "Escape") {
            event.preventDefault();
            event.stopPropagation();

            this.hidePopupAndRefocus();
        } else if (activeElement === this.searchInput?.current) {
            if (event.code === "ArrowDown") {
                event.preventDefault();
                this.getItemElement(0)?.focus();
            } else if (event.code === "Enter" && this.state.items.length === 1) {
                event.preventDefault();
                this.select(this.state.items[0]);
            }
        } else if (document.activeElement?.getAttribute('data-item-index') && navKeys.includes(event.code)) {
            let itemIndex = parseInt(activeElement?.getAttribute('data-item-index') as string, 10);

            event.preventDefault(); // Prevent scrolling, etc.

            if (event.code === "Enter") {
                this.select(this.state.items[itemIndex]);
                return;
            } else if (event.code === "ArrowRight") {
                itemIndex += 1;
            } else if (event.code === "ArrowLeft") {
                itemIndex -= 1;
            } else if (event.code === "ArrowDown") {
                itemIndex += GRID_COLS;
            } else if (event.code === "ArrowUp") {
                if (itemIndex < GRID_COLS) {
                    this.searchInput?.current?.focus();
                    return;
                }

                itemIndex -= GRID_COLS;
            } else if (event.code === "PageDown") {
                itemIndex += PAGE_SIZE;
            } else if (event.code === "PageUp") {
                itemIndex -= PAGE_SIZE;
            }

            if (itemIndex < 0) {
                itemIndex = 0;
            } else if (itemIndex >= this.state.items.length) {
                itemIndex = this.state.items.length - 1;
            }

            this.getItemElement(itemIndex)?.focus();
        }
    }

    render() {
        const ItemTemplate = this.props.itemTemplate;
        const TriggerTemplate = this.props.triggerTemplate;

        return (
            <React.Fragment>
                <div
                    className="sd-input sd-input--grid-select"
                    ref={this.buttonContainer}
                    aria-label={this.props.label}
                    key={this.props.label}
                >
                    <label className="sd-input__label">
                        {this.props.label}
                    </label>
                    <TriggerTemplate onClick={this.mountPopup} />
                </div>
                <OverlayPanel
                    onHide={() => {
                        document.removeEventListener('keydown', this.handleKeydown);
                        this.buttonContainer.current?.querySelector('button')?.focus();
                    }}
                    ref={this.overlayPanel}
                    dismissable={true}
                    className="select-grid__overlay-panel"
                    appendTo={document.body} // making it work inside `overflow:hidden`
                >
                    <div className="select-grid__panel">
                        <div className="select-grid__header">
                            <div className="sd-searchbar sd-searchbar--boxed">
                                <label className="sd-searchbar__icon" />
                                <input
                                    className="sd-searchbar__input"
                                    placeholder={this.props.filterPlaceholder || 'Search...'}
                                    type="text"
                                    onChange={this.search}
                                    ref={this.searchInput}
                                />
                            </div>
                        </div>
                        <div className="select-grid__body" ref={this.gridContainer}>
                            {this.state.loading && <Loader overlay={this.state.loading} />}
                            {this.state.items.map((item, index) => (
                                <div
                                    key={this.htmlId + item.label}
                                    data-item-index={index}
                                    className="flex-grid__item select-grid__item sd-padding-y--3"
                                    tabIndex={0}
                                    role="button"
                                    aria-label={item.name}
                                    onClick={() => this.select(item)}
                                >
                                    <ItemTemplate key={item.value} item={item} />
                                </div>
                            ))}
                        </div>
                    </div>
                </OverlayPanel>
            </React.Fragment>
        );
    }
}
