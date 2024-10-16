import classNames from 'classnames';
import * as React from "react";
import {DragHandle} from '../DragHandle';
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
    draggable?: boolean;
}

export class TreeSelectPill<T> extends React.Component<IProps<T>> {
    render() {
        const classes = classNames('tags-input__tag-item tags-input__tag-item--multi-select', {
            'tags-input__tag-item--readonly': this.props.readOnly,
            'tags-input__tag-item--draggable': this.props.draggable,
        });

        return (
            <li
                className={classes}
                style={
                    this.props.valueTemplate
                        ? {backgroundColor: this.props.backgroundColor}
                        : this.props.getBackgroundColor
                            && {backgroundColor: this.props.getBackgroundColor(this.props.item)}
                }
                data-test-id="item"
            >
                {this.props.draggable && (
                    <DragHandle blank={true} dotsInRow='3' dotRows='4' />
                )}
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
                        && <button
                            className="tags-input__remove-button"
                            data-test-id="remove"
                            onClick={() => (!this.props.readOnly && !this.props.disabled)
                                && this.props.onRemove()
                            }
                        >
                            <Icon name="close-small"></Icon>
                        </button>
                    }
                </span>
            </li>
        );
    }
}
