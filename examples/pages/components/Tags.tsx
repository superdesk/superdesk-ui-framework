import * as React from 'react';
import * as Markup from '../../js/react';
import { clone } from 'lodash';
import { Tag, Prop, PropsList } from '../../../app-typescript';

interface ITag{
    tags: Array<any>;
    tags2: Array<any>;
}
export default class TagDoc extends React.Component<{}, ITag> {
    constructor(props){
        super(props);
        this.state = {
            tags: [
                {text: 'This is a tag'},
                {text: 'This is another tag', shade:'darker'},
                {text: 'Inverse tag', shade:'inverse'},
                {text: 'Lorem ipsum', shade:'highlight1'},
                {text: 'Dolor amet', shade:'highlight2', shape:'square'},
                {text: 'Read only tag', readOnly: true},
                {text: 'Draggable tag', draggable: true},
            ],
            tags2: [
                {text: 'Tag with label', label: 'Label'},
                {text: 'I am', draggable: true, label: 'Draggable'}
            ],
        }
        this.handleClick=this.handleClick.bind(this);
        this.handleClick2=this.handleClick2.bind(this);
    }

    handleClick(i:number){
        let newTags = clone(this.state.tags);
        newTags.splice(i, 1);
        this.setState({
            tags: newTags
        });
    }

    handleClick2(i:number){
        let newTags2 = clone(this.state.tags2);
        newTags2.splice(i, 1);
        this.setState({
            tags2: newTags2
        });
    }
    render() {
        return (
            <section className="docs-page__container"> 
            <h2 className="docs-page__h2">Tag</h2>
            <Markup.ReactMarkupCodePreview>{`
               <Tag text='This is a tag' onClick={()=>false}/>
            `}
            </Markup.ReactMarkupCodePreview>
            
            <Markup.ReactMarkup>
                <Markup.ReactMarkupPreview>
                <div className='docs-page__content-row sd-display--flex sd-gap--small'>
                    {this.state.tags.map((tag,index)=>{
                        return (
                            <React.Fragment key={index}>
                                <Tag keyValue={index}
                                    text={tag.text}
                                    shade={tag.shade}
                                    shape={tag.shape}
                                    label={tag.label}
                                    readOnly={tag.readOnly}
                                    draggable={tag.draggable}
                                    onClick={()=>this.handleClick(index)}/>
                            </React.Fragment>
                        )
                    })}
                </div>
                </Markup.ReactMarkupPreview>
                <Markup.ReactMarkupCode>{`
                    <Tag text='This is a tag' onClick={()=>false}/>
                    <Tag text='This is a another tag' shade='darker' onClick={()=>false}/>
                    <Tag text='Inverse tag' shade='inverse' onClick={()=>false}/>
                    <Tag text='Lorem ipsum' shade='highlight1' onClick={()=>false}/>
                    <Tag text='Dolor amet' shade='highlight2' shape='square' onClick={()=>false}/>
                    <Tag text='Read only tag' readOnly={true} onClick={()=>false}/>
                    
                `}          
                </Markup.ReactMarkupCode>
            </Markup.ReactMarkup>

            <Markup.ReactMarkup>
                <Markup.ReactMarkupPreview>
                <div className='docs-page__content-row sd-display--flex sd-gap--small'>
                    {this.state.tags2.map((tag,index)=>{
                        return (
                            <React.Fragment key={index}>
                                <Tag keyValue={index}
                                    text={tag.text}
                                    label={tag.label}
                                    draggable={tag.draggable}
                                    onClick={() => this.handleClick2(index)}/>
                            </React.Fragment>
                        )
                    })}
                </div>
                </Markup.ReactMarkupPreview>
                <Markup.ReactMarkupCode>{`
                    <Tag text='Tag with label'
                        label='Label'
                        onClick={() => false} />
                `}          
                </Markup.ReactMarkupCode>
            </Markup.ReactMarkup>

            <h3 className="docs-page__h3">Props</h3>
                <PropsList>
                    <Prop name='text' isRequired={true} type='string' default='/' description='Tag text value.'/>
                    <Prop name='shade' isRequired={false} type='light | darker | highlight1 | highlight2 | inverse' default='light' description='Shade colour of the tag.'/>
                    <Prop name='shape' isRequired={false} type='round | square' default='round' description='Shape of tag. Round (default) or square.'/>
                    <Prop name='readOnly' isRequired={false} type='boolean' default='false' description='Removes the option to delete the tag if set to true.'/>
                    <Prop name='keyValue' isRequired={false} type='number' default='/' description='Value of the tag key.'/>
                    <Prop name='label' isRequired={false} type='string' default='/' description='Text of label.'/>
                </PropsList>
        </section>
        )
    }
}
