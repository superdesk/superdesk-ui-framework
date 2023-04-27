import * as React from 'react';
import * as Markup from '../../js/react';

import {Container, Avatar, AvatarGroup} from '../../../app-typescript';
import {IAvatarGroupItem} from '../../../app-typescript/components/avatar/avatar-group';

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
                        tooltip="Jeffrey Lebowski"
                    />
                `}
                </Markup.ReactMarkupCodePreview>

                <Markup.ReactMarkup>
                    <Markup.ReactMarkupPreview>
                        <p className="docs-page__paragraph">// Combo</p>
                        <Container gap='medium' className='sd-margin-b--3'>

                            <Avatar
                                imageUrl="/avatar.jpg"
                                initials={null}
                                tooltip="User 1"
                                size="large"
                                icon={{name: 'print', color: 'red'}}
                                statusIndicator="online"
                                administratorIndicator
                            />

                            <Avatar
                                imageUrl={null}
                                initials="BC"
                                tooltip="User 2"
                                size="large"
                                icon={{name: 'print', color: 'red'}}
                                statusIndicator="offline"
                                administratorIndicator
                            />

                            <Avatar
                                imageUrl={null}
                                initials={null}
                                tooltip="User 3"
                                size="large"
                                icon={{name: 'print', color: 'red'}}
                                administratorIndicator
                            />

                        </Container>

                        <p className="docs-page__paragraph">// Basic with size variations</p>
                        <Container gap='medium' className='sd-margin-b--3'>

                            <Avatar
                                size="x-small"
                                imageUrl="/avatar.jpg"
                                initials="JL"
                                tooltip="Jeffrey Lebowski"
                            />

                            <Avatar
                                size="small"
                                imageUrl="/avatar.jpg"
                                initials="JL"
                                tooltip="Jeffrey Lebowski"
                            />

                            <Avatar
                                size="medium"
                                imageUrl="/avatar.jpg"
                                initials="JL"
                                tooltip="Jeffrey Lebowski"
                            />

                            <Avatar
                                size="large"
                                imageUrl="/avatar.jpg"
                                initials="JL"
                                tooltip="Jeffrey Lebowski"
                            />

                            <Avatar
                                size="x-large"
                                imageUrl="/avatar.jpg"
                                initials="JL"
                                tooltip="Jeffrey Lebowski"
                            />

                            <Avatar
                                size="xx-large"
                                imageUrl="/avatar.jpg"
                                initials="JL"
                                tooltip="Jeffrey Lebowski"
                            />

                        </Container>

                        <p className="docs-page__paragraph">// With status indicator</p>
                        <Container gap='medium' className='sd-margin-b--3'>

                            <Avatar
                                size="x-small"
                                imageUrl="/avatar.jpg"
                                initials="JL"
                                tooltip="Jeffrey Lebowski"
                                statusIndicator="online"
                            />

                            <Avatar
                                size="x-small"
                                imageUrl="/avatar.jpg"
                                initials="JL"
                                tooltip="Jeffrey Lebowski"
                                statusIndicator="offline"
                            />

                            <Avatar
                                size="large"
                                imageUrl="/avatar.jpg"
                                initials="JL"
                                tooltip="Jeffrey Lebowski"
                                statusIndicator="online"
                            />

                            <Avatar
                                size="large"
                                imageUrl="/avatar.jpg"
                                initials="JL"
                                tooltip="Jeffrey Lebowski"
                                statusIndicator="offline"
                            />

                        </Container>

                        <p className="docs-page__paragraph">// With administrator indicator</p>
                        <Container gap='medium' className='sd-margin-b--3'>
                            <Avatar
                                size="large"
                                imageUrl="/avatar.jpg"
                                initials="JL"
                                tooltip="Jeffrey Lebowski"
                                administratorIndicator
                            />
                        </Container>



                        <p className="docs-page__paragraph">// With icon</p>
                        <Container gap='medium' className='sd-margin-b--3'>

                            <Avatar
                                size="x-small"
                                imageUrl={null}
                                initials="JL"
                                tooltip="Jeffrey Lebowski"
                                icon={{name: 'text'}}
                            />

                            <Avatar
                                size="small"
                                imageUrl="/avatar.jpg"
                                initials="JL"
                                tooltip="Jeffrey Lebowski"
                                icon={{name: 'text'}}
                            />

                            <Avatar
                                size="medium"
                                imageUrl="/avatar.jpg"
                                initials="JL"
                                tooltip="Jeffrey Lebowski"
                                icon={{name: 'audio', color: 'var(--sd-colour-state--done)'}}
                            />

                            <Avatar
                                size="large"
                                imageUrl="/avatar.jpg"
                                initials="JL"
                                tooltip="Jeffrey Lebowski"
                                icon={{name: 'text', color: 'var(--sd-colour-state--in-progress)'}}
                            />

                            <Avatar
                                size="x-large"
                                imageUrl="/avatar.jpg"
                                initials="JL"
                                tooltip="Jeffrey Lebowski"
                                icon={{name: 'text'}}
                            />

                            <Avatar
                                size="xx-large"
                                imageUrl={null}
                                initials="JL"
                                tooltip="Jeffrey Lebowski"
                                icon={{name: 'video-cancel', color: 'var(--sd-colour-state--in-progress)'}}
                            />

                        </Container>


                    </Markup.ReactMarkupPreview>

                    <Markup.ReactMarkupCode>{`
                        // Combo

                        <Avatar
                            imageUrl="/avatar.jpg"
                            initials={null}
                            tooltip="User 1"
                            size="large"
                            icon={{name: 'print', color: 'red'}}
                            statusIndicator="online"
                            administratorIndicator
                        />

                        <Avatar
                            imageUrl={null}
                            initials="BC"
                            tooltip="User 2"
                            size="large"
                            icon={{name: 'print', color: 'red'}}
                            statusIndicator="offline"
                            administratorIndicator
                        />

                        <Avatar
                            imageUrl={null}
                            initials={null}
                            tooltip="User 3"
                            size="large"
                            icon={{name: 'print', color: 'red'}}
                            administratorIndicator
                        />

                        // Basic with size variations
                        <Avatar
                            size="x-small"
                            imageUrl="/avatar.jpg"
                            initials="JL"
                            tooltip="Jeffrey Lebowski"
                        />

                        <Avatar
                            size="small"
                            imageUrl="/avatar.jpg"
                            initials="JL"
                            tooltip="Jeffrey Lebowski"
                        />

                        <Avatar
                            size="medium"
                            imageUrl="/avatar.jpg"
                            initials="JL"
                            tooltip="Jeffrey Lebowski"
                        />

                        <Avatar
                            size="large"
                            imageUrl="/avatar.jpg"
                            initials="JL"
                            tooltip="Jeffrey Lebowski"
                        />

                        <Avatar
                            size="x-large"
                            imageUrl="/avatar.jpg"
                            initials="JL"
                            tooltip="Jeffrey Lebowski"
                        />

                        <Avatar
                            size="xx-large"
                            imageUrl="/avatar.jpg"
                            initials="JL"
                            tooltip="Jeffrey Lebowski"
                        />


                        // With status indicator
                        <Avatar
                            size="x-small"
                            imageUrl="/avatar.jpg"
                            initials="JL"
                            tooltip="Jeffrey Lebowski"
                            statusIndicator="online"
                        />

                        <Avatar
                            size="x-small"
                            imageUrl="/avatar.jpg"
                            initials="JL"
                            tooltip="Jeffrey Lebowski"
                            statusIndicator="offline"
                        />

                        <Avatar
                            size="large"
                            imageUrl="/avatar.jpg"
                            initials="JL"
                            tooltip="Jeffrey Lebowski"
                            statusIndicator="online"
                        />

                        <Avatar
                            size="large"
                            imageUrl="/avatar.jpg"
                            initials="JL"
                            tooltip="Jeffrey Lebowski"
                            statusIndicator="offline"
                        />

                        // With administrator indicator

                        <Avatar
                            size="large"
                            imageUrl="/avatar.jpg"
                            initials="JL"
                            tooltip="Jeffrey Lebowski"
                            administratorIndicator
                        />

                        // With icons

                        <Avatar
                            size="x-small"
                            imageUrl={null}
                            initials="JL"
                            tooltip="Jeffrey Lebowski"
                            icon={{name: 'text'}}
                        />

                        <Avatar
                            size="small"
                            imageUrl="/avatar.jpg"
                            initials="JL"
                            tooltip="Jeffrey Lebowski"
                            icon={{name: 'text'}}
                        />

                        <Avatar
                            size="medium"
                            imageUrl="/avatar.jpg"
                            initials="JL"
                            tooltip="Jeffrey Lebowski"
                            icon={{name: 'audio', color: 'var(--sd-colour-state--done)'}}
                        />

                        <Avatar
                            size="large"
                            imageUrl="/avatar.jpg"
                            initials="JL"
                            tooltip="Jeffrey Lebowski"
                            icon={{name: 'text', color: 'var(--sd-colour-state--in-progress)'}}
                        />

                        <Avatar
                            size="x-large"
                            imageUrl="/avatar.jpg"
                            initials="JL"
                            tooltip="Jeffrey Lebowski"
                            icon={{name: 'text'}}
                        />

                        <Avatar
                            size="xx-large"
                            imageUrl={null}
                            initials="JL"
                            tooltip="Jeffrey Lebowski"
                            icon={{name: 'video-cancel', color: 'var(--sd-colour-state--in-progress)'}}
                        />


                        </AvatarWrapper>
                    `}
                    </Markup.ReactMarkupCode>
                </Markup.ReactMarkup>

                <h3 className="docs-page__h3 docs-page__h3--small-top-m">AvatarGroup</h3>
                <p className='docs-page__paragraph'></p>
                <Markup.ReactMarkup>
                    <Markup.ReactMarkupPreview>
                        <p className="docs-page__paragraph">// Various sizes</p>
                        {(() => {
                            const avatars: Array<IAvatarGroupItem> = [
                                {
                                    imageUrl: 'avatar.jpg',
                                    initials: "JL",
                                    tooltip: null,
                                },
                                {
                                    imageUrl: null,
                                    initials: "AB",
                                    tooltip: null,
                                },
                                {
                                    imageUrl: null,
                                    initials: "FG",
                                    tooltip: null,
                                },
                                {
                                    imageUrl: 'avatar-3.jpg',
                                    initials: "JL",
                                    tooltip: null,
                                },
                                {
                                    imageUrl: 'avatar-4.jpg',
                                    initials: "JL",
                                    tooltip: null,
                                },
                                {
                                    imageUrl: null,
                                    initials: "KU",
                                    tooltip: null,
                                },
                            ];

                            return (
                                <>
                                    <AvatarGroup
                                        size="x-small"
                                        avatars={avatars}
                                    />

                                    <br />

                                    <AvatarGroup
                                        size="small"
                                        avatars={avatars}
                                    />

                                    <br />

                                    <AvatarGroup
                                        size="medium"
                                        avatars={avatars}
                                    />

                                    <br />

                                    <AvatarGroup
                                        size="large"
                                        avatars={avatars}
                                        max={4}
                                    />

                                    <br />

                                    <AvatarGroup
                                        size="x-large"
                                        avatars={avatars}
                                    />

                                    <AvatarGroup
                                        size="xx-large"
                                        avatars={avatars}
                                    />

                                    <br />
                                </>
                            );
                        })()}

                        <p className="docs-page__paragraph">// With icons</p>
                        {(() => {
                            const avatars: Array<IAvatarGroupItem> = [
                                {
                                    imageUrl: 'avatar.jpg',
                                    initials: "JL",
                                    tooltip: null,
                                    icon:{name: 'print', color: 'red'},
                                },
                                {
                                    imageUrl: null,
                                    initials: "AB",
                                    tooltip: null,
                                    icon:{name: 'print', color: 'green'},
                                },
                                {
                                    imageUrl: null,
                                    initials: "FG",
                                    tooltip: null,
                                    icon:{name: 'print', color: 'blue'},
                                },
                                {
                                    imageUrl: 'avatar-3.jpg',
                                    initials: "JL",
                                    tooltip: null,
                                    icon:{name: 'print', color: 'yellow'},
                                },
                                {
                                    imageUrl: 'avatar-4.jpg',
                                    initials: "JL",
                                    tooltip: null,
                                    icon:{name: 'print', color: 'orange'},
                                },
                                {
                                    imageUrl: null,
                                    initials: "KU",
                                    tooltip: null,
                                    icon:{name: 'print', color: 'lime'},
                                },
                            ];

                            return (
                                <>
                                    <AvatarGroup
                                        size="x-small"
                                        avatars={avatars}
                                    />

                                    <br />

                                    <AvatarGroup
                                        size="small"
                                        avatars={avatars}
                                    />

                                    <br />

                                    <AvatarGroup
                                        size="medium"
                                        avatars={avatars}
                                    />

                                    <br />

                                    <AvatarGroup
                                        size="large"
                                        avatars={avatars}
                                    />

                                    <br />

                                    <AvatarGroup
                                        size="x-large"
                                        avatars={avatars}
                                    />

                                    <AvatarGroup
                                        size="xx-large"
                                        avatars={avatars}
                                    />

                                    <br />
                                </>
                            );
                        })()}
                    </Markup.ReactMarkupPreview>

                    <Markup.ReactMarkupCode>{`
                        // Various sizes

                        const avatars: Array<IAvatarGroupItem> = [
                            {
                                imageUrl: 'avatar.jpg',
                                initials: "JL",
                                tooltip: null,
                            },
                            {
                                imageUrl: null,
                                initials: "AB",
                                tooltip: null,
                            },
                            {
                                imageUrl: null,
                                initials: "FG",
                                tooltip: null,
                            },
                            {
                                imageUrl: 'avatar-3.jpg',
                                initials: "JL",
                                tooltip: null,
                            },
                            {
                                imageUrl: 'avatar-4.jpg',
                                initials: "JL",
                                tooltip: null,
                            },
                            {
                                imageUrl: null,
                                initials: "KU",
                                tooltip: null,
                            },
                        ];

                        return (
                            <>
                                <AvatarGroup
                                    size="x-small"
                                    avatars={avatars}
                                />

                                <br />

                                <AvatarGroup
                                    size="small"
                                    avatars={avatars}
                                />

                                <br />

                                <AvatarGroup
                                    size="medium"
                                    avatars={avatars}
                                />

                                <br />

                                <AvatarGroup
                                    size="large"
                                    avatars={avatars}
                                />

                                <br />

                                <AvatarGroup
                                    size="x-large"
                                    avatars={avatars}
                                />

                                <AvatarGroup
                                    size="xx-large"
                                    avatars={avatars}
                                />

                                <br />
                            </>
                        );

                        // With icons

                        const avatars: Array<IAvatarGroupItem> = [
                            {
                                imageUrl: 'avatar.jpg',
                                initials: "JL",
                                tooltip: null,
                                icon:{name: 'print', color: 'red'},
                            },
                            {
                                imageUrl: null,
                                initials: "AB",
                                tooltip: null,
                                icon:{name: 'print', color: 'green'},
                            },
                            {
                                imageUrl: null,
                                initials: "FG",
                                tooltip: null,
                                icon:{name: 'print', color: 'blue'},
                            },
                            {
                                imageUrl: 'avatar-3.jpg',
                                initials: "JL",
                                tooltip: null,
                                icon:{name: 'print', color: 'yellow'},
                            },
                            {
                                imageUrl: 'avatar-4.jpg',
                                initials: "JL",
                                tooltip: null,
                                icon:{name: 'print', color: 'orange'},
                            },
                            {
                                imageUrl: null,
                                initials: "KU",
                                tooltip: null,
                                icon:{name: 'print', color: 'lime'},
                            },
                        ];

                        return (
                            <>
                                <AvatarGroup
                                    size="x-small"
                                    avatars={avatars}
                                />

                                <br />

                                <AvatarGroup
                                    size="small"
                                    avatars={avatars}
                                />

                                <br />

                                <AvatarGroup
                                    size="medium"
                                    avatars={avatars}
                                />

                                <br />

                                <AvatarGroup
                                    size="large"
                                    avatars={avatars}
                                />

                                <br />

                                <AvatarGroup
                                    size="x-large"
                                    avatars={avatars}
                                />

                                <AvatarGroup
                                    size="xx-large"
                                    avatars={avatars}
                                />

                                <br />
                            </>
                        );


                    `}
                    </Markup.ReactMarkupCode>
                </Markup.ReactMarkup>
            </section>
        );
    }
}
