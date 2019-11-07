import * as React from 'react';
import * as Markup from '../../js/react';

export default class ReactDoc extends React.Component {
    render() {
        return (
            <section className="docs-page__container">
                <h2 className="docs-page__h2">Buttons</h2>
                <h3 className="docs-page__h3">Sizing</h3>

                <Markup.ReactMarkup>
                    <Markup.ReactMarkupPreview>
                        This is some test content
                    </Markup.ReactMarkupPreview>
                    <Markup.ReactMarkupCode>
                        This is also some test content
                    </Markup.ReactMarkupCode>
                </Markup.ReactMarkup>
            </section>
        )
    }
}
