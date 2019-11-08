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
import AlertDoc from './Alerts'

const pages = {
    basicComponents: {
        name: 'Basic Components',
        items: {
            'buttons': {
                name: 'Buttons',
            },
            'labels': {
                name: 'Labels',
            },
            'badges': {
                name: 'Badges',
            },
            'alerts': {
                name: 'Alerts'
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
                            <Route path="/#/react/labels">
                                <LabelsDoc />
                            </Route>
                            <Route path="/#/react/badges">
                                <BadgesDoc />
                            </Route>
                            <Route path="/#/react/alerts">
                                <AlertDoc />
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
