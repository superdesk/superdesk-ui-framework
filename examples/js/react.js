import React from 'react';

class ReactNav extends React.Component {
    render() {
        const pages = this.props.pages;

        const navigations = Object.keys(pages).map((group) => <li key={group}>
            <span className="docs-page__nav-title">{pages[group].name}</span>
            <ul className="docs-page__nav--sub-level">
                {Object.keys(pages[group].items).map((page) =>
                    <li key={page} className="docs-page__nav-item">
                        <a>{pages[group].items[page].name}</a>
                    </li>
                )}
            </ul>
        </li>);

        return (
            <ul className="docs-page__nav">{navigations}</ul>
        )
    }
}

class ReactMarkup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            active: 'preview'
        }
    }

    changeTab(tab) {
        this.setState({ active: tab });
    }

    render() {
        const childrenWithProps = React.Children.map(this.props.children, child =>
            React.cloneElement(child, { active: this.state.active })
        );

        return (
            <div className="docs-page__code-window">
                <div className="docs-page__window-bar">
                    <a className={'cursor-pointer ' + (this.state.active === 'preview' ? 'active' : '')} onClick={() => this.changeTab('preview')}>Example</a>
                    <a className={'cursor-pointer ' + (this.state.active === 'markup' ? 'active' : '')} onClick={() => this.changeTab('markup')}>Markup</a>
                </div>

                <div className="docs-page__window-content">
                    {childrenWithProps}
                </div>
            </div>
        )
    }
}

class ReactMarkupPreview extends React.Component {
    render() {
        return (
            <div className="docs-page__code-example"
                style={this.props.active === 'preview' ? { display: 'block' } : { display: 'none' }}>
                {this.props.children}
            </div>
        )
    }
}

class ReactMarkupCode extends React.Component {
    render() {
        return (
            <div className="docs-page__code-markup"
                style={this.props.active === 'markup' ? { display: 'block' } : { display: 'none' }}>
                {this.props.children}
            </div>
        )
    }
}

export { ReactNav, ReactMarkup, ReactMarkupPreview, ReactMarkupCode };