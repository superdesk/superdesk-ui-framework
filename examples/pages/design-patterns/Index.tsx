import * as React from 'react';

import { ReactNav, ReactDefault } from '../../js/react';

import {
    Switch,
    Route,
} from "react-router-dom";

const pages = {
    basicComponents: {
        name: 'Basic Components',
        items: {
            'buttons': {
                name: 'Buttons',
            },
            'icon-buttons': {
                name: 'Icon Buttons'
            },
            'button-groups': {
                name: 'Button Group & Divider'
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
            'avatar': {
                name: 'Avatar',
            },
            'tooltips': {
                name: 'Tooltips'
            },
            'tags': {
                name: 'Tags'
            },
            'dropdowns': {
                name: 'Dropdowns'
            },
            'nav-buttons': {
                name: 'Nav buttons'
            },
            'toast': {
                name: 'Toasts'
            },
            'popover': {
                name: 'Popover'
            },
            'modal': {
                name: 'Modal'
            },
            'carousel': {
                name: 'Carousel'
            },
            'menu': {
                name: 'Menu',
            },
            'treemenu': {
                name: 'TreeMenu',
            },
            "drag-handle": {
                name: 'Drag handle'
            },
            "illustration-button": {
                name: 'Illustration Button'
            }
        }
    },
}

class DesignPatternsDoc extends React.Component<{}, {}> {
    render() {
        return (
            <React.Fragment>
                <ReactNav pages={pages} />
                <main className="docs-page__content docs-page__container-fluid">
                </main>
            </React.Fragment>
        )
    }
}

export { DesignPatternsDoc };