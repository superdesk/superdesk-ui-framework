import * as React from 'react';

import * as Markup from '../../js/react';

import { SubNav, NavButton, ButtonGroup } from '../../../app-typescript';

export default class NavButtonsDoc extends React.Component {
    render(){
        return(
            <section className='docs-page__container'>
                <h2 className='docs-page__h2'>Navigation button</h2>
                <p></p>
                <Markup.ReactMarkupCodePreview>{`
                `}
                </Markup.ReactMarkupCodePreview>

                <Markup.ReactMarkup>
                    <Markup.ReactMarkupPreview>
                        <p className='docs-page__paragraph'>Navigation button</p>
                        <div className='docs-page__content-row'>
                            <SubNav zIndex={3}>
                                <ButtonGroup align='center'>
                                    <NavButton icon='photo' theme='dark' onClick={()=> false}></NavButton>
                                </ButtonGroup>
                            </SubNav>
                        </div>
                    </Markup.ReactMarkupPreview>
                    <Markup.ReactMarkupCode>{`        
                    `}
                    </Markup.ReactMarkupCode>
                </Markup.ReactMarkup>
            </section>
        );
    }
}
