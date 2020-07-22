import * as React from 'react';
import classNames from 'classnames';

interface ITabList {
    size?: 'normal' | 'large' | 'small'; // defaults to 'normal'
    theme?: 'light' | 'dark'; // defaults to 'light'
    children: Array<any>;
}

interface IState {
    index: number;
}

interface ITab {
    label: string;
}

class Tab extends React.PureComponent<ITab> {
    render() {
        return (
            <div className='nav-tabs__pane' role='tabpanel'>
                {this.props.children}
            </div>
        );
    }
}

class TabList extends React.PureComponent<ITabList, IState> {
    constructor(props: ITabList) {
        super(props);
        this.state = {
            index: 0,
        };
        this.handleChange = this.handleChange.bind(this);
        this.goTo = this.goTo.bind(this);
    }

    private handleChange(index: number) {
        this.setState({
            index: index,
        });
    }

    public goTo(label: string) {
        const refLabel = this.props.children.find((item) => item.props.label === label);
        this.setState({
            index: this.props.children.indexOf(refLabel),
        });
    }

    render() {
        let classes = classNames('nav-tabs', {
            [`nav-tabs--${this.props.size}`]: this.props.size && this.props.size !== undefined,
            'nav-tabs--ui-dark': this.props.theme === 'dark',
        });

        return (
            <React.Fragment>
                <ul className={classes} role='tablist'>
                    {this.props.children.map((item, index) =>
                        <li key={index} className={'nav-tabs__tab' + (this.state.index === index ? ' nav-tabs__tab--active' : '')}>
                            <button
                                className='nav-tabs__link'
                                onClick={() => this.handleChange(index)}
                                role='tab' aria-selected={this.state.index === index ? 'true' : 'false'}>
                                <span>{item.props.label}</span>
                            </button>
                        </li>)}
                </ul>
                <div className={'nav-tabs__content' +
                    (this.props.theme === 'dark' ? ' nav-tabs__content--ui-dark' : '')}>
                    {this.props.children[this.state.index]}
                </div>
            </React.Fragment>
        );
    }
}

export { Tab, TabList };
