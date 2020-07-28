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
        let classes = classNames('sd-nav-tabs', {
            [`sd-nav-tabs--${this.props.size}`]: this.props.size && this.props.size !== undefined,
            'sd-nav-tabs--ui-dark': this.props.theme === 'dark',
        });

        return (
            <React.Fragment>
                <div className={classes} role='tablist'>
                    {this.props.children.map((item, index) =>
                        <button key={index}
                            onClick={() => this.handleChange(index)}
                            role='tab' aria-selected={this.state.index === index ? 'true' : 'false'}
                            className={'sd-nav-tabs__tab' + (this.state.index === index ? ' sd-nav-tabs__tab--active' : '')}>
                            <span>{item.props.label}</span>
                        </button>)}
                </div>
                <div className={'sd-nav-tabs__content' +
                    (this.props.theme === 'dark' ? ' sd-nav-tabs__content--ui-dark' : '')}>
                    {this.props.children[this.state.index]}
                </div>
            </React.Fragment>
        );
    }
}

export { Tab, TabList };
