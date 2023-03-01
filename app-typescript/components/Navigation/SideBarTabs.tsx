import * as React from 'react';
import { Icon } from '../Icon';
import { Badge } from '../Badge';
import classNames from 'classnames';

interface IProps {
    activeTab: string | null;
    onActiveTabChange(val: string | null): void;
    items: Array<ISideBarTab | 'divider'>;
    side?: 'none' | 'left' | 'right';
}

export interface ISideBarTab {
    id: string;
    icon: string;
    size: 'small' | 'big'; // defaults to 'small'
    tooltip?: string;
    badgeValue?: string;
    onClick(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>): void;
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

    handleClick(item: ISideBarTab, event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
        if (this.props.activeTab === item.id) {
            this.props.onActiveTabChange(null);
        } else {
            this.props.onActiveTabChange(item.id);
            item.onClick(event);
        }
    }

    render() {
        return (
            <div className='sd-sidetab-menu sd-sidetab-menu--static'>
                <ul>
                    {this.props.items.map((item, index) => {
                        if (item === 'divider') {
                            return (
                                <li key={index} className='sd-sidetab-menu__spacer'></li>
                            );
                        } else {
                            return (
                                <li key={index} data-sd-tooltip={item.tooltip} data-flow='left'>
                                    <a
                                        role='button'
                                        aria-label={item.tooltip}
                                        className={classNames(
                                            'sd-sidetab-menu__btn',
                                            {'sd-sidetab-menu__btn--active': item.id === this.props.activeTab},
                                        )}
                                        onClick={(event) => this.handleClick(item, event)}
                                    >
                                        {item.badgeValue != null && (
                                            <Badge text={item['badgeValue']} type='primary' />
                                        )}

                                        <span className='sd-sidetab-menu__main-icon '>
                                            <Icon size={item['size']} name={item['icon']} />
                                        </span>

                                        <i className='sd-sidetab-menu__helper-icon icon-close-small'></i>
                                    </a>
                                </li>
                            );
                        }
                    })}
                </ul>
            </div>
        );
    }
}
