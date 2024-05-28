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
class DesignPatternsDoc extends React.Component<> {
    render() {
        return (
            <React.Fragment>
                <ReactNav pages={pages} base="design-patterns" />
                <main className="docs-page__content docs-page__container-fluid">
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