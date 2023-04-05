import * as React from 'react';

interface IProps<T> {
    array: Array<T>;
    singleSelect?: boolean;
    getLabel(item: T): string;
    valueTemplate?(item: T, Wrapper?: React.ElementType): React.ComponentType<T> | JSX.Element | undefined;
    getBackgroundColor?(item: T): string;
    getBorderColor?(item: T): string;
    getTextColor?(item: string): 'black' | 'white' | undefined;
}

export class PillPreview<T> extends React.Component<IProps<T>> {

    render() {
        return (
            <div className="tags-preview">
                <ul className="tags-preview__tag-list">
                    {this.props.array.map((item, i: number) => {
                        const Wrapper: React.ComponentType<{backgroundColor?: string, borderColor?: string}>
                        = ({backgroundColor, borderColor, children}) => (
                            <li
                                className={`tags-preview__tag-item ${this.props.singleSelect ? 'tags-preview__tag-item--single-select' : ''} ${(this.props.getBorderColor || borderColor) ? 'tags-preview__tag-item--border' : ''}`}
                                style={this.props.valueTemplate
                                    ? {backgroundColor, borderColor}
                                    : this.props.getBackgroundColor
                                        ? {
                                            backgroundColor: this.props.getBackgroundColor(item),
                                        }
                                        : this.props.getBorderColor &&
                                            {
                                                borderLeftColor: this.props.getBorderColor(item),
                                            }
                                }
                            >
                                <span
                                    className="tags-input__helper-box"
                                    style={{color:
                                        backgroundColor
                                            ? this.props.getTextColor?.(backgroundColor)
                                            : this.props.getBackgroundColor
                                                &&  this.props.getTextColor?.(this.props.getBackgroundColor(item)),
                                    }}
                                >
                                    {children}
                                </span>
                            </li>
                        );

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
