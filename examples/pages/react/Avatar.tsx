import * as React from 'react';
import * as Markup from '../../js/react';

import {AvatarWrapper, AvatarContentText, AvatarContentImage, AvatarGroup, AvatarContentAdd, AvatarContentNumber, AvatarContentIcon, Container, PropsList, Prop} from '../../../app-typescript';

export default class AvatarDoc extends React.PureComponent {
    render() {
        return (
            <section className="docs-page__container">
                <h2 className="docs-page__h2">Avatar</h2>

                <Markup.ReactMarkupCodePreview>{`
                    <AvatarWrapper
                        size="small"
                        statusIndicator={{status: 'online', tooltipText: "Online"}}
                        administratorIndicator={{enabled: true, tooltipText: "Administrator"}}
                    >
                        <AvatarContentText text="JD" tooltipText="John Doe" />
                    </AvatarWrapper>
                `}
                </Markup.ReactMarkupCodePreview>

                <Markup.ReactMarkup>
                    <Markup.ReactMarkupPreview>
                        <p className="docs-page__paragraph">// Basic with size variations</p>
                        <Container gap='medium' className='sd-margin-b--3'>

                            <AvatarWrapper size="x-small">
                                <AvatarContentText text="JL" tooltipText="Jeffrey Lebowski" />
                            </AvatarWrapper>

                            <AvatarWrapper size="small">
                                <AvatarContentImage imageUrl="/avatar-2.jpg" tooltipText="Jeffrey Lebowski" />
                            </AvatarWrapper>

                            <AvatarWrapper size="medium">
                                <AvatarContentText text="JL" tooltipText="Jeffrey Lebowski" />
                            </AvatarWrapper>

                            <AvatarWrapper size="large">
                                <AvatarContentImage imageUrl="/avatar-2.jpg" tooltipText="The Dude" />
                            </AvatarWrapper>
                            
                            <AvatarWrapper size="x-large">
                                <AvatarContentText text="JL" tooltipText="Jeffrey Lebowski" />
                            </AvatarWrapper>

                            <AvatarWrapper size="xx-large">
                                <AvatarContentImage imageUrl="/avatar-2.jpg" tooltipText="The Dude" />
                            </AvatarWrapper>

                        </Container>

                        <p className="docs-page__paragraph">// With status indicator</p>
                        <Container gap='medium' className='sd-margin-b--3'>

                            <AvatarWrapper
                                size="x-small"
                                statusIndicator={{status: 'online'}}
                            >
                                <AvatarContentText text="JJB" tooltipText="Jean Jacques Burnel" />
                            </AvatarWrapper>

                            <AvatarWrapper
                                size="large"
                                statusIndicator={{status: 'online', tooltipText: "Online"}}
                            >
                                <AvatarContentText text="JJB" tooltipText="Jean Jacques Burnel" />
                            </AvatarWrapper>

                            <AvatarWrapper
                                size="large"
                                statusIndicator={{status: 'offline'}}
                            >
                                <AvatarContentImage tooltipText="Jean Jacques Burnel" />
                            </AvatarWrapper>

                            <AvatarWrapper
                                size="large"
                                statusIndicator={{status: 'offline', tooltipText: "Offline"}}
                            >
                                <AvatarContentImage imageUrl="/avatar-3.jpg" tooltipText="Jean Jacques Burnel" />
                            </AvatarWrapper>
                        </Container>

                        <p className="docs-page__paragraph">// With administrator indicator</p>
                        <Container gap='medium' className='sd-margin-b--3'>
                            <AvatarWrapper
                                size="large"
                                administratorIndicator={{enabled: true, tooltipText: "Administrator"}}
                            >
                                <AvatarContentImage imageUrl="/avatar-6.jpg" tooltipText="Tupac Shakur" />
                            </AvatarWrapper>

                            <AvatarWrapper
                                size="large"
                                administratorIndicator={{enabled: true, tooltipText: "Administrator"}}
                            >
                                <AvatarContentText text="DD" tooltipText="Andre Romelle Young" />
                            </AvatarWrapper>

                            <AvatarWrapper
                                size="large"
                                administratorIndicator={{enabled: true, tooltipText: "Administrator"}}
                            >
                                <AvatarContentImage imageUrl="/avatar-5.jpg" tooltipText="Biggie Smalls" />
                            </AvatarWrapper>
                        </Container>

                        <p className="docs-page__paragraph">// Combo</p>
                        <Container gap='medium' className='sd-margin-b--3'>
                            <AvatarWrapper
                                size="large"
                                statusIndicator={{status: 'online'}}
                                administratorIndicator={{enabled: true, tooltipText: "Administrator"}}
                            >
                                <AvatarContentText text="DH" tooltipText="Debbie Harry" />
                            </AvatarWrapper>

                            <AvatarWrapper
                                size="large"
                                statusIndicator={{status: 'offline'}}
                                administratorIndicator={{enabled: true, tooltipText: "Administrator"}}
                            >
                                <AvatarContentImage tooltipText="Debbie Harry" />
                            </AvatarWrapper>

                            <AvatarWrapper
                                size="large"
                                statusIndicator={{status: 'offline'}}
                                administratorIndicator={{enabled: true, tooltipText: "Administrator"}}
                            >
                                <AvatarContentImage imageUrl="/avatar-4.jpg" tooltipText="Debbie Harry" />
                            </AvatarWrapper>

                            <AvatarWrapper
                                size="large"
                                isEmpty={true}
                            >
                                <AvatarContentImage tooltipText="Debbie Harry" />
                            </AvatarWrapper>

                            <AvatarWrapper
                                size="large"
                                isAddButton={true}
                            >
                                <AvatarContentAdd tooltipText="Assign coverage" />
                            </AvatarWrapper>

                            <AvatarWrapper size="large">
                                <AvatarContentNumber number="3" />
                            </AvatarWrapper>

                        </Container>

                        <p className="docs-page__paragraph">// With icon</p>
                        <Container gap='medium' className='sd-margin-b--3'>

                            <AvatarWrapper size="x-small">
                                <AvatarContentText text="JD" tooltipText="John Doe" />
                                <AvatarContentIcon type="text" />
                            </AvatarWrapper>

                            <AvatarWrapper size="small">
                            <AvatarContentImage imageUrl="/avatar-5.jpg" tooltipText="Biggie Smalls" />
                                <AvatarContentIcon type="text" />
                            </AvatarWrapper>

                            <AvatarWrapper size="medium">
                                <AvatarContentText text="DH" tooltipText="Debbie Harry" />
                                <AvatarContentIcon status='done' type="audio" />
                            </AvatarWrapper>

                            <AvatarWrapper size="large">
                                <AvatarContentImage imageUrl="/avatar-2.jpg" tooltipText="Jeffrey Lebowski" />
                                <AvatarContentIcon status='in-progress' type="text" />
                            </AvatarWrapper>

                            <AvatarWrapper size="x-large">
                            <AvatarContentImage imageUrl="/avatar-4.jpg" tooltipText="Debbie Harry" />
                                <AvatarContentIcon type="text" />
                            </AvatarWrapper>

                            <AvatarWrapper size="xx-large">
                                <AvatarContentText text="DH" tooltipText="Debbie Harry" />
                                <AvatarContentIcon canceled status='in-progress' type="video" />
                            </AvatarWrapper>

                        </Container>
                    </Markup.ReactMarkupPreview>

                    <Markup.ReactMarkupCode>{`
                        // Basic with size variations
                        <AvatarWrapper size="x-small">
                            <AvatarContentText text="JL" tooltipText="Jeffrey Lebowski" />
                        </AvatarWrapper>

                        <AvatarWrapper size="small">
                            <AvatarContentImage imageUrl="/avatar-2.jpg" tooltipText="Jeffrey Lebowski" />
                        </AvatarWrapper>

                        <AvatarWrapper size="medium">
                            <AvatarContentText text="JL" tooltipText="Jeffrey Lebowski" />
                        </AvatarWrapper>

                        <AvatarWrapper size="large">
                            <AvatarContentImage imageUrl="/avatar-2.jpg" tooltipText="The Dude" />
                        </AvatarWrapper>
                        
                        <AvatarWrapper size="x-large">
                            <AvatarContentText text="JL" tooltipText="Jeffrey Lebowski" />
                        </AvatarWrapper>

                        <AvatarWrapper size="xx-large">
                            <AvatarContentImage imageUrl="/avatar-2.jpg" tooltipText="The Dude" />
                        </AvatarWrapper>


                        // With status indicator
                        <AvatarWrapper
                            size="x-small"
                            statusIndicator={{status: 'online'}}
                        >
                            <AvatarContentText text="JJB" tooltipText="Jean Jacques Burnel" />
                        </AvatarWrapper>

                        <AvatarWrapper
                            size="large"
                            statusIndicator={{status: 'online', tooltipText: "Online"}}
                        >
                            <AvatarContentText text="JJB" tooltipText="Jean Jacques Burnel" />
                        </AvatarWrapper>

                        <AvatarWrapper
                            size="large"
                            statusIndicator={{status: 'offline'}}
                        >
                            <AvatarContentImage tooltipText="Jean Jacques Burnel" />
                        </AvatarWrapper>

                        <AvatarWrapper
                            size="large"
                            statusIndicator={{status: 'offline', tooltipText: "Offline"}}
                        >
                            <AvatarContentImage imageUrl="/avatar-3.jpg" tooltipText="Jean Jacques Burnel" />
                        </AvatarWrapper>

                        // With administrator indicator
                        <AvatarWrapper
                            size="large"
                            administratorIndicator={{enabled: true, tooltipText: "Administrator"}}
                        >
                            <AvatarContentImage imageUrl="/avatar-6.jpg" tooltipText="Tupac Shakur" />
                        </AvatarWrapper>

                        <AvatarWrapper
                            size="large"
                            administratorIndicator={{enabled: true, tooltipText: "Administrator"}}
                        >
                            <AvatarContentText text="DD" tooltipText="Andre Romelle Young" />
                        </AvatarWrapper>

                        <AvatarWrapper
                            size="large"
                            administratorIndicator={{enabled: true, tooltipText: "Administrator"}}
                        >
                            <AvatarContentImage imageUrl="/avatar-5.jpg" tooltipText="Biggie Smalls" />
                        </AvatarWrapper>

                        // Combo
                        <AvatarWrapper
                            size="large"
                            statusIndicator={{status: 'online'}}
                            administratorIndicator={{enabled: true, tooltipText: "Administrator"}}
                        >
                            <AvatarContentText text="DH" tooltipText="Debbie Harry" />
                        </AvatarWrapper>

                        <AvatarWrapper
                            size="large"
                            statusIndicator={{status: 'offline'}}
                            administratorIndicator={{enabled: true, tooltipText: "Administrator"}}
                        >
                            <AvatarContentImage tooltipText="Debbie Harry" />
                        </AvatarWrapper>

                        <AvatarWrapper
                            size="large"
                            statusIndicator={{status: 'offline'}}
                            administratorIndicator={{enabled: true, tooltipText: "Administrator"}}
                        >
                            <AvatarContentImage imageUrl="/avatar-4.jpg" tooltipText="Debbie Harry" />
                        </AvatarWrapper>

                        <AvatarWrapper
                            size="large"
                            isEmpty={true}
                        >
                            <AvatarContentImage tooltipText="Debbie Harry" />
                        </AvatarWrapper>

                        <AvatarWrapper
                            size="large"
                            isAddButton={true}
                        >
                            <AvatarContentAdd tooltipText="Assign coverage" />
                        </AvatarWrapper>

                        <AvatarWrapper size="large">
                            <AvatarContentNumber number="3" />
                        </AvatarWrapper>

                        // With icon
                        <AvatarWrapper size="x-small">
                            <AvatarContentText text="JD" tooltipText="John Doe" />
                            <AvatarContentIcon type="text" />
                        </AvatarWrapper>

                        <AvatarWrapper size="small">
                        <AvatarContentImage imageUrl="/avatar-5.jpg" tooltipText="Biggie Smalls" />
                            <AvatarContentIcon type="text" />
                        </AvatarWrapper>

                        <AvatarWrapper size="medium">
                            <AvatarContentText text="DH" tooltipText="Debbie Harry" />
                            <AvatarContentIcon status='done' type="audio" />
                        </AvatarWrapper>

                        <AvatarWrapper size="large">
                            <AvatarContentImage imageUrl="/avatar-2.jpg" tooltipText="Jeffrey Lebowski" />
                            <AvatarContentIcon status='in-progress' type="text" />
                        </AvatarWrapper>

                        <AvatarWrapper size="x-large">
                        <AvatarContentImage imageUrl="/avatar-4.jpg" tooltipText="Debbie Harry" />
                            <AvatarContentIcon type="text" />
                        </AvatarWrapper>

                        <AvatarWrapper size="xx-large">
                            <AvatarContentText text="DH" tooltipText="Debbie Harry" />
                            <AvatarContentIcon canceled status='in-progress' type="video" />
                        </AvatarWrapper>
                    `}
                    </Markup.ReactMarkupCode>
                </Markup.ReactMarkup>

                <h3 className="docs-page__h3 docs-page__h3--small-top-m">AvatarGroup</h3>
                <p className='docs-page__paragraph'></p>
                <Markup.ReactMarkup>
                    <Markup.ReactMarkupPreview>
                        <p className="docs-page__paragraph">// Stacked</p>
                        <AvatarGroup>
                            <AvatarWrapper size="large">
                                <AvatarContentImage imageUrl="/avatar-2.jpg" tooltipText="Jeffrey Lebowski" />
                            </AvatarWrapper>

                            <AvatarWrapper size="large">
                                <AvatarContentImage imageUrl="/avatar-3.jpg" tooltipText="Jean Jacques Burnel" />
                            </AvatarWrapper>

                            <AvatarWrapper size="large">
                                <AvatarContentImage imageUrl="/avatar-4.jpg" tooltipText="Debbie Harry" />
                            </AvatarWrapper>
                            
                            <AvatarWrapper size="large">
                                <AvatarContentImage imageUrl="/avatar-5.jpg" tooltipText="Biggie Smalls" />
                            </AvatarWrapper>

                            <AvatarWrapper size="large">
                                <AvatarContentImage imageUrl="/avatar-6.jpg" tooltipText="Tupac Shakur" />
                            </AvatarWrapper>
                            <AvatarWrapper size="large">
                                <AvatarContentNumber number="3" />
                            </AvatarWrapper>
                        </AvatarGroup>

                        <p className="docs-page__paragraph">// Stacked with large gap</p>
                        <AvatarGroup gap='large'>
                            <AvatarWrapper size="large">
                                <AvatarContentImage imageUrl="/avatar-2.jpg" tooltipText="Jeffrey Lebowski" />
                            </AvatarWrapper>

                            <AvatarWrapper size="large">
                                <AvatarContentImage imageUrl="/avatar-3.jpg" tooltipText="Jean Jacques Burnel" />
                            </AvatarWrapper>

                            <AvatarWrapper size="large">
                                <AvatarContentImage imageUrl="/avatar-4.jpg" tooltipText="Debbie Harry" />
                            </AvatarWrapper>
                            
                            <AvatarWrapper size="large">
                                <AvatarContentImage imageUrl="/avatar-5.jpg" tooltipText="Biggie Smalls" />
                            </AvatarWrapper>

                            <AvatarWrapper size="large">
                                <AvatarContentImage imageUrl="/avatar-6.jpg" tooltipText="Tupac Shakur" />
                            </AvatarWrapper>
                            <AvatarWrapper size="large">
                                <AvatarContentNumber number="3" />
                            </AvatarWrapper>
                        </AvatarGroup>

                        <p className="docs-page__paragraph">// Stacked with large gap -- small avatars</p>
                        <AvatarGroup gap='large'>
                            <AvatarWrapper size="x-small">
                                <AvatarContentImage imageUrl="/avatar-2.jpg" tooltipText="Jeffrey Lebowski" />
                                <AvatarContentIcon type="text" />
                            </AvatarWrapper>

                            <AvatarWrapper size="x-small">
                                <AvatarContentText text="JD" tooltipText="John Doe" />
                                <AvatarContentIcon type="video" />
                            </AvatarWrapper>

                            <AvatarWrapper size="x-small">
                                <AvatarContentImage imageUrl="/avatar-4.jpg" tooltipText="Debbie Harry" />
                                <AvatarContentIcon status='in-progress' type="audio" />
                            </AvatarWrapper>
                            
                            <AvatarWrapper size="x-small">
                                <AvatarContentText text="WS" tooltipText="Walter Sobchak" />
                                <AvatarContentIcon status='done' type="photo" />
                            </AvatarWrapper>

                            <AvatarWrapper size="x-small">
                                <AvatarContentImage imageUrl="/avatar-6.jpg" tooltipText="Tupac Shakur" />
                                <AvatarContentIcon status='done' type="text" />
                            </AvatarWrapper>
                            <AvatarWrapper size="x-small">
                                <AvatarContentNumber number="3" />
                            </AvatarWrapper>
                        </AvatarGroup>

                        <p className="docs-page__paragraph">// Grid</p>
                        <AvatarGroup appearance='grid' className='sd-width--xx-small'>

                            <AvatarWrapper size="large">
                                <AvatarContentImage imageUrl="/avatar-2.jpg" tooltipText="Jeffrey Lebowski" />
                            </AvatarWrapper>

                            <AvatarWrapper size="large">
                                <AvatarContentImage imageUrl="/avatar-3.jpg" tooltipText="Jean Jacques Burnel" />
                            </AvatarWrapper>

                            <AvatarWrapper size="large">
                                <AvatarContentImage imageUrl="/avatar-4.jpg" tooltipText="Debbie Harry" />
                            </AvatarWrapper>
                            
                            <AvatarWrapper size="large">
                                <AvatarContentImage imageUrl="/avatar.jpg" tooltipText="Biggie Smalls" />
                            </AvatarWrapper>

                            <AvatarWrapper size="large">
                                <AvatarContentImage imageUrl="/avatar-5.jpg" tooltipText="Biggie Smalls" />
                            </AvatarWrapper>

                            <AvatarWrapper size="large">
                                <AvatarContentImage tooltipText="John Doe" />
                            </AvatarWrapper>

                            <AvatarWrapper size="large">
                                <AvatarContentImage imageUrl="/avatar-2.jpg" tooltipText="Jeffrey Lebowski" />
                            </AvatarWrapper>

                            <AvatarWrapper size="large">
                                <AvatarContentText text="DD" tooltipText="Andre Romelle Young" />
                            </AvatarWrapper>

                            <AvatarWrapper size="large">
                                <AvatarContentImage imageUrl="/avatar-4.jpg" tooltipText="Debbie Harry" />
                            </AvatarWrapper>

                            <AvatarWrapper size="large">
                                <AvatarContentImage imageUrl="/avatar-6.jpg" tooltipText="Tupac Shakur" />
                            </AvatarWrapper>

                        </AvatarGroup>
                    </Markup.ReactMarkupPreview>

                    <Markup.ReactMarkupCode>{`
                        // Stacked
                        <AvatarGroup>
                            <AvatarWrapper size="large">
                                <AvatarContentImage imageUrl="/avatar-2.jpg" tooltipText="Jeffrey Lebowski" />
                            </AvatarWrapper>

                            <AvatarWrapper size="large">
                                <AvatarContentImage imageUrl="/avatar-3.jpg" tooltipText="Jean Jacques Burnel" />
                            </AvatarWrapper>

                            <AvatarWrapper size="large">
                                <AvatarContentImage imageUrl="/avatar-4.jpg" tooltipText="Debbie Harry" />
                            </AvatarWrapper>
                            
                            <AvatarWrapper size="large">
                                <AvatarContentImage imageUrl="/avatar-5.jpg" tooltipText="Biggie Smalls" />
                            </AvatarWrapper>

                            <AvatarWrapper size="large">
                                <AvatarContentImage imageUrl="/avatar-6.jpg" tooltipText="Tupac Shakur" />
                            </AvatarWrapper>
                            <AvatarWrapper size="large">
                                <AvatarContentNumber number="3" />
                            </AvatarWrapper>
                        </AvatarGroup>

                        // Stacked with large gap
                        <AvatarGroup gap='large'>
                            <AvatarWrapper size="large">
                                <AvatarContentImage imageUrl="/avatar-2.jpg" tooltipText="Jeffrey Lebowski" />
                            </AvatarWrapper>

                            <AvatarWrapper size="large">
                                <AvatarContentImage imageUrl="/avatar-3.jpg" tooltipText="Jean Jacques Burnel" />
                            </AvatarWrapper>

                            <AvatarWrapper size="large">
                                <AvatarContentImage imageUrl="/avatar-4.jpg" tooltipText="Debbie Harry" />
                            </AvatarWrapper>
                            
                            <AvatarWrapper size="large">
                                <AvatarContentImage imageUrl="/avatar-5.jpg" tooltipText="Biggie Smalls" />
                            </AvatarWrapper>

                            <AvatarWrapper size="large">
                                <AvatarContentImage imageUrl="/avatar-6.jpg" tooltipText="Tupac Shakur" />
                            </AvatarWrapper>
                            <AvatarWrapper size="large">
                                <AvatarContentNumber number="3" />
                            </AvatarWrapper>
                        </AvatarGroup>

                        // Stacked with large gap -- small avatars
                        <AvatarGroup gap='large'>
                            <AvatarWrapper size="x-small">
                                <AvatarContentImage imageUrl="/avatar-2.jpg" tooltipText="Jeffrey Lebowski" />
                                <AvatarContentIcon type="text" />
                            </AvatarWrapper>

                            <AvatarWrapper size="x-small">
                                <AvatarContentText text="JD" tooltipText="John Doe" />
                                <AvatarContentIcon type="video" />
                            </AvatarWrapper>

                            <AvatarWrapper size="x-small">
                                <AvatarContentImage imageUrl="/avatar-4.jpg" tooltipText="Debbie Harry" />
                                <AvatarContentIcon status='in-progress' type="audio" />
                            </AvatarWrapper>
                            
                            <AvatarWrapper size="x-small">
                                <AvatarContentText text="WS" tooltipText="Walter Sobchak" />
                                <AvatarContentIcon status='done' type="photo" />
                            </AvatarWrapper>

                            <AvatarWrapper size="x-small">
                                <AvatarContentImage imageUrl="/avatar-6.jpg" tooltipText="Tupac Shakur" />
                                <AvatarContentIcon status='done' type="text" />
                            </AvatarWrapper>
                            <AvatarWrapper size="x-small">
                                <AvatarContentNumber number="3" />
                            </AvatarWrapper>
                        </AvatarGroup>

                        // Grid
                        <AvatarGroup appearance='grid' className='sd-width--xx-small'>
                            <AvatarWrapper size="large">
                                <AvatarContentImage imageUrl="/avatar-2.jpg" tooltipText="Jeffrey Lebowski" />
                            </AvatarWrapper>

                            <AvatarWrapper size="large">
                                <AvatarContentImage imageUrl="/avatar-3.jpg" tooltipText="Jean Jacques Burnel" />
                            </AvatarWrapper>

                            <AvatarWrapper size="large">
                                <AvatarContentImage imageUrl="/avatar-4.jpg" tooltipText="Debbie Harry" />
                            </AvatarWrapper>
                            
                            <AvatarWrapper size="large">
                                <AvatarContentImage imageUrl="/avatar.jpg" tooltipText="Biggie Smalls" />
                            </AvatarWrapper>

                            <AvatarWrapper size="large">
                                <AvatarContentImage imageUrl="/avatar-5.jpg" tooltipText="Biggie Smalls" />
                            </AvatarWrapper>

                            <AvatarWrapper size="large">
                                <AvatarContentImage tooltipText="John Doe" />
                            </AvatarWrapper>

                            <AvatarWrapper size="large">
                                <AvatarContentImage imageUrl="/avatar-2.jpg" tooltipText="Jeffrey Lebowski" />
                            </AvatarWrapper>

                            <AvatarWrapper size="large">
                                <AvatarContentText text="DD" tooltipText="Andre Romelle Young" />
                            </AvatarWrapper>

                            <AvatarWrapper size="large">
                                <AvatarContentImage imageUrl="/avatar-4.jpg" tooltipText="Debbie Harry" />
                            </AvatarWrapper>

                            <AvatarWrapper size="large">
                                <AvatarContentImage imageUrl="/avatar-6.jpg" tooltipText="Tupac Shakur" />
                            </AvatarWrapper>
                        </AvatarGroup>
                    `}
                    </Markup.ReactMarkupCode>
                </Markup.ReactMarkup>

                <h3 className="docs-page__h3">Avatar props</h3>
                <p className="docs-page__paragraph">AvatarWrapper</p>
                <PropsList>
                    <Prop name='size' isRequired={false} type='small | medium | large | x-large | xx-large' default='medium' description='Display size of the Avatar.'/>
                    <Prop name='statusIndicator' isRequired={false} type='group' default='/' description='Optional prop group to display the status of the user.'/>
                    <Prop name='statusIndicator status' isRequired={true} type='online | offline' default='/' description='Indicates if the user is online or offline'/>
                    <Prop name='statusIndicator tooltipText' isRequired={false} type='string' default='/' description='Optional tooltip value for the status indicator.'/>
                    <Prop name='administratorIndicator' isRequired={false} type='group' default='/' description='Optional prop group to display that the user is an administrator.'/>
                    <Prop name='administratorIndicator enabled' isRequired={true} type='boolean' default='/' description='Indicates that the user is an admistrator if set to true.'/>
                    <Prop name='administratorIndicator tooltipText' isRequired={false} type='string' default='/' description='Optional tooltip value for the administrator indicator.'/>
                </PropsList>

                <p className="docs-page__paragraph">AvatarContentText</p>
                <PropsList>
                    <Prop name='text' isRequired={true} type='string' default='/' description='Visible text value of the avatar, limited to 3 charactes.'/>
                    <Prop name='tooltipText' isRequired={false} type='string' default='/' description='Tooltip value, displayed on hover.'/>
                </PropsList>

                <p className="docs-page__paragraph">AvatarContentImage</p>
                <PropsList>
                    <Prop name='imageUrl' isRequired={true} type='string' default='/' description='URL of the avatar image. A placeholder image will be displayed if not set.'/>
                    <Prop name='tooltipText' isRequired={false} type='string' default='/' description='Tooltip value, displayed on hover.'/>
                </PropsList>
                <h3 className="docs-page__h3">AvatarGroup</h3>
                <PropsList>
                    <Prop name='appearance' isRequired={false} type='stacked | grid' default='stacked' description='Appearance of the Avatar group. Stacked displays the Avatars in an horizontal list, with slightly overlapped avatars.'/>
                    <Prop name='borderColor' isRequired={false} type='000 | 050 | 100 | 150 | 200' default='000' description='Border color for stacked avatars. Should be matched with the parent background colour.'/>
                    <Prop name='className' isRequired={false} type='online | offline' default='/' description='Add helper classes for margins, paddings etc.'/>
                </PropsList>
            </section>
        );
    }
}
