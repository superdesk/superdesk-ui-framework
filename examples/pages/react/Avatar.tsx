import * as React from 'react';

import * as Markup from '../../js/react';

import {AvatarWrapper, AvatarContentText, AvatarContentImage} from '../../../app-typescript';

export default class AvatarDoc extends React.PureComponent {
    render() {
        return (
            <section className="docs-page__container">
                <h2 className="docs-page__h2">Avatar</h2>

                <Markup.ReactMarkup>

                    <Markup.ReactMarkupPreview>
                        <AvatarWrapper
                            size="small"
                            statusIndicator={{status: 'online', tooltipText: "Online"}}
                            administratorIndicator={{enabled: true, tooltipText: "Administrator"}}
                        >
                            <AvatarContentText text="ABC" tooltipText="John Doe" />
                        </AvatarWrapper>

                        <br />

                        <AvatarWrapper
                            size="medium"
                            statusIndicator={{status: 'offline', tooltipText: "Offline"}}
                            administratorIndicator={{enabled: true, tooltipText: "Administrator"}}
                        >
                            <AvatarContentText text="ABC" tooltipText="John Doe" />
                        </AvatarWrapper>

                        <br />

                        <AvatarWrapper
                            size="large"
                            statusIndicator={{status: 'online', tooltipText: "Online"}}
                            administratorIndicator={{enabled: true, tooltipText: "Administrator"}}
                        >
                            <AvatarContentText text="ABC" tooltipText="John Doe" />
                        </AvatarWrapper>

                        <br />

                        <AvatarWrapper
                            size="small"
                            statusIndicator={{status: 'online', tooltipText: "Online"}}
                            administratorIndicator={{enabled: true, tooltipText: "Administrator"}}
                        >
                            <AvatarContentImage imageUrl="/avatar.jpg" tooltipText="John Doe" />
                        </AvatarWrapper>

                        <br />

                        <AvatarWrapper
                            size="medium"
                            statusIndicator={{status: 'offline', tooltipText: "Offline"}}
                            administratorIndicator={{enabled: true, tooltipText: "Administrator"}}
                        >
                            <AvatarContentImage imageUrl="/avatar.jpg" tooltipText="John Doe" />
                        </AvatarWrapper>

                        <br />

                        <AvatarWrapper
                            size="large"
                            statusIndicator={{status: 'online', tooltipText: "Online"}}
                            administratorIndicator={{enabled: true, tooltipText: "Administrator"}}
                        >
                            <AvatarContentImage imageUrl="/avatar.jpg" tooltipText="John Doe" />
                        </AvatarWrapper>

                        <br />

                        <AvatarWrapper
                            size="small"
                            statusIndicator={{status: 'online', tooltipText: "Online"}}
                            administratorIndicator={{enabled: true, tooltipText: "Administrator"}}
                        >
                            <AvatarContentImage tooltipText="John Doe" />
                        </AvatarWrapper>

                        <br />

                        <AvatarWrapper
                            size="medium"
                            statusIndicator={{status: 'offline', tooltipText: "Offline"}}
                            administratorIndicator={{enabled: true, tooltipText: "Administrator"}}
                        >
                            <AvatarContentImage tooltipText="John Doe" />
                        </AvatarWrapper>

                        <br />

                        <AvatarWrapper
                            size="large"
                            statusIndicator={{status: 'online', tooltipText: "Online"}}
                            administratorIndicator={{enabled: true, tooltipText: "Administrator"}}
                        >
                            <AvatarContentImage tooltipText="John Doe" />
                        </AvatarWrapper>
                    </Markup.ReactMarkupPreview>

                    <Markup.ReactMarkupCode>{`
                        <AvatarWrapper
                            size="small"
                            statusIndicator={{status: 'online', tooltipText: "Online"}}
                            administratorIndicator={{enabled: true, tooltipText: "Administrator"}}
                        >
                            <AvatarContentText text="ABC" tooltipText="John Doe" />
                        </AvatarWrapper>

                        <br />

                        <AvatarWrapper
                            size="medium"
                            statusIndicator={{status: 'offline', tooltipText: "Offline"}}
                            administratorIndicator={{enabled: true, tooltipText: "Administrator"}}
                        >
                            <AvatarContentText text="ABC" tooltipText="John Doe" />
                        </AvatarWrapper>

                        <br />

                        <AvatarWrapper
                            size="large"
                            statusIndicator={{status: 'online', tooltipText: "Online"}}
                            administratorIndicator={{enabled: true, tooltipText: "Administrator"}}
                        >
                            <AvatarContentText text="ABC" tooltipText="John Doe" />
                        </AvatarWrapper>

                        <br />

                        <AvatarWrapper
                            size="small"
                            statusIndicator={{status: 'online', tooltipText: "Online"}}
                            administratorIndicator={{enabled: true, tooltipText: "Administrator"}}
                        >
                            <AvatarContentImage imageUrl="/avatar.jpg" tooltipText="John Doe" />
                        </AvatarWrapper>

                        <br />

                        <AvatarWrapper
                            size="medium"
                            statusIndicator={{status: 'offline', tooltipText: "Offline"}}
                            administratorIndicator={{enabled: true, tooltipText: "Administrator"}}
                        >
                            <AvatarContentImage imageUrl="/avatar.jpg" tooltipText="John Doe" />
                        </AvatarWrapper>

                        <br />

                        <AvatarWrapper
                            size="large"
                            statusIndicator={{status: 'online', tooltipText: "Online"}}
                            administratorIndicator={{enabled: true, tooltipText: "Administrator"}}
                        >
                            <AvatarContentImage imageUrl="/avatar.jpg" tooltipText="John Doe" />
                        </AvatarWrapper>

                        <br />

                        <AvatarWrapper
                            size="small"
                            statusIndicator={{status: 'online', tooltipText: "Online"}}
                            administratorIndicator={{enabled: true, tooltipText: "Administrator"}}
                        >
                            <AvatarContentImage tooltipText="John Doe" />
                        </AvatarWrapper>

                        <br />

                        <AvatarWrapper
                            size="medium"
                            statusIndicator={{status: 'offline', tooltipText: "Offline"}}
                            administratorIndicator={{enabled: true, tooltipText: "Administrator"}}
                        >
                            <AvatarContentImage tooltipText="John Doe" />
                        </AvatarWrapper>

                        <br />

                        <AvatarWrapper
                            size="large"
                            statusIndicator={{status: 'online', tooltipText: "Online"}}
                            administratorIndicator={{enabled: true, tooltipText: "Administrator"}}
                        >
                            <AvatarContentImage tooltipText="John Doe" />
                        </AvatarWrapper>
                    `}
                    </Markup.ReactMarkupCode>
                </Markup.ReactMarkup>
            </section>
        );
    }
}
