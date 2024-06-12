import * as React from "react";
import * as Markup from "../../js/react";
import { PropsList, Prop, Badge, Icon, Label, AvatarGroup, ContentDivider, FormLabel, Text } from "../../../app-typescript";
import {ToggleBox} from './../../../app-typescript/components/ToggleBox/index';
import {IAvatarInGroup} from '../../../app-typescript/components/avatar/avatar-group';

const avatars: Array<IAvatarInGroup> = [
    {
        imageUrl: null,
        initials: "VS",
        displayName: 'Vladimir Stefanovic',
        icon:{name: 'text', color: 'var(--sd-colour-highlight)'},
    },
    {
        imageUrl: null,
        initials: "JL",
        displayName: 'Jeffrey Lebowski',
        icon:{name: 'photo', color: 'var(--sd-colour-highlight)'}
    },
    {
        imageUrl: null,
        initials: "WS",
        displayName: 'Walter Sobchak',
        icon:{name: 'video', color: 'var(--sd-colour-highlight)'}
    },
    {
        imageUrl: null,
        initials: "ML",
        displayName: 'Maude Lebowski',
        icon:{name: 'file', color: 'var(--sd-colour-highlight)'}
    },
];


const ToggleboxDocs = () => {
    return (
        <section className="docs-page__container">
            <h2 className="docs-page__h2">Togglebox</h2>
            <Markup.ReactMarkupCodePreview>{`
                    <ToggleBox title="togglebox title">togglebox content</ToggleBox>
                `}
            </Markup.ReactMarkupCodePreview>
            <p className="docs-page__paragraph">Simple ToggleBox:</p>
            <Markup.ReactMarkup>
                <Markup.ReactMarkupPreview>
                    <div style={{ marginTop: "2em" }}>
                        <ToggleBox variant='simple' title="Simple togglebox">Togglebox content</ToggleBox>
                        <ToggleBox variant='simple' title="With badge" badge={<Badge text='2' type='primary' />}>Togglebox content</ToggleBox>
                        <ToggleBox variant='simple' title="Togglebox - circled chevron" className="toggle-box--circle">Togglebox content</ToggleBox>
                    </div>
                </Markup.ReactMarkupPreview>
                <Markup.ReactMarkupCode>{`
                    <ToggleBox variant='simple' title="Simple togglebox">Togglebox content</ToggleBox>
                    <ToggleBox variant='simple' title="With badge" badge={<Badge text='2' type='primary' />}>Togglebox content</ToggleBox>
                    <ToggleBox variant='simple' title="Togglebox - circled chevron" className="toggle-box--circle">Togglebox content</ToggleBox>
                `}</Markup.ReactMarkupCode>
            </Markup.ReactMarkup>

            <p className="docs-page__paragraph">Custom header ToggleBox:</p>
            <Markup.ReactMarkup>
                <Markup.ReactMarkupPreview>
                    <div style={{ marginTop: "2em" }}>
                        <ToggleBox
                            variant='custom-header'
                            header={
                                <div role="listitem" className="sd-list-item sd-list-item--no-hover">
                                    <div className="sd-list-item__border sd-list-item__border--locked"></div>
                                    <div className="sd-list-item__column sd-list-item__column--no-border pe-0-5">
                                        <Icon type='primary' name='calendar' scale='1.5x' ariaHidden={true} />
                                    </div>
                                    <div className="sd-list-item__column sd-list-item__column--grow sd-list-item__column--no-border">
                                        <div className="sd-list-item__row">
                                            <span className="sd-list-item__slugline">Planning Slugline</span>
                                        </div>
                                        <div className="sd-list-item__row sd-list-item__row--overflow-visible me-1 mb-1-5">
                                            <Label text='draft' style='translucent'/>
                                            <span className="sd-margin-s--auto">
                                            <AvatarGroup
                                                size="x-small"
                                                items={avatars}
                                            />
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            }
                            toggleButton={'show more'}
                            onToggle={(isOpen) => false}
                        >
                            <div>
                                <FormLabel text='Name'/>
                                <Text size='small' weight='medium'>Australian Open 2024</Text>
                            </div>
                            <ContentDivider type="dashed" margin='x-small' />
                            <div>
                                <FormLabel text='Current Date'/>
                                <Text size='small' weight='medium'>05.02.2024 @ 10:00</Text>
                            </div>
                            <ContentDivider type="dashed" margin='x-small' />
                            <div>
                                <FormLabel text='Current Repeat Summary'/>
                                <Text size='small' weight='medium'>Every 1 day(s) until CET 28 Feb 2024</Text>
                            </div>
                            <ContentDivider type="dashed" margin='x-small' />
                            <div>
                                <FormLabel text='No. of events'/>
                                <Text size='small' weight='medium'>1</Text>
                            </div>
                        </ToggleBox>
                    </div>
                </Markup.ReactMarkupPreview>
                <Markup.ReactMarkupCode>{`
                    <ToggleBox
                        variant='custom-header'
                        header={
                            <div role="listitem" className="sd-list-item sd-list-item--no-hover">
                                <div className="sd-list-item__border sd-list-item__border--locked"></div>
                                <div className="sd-list-item__column sd-list-item__column--no-border pe-0-5">
                                    <Icon type='primary' name='calendar' scale='1.5x' ariaHidden={true} />
                                </div>
                                <div className="sd-list-item__column sd-list-item__column--grow sd-list-item__column--no-border">
                                    <div className="sd-list-item__row">
                                        <span className="sd-list-item__slugline">Planning Slugline</span>
                                    </div>
                                    <div className="sd-list-item__row sd-list-item__row--overflow-visible me-1 mb-1-5">
                                        <Label text='draft' style='translucent'/>
                                        <span className="sd-margin-s--auto">
                                        <AvatarGroup
                                            size="x-small"
                                            items={avatars}
                                        />
                                        </span>
                                    </div>
                                </div>
                            </div>
                        }
                        onToggle={() => false}
                    >
                        <div>
                            <FormLabel text='Name'/>
                            <Text size='small' weight='medium'>Australian Open 2024</Text>
                        </div>
                        <ContentDivider type="dashed" margin='x-small' />
                        <div>
                            <FormLabel text='Current Date'/>
                            <Text size='small' weight='medium'>05.02.2024 @ 10:00</Text>
                        </div>
                        <ContentDivider type="dashed" margin='x-small' />
                        <div>
                            <FormLabel text='Current Repeat Summary'/>
                            <Text size='small' weight='medium'>Every 1 day(s) until CET 28 Feb 2024</Text>
                        </div>
                        <ContentDivider type="dashed" margin='x-small' />
                        <div>
                            <FormLabel text='No. of events'/>
                            <Text size='small' weight='medium'>1</Text>
                        </div>
                    </ToggleBox>
                `}</Markup.ReactMarkupCode>
            </Markup.ReactMarkup>

            <h3 className="docs-page__h3">Props</h3>
            <PropsList>
                <Prop name='variant' isRequired={true} type='simple | custom header' default='null' description='Type of component.' />
            </PropsList>

            <h3 className="docs-page__h3">Props: variant: 'simple'</h3>
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

            <h3 className="docs-page__h3">Props: variant: 'custom-header'</h3>
            <PropsList>
                <Prop name='header' isRequired={true} type='JSX.Component' default='null' description='Always visible part of component.' />
                <Prop name='children' isRequired={false} type='JSX.Component' default='null' description='Appear on clicking the button.' />
                <Prop name='initiallyOpen' isRequired={false} type='boolean' default='false' description='Opens togglebox on initial render.' />
                <Prop name='onClose' isRequired={false} type='function' default='null' description='Callback on toggle.' />
            </PropsList>
        </section>
    )
}

export default ToggleboxDocs;
