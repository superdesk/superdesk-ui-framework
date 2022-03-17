import * as React from 'react';
import classNames from 'classnames';

interface ITabs {
    size?: 'normal' | 'large' | 'small'; // defaults to 'normal'
    theme?: 'light' | 'dark'; // defaults to 'light'
    ariaLabel?: string;
    children: Array<any>;
    onClick(id: string): void;
    tabs?: Array<{label: any, id: string}>;
    activePanel: string;
}

interface ITabLabel {
    label?: string;
    id: string;
    children: any;
}

interface ITabContent {
    theme?: 'light' | 'dark'; // defaults to 'light'
    children: any;
    activePanel: string;
    tabs?: Array<{content: any, id: string}>;
}

interface ITabPanel {
    id: string;
    children: any;
}

export const TabNav = ({ size, theme, ariaLabel, children, onClick, tabs, activePanel }: ITabs) => {
    const [index, setIndex] = React.useState(0);

    function goTo(id: string) {
        if (tabs) {
            const refLabel = tabs?.find((item) => item.id === id);

            if (refLabel) {
                setIndex(tabs.indexOf(refLabel));
            }
        } else {
            const refLabel = children.find((item) => item.props.id === id);
            setIndex(children.indexOf(refLabel));
        }
    }

    React.useEffect(() => {
        goTo(activePanel ? activePanel : (tabs ? tabs[0].id : children[0].props.id));
    }, []);

    function handleSelected(id: string) {
        goTo(id);
        onClick(id);
    }

    let classes = classNames('sd-nav-tabs', {
        [`sd-nav-tabs--${size}`]: size && size !== undefined,
        'sd-nav-tabs--ui-dark': theme === 'dark',
    });
        return (
        <div className={classes} role='tablist' aria-label={ariaLabel ? ariaLabel : 'tabs'}>
        {tabs ?
        tabs.map((item, i) =>
            <button
                id={`tab-${item.id}`}
                key={i}
                aria-controls={'tabpanel-' + item.id}
                className={'sd-nav-tabs__tab' + (index === i ? ' sd-nav-tabs__tab--active' : '')}
                onClick={() => handleSelected(item.id)}
                role='tab'
                aria-selected={index === i ? 'true' : 'false'} >
                {item.label}
            </button>)
        :
        children.map((item, i) =>
            <button
                id={`tab-${item.props.id}`}
                key={i}
                aria-controls={'tabpanel-' + item.props.id}
                className={'sd-nav-tabs__tab' + (index === i ? ' sd-nav-tabs__tab--active' : '')}
                onClick={() => handleSelected(item.props.id)}
                role='tab'
                aria-selected={index === i ? 'true' : 'false'} >
                {item}
            </button>)
        }
        </div>
    );
};

export const TabContent = ({ theme, children, activePanel, tabs }: ITabContent) => {
    if (!activePanel && tabs) {
        activePanel = tabs[0].id;
    } else if (!activePanel && children) {
        activePanel = children[0].props.id;
    }

    return (
        <div className={'sd-nav-tabs__content' +
            (theme === 'dark' ? ' sd-nav-tabs__content--ui-dark' : '')}>
                {tabs ?
                tabs.map((panel: any, i: number) =>
                    panel.id === activePanel ?
                        <div className='sd-nav-tabs__pane' role='tabpanel' aria-labelledby={`tab-${panel.id}`} key={i}>
                            {panel.content}
                        </div> : null)
                :
                children.map((panel: any, i: number) =>
                    panel.props.id === activePanel ?
                        <div className='sd-nav-tabs__pane'
                            role='tabpanel'
                            aria-labelledby={`tab-${panel.props.id}`}
                            key={i}>
                            {panel}
                        </div> : null)
                }
        </div>
    );
};

export const TabItem = ({ children }: ITabLabel) => {
    return (
        <span>{children}</span>
    );
};

export const TabPanel = ({ children, id }: ITabPanel) => {
    return (
        <React.Fragment key={id}>
            {children}
        </React.Fragment>
    );
};
