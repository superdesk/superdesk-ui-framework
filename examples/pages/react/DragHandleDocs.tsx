import * as React from 'react';
import {DragHandle} from '../../../app-typescript';
import * as Markup from '../../js/react';

export default class DragHandleDocs extends React.Component {
    render() {
        return (
            <section className="docs-page__container">
                <h2 className="docs-page__h2">Drag handle</h2>
                <Markup.ReactMarkupCodePreview>{`
                    <DragHandle />
                `}
                </Markup.ReactMarkupCodePreview>
                <Markup.ReactMarkup>
                    <Markup.ReactMarkupPreview>
                        <div className="docs-page__content-row">
                            <DragHandle />
                        </div>
                    </Markup.ReactMarkupPreview>
                    <Markup.ReactMarkupCode>{'<DragHandle />'}
                    </Markup.ReactMarkupCode>
                </Markup.ReactMarkup>
            </section>
        );
    }
}
