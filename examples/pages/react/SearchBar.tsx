import * as React from 'react';
import * as Markup from '../../js/react';
import { PropsList, Prop } from '../../../app-typescript';
import { SearchBar, SubNav } from '../../pages/playgrounds/react-playgrounds/components';

export default class SearchBarDoc extends React.Component {
    render() {
        return (
            <section className='docs-page__container'>
                <h2 className='docs-page__h2'>Search bar</h2>
                <p></p>
                <Markup.ReactMarkupCodePreview>{`
                    <SearchBar placeholder='Search' type='expanded' />
                `}
                </Markup.ReactMarkupCodePreview>

                <Markup.ReactMarkup>
                    <Markup.ReactMarkupPreview>
                        <p className="docs-page__paragraph docs-page__h3--small-top-m">// Expanded (default)</p>
                        <p className="docs-page__paragraph--small">This version is usually placed inside the SubNav component.</p>
                        <SubNav>
                            <SearchBar placeholder='Search media' type='expanded'></SearchBar>
                        </SubNav>
                        <p className="docs-page__paragraph docs-page__h3--small-top-m">// Boxed</p>
                        <SearchBar placeholder='Search' type='boxed'></SearchBar>
                    </Markup.ReactMarkupPreview>
                    <Markup.ReactMarkupCode>{`
                        <SearchBar placeholder='Search media' type='expanded'></SearchBar>       
                    `}
                    </Markup.ReactMarkupCode>
                </Markup.ReactMarkup>

                <h3 className="docs-page__h3">Props</h3>
                <PropsList>
                    <Prop name='type' isRequered={false} type='expanded | boxed | collapsed' default='expanded' description='Specifies the visual style of the Search bar.' />
                    <Prop name='placeholder' isRequered={true} type='string' default='/' description='Placeholder text inside the search field.' />
                    <Prop name='focused' isRequered={false} type='boolean' default='false' description='Indicates if the field is focused or not.' />
                </PropsList>
            </section>
        );
    }
}
