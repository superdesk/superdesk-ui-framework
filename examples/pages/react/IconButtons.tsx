import * as React from 'react';

import * as Markup from '../../js/react';

import { IconButton } from '../../../app-typescript';

export default class IconButtonDoc extends React.Component {
    render() {
        return (
            <section className="docs-page__container">
                <h2 className="docs-page__h2">Plain icon button</h2>
                <p className="docs-page__paragraph ng-scope"></p>
                <Markup.ReactMarkup>
                    <Markup.ReactMarkupPreview>
                        <IconButton icon='close-small' tooltip={{text:'I support tooltips!'}} onClick = { ()=> false}/>
                        <IconButton icon='plus-large' onClick = { ()=> false}/>
                        <IconButton icon='dots-vertical' onClick = { ()=> false}/>
                        <IconButton icon='trash' onClick = { ()=> false}/>
                        <IconButton icon='close-small' tooltip={{text:'My tooltip is on right.', flow:'right'}} onClick = { ()=> false}/>
                        <p className="docs-page__paragraph">// Dark UI</p>
                        <div className="docs-page__content-row docs-page__content-row--ui-dark" style={{color:'white'}}>
                            <IconButton icon='close-small' tooltip={{text:'I support tooltips!'}} onClick = { ()=> false}/>
                            <IconButton icon='plus-large' onClick = { ()=> false}/>
                            <IconButton icon='dots-vertical' onClick = { ()=> false}/>
                            <IconButton icon='trash' onClick = { ()=> false}/>
                            <IconButton icon='close-small' tooltip={{text:'My tooltip is on right.', flow:'right'}} onClick = { ()=> false}/>
                        </div> 
                    </Markup.ReactMarkupPreview>
                    <Markup.ReactMarkupCode>
                       
                    </Markup.ReactMarkupCode>
                </Markup.ReactMarkup>
            </section>
        )
    }
}
