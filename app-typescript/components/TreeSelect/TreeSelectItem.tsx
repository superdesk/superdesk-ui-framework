import * as React from "react";
import { Icon } from "../Icon";
import {getTextColor} from '../Label';
import {ITreeNode} from './TreeSelect';

export function getPrefixedItemId(id: string) {
    return id + '-focus';
}

interface IProps<T> {
    option: ITreeNode<T>;
    selectedItem?: boolean;
    allowMultiple?: boolean;
    handleTree(event: React.MouseEvent<HTMLLIElement, MouseEvent>, option: ITreeNode<T>): any;
    getLabel(item: T): string;
    getId(item: T): string;
    getBackgroundColor?(item: T): string;
    getBorderColor?(item: T): string;
    optionTemplate?(item: T): React.ComponentType<T> | JSX.Element;
    onClick?: () => void;
    onKeyDown?: () => void;
}

export class TreeSelectItem<T> extends React.Component<IProps<T>> {
    render() {
        return (
            <li
                className='suggestion-item suggestion-item--multi-select'
                onClick={(event) => {
                    this.props.onClick?.();
                    event.preventDefault();
                    event.stopPropagation();
                    this.props.handleTree(event, this.props.option);
                }}
            >
                <button
                    // the className is generated in order to focus the element later
                    className={`suggestion-item--btn ${getPrefixedItemId(this.props.getId(this.props.option.value))}`}
                    onKeyDown={(event) => {
                        if (event.key === 'Enter' && this.props.option.children) {
                            this.props.onKeyDown?.();
                        }
                    }}
                >
                    {(this.props.getBorderColor && !this.props.allowMultiple)
                        && <div
                            className="item-border"
                            style={{
                                backgroundColor: this.props.getBorderColor(this.props.option.value),
                            }}
                        >
                        </div>
                    }

                    <span
                        className={
                            'suggestion-item--bgcolor'
                            + (this.props.selectedItem ? ' suggestion-item--disabled' : '')
                        }
                        style={
                            (this.props.getBackgroundColor && this.props.option.value)
                                ? {
                                    backgroundColor: this.props.getBackgroundColor(this.props.option.value),
                                    color: getTextColor(this.props.getBackgroundColor(this.props.option.value),
                                    ),
                                }
                                : undefined
                        }
                    >
                        {this.props.optionTemplate
                            ? this.props.optionTemplate(this.props.option.value)
                            : this.props.getLabel(this.props.option.value)
                        }
                    </span>

                    {this.props.option.children
                        && <span className="suggestion-item__icon">
                            <Icon name="chevron-right-thin"></Icon>
                        </span>
                    }
                </button>
            </li>
        );
    }
}
