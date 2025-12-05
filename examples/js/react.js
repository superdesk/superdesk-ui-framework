import React from 'react';
import { NavLink } from 'react-router-dom';
import Prism from 'prismjs';

// Needed for markup preview styles to load
import 'prismjs/plugins/normalize-whitespace/prism-normalize-whitespace';
import 'prismjs/plugins/line-numbers/prism-line-numbers';
import 'prismjs/components/prism-markdown';
import 'prismjs/components/prism-jsx';

class ReactNav extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            searchTerm: '',
            expandedSections: Object.keys(this.props.pages).reduce((sections, key) => {
                sections[key] = true;
                return sections;
            }, {}),
        };

        this.activeRef = React.createRef();
        this.searchInputRef = React.createRef();

        this.handleSearchChange = this.handleSearchChange.bind(this);
        this.toggleSection = this.toggleSection.bind(this);
        this.handleKeyDown = this.handleKeyDown.bind(this);
    }

    componentDidMount() {
        if (this.activeRef.current) {
            this.activeRef.current.scrollIntoView({
                block: 'center',
                inline: 'nearest',
            });
        }

        if (this.searchInputRef.current) {
            this.searchInputRef.current.focus();
        }

        document.addEventListener('keydown', this.handleKeyDown);
    }

    componentWillUnmount() {
        document.removeEventListener('keydown', this.handleKeyDown);
    }

    handleKeyDown(event) {
        if ((event.metaKey || event.ctrlKey) && event.key === 'k') {
            event.preventDefault();
            if (this.searchInputRef.current) {
                this.searchInputRef.current.focus();
                this.searchInputRef.current.select();
            }
        }
    }

    handleSearchChange(event) {
        this.setState({
            searchTerm: event.target.value,
            expandedSections: Object.keys(this.props.pages).reduce((sections, key) => {
                sections[key] = true;
                return sections;
            }, {}),
        });
    }

    toggleSection(section) {
        this.setState((prevState) => ({
            expandedSections: {
                ...prevState.expandedSections,
                [section]: !prevState.expandedSections[section],
            },
        }));
    }

    render() {
        const { pages, base = 'components' } = this.props;
        const { searchTerm } = this.state;

        const filteredPages = Object.keys(pages).reduce((filtered, section) => {
            const filteredItems = Object.keys(pages[section].items)
                .filter((item) => pages[section].items[item].name.toLowerCase().includes(searchTerm.toLowerCase()))
                .reduce((obj, key) => {
                    obj[key] = pages[section].items[key];
                    return obj;
                }, {});

            if (Object.keys(filteredItems).length > 0) {
                filtered[section] = { ...pages[section], items: filteredItems };
            }

            return filtered;
        }, {});

        const navigations = Object.keys(filteredPages).map((group) => (
            <li key={group}>
                <div
                    className={`docs-page__nav-title ${this.state.expandedSections[group] ? 'docs-page__nav-title--open' : ''}`}
                    onClick={() => this.toggleSection(group)}
                >
                    <span className="docs-page__nav-title-caret">
                        <i className="icon-chevron-right-thin" aria-label="chevron-right-thin" />
                    </span>
                    {filteredPages[group].name}
                </div>
                {this.state.expandedSections[group] && (
                    <ul className="docs-page__nav--sub-level">
                        {Object.keys(filteredPages[group].items).map((page) => (
                            <li
                                key={page}
                                className="docs-page__nav-item"
                                ref={`/${base}/${page}` === location.hash.replace('#', '') ? this.activeRef : null}
                            >
                                <NavLink
                                    to={{ pathname: `/${base}/${page}` }}
                                    activeClassName="docs-page__nav-item--active"
                                >
                                    {filteredPages[group].items[page].name}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                )}
            </li>
        ));

        const isMac = navigator.platform.toUpperCase().indexOf('MAC') >= 0;
        const shortcutKey = isMac ? '⌘K' : 'Ctrl+K';

        return (
            <aside className="docs-page__sidebar">
                <div className="docs-page__sidebar-searchbar-container">
                    <div className="mx-2 mb-1-5 sd-searchbar sd-searchbar--expanded sd-searchbar--boxed" style={{ position: 'relative' }}>
                        <label className="sd-searchbar__icon"></label>
                        <input
                            ref={this.searchInputRef}
                            id="search-input"
                            className="sd-searchbar__input"
                            type="text"
                            placeholder="Search"
                            value={searchTerm}
                            onChange={this.handleSearchChange}
                            style={{ paddingRight: '4rem' }}
                        />
                        {!this.state.searchTerm && (
                            <kbd
                                style={{
                                    position: 'absolute',
                                    right: '1rem',
                                    top: '50%',
                                    transform: 'translateY(-50%)',
                                    padding: '0.2em 0.5em',
                                    background: 'var(--sd-colour-interactive--alpha-20)',
                                    borderRadius: '3px',
                                }}>
                                {shortcutKey}
                            </kbd>
                        )}
                        {this.state.searchTerm && (
                            <button className="sd-searchbar__cancel" onClick={() => this.setState({ searchTerm: '' })}>
                                <Icon name="remove-sign" />
                            </button>
                        )}
                    </div>
                </div>
                <ul className="docs-page__nav">{navigations}</ul>
            </aside>
        );
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
                    <p className="docs-page__hero-text">
                        As the headline suggests, these where the React components live.
                    </p>
                </div>
            </section>
        );
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
                        Examples of reusable solutions for common UI patterns in Superdesk.
                    </p>
                </div>
            </section>
        );
    }
}

class ReactMarkup extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            active: 'preview',
        };
    }

    changeTab(tab) {
        this.setState({ active: tab });
    }

    render() {
        const childrenWithProps = React.Children.map(this.props.children, (child) =>
            React.cloneElement(child, { active: this.state.active }),
        );

        return (
            <div className="docs-page__code-window">
                <div className="docs-page__window-bar">
                    <a
                        className={'cursor-pointer ' + (this.state.active === 'preview' ? 'active' : '')}
                        onClick={() => this.changeTab('preview')}
                    >
                        Example
                    </a>
                    <a
                        className={'cursor-pointer ' + (this.state.active === 'markup' ? 'active' : '')}
                        onClick={() => this.changeTab('markup')}
                    >
                        Markup
                    </a>
                </div>

                <div className="docs-page__window-content">{childrenWithProps}</div>
            </div>
        );
    }
}

class ReactMarkupPreview extends React.PureComponent {
    render() {
        return (
            <div
                className="docs-page__code-example"
                style={this.props.active === 'preview' ? { display: 'block' } : { display: 'none' }}
            >
                {this.props.children}
            </div>
        );
    }
}

class ReactMarkupCode extends React.PureComponent {
    componentDidMount() {
        Prism.highlightAll();
    }
    render() {
        return (
            <div
                className="docs-page__code-markup"
                style={this.props.active === 'markup' ? { display: 'block' } : { display: 'none' }}
            >
                <pre className="line-numbers">
                    <code className="language-jsx">{this.props.children}</code>
                </pre>
            </div>
        );
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
                <code className={classes}>{children}</code>
            </pre>
        );
    }
}

export {
    ReactNav,
    ReactDefault,
    ReactMarkup,
    ReactMarkupPreview,
    ReactMarkupCode,
    ReactMarkupCodePreview,
    PatternsDefault,
};
