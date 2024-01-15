import * as React from 'react';
import classNames from 'classnames';
import nextId from "react-id-generator";
interface IProps {
    value?: string;
    size?: 'small' | 'medium' | 'large'; // defaults to small
    options: Array<{
        label: string,
        value: string,
        theme: 'light' | 'dark' | 'contrast-light'; // changes the thumb preview based on the selected theme.
        disabled?: boolean
        checked?: boolean;
    }>;
    required?: boolean;
    onChange(nextValue: string): void;
}
export class ThemeSelector extends React.Component<IProps> {
    htmlId = nextId();

    constructor(props: IProps) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(item: any) {
        console.log(item);
        if (!item.disabled) {
            this.props.onChange(item.value);
        }
    }

    render() {
        let classes = classNames('sd-theme-selector__list ', {
            [`sd-theme-selector__list--${this.props.size}`]: this.props.size,
        });
        return (
            <div className={classes}>{
                this.props.options.map((item: any, index: number) => (

                    <div className='sd-theme-selector__item'
                        key={index}
                        tabIndex={-1}>
                        <figure
                            className="sd-theme-selector__item-thumb"
                            data-theme={item.theme + '-ui'}
                            aria-hidden="true"
                        >
                            <svg viewBox="0 0 156 94" xmlns="http://www.w3.org/2000/svg">
                                <g fill="none" fillRule="evenodd">
                                    <path d="m0 0h156v94h-156z" fill="var(--sd-colour-panel-bg--100)" />
                                    <circle cx="144" cy="33" fill="var(--color-text-lighter)" r="4" />
                                    <rect
                                        fill="var(--sd-colour-interactive)"
                                        height="15"
                                        rx="2"
                                        width="58"
                                        x="91"
                                        y="71"
                                    />
                                    <g fill="var(--sd-colour-btn-bg-neutral)">
                                        <rect height="15" rx="2" width="58" x="29" y="52" />
                                        <rect height="15" rx="2" width="58" x="29" y="71" />
                                        <rect height="15" rx="2" width="58" x="91" y="52" />
                                    </g>
                                    <g fill="#fff">
                                        <rect height="3" rx="1.5" width="9" x="99" y="77" />
                                        <rect height="3" rx="1.5" width="11" x="130" y="77" />
                                        <rect height="3" rx="1.5" width="18" x="110" y="77" />
                                    </g>
                                    <g fill="var(--color-text-light)">
                                        <rect height="3" rx="1.5" width="9" x="37" y="58" />
                                        <rect height="3" rx="1.5" width="11" x="68" y="58" />
                                        <rect height="3" rx="1.5" width="18" x="48" y="58" />
                                        <rect height="3" rx="1.5" width="9" x="37" y="77" />
                                        <rect height="3" rx="1.5" width="11" x="68" y="77" />
                                        <rect height="3" rx="1.5" width="18" x="48" y="77" />
                                        <rect height="3" rx="1.5" width="9" x="99" y="58" />
                                        <rect height="3" rx="1.5" width="11" x="130" y="58" />
                                        <rect height="3" rx="1.5" width="18" x="110" y="58" />
                                    </g>
                                    <g fill="var(--color-text)">
                                        <rect height="4" rx="2" width="11" x="29" y="31" />
                                        <rect height="4" rx="2" width="14" x="70" y="31" />
                                        <rect height="4" rx="2" width="23" x="43" y="31" />
                                    </g>
                                    <path d="m0 22h22v72h-22z" fill="var(--sd-colour-sidebar-menu--00)" />
                                    <circle cx="11" cy="52" fill="var(--sd-colour-interactive)" r="6" />
                                    <g fill="var(--color-icon-default)" opacity=".75">
                                        <circle cx="11" cy="34" r="6" />
                                        <circle cx="11" cy="70" r="6" />
                                    </g>
                                    <path d="m0 0h156v22h-156z" fill="var(--sd-colour-top-menu)" />
                                    <path d="m0 22h156v1h-156z" fill="var(--sd-colour--shadow-line)" />
                                    <g fill="hsla(214, 13%, 65%, 1)" opacity="1">
                                        <rect height="4" rx="2" width="11" x="31" y="9" />
                                        <rect height="4" rx="2" width="23" x="45" y="9" />
                                    </g>
                                    <path d="m22 44h134v1h-134z" fill="var(--sd-colour-line--medium)" />
                                    <path d="m0 0h22v22h-22z" fill="var(--sd-colour-top-menu__btn)" />
                                    <path d="m15 13v1h-8v-1zm0-3v1h-8v-1zm0-3v1h-8v-1z" fill="#fff" />
                                </g>
                            </svg>
                        </figure>
                        <div className="sd-theme-selector__item-action">
                            <input type="radio" className="sd-theme-selector__input"
                                id={this.htmlId + index}
                                tabIndex={0}
                                name={this.htmlId}
                                onChange={() => this.handleChange(item)}
                                disabled={item.disabled}
                            />
                            <span className="sd-radio-new"></span>

                            <label className="sd-theme-selector__label" htmlFor={this.htmlId + index}>
                                {item.label}
                            </label>
                            <span className="sd-theme-selector__label-text" aria-hidden="true">{item.label}</span>
                        </div>
                    </div>
                ))
            }</div>
        );
    }
}
