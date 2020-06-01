import * as React from 'react';
import * as Markup from '../../js/react';
import { SubNav } from '../../../app-typescript';
import { Dropdown } from '../../../app-typescript';

export default class DropdownDoc extends React.Component {
    render() {
        return (
            <React.Fragment>
                <section className="docs-page__container">
                    <h2 className="docs-page__h2">Dropdown</h2>
                    <Markup.ReactMarkupCodePreview>{`
                    <Dropdown
                        items={[
                            { label: 'Action 1', onSelect: () => 1 },
                            { label: 'Action 2', onSelect: () => 1 },
                            { label: 'Action 3', onSelect: () => 1 },
                        ]}>
                       Toogle button
                    </Dropdown>
                    
                `}
                    </Markup.ReactMarkupCodePreview>
                    <p className='docs-page__paragraph'>The basic Dropdown is composed of a wrapping Dropdown and inner DropdownItem.</p>
                    <Markup.ReactMarkup>
                        <Markup.ReactMarkupPreview>
                            <Dropdown
                                items={[
                                    { label: 'Action 1', onSelect: () => 1 },
                                    { label: 'Action 2', onSelect: () => 1 },
                                    { label: 'Action 3', onSelect: () => 1 },
                                ]}>
                                Left aligned (default)
                            </Dropdown>
                            <Dropdown
                                align='right'
                                items={[
                                    { label: 'Action 1', onSelect: () => 1 },
                                    { label: 'Action 2', onSelect: () => 1 },
                                    { label: 'Action 3', onSelect: () => 1 },
                                ]}>
                                Right aligned
                            </Dropdown>
                        </Markup.ReactMarkupPreview>
                        <Markup.ReactMarkupCode>{`
                        <Dropdown
                            items={[
                                { label: 'Action 1', onSelect: () => 1 },
                                { label: 'Action 2', onSelect: () => 1 },
                                { label: 'Action 3', onSelect: () => 1 },
                            ]}>
                            Left aligned (default)
                        </Dropdown>
                        <Dropdown
                            align='right'
                            items={[
                                { label: 'Action 1', onSelect: () => 1 },
                                { label: 'Action 2', onSelect: () => 1 },
                                { label: 'Action 3', onSelect: () => 1 },
                            ]}>
                            Right aligned
                        </Dropdown>
                    `}
                        </Markup.ReactMarkupCode>
                    </Markup.ReactMarkup>

                    <p className='docs-page__paragraph'>The basic Dropdown is composed of a wrapping Dropdown and inner DropdownItem.</p>
                    <Markup.ReactMarkup>
                        <Markup.ReactMarkupPreview>
                            <Dropdown
                                items={[
                                    { label: 'Action 1', onSelect: () => 1 },
                                    { label: 'Action 2', onSelect: () => 1 },
                                    { label: 'Action 3', onSelect: () => 1 },
                                ]}>
                                Left aligned (default)
                            </Dropdown>
                            <Dropdown
                                align='right'
                                items={[
                                    { label: 'Action 1', onSelect: () => 1 },
                                    { label: 'Action 2', onSelect: () => 1 },
                                    { label: 'Action 3', onSelect: () => 1 },
                                ]}>
                                Right aligned
                            </Dropdown>
                        </Markup.ReactMarkupPreview>
                        <Markup.ReactMarkupCode>{`
                        <Dropdown
                            items={[
                                { label: 'Action 1', onSelect: () => 1 },
                                { label: 'Action 2', onSelect: () => 1 },
                                { label: 'Action 3', onSelect: () => 1 },
                            ]}>
                            Left aligned (default)
                        </Dropdown>
                        <Dropdown
                            align='right'
                            items={[
                                { label: 'Action 1', onSelect: () => 1 },
                                { label: 'Action 2', onSelect: () => 1 },
                                { label: 'Action 3', onSelect: () => 1 },
                            ]}>
                            Right aligned
                        </Dropdown>
                    `}
                        </Markup.ReactMarkupCode>
                    </Markup.ReactMarkup>

                    <h3 className="docs-page__h3">Dropdown Append To Body</h3>
                    <p className='docs-page__paragraph'>This is useful when the dropdown button is inside a div with overflow: hidden, and the menu would otherwise be hidden.</p>
                    <Markup.ReactMarkup>
                        <Markup.ReactMarkupPreview>
                            <Dropdown
                                append={true}
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
                                        type: 'group', label: 'actions 2', items: [
                                            { label: 'Download', icon: 'download', onSelect: () => 1 },
                                            { label: 'Print', icon: 'print', onSelect: () => 1 },
                                        ]
                                    }
                                ]}>
                                Drop append to body
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

                    <h3 className="docs-page__h3">Multilevel dropdown</h3>
                    <p className='docs-page__paragraph'></p>
                    <Markup.ReactMarkup>
                        <Markup.ReactMarkupPreview>
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
                                    }]}>
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
                                    }]}>
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
                                }]}>
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
                                }]}>
                            Submenu on the left
                        </Dropdown>    
                    `}
                        </Markup.ReactMarkupCode>
                    </Markup.ReactMarkup>

                    <h3 className="docs-page__h3">Navigation dropdown</h3>
                    <p className='docs-page__paragraph'>Example of a dropdown inside a subnavigation element. The dropdown has additional modifiers to align the menu to the right of the toggle and to open the submenu on the left.</p>
                    <Markup.ReactMarkup>
                        <Markup.ReactMarkupPreview>
                            <SubNav zIndex={1} color='darker'>
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
                                        }]}>
                                    <button className='navbtn'>
                                        <i className="icon-dots-vertical"></i>
                                    </button>
                                </Dropdown>
                            </SubNav>
                        </Markup.ReactMarkupPreview>
                        <Markup.ReactMarkupCode>{`
                        <SubNav zIndex={1} color='darker'>
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
                                    }]}>
                                <button className='navbtn'>
                                    <i className="icon-dots-vertical"></i>
                                </button>
                            </Dropdown>
                        </SubNav>
                    `}
                        </Markup.ReactMarkupCode>
                    </Markup.ReactMarkup>

                    <h3 className="docs-page__h3">Navigation dropdown with fixed header and footer</h3>
                    <p className='docs-page__paragraph'>Example of a dropdown inside a subnavigation element. The dropdown has additional modifiers to align the menu to the right of the toggle and to open the submenu on the left.</p>
                    <Markup.ReactMarkup>
                        <Markup.ReactMarkupPreview>
                            <SubNav zIndex={1} color='darker'>
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
                                    ]}>
                                    <button className='navbtn'>
                                        <i className="icon-dots-vertical"></i>
                                    </button>
                                </Dropdown>
                            </SubNav>
                        </Markup.ReactMarkupPreview>
                        <Markup.ReactMarkupCode>{`
                        <SubNav zIndex={1} color='darker'>
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
                                ]}>
                                <button className='navbtn'>
                                    <i className="icon-dots-vertical"></i>
                                </button>
                            </Dropdown>
                        </SubNav>
                    `}
                        </Markup.ReactMarkupCode>
                    </Markup.ReactMarkup>
                </section>
            </React.Fragment>
        )
    }
}
