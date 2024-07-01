import * as React from "react";
import * as Markup from "../../js/react";
import { IconPicker, PropsList, Prop } from "../../../app-typescript";

const IconPickerDocs = () => {

    const [value, setValue] = React.useState('amp');

    return (
        <section className="docs-page__container">
            <h2 className="docs-page__h2">Icon Picker</h2>
            <Markup.ReactMarkupCodePreview>{`
                    <IconPicker
                        label="Icon"
                        filterPlaceholder="Search..."
                        translateFunction={(text: string): string => text}
                        value={value}
                        onChange={(value) => {
                            setValue(value);
                        }}     
                    />
                `}
            </Markup.ReactMarkupCodePreview>
            <Markup.ReactMarkup>
                <Markup.ReactMarkupPreview>
                    <IconPicker
                        label="Icon"
                        filterPlaceholder="Search..."
                        translateFunction={(text: string): string => text}
                        value={value}
                        onChange={(value) => {
                            setValue(value);
                        }}
                    />
                </Markup.ReactMarkupPreview>
                <Markup.ReactMarkupCode>{`
                    
                    const [value, setValue] = React.useState("amp");
                    ...
                    <IconPicker
                        label="Icon"
                        filterPlaceholder="Search..."
                        translateFunction={(text: string): string => text}
                        value={value}
                        onChange={(value) => {
                            setValue(value);
                        }}
                    />
                `}</Markup.ReactMarkupCode>
            </Markup.ReactMarkup>

            <h3 className="docs-page__h3">Props</h3>
            <PropsList>
                <Prop name='label' isRequired={false} type='string' default='Icon' description='Select label' />
                <Prop name='filterPlaceholder' isRequired={false} type='string' default='Search...' description='Filter placeholder' />
                <Prop name='translateFunction' isRequired={false} type='function' default='(text) => text' description='eg: gettext' />
                <Prop name='value' isRequired={true} type='string' default='null' description='Current value' />
                <Prop name='onChange' isRequired={true} type='Function' default='null' description='Callback onChange event ' />
            </PropsList>

        </section>
    )
}

export default IconPickerDocs;
