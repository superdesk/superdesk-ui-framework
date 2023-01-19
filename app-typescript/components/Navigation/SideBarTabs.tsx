import * as React from 'react';
import { Icon } from '../Icon';
import { Badge } from '../Badge';

interface IProps {
    items: Array<ISideBarTab | 'divider'>;
    side?: 'none' | 'left' | 'right';
    active?: string;
}

export interface ISideBarTab {
    icon: string;
    size: 'small' | 'big'; // defaults to 'small'
    tooltip?: string;
    active?: boolean;
    badgeValue?: string;
    id?: string;
    onClick(event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void;
}

interface IState {
    index: number;
    closeIndex: number;
    active: string;
}

export class SideBarTabs extends React.PureComponent<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {
            index: -1,
            closeIndex: -1,
            active: this.props.active ? this.props.active : '',
        };
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount(): void {
        this.props.items.map((item: any, indexNumber) => {
            if (item.id === this.state.active) {
                this.setState({
                    index: indexNumber,
                });
            }
        });
    }

    handleClick(item: ISideBarTab, indexNumber: number, event: any) {
        this.setState({
            index: indexNumber,
        });
        if (this.state.index === indexNumber) {
            this.setState({
                closeIndex: indexNumber,
                index: -1,
            });
        }

        item.onClick(event);
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
                                <li key={index} data-sd-tooltip={item['tooltip']} data-flow='left'>
                                    <a role='button' aria-label={item['tooltip']}
                                        className={'sd-sidetab-menu__btn'
                                        + (index === this.state.index ? ' sd-sidetab-menu__btn--active' : '')}
                                        onClick={() => this.handleClick(item, index, event)}>
                                        {
                                            item['badgeValue'] != null
                                            ? <Badge text={item['badgeValue']} type='primary' />
                                            : null
                                        }
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
