import * as React from 'react';

interface ITabs {
    onClick(i: any): void;
    size?: 'normal' | 'large' | 'small'; // defaults to 'normal'
    theme?: 'light' | 'dark'; // defaults to 'light'
    children: Array<any>;
}

interface ITabLabel {
    label: string;
    indexValue: number;
}

interface ITabPanel {
    theme?: 'light' | 'dark'; // defaults to 'light'
    children: any;
    activePanel: number;
}

interface ITabContent {
    indexValue: number;
    children: any;
}

export const TabLabel = ({ label }: ITabLabel) => {
    return (
        <span>{label}</span>
    );
};

export const Tabs = ({ children, onClick }: ITabs) => {
    const [index, setIndex] = React.useState(0);

    function handleSelected(i: number) {
        setIndex(i);
        handleClick(i);
    }

    const handleClick = (i: number) => {
        onClick(i);
    };

    return (
        <ul className='nav-tabs' role='tablist'>
            {children.map((item, i) =>
                <li key={i} className={'nav-tabs__tab' + (index === i ? ' nav-tabs__tab--active' : '')} >
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

export const TabContent = ({ theme, children, activePanel }: ITabPanel) => {
    return (
        <div className={'nav-tabs__content' +
            (theme === 'dark' ? ' nav-tabs__content--ui-dark' : '')}>
            {children.map((panel: any, i: number) =>
                panel.props.indexValue === activePanel ?
                    <div className="nav-tabs__pane" role="tabpanel" key={i}>{panel}</div> : null)}
        </div>
    );
};

export const TabPanel = ({ children, indexValue }: ITabContent) => {
    return (
        <React.Fragment key={indexValue}>
            {children}
        </React.Fragment>
    );
};
