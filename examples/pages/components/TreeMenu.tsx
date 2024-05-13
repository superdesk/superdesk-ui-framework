import * as React from 'react';
import * as Markup from '../../js/react';
import { PropsList, Prop, Button, Icon } from '../../../app-typescript';
import {ITreeMenuNode, TreeMenu} from '../../../app-typescript/components/TreeMenu';

let options: Array<ITreeMenuNode<{name: string, bgColor?: string}>> = [
    {
        value: {name: 'Category1'},
        children: [
            {
                value: {name: 'Sub-category1'},
                children: [
                    {value: {name: 'Item5'}, onSelect: () => false},
                    {value: {name: 'Item6'}, onSelect: () => false},
                    {value: {name: 'Item7'}, onSelect: () => false},
                    {value: {name: 'Item8'}, onSelect: () => false},

                ]
            },
            {
                value: {name: 'Sub-category2'},
                children: [
                    {value: {name: 'Item9'}, onSelect: () => false},
                    {value: {name: 'Item10'}, onSelect: () => false},
                    {value: {name: 'Item11'}, onSelect: () => false},
                    {value: {name: 'Item12'}, onSelect: () => false},
                ]
            },
            {
                value: {name: 'Sub-category3'},
                children: [
                    {value: {name: 'Item13'}, onSelect: () => false},
                    {value: {name: 'Item14'}, onSelect: () => false},
                ]
            },
            {
                value: {name: 'Sub-category4'},
                children: [
                    {value: {name: 'Item15'}, onSelect: () => false},
                    {value: {name: 'Item16'}, onSelect: () => false},
                ]
            },
            {
                value: {name: 'Sub-category5'},
                children: [
                    {value: {name: 'Item17'}, onSelect: () => false},
                    {value: {name: 'Item18'}, onSelect: () => false},
                    {value: {name: 'Item19'}, onSelect: () => false},
                    {value: {name: 'Item20'}, onSelect: () => false},
                ]
            },
            {
                value: {name: 'Sub-category6'},
                children: [
                    {value: {name: 'Item21'}, onSelect: () => false},
                    {value: {name: 'Item22'}, onSelect: () => false},
                    {value: {name: 'Item23'}, onSelect: () => false},
                    {value: {name: 'Item24'}, onSelect: () => false},
                ]
            }
        ]
    },
    {
        value: {name: 'Category2'},
        children: [
            {value: {name: 'Item1'}, onSelect: () => false},
            {value: {name: 'Item2'}, onSelect: () => false},
        ]
    },
    {
        value: {name: 'Category3', bgColor: 'red'},
        children: [
            {value: {name: 'Item3'}, onSelect: () => false},
            {value: {name: 'Item4'}, onSelect: () => false},
        ]
    },
]

let options2: Array<ITreeMenuNode<{name: string, icon?: any}>>= [
    {
        value: {name: 'Category1', icon: <Icon name='text' />},
        children: [
            {
                value: {name: 'Sub-category1'},
                children: [
                    {value: {name: 'Item5'}, onSelect: () => false},
                    {value: {name: 'Item6'}, onSelect: () => false},
                ]
            },
            {
                value: {name: 'Sub-category2'},
                children: [
                    {value: {name: 'Item7'}, onSelect: () => false},
                    {value: {name: 'Item8'}, onSelect: () => false},
                ]
            },
            {
                value: {name: 'Sub-category3'},
                children: [
                    {value: {name: 'Item9'}, onSelect: () => false},
                    {value: {name: 'Item10'}, onSelect: () => false},
                ]
            },
            {
                value: {name: 'Sub-category4'},
                children: [
                    {value: {name: 'Item11'}, onSelect: () => false},
                    {value: {name: 'Item12'}, onSelect: () => false},
                ]
            },
            {
                value: {name: 'Sub-category5'},
                children: [
                    {value: {name: 'Item13'}, onSelect: () => false},
                    {value: {name: 'Item14'}, onSelect: () => false},
                ]
            },
            {
                value: {name: 'Sub-category6'},
                children: [
                    {value: {name: 'Item15'}, onSelect: () => false},
                    {value: {name: 'Item16'}, onSelect: () => false},
                ]
            }
        ]
    },
    {
        value: {name: 'Category2', icon: <Icon name='photo' />},
        children: [
            {value: {name: 'Item1'}, onSelect: () => false},
            {value: {name: 'Item2'}, onSelect: () => false},
        ]
    },
    {
        value: {name: 'Category3', icon: <Icon name='video' />},
        children: [
            {value: {name: 'Item3'}, onSelect: () => false},
            {value: {name: 'Item4'}, onSelect: () => false},
        ]
    },
]

export class TreeMenuDocs extends React.Component<{}, {}> {
    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e, option) {
        if(option.item) {
            e.stopPropagation();
            e.preventDefault();

            this.setState({
                options: option.item
            })
        }
    }

    render() {
        return (
            <section className='docs-page__container'>
                <h2 className='docs-page__h2'>TreeMenu</h2>

                <Markup.ReactMarkupCodePreview>{`
                    <TreeSelect
                        getOptions={() => this.state.options}
                        getId={(item) => item.name}
                        getLabel={(item) => item.name}
                    />
                `}
                </Markup.ReactMarkupCodePreview>

                <Markup.ReactMarkup>
                    <Markup.ReactMarkupPreview>
                        <div className='docs-page__content-row docs-page__content-row--no-margin'>
                            <TreeMenu
                                getOptions={() => options}
                                getId={(item) => item.name}
                                getLabel={(item) => item.name}
                                getBackgroundColor={(item: any) => item.bgColor}
                            >
                                {(toggle) => (
                                    <Button text="Open TreeMenu" onClick={toggle} />
                                )}
                            </TreeMenu>
                        </div>
                    </Markup.ReactMarkupPreview>

                    <Markup.ReactMarkupCode>{`
                        <TreeMenu
                            getOptions={() => options}
                            getId={(item) => item.name}
                            getLabel={(item) => item.name}
                            getBackgroundColor={(item: any) => item.bgColor}
                        >
                            {(toggle) => (
                                <Button text="Open TreeMenu" onClick={toggle} />
                            )}
                        </TreeMenu>
                    `}</Markup.ReactMarkupCode>

                </Markup.ReactMarkup>

                <p className='docs-page__paragraph'>TreeMenu with custom template:</p>
                <Markup.ReactMarkup>
                    <Markup.ReactMarkupPreview>
                        <div className='docs-page__content-row docs-page__content-row--no-margin'>
                            <TreeMenu
                                getOptions={() => options2}
                                getId={(item) => item.name}
                                getLabel={(item) => item.name}
                                optionTemplate={(item: any) => {
                                    return (
                                        <div 
                                            style={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: '4px'
                                            }}
                                        >
                                            {item.icon}
                                            {item.name}
                                        </div>
                                    )
                                }}
                            >
                                {(toggle) => (
                                    <Button text="Open TreeMenu" onClick={toggle} />
                                )}
                            </TreeMenu>
                        </div>
                    </Markup.ReactMarkupPreview>

                    <Markup.ReactMarkupCode>{`
                        <TreeMenu
                            getOptions={() => options2}
                            getId={(item) => item.name}
                            getLabel={(item) => item.name}
                            optionTemplate={(item: any) => {
                                return (
                                    <div
                                        style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '4px'
                                        }}
                                    >
                                        {item.icon}
                                        {item.name}
                                    </div>
                                )
                            }}
                        >
                            {(toggle) => (
                                <Button text="Open TreeMenu" onClick={toggle} />
                            )}
                        </TreeMenu>
                    `}</Markup.ReactMarkupCode>

                </Markup.ReactMarkup>

                <h3 className="docs-page__h3">Props</h3>
                <PropsList>
                    <Prop name='getOptions' isRequired={true} type='Function' default='/' description='An array of selectitems to display as the available options.'/>
                    <Prop name='width' isRequired={false} type='medium | full-width (100%)' default='100%' description='Dropdown width.'/>
                    <Prop name='getLabel' isRequired={true} type='Function' default='/' description='Callback to invoke when value changes.'/>
                    <Prop name='getId' isRequired={true} type='Function' default='/' description='Callback to invoke when value changes.'/>
                    <Prop name='getBackgroundColor' isRequired={true} type='Function' default='/' description='Function to return background color of individual item in options.'/>
                    <Prop name='getBorderColor' isRequired={true} type='Function' default='/' description='Function to return border color of individual item in options in single-select mode.'/>
                    <Prop name='optionTemplate' isRequired={false} type='Function(item)' default='/' description='Function that gets the option and returns the content for it.'/>
                </PropsList>
            </section>
        )
    }
}
