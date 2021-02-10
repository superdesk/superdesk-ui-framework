import * as React from 'react';
import {Popover} from '../../../app-typescript/components/Popover';

import * as Markup from '../../js/react';

export class PopoverDoc extends React.Component {
    buttonRef: HTMLButtonElement | null;

    render() {
        return (
            <section className='docs-page__container'>

                <h2 className='docs-page__h2'>Popover</h2>

                <p className='docs-page__paragraph'></p>
                <Markup.ReactMarkup>
                    <Markup.ReactMarkupPreview>
                        <div className='docs-page__content-row docs-page__content-row--no-margin'>
                            <div className='form__row'>
                                <button
                                    className="btn btn-default btn--small"
                                    id="button-view-content"
                                >
                                    View content
                                </button>

                                <Popover
                                    triggerSelector="#button-view-content"
                                    title="Popover test"
                                    placement="bottom-end"
                                    zIndex={999}
                                >
                                    <div>Content</div>
                                </Popover>
                            </div>
                        </div>

                    </Markup.ReactMarkupPreview>

                    <Markup.ReactMarkupCode>{`
                        rrr
                    `}</Markup.ReactMarkupCode>
                </Markup.ReactMarkup>
            </section>
        )
    }
}
