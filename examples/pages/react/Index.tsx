import * as React from 'react';

import { ReactNav, ReactDefault } from '../../js/react';

import {
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
import InputsDoc from './Inputs';
import SwitchDoc from './Switch';

import * as Playgrounds from '../playgrounds/react-playgrounds/Index';

const pages = {
    basicComponents: {
        name: 'Basic Components',
        items: {
            'buttons': {
                name: 'Buttons',
            },
            'inputs': {
                name: 'Inputs',
            },
            'icon-buttons': {
                name: 'Icon Buttons'
            },
            'labels': {
                name: 'Labels',
            },
            'icon-labels': {
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
            'switch': {
                name: 'Switch'
            },
        }
    }
}

class ReactDoc extends React.Component {
    render() {
        return (
            <React.Fragment>
                <ReactNav pages={pages} />
                <main className="docs-page__content docs-page__container-fluid">
                    <Switch>
                        <Route path="/react/buttons" component={ButtonsDoc} />
                        <Route path="/react/inputs" component={InputsDoc} />
                        <Route path="/react/icon-buttons" component={IconButtonDoc} />
                        <Route path="/react/labels" component={LabelsDoc} />
                        <Route path="/react/icon-labels" component={IconLabelDoc} />
                        <Route path="/react/badges" component={BadgesDoc} />
                        <Route path="/react/alerts" component={AlertDoc} />
                        <Route path="/react/tooltips" component={TooltipDoc} />
                        <Route path="/react/switch" component={SwitchDoc} />
                        <Route path="/" component={ReactDefault} />
                    </Switch>
                </main>
            </React.Fragment>
        )
    }
}

interface IProps {
    playgrounds: any;
}

class ReactPlayground extends React.Component<IProps> {
    render() {
        return (
            <Switch>
                <Route path="/playgrounds/react/:id" render={(props) => parsePlayground(props, this.props.playgrounds)} />
            </Switch>
        )
    }
}

const parsePlayground = ({ match }, playgrounds) => {
    const Component = Playgrounds[playgrounds[match.params.id].component];

    return (
        <Component />
    );
};

export { ReactDoc, ReactPlayground };