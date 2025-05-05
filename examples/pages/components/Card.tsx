import * as React from "react";
import * as Markup from "../../js/react";
import {Card} from '../../../app-typescript/components/card';

export default class CardDoc extends React.Component {
    render() {
        return (
            <section className="docs-page__container">
                <h2 className="docs-page__h2">Card</h2>

                <Markup.ReactMarkupCodePreview>{`
                    <Card paddingBase="1">
                        card content
                    </Card>
                `}
                </Markup.ReactMarkupCodePreview>

                <Card paddingBase="1">
                    card content
                </Card>
            </section>
        )
    }
}
