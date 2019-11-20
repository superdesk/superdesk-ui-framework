import * as React from 'react';
import * as Markup from '../../js/react';

import { Switch } from '../../../app-typescript';

export default class SwitchDoc extends React.Component {
    render() {
        return (
            <section className="docs-page__container">
                <h2 className="docs-page__h2">Switch</h2>
                <p></p>

                <Markup.ReactMarkup>
                    <Markup.ReactMarkupPreview>
                        <div className="form__row">
                            <label>Label on left</label>
                            <Switch onChange={(value) => value} />
                        </div>
                        <div className="form__row">
                            <Switch onChange={(value) => value} disabled={true} />
                            <label>Label on right with disabled state</label>
                        </div>
                    </Markup.ReactMarkupPreview>
                    <Markup.ReactMarkupCode>
                        This is also some test content
                    </Markup.ReactMarkupCode>
                </Markup.ReactMarkup>
            </section>
        )
    }
}
