import * as React from 'react';
import * as Markup from '../../js/react';
import { SubNav, Dropdown, Prop, PropsList } from '../../../app-typescript';

export default class DropdownDoc extends React.Component {
    render() {
        return (
            <section className="docs-page__container">
                <h2 className="docs-page__h2">Dropdown</h2>
                <Markup.ReactMarkupCodePreview>{`
                    <Dropdown
                        items={[
                            { label: 'Action 1', onSelect: () => 1 },
                            { label: 'Action 2', onSelect: () => 1 },
                            { label: 'Action 3', onSelect: () => 1 },
                        ]}
                    >
                       Toggle button
                    </Dropdown>
                `}
                </Markup.ReactMarkupCodePreview>
                <p className='docs-page__paragraph'>By default dropdown menu is positioned left comparing to dropdown toggle button element. For right positioned menu (second example) add prop value <code>align = 'right'</code></p>
                <Markup.ReactMarkup>
                    <Markup.ReactMarkupPreview>
                        <Dropdown
                            items={[
                                { label: 'Action 1', onSelect: () => 1 },
                                { label: 'Action 2', onSelect: () => 1 },
                                { label: 'Action 3', onSelect: () => 1 },
                            ]}
                        >
                            Left aligned (default)
                        </Dropdown>
                        <Dropdown
                            align='right'
                            items={[
                                { label: 'Action 1', onSelect: () => 1 },
                                { label: 'Action 2', onSelect: () => 1 },
                                { label: 'Action 3', onSelect: () => 1 },
                            ]}
                        >
                            Right aligned
                        </Dropdown>

                    </Markup.ReactMarkupPreview>
                    <Markup.ReactMarkupCode>{`
                        <Dropdown
                            items={[
                                { label: 'Action 1', onSelect: () => 1 },
                                { label: 'Action 2', onSelect: () => 1 },
                                { label: 'Action 3', onSelect: () => 1 },
                            ]}
                        >
                            Left aligned (default)
                        </Dropdown>
                        <Dropdown
                            align='right'
                            items={[
                                { label: 'Action 1', onSelect: () => 1 },
                                { label: 'Action 2', onSelect: () => 1 },
                                { label: 'Action 3', onSelect: () => 1 },
                            ]}
                        >
                            Right aligned
                        </Dropdown>
                    `}
                    </Markup.ReactMarkupCode>
                </Markup.ReactMarkup>

                <h3 className="docs-page__h3">Multilevel dropdown</h3>
                <p className='docs-page__paragraph'>To create a second level in the dropdown menu add item with props <code>type = 'submenu'</code> and <code>item</code>.
                The submenu opens by default on the right side of the parent menu.</p>
                <Markup.ReactMarkup>
                    <Markup.ReactMarkupPreview>
                        <Dropdown
                            items={[
                                {
                                    type: 'group',
                                    label: 'Create new',
                                    items: [
                                        {
                                            type: 'submenu',
                                            label: 'Rundown',
                                            icon: 'plus-sign',
                                            items: [
                                                {
                                                    type: 'submenu',
                                                    label: 'Show 1',
                                                    icon: 'plus-sign',
                                                    items: [
                                                        {
                                                            type: 'submenu',
                                                            label: 'Show 3',
                                                            icon: 'plus-sign',
                                                            items: []
                                                        }
                                                    ],
                                                },
                                                {
                                                    type: 'submenu',
                                                    label: 'Show 2',
                                                    icon: 'plus-sign',

                                                    items: [
                                                        {
                                                            type: 'submenu',
                                                            label: 'Show 4',
                                                            icon: 'plus-sign',
                                                            items: [
                                                                {
                                                                    type: 'submenu',
                                                                    label: 'Show 5',
                                                                    icon: 'plus-sign',
                                                                    items: []
                                                                }
                                                            ],
                                                        },
                                                    ],
                                                },
                                            ],
                                        },
                                    ],
                                },
                                {
                                    type: 'group', label: 'actions', items: [
                                        'divider',
                                        { label: 'Edit', icon: 'pencil', onSelect: () => 1 },
                                        { label: 'Copy', icon: 'copy', onSelect: () => 1 },
                                        { label: 'Delete', icon: 'trash', onSelect: () => 1 },
                                        'divider',
                                    ]
                                },
                                {
                                    type: 'submenu', label: 'Second level actions', icon: 'star', items: [
                                        { label: 'Action 1', onSelect: () => 1 },
                                        { label: 'Action 2', onSelect: () => 1 },
                                        { label: 'Action 3', onSelect: () => 1 },
                                        { label: 'Action 4', onSelect: () => 1 },
                                    ]
                                }
                            ]}
                        >
                            Multilevel dropdown
                        </Dropdown>
                        <Dropdown
                            items={[
                                {
                                    type: 'group', label: 'actions', items: [
                                        'divider',
                                        { label: 'Edit', icon: 'pencil', onSelect: () => 1 },
                                        { label: 'Copy', icon: 'copy', onSelect: () => 1 },
                                        { label: 'Delete', icon: 'trash', onSelect: () => 1 },
                                        'divider',
                                    ]
                                },
                                {
                                    type: 'submenu', label: 'Second level actions', icon: 'star', items: [
                                        { label: 'Action 1', onSelect: () => 1 },
                                        { label: 'Action 2', onSelect: () => 1 },
                                        { label: 'Action 3', onSelect: () => 1 },
                                        { label: 'Action 4', onSelect: () => 1 },
                                    ]
                                }
                            ]}
                        >
                            Submenu on the left
                        </Dropdown>
                    </Markup.ReactMarkupPreview>
                    <Markup.ReactMarkupCode>{`
                        <Dropdown
                            items={[
                                {
                                    type: 'group', label: 'actions', items: [
                                        'divider',
                                        { label: 'Edit', icon: 'pencil', onSelect: () => 1 },
                                        { label: 'Copy', icon: 'copy', onSelect: () => 1 },
                                        { label: 'Delete', icon: 'trash', onSelect: () => 1 },
                                        'divider',
                                    ]
                                },
                                {
                                    type: 'submenu', label: 'Second level actions', icon: 'star', items: [
                                        { label: 'Action 1', onSelect: () => 1 },
                                        { label: 'Action 2', onSelect: () => 1 },
                                        { label: 'Action 3', onSelect: () => 1 },
                                        { label: 'Action 4', onSelect: () => 1 },
                                    ]
                                }
                            ]}
                        >
                            Multilevel dropdown
                        </Dropdown>
                        <Dropdown
                            items={[
                                {
                                    type: 'group', label: 'actions', items: [
                                        'divider',
                                        { label: 'Edit', icon: 'pencil', onSelect: () => 1 },
                                        { label: 'Copy', icon: 'copy', onSelect: () => 1 },
                                        { label: 'Delete', icon: 'trash', onSelect: () => 1 },
                                        'divider',
                                    ]
                                },
                                {
                                    type: 'submenu', label: 'Second level actions', icon: 'star', items: [
                                        { label: 'Action 1', onSelect: () => 1 },
                                        { label: 'Action 2', onSelect: () => 1 },
                                        { label: 'Action 3', onSelect: () => 1 },
                                        { label: 'Action 4', onSelect: () => 1 },
                                    ]
                                }
                            ]}
                        >
                            Submenu on the left
                        </Dropdown>
                    `}
                    </Markup.ReactMarkupCode>
                </Markup.ReactMarkup>

                <h3 className="docs-page__h3">Dropdown with scrolling content</h3>
                <Markup.ReactMarkup>
                    <Markup.ReactMarkupPreview>
                    <Dropdown
                        header={[
                            {
                                type: 'group',
                                label: 'Create new',
                                items: [
                                    {
                                        type: 'submenu',
                                        label: 'Rundown',
                                        icon: 'plus-sign',
                                        items: [
                                            {
                                                type: 'submenu',
                                                label: 'Show 1',
                                                icon: 'plus-sign',
                                                items: [
                                                    {
                                                        type: 'submenu',
                                                        label: 'Show 2',
                                                        icon: 'plus-sign',
                                                        items: []
                                                    }
                                                ],
                                            },
                                            {
                                                type: 'submenu',
                                                label: 'Show 1',
                                                icon: 'plus-sign',

                                                items: [

                                                ],
                                            },
                                        ],
                                    },
                                ],
                            },
                        ]}
                        items={[
                            {
                                type: 'group',
                                label: 'Create new',
                                items: [
                                    {
                                        type: 'submenu',
                                        label: 'Rundown',
                                        icon: 'plus-sign',

                                        items: [
                                            {
                                                type: 'submenu',
                                                label: 'Show 1',
                                                icon: 'plus-sign',
                                                items: [

                                                ],
                                            },
                                            {
                                                type: 'submenu',
                                                label: 'Show 2',
                                                icon: 'plus-sign',
                                                items: [

                                                ],
                                            },
                                        ],
                                    },
                                    {
                                        type: 'submenu',
                                        label: 'Rundown',
                                        icon: 'plus-sign',

                                        items: [
                                            {
                                                type: 'submenu',
                                                label: 'Show 1',
                                                icon: 'plus-sign',
                                                items: [

                                                ],
                                            },
                                            {
                                                type: 'submenu',
                                                label: 'Show 2',
                                                icon: 'plus-sign',
                                                items: [

                                                ],
                                            },
                                        ],
                                    },
                                    {
                                        type: 'submenu',
                                        label: 'Rundown',
                                        icon: 'plus-sign',

                                        items: [
                                            {
                                                type: 'submenu',
                                                label: 'Show 1',
                                                icon: 'plus-sign',
                                                items: [

                                                ],
                                            },
                                            {
                                                type: 'submenu',
                                                label: 'Show 2',
                                                icon: 'plus-sign',
                                                items: [

                                                ],
                                            },
                                        ],
                                    },
                                    {
                                        type: 'submenu',
                                        label: 'Rundown',
                                        icon: 'plus-sign',

                                        items: [
                                            {
                                                type: 'submenu',
                                                label: 'Show 1',
                                                icon: 'plus-sign',
                                                items: [

                                                ],
                                            },
                                            {
                                                type: 'submenu',
                                                label: 'Show 2',
                                                icon: 'plus-sign',
                                                items: [

                                                ],
                                            },
                                        ],
                                    },
                                    {
                                        type: 'submenu',
                                        label: 'Rundown',
                                        icon: 'plus-sign',

                                        items: [
                                            {
                                                type: 'submenu',
                                                label: 'Show 1',
                                                icon: 'plus-sign',
                                                items: [

                                                ],
                                            },
                                            {
                                                type: 'submenu',
                                                label: 'Show 2',
                                                icon: 'plus-sign',
                                                items: [

                                                ],
                                            },
                                        ],
                                    },
                                    {
                                        type: 'submenu',
                                        label: 'Rundown',
                                        icon: 'plus-sign',

                                        items: [
                                            {
                                                type: 'submenu',
                                                label: 'Show 1',
                                                icon: 'plus-sign',
                                                items: [

                                                ],
                                            },
                                            {
                                                type: 'submenu',
                                                label: 'Show 2',
                                                icon: 'plus-sign',
                                                items: [

                                                ],
                                            },
                                        ],
                                    },
                                    {
                                        type: 'submenu',
                                        label: 'Rundown',
                                        icon: 'plus-sign',

                                        items: [
                                            {
                                                type: 'submenu',
                                                label: 'Show 1',
                                                icon: 'plus-sign',
                                                items: [

                                                ],
                                            },
                                            {
                                                type: 'submenu',
                                                label: 'Show 2',
                                                icon: 'plus-sign',
                                                items: [

                                                ],
                                            },
                                        ],
                                    },
                                    {
                                        type: 'submenu',
                                        label: 'Rundown',
                                        icon: 'plus-sign',

                                        items: [
                                            {
                                                type: 'submenu',
                                                label: 'Show 1',
                                                icon: 'plus-sign',
                                                items: [

                                                ],
                                            },
                                            {
                                                type: 'submenu',
                                                label: 'Show 2',
                                                icon: 'plus-sign',
                                                items: [

                                                ],
                                            },
                                        ],
                                    },
                                    {
                                        type: 'submenu',
                                        label: 'Rundown',
                                        icon: 'plus-sign',

                                        items: [
                                            {
                                                type: 'submenu',
                                                label: 'Show 1',
                                                icon: 'plus-sign',
                                                items: [

                                                ],
                                            },
                                            {
                                                type: 'submenu',
                                                label: 'Show 2',
                                                icon: 'plus-sign',
                                                items: [

                                                ],
                                            },
                                        ],
                                    },
                                    {
                                        type: 'submenu',
                                        label: 'Rundown',
                                        icon: 'plus-sign',

                                        items: [
                                            {
                                                type: 'submenu',
                                                label: 'Show 1',
                                                icon: 'plus-sign',
                                                items: [

                                                ],
                                            },
                                            {
                                                type: 'submenu',
                                                label: 'Show 2',
                                                icon: 'plus-sign',
                                                items: [

                                                ],
                                            },
                                        ],
                                    },
                                    {
                                        type: 'submenu',
                                        label: 'Rundown',
                                        icon: 'plus-sign',

                                        items: [
                                            {
                                                type: 'submenu',
                                                label: 'Show 1',
                                                icon: 'plus-sign',
                                                items: [

                                                ],
                                            },
                                            {
                                                type: 'submenu',
                                                label: 'Show 2',
                                                icon: 'plus-sign',
                                                items: [

                                                ],
                                            },
                                        ],
                                    },
                                    {
                                        type: 'submenu',
                                        label: 'Rundown',
                                        icon: 'plus-sign',

                                        items: [
                                            {
                                                type: 'submenu',
                                                label: 'Show 1',
                                                icon: 'plus-sign',
                                                items: [

                                                ],
                                            },
                                            {
                                                type: 'submenu',
                                                label: 'Show 2',
                                                icon: 'plus-sign',
                                                items: [

                                                ],
                                            },
                                        ],
                                    },
                                    {
                                        type: 'submenu',
                                        label: 'Rundown',
                                        icon: 'plus-sign',

                                        items: [
                                            {
                                                type: 'submenu',
                                                label: 'Show 1',
                                                icon: 'plus-sign',
                                                items: [

                                                ],
                                            },
                                            {
                                                type: 'submenu',
                                                label: 'Show 2',
                                                icon: 'plus-sign',
                                                items: [

                                                ],
                                            },
                                        ],
                                    },
                                    {
                                        type: 'submenu',
                                        label: 'Rundown',
                                        icon: 'plus-sign',

                                        items: [
                                            {
                                                type: 'submenu',
                                                label: 'Show 1',
                                                icon: 'plus-sign',

                                                items: [

                                                ],
                                            },
                                            {
                                                type: 'submenu',
                                                label: 'Show 2',
                                                icon: 'plus-sign',
                                                items: [

                                                ],
                                            },
                                        ],
                                    },
                                    {
                                        type: 'submenu',
                                        label: 'Rundown',
                                        icon: 'plus-sign',

                                        items: [
                                            {
                                                type: 'submenu',
                                                label: 'Show 1',
                                                icon: 'plus-sign',
                                                items: [

                                                ],
                                            },
                                            {
                                                type: 'submenu',
                                                label: 'Show 2',
                                                icon: 'plus-sign',
                                                items: [

                                                ],
                                            },
                                        ],
                                    },
                                ],
                            },
                        ]}
                        footer={[
                            {
                                type: 'group',
                                items: [
                                    {
                                        icon: 'rundown',
                                        label: 'Create new Show',
                                        onSelect: () => false,
                                    },
                                ],
                            },
                            {
                                type: 'group',
                                label: 'Create new',
                                items: [
                                    {
                                        type: 'submenu',
                                        label: 'Rundown',
                                        icon: 'plus-sign',
                                        items: [
                                            {
                                                type: 'submenu',
                                                label: 'Show 1',
                                                icon: 'plus-sign',
                                                items: [

                                                ],
                                            },
                                            {
                                                type: 'submenu',
                                                label: 'Show 2',
                                                icon: 'plus-sign',
                                                items: [

                                                ],
                                            },
                                        ],
                                    },
                                ],
                            },
                        ]}
                    >
                        Dropdown with scrolling content
                    </Dropdown>
                    </Markup.ReactMarkupPreview>
                    <Markup.ReactMarkupCode>{`
                        <Dropdown
                            items={[
                                { label: 'Action 1', onSelect: () => 1 },
                                { label: 'Action 2', onSelect: () => 1 },
                                { label: 'Action 3', onSelect: () => 1 },
                                { label: 'Action 4', onSelect: () => 1 },
                                { label: 'Action 5', onSelect: () => 1 },
                                { label: 'Action 6', onSelect: () => 1 },
                            ]}>
                            Drop append to body
                        </Dropdown>
                    `}
                    </Markup.ReactMarkupCode>
                </Markup.ReactMarkup>

                <h3 className="docs-page__h3">Navigation dropdown</h3>
                <p className='docs-page__paragraph'>Example of a dropdown inside a subnavigation element.</p>
                <Markup.ReactMarkup>
                    <Markup.ReactMarkupPreview>
                        <SubNav color='darker'>
                            <h3 className="subnav__page-title">Subnav title</h3>
                            <Dropdown
                                header={[
                                    {
                                        type: 'group', label: 'actions', items: [
                                            'divider',
                                            { label: 'Edit', icon: 'pencil', onSelect: () => 1 },
                                            { label: 'Copy', icon: 'copy', onSelect: () => 1 },
                                            { label: 'Delete', icon: 'trash', onSelect: () => 1 },
                                            'divider',
                                        ]
                                    },
                                    {
                                        type: 'submenu', label: 'Second level actions', icon: 'star', items: [
                                            { label: 'Action 1', onSelect: () => 1 },
                                            { label: 'Action 2', onSelect: () => 1 },
                                            { label: 'Action 3', onSelect: () => 1 },
                                            { label: 'Action 4', onSelect: () => 1 },
                                        ]
                                    }
                                ]}
                                items={[
                                    {
                                        type: 'group', label: 'actions', items: [
                                            'divider',
                                            { label: 'Edit', icon: 'pencil', onSelect: () => 1 },
                                            { label: 'Copy', icon: 'copy', onSelect: () => 1 },
                                            { label: 'Delete', icon: 'trash', onSelect: () => 1 },
                                            'divider',
                                        ]
                                    },
                                    {
                                        type: 'submenu', label: 'Second level actions', icon: 'star', items: [
                                            { label: 'Action 1', onSelect: () => 1 },
                                            { label: 'Action 2', onSelect: () => 1 },
                                            { label: 'Action 3', onSelect: () => 1 },
                                            { label: 'Action 4', onSelect: () => 1 },
                                        ]
                                    }
                                ]}
                                footer={[

                                    {
                                        type: 'submenu', label: 'Second level actions', icon: 'star', items: [
                                            { label: 'Action 1', onSelect: () => 1 },
                                            { label: 'Action 2', onSelect: () => 1 },
                                            { label: 'Action 3', onSelect: () => 1 },
                                            { label: 'Action 4', onSelect: () => 1 },
                                        ]
                                    }
                                ]}
                            >
                                <button className='sd-navbtn'>
                                    <i className="icon-dots-vertical"></i>
                                </button>
                            </Dropdown>
                        </SubNav>
                    </Markup.ReactMarkupPreview>
                    <Markup.ReactMarkupCode>{`
                        <SubNav color='darker'>
                            <h3 className="subnav__page-title">Subnav title</h3>
                            <Dropdown
                                items={[
                                    {
                                        type: 'group', label: 'actions', items: [
                                            'divider',
                                            { label: 'Edit', icon: 'pencil', onSelect: () => 1 },
                                            { label: 'Copy', icon: 'copy', onSelect: () => 1 },
                                            { label: 'Delete', icon: 'trash', onSelect: () => 1 },
                                            'divider',
                                        ]
                                    },
                                    {
                                        type: 'submenu', label: 'Second level actions', icon: 'star', items: [
                                            { label: 'Action 1', onSelect: () => 1 },
                                            { label: 'Action 2', onSelect: () => 1 },
                                            { label: 'Action 3', onSelect: () => 1 },
                                            { label: 'Action 4', onSelect: () => 1 },
                                        ]
                                    }
                                ]}
                            >
                                <button className='sd-navbtn'>
                                    <i className="icon-dots-vertical"></i>
                                </button>
                            </Dropdown>
                        </SubNav>
                    `}
                    </Markup.ReactMarkupCode>
                </Markup.ReactMarkup>

                <h3 className="docs-page__h3">Navigation dropdown with fixed header and footer</h3>
                <p className='docs-page__paragraph'></p>
                <Markup.ReactMarkup>
                    <Markup.ReactMarkupPreview>
                        <SubNav color='darker'>
                            <h3 className="subnav__page-title">Subnav title</h3>
                            <Dropdown
                                header={[
                                    {
                                        type: 'group',
                                        label: 'Create new',
                                        items: [
                                            {
                                                type: 'submenu',
                                                label: 'Rundown',
                                                icon: 'plus-sign',
                                                items: [
                                                    {
                                                        type: 'submenu',
                                                        label: 'Show 1',
                                                        icon: 'plus-sign',
                                                        items: [
                                                            {
                                                                type: 'submenu',
                                                                label: 'Show 3',
                                                                items:[]
                                                            }
                                                        ],
                                                    },
                                                    {
                                                        type: 'submenu',
                                                        label: 'Show 2',
                                                        icon: 'plus-sign',
                                                        items: [

                                                        ],
                                                    },
                                                ],
                                            },
                                        ],
                                    },
                                ]}
                                items={[
                                    {
                                        type: 'group', label: 'body actions', items: [
                                            {
                                                type: 'group',
                                                label: 'Create new',
                                                items: [
                                                    {
                                                        type: 'submenu',
                                                        label: 'Rundown',
                                                        icon: 'plus-sign',
                                                        items: [
                                                            {
                                                                type: 'submenu',
                                                                label: 'Show 1',
                                                                icon: 'plus-sign',
                                                                items: [

                                                                ],
                                                            },
                                                            {
                                                                type: 'submenu',
                                                                label: 'Show 2',
                                                                icon: 'plus-sign',
                                                                items: [

                                                                ],
                                                            },
                                                        ],
                                                    },
                                                ],
                                            },
                                        ]
                                    },
                                ]}
                                footer={[
                                    {
                                        type: 'group',
                                        label: 'Create new',
                                        items: [
                                            {
                                                type: 'submenu',
                                                label: 'Rundown',
                                                icon: 'plus-sign',
                                                items: [
                                                    {
                                                        type: 'submenu',
                                                        label: 'Show 1',
                                                        icon: 'plus-sign',
                                                        items: [

                                                        ],
                                                    },
                                                    {
                                                        type: 'submenu',
                                                        label: 'Show 2',
                                                        icon: 'plus-sign',
                                                        items: [

                                                        ],
                                                    },
                                                ],
                                            },
                                        ],
                                    },
                                ]}
                            >
                                <button className='sd-navbtn'>
                                    <i className="icon-dots-vertical"></i>
                                </button>
                            </Dropdown>
                        </SubNav>
                    </Markup.ReactMarkupPreview>
                    <Markup.ReactMarkupCode>{`
                        <SubNav color='darker'>
                            <h3 className="subnav__page-title">Subnav title</h3>
                            <Dropdown
                                header={[
                                    {
                                        type: 'group', label: 'header actions', items: [
                                            { label: 'Header action one', icon: 'download', onSelect: () => 1 },
                                            { label: 'Header action two', icon: 'trash', onSelect: () => 1 },
                                        ]
                                    },
                                ]}
                                items={[
                                    {
                                        type: 'group', label: 'body actions', items: [
                                            { label: 'Edit', icon: 'pencil', onSelect: () => 1 },
                                            { label: 'Copy', icon: 'copy', onSelect: () => 1 },
                                            { label: 'Action 2', icon: 'envelope', onSelect: () => 1 },
                                            { label: 'Action 3', icon: 'heart', onSelect: () => 1 },
                                            { label: 'Action 4', icon: 'print', onSelect: () => 1 },
                                            { label: 'Action 5', icon: 'plus-sign', onSelect: () => 1 },
                                            { label: 'Action 6', icon: 'minus-sign', onSelect: () => 1 },
                                            { label: 'Action 7', icon: 'refresh', onSelect: () => 1 },
                                            { label: 'Action 8', icon: 'pick', onSelect: () => 1 },
                                            { label: 'Action 9', icon: 'bell', onSelect: () => 1 },
                                            { label: 'Action 10', icon: 'kill', onSelect: () => 1 },
                                            { label: 'Action 11', icon: 'settings', onSelect: () => 1 },
                                            { label: 'Action 12', icon: 'cut', onSelect: () => 1 },
                                        ]
                                    },
                                ]}
                                footer={[
                                    {
                                        type: 'group', label: 'footer actions', items: [
                                            { label: 'Create gallery', icon: 'slideshow', onSelect: () => 1 },
                                            { label: 'Create package', icon: 'composite', onSelect: () => 1 },
                                        ]
                                    },
                                ]}
                            >
                                <button className='sd-navbtn'>
                                    <i className="icon-dots-vertical"></i>
                                </button>
                            </Dropdown>
                        </SubNav>
                    `}
                    </Markup.ReactMarkupCode>
                </Markup.ReactMarkup>

                <h3 className="docs-page__h3">Props</h3>
                <PropsList>
                    <Prop name='label' isRequired={false} type='string' default='/' description='Text value of label.'/>
                    <Prop name='align' isRequired={false} type='left | right' default='left' description='Position of dropdown menu based on button'/>
                    <Prop name='items' isRequired={true} type='Array<menuitem | submenu | menugroup | "divider">' default='/' description='Items, divider, groups or submenu of dropdown menu'/>
                    <Prop name='children' isRequired={true} type='React.ReactNode' default='/' description='If children is "string" type than button have default style with arrow, also children can be custom styled buttons'/>
                </PropsList>

                <p className='docs-page__paragraph'>Items: Menu item</p>
                <PropsList>
                    <Prop name='label' isRequired={true} type='string' default='/' description='Text value of label.'/>
                    <Prop name='icon' isRequired={false} type='string' default='/' description='Icon class name without the icon- part.'/>
                    <Prop name='onSelect' isRequired={false} type='function' default='false' description='Callback fired when a item is select.'/>
                </PropsList>

                <p className='docs-page__paragraph'>Items: Menu group</p>
                <PropsList>
                    <Prop name='label' isRequired={false} type='string' default='/' description='Text value of label.'/>
                    <Prop name='type' isRequired={true} type='group' default='group' description='/'/>
                    <Prop name='items' isRequired={true} type='Array<menuitem | submenu | menugroup | "divider">' default='/' description='Items, divider, groups or submenu of group in dropdown menu'/>
                </PropsList>

                <p className='docs-page__paragraph'>Items: Submenu</p>
                <PropsList>
                    <Prop name='label' isRequired={true} type='string' default='/' description='Text value of label.'/>
                    <Prop name='icon' isRequired={false} type='string' default='/' description='Icon class name without the icon- part.'/>
                    <Prop name='type' isRequired={true} type='submenu' default='submenu' description='/'/>
                    <Prop name='items' isRequired={true} type='Array<menuitem | submenu | menugroup | "divider">' default='/' description='Items, divider, groups or submenu of submenu in dropdown menu'/>
                </PropsList>
            </section>
        )
    }
}
