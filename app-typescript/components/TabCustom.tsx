import * as React from 'react';
import classNames from 'classnames';
interface ITabs {
    size?: 'normal' | 'large' | 'small'; // defaults to 'normal'
    theme?: 'light' | 'dark'; // defaults to 'light'
    ariaLabel?: string;
    children: Array<any>;
    onClick(i: number): void;
}

interface ITabLabel {
    label: string;
    indexValue: number;
}

interface ITabContent {
    theme?: 'light' | 'dark'; // defaults to 'light'
    children: any;
    activePanel: number;
}

interface ITabPanel {
    indexValue: number;
    children: any;
}

export const TabLabel = ({ label }: ITabLabel) => {
    return (
        <span>{label}</span>
    );
};

export const Tabs = ({ size, theme, ariaLabel, children, onClick }: ITabs) => {
    const [index, setIndex] = React.useState(0);

    function handleSelected(i: number) {
        setIndex(i);
        handleClick(i);
    }

    const handleClick = (i: number) => {
        onClick(i);
    };

    let classes = classNames('nav-tabs', {
        [`nav-tabs--${size}`]: size && size !== undefined,
        'nav-tabs--ui-dark': theme === 'dark',
    });
    return (
        <ul className={classes} role='tablist' aria-label={ariaLabel ? ariaLabel : 'tabs'}>
            {children.map((item, i) =>
                <li key={i} className={'nav-tabs__tab' + (index === i ? ' nav-tabs__tab--active' : '')} aria-controls={'tabpanel-' + i}>
                    <button
                        className='nav-tabs__link'
                        onClick={() => handleSelected(i)}
                        role='tab'
                        aria-selected={index === i ? 'true' : 'false'} >
                        {item}
                    </button>
                </li>)}
        </ul>
    );
};

export const TabContent = ({ theme, children, activePanel }: ITabContent) => {
    return (
        <div className={'nav-tabs__content' +
            (theme === 'dark' ? ' nav-tabs__content--ui-dark' : '')}>
            {children.map((panel: any, i: number) =>
                panel.props.indexValue === activePanel ?
                    <div className="nav-tabs__pane" role="tabpanel" aria-labelledby={'tab-' + activePanel} key={i}>
                        {panel}
                    </div> : null)}
        </div>
    );
};

export const TabPanel = ({ children, indexValue }: ITabPanel) => {
    return (
        <React.Fragment key={indexValue}>
            {children}
        </React.Fragment>
    );
};
