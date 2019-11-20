import * as React from 'react';

import { ReactNav, ReactDefault } from '../../js/react';

import {
    BrowserRouter as Router,
    Switch,
    Route,

} from "react-router-dom";

import ButtonsDoc from './Buttons';
import LabelsDoc from './Labels';
import BadgesDoc from './Badges';
import AlertDoc from './Alerts';
import IconButtonDoc from './IconButtons';
import IconLabelDoc from './IconLabels';
import TooltipDoc from './Tooltips';
import SwitchDoc from './Switch';

const pages = {
    basicComponents: {
        name: 'Basic Components',
        items: {
            'buttons': {
                name: 'Buttons',
            },
            'icon-buttons':{
                name: 'Icon Buttons'
            },
            'labels': {
                name: 'Labels',
            },
            'icon-labels':{
                name: 'Icon Labels'
            },
            'badges': {
                name: 'Badges',
            },
            'alerts': {
                name: 'Alerts'
            },
            'tooltips': {
                name: 'Tooltips'
            },
        }
    }
}

export default class ReactDoc extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Router>
                    <ReactNav pages={pages} />
                    <main className="docs-page__content docs-page__container-fluid">
                        <Switch>
                            <Route path="/#/react/buttons">
                                <ButtonsDoc />
                            </Route>
                            <Route path="/#/react/icon-buttons">
                                <IconButtonDoc />
                            </Route>
                            <Route path="/#/react/labels">
                                <LabelsDoc />
                            </Route>
                            <Route path="/#/react/icon-labels">
                                <IconLabelDoc />
                            </Route>
                            <Route path="/#/react/badges">
                                <BadgesDoc />
                            </Route>
                            <Route path="/#/react/alerts">
                                <AlertDoc />
                            </Route>
                            <Route path="/#/react/tooltips">
                                <TooltipDoc />
                            </Route>
                            <Route path="/#/react/switch">
                                <SwitchDoc />
                            </Route>
                            <Route path="/">
                                <ReactDefault />
                            </Route>
                        </Switch>
                    </main>
                </Router>
            </React.Fragment>
        )
    }
}
