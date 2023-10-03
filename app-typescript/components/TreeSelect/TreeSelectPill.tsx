import * as React from "react";
import {Icon} from "../Icon";
import {getTextColor} from '../Label';

interface IProps<T> {
    item: T;
    readOnly?: boolean;
    disabled?: boolean;
    backgroundColor: string | undefined;
    onRemove(): void;
    valueTemplate?(item: T, Wrapper: React.ElementType): React.ComponentType<T> | JSX.Element;
    getBackgroundColor?(item: T): string;
}

export class TreeSelectPill<T> extends React.Component<IProps<T>> {
    render() {
        return (
            <li
                className={
                    "tags-input__tag-item tags-input__tag-item--multi-select"
                    + (this.props.readOnly ? ' tags-input__tag-item--readonly' : '')
                }
                onClick={() => (!this.props.readOnly && !this.props.disabled)
                    && this.props.onRemove()
                }
                style={
                    this.props.valueTemplate
                        ? {backgroundColor: this.props.backgroundColor}
                        : this.props.getBackgroundColor
                            && {backgroundColor: this.props.getBackgroundColor(this.props.item)}
                }
                data-test-id="item"
            >
                <span
                    className="tags-input__helper-box"
                    style={{
                        color: this.props.backgroundColor
                            ? getTextColor(this.props.backgroundColor)
                            : this.props.getBackgroundColor
                                &&  getTextColor(this.props.getBackgroundColor(this.props.item)),
                    }}
                >
                    {this.props.children}

                    {!this.props.readOnly
                        && <span className="tags-input__remove-button" data-test-id="remove">
                            <Icon name="close-small"></Icon>
                        </span>
                    }
                </span>
            </li>
        );
    }
}
