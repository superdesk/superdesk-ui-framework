import * as React from 'react';
import * as Markup from '../../js/react';

import { ButtonGroup, Button} from '../../../app-typescript';

export default class ButtonGroupsDoc extends React.Component {
    render() {
        return (
            <section className="docs-page__container">
                <h2 className="docs-page__h2">Button group</h2>
                <Markup.ReactMarkupCodePreview>{`
                    <ButtonGroup align='left'>
                        <Button text='one' style='hollow' onClick={()=> false}/>
                        <Button text='two' style='hollow' onClick={()=> false}/>
                    </ButtonGroup>
                `}
                </Markup.ReactMarkupCodePreview>
                <h3 className="docs-page__h3">Horizontal</h3>
                <Markup.ReactMarkup>
                    <Markup.ReactMarkupPreview>
                    <p className="docs-page__paragraph">// Left</p>
                    <div className="form__row form__row--flex docs-page__test-helper-2">
                        <ButtonGroup align='left'>
                            <Button text='one' style='hollow' onClick={()=> false}/>
                            <Button text='two' style='hollow' onClick={()=> false}/>
                        </ButtonGroup>
                    </div>
                    <p className="docs-page__paragraph">// Right</p>
                    <div className="form__row form__row--flex docs-page__test-helper-2">
                        <ButtonGroup align='right'>
                            <Button text='Cancel' style='hollow' onClick={()=> false}/>
                            <Button text='Save' type='primary' onClick={()=> false}/>
                        </ButtonGroup>
                    </div>
                    <p className="docs-page__paragraph">// Center</p>
                    <div className="form__row form__row--flex docs-page__test-helper-2">
                        <ButtonGroup align='center'>
                            <Button text='one' style='hollow' onClick={()=> false}/>
                            <Button text='two' style='hollow' onClick={()=> false}/>
                        </ButtonGroup>
                    </div>
                    <p className="docs-page__paragraph">// Left + Center + Right</p>
                    <div className="form__row form__row--flex docs-page__test-helper-2">
                        <ButtonGroup align='left'>
                            <Button text='one' style='hollow' onClick={()=> false}/>
                            <Button text='two' style='hollow' onClick={()=> false}/>
                        </ButtonGroup>
                        <ButtonGroup align='center'>
                            <Button text='three' style='hollow' onClick={()=> false}/>
                            <Button text='four' style='hollow' onClick={()=> false}/>
                        </ButtonGroup>
                        <ButtonGroup align='right'>
                            <Button text='Cancel' style='hollow' onClick={()=> false}/>
                            <Button text='Save' type='primary' onClick={()=> false}/>
                        </ButtonGroup>
                    </div>
                    </Markup.ReactMarkupPreview>
                    <Markup.ReactMarkupCode>{`
                        // Left
                        <ButtonGroup align='left'>
                            <Button text='one' style='hollow' onClick={()=> false}/>
                            <Button text='two' style='hollow' onClick={()=> false}/>
                        </ButtonGroup>

                        // Right
                        <ButtonGroup align='right'>
                            <Button text='Cancel' style='hollow' onClick={()=> false}/>
                            <Button text='Save' type='primary' onClick={()=> false}/>
                        </ButtonGroup>

                        // Left + Center + Right
                        <ButtonGroup align='left'>
                            <Button text='one' style='hollow' onClick={()=> false}/>
                            <Button text='two' style='hollow' onClick={()=> false}/>
                        </ButtonGroup>
                        <ButtonGroup align='center'>
                            <Button text='three' style='hollow' onClick={()=> false}/>
                            <Button text='four' style='hollow' onClick={()=> false}/>
                        </ButtonGroup>
                        <ButtonGroup align='right'>
                            <Button text='Cancel' style='hollow' onClick={()=> false}/>
                            <Button text='Save' type='primary' onClick={()=> false}/>
                        </ButtonGroup>
                    `}
                    </Markup.ReactMarkupCode>
                </Markup.ReactMarkup>

                <h3 className="docs-page__h3">Vertical</h3>
                <Markup.ReactMarkup>
                    <Markup.ReactMarkupPreview>
                    <div className="form__row form__row--flex docs-page__test-helper-2">
                        <ButtonGroup orientation='vertical'>
                            <Button text='one' style='hollow' onClick={()=> false}/>
                            <Button text='two' style='hollow' onClick={()=> false}/>
                        </ButtonGroup>
                    </div>
                    </Markup.ReactMarkupPreview>
                    <Markup.ReactMarkupCode>{`
                        <ButtonGroup orientation='vertical'>
                            <Button text='one' style='hollow' onClick={()=> false}/>
                            <Button text='two' style='hollow' onClick={()=> false}/>
                        </ButtonGroup>
                    `}   
                    </Markup.ReactMarkupCode>
                </Markup.ReactMarkup>
            </section>
        )
    }
}
