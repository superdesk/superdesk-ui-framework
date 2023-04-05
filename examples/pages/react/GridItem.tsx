import * as React from 'react';
import * as Markup from '../../js/react';
import { GridList, Icon, IconButton, Badge, Checkbox, Prop, PropsList } from '../../../app-typescript';
import * as GridElements from '../../../app-typescript/components/GridItem';

interface IState {
    selected: boolean,
    locked: boolean,
    status: Array<string>
}

export default class GridItemDoc extends React.Component<{}, IState> {
    constructor(props: Readonly<{}>) {
        super(props);
        this.state = {
            selected: true,
            locked: false,
            status: ['selected']
        };
    }

    changeStatus(status: string) {
        let statuses = this.state.status;

        if (statuses.includes(status)) {
            statuses.splice(statuses.indexOf(status), 1);
        } else {
            statuses.push(status);
        }

        this.setState({status: statuses});
    }
    
    render() {
        return (
            <section className='docs-page__container'>
                <h2 className='docs-page__h2'>GridItem</h2>
                
                <Markup.ReactMarkupCodePreview>{`
                    <GridElements.GridItem itemtype='photo'>
                        <GridElements.GridItemMedia>...</GridElements.GridItemMedia>
                        <GridElements.GridItemContent>
                            <GridElements.GridItemTime time='10.11.2020' />
                            <GridElements.GridItemTitle>Item title</GridElements.GridItemTitle>
                            <GridElements.GridItemText>Item description...</GridElements.GridItemText>
                        </GridElements.GridItemContent>
                        <GridElements.GridItemFooter>
                            <GridElements.GridItemFooterBlock align='left'>
                                <Icon name='photo' className='sd-grid-item__type-icn' />
                            </GridElements.GridItemFooterBlock>
                            <GridElements.GridItemFooterActions>
                                <IconButton icon='dots-vertical' ariaValue='Actions' onClick={()=> false} />
                            </GridElements.GridItemFooterActions>
                        </GridElements.GridItemFooter>
                    </GridElements.GridItem>
                `}
                </Markup.ReactMarkupCodePreview>

                <p className="docs-page__paragraph">The <code>GridItem</code> is a complex container component intended for the display of content items in a grid structure.
                Although it can be used as a standalone element, it works best as a child of the <code>GridList</code> component. If used without the <code>GridList</code> it should 
                be placed in an element with a constrained width, as it doesn't have a limited width on its own. 
                </p>

                <h3 className="docs-page__h3 docs-page__h3--small-top-m">Full structure</h3>

                <Markup.ReactMarkup>
                    <Markup.ReactMarkupPreview>
                        <GridList size="small" gap="medium" margin="1">
                            <GridElements.GridItem itemtype='photo' status={this.state.status} onClick={()=> false}>
                                <GridElements.GridItemCheckWrapper>
                                    <Checkbox checked={this.state.selected} label={{text:''}} onChange={(value) => {
                                            this.setState({selected: value});
                                            this.changeStatus('selected');
                                    }} />
                                </GridElements.GridItemCheckWrapper>
                                <GridElements.GridItemTopActions>
                                    <IconButton icon='fullscreen' ariaValue='Fullscreen preview' onClick={()=> false} />
                                </GridElements.GridItemTopActions>
                                <GridElements.GridItemMedia>
                                    <img src="/bill.jpg" alt="Bill" />
                                </GridElements.GridItemMedia>
                                <GridElements.GridItemContent>
                                    <GridElements.GridItemTime time='10.11.2020' />
                                    <GridElements.GridItemTitle>Item title nulla vitae elit libero, a pharetra augue</GridElements.GridItemTitle>
                                    <GridElements.GridItemText>Item description cras mattis consectetur purus sit amet fermentum. Vivamus sagittis lacus vel augue laoreet...</GridElements.GridItemText>
                                </GridElements.GridItemContent>
                                <GridElements.GridItemFooter>
                                    <GridElements.GridItemFooterBlock align='left'>
                                        <Icon name='photo' className='sd-grid-item__type-icn' />
                                        <Badge text='2' color='deep-orange--500' />
                                        <Badge text='5' shape='square' color='blue-grey--300' />
                                    </GridElements.GridItemFooterBlock>
                                    <GridElements.GridItemFooterActions>
                                        <IconButton icon='dots-vertical' ariaValue='Actions' onClick={()=> false} />
                                    </GridElements.GridItemFooterActions>
                                </GridElements.GridItemFooter>
                            </GridElements.GridItem>

                            <GridElements.GridItem itemtype='audio' locked={true} fetched={true} onClick={()=> false}>
                                <GridElements.GridItemTopActions>
                                    <IconButton icon='play' ariaValue='Play' onClick={()=> false} />
                                </GridElements.GridItemTopActions>
                                <GridElements.GridItemMedia></GridElements.GridItemMedia>
                                <GridElements.GridItemContent>
                                    <GridElements.GridItemTime time='10.11.2020' />
                                    <GridElements.GridItemTitle>Maecenas faucibus mollis interdum</GridElements.GridItemTitle>
                                    <GridElements.GridItemText>Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Sed posuere consectetur est at lobortis...</GridElements.GridItemText>
                                </GridElements.GridItemContent>
                                <GridElements.GridItemFooter>
                                    <GridElements.GridItemFooterBlock align='left'>
                                        <Icon name='audio' className='sd-grid-item__type-icn' />
                                        <Badge text='1' color='deep-orange--600' />
                                        <Badge text='4' shape='square' color='blue-grey--500' />
                                    </GridElements.GridItemFooterBlock>
                                    <GridElements.GridItemFooterActions>
                                        <IconButton icon='dots-vertical' ariaValue='Actions' onClick={()=> false} />
                                    </GridElements.GridItemFooterActions>
                                </GridElements.GridItemFooter>
                            </GridElements.GridItem>

                            <GridElements.GridItem itemtype='photo'>
                                <GridElements.GridItemTopActions>
                                    <IconButton icon='fullscreen' ariaValue='Fullscreen preview' onClick={()=> false} />
                                </GridElements.GridItemTopActions>
                                <GridElements.GridItemMedia>
                                    <img src="/obama_2.jpg" alt="Barack" />
                                </GridElements.GridItemMedia>
                                <GridElements.GridItemContent>
                                    <GridElements.GridItemTime time='10.11.2020' />
                                    <GridElements.GridItemTitle>Fusce dapibus, tellus ac cursus commodo, tortor mauris</GridElements.GridItemTitle>
                                    <GridElements.GridItemText>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Maecenas sed diam eget risus varius blandit sit amet non magna...</GridElements.GridItemText>
                                </GridElements.GridItemContent>
                                <GridElements.GridItemFooter>
                                    <GridElements.GridItemFooterBlock align='left'>
                                        <Icon name='photo' className='sd-grid-item__type-icn' />
                                        <Badge text='3' color='orange--500' />
                                        <Badge text='5' shape='square' color='blue-grey--300' />
                                    </GridElements.GridItemFooterBlock>
                                    <GridElements.GridItemFooterActions>
                                        <IconButton icon='dots-vertical' ariaValue='Actions' onClick={()=> false} />
                                    </GridElements.GridItemFooterActions>
                                </GridElements.GridItemFooter>
                            </GridElements.GridItem>

                            <GridElements.GridItem itemtype='photo' status={['actioning']}>
                                <GridElements.GridItemTopActions>
                                    <IconButton icon='fullscreen' ariaValue='Fullscreen preview' onClick={()=> false} />
                                </GridElements.GridItemTopActions>
                                <GridElements.GridItemMedia>
                                    <img src="/d_trump.jpg" alt="Ronmo" />
                                </GridElements.GridItemMedia>
                                <GridElements.GridItemContent>
                                    <GridElements.GridItemTime time='10.11.2020' />
                                    <GridElements.GridItemTitle>Sed posuere consectetur est at lobortis</GridElements.GridItemTitle>
                                    <GridElements.GridItemText>Pellentesque ornare sem lacinia quam venenatis vestibulum. Sed posuere consectetur est at lobortis...</GridElements.GridItemText>
                                </GridElements.GridItemContent>
                                <GridElements.GridItemFooter>
                                    <GridElements.GridItemFooterBlock align='left'>
                                        <Icon name='photo' className='sd-grid-item__type-icn' />
                                        <Badge text='3' color='orange--500' />
                                        <Badge text='5' shape='square' color='blue-grey--300' />
                                    </GridElements.GridItemFooterBlock>
                                    <GridElements.GridItemFooterActions>
                                        <IconButton icon='dots-vertical' ariaValue='Actions' onClick={()=> false} />
                                    </GridElements.GridItemFooterActions>
                                </GridElements.GridItemFooter>
                            </GridElements.GridItem>

                            <GridElements.GridItem itemtype='slideshow' fetched={true} onClick={()=> false}>
                                <GridElements.GridItemMedia></GridElements.GridItemMedia>
                                <GridElements.GridItemContent>
                                    <GridElements.GridItemTime time='10.11.2020' />
                                    <GridElements.GridItemTitle>Nulla vitae elit libero, a pharetra augue</GridElements.GridItemTitle>
                                    <GridElements.GridItemText>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec sed odio dui...</GridElements.GridItemText>
                                </GridElements.GridItemContent>
                                <GridElements.GridItemFooter>
                                    <GridElements.GridItemFooterBlock align='left'>
                                        <Icon name='slideshow' className='sd-grid-item__type-icn' />
                                        <Badge text='1' color='deep-orange--600' />
                                        <Badge text='5' shape='square' color='blue-grey--300' />
                                    </GridElements.GridItemFooterBlock>
                                    <GridElements.GridItemFooterActions>
                                        <IconButton icon='dots-vertical' ariaValue='Actions' onClick={()=> false} />
                                    </GridElements.GridItemFooterActions>
                                </GridElements.GridItemFooter>
                            </GridElements.GridItem>

                        </GridList>

                    </Markup.ReactMarkupPreview>
                    <Markup.ReactMarkupCode>{`
                        <GridList size="small" gap="medium" margin="1">
                            <GridElements.GridItem itemtype='photo' status={this.state.status} onClick={()=> false}>
                                <GridElements.GridItemCheckWrapper>
                                    <Checkbox checked={this.state.selected} label={{text:''}} onChange={(value) => {
                                            this.setState({selected: value});
                                            this.changeStatus('selected');
                                    }} />
                                </GridElements.GridItemCheckWrapper>
                                <GridElements.GridItemTopActions>
                                    <IconButton icon='fullscreen' ariaValue='Fullscreen preview' onClick={()=> false} />
                                </GridElements.GridItemTopActions>
                                <GridElements.GridItemMedia>
                                    <img src="/bill.jpg" alt="Bill" />
                                </GridElements.GridItemMedia>
                                <GridElements.GridItemContent>
                                    <GridElements.GridItemTime time='10.11.2020' />
                                    <GridElements.GridItemTitle>Item title nulla vitae elit libero, a pharetra augue</GridElements.GridItemTitle>
                                    <GridElements.GridItemText>Item description cras mattis consectetur purus sit amet fermentum. Vivamus sagittis lacus vel augue laoreet...</GridElements.GridItemText>
                                </GridElements.GridItemContent>
                                <GridElements.GridItemFooter>
                                    <GridElements.GridItemFooterBlock align='left'>
                                        <Icon name='photo' className='sd-grid-item__type-icn' />
                                        <Badge text='2' color='deep-orange--500' />
                                        <Badge text='5' shape='square' color='blue-grey--300' />
                                    </GridElements.GridItemFooterBlock>
                                    <GridElements.GridItemFooterActions>
                                        <IconButton icon='dots-vertical' ariaValue='Actions' onClick={()=> false} />
                                    </GridElements.GridItemFooterActions>
                                </GridElements.GridItemFooter>
                            </GridElements.GridItem>

                            <GridElements.GridItem itemtype='audio' locked={true} fetched={true} onClick={()=> false}>
                                <GridElements.GridItemTopActions>
                                    <IconButton icon='play' ariaValue='Play' onClick={()=> false} />
                                </GridElements.GridItemTopActions>
                                <GridElements.GridItemMedia></GridElements.GridItemMedia>
                                <GridElements.GridItemContent>
                                    <GridElements.GridItemTime time='10.11.2020' />
                                    <GridElements.GridItemTitle>Maecenas faucibus mollis interdum</GridElements.GridItemTitle>
                                    <GridElements.GridItemText>Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Sed posuere consectetur est at lobortis...</GridElements.GridItemText>
                                </GridElements.GridItemContent>
                                <GridElements.GridItemFooter>
                                    <GridElements.GridItemFooterBlock align='left'>
                                        <Icon name='audio' className='sd-grid-item__type-icn' />
                                        <Badge text='1' color='deep-orange--600' />
                                        <Badge text='4' shape='square' color='blue-grey--500' />
                                    </GridElements.GridItemFooterBlock>
                                    <GridElements.GridItemFooterActions>
                                        <IconButton icon='dots-vertical' ariaValue='Actions' onClick={()=> false} />
                                    </GridElements.GridItemFooterActions>
                                </GridElements.GridItemFooter>
                            </GridElements.GridItem>

                            <GridElements.GridItem itemtype='photo'>
                                <GridElements.GridItemTopActions>
                                    <IconButton icon='fullscreen' ariaValue='Fullscreen preview' onClick={()=> false} />
                                </GridElements.GridItemTopActions>
                                <GridElements.GridItemMedia>
                                    <img src="/obama_2.jpg" alt="Barack" />
                                </GridElements.GridItemMedia>
                                <GridElements.GridItemContent>
                                    <GridElements.GridItemTime time='10.11.2020' />
                                    <GridElements.GridItemTitle>Fusce dapibus, tellus ac cursus commodo, tortor mauris</GridElements.GridItemTitle>
                                    <GridElements.GridItemText>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Maecenas sed diam eget risus varius blandit sit amet non magna...</GridElements.GridItemText>
                                </GridElements.GridItemContent>
                                <GridElements.GridItemFooter>
                                    <GridElements.GridItemFooterBlock align='left'>
                                        <Icon name='photo' className='sd-grid-item__type-icn' />
                                        <Badge text='3' color='orange--500' />
                                        <Badge text='5' shape='square' color='blue-grey--300' />
                                    </GridElements.GridItemFooterBlock>
                                    <GridElements.GridItemFooterActions>
                                        <IconButton icon='dots-vertical' ariaValue='Actions' onClick={()=> false} />
                                    </GridElements.GridItemFooterActions>
                                </GridElements.GridItemFooter>
                            </GridElements.GridItem>

                            <GridElements.GridItem itemtype='photo' status={['actioning']}>
                                <GridElements.GridItemTopActions>
                                    <IconButton icon='fullscreen' ariaValue='Fullscreen preview' onClick={()=> false} />
                                </GridElements.GridItemTopActions>
                                <GridElements.GridItemMedia>
                                    <img src="/d_trump.jpg" alt="Ronmo" />
                                </GridElements.GridItemMedia>
                                <GridElements.GridItemContent>
                                    <GridElements.GridItemTime time='10.11.2020' />
                                    <GridElements.GridItemTitle>Sed posuere consectetur est at lobortis</GridElements.GridItemTitle>
                                    <GridElements.GridItemText>Pellentesque ornare sem lacinia quam venenatis vestibulum. Sed posuere consectetur est at lobortis...</GridElements.GridItemText>
                                </GridElements.GridItemContent>
                                <GridElements.GridItemFooter>
                                    <GridElements.GridItemFooterBlock align='left'>
                                        <Icon name='photo' className='sd-grid-item__type-icn' />
                                        <Badge text='3' color='orange--500' />
                                        <Badge text='5' shape='square' color='blue-grey--300' />
                                    </GridElements.GridItemFooterBlock>
                                    <GridElements.GridItemFooterActions>
                                        <IconButton icon='dots-vertical' ariaValue='Actions' onClick={()=> false} />
                                    </GridElements.GridItemFooterActions>
                                </GridElements.GridItemFooter>
                            </GridElements.GridItem>

                            <GridElements.GridItem itemtype='slideshow' fetched={true} onClick={()=> false}>
                                <GridElements.GridItemMedia></GridElements.GridItemMedia>
                                <GridElements.GridItemContent>
                                    <GridElements.GridItemTime time='10.11.2020' />
                                    <GridElements.GridItemTitle>Nulla vitae elit libero, a pharetra augue</GridElements.GridItemTitle>
                                    <GridElements.GridItemText>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec sed odio dui...</GridElements.GridItemText>
                                </GridElements.GridItemContent>
                                <GridElements.GridItemFooter>
                                    <GridElements.GridItemFooterBlock align='left'>
                                        <Icon name='slideshow' className='sd-grid-item__type-icn' />
                                        <Badge text='1' color='deep-orange--600' />
                                        <Badge text='5' shape='square' color='blue-grey--300' />
                                    </GridElements.GridItemFooterBlock>
                                    <GridElements.GridItemFooterActions>
                                        <IconButton icon='dots-vertical' ariaValue='Actions' onClick={()=> false} />
                                    </GridElements.GridItemFooterActions>
                                </GridElements.GridItemFooter>
                            </GridElements.GridItem>

                        </GridList>    
                    `}
                    </Markup.ReactMarkupCode>
                </Markup.ReactMarkup>

                <h3 className="docs-page__h3 docs-page__h3--small-top-m">Minimal structure</h3>
                <p className="docs-page__paragraph">Mandatory structural sub-elements of the <code>GridItem</code> are <code>GridItemMedia</code> and <code>GridItemContent</code>. The use of the <code>GridItemText</code> component is optional, 
                any appropriate and properly styled HTML element can be used instead.
                </p>

                <Markup.ReactMarkup>
                    <Markup.ReactMarkupPreview>
                        <GridList size="small" gap="medium" margin="1">
                            <GridElements.GridItem itemtype='photo' onClick={()=> false}>
                                <GridElements.GridItemMedia>
                                    <img src="/bill.jpg" alt="Bill" />
                                </GridElements.GridItemMedia>
                                <GridElements.GridItemContent>
                                    <GridElements.GridItemText>Item description cras mattis consectetur purus sit amet fermentum. Vivamus sagittis lacus vel augue laoreet...</GridElements.GridItemText>
                                </GridElements.GridItemContent>
                            </GridElements.GridItem>

                            <GridElements.GridItem itemtype='audio' locked={true} fetched={true} onClick={()=> false}>
                                <GridElements.GridItemMedia></GridElements.GridItemMedia>
                                <GridElements.GridItemContent>
                                    <GridElements.GridItemText>Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Sed posuere consectetur est at lobortis...</GridElements.GridItemText>
                                </GridElements.GridItemContent>
                            </GridElements.GridItem>

                            <GridElements.GridItem itemtype='composite' status={['activated']}>
                                <GridElements.GridItemMedia></GridElements.GridItemMedia>
                                <GridElements.GridItemContent>
                                    <GridElements.GridItemText>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Maecenas sed diam eget risus varius blandit sit amet non magna...</GridElements.GridItemText>
                                </GridElements.GridItemContent>
                            </GridElements.GridItem>
                        </GridList>

                    </Markup.ReactMarkupPreview>
                    <Markup.ReactMarkupCode>{`
                        <GridList size="small" gap="medium" margin="1">
                            <GridElements.GridItem itemtype='photo' onClick={()=> false}>
                                <GridElements.GridItemMedia>
                                    <img src="/bill.jpg" alt="Bill" />
                                </GridElements.GridItemMedia>
                                <GridElements.GridItemContent>
                                    <GridElements.GridItemText>Item description cras mattis consectetur purus sit amet fermentum. Vivamus sagittis lacus vel augue laoreet...</GridElements.GridItemText>
                                </GridElements.GridItemContent>
                            </GridElements.GridItem>

                            <GridElements.GridItem itemtype='audio' locked={true} fetched={true} onClick={()=> false}>
                                <GridElements.GridItemMedia></GridElements.GridItemMedia>
                                <GridElements.GridItemContent>
                                    <GridElements.GridItemText>Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Sed posuere consectetur est at lobortis...</GridElements.GridItemText>
                                </GridElements.GridItemContent>
                            </GridElements.GridItem>

                            <GridElements.GridItem itemtype='composite' status={['activated']}>
                                <GridElements.GridItemMedia></GridElements.GridItemMedia>
                                <GridElements.GridItemContent>
                                    <GridElements.GridItemText>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Maecenas sed diam eget risus varius blandit sit amet non magna...</GridElements.GridItemText>
                                </GridElements.GridItemContent>
                            </GridElements.GridItem>
                        </GridList>    
                    `}
                    </Markup.ReactMarkupCode>
                </Markup.ReactMarkup>
                
                <h3 className="docs-page__h3">GridItem Props</h3>
                <PropsList>
                    <Prop name='status' isRequired={false} type='actioning | selected | activated | string' default='/' description='Specifies the status of the item. Multiple values are possible.'/>
                    <Prop name='itemtype' isRequired={false} type='audio | composite | file | graphic | photo | slideshow | text | video | string' default='file' description='Specifies the file type of the item.'/>
                    <Prop name='fetched' isRequired={false} type='boolean' default='false' description='If set to true it will add a visual marker in the content area indicating that the item was fetched.'/>
                    <Prop name='locked' isRequired={false} type='boolean' default='false' description='Visual indication if the item is locked (red border at the bottom).'/>
                    <Prop name='onClick' isRequired={false} type='function' default='false' description='Callback fired when when the item is pressed. Should be added only if there is a click action on the whole item. Adds pointer cursor and hover action to the item if present.'/>
                </PropsList>

                <h3 className="docs-page__h3">GridItemFooterBlock Props</h3>
                <PropsList>
                    <Prop name='align' isRequired={false} type='left | right' default='left' description='Sets the alignment of items inside the footer. Must be placed inside the GridItemFooter component.'/>
                </PropsList>

                <h3 className="docs-page__h3">GridItemFooterActions Props</h3>
                <PropsList>
                    <Prop name='autohide' isRequired={false} type='boolean' default='true' description='Action buttons in the footer are by default hidden and revealed only when the cursor hovers the item. Set to false to make the action buttons always visible.'/>
                </PropsList>

                <h3 className="docs-page__h3">GridItemTime Props</h3>
                <PropsList>
                    <Prop name='time' isRequired={true} type='sring' default='/' description='Sets the value of the time component.'/>
                </PropsList>

                

            </section>
        )
    }
}