import * as React from 'react';
import * as Markup from '../../js/react';

import {Container, Avatar, AvatarGroup, AvatarPlaceholder} from '../../../app-typescript';
import {IAvatarInGroup, IAvatarPlaceholderInGroup} from '../../../app-typescript/components/avatar/avatar-group';

const avatars: Array<IAvatarInGroup> = [
    {
        imageUrl: 'avatar.jpg',
        initials: "U1",
        displayName: 'User1',
    },
    {
        imageUrl: null,
        initials: "U2",
        displayName: 'User2',
    },
    {
        imageUrl: null,
        initials: "U3",
        displayName: 'User3',
    },
    {
        imageUrl: 'avatar-3.jpg',
        initials: "U4",
        displayName: 'User4',
    },
    {
        imageUrl: 'avatar-4.jpg',
        initials: "U5",
        displayName: 'User5',
    },
    {
        imageUrl: null,
        initials: "A6",
        displayName: 'User6',
    },
];

export default class AvatarDoc extends React.PureComponent {
    render() {
        return (
            <section className="docs-page__container">
                <h2 className="docs-page__h2">Avatar</h2>

                <Markup.ReactMarkupCodePreview>{`
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
                        <Container gap='medium' className='sd-margin-b--3'>

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
                                icon={{name: 'print', color: 'var(--sd-colour-state--in-workflow)'}}
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

                        </Container>

                        <p className="docs-page__paragraph">// Basic with size variations</p>
                        <Container gap='medium' className='sd-margin-b--3'>

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

                        </Container>

                        <p className="docs-page__paragraph">// With status indicator</p>
                        <Container gap='medium' className='sd-margin-b--3'>

                            <Avatar
                                size="large"
                                imageUrl="/avatar.jpg"
                                initials="JL"
                                displayName="Jeffrey Lebowski"
                                statusIndicator="online"
                            />

                        </Container>

                        <p className="docs-page__paragraph">// With administrator indicator</p>
                        <Container gap='medium' className='sd-margin-b--3'>
                            <Avatar
                                size="large"
                                imageUrl="/avatar.jpg"
                                initials="JL"
                                displayName="Jeffrey Lebowski"
                                administratorIndicator
                            />
                        </Container>

                        <p className="docs-page__paragraph">// With icon</p>
                        <Container gap='medium' className='sd-margin-b--3'>

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
                                noAvatarPlaceholderColor='subtle'
                                icon={{name: 'text', color: 'var(--sd-colour-state--canceled)'}}
                            />

                            <AvatarPlaceholder 
                                kind='plus-button'
                                size='x-large'
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

                        </Container>
                        <p className="docs-page__paragraph">// With icon and Coverage status indicator</p>
                        <Container gap='medium' className='sd-margin-b--3'>
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

                    <Markup.ReactMarkupCode>{`
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
                            size="x-small"
                            imageUrl="/avatar.jpg"
                            initials="JL"
                            displayName="Jeffrey Lebowski"
                            statusIndicator="online"
                        />

                        <Avatar
                            size="x-small"
                            imageUrl="/avatar.jpg"
                            initials="JL"
                            displayName="Jeffrey Lebowski"
                            statusIndicator="offline"
                        />

                        <Avatar
                            size="large"
                            imageUrl="/avatar.jpg"
                            initials="JL"
                            displayName="Jeffrey Lebowski"
                            statusIndicator="online"
                        />

                        <Avatar
                            size="large"
                            imageUrl="/avatar.jpg"
                            initials="JL"
                            displayName="Jeffrey Lebowski"
                            statusIndicator="offline"
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
                            emptyLight
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

                <h3 className="docs-page__h3 docs-page__h3--small-top-m">AvatarGroup</h3>
                <p className='docs-page__paragraph'></p>
                <Markup.ReactMarkup>
                    <Markup.ReactMarkupPreview>
                        <p className="docs-page__paragraph">// With action</p>
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

                        <p className="docs-page__paragraph">// With icons</p>
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
                    </Markup.ReactMarkupPreview>

                    <Markup.ReactMarkupCode>{`
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
            </section>
        );
    }
}
