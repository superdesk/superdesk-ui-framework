import * as React from 'react';
import classNames from 'classnames';

interface ITabList {
    size?: 'normal' | 'large' | 'small'; // defaults to 'normal'
    theme?: 'light' | 'dark'; // defaults to 'light'
    children: Array<any>;
    selected?: string;
    tabs?: Array<{label: string, content: any, id?: string}>;
}

interface IState {
    index: number;
}

interface ITab {
    id?: string;
    label?: string;
}

class Tab extends React.PureComponent<ITab> {
    render() {
        return (
            <div className='sd-nav-tabs__pane' role='tabpanel'>
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

    componentDidMount() {
        if (this.props.selected) {
            this.goTo(this.props.selected ?? '');
        }
    }

    private handleChange(index: number) {
        this.setState({
            index: index,
        });
    }

    public goTo(index: string) {
        if (this.props.tabs) {
            const refLabel = this.props.tabs?.find((item) => item.id === index);
            this.setState({
                index: refLabel ? this.props.tabs?.indexOf(refLabel) : 0,
            });
        } else {
            const refLabel = this.props.children.find((item) => item.props.id === index);
            this.setState({
                index: this.props.children.indexOf(refLabel),
            });
        }
    }

    private navBar(arr: any) {
        return arr.map((item: any, index: any) => {
            let label = this.props.tabs ? item.label : item.props.label;
            return    <button
                id={`TabList-${index}`}
                key={index}
                onClick={() => this.handleChange(index)}
                role='tab'
                aria-selected={this.state.index === index ? 'true' : 'false'}
                className={'sd-nav-tabs__tab' + (this.state.index === index ? ' sd-nav-tabs__tab--active' : '')}>
                <span>{label}</span>
                </button>;
            });
    }

    render() {
        let classes = classNames('sd-nav-tabs', {
            [`sd-nav-tabs--${this.props.size}`]: this.props.size && this.props.size !== undefined,
            'sd-nav-tabs--ui-dark': this.props.theme === 'dark',
        });
        return (
            <React.Fragment>
                <div className={classes} role='tablist'>
                    {this.props.tabs ? this.navBar(this.props.tabs) : this.navBar(this.props.children)}
                </div>
                <div aria-labelledby={`TabList-${this.state.index}`}
                    role='tabpanel' className={'sd-nav-tabs__content' +
                    (this.props.theme === 'dark' ? ' sd-nav-tabs__content--ui-dark' : '')}>
                    {this.props.tabs
                    ? <Tab id={this.props.tabs[this.state.index].id}>{this.props.tabs[this.state.index].content}</Tab>
                    : this.props.children[this.state.index]}
                </div>
            </React.Fragment>
        );
    }
}

export { Tab, TabList };
