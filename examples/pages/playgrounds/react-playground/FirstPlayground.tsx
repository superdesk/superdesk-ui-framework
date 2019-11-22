import * as React from 'react';

export class FirstPlayground extends React.Component {
    render() {
        return (
            <section className="docs-page__container">
                <div className="docs-page__hero">
                    <figure className="docs-page__hero-image">
                        <img src="/illustration--react.svg" alt="React" />
                    </figure>
                    <h2 className="docs-page__hero-h2 docs-page__color--primary">First Playground</h2>
                    <p className="docs-page__hero-text">As the headline suggests – React components for Superdesk. Still in its early stages, but hey, you have to start somewhere!</p>
                    <p className="docs-page__hero-text sd-text__normal">Don't be shy, feel free to contribute!</p>
                </div>
            </section>
        )
    }
}
