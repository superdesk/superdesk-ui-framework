import * as React from 'react';
import { Icon } from '../Icon';
import { Badge } from '../Badge';
import classNames from 'classnames';

interface IProps {
    activeTab: string | null;
    onActiveTabChange(val: string | null): void;
    items: Array<ISideBarTab | 'divider'>;
    side?: 'none' | 'left' | 'right';
    disabled?: boolean;
    ['data-test-id']?: string;
}

export interface ISideBarTab {
    id: string;
    icon: string;
    size: 'small' | 'big'; // defaults to 'small'
    tooltip?: string;
    badgeValue?: string;
}

export class SideBarTabs extends React.PureComponent<IProps> {
    constructor(props: IProps) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount(): void {
        const activeItem = this.props.items.find((item) => item !== 'divider' && item.id === this.props.activeTab);

        if (activeItem != null && activeItem !== 'divider') {
            this.props.onActiveTabChange(activeItem.id);
        }
    }

    handleClick(item: ISideBarTab) {
        if (this.props.activeTab === item.id) {
            this.props.onActiveTabChange(null);
        } else {
            this.props.onActiveTabChange(item.id);
        }
    }

    render() {
        return (
            <div className='sd-sidetab-menu sd-sidetab-menu--static' data-test-id={this.props['data-test-id']}>
                <ul>
                    {this.props.items.map((item, index) => {
                        if (item === 'divider') {
                            return (
                                <li key={index} className='sd-sidetab-menu__spacer'></li>
                            );
                        } else {
                            return (
                                <li key={index} data-sd-tooltip={item.tooltip} data-flow='left'>
                                    <button
                                        disabled={this.props.disabled}
                                        role='button'
                                        aria-label={item.tooltip}
                                        className={classNames(
                                            'sd-sidetab-menu__btn',
                                            {'sd-sidetab-menu__btn--active':
                                                item.id === this.props.activeTab && this.props.disabled !== true,
                                            },
                                        )}
                                        onClick={() => this.handleClick(item)}
                                        data-test-id='widget-icon'
                                        data-test-value={item.id}
                                    >
                                        {item.badgeValue != null && (
                                            <Badge text={item['badgeValue']} type='primary' />
                                        )}

                                        <span className='sd-sidetab-menu__main-icon '>
                                            <Icon size={item['size']} name={item['icon']} />
                                        </span>

                                        <i className='sd-sidetab-menu__helper-icon icon-close-small'></i>
                                    </button>
                                </li>
                            );
                        }
                    })}
                </ul>
            </div>
        );
    }
}
