import * as React from 'react';
import * as Markup from '../../js/react';
import { GridList, Prop, PropsList } from '../../../app-typescript';


export default class GridListDoc extends React.Component {
    render() {
        return (
            <section className='docs-page__container'>
                <h2 className='docs-page__h2'>GridList</h2>
                
                <Markup.ReactMarkupCodePreview>{`
                    <GridList size="small" gap="medium" margin="1">
                    ... 
                    </GridList>
                `}
                </Markup.ReactMarkupCodePreview>

                <p className="docs-page__paragraph">Grid list component implemented with CSS grid. The list is responsive by default, no additional media query is needed. Any container item can be placed inside the grid list but it's ideally combined with the GridItem.</p>

                <Markup.ReactMarkup>
                    <Markup.ReactMarkupPreview>
                        <p className="docs-page__paragraph">// default (small)</p>
                        <GridList size="small" gap="medium" margin="1">
                        <div className="docs-page__example-box sd-shadow--z2">
                                <p>Item 1</p>
                            </div>
                            <div className="docs-page__example-box sd-shadow--z2">
                                <p>Item 2</p>
                            </div>
                            <div className="docs-page__example-box sd-shadow--z2">
                                <p>Item 3</p>
                            </div>
                            <div className="docs-page__example-box sd-shadow--z2">
                                <p>Item 4</p>
                            </div>
                        </GridList>
                        <p className="docs-page__paragraph">// extra small (x-small)</p>
                        <GridList size="x-small" gap="small" margin="1">
                            <div className="docs-page__example-box sd-shadow--z2">
                                <p>Item 1</p>
                            </div>
                            <div className="docs-page__example-box sd-shadow--z2">
                                <p>Item 2</p>
                            </div>
                            <div className="docs-page__example-box sd-shadow--z2">
                                <p>Item 3</p>
                            </div>
                            <div className="docs-page__example-box sd-shadow--z2">
                                <p>Item 4</p>
                            </div>
                        </GridList>
                        <p className="docs-page__paragraph">// large</p>
                        <GridList size="large" gap="medium" margin="1">
                            <div className="docs-page__example-box sd-shadow--z2">
                                <p>Item 1</p>
                            </div>
                            <div className="docs-page__example-box sd-shadow--z2">
                                <p>Item 2</p>
                            </div>
                            <div className="docs-page__example-box sd-shadow--z2">
                                <p>Item 3</p>
                            </div>
                            <div className="docs-page__example-box sd-shadow--z2">
                                <p>Item 4</p>
                            </div>
                        </GridList>

                    </Markup.ReactMarkupPreview>
                    <Markup.ReactMarkupCode>{`
                        // default (small)
                        <GridList size="small" gap="medium" margin="1">
                            Item 1
                            Item 2
                            ...
                        </GridList>

                        // extra small (x-small)
                        <GridList size="x-small" gap="small" margin="1">
                            Item 1
                            Item 2
                            ...
                        </GridList>

                        // large
                        <GridList size="large" gap="medium" margin="1">
                            Item 1
                            Item 2
                            ...
                        </GridList>      
                    `}
                    </Markup.ReactMarkupCode>
                </Markup.ReactMarkup>


                <h3 className="docs-page__h3">Props</h3>
                <PropsList>
                    <Prop name='size' isRequered={false} type='x-small | small | medium | large' default='small' description='Specifies the size of the items in the grid. '/>
                    <Prop name='gap' isRequered={false} type='small | medium | large | x-large' default='small' description='Defines the gap between the items inside the Grid list. '/>
                    <Prop name='margin' isRequered={false} type='0 | 1 | 2 | 3' default='3' description='Defines the margin around the Grid list. The values are based on multipliers of the the $sd-base-increment (equal to 8px). Setting the value to 3 results in a margin of 24px.'/>
                </PropsList>

            </section>
        )
    }
}