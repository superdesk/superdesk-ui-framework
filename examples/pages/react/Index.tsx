import * as React from 'react';

import { ReactNav, ReactDefault } from '../../js/react';

import {
    BrowserRouter as Router,
    Switch,
    Route,

} from "react-router-dom";

import Buttons from './Buttons';

const pages = {
    basicComponents: {
        name: 'Basic Components',
        items: {
            'buttons': {
                name: 'Buttons',
                page: 'buttons.html',
            },
            'checkbox-and-radio': {
                name: 'Checkbox & Radio',
                page: 'checkbox-and-radio.html',
            },
            'switch': {
                name: 'Switch',
                page: 'switch.html',
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
                                <Buttons />
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
