import * as React from 'react';
import * as Markup from '../../js/react';
import { TagInput, TagInputTest } from '../../../app-typescript';

export default class TagInputDoc extends React.Component {
    render() {
        return (
            <React.Fragment>
                <section className="docs-page__container">
                    <h2 className="docs-page__h2">Tag Input IN PROGRESS</h2>
                    <p className="docs-page__paragraph">
                        A tag input is an input box that automatically creates tags – also called tokens – out of typed text every time a certain key is pressed. It's useful for tagging and highlighting information right on the input box.
                    </p>
                    <Markup.ReactMarkupCodePreview>{`
                    
                `}
                    </Markup.ReactMarkupCodePreview>
                    <p className='docs-page__paragraph'>PRIME REACT TEST</p>
                    <Markup.ReactMarkup>
                        <Markup.ReactMarkupPreview>
                            <p className="docs-page__paragraph">Test Tag Input</p>
                            <div className='form__row'>
                                <TagInputTest
                                    items={[
                                        { name: 'Afghanistan', code: 'AF' },
                                        { name: 'Åland Islands', code: 'AX' },
                                        { name: 'Albania', code: 'AL' },
                                        { name: 'Algeria', code: 'DZ' },
                                        { name: 'American Samoa', code: 'AS' },
                                        { name: 'AndorrA', code: 'AD' },
                                        { name: 'Angola', code: 'AO' },
                                        { name: 'Anguilla', code: 'AI' },
                                        { name: 'Antarctica', code: 'AQ' },
                                        { name: 'Antigua and Barbuda', code: 'AG' },
                                        { name: 'Argentina', code: 'AR' },
                                        { name: 'Armenia', code: 'AM' },
                                        { name: 'Aruba', code: 'AW' },
                                        { name: 'Australia', code: 'AU' },
                                        { name: 'Austria', code: 'AT' },
                                        { name: 'Azerbaijan', code: 'AZ' },
                                        { name: 'Bahamas', code: 'BS' },
                                        { name: 'Bahrain', code: 'BH' },
                                        { name: 'Bangladesh', code: 'BD' },
                                        { name: 'Barbados', code: 'BB' },
                                        { name: 'Belarus', code: 'BY' },
                                        { name: 'Belgium', code: 'BE' },
                                        { name: 'Belize', code: 'BZ' },
                                        { name: 'Benin', code: 'BJ' },
                                        { name: 'Bermuda', code: 'BM' },
                                        { name: 'Bhutan', code: 'BT' },
                                        { name: 'Bolivia', code: 'BO' },
                                        { name: 'Bosnia and Herzegovina', code: 'BA' },
                                        { name: 'Botswana', code: 'BW' },
                                        { name: 'Bouvet Island', code: 'BV' }]}
                                    keyValue='name'
                                />
                            </div>
                        </Markup.ReactMarkupPreview>
                        <Markup.ReactMarkupCode>{`

                    `}
                        </Markup.ReactMarkupCode>
                    </Markup.ReactMarkup>

                    <p className='docs-page__paragraph'>TAG INPUT FROM SCRATCH TEST</p>
                    <Markup.ReactMarkup>
                        <Markup.ReactMarkupPreview>
                            <p className="docs-page__paragraph">// Tag input with button for picking items from list</p>
                            <div className='form__row'>
                                <TagInput label='Cars' items={['Audi', 'BMW', 'Hyundai', 'Opel', 'Audi2', 'BMW2', 'Hyundai2', 'Opel2', 'Audi3', 'BMW3', 'Hyundai3', 'Opel3', 'Audi4', 'BMW4', 'Hyundai4', 'Opel4', 'Audi5', 'BMW5', 'Hyundai5', 'Opel5', 'Audi6', 'BMW6', 'Hyundai6', 'Opel6']} />
                            </div>

                            <p className="docs-page__paragraph">// Tag input with suggestions + freetype text</p>
                            <div className='form__row'>
                                <TagInput label='Cars' freetype={true} items={['Audi', 'BMW', 'Hyundai', 'Opel', 'Audi2', 'BMW2', 'Hyundai2', 'Opel2', 'Audi3', 'BMW3', 'Hyundai3', 'Opel3', 'Audi4', 'BMW4', 'Hyundai4', 'Opel4', 'Audi5', 'BMW5', 'Hyundai5', 'Opel5', 'Audi6', 'BMW6', 'Hyundai6', 'Opel6']} />
                            </div>

                            <p className="docs-page__paragraph">// Only freetype text</p>
                            <div className='form__row'>
                                <TagInput label='Cars' freetype={true} />
                            </div>
                        </Markup.ReactMarkupPreview>
                        <Markup.ReactMarkupCode>{`

                    `}
                        </Markup.ReactMarkupCode>
                    </Markup.ReactMarkup>
                </section>
            </React.Fragment>
        )
    }
}
