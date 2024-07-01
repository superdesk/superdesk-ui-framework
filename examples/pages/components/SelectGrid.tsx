import * as React from "react";
import * as Markup from "../../js/react";
import { SelectGrid, Alert, PropsList, Prop } from "../../../app-typescript";

const SelectGridDocs = () => {
    const letters = [
        { value: 'A', label: 'A' },
        { value: 'B', label: 'B' },
        { value: 'C', label: 'C' },
        { value: 'D', label: 'D' },
        { value: 'E', label: 'E' },
        { value: 'F', label: 'F' },
        { value: 'G', label: 'G' },
        { value: 'H', label: 'H' },
        { value: 'K', label: 'K' },
        { value: 'L', label: 'L' },
        { value: 'M', label: 'M' },
        { value: 'N', label: 'N' },
        { value: 'O', label: 'O' },
        { value: 'P', label: 'P' },
        { value: 'R', label: 'R' },
        { value: 'S', label: 'S' },
        { value: 'T', label: 'T' },
        { value: 'U', label: 'U' }
    ];

    const [selectedItem, setSelectedItem] = React.useState(letters[0]);

    return (
        <section className="docs-page__container">
            <h2 className="docs-page__h2">Select Grid</h2>
            <p className="docs-page__paragraph">Universal select component with grid display of items. You can define your own trigger and item template.</p>
            <p className="docs-page__paragraph">IconPicker is built on top of it.</p>
            <Markup.ReactMarkupCodePreview>{`
                    <SelectGrid
                        label="Label"
                        filterPlaceholder="Search..."
                        getItems={(searchString) => {
                            return new Promise((resolve) => {
                                resolve([{ value: 'value', label: 'Label' }]);
                            });
                        }}
                        onChange={(value) => { }}
                        itemTemplate={({ item }) => <div />}
                        triggerTemplate={() => <button />}
                    />
                `}
            </Markup.ReactMarkupCodePreview>
            <Markup.ReactMarkup>
                <Markup.ReactMarkupPreview>
                    <SelectGrid
                        label="Letter"
                        filterPlaceholder="Search..."
                        getItems={(searchString) => {
                            return new Promise((resolve) => {
                                if (searchString == null) {
                                    resolve(letters);
                                } else {
                                    resolve(letters.filter(({ label }) => label.toLocaleLowerCase().includes(searchString.toLocaleLowerCase())));
                                }
                            });
                        }}
                        onChange={(value) => {
                            setSelectedItem(value);
                        }}
                        itemTemplate={({ item }) => <div style={{ fontSize: '20px' }}>{item.label}</div>}
                        triggerTemplate={({ onClick }) => <button className="btn" onClick={onClick}>{selectedItem.label}</button>}

                    />
                </Markup.ReactMarkupPreview>
                <Markup.ReactMarkupCode>{`
                    const letters = [
                        { value: 'A', label: 'A' },
                        { value: 'B', label: 'B' },
                        { value: 'C', label: 'C' },
                        ...
                    ];

                    const [selectedItem, setSelectedItem] = React.useState(letters[0]);
                    ...
                    <SelectGrid
                        label="Letter"
                        filterPlaceholder="Search..."
                        getItems={(searchString) => {
                            return new Promise((resolve) => {
                                if (searchString == null) {
                                    resolve(letters);
                                } else {
                                    resolve(letters.filter(({ label }) => label.toLocaleLowerCase().includes(searchString.toLocaleLowerCase())));
                                }
                            });
                        }}
                        onChange={(value) => {
                            setSelectedItem(value);
                        }}
                        itemTemplate={({ item }) => <div style={{ fontSize: '20px' }}>{item.label}</div>}
                        triggerTemplate={({ onClick }) => <button className="btn" onClick={onClick}>{selectedItem.label}</button>}

                    />
                `}</Markup.ReactMarkupCode>
            </Markup.ReactMarkup>

            <h3 className="docs-page__h3">Props</h3>
            <PropsList>
                <Prop name='label' isRequired={true} type='string' default='null' description='Select label' />
                <Prop name='filterPlaceholder' isRequired={false} type='string' default='Search...' description='Filter placeholder' />
                <Prop name='getItems' isRequired={true} type='function' default='false' description='Callback function that should return promise which resolves with array of items' />
                <Prop name='onChange' isRequired={true} type='function' default='false' description='Callback on change event' />
                <Prop name='itemTemplate' isRequired={true} type='Component' default='null' description='item renderer' />
                <Prop name='triggerTemplate' isRequired={true} type='Component' default='null' description='trigger button renderer' />
            </PropsList>
            <Alert style='hollow' size='normal' type='alert' restoreIcon='info'>
                1. triggerTemplate should include &#x3C;button /&#x3E; with onClick event. Otherwise keyboard controls won't work. <br />
                2. Item should be an object with at least label and value.
            </Alert>
        </section>
    )
}


export default SelectGridDocs;
