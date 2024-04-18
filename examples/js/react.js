import React from 'react';

import Prism from 'prismjs';
import NormalizeWhitespace from 'prismjs/plugins/normalize-whitespace/prism-normalize-whitespace';
import LineNumbers from 'prismjs/plugins/line-numbers/prism-line-numbers';
import Markdown from 'prismjs/components/prism-markdown';
import JSX from 'prismjs/components/prism-jsx';

import { Link, NavLink } from 'react-router-dom';

class ReactNav extends React.PureComponent {
    render() {
        const pages = this.props.pages;
        const base = this.props.base || 'components';

        const navigations = Object.keys(pages).map((group) => <li key={group}>
            
            <span className="docs-page__nav-title">{pages[group].name}</span>
            <ul className="docs-page__nav--sub-level">
                {Object.keys(pages[group].items).map((page) =>
                    <li key={page} className="docs-page__nav-item">
                        <NavLink to={{ pathname: `/${base}/${page}` }} activeClassName="docs-page__nav-item--active">{pages[group].items[page].name}</NavLink>
                    </li>
                )}
            </ul>
        </li>);

        return (
            <aside className="docs-page__sidebar">
                <div className="mx-1-5 mb-1-5 sd-searchbar sd-searchbar--expanded sd-searchbar--boxed">
                    <label className="sd-searchbar__icon"></label>
                    <input id="search-input" className="sd-searchbar__input" type="text" placeholder="Search" value="" />
                </div>
                <ul className="docs-page__nav">{navigations}</ul>
            </aside>
        )
    }
}

class ReactDefault extends React.PureComponent {
    render() {
        return (
            <section className="docs-page__container">
                <div className="docs-page__hero">
                    <figure className="docs-page__hero-image">
                        <img src="/illustration--react.svg" alt="React" />
                    </figure>
                    <h2 className="docs-page__hero-h2 docs-page__color--primary">Home of Superdesk React components</h2>
                    <p className="docs-page__hero-text">As the headline suggests – React components for Superdesk. Work in progress!</p>
                    <p className="docs-page__hero-text sd-text__normal">Feel free to contribute!</p>
                </div>
            </section>
        )
    }
}

class PatternsDefault extends React.PureComponent {
    render() {
        return (
            <section className="docs-page__container">
                <div className="docs-page__hero">
                    <figure className="docs-page__hero-image">
                        <img src="/illustration--components.svg" alt="React" />
                    </figure>
                    <h2 className="docs-page__hero-h2 docs-page__color--primary">Design Patterns</h2>
                    <p className="docs-page__hero-text">
                        Vestibulum id ligula porta felis euismod semper. Aenean lacinia bibendum nulla sed consectetur.
                        Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa 
                        justo sit amet risus.
                    </p>
                </div>
            </section>
        )
    }
}

class ReactMarkup extends React.PureComponent {
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

class ReactMarkupPreview extends React.PureComponent {
    render() {
        return (
            <div className="docs-page__code-example"
                style={this.props.active === 'preview' ? { display: 'block' } : { display: 'none' }}>
                {this.props.children}
            </div>
        )
    }
}

class ReactMarkupCode extends React.PureComponent {
    componentDidMount() {
        Prism.highlightAll();
    }
    render() {
        return (
            <div className="docs-page__code-markup" style={this.props.active === 'markup' ? { display: 'block' } : { display: 'none' }}>
                <pre className="line-numbers">
                    <code className="language-jsx">
                        {this.props.children}
                    </code>
                </pre>
            </div>
        )
    }
}

class ReactMarkupCodePreview extends React.PureComponent {
    componentDidMount() {
        Prism.highlightAll();
    }
    render() {
        const { limitHeight, children } = this.props;
        const classes = `language-jsx ${limitHeight ? 'max-h-25' : ''}`;

        return (
            <pre className={limitHeight ? 'max-h-25' : ''}>
                <code className={classes}>
                    {children}
                </code>
            </pre>
        )
    }
}

export { ReactNav, ReactDefault, ReactMarkup, ReactMarkupPreview, ReactMarkupCode, ReactMarkupCodePreview, PatternsDefault };