import React from 'react';

import LabelDoc from '../reactTemplates/Label';
import InputDoc from '../reactTemplates/Input';
import LineInputDoc from '../reactTemplates/LineInput';

export default class ReactDoc extends React.Component {
    render() {
        let navigation = [{
            headline: 'Form components',
            items: [
                'Labels', 'Input', 'Line Input'
            ]
        }];

        let navigationGroups = [];
        navigation.forEach((group, groupIndex) => {
            let navigationItems = [];

            group.items.forEach((item, index) => {
                navigationItems.push(<li key={index} className="docs-page__nav-item"><a href={"#/react/#" + item.replace(/\s+/g, '-').toLowerCase()}>{item}</a></li>);
            })

            navigationGroups.push(
                <li key={groupIndex}>
                    <span className="docs-page__nav-title">{group.headline}</span>
                    <ul className="docs-page__nav--sub-level">
                        {navigationItems}
                    </ul>
                </li>
            );
        });

        return (
            <div className="docs-page">
                <aside className="docs-page__sidebar">
                    <ul className="docs-page__nav">
                        {navigationGroups}
                    </ul>
                </aside>
                <main className="docs-page__content docs-page__container-fluid">
                    <LabelDoc />
                    <br /><br />
                    <InputDoc />
                    <br /><br />
                    <LineInputDoc />
                </main>
            </div>
        )
    }
}
