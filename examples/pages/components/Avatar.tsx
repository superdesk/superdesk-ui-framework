import * as React from 'react';
import * as Markup from '../../js/react';

import {Container, Avatar, AvatarGroup, AvatarPlaceholder, Prop, PropsList} from '../../../app-typescript';
import {IAvatarInGroup} from '../../../app-typescript/components/avatar/avatar-group';

const avatars: Array<IAvatarInGroup> = [
    {
        imageUrl: 'avatar.jpg',
        initials: 'JL',
        displayName: 'Jeffrey Lebowski',
    },
    {
        imageUrl: null,
        initials: 'WS',
        displayName: 'Walter Sobchak',
        tooltip: 'Walter Sobchak - Professional Bowler',
    },
    {
        imageUrl: null,
        initials: 'DK',
        displayName: 'Donny Kerabatsos',
    },
    {
        imageUrl: 'avatar-3.jpg',
        initials: 'JJB',
        displayName: 'Jean-Jacques Burnel',
        tooltip: 'Jean-Jacques Burnel - Professional Boxer',
    },
    {
        imageUrl: 'avatar-4.jpg',
        initials: 'DH',
        displayName: 'Deborah Ann Harry',
    },
    {
        imageUrl: 'avatar-5.jpg',
        initials: 'CW',
        displayName: 'Christopher George Latore Wallace',
    },
];

export default class AvatarDoc extends React.PureComponent {
    render() {
        return (
            <section className="docs-page__container">
                <h2 className="docs-page__h2">Avatar</h2>

                <Markup.ReactMarkupCodePreview>
                    {`
                    <Avatar
                        size="large"
                        imageUrl="/avatar.jpg"
                        initials="JL"
                        displayName="Jeffrey Lebowski"
                    />
                `}
                </Markup.ReactMarkupCodePreview>

                <Markup.ReactMarkup>
                    <Markup.ReactMarkupPreview>
                        <p className="docs-page__paragraph">// Combo</p>
                        <Container gap="medium" className="sd-margin-b--3">
                            <Avatar
                                displayName="Jeffrey Lebowski"
                                imageUrl="/avatar.jpg"
                                initials="Jeffrey Lebowski"
                                size="large"
                                icon={{name: 'print', color: 'red'}}
                                statusIndicator="online"
                                administratorIndicator
                            />

                            <Avatar
                                displayName="Jeffrey Lebowski"
                                imageUrl={null}
                                initials="Jeffrey Lebowski"
                                size="large"
                                icon={{name: 'print', color: 'var(--sd-colour-state--in-workflow)'}}
                                statusIndicator="offline"
                                administratorIndicator
                            />

                            <Avatar
                                displayName="Jeffrey Lebowski"
                                imageUrl={null}
                                initials="Jeffrey Lebowski"
                                size="large"
                                icon={{name: 'print', color: 'var(--sd-colour-state--done)'}}
                                administratorIndicator
                            />
                        </Container>

                        <p className="docs-page__paragraph">// Basic with size variations</p>
                        <Container gap="medium" className="sd-margin-b--3">
                            <Avatar
                                size="x-small"
                                imageUrl="/avatar.jpg"
                                initials="JL"
                                displayName="Jeffrey Lebowski"
                            />

                            <Avatar size="small" imageUrl="/avatar.jpg" initials="JL" displayName="Jeffrey Lebowski" />

                            <Avatar size="medium" imageUrl="/avatar.jpg" initials="JL" displayName="Jeffrey Lebowski" />

                            <Avatar size="large" imageUrl="/avatar.jpg" initials="JL" displayName="Jeffrey Lebowski" />

                            <Avatar
                                size="x-large"
                                imageUrl="/avatar.jpg"
                                initials="JL"
                                displayName="Jeffrey Lebowski"
                            />

                            <Avatar
                                size="xx-large"
                                imageUrl="/avatar.jpg"
                                initials="JL"
                                displayName="Jeffrey Lebowski"
                            />
                        </Container>

                        <p className="docs-page__paragraph">// With status indicator</p>
                        <Container gap="medium" className="sd-margin-b--3">
                            <Avatar
                                size="large"
                                imageUrl="/avatar.jpg"
                                initials="JL"
                                displayName="Jeffrey Lebowski"
                                statusIndicator="online"
                            />
                        </Container>

                        <p className="docs-page__paragraph">// With administrator indicator</p>
                        <Container gap="medium" className="sd-margin-b--3">
                            <Avatar
                                size="large"
                                imageUrl="/avatar.jpg"
                                initials="JL"
                                displayName="Jeffrey Lebowski"
                                administratorIndicator
                            />
                        </Container>

                        <p className="docs-page__paragraph">// With icon</p>
                        <Container gap="medium" className="sd-margin-b--3">
                            <Avatar
                                size="x-small"
                                imageUrl={null}
                                initials="JL"
                                displayName="Jeffrey Lebowski"
                                icon={{name: 'text'}}
                            />

                            <Avatar
                                size="small"
                                imageUrl="/avatar.jpg"
                                initials="JL"
                                displayName="Jeffrey Lebowski"
                                icon={{name: 'text'}}
                            />

                            <Avatar
                                size="medium"
                                imageUrl="/avatar.jpg"
                                initials="JL"
                                displayName="Jeffrey Lebowski"
                                icon={{name: 'audio', color: 'var(--sd-colour-state--done)'}}
                            />

                            <Avatar
                                size="large"
                                imageUrl="/avatar.jpg"
                                initials="JL"
                                displayName="Jeffrey Lebowski"
                                icon={{name: 'text', color: 'var(--sd-colour-state--in-workflow)'}}
                            />

                            <Avatar
                                size="x-large"
                                imageUrl={null}
                                initials={null}
                                displayName="Unassigned"
                                noAvatarPlaceholderColor="subtle"
                                icon={{name: 'text', color: 'var(--sd-colour-state--canceled)'}}
                            />

                            <AvatarPlaceholder kind="plus-button" size="x-large" />

                            <Avatar
                                size="x-large"
                                imageUrl={null}
                                initials={null}
                                displayName="Unassigned"
                                icon={{name: 'text', color: 'var(--sd-colour-state--canceled)'}}
                            />

                            <Avatar
                                size="xx-large"
                                imageUrl={null}
                                initials="JL"
                                displayName="Jeffrey Lebowski"
                                icon={{name: 'video-cancel', color: 'var(--sd-colour-state--canceled)'}}
                            />
                        </Container>
                        <p className="docs-page__paragraph">// With icon and Coverage status indicator</p>
                        <Container gap="medium" className="sd-margin-b--3">
                            <Avatar
                                displayName="Unassigned"
                                imageUrl={null}
                                initials={null}
                                size="small"
                                icon={{name: 'text', color: 'var(--sd-colour-state--assigned)'}}
                                statusDot={{color: 'var(--sd-colour-coverage-state--on-merit)'}}
                            />
                            <Avatar
                                displayName="Unassigned"
                                imageUrl={null}
                                initials={null}
                                size="small"
                                icon={{name: 'photo', color: 'var(--sd-colour-state--assigned)'}}
                                statusDot={{color: 'var(--sd-colour-coverage-state--not-covering)'}}
                            />
                        </Container>
                    </Markup.ReactMarkupPreview>

                    <Markup.ReactMarkupCode>
                        {`
                        // Combo

                        <Avatar
                            displayName="Jeffrey Lebowski"
                            imageUrl="/avatar.jpg"
                            initials='Jeffrey Lebowski'
                            size="large"
                            icon={{name: 'print', color: 'red'}}
                            statusIndicator="online"
                            administratorIndicator
                        />

                        <Avatar
                            displayName="Jeffrey Lebowski"
                            imageUrl={null}
                            initials="Jeffrey Lebowski"
                            size="large"
                            icon={{name: 'print', color: 'var(--sd-colour-state--in-workflow)}}
                            statusIndicator="offline"
                            administratorIndicator
                        />

                        <Avatar
                            displayName="Jeffrey Lebowski"
                            imageUrl={null}
                            initials='Jeffrey Lebowski'
                            size="large"
                            icon={{name: 'print', color: 'var(--sd-colour-state--done)'}}
                            administratorIndicator
                        />

                        // Basic with size variations
                        <Avatar
                            size="x-small"
                            imageUrl="/avatar.jpg"
                            initials="JL"
                            displayName="Jeffrey Lebowski"
                        />

                        <Avatar
                            size="small"
                            imageUrl="/avatar.jpg"
                            initials="JL"
                            displayName="Jeffrey Lebowski"
                        />

                        <Avatar
                            size="medium"
                            imageUrl="/avatar.jpg"
                            initials="JL"
                            displayName="Jeffrey Lebowski"
                        />

                        <Avatar
                            size="large"
                            imageUrl="/avatar.jpg"
                            initials="JL"
                            displayName="Jeffrey Lebowski"
                        />

                        <Avatar
                            size="x-large"
                            imageUrl="/avatar.jpg"
                            initials="JL"
                            displayName="Jeffrey Lebowski"
                        />

                        <Avatar
                            size="xx-large"
                            imageUrl="/avatar.jpg"
                            initials="JL"
                            displayName="Jeffrey Lebowski"
                        />


                        // With status indicator
                        <Avatar
                            size="large"
                            imageUrl="/avatar.jpg"
                            initials="JL"
                            displayName="Jeffrey Lebowski"
                            statusIndicator="online"
                        />

                        // With administrator indicator

                        <Avatar
                            size="large"
                            imageUrl="/avatar.jpg"
                            initials="JL"
                            displayName="Jeffrey Lebowski"
                            administratorIndicator
                        />

                        // With icons

                        <Avatar
                            size="x-small"
                            imageUrl={null}
                            initials="JL"
                            displayName="Jeffrey Lebowski"
                            icon={{name: 'text'}}
                        />

                        <Avatar
                            size="small"
                            imageUrl="/avatar.jpg"
                            initials="JL"
                            displayName="Jeffrey Lebowski"
                            icon={{name: 'text'}}
                        />

                        <Avatar
                            size="medium"
                            imageUrl="/avatar.jpg"
                            initials="JL"
                            displayName="Jeffrey Lebowski"
                            icon={{name: 'audio', color: 'var(--sd-colour-state--done)'}}
                        />

                        <Avatar
                            size="large"
                            imageUrl="/avatar.jpg"
                            initials="JL"
                            displayName="Jeffrey Lebowski"
                            icon={{name: 'text', color: 'var(--sd-colour-state--in-workflow)'}}
                        />

                        <Avatar
                            size="x-large"
                            imageUrl={null}
                            initials={null}
                            displayName="Unassigned"
                            noAvatarPlaceholderColor="subtle"
                            icon={{name: 'text', color: 'var(--sd-colour-state--canceled)'}}
                        />

                        <Avatar
                            size="x-large"
                            imageUrl={null}
                            initials={null}
                            displayName="Unassigned"
                            icon={{name: 'text', color: 'var(--sd-colour-state--canceled)'}}
                        />

                        <Avatar
                            size="xx-large"
                            imageUrl={null}
                            initials="JL"
                            displayName="Jeffrey Lebowski"
                            icon={{name: 'video-cancel', color: 'var(--sd-colour-state--canceled)'}}
                        />

                        // With icon and Coverage status indicator
                        <Avatar 
                            displayName="Unassigned"
                            imageUrl={null}
                            initials={null}
                            size="small"
                            icon={{name: 'text', color: 'var(--sd-colour-state--assigned)'}}
                            statusDot={{color: 'var(--sd-colour-coverage-state--on-merit)'}}
                        />
                        <Avatar 
                            displayName="Unassigned"
                            imageUrl={null}
                            initials={null}
                            size="small"
                            icon={{name: 'photo', color: 'var(--sd-colour-state--assigned)'}}
                            statusDot={{color: 'var(--sd-colour-coverage-state--not-covering)'}}
                        />

                    `}
                    </Markup.ReactMarkupCode>
                </Markup.ReactMarkup>

                <h3 className="docs-page__h3">Name Display Modes</h3>
                <p className="docs-page__paragraph">Avatar supports three different ways to display the user's name:</p>
                <Markup.ReactMarkup>
                    <Markup.ReactMarkupPreview>
                        <div className="docs-page__content-row">
                            <p className="docs-page__paragraph">// Tooltip Mode (default)</p>
                            <Container gap="medium" className="sd-margin-b--3">
                                <Avatar
                                    size="large"
                                    imageUrl="/avatar.jpg"
                                    initials="JL"
                                    displayName="Jeffrey Lebowski"
                                    nameDisplay="tooltip"
                                />
                                <Avatar
                                    size="large"
                                    imageUrl={null}
                                    initials="WS"
                                    displayName="Walter Sobchak"
                                    nameDisplay="tooltip"
                                />
                                <Avatar
                                    size="large"
                                    imageUrl="/avatar-3.jpg"
                                    initials="TD"
                                    displayName="Theodore Donald Kerabatsos"
                                    nameDisplay="tooltip"
                                    tooltip="Donny - Professional Bowler"
                                />
                            </Container>

                            <p className="docs-page__paragraph">// Title Mode (native HTML title)</p>
                            <Container gap="medium" className="sd-margin-b--3">
                                <Avatar
                                    size="large"
                                    imageUrl="/avatar.jpg"
                                    initials="JL"
                                    displayName="Jeffrey Lebowski"
                                    nameDisplay="title"
                                />
                                <Avatar
                                    size="large"
                                    imageUrl={null}
                                    initials="WS"
                                    displayName="Walter Sobchak"
                                    nameDisplay="title"
                                />
                            </Container>

                            <p className="docs-page__paragraph">// Inline Mode</p>
                            <Container gap="medium" className="sd-margin-b--3" direction="column">
                                <Avatar
                                    size="x-small"
                                    imageUrl={null}
                                    initials="KL"
                                    displayName="Kurt Lebowski"
                                    nameDisplay="inline"
                                />
                                <Avatar
                                    size="small"
                                    imageUrl="/avatar.jpg"
                                    initials="JL"
                                    displayName="Jeffrey Lebowski"
                                    nameDisplay="inline"
                                />
                                <Avatar
                                    size="medium"
                                    imageUrl={null}
                                    initials="WS"
                                    displayName="Walter Sobchak"
                                    nameDisplay="inline"
                                />
                                <Avatar
                                    size="large"
                                    imageUrl="/avatar-3.jpg"
                                    initials="JJB"
                                    displayName="Jean-Jacques Burnel"
                                    nameDisplay="inline"
                                />
                                <Avatar
                                    size="x-large"
                                    imageUrl="/avatar-4.jpg"
                                    initials="DH"
                                    displayName="Deborah Ann Harry"
                                    nameDisplay="inline"
                                />
                                <Avatar
                                    size="xx-large"
                                    imageUrl="/avatar-5.jpg"
                                    initials="CW"
                                    displayName="Christopher George Latore Wallace"
                                    nameDisplay="inline"
                                />
                            </Container>
                        </div>
                    </Markup.ReactMarkupPreview>
                    <Markup.ReactMarkupCode>
                        {`
                        // Tooltip Mode (default) - shows name in tooltip component
                        <Avatar
                            size="large"
                            imageUrl="/avatar.jpg"
                            initials="JL"
                            displayName="Jeffrey Lebowski"
                            nameDisplay="tooltip"
                        />

                        // Can add additional info via tooltip prop
                        <Avatar
                            size="large"
                            imageUrl="/avatar-3.jpg"
                            initials="JJB"
                            displayName="Jean-Jacques Burnel"
                            nameDisplay="tooltip"
                            tooltip="JJB - Professional Boxer"
                        />

                        // Title Mode - uses native HTML title attribute
                        <Avatar
                            size="large"
                            imageUrl="/avatar.jpg"
                            initials="JL"
                            displayName="Jeffrey Lebowski"
                            nameDisplay="title"
                        />

                        // Inline Mode - displays name beside avatar
                        <Avatar
                            size="medium"
                            imageUrl={null}
                            initials="WS"
                            displayName="Walter Sobchak"
                            nameDisplay="inline"
                        />
                    `}
                    </Markup.ReactMarkupCode>
                </Markup.ReactMarkup>

                <h3 className="docs-page__h3">Tooltip Position Control</h3>
                <p className="docs-page__paragraph">
                    When using tooltip mode, you can control the position of the tooltip using the{' '}
                    <code>tooltipFlow</code> prop. Available positions are: 'top' (default), 'left', 'right', and
                    'down'.
                </p>
                <Markup.ReactMarkup>
                    <Markup.ReactMarkupPreview>
                        <Container gap="large" className="sd-margin-b--3">
                            <Avatar
                                size="large"
                                imageUrl="/avatar.jpg"
                                initials="JL"
                                displayName="Jeffrey Lebowski"
                                nameDisplay="tooltip"
                                tooltipFlow="top"
                            />
                            <Avatar
                                size="large"
                                imageUrl="/avatar-3.jpg"
                                initials="JJB"
                                displayName="Jean-Jacques Burnel"
                                nameDisplay="tooltip"
                                tooltipFlow="right"
                            />
                            <Avatar
                                size="large"
                                imageUrl="/avatar-4.jpg"
                                initials="DH"
                                displayName="Deborah Ann Harry"
                                nameDisplay="tooltip"
                                tooltipFlow="down"
                            />
                            <Avatar
                                size="large"
                                imageUrl="/avatar-5.jpg"
                                initials="CW"
                                displayName="Christopher George Latore Wallace"
                                nameDisplay="tooltip"
                                tooltipFlow="left"
                            />
                        </Container>
                    </Markup.ReactMarkupPreview>
                    <Markup.ReactMarkupCode>
                        {`
                        // Top position (default)
                        <Avatar
                            size="large"
                            imageUrl="/avatar.jpg"
                            initials="JL"
                            displayName="Jeffrey Lebowski"
                            nameDisplay="tooltip"
                            tooltipFlow="top"
                        />

                        // Right position
                        <Avatar
                            size="large"
                            imageUrl="/avatar-3.jpg"
                            initials="JJB"
                            displayName="Jean-Jacques Burnel"
                            nameDisplay="tooltip"
                            tooltipFlow="right"
                        />

                        // Down position
                        <Avatar
                            size="large"
                            imageUrl="/avatar-4.jpg"
                            initials="DH"
                            displayName="Deborah Ann Harry"
                            nameDisplay="tooltip"
                            tooltipFlow="down"
                        />

                        // Left position
                        <Avatar
                            size="large"
                            imageUrl="/avatar-5.jpg"
                            initials="CW"
                            displayName="Christopher George Latore Wallace"
                            nameDisplay="tooltip"
                            tooltipFlow="left"
                        />
                    `}
                    </Markup.ReactMarkupCode>
                </Markup.ReactMarkup>

                <h3 className="docs-page__h3">Text Position in Inline Mode</h3>
                <p className="docs-page__paragraph">
                    When using inline mode, you can control whether the text appears before or after the avatar using
                    the <code>textPosition</code> prop. Use 'start' to place text before the avatar, or 'end' (default)
                    to place it after.
                </p>
                <Markup.ReactMarkup>
                    <Markup.ReactMarkupPreview>
                        <div className="docs-page__content-row">
                            <p className="docs-page__paragraph">// Text Position: End (default)</p>
                            <Container gap="medium" className="sd-margin-b--3" direction="column">
                                <Avatar
                                    size="small"
                                    imageUrl="/avatar.jpg"
                                    initials="JL"
                                    displayName="Jeffrey Lebowski"
                                    nameDisplay="inline"
                                    textPosition="end"
                                />
                                <Avatar
                                    size="medium"
                                    imageUrl={null}
                                    initials="WS"
                                    displayName="Walter Sobchak"
                                    nameDisplay="inline"
                                    textPosition="end"
                                />
                                <Avatar
                                    size="large"
                                    imageUrl="/avatar-3.jpg"
                                    initials="JJB"
                                    displayName="Jean-Jacques Burnel"
                                    nameDisplay="inline"
                                />
                            </Container>

                            <p className="docs-page__paragraph">// Text Position: Start</p>
                            <Container gap="medium" className="sd-margin-b--3" direction="column">
                                <Avatar
                                    size="small"
                                    imageUrl="/avatar.jpg"
                                    initials="JL"
                                    displayName="Jeffrey Lebowski"
                                    nameDisplay="inline"
                                    textPosition="start"
                                />
                                <Avatar
                                    size="medium"
                                    imageUrl={null}
                                    initials="WS"
                                    displayName="Walter Sobchak"
                                    nameDisplay="inline"
                                    textPosition="start"
                                />
                                <Avatar
                                    size="large"
                                    imageUrl="/avatar-3.jpg"
                                    initials="JJB"
                                    displayName="Jean-Jacques Burnel"
                                    nameDisplay="inline"
                                    textPosition="start"
                                />
                            </Container>
                        </div>
                    </Markup.ReactMarkupPreview>
                    <Markup.ReactMarkupCode>
                        {`
                        // Text Position: End (default behavior)
                        <Avatar
                            size="medium"
                            imageUrl="/avatar.jpg"
                            initials="JL"
                            displayName="Jeffrey Lebowski"
                            nameDisplay="inline"
                            textPosition="end"
                        />
                        
                        // Omitting textPosition defaults to "end" (text after avatar)
                        <Avatar
                            size="medium"
                            imageUrl="/avatar-3.jpg"
                            initials="JJB"
                            displayName="Jean-Jacques Burnel"
                            nameDisplay="inline"
                        />

                        // Text Position: Start (text before avatar)
                        <Avatar
                            size="medium"
                            imageUrl={null}
                            initials="WS"
                            displayName="Walter Sobchak"
                            nameDisplay="inline"
                            textPosition="start"
                        />
                    `}
                    </Markup.ReactMarkupCode>
                </Markup.ReactMarkup>

                <h3 className="docs-page__h3">Using with External Configuration</h3>
                <p className="docs-page__paragraph">
                    The <code>nameDisplay</code> and <code>textPosition</code> props can be controlled from the
                    consuming application's external configuration. This allows different customers to have different
                    default behaviors without modifying the framework.
                </p>
                <Markup.ReactMarkup>
                    <Markup.ReactMarkupPreview>
                        {(() => {
                            // Simulate external config from consuming application
                            const externalConfig = {
                                avatarNameDisplay: 'inline' as const,
                                textPosition: 'start' as const,
                            };

                            return (
                                <Container gap="medium" className="sd-margin-b--3" direction="row">
                                    <Avatar
                                        size="medium"
                                        imageUrl="/avatar.jpg"
                                        initials="JL"
                                        displayName="Jeffrey Lebowski"
                                        nameDisplay={externalConfig.avatarNameDisplay}
                                    />
                                    <Avatar
                                        size="medium"
                                        imageUrl={null}
                                        initials="WS"
                                        displayName="Walter Sobchak"
                                        textPosition={externalConfig.textPosition}
                                        nameDisplay={externalConfig.avatarNameDisplay}
                                    />
                                </Container>
                            );
                        })()}
                    </Markup.ReactMarkupPreview>
                    <Markup.ReactMarkupCode>
                        {`
                        // Example: Reading from external config in your application
                        const appConfig = {
                            avatarNameDisplay: 'inline' // or 'tooltip' or 'title'
                            textPosition: 'start' // or 'end'
                        };

                        // Pass config value to individual avatars
                        <Avatar
                            size="medium"
                            imageUrl="/avatar.jpg"
                            initials="JL"
                            displayName="Jeffrey Lebowski"
                            nameDisplay={appConfig.avatarNameDisplay}
                            textPosition={appConfig.textPosition}
                        />
                        <Avatar
                            size="medium"
                            imageUrl={null}
                            initials="WS"
                            displayName="Walter Sobchak"
                            nameDisplay={externalConfig.avatarNameDisplay}
                        />
                    `}
                    </Markup.ReactMarkupCode>
                </Markup.ReactMarkup>

                <h3 className="docs-page__h3">AvatarGroup</h3>
                <p className="docs-page__paragraph">
                    The <code>AvatarGroup</code> component displays multiple avatars in a compact, stacked layout. It's
                    commonly used to show participants, assignees, or team members in a space-efficient manner.
                </p>
                <p className="docs-page__paragraph">
                    <strong>Note:</strong> In <code>AvatarGroup</code>, inline mode is automatically converted to
                    tooltip mode to maintain compact display.
                </p>
                <Markup.ReactMarkup>
                    <Markup.ReactMarkupPreview>
                        <p className="docs-page__paragraph">// Various sizes</p>
                        <AvatarGroup size="x-small" items={avatars} />

                        <br />

                        <AvatarGroup size="small" items={avatars} />

                        <br />

                        <AvatarGroup size="medium" items={avatars} />

                        <br />

                        <AvatarGroup size="large" items={avatars} max={4} />

                        <br />

                        <AvatarGroup size="x-large" items={avatars} />

                        <AvatarGroup size="xx-large" items={avatars} />

                        <p className="docs-page__paragraph">// With icons</p>
                        {(() => {
                            const avatars: Array<IAvatarInGroup> = [
                                {
                                    imageUrl: 'avatar.jpg',
                                    initials: 'JL',
                                    displayName: 'Jeffrey Lebowski',
                                    icon: {name: 'print', color: 'red'},
                                },
                                {
                                    imageUrl: null,
                                    initials: 'WS',
                                    displayName: 'Walter Sobchak',
                                    icon: {name: 'print', color: 'green'},
                                },
                                {
                                    imageUrl: null,
                                    initials: 'DK',
                                    displayName: 'Donny Kerabatsos',
                                    icon: {name: 'print', color: 'var(--sd-colour-state--in-workflow)'},
                                },
                                {
                                    imageUrl: 'avatar-3.jpg',
                                    initials: 'JJB',
                                    displayName: 'Jean-Jacques Burnel',
                                    icon: {name: 'print', color: 'var(--sd-colour-state--in-progress)'},
                                },
                                {
                                    imageUrl: 'avatar-4.jpg',
                                    initials: 'DH',
                                    displayName: 'Deborah Ann Harry',
                                    icon: {name: 'print', color: 'var(--sd-colour-highlight)'},
                                },
                                {
                                    imageUrl: 'avatar-5.jpg',
                                    initials: 'CW',
                                    displayName: 'Christopher George Latore Wallace',
                                    icon: {name: 'print', color: 'var(--sd-colour-state--in-progress)'},
                                },
                            ];

                            return (
                                <>
                                    <AvatarGroup size="x-small" items={avatars} />

                                    <br />

                                    <AvatarGroup size="small" items={avatars} />

                                    <br />

                                    <AvatarGroup size="medium" items={avatars} />

                                    <br />

                                    <AvatarGroup size="large" items={avatars} />

                                    <br />

                                    <AvatarGroup size="x-large" items={avatars} />

                                    <br />

                                    <AvatarGroup size="xx-large" items={avatars} />

                                    <br />
                                </>
                            );
                        })()}
                    </Markup.ReactMarkupPreview>

                    <Markup.ReactMarkupCode>
                        {`
                        // Various sizes

                        <AvatarGroup
                            size="x-small"
                            items={avatars}
                        />

                        <br />

                        <AvatarGroup
                            size="small"
                            items={avatars}
                        />

                        <br />

                        <AvatarGroup
                            size="medium"
                            items={avatars}
                        />

                        <br />

                        <AvatarGroup
                            size="large"
                            items={avatars}
                            max={4}
                        />

                        <br />

                        <AvatarGroup
                            size="x-large"
                            items={avatars}
                        />

                        <AvatarGroup
                            size="xx-large"
                            items={avatars}
                        />

                        // With icons

                        {(() => {
                            const avatars: Array<IAvatarInGroup> = [
                                {
                                    imageUrl: 'avatar.jpg',
                                    initials: "U1",
                                    displayName: 'User1',
                                    icon:{name: 'print', color: 'red'},
                                },
                                {
                                    imageUrl: null,
                                    initials: "U2",
                                    displayName: 'User2',
                                    icon:{name: 'print', color: 'green'},
                                },
                                {
                                    imageUrl: null,
                                    initials: "U3",
                                    displayName: 'User3',
                                    icon:{name: 'print', color: 'var(--sd-colour-state--in-workflow)'},
                                },
                                {
                                    imageUrl: 'avatar-3.jpg',
                                    initials: "U4",
                                    displayName: 'User4',
                                    icon:{name: 'print', color: 'var(--sd-colour-state--in-progress)'},
                                },
                                {
                                    imageUrl: 'avatar-4.jpg',
                                    initials: "U5",
                                    displayName: 'User5',
                                    icon:{name: 'print', color: 'var(--sd-colour-highlight)'},
                                },
                                {
                                    imageUrl: null,
                                    initials: "U6",
                                    displayName: 'User6',
                                    icon:{name: 'print', color: 'var(--sd-colour-state--in-progress)'},
                                },
                            ];

                            return (
                                <>
                                    <AvatarGroup
                                        size="x-small"
                                        items={avatars}
                                    />

                                    <br />

                                    <AvatarGroup
                                        size="small"
                                        items={avatars}
                                    />

                                    <br />

                                    <AvatarGroup
                                        size="medium"
                                        items={avatars}
                                    />

                                    <br />

                                    <AvatarGroup
                                        size="large"
                                        items={avatars}
                                    />

                                    <br />

                                    <AvatarGroup
                                        size="x-large"
                                        items={avatars}
                                    />

                                    <br />

                                    <AvatarGroup
                                        size="xx-large"
                                        items={avatars}
                                    />

                                    <br />
                                </>
                            );
                        })()}
                    `}
                    </Markup.ReactMarkupCode>
                </Markup.ReactMarkup>

                <h3 className="docs-page__h3">Props</h3>

                <h4 className="docs-page__h4">Avatar</h4>
                <PropsList>
                    <Prop
                        name="imageUrl"
                        isRequired={true}
                        type="string | null"
                        default="/"
                        description="URL of the avatar image. Pass null if no image is available."
                    />
                    <Prop
                        name="displayName"
                        isRequired={true}
                        type="string"
                        default="/"
                        description="User's display name shown in tooltip or inline mode."
                    />
                    <Prop
                        name="initials"
                        isRequired={true}
                        type="string | null"
                        default="/"
                        description="User's initials (max 3 letters). Pass null if not available."
                    />
                    <Prop
                        name="size"
                        isRequired={true}
                        type="'x-small' | 'small' | 'medium' | 'large' | 'x-large' | 'xx-large'"
                        default="/"
                        description="Size of the avatar."
                    />
                    <Prop
                        name="statusIndicator"
                        isRequired={false}
                        type="'online' | 'offline'"
                        default="/"
                        description="Shows user's online/offline status."
                    />
                    <Prop
                        name="administratorIndicator"
                        isRequired={false}
                        type="boolean"
                        default="false"
                        description="Shows administrator crown indicator."
                    />
                    <Prop
                        name="icon"
                        isRequired={false}
                        type="{name: string; color?: string}"
                        default="/"
                        description="Icon to display over the avatar (e.g., content type indicator)."
                    />
                    <Prop
                        name="statusDot"
                        isRequired={false}
                        type="{color?: string}"
                        default="/"
                        description="Custom colored status dot (e.g., for coverage states)."
                    />
                    <Prop
                        name="noAvatarPlaceholderColor"
                        isRequired={false}
                        type="'subtle' | 'strong'"
                        default="'strong'"
                        description="Color scheme for placeholder when no image is available."
                    />
                    <Prop
                        name="tooltip"
                        isRequired={false}
                        type="string"
                        default="/"
                        description="Additional information to show in tooltip (added on a new line below displayName)."
                    />
                    <Prop
                        name="nameDisplay"
                        isRequired={false}
                        type="'tooltip' | 'title' | 'inline'"
                        default="'tooltip'"
                        description="Controls how the name is displayed: 'tooltip' (shows in tooltip component), 'title' (uses HTML title attribute), 'inline' (displays beside avatar)."
                    />
                    <Prop
                        name="tooltipFlow"
                        isRequired={false}
                        type="'top' | 'left' | 'right' | 'down'"
                        default="'top'"
                        description="Tooltip position. Only applies when nameDisplay is 'tooltip'."
                    />
                    <Prop
                        name="textPosition"
                        isRequired={false}
                        type="'start' | 'end'"
                        default="'end'"
                        description="Text position relative to avatar. Only applies when nameDisplay is 'inline'. 'start' places text before avatar, 'end' places it after."
                    />
                    <Prop
                        name="customContent"
                        isRequired={false}
                        type="JSX.Element"
                        default="/"
                        description="Custom content to render inside the avatar (AvatarContentText or AvatarContentImage)."
                    />
                </PropsList>

                <h4 className="docs-page__h4">AvatarGroup</h4>
                <PropsList>
                    <Prop
                        name="items"
                        isRequired={true}
                        type="Array<IAvatarInGroup | IAvatarPlaceholderInGroup>"
                        default="/"
                        description="Array of avatar or placeholder configurations. Each item has same props as Avatar or AvatarPlaceholder (excluding size)."
                    />
                    <Prop
                        name="size"
                        isRequired={true}
                        type="'x-small' | 'small' | 'medium' | 'large' | 'x-large' | 'xx-large'"
                        default="/"
                        description="Size applied to all avatars in the group."
                    />
                    <Prop
                        name="max"
                        isRequired={false}
                        type="number | 'show-all'"
                        default="4"
                        description="Maximum number of avatars to show inline before showing '+N' button."
                    />
                    <Prop
                        name="onClick"
                        isRequired={false}
                        type="() => void"
                        default="/"
                        description="Custom click handler. If not provided, a popover with all avatars is shown when max is exceeded."
                    />
                </PropsList>

                <h4 className="docs-page__h4">AvatarPlaceholder</h4>
                <PropsList>
                    <Prop
                        name="kind"
                        isRequired={true}
                        type="'plus-button' | 'user-icon'"
                        default="/"
                        description="Type of placeholder: 'plus-button' shows add icon, 'user-icon' shows user silhouette."
                    />
                    <Prop
                        name="size"
                        isRequired={true}
                        type="'x-small' | 'small' | 'medium' | 'large' | 'x-large' | 'xx-large'"
                        default="/"
                        description="Size of the placeholder avatar."
                    />
                    <Prop
                        name="tooltip"
                        isRequired={false}
                        type="string | null"
                        default="/"
                        description="Tooltip text to show on hover."
                    />
                    <Prop
                        name="icon"
                        isRequired={false}
                        type="{name: string; color?: string}"
                        default="/"
                        description="Icon to display over the placeholder."
                    />
                    <Prop
                        name="onClick"
                        isRequired={false}
                        type="() => void"
                        default="/"
                        description="Click handler for the placeholder."
                    />
                </PropsList>
            </section>
        );
    }
}
