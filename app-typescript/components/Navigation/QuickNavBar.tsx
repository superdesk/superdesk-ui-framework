import * as React from 'react';
import { Icon } from '../Icon';
import Scrollspy from 'react-scrollspy'

interface IProps {
    items: Array<IItem | 'divider'>;
    side?: 'none' | 'left' | 'right';
    scrollSpyItems?: Array<any>
    scrollCont?: string
}

interface IItem {
    icon: string;
    tooltip?: string;
    active?: boolean;
    onClick?(event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void;
    id: string
}

interface IState {
    index: number;
    closeIndex: number;
    arr: Array<string>
}

export class QuickNavBar extends React.PureComponent<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {
            index: -1,
            closeIndex: -1,
            arr: []
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

        if (item.id) {
            return document
              .getElementById(item.id)
              ?.scrollIntoView({ block: "nearest", behavior: "smooth" });
          }

        item.active = !item.active;
        item.onClick(event);
    }
    
    render() {

        let itemsArr: Array<string> = [];
        
        this.props.items.map(item => {
            itemsArr = [...itemsArr, `${item.id}`]
        })
        return (
            <div className='sd-quickbar-menu'>
                <ul>
                    <Scrollspy items={ itemsArr } currentClassName="sd-quickbar__btn--active" rootEl={this.props.scrollCont}  offset={-300}>
                        {this.props.items.map((item, index) => {
                            if (item === 'divider') {
                                return (
                                    <li key={index} className='sd-quickbar__spacer'></li>
                                    );
                            } else {
                                return (
                                    <li key={index} data-sd-tooltip={item['tooltip']} data-flow='right' className={'sd-quickbar__btn'}>
                                    <a role='button' aria-label={item['tooltip']} className={'sd-quickbar__btn'}
                                        onClick={() => this.handleClick(item, index, event)}
                                        >
                                        <Icon size={'small'} name={item['icon']} />
                                    </a>
                                    </li>
                                );
                            }
                        })}
                    </Scrollspy>
                </ul>
            </div>
        );
    }
}
// + (item['active'] ? ' sd-quickbar__btn--active' : (index === this.state.index ? ' sd-quickbar__btn--active' : ''))