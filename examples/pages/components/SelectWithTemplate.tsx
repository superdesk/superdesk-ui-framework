import * as React from 'react';

import * as Markup from '../../js/react';

import {SelectWithTemplate} from '../../../app-typescript';

interface IColor {
    name: string;
    colorCode: string;
}

interface IState {
    value: IColor | null;
}

const colors: Array<IColor> = [
    {name: 'Red', colorCode: '#FF0000'},
    {name: 'Cyan', colorCode: '#00FFFF'},
    {name: 'Blue', colorCode: '#0000FF'},
    {name: 'DarkBlue', colorCode: '#0000A0'},
    {name: 'Purple', colorCode: '#800080'},
    {name: 'Yellow', colorCode: '#FFFF00'},
    {name: 'Lime', colorCode: '#00FF00'},
    {name: 'Magenta', colorCode: '#FF00FF'},
    {name: 'Silver', colorCode: '#C0C0C0'},
    {name: 'Gray', colorCode: '#808080'},
    {name: 'Black', colorCode: '#000000'},
    {name: 'Orange', colorCode: '#FFA500'},
    {name: 'Brown', colorCode: '#A52A2A'},
    {name: 'Maroon', colorCode: '#800000'},
    {name: 'Green', colorCode: '#008000'},
    {name: 'Olive', colorCode: '#808000'},
];

export class SelectWithTemplateDocs extends React.Component<{}, IState> {
    constructor(props) {
        super(props);
        this.state = {
            value: null,
        }
    }

    render() {
        return (
            <section className='docs-page__container'>

                <h2 className='docs-page__h2'>Select with template</h2>

                <p className='docs-page__paragraph'></p>
                <Markup.ReactMarkup>
                    <Markup.ReactMarkupPreview>
                        <div className='docs-page__content-row docs-page__content-row--no-margin'>
                            <div className='form__row'>
                                <SelectWithTemplate
                                    value={this.state.value}
                                    getItems={(searchString) => {
                                        return new Promise((resolve) => {
                                            if (searchString == null) {
                                                resolve(colors);
                                            } else {
                                                resolve(colors.filter(({name}) => name.toLocaleLowerCase().includes(searchString.toLocaleLowerCase())));
                                            }
                                        });
                                    }}
                                    onChange={(value) => {
                                        this.setState({value});
                                    }}
                                    itemTemplate={({option}) => {
                                        if (option == null) {
                                            return (
                                                <div>Select a color</div>
                                            );
                                        } else {
                                            return (
                                                <div style={{display: 'flex', alignItems: 'center'}}>
                                                    <div style={{width: 10, height: 10, marginInlineEnd: 10, backgroundColor: option.colorCode}} />
                                                    <div>{option.name}</div>
                                                </div>
                                            );
                                        }
                                    }}
                                    getLabel={(option) => option.name}
                                    areEqual={(a, b) => a?.colorCode === b?.colorCode}
                                    filterPlaceholder="Search..."
                                    noResultsFoundMessage="No results found."
                                    required
                                    tabindex={1}
                                    label={'This is Label'}
                                    info={'This is info'}
                                    error={'This is error'}
                                />
                            </div>
                        </div>

                    </Markup.ReactMarkupPreview>

                    <Markup.ReactMarkupCode>{`
                        <SelectWithTemplate
                            value={this.state.value}
                            getItems={(searchString) => {
                                return new Promise((resolve) => {
                                    if (searchString == null) {
                                        resolve(colors);
                                    } else {
                                        resolve(colors.filter(({name}) => name.toLocaleLowerCase().includes(searchString.toLocaleLowerCase())));
                                    }
                                });
                            }}
                            onChange={(value) => {
                                this.setState({value});
                            }}
                            itemTemplate={({option}) => {
                                if (option == null) {
                                    return (
                                        <div>Select a color</div>
                                    );
                                } else {
                                    return (
                                        <div style={{display: 'flex', alignItems: 'center'}}>
                                            <div style={{width: 10, height: 10, marginRight: 10, backgroundColor: option.colorCode}} />
                                            <div>{option.name}</div>
                                        </div>
                                    );
                                }
                            }}
                            getLabel={(option) => option.name}
                            areEqual={(a, b) => a.colorCode === b.colorCode}
                            filterPlaceholder="Search..."
                        />
                    `}</Markup.ReactMarkupCode>
                </Markup.ReactMarkup>
            </section>
        )
    }
}
