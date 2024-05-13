import * as React from 'react';

import { ReactNav, PatternsDefault } from '../../js/react';
import { Dropdown } from '../../../app-typescript/index';

import {
    Switch,
    Route,
} from "react-router-dom";

import { ThreePaneLayoutPattern } from './ThreePaneLayoutPattern';

const pages = {
    basicComponents: {
        name: 'Layout',
        items: {
            'three-pane-layout': {
                name: 'Three Pane Layout',
            },
            // 'icon-buttons': {
            //     name: 'Icon Buttons'
            // },
            // 'button-groups': {
            //     name: 'Button Group & Divider'
            // },
        }
    },
}
interface IProps {
    theme?: string;
}
interface IState {
    theme: 'dark-ui' | 'light-ui' | string;
}
class DesignPatternsDoc extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {
            theme: 'light-ui',
        }
        this.handleTheme = this.handleTheme.bind(this);
    }
    handleTheme(newTheme: string) {
        document.body.setAttribute('data-theme', newTheme);

        this.setState({
            theme: newTheme
        })
    }

    checkTheme(theme: string) {
        return this.state.theme === theme;
    }
    render() {
        return (
            <React.Fragment>
                <ReactNav pages={pages} base="design-patterns" />
                <main className="docs-page__content docs-page__container-fluid">
                    <div className="docs-page__fla-button-container">
                        <Dropdown
                            items={[
                                {
                                    type: 'group', label: 'Chose a theme', items: [
                                        'divider',
                                        { label: 'Light', icon: 'adjust', active: this.checkTheme('light-ui'), onSelect: () => this.handleTheme('light-ui') },
                                        { label: 'Dark', icon: 'adjust', active: this.checkTheme('dark-ui'), onSelect: () => this.handleTheme('dark-ui') },
                                        { label: 'Accessible Light', active: this.checkTheme('accessible-light-ui'), icon: 'adjust', onSelect: () => this.handleTheme('accessible-light-ui') },
                                    ]
                                },
                            ]}>
                            <button className="docs-page__fla-button" aria-label="Change theme" onClick={() => false}>
                                <i className="icon-adjust"></i>
                            </button>
                        </Dropdown>
                    </div>
                    <Switch>
                        <Route path="/design-patterns/three-pane-layout" component={ThreePaneLayoutPattern} />
                        <Route path="/" component={PatternsDefault} />
                    </Switch>
                </main>
            </React.Fragment>
        )
    }
}

export { DesignPatternsDoc };