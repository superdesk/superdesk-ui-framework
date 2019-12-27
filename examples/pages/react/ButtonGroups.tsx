import * as React from 'react';
import * as Markup from '../../js/react';

import { ButtonGroup, Button, IconButton, Tooltip, Alert} from '../../../app-typescript';

export default class ButtonGroupsDoc extends React.Component {
    render() {
        return (
            <section className="docs-page__container">
                <h2 className="docs-page__h2">Button group</h2>
                <Markup.ReactMarkupCodePreview>{`
                    <ButtonGroup align='left'>
                        <Button text='one' style='hollow' onClick={()=> false} />
                        <Button text='two' style='hollow' onClick={()=> false} />
                    </ButtonGroup>
                `}
                </Markup.ReactMarkupCodePreview>
                <p className="docs-page__paragraph"><code>ButtonGroup</code> is a wrapper component used to group different button components. It supports <code>Button</code>, <code>IconButton</code> and <code>NavButton</code> as children.</p>
                <p className="docs-page__paragraph">By default the buttons components are grouped horizontally, to group them vertical add <code>orientation='vertical'</code>. Note that vertical alignment will stretch the buttons to the full width of the container, as it is intended for use in narrower layout modules.</p>
                <p className="docs-page__paragraph">Other available options are alignment (left, right and center) and compact mode (less space between buttons).</p>
                <h3 className="docs-page__h3 docs-page__h3--small-top-m ">Horizontal</h3>
                <Alert style='hollow' size='small' type='primary'>
                    NOTE: Alignment will work only in parent elements with display: flex;
                </Alert>
                <Markup.ReactMarkup>
                    <Markup.ReactMarkupPreview>
                    <p className="docs-page__paragraph">// Left</p>
                    <div className="form__row form__row--flex docs-page__test-helper-2">
                        <ButtonGroup align='left'>
                            <Button text='one' style='hollow' onClick={()=> false} />
                            <Button text='two' style='hollow' onClick={()=> false} />
                        </ButtonGroup>
                    </div>
                    <div className="form__row form__row--flex docs-page__test-helper-2 sd-margin-t--2">
                        <ButtonGroup align='left'>
                            <IconButton icon='home' tooltip={{text:'Home'}} onClick={()=> false} />
                            <IconButton icon='bell' tooltip={{text:'Notifications'}} onClick={()=> false} />
                            <IconButton icon='heart' tooltip={{text:'Favorites'}} onClick={()=> false} />
                        </ButtonGroup>
                    </div>
                    
                    <p className="docs-page__paragraph">// Right</p>
                    <div className="form__row form__row--flex docs-page__test-helper-2">
                        <ButtonGroup align='right'>
                            <Button text='Cancel' style='hollow' onClick={()=> false} />
                            <Button text='Save' type='primary' onClick={()=> false} />
                        </ButtonGroup>
                    </div>
                    <div className="form__row form__row--flex docs-page__test-helper-2 sd-margin-t--2">
                        <ButtonGroup align='right'>
                            <IconButton icon='trash' tooltip={{text:'Delete'}} onClick={()=> false} />
                            <IconButton icon='pencil' tooltip={{text:'Edit'}} onClick={()=> false} />
                            <IconButton icon='close-small' tooltip={{text:'Close'}} onClick={()=> false} />
                        </ButtonGroup>
                    </div>
                    <p className="docs-page__paragraph">// Center</p>
                    <div className="form__row form__row--flex docs-page__test-helper-2">
                        <ButtonGroup align='center'>
                            <Button text='one' style='hollow' onClick={()=> false} />
                            <Button text='two' style='hollow' onClick={()=> false} />
                        </ButtonGroup>
                    </div>
                    <p className="docs-page__paragraph">// Left + Center + Right</p>
                    <div className="form__row form__row--flex docs-page__test-helper-2">
                        <ButtonGroup align='left'>
                            <Button text='one' style='hollow' onClick={()=> false} />
                            <Button text='two' style='hollow' onClick={()=> false} />
                        </ButtonGroup>
                        <ButtonGroup align='center'>
                            <Button text='three' style='hollow' onClick={()=> false} />
                            <Button text='four' style='hollow' onClick={()=> false} />
                        </ButtonGroup>
                        <ButtonGroup align='right'>
                            <Button text='Cancel' style='hollow' onClick={()=> false} />
                            <Button text='Save' type='primary' onClick={()=> false} />
                        </ButtonGroup>
                    </div>
                    </Markup.ReactMarkupPreview>
                    <Markup.ReactMarkupCode>{`
                        // Left
                        <ButtonGroup align='left'>
                            <Button text='one' style='hollow' onClick={()=> false} />
                            <Button text='two' style='hollow' onClick={()=> false} />
                        </ButtonGroup>
                        <ButtonGroup align='left'>
                            <IconButton icon='home' tooltip={{text:'Home'}} onClick={()=> false} />
                            <IconButton icon='bell' tooltip={{text:'Notifications'}} onClick={()=> false} />
                            <IconButton icon='heart' tooltip={{text:'Favorites'}} onClick={()=> false} />
                        </ButtonGroup>

                        // Right
                        <ButtonGroup align='right'>
                            <Button text='Cancel' style='hollow' onClick={()=> false} />
                            <Button text='Save' type='primary' onClick={()=> false} />
                        </ButtonGroup>

                        <ButtonGroup align='right'>
                            <IconButton icon='trash' tooltip={{text:'Delete'}} onClick={()=> false} />
                            <IconButton icon='pencil' tooltip={{text:'Edit'}} onClick={()=> false} />
                            <IconButton icon='close-small' tooltip={{text:'Close'}} onClick={()=> false} />
                        </ButtonGroup>

                        // Left + Center + Right
                        <ButtonGroup align='left'>
                            <Button text='one' style='hollow' onClick={()=> false} />
                            <Button text='two' style='hollow' onClick={()=> false} />
                        </ButtonGroup>
                        <ButtonGroup align='center'>
                            <Button text='three' style='hollow' onClick={()=> false} />
                            <Button text='four' style='hollow' onClick={()=> false} />
                        </ButtonGroup>
                        <ButtonGroup align='right'>
                            <Button text='Cancel' style='hollow' onClick={()=> false} />
                            <Button text='Save' type='primary' onClick={()=> false} />
                        </ButtonGroup>
                    `}
                    </Markup.ReactMarkupCode>
                </Markup.ReactMarkup>

                <h3 className="docs-page__h3">Vertical</h3>
                <p className="docs-page__paragraph">Note that the <code>align</code> prop doesn't work in combination with <code>orientation='vertical'</code>. The vertical orientation will stretch buttons to take the full width of the container. Limit this option only to the <code>Button</code> component in narrow layout modules.</p>  

                <Markup.ReactMarkup>
                    <Markup.ReactMarkupPreview>
                    <div className="form__row form__row--flex docs-page__test-helper-2">
                        <ButtonGroup orientation='vertical'>
                            <Button text='one' style='hollow' onClick={()=> false} />
                            <Button text='two' style='hollow' onClick={()=> false} />
                        </ButtonGroup>
                    </div>
                    </Markup.ReactMarkupPreview>
                    <Markup.ReactMarkupCode>{`
                        <ButtonGroup orientation='vertical'>
                            <Button text='one' style='hollow' onClick={()=> false} />
                            <Button text='two' style='hollow' onClick={()=> false} />
                        </ButtonGroup>
                    `}   
                    </Markup.ReactMarkupCode>
                </Markup.ReactMarkup>
            </section>
        )
    }
}
