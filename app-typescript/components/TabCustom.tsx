import * as React from 'react';
import classNames from 'classnames';
interface ITabs {
    size?: 'normal' | 'large' | 'small'; // defaults to 'normal'
    theme?: 'light' | 'dark'; // defaults to 'light'
    ariaLabel?: string;
    children: Array<any>;
    onClick(i: number): void;
    initiallySelectedIndex?: number;
    'data-test-id'?: string;
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

export const TabLabel = ({label}: ITabLabel) => {
    return (
        <span>{label}</span>
    );
};

export const Tabs = (props: ITabs) => {
    const {initiallySelectedIndex, size, theme, ariaLabel, children, onClick} = props;
    const [index, setIndex] = React.useState(initiallySelectedIndex ?? 0);

    function handleSelected(i: number) {
        setIndex(i);
        handleClick(i);
    }

    const handleClick = (i: number) => {
        onClick(i);
    };

    let classes = classNames('sd-nav-tabs', {
        [`sd-nav-tabs--${size}`]: size && size !== undefined,
        'sd-nav-tabs--ui-dark': theme === 'dark',
    });

    return (
        <div
            className={classes}
            role='tablist'
            aria-label={ariaLabel ? ariaLabel : 'tabs'}
            data-test-id={props['data-test-id']}
        >
            {
                children.map((item, i) => (
                    <button
                        key={i}
                        aria-controls={'tabpanel-' + i}
                        className={'sd-nav-tabs__tab' + (index === i ? ' sd-nav-tabs__tab--active' : '')}
                        onClick={() => handleSelected(i)}
                        role='tab'
                        aria-selected={index === i ? 'true' : 'false'}
                    >
                        {item}
                    </button>
                ))
            }
        </div>
    );
};

export const TabContent = ({theme, children, activePanel}: ITabContent) => {
    return (
        <div className={'sd-nav-tabs__content' + (theme === 'dark' ? ' sd-nav-tabs__content--ui-dark' : '')}>
            {
                children.map((panel: any, i: number) => panel.props.indexValue === activePanel && (
                    <div
                        className='sd-nav-tabs__pane'
                        role='tabpanel'
                        aria-labelledby={'tab-' + activePanel}
                        key={i}
                    >
                        {panel}
                    </div>
                ))
            }
        </div>
    );
};

export const TabPanel = ({children, indexValue}: ITabPanel) => {
    return (
        <React.Fragment key={indexValue}>
            {children}
        </React.Fragment>
    );
};
