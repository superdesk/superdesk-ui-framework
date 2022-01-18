import * as React from "react";
import * as Markup from "../../js/react";
import { ListItemLoader, PropsList } from "../../../app-typescript";

export default class ListItemsDoc extends React.Component {
    render() {
        return (
            <section className="docs-page__container">
                <h2 className="docs-page__h2">ListItemLoader</h2>
                <Markup.ReactMarkupCodePreview>{`
                    <ListItemLoader />
                `}
                </Markup.ReactMarkupCodePreview>
                <h3 className="docs-page__h3 docs-page__h3--small-top-m">Skeleton type loader for list items.</h3>
                {/* <p className="docs-page__paragraph">Basic layout structure for list elements. The content inside the elements serves just as an example.</p> */}
                <Markup.ReactMarkup>
                    <Markup.ReactMarkupPreview>
                        <div className="docs-page__content-row">
                            <ListItemLoader />
                        </div>
                    </Markup.ReactMarkupPreview>
                    <Markup.ReactMarkupCode>{`
                        <ListItemLoader />
                    `}</Markup.ReactMarkupCode>
                </Markup.ReactMarkup>
                
                <h3 className="docs-page__h3">Props</h3>
                <PropsList>

                </PropsList>
            </section>
        )
    }
}
