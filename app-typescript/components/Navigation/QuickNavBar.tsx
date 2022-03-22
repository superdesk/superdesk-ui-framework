import * as React from 'react';
import { Icon } from '../Icon';
import Scrollspy from 'react-scrollspy';

interface IProps {
    items: Array<IItem | 'divider'>;
    side?: 'none' | 'left' | 'right';
    scrollCont?: string;
    offset?: number;
}

interface IItem {
    icon: string;
    tooltip?: string;
    active?: boolean;
    id?: string; // scrollspy items for itemsArr
    onClick?(event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void;
}

interface IState {
    index: number;
    closeIndex: number;
    arr: Array<string>;
}

export class QuickNavBar extends React.PureComponent<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {
            index: 0,
            closeIndex: -1,
            arr: [],
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(item: IItem, indexNumber: number, event: any) {
        this.setState({
            index: indexNumber,
        });
        if (this.state.index === indexNumber) {
            this.setState({
                closeIndex: indexNumber,
                index: -1,
            });
        }

        if (item.id && this.props.scrollCont) {
            return document
              .getElementById(item.id)
              ?.scrollIntoView({ block: "nearest", behavior: "smooth" });
          }

        item.active = !item.active;
        if (item.onClick) {
            item.onClick(event);
        }
    }
    render() {

        let itemsArr: Array<string> = [];
            this.props.items.map((item) => {
                if (item !== 'divider') {
                    itemsArr = [...itemsArr, `${item.id}`];
                }
        });
        return (
            <div className='sd-quickbar-menu'>
                {this.props.scrollCont
                    ? <ul>
                        <Scrollspy items={ itemsArr }
                        currentClassName="sd-quickbar-menu__list-item--active"
                        rootEl={this.props.scrollCont}  offset={this.props.offset || 0}>
                            {this.props.items.map((item, index) => {
                                if (item === 'divider') {
                                    return (
                                        <li key={index} className='sd-quickbar__spacer'></li>
                                        );
                                } else {
                                    return (
                                        <li key={index} data-sd-tooltip={item['tooltip']} data-flow='right' className="sd-quickbar-menu__list-item">
                                            <a role='button' aria-label={item['tooltip']} className={'sd-quickbar__btn'}
                                                onClick={() => this.handleClick(item, index, event)}>
                                                <Icon size={'small'} name={item['icon']} />
                                            </a>
                                        </li>
                                    );
                                }
                            })}
                        </Scrollspy>
                    </ul>
                    : <ul>
                        {this.props.items.map((item, index) => {
                            if (item === 'divider') {
                                return (
                                    <li key={index} className='sd-quickbar__spacer'></li>
                                );
                            } else {
                                return (
                                    <li key={index} data-sd-tooltip={item['tooltip']} data-flow='right'>
                                        <a role='button'
                                            aria-label={item['tooltip']}
                                            className={'sd-quickbar__btn' +  (index === this.state.index ? ' sd-quickbar__btn--active' : '')}
                                            onClick={() => this.handleClick(item, index, event)}>
                                                <Icon size={'small'} name={item['icon']} />
                                        </a>
                                    </li>);
                                }
                            },
                        )}
                    </ul>
                }
            </div>
        );
    }
}
