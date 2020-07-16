import * as React from 'react';
import * as Markup from '../../js/react';
import { clone } from 'lodash';
import { Tag, Prop, PropsList } from '../../../app-typescript';

interface ITag{
    tags: Array<any>;
}
export default class TagDoc extends React.Component<{}, ITag> {
    constructor(props){
        super(props);
        this.state = {
            tags: [{text: 'This is a tag'},{text: 'This is another tag', shade:'darker'},{text: 'Lorem ipsum', shade:'highlight1'}, {text: 'Dolor amet', shade:'highlight2', shape:'square'}],
        }
        this.handleClick=this.handleClick.bind(this);
    }

    handleClick(i:number){
        let newTags = clone(this.state.tags);
        newTags.splice(i, 1);
        this.setState({
            tags: newTags
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
                <div className='docs-page__content-row'>
                    {this.state.tags.map((tag,index)=>{
                            return (
                                <React.Fragment key={index}>
                                    <Tag keyValue={index} text={tag.text} shade={tag.shade} shape={tag.shape} onClick={()=>this.handleClick(index)}/>
                                </React.Fragment>
                        )
                        })}
                </div>
                </Markup.ReactMarkupPreview>
                <Markup.ReactMarkupCode>{`
                    <Tag text='This is a tag' onClick={()=>false}/>
                    <Tag text='This is a another tag' shade='darker' onClick={()=>false}/>
                    <Tag text='Lorem ipsum' shade='highlight1' onClick={()=>false}/>
                    <Tag text='Dolor amet' shade='highlight2' shape='square' onClick={()=>false}/>
                    
                `}          
                </Markup.ReactMarkupCode>
            </Markup.ReactMarkup>

            <h3 className="docs-page__h3">Props</h3>
                <PropsList>
                    <Prop name='text' isRequered={true} type='string' default='/' description='Tag text value.'/>
                    <Prop name='shade' isRequered={false} type='light | darker | highlight1 | highlight2' default='light' description='Shade colour of tag'/>
                    <Prop name='shape' isRequered={false} type='round | square' default='round' description='Make shape of tag square or default round.'/>
                    <Prop name='keyValue' isRequered={false} type='number' default='/' description='Value of tag key'/>
                </PropsList>
        </section>
        )
    }
}
