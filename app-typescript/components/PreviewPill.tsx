import classNames from 'classnames';
import * as React from 'react';
import {getTextColor} from './Label';

interface IProps<T> {
    items: Array<T>;
    kind: {
        mode: 'single-select'; getBorderColor?(item: T): string;
    } | {
        mode: 'multi-select'; getBackgroundColor?(item: T): string;
    };
    getLabel(item: T): string;
    valueTemplate?(item: T, Wrapper?: React.ElementType): React.ComponentType<T> | JSX.Element | undefined;
}

export class SelectPreview<T> extends React.Component<IProps<T>> {
    render() {
        return (
            <div className="tags-preview">
                <ul className="tags-preview__tag-list">
                    {this.props.items.map((item, i: number) => {
                        const Wrapper: React.ComponentType<{backgroundColor?: string, borderColor?: string}>
                        = ({backgroundColor, borderColor, children}) => {
                            let classes = classNames('tags-preview__tag-item', {
                                'tags-preview__tag-item--single-select': this.props.kind.mode === 'single-select',
                                'tags-preview__tag-item--border': (
                                    this.props.kind.mode === 'single-select' && this.props.kind.getBorderColor
                                    )
                                    || borderColor,
                            });

                            return (
                                <li
                                    className={classes}
                                    style={(() => {
                                        if (this.props.valueTemplate != null) {
                                            return {backgroundColor, borderColor};
                                        } else {
                                            if (
                                                this.props.kind.mode === 'multi-select'
                                                && this.props.kind.getBackgroundColor != null
                                            ) {
                                                return {
                                                    backgroundColor: this.props.kind.getBackgroundColor(item),
                                                };
                                            } else {
                                                if (
                                                    this.props.kind.mode === 'single-select'
                                                    && this.props.kind.getBorderColor != null
                                                ) {
                                                    return {
                                                        borderLeftColor: this.props.kind.getBorderColor(item),
                                                    };
                                                } else {
                                                    return undefined;
                                                }
                                            }
                                        }
                                    })()}
                                >
                                    <span
                                        className="tags-input__helper-box"
                                        style={(() => {
                                            if (backgroundColor != null) {
                                                return {color: getTextColor(backgroundColor)};
                                            } else {
                                                if (
                                                    this.props.kind.mode === 'multi-select'
                                                    && this.props.kind.getBackgroundColor != null
                                                ) {
                                                    return {color: getTextColor(
                                                        this.props.kind.getBackgroundColor(item),
                                                    )};
                                                } else {
                                                    return undefined;
                                                }
                                            }
                                        })()}
                                    >
                                        {children}
                                    </span>
                                </li>
                            );
                        };

                        return (
                            <React.Fragment key={i}>
                                {this.props.valueTemplate
                                    ? this.props.valueTemplate(item, Wrapper)
                                    : <Wrapper>
                                        <span>{this.props.getLabel(item)}</span>
                                    </Wrapper>
                                }
                            </React.Fragment>
                        );

                    })}
                </ul>
            </div>
        );
    }
}
