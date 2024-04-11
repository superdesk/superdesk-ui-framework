import * as React from "react";
import * as Markup from "../../js/react";
import { ToggleBox, PropsList, Prop, Button, Badge } from "../../../app-typescript";

const ToggleboxDocs = () => {
    const toggleRef = React.useRef();

    return (
        <section className="docs-page__container">
            <h2 className="docs-page__h2">Togglebox</h2>
            <p className="docs-page__paragraph">Simple toggle box element. It provides toggle() function that can be used with React's ref functionality and control close/open state from outside. Arrow left, Arrow right and Enter are supported keyboard events.</p>
            <Markup.ReactMarkupCodePreview>{`
                    <ToggleBox title="togglebox title">togglebox content</ToggleBox>
                `}
            </Markup.ReactMarkupCodePreview>
            <Markup.ReactMarkup>
                <Markup.ReactMarkupPreview>
                    <Button text="Toggle programatically" onClick={() => { toggleRef.current.toggle() }} />
                    <div style={{ marginTop: "2em" }}>
                        <ToggleBox title="Simple togglebox" ref={toggleRef} initiallyOpen={true}>Togglebox content</ToggleBox>
                        <ToggleBox title="With badge" badge={<Badge text='2' type='primary' />}>Togglebox content</ToggleBox>
                        <ToggleBox title="With different badge" badge={<Badge text='!' type='alert' shape='square' />}>Togglebox content</ToggleBox>
                        <ToggleBox title="Togglebox - circled chevron" className="toggle-box--circle">Togglebox content</ToggleBox>
                    </div>
                </Markup.ReactMarkupPreview>
                <Markup.ReactMarkupCode>{`
                    <Button text="Toggle programatically" onClick={() => { toggleRef.current.toggle() }} />
                   
                    <ToggleBox title="Simple togglebox" ref={toggleRef} initiallyOpen={true}>Togglebox content</ToggleBox>
                    <ToggleBox title="With badge" badge={<Badge text='2' type='primary' />}>Togglebox content</ToggleBox>
                    <ToggleBox title="With different badge" badge={<Badge text='!' type='alert' shape='square' />}>Togglebox content</ToggleBox>
                    <ToggleBox title="Togglebox - circled chevron" className="toggle-box--circle">Togglebox content</ToggleBox>
                `}</Markup.ReactMarkupCode>
            </Markup.ReactMarkup>

            <h3 className="docs-page__h3">Props</h3>
            <PropsList>
                <Prop name='title' isRequired={true} type='string' default='null' description='Togglebox title' />
                <Prop name='badge' isRequired={false} type='JSX.Element' default='null' description='Badge' />
                <Prop name='hideUsingCSS' isRequired={false} type='boolean' default='false' description='Usefull when working with forms. Content of togglebox will be hidden but remain rendered.' />
                <Prop name='initiallyOpen' isRequired={false} type='boolean' default='false' description='Opens togglebox on initial render' />
                <Prop name='className' isRequired={false} type='string' default='null' description='Style class of the component' />
                <Prop name='margin' isRequired={false} type='none | small | normal | large' default='normal' description='Defines the bottom margin of the toggle box.' />
                <Prop name='onOpen' isRequired={false} type='function' default='null' description='Callback on open event' />
                <Prop name='onClose' isRequired={false} type='function' default='null' description='Callback on close event' />
            </PropsList>
        </section>
    )
}

export default ToggleboxDocs;
