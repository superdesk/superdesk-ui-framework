import * as React from 'react';
import {TagInput} from '../../../app-typescript/components/TagInput';
import * as Markup from '../../js/react';

export default class TagInputDocs extends React.Component<{}, {value: Array<string>}> {
    constructor(props) {
        super(props);

        this.state = {
            value: ['asd'],
        }
    }

    render() {
        return (
            <section className="docs-page__container">
                <h2 className="docs-page__h2">Tag input</h2>
                <Markup.ReactMarkupCodePreview>{`
                    <TagInput
                        onChange={(value) => {
                            this.setState({
                                value: value
                            })
                        }}
                        value={this.state.value}
                        placeholder="Test"
                    />
                `}
                </Markup.ReactMarkupCodePreview>
                <h3 className="docs-page__h3">Tag input</h3>
                <Markup.ReactMarkup>
                    <Markup.ReactMarkupPreview>
                        <div className='docs-page__content-row'>
                            <TagInput
                                required
                                info={'Info Message'}
                                error={'Error Message'}
                                label={'TreeSelect Label'}
                                onChange={(value) => {
                                    this.setState({
                                        value: value,
                                    });
                                }}
                                value={this.state.value}
                                //placeholder="Test"
                            />
                        </div>
                    </Markup.ReactMarkupPreview>
                    <Markup.ReactMarkupCode>{`
                        <TagInput
                            onChange={(value) => {
                                this.setState({
                                    value: value
                                })
                            }}
                            value={this.state.value}
                            placeholder="Test"
                        />
                    `}
                    </Markup.ReactMarkupCode>
                </Markup.ReactMarkup>
                {/* <h3 className="docs-page__h3">Props</h3>
                <PropsList>
                    <Prop name='tablist size' isRequired={false} type='small | normal | large' default='normal' description='Specifies a small, normal or large button.'/>
                    <Prop name='tablist theme' isRequired={false} type='light | dark' default='light' description='Styles tablist for diffrent background.'/>
                    <Prop name='tab label' isRequired={false} type='string' default='/' description='Text value of Tab label'/>
                </PropsList>
                <br/>
                <h4 className="docs-page__h4">Tabs Custom</h4>
                <PropsList>
                    <Prop name='tabs size' isRequired={false} type='small | normal | large' default='normal' description='Specifies a small, normal or large button.'/>
                    <Prop name='tabs theme' isRequired={false} type='light | dark' default='light' description='Styles tablist for diffrent background.'/>
                    <Prop name='tabs ariaLabel' isRequired={false} type='string' default='/' description='Text value of aria-label'/>
                    <Prop name='tabs onClick' isRequired={true} type='function' default='/' description='Use to return value of clicked label'/>
                    <Prop name='tablabel indexValue' isRequired={true} type='number' default='/' description='Index value of label'/>
                    <Prop name='tablabel label' isRequired={true} type='string' default='/' description='Text value of Tab label'/>

                    <Prop name='tabcontent theme' isRequired={false} type='light | dark' default='light' description='Styles tablist for diffrent background.'/>
                    <Prop name='tabcontent activePanel' isRequired={true} type='number' default='/' description='Index value of active Tab'/>
                    <Prop name='tabpanel indexValue' isRequired={true} type='number' default='/' description='Index value of Tab Panel'/>
                </PropsList> */}
            </section>
        )
    }
}
