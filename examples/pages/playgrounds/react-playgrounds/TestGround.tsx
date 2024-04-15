import * as React from 'react';
import * as Components from './components/Index';
import { Checkbox, RadioGroup, CheckboxButton, RadioButtonGroup, Button, Dropdown, Input, Label, Icon, IconButton, Badge, ThemeSelector, Container, IconLabel, Tooltip, Spinner, Divider, InputWrapper, InputNew, InputBase, Text, FormRowNew, ButtonGroup, Heading, SearchBar, Modal, BoxedList, BoxedListItem, TimePicker, DatePicker, TreeSelect, ContentDivider, Select, Option, AvatarGroup, SvgIconIllustration, IllustrationButton } from '../../../../app-typescript/index';
import { IAvatarInGroup } from '../../../../app-typescript/components/avatar/avatar-group';
import { FormLabel } from '../../../../app-typescript/components/Form/FormLabel';

interface IProps {
    children?: React.ReactNode;
}

interface IState {
    itemType: string;
    itemSelected1: boolean;
    itemSelected2: boolean;
    itemSelected3: boolean;
    value1?: string;
    value2?: string;
    value3?: string;
    value4?: string;
    value5?: string;
    value6?: string;
    selctedTheme: string;
    invalid: boolean;
    date: any;
    time: string;
    modalPlanningTemplates: boolean;
    modalSaveEvent: boolean;
    modalSaveEvent2: boolean;
    modalSaveEvent3: boolean;
    modalSaveEvent4: boolean;
    treeSelectValue: any;
    value: any;
    valueS2: any;
    thisTheme: string;
}

let options2 = [
    {
        value: {name: 'A long category Category1'},
    },
    {
        value: {name: 'Category2'},
    },
    {
        value: {name: 'Category3'},
    },
]

export class TestGround extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {
            itemType: 'itemtype01',
            itemSelected1: false,
            itemSelected2: false,
            itemSelected3: false,
            value1: undefined,
            value2: undefined,
            value3: undefined,
            value4: undefined,
            value5: undefined,
            value6: undefined,
            selctedTheme: 'light',
            invalid: false,
            date: new Date('2022-01-08'),
            time: '16:50',
            modalPlanningTemplates: false,
            modalSaveEvent: false,
            modalSaveEvent2: false,
            modalSaveEvent3: false,
            modalSaveEvent4: false,
            treeSelectValue: [],
            value: undefined,
            valueS2: undefined,
            thisTheme: 'light-ui',
        }
    }

    changeStatus(item: any, status: string) {
        if (item.status.includes(status)) {
            item.status.splice(item.status.indexOf(status), 1);
        } else {
            item.status.push(status);
        }
    }

    toggleTheme = () => {
        this.setState( {
            thisTheme: this.state.thisTheme === 'light-ui' ? 'dark-ui' : 'light-ui',
        });
      };

    render() {
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

        const modalSaveEventFooterOne=(
            <ButtonGroup align="end">
                <Button text='Cancel' onClick={() => this.setState({modalSaveEvent:false})} />
                <Button type='primary' text='Save' onClick={() => this.setState({modalSaveEvent:false})} />
            </ButtonGroup>
        );
        const modalSaveEventFooterTwo=(
            <ButtonGroup align="end">
                <Button text='Cancel' onClick={() => this.setState({modalSaveEvent2:false})} />
                <Button type='primary' text='Save' onClick={() => this.setState({modalSaveEvent2:false})} />
            </ButtonGroup>
        );
        const modalSaveEventFooterThree=(
            <ButtonGroup align="end">
                <Button text='Cancel' onClick={() => this.setState({modalSaveEvent3:false})} />
                <Button type='primary' text='Save' onClick={() => this.setState({modalSaveEvent3:false})} />
            </ButtonGroup>
        );
        return (
            <Components.Layout header='Testing Ground' theme={this.state.thisTheme}>
                <Components.LayoutContainer>
                    <Components.MainPanel>

                        <ButtonGroup align='end'>
                            <IconButton icon="adjust" ariaValue="Toggle theme" onClick={this.toggleTheme} toolTipFlow='left' />
                        </ButtonGroup>

                        <div className='sd-grid-list sd-grid-list--xx-small sd-grid-list--gap-s sd-grid-list--no-margin' style={{width:'290px'}}>
                            
                            <IllustrationButton text='Headlines' onClick={()=> false}>
                                <SvgIconIllustration illustration='headlines' />
                            </IllustrationButton>

                            <IllustrationButton text='Keywords' onClick={()=> false}>
                                <SvgIconIllustration illustration='keywords' />
                            </IllustrationButton>

                            <IllustrationButton text='Optimise' onClick={()=> false}>
                                <SvgIconIllustration illustration='optimise' />
                            </IllustrationButton>

                            <IllustrationButton text='Summary' onClick={()=> false}>
                                <SvgIconIllustration illustration='summary' />
                            </IllustrationButton>

                            <IllustrationButton text='Translate' onClick={()=> false}>
                                <SvgIconIllustration illustration='translate' />
                            </IllustrationButton>

                        </div>

                        <hr />

                        <Heading type='h3'>Below is an example structure of the content inside the 'Headlines' AI Assistant section</Heading>
                        <Text size="small" weight="light">Note: The surrounding div with inline styles is only there for the purpose of this demo. </Text>

                        <div className='' style={{width:'290px', marginBlockStart:'32px'}}>
                            <Container gap="small" direction='column'>
                                <Text size="small" weight="medium">
                                Praesent commodo cursus magna, vel scelerisque nisl consectetur et aenean eu leo quam ultricies.
                                </Text>
                                <ButtonGroup>
                                    <Button size='small' text="Apply" onClick={()=> false} type="default" style="hollow" />
                                    <IconButton ariaValue='Copy' icon='copy' onClick={()=> false} />
                                </ButtonGroup>
                            </Container>

                            <ContentDivider type="dashed" margin='small' />

                            <Container gap="small" direction='column'>
                                <Text size="small" weight="medium">
                                Aenean eu leo quam pellentesque ornare sem lacinia quam venenatis vestibulum nullam id dolor id nibh ultricies vehicula elit.
                                </Text>
                                <ButtonGroup>
                                    <Button size='small' text="Apply" onClick={()=> false} type="default" style="hollow" />
                                    <IconButton ariaValue='Copy' icon='copy' onClick={()=> false} />
                                </ButtonGroup>
                            </Container>

                            <ContentDivider type="dashed" margin='small' />

                            <Container gap="small" direction='column'>
                                <Text size="small" weight="medium">
                                Vestibulum id ligula porta felis euismod semper morbi leo risus, porta ac consectetur ac, vestibulum at eros maecenas faucibus.
                                </Text>
                                <ButtonGroup>
                                    <Button size='small' text="Apply" onClick={()=> false} type="default" style="hollow" />
                                    <IconButton ariaValue='Copy' icon='copy' onClick={()=> false} />
                                </ButtonGroup>
                            </Container>

                        </div>

                        <hr />

                        <ButtonGroup>
                            <Button text="Save Event Modal (Event only)" onClick={() => this.setState({modalSaveEvent: true})} />
                            <Button text="Save Event Modal (Event & Planning)" onClick={() => this.setState({modalSaveEvent2: true})} />
                            <Button text="Save Event Modal (Planning only)" onClick={() => this.setState({modalSaveEvent3: true})} />
                        </ButtonGroup>

                        <hr />

                        {/* <button type="button" className="sd-dropdown-button" aria-haspopup="true" aria-expanded="false">
                            <span className="sd-dropdown-button__text-block">
                                <label className="sd-dropdown-button__text-label">Coverage:</label>
                                <span className="sd-dropdown-button__text-value">Events &amp; Coverages</span>
                            </span>
                            <Icon name='chevron-down-thin' />
                        </button> */}
                        
                        <hr />

                        <Button text="Planning Templates" onClick={() => this.setState({modalPlanningTemplates: true})} />
                        <span></span>
                        
                        
                         {/* Event Saving modals */}
                         {/* Event Only (This one existed Before) */}
                        <Modal 
                            headerTemplate="Save Event"
                            zIndex={10000}
                            visible={this.state.modalSaveEvent}
                            contentPadding='medium'
                            contentBg='medium'
                            size='medium'
                            footerTemplate={modalSaveEventFooterOne}
                            onHide={() => {this.setState({modalSaveEvent: false})}}
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
                            <ContentDivider type="dashed" margin='x-small' />
                            <Text size='small' className='mb-1 mt-0-5'><strong>This is a recurring event</strong>. Update all recurring events or just this one?</Text>
                            <Select
                                value={this.state.value}
                                label='Update:'
                                required={false}
                                disabled={false}
                                inlineLabel={true}
                                labelHidden={true}
                                onChange={(value) => {
                                    this.setState({
                                        value: value,
                                    })
                                }}
                            >
                                <Option>This event only</Option>
                                <Option>This and all future events</Option>
                                <Option>All events</Option>
                            </Select>
                        </Modal>

                        {/* Event and Planning */}
                        <Modal 
                            headerTemplate="Save Event"
                            zIndex={10000}
                            visible={this.state.modalSaveEvent2}
                            contentPadding='medium'
                            contentBg='medium'
                            size='medium'
                            footerTemplate={modalSaveEventFooterTwo}
                            onHide={() => {this.setState({modalSaveEvent2: false})}}
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
                            <ContentDivider type="dashed" margin='x-small' />
                            <Text size='small' className='mb-1 mt-0-5'><strong>This is a recurring event</strong>. Update all recurring events or just this one?</Text>
                            <Select
                                value={this.state.valueS2}
                                label='Update:'
                                required={false}
                                disabled={false}
                                inlineLabel={true}
                                labelHidden={true}
                                onChange={(value) => {
                                    this.setState({
                                        value: value,
                                    })
                                }}
                            >
                                <Option>This event only</Option>
                                <Option>This and all future events</Option>
                                <Option>All events</Option>
                            </Select>
                            <ContentDivider type="solid" margin="medium" />
                            <Heading type='h3' className='mb-1 sd-text--strong'>Related Planning(s)</Heading>
                            <Text size='small' className='mb-1'>
                                <strong>You made changes to a planning item that is a part of a recurring event</strong>.
                                Apply the changes to all recurring planning items or just this one?
                            </Text>
                            <div className='sd-list-item-group--space-between-items'>
                                <div role="listitem" className="sd-list-item sd-shadow--z1 mb-1">
                                    <div className="sd-list-item__border sd-list-item__border--locked"></div>
                                    <div className="sd-list-item__column sd-list-item__column--grow sd-list-item__column--no-border">
                                        <div className="sd-list-item__row">
                                            <i role="presentation" className="icon-calendar icon--light-blue"></i>
                                            <span className="sd-list-item__slugline">Planning Slug</span>
                                            <span className="sd-overflow-ellipsis sd-list-item--element-grow">
                                                <span className="sd-list-item__text-strong">Cras justo odio, dapibus ac facilisis in.</span>
                                            </span>
                                        </div>
                                        <div className="sd-list-item__row sd-list-item__row--overflow-visible me-1">
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
                            </div>

                            <Select
                                value={this.state.valueS2}
                                label='Update:'
                                required={false}
                                disabled={false}
                                inlineLabel={true}
                                labelHidden={true}
                                onChange={(valueS2) => {
                                    this.setState({
                                        value: valueS2,
                                    })
                                }}
                            >
                                <Option>This planning only</Option>
                                <Option>This and all future plannings</Option>
                                <Option>All plannings</Option>
                            </Select>

                        </Modal>

                        {/* Planning only */}
                        <Modal 
                            headerTemplate="Save Event"
                            zIndex={10000}
                            visible={this.state.modalSaveEvent3}
                            contentPadding='medium'
                            contentBg='medium'
                            size='medium'
                            footerTemplate={modalSaveEventFooterThree}
                            onHide={() => {this.setState({modalSaveEvent3: false})}}
                        >
                            <Heading type='h3' className='mb-1 sd-text--strong'>Related Planning(s)</Heading>
                            <Text size='small' className='mb-1'>
                                <strong>You made changes to a planning item that is a part of a recurring event</strong>.
                                Apply the changes to all recurring planning items or just this one?
                            </Text>
                            <div className='sd-list-item-group--space-between-items'>
                                <div role="listitem" className="sd-list-item sd-shadow--z1 mb-1">
                                    <div className="sd-list-item__border sd-list-item__border--locked"></div>
                                    <div className="sd-list-item__column sd-list-item__column--grow sd-list-item__column--no-border">
                                        <div className="sd-list-item__row">
                                            <i role="presentation" className="icon-calendar icon--light-blue"></i>
                                            <span className="sd-list-item__slugline">Planning Slug</span>
                                            <span className="sd-overflow-ellipsis sd-list-item--element-grow">
                                                <span className="sd-list-item__text-strong">Cras justo odio, dapibus ac facilisis in.</span>
                                            </span>
                                        </div>
                                        <div className="sd-list-item__row sd-list-item__row--overflow-visible me-1">
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
                            </div>

                            <Select
                                value={this.state.valueS2}
                                label='Update:'
                                required={false}
                                disabled={false}
                                inlineLabel={true}
                                labelHidden={true}
                                onChange={(valueS2) => {
                                    this.setState({
                                        value: valueS2,
                                    })
                                }}
                            >
                                <Option>This planning only</Option>
                                <Option>This and all future plannings</Option>
                                <Option>All plannings</Option>
                            </Select>

                            <ContentDivider type="dashed" margin='small' />

                            <Text size='small' className='mb-1'>
                                <strong>You made changes to a planning item that is a part of a recurring event</strong>.
                                Apply the changes to all recurring planning items or just this one?
                            </Text>

                            <div className='sd-list-item-group--space-between-items'>
                                <div role="listitem" className="sd-list-item sd-shadow--z1 mb-1">
                                    <div className="sd-list-item__border sd-list-item__border--locked"></div>
                                    <div className="sd-list-item__column sd-list-item__column--grow sd-list-item__column--no-border">
                                        <div className="sd-list-item__row">
                                            <i role="presentation" className="icon-calendar icon--light-blue"></i>
                                            <span className="sd-list-item__slugline">Planning Slug</span>
                                            <span className="sd-overflow-ellipsis sd-list-item--element-grow">
                                                <span className="sd-list-item__text-strong">Cras justo odio, dapibus ac facilisis in.</span>
                                            </span>
                                        </div>
                                        <div className="sd-list-item__row sd-list-item__row--overflow-visible me-1">
                                            <Label text='draft' style='translucent'/>
                                            <span className="sd-margin-s--auto">
                                            <AvatarGroup
                                                size="small"
                                                items={avatars}
                                            />
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <Select
                                value={this.state.valueS2}
                                label='Update:'
                                required={false}
                                disabled={false}
                                inlineLabel={true}
                                labelHidden={true}
                                onChange={(valueS3) => {
                                    this.setState({
                                        value: valueS3,
                                    })
                                }}
                            >
                                <Option>This planning only</Option>
                                <Option>This and all future plannings</Option>
                                <Option>All plannings</Option>
                            </Select>

                        </Modal>

                        {/* Planning templates modal */}
                        <Modal headerTemplate="Planning templates"
                            zIndex={10000}
                            visible={this.state.modalPlanningTemplates}
                            contentPadding='medium'
                            contentBg='medium'
                            size='medium'
                            onHide={() => {this.setState({modalPlanningTemplates: false})}}
                        >
                            <div className='modal__sticky-header'>
                                <SearchBar placeholder='Search templates' boxed={true}>
                                    <Dropdown
                                        items={[
                                            { label: 'Features', onSelect: () => 1 },
                                            { label: 'Sports', onSelect: () => 1 },
                                            { label: 'Entertainment', onSelect: () => 1 },
                                        ]}
                                    >
                                        All Calendars
                                    </Dropdown>
                                </SearchBar>
                            </div>

                            <Heading type='h6' className='mt-1 mb-1'>Features</Heading>
                            <BoxedList>
                                <BoxedListItem clickable={true}>Features -- template one cras fringilla</BoxedListItem>
                                <BoxedListItem clickable={true}>Features -- template two sit quam</BoxedListItem>
                                <BoxedListItem clickable={true}>Features -- template fermentum quam venenatis</BoxedListItem>
                                <BoxedListItem clickable={true}>Features -- template dapibus mattis</BoxedListItem>
                            </BoxedList>
                            <Heading type='h6' className='mt-2 mb-1'>Sports</Heading>
                            <BoxedList>
                                <BoxedListItem clickable={true}>Sports -- template one fermentum venenatis</BoxedListItem>
                                <BoxedListItem clickable={true}>Sports -- template two cras condimentum</BoxedListItem>
                                <BoxedListItem clickable={true}>Sports -- template bibendum commodo nibh</BoxedListItem>
                            </BoxedList>

                        </Modal>

                        <h3 className="docs-page__h3 ">Planning Templates</h3>
                        <SearchBar placeholder='Search' boxed={true}>
                            <Dropdown
                                items={[
                                    { label: 'Action 1', onSelect: () => 1 },
                                    { label: 'Action 2', onSelect: () => 1 },
                                    { label: 'Action 3', onSelect: () => 1 },
                                ]}
                            >
                                With dropdown
                            </Dropdown>
                        </SearchBar>
                        <hr />
                        <SearchBar placeholder='Search' boxed={true}>
                            <TreeSelect
                                kind={'synchronous'}
                                value={this.state.treeSelectValue}
                                getOptions={() => options2}
                                getLabel={(item) => item.name}
                                getId={(item) => item.name}
                                onChange={() => false}
                                placeholder='Select a desk'
                                width='medium'
                                inlineLabel
                                labelHidden
                            >
                                With TreeSelect
                            </TreeSelect>
                        </SearchBar>

                        <hr />
                        <hr />

                        <h3 className="docs-page__h3 sd-margin-y--0">Pagination</h3>
                        <div className='sd-pagination'>
                            <button className='sd-pagination__item sd-pagination__item--start' disabled>
                                <Icon name='backward-thin' />
                            </button>
                            <button className='sd-pagination__item sd-pagination__item--back' disabled>
                                <Icon name='chevron-left-thin' />
                            </button>
                            <button className='sd-pagination__item'>1</button>
                            <button className='sd-pagination__item sd-pagination__item--active'>2</button>
                            <button className='sd-pagination__item'>3</button>
                            <button className='sd-pagination__item'>4</button>
                            <span className='sd-pagination__item sd-pagination__item--more'>...</span>
                            <button className='sd-pagination__item'>12</button>
                            <button className='sd-pagination__item sd-pagination__item--forward'>
                                <Icon name='chevron-right-thin' />
                            </button>
                            <button className='sd-pagination__item sd-pagination__item--end'>
                                <Icon name='forward-thin' />
                            </button>
                        </div>

                        <hr />

                        <Container gap="large" direction='column' className='sd-radius--medium sd-panel-bg--000 sd-shadow--z2 sd-padding--3 sd-state--focus my-5'>
                            <Heading type='h3'>Curabitur blandit tempus porttitor.</Heading>
                            <Text color='light'>
                                Praesent commodo cursus magna, vel scelerisque nisl consectetur et...
                            </Text>
                            <ButtonGroup align="end">
                                <Button text="Cancel" onClick={()=> false} type="default" style="hollow" />
                                <Button text="Submit" onClick={()=> false} type="primary" />
                            </ButtonGroup>
                        </Container>

                        <h3 className="docs-page__h3 sd-margin-y--0">Form test</h3>

                        <hr />

                        <img
                            src="/path/toimage"
                            alt="my image" 
                            onError={({ currentTarget }) => {
                                currentTarget.onerror = null; // prevents looping
                                currentTarget.src="/illustration--playground.svg";
                                currentTarget.classList.add('broken-img')
                            }}
                        />

                        <div className="input-wrap">
                            <FormLabel invalid required={true} state='focused' text="Form Label" forId="input1" />
                            <IconButton size='small' icon="settings" ariaValue="Screen-reader text" onClick={()=> false} />
                            <InputBase placeholder='Test placeholder' boxedStyle invalid type='text' id="input1" value='' onChange={() => false} />
                            <div className="input-wrap__message-box">
                                <div className="sd-input__hint">Error message</div>
                            </div>
                            <span className="sd-input__char-count">0 / 40</span>
                        </div>

                        <hr />

                        <div className="input-wrap input-wrap--boxed">
                            <FormLabel style='boxed' text="Form Label" required={true} forId="input2" />
                            <IconButton size='small' icon="settings" ariaValue="Screen-reader text" onClick={()=> false} />
                            <InputBase disabled size='medium' placeholder='Test placeholder' boxedStyle type='text' id="input2" value='' onChange={() => false} />
                            <div className="input-wrap__message-box">
                                <div className="sd-input__hint">Error message</div>
                            </div>
                            <span className="sd-input__char-count">0 / 40</span>
                        </div>

                        <hr />

                        <InputNew
                            label='test'
                            value=''
                            onChange={() => false}
                            placeholder='test'
                            required={true}
                            info='Nullam Sollicitudin'
                            maxLength={20}
                            inlineLabel={true}
                            labelHidden={true}
                            type='text'
                        />
                        
                        <hr />

                        <div className='form__group-new'>
                            <Input
                                value=''
                                onChange={() => false}
                                type='text'
                                label='Text input'
                                placeholder='Enter text'
                                disabled={true}
                            />
                            <Input value=''
                                onChange={() => false}
                                type='text'
                                label='Text input'
                                placeholder='Enter text'
                                disabled={true}
                            />
                            <DatePicker
                                value={this.state.date}
                                dateFormat="YYYY-MM-DD"
                                disabled={true}
                                required={true}
                                label='Date'
                                onChange={(date) => {
                                    this.setState({date});
                                }}
                            />
                            <TimePicker
                                value={this.state.time}
                                disabled={true}
                                required={true}
                                label='Time'
                                onChange={(time) => {
                                    this.setState({time});
                                }}
                            />
                            <Button text="Clear" onClick={()=> false} />
                            <Button text="Cancel" onClick={()=> false} />
                            <Button text="Save" type='primary' onClick={()=> false} />
                        </div>

                        <hr />

                        <FormRowNew rowLabel='My group label' inlineLabels={true}>
                            <Input
                                value=''
                                onChange={() => false}
                                type='text'
                                label='Text input'
                                placeholder='Enter text'
                                inlineLabel={true}
                                labelHidden={true}
                                disabled={false}
                            />
                            <Text size='small' align='center'>To:</Text>
                            <Input
                                value=''
                                onChange={() => false}
                                type='text'
                                label='Text input'
                                placeholder='Enter text'
                                inlineLabel={true}
                                labelHidden={true}
                                disabled={false}
                            />
                            <Button text="Save" type='primary' onClick={()=> false} />
                        </FormRowNew>

                        <hr />

                        <FormRowNew>
                            <Input
                                value=''
                                onChange={() => false}
                                type='text'
                                label='Text input'
                                placeholder='Enter text'
                                disabled={false}
                            />
                            <Text size='small' align='center'>To:</Text>
                            <Input
                                value=''
                                onChange={() => false}
                                type='text'
                                label='Text input'
                                placeholder='Enter text'
                                labelHidden={true}
                                disabled={false}
                            />
                            <Button text="Save" type='primary' onClick={()=> false} />
                        </FormRowNew>

                        <hr />

                        <h3 className="docs-page__h3 sd-margin-y--0">Table list (draggable)</h3>

                        <hr />

                        <h4 className="docs-page__h4 sd-margin-y--1">Handles visible</h4>
                        <ul className='table-list table-list--gap-s'>
                            <li className='table-list__item table-list__item--clickable table-list__item--draggable table-list__item--drag-handles-always'>
                                <div className='table-list__item-border'></div>
                                <div className='table-list__item-content'>
                                    <div className='table-list__item-content-block'>
                                        <Label text='Uvod' />
                                        <Label type='primary' text='prlg' />
                                    </div>
                                    <div className='table-list__item-content-block table-list__item-content-block--center'>
                                        <span>Handle visible. Nisi erat porttitor ligula, eget lacinia odio sem nec elit.</span>
                                    </div>
                                    <div className='table-list__item-content-block'>
                                        <IconLabel style='translucent' text='Label success' type='success' icon='time' />
                                    </div>
                                </div>
                                <div className='table-list__slide-in-actions'>
                                    <IconButton icon='dots-vertical' size='small' ariaValue='More actions' onClick={()=> false} />
                                </div>
                            </li>
                            <li className='table-list__item table-list__item--clickable table-list__item--draggable table-list__item--drag-handles-always'>
                                <div className='table-list__item-border'></div>
                                <div className='table-list__item-content'>
                                    <div className='table-list__item-content-block'>
                                        <Label text='Gost' />
                                        <Label type='primary' text='prlg' />
                                    </div>
                                    <div className='table-list__item-content-block table-list__item-content-block--center'>
                                        <span>Handle visible. Duis mollis, est non commodo luctus, nisi erat porttitor ligula..</span>
                                    </div>
                                    <div className='table-list__item-content-block'>
                                        <IconLabel style='translucent' text='Label success' type='success' icon='time' />
                                    </div>
                                </div>
                                <div className='table-list__slide-in-actions'>
                                    <IconButton icon='dots-vertical' size='small' ariaValue='More actions' onClick={()=> false} />
                                </div>
                            </li>
                            <li className='table-list__item table-list__item--clickable table-list__item--draggable table-list__item--drag-handles-always'>
                                <div style={{background:'#83cf7e',}} className='table-list__item-border'></div>
                                <div className='table-list__item-content'>
                                    <div className='table-list__item-content-block'>
                                        <Label text='Podatak' />
                                        <Label type='primary' text='Gost' />
                                    </div>
                                    <div className='table-list__item-content-block table-list__item-content-block--center'>
                                        <span>Handle visible. Mollis est non commodo luctus, nisi erat porttitor ligula.</span>
                                    </div>
                                    <div className='table-list__item-content-block'>
                                        <IconLabel style='translucent' text='Label success' type='success' icon='time' />
                                    </div>
                                </div>
                                <div className='table-list__slide-in-actions'>
                                    <IconButton icon='dots-vertical' size='small' ariaValue='More actions' onClick={()=> false} />
                                </div>
                            </li>
                            <li className='table-list__item table-list__item--clickable table-list__item--draggable table-list__item--drag-handles-always table-list__item--selected'>
                                <div className='table-list__item-border'></div>
                                <div className='table-list__item-content'>
                                    <div className='table-list__item-content-block'>
                                        <Label text='Odjava' />
                                        <Label type='warning' text='Slika' />
                                    </div>
                                    <div className='table-list__item-content-block table-list__item-content-block--center'>
                                        <span>Handle visible. Nullam id dolor id nibh ultricies vehicula ut id elit.</span>
                                    </div>
                                    <div className='table-list__item-content-block'>
                                        <IconLabel style='translucent' text='Label success' type='success' icon='time' />
                                    </div>
                                </div>
                                <div className='table-list__slide-in-actions'>
                                    <IconButton icon='dots-vertical' size='small' ariaValue='More actions' onClick={()=> false} />
                                </div>
                            </li>
                        </ul>

                        <hr />

                        <h4 className="docs-page__h4 sd-margin-y--1">Handles hidden</h4>
                        <ul className='table-list table-list--gap-s'>
                            <li className='table-list__item table-list__item--clickable table-list__item--draggable table-list__item--drag-handles-none'>
                                <div className='table-list__item-border'></div>
                                <div className='table-list__item-content'>
                                    <div className='table-list__item-content-block'>
                                        <Label text='Uvod' />
                                        <Label type='primary' text='prlg' />
                                    </div>
                                    <div className='table-list__item-content-block table-list__item-content-block--center'>
                                        <span>Handle hidden. Nisi erat porttitor ligula, eget lacinia odio sem nec elit.</span>
                                    </div>
                                    <div className='table-list__item-content-block'>
                                        <IconLabel style='translucent' text='Label success' type='success' icon='time' />
                                    </div>
                                </div>
                                <div className='table-list__slide-in-actions'>
                                    <IconButton icon='dots-vertical' size='small' ariaValue='More actions' onClick={()=> false} />
                                </div>
                            </li>
                            <li className='table-list__item table-list__item--clickable table-list__item--draggable table-list__item--drag-handles-none'>
                                <div className='table-list__item-border'></div>
                                <div className='table-list__item-content'>
                                    <div className='table-list__item-content-block'>
                                        <Label text='Gost' />
                                        <Label type='primary' text='prlg' />
                                    </div>
                                    <div className='table-list__item-content-block table-list__item-content-block--center'>
                                        <span>Handle hidden. Duis mollis, est non commodo luctus, nisi erat porttitor ligula..</span>
                                    </div>
                                    <div className='table-list__item-content-block'>
                                        <IconLabel style='translucent' text='Label success' type='success' icon='time' />
                                    </div>
                                </div>
                                <div className='table-list__slide-in-actions'>
                                    <IconButton icon='dots-vertical' size='small' ariaValue='More actions' onClick={()=> false} />
                                </div>
                            </li>
                            <li className='table-list__item table-list__item--clickable table-list__item--draggable table-list__item--drag-handles-none'>
                                <div style={{background:'#83cf7e',}} className='table-list__item-border'></div>
                                <div className='table-list__item-content'>
                                    <div className='table-list__item-content-block'>
                                        <Label text='Podatak' />
                                        <Label type='primary' text='Gost' />
                                    </div>
                                    <div className='table-list__item-content-block table-list__item-content-block--center'>
                                        <span>Handle hidden. Mollis est non commodo luctus, nisi erat porttitor ligula.</span>
                                    </div>
                                    <div className='table-list__item-content-block'>
                                        <IconLabel style='translucent' text='Label success' type='success' icon='time' />
                                    </div>
                                </div>
                                <div className='table-list__slide-in-actions'>
                                    <IconButton icon='dots-vertical' size='small' ariaValue='More actions' onClick={()=> false} />
                                </div>
                            </li>
                            <li className='table-list__item table-list__item--clickable table-list__item--draggable table-list__item--drag-handles-none table-list__item--selected'>
                                <div className='table-list__item-border'></div>
                                <div className='table-list__item-content'>
                                    <div className='table-list__item-content-block'>
                                        <Label text='Odjava' />
                                        <Label type='warning' text='Slika' />
                                    </div>
                                    <div className='table-list__item-content-block table-list__item-content-block--center'>
                                        <span>Handle hidden. Nullam id dolor id nibh ultricies vehicula ut id elit.</span>
                                    </div>
                                    <div className='table-list__item-content-block'>
                                        <IconLabel style='translucent' text='Label success' type='success' icon='time' />
                                    </div>
                                </div>
                                <div className='table-list__slide-in-actions'>
                                    <IconButton icon='dots-vertical' size='small' ariaValue='More actions' onClick={()=> false} />
                                </div>
                            </li>
                        </ul>

                        <hr />

                        <h4 className="docs-page__h4 sd-margin-y--1">Handles on hover</h4>
                        <ul className='table-list table-list--gap-s'>
                            <li className='table-list__item table-list__item--clickable table-list__item--draggable'>
                                <div className='table-list__item-border'></div>
                                <div className='table-list__item-content'>
                                    <div className='table-list__item-content-block'>
                                        <Label text='Uvod' />
                                        <Label type='primary' text='prlg' />
                                    </div>
                                    <div className='table-list__item-content-block table-list__item-content-block--center'>
                                        <span>Handle on hover. Nisi erat porttitor ligula, eget lacinia odio sem nec elit.</span>
                                    </div>
                                    <div className='table-list__item-content-block'>
                                        <IconLabel style='translucent' text='Label success' type='success' icon='time' />
                                    </div>
                                </div>
                                <div className='table-list__slide-in-actions'>
                                    <IconButton icon='dots-vertical' size='small' ariaValue='More actions' onClick={()=> false} />
                                </div>
                            </li>
                            <li className='table-list__item table-list__item--clickable table-list__item--draggable'>
                                <div className='table-list__item-border'></div>
                                <div className='table-list__item-content'>
                                    <div className='table-list__item-content-block'>
                                        <Label text='Gost' />
                                        <Label type='primary' text='prlg' />
                                    </div>
                                    <div className='table-list__item-content-block table-list__item-content-block--center'>
                                        <span>Handle on hover. Duis mollis, est non commodo luctus, nisi erat porttitor ligula..</span>
                                    </div>
                                    <div className='table-list__item-content-block'>
                                        <IconLabel style='translucent' text='Label success' type='success' icon='time' />
                                    </div>
                                </div>
                                <div className='table-list__slide-in-actions'>
                                    <IconButton icon='dots-vertical' size='small' ariaValue='More actions' onClick={()=> false} />
                                </div>
                            </li>
                            <li className='table-list__item table-list__item--clickable table-list__item--draggable'>
                                <div style={{background:'#83cf7e',}} className='table-list__item-border'></div>
                                <div className='table-list__item-content'>
                                    <div className='table-list__item-content-block'>
                                        <Label text='Podatak' />
                                        <Label type='primary' text='Gost' />
                                    </div>
                                    <div className='table-list__item-content-block table-list__item-content-block--center'>
                                        <span>Handle on hover. Mollis est non commodo luctus, nisi erat porttitor ligula.</span>
                                    </div>
                                    <div className='table-list__item-content-block'>
                                        <IconLabel style='translucent' text='Label success' type='success' icon='time' />
                                    </div>
                                </div>
                                <div className='table-list__slide-in-actions'>
                                    <IconButton icon='dots-vertical' size='small' ariaValue='More actions' onClick={()=> false} />
                                </div>
                            </li>
                            <li className='table-list__item table-list__item--clickable table-list__item--draggable table-list__item--selected'>
                                <div className='table-list__item-border'></div>
                                <div className='table-list__item-content'>
                                    <div className='table-list__item-content-block'>
                                        <Label text='Odjava' />
                                        <Label type='warning' text='Slika' />
                                    </div>
                                    <div className='table-list__item-content-block table-list__item-content-block--center'>
                                        <span>Handle on hover. Nullam id dolor id nibh ultricies vehicula ut id elit.</span>
                                    </div>
                                    <div className='table-list__item-content-block'>
                                        <IconLabel style='translucent' text='Label success' type='success' icon='time' />
                                    </div>
                                </div>
                                <div className='table-list__slide-in-actions'>
                                    <IconButton icon='dots-vertical' size='small' ariaValue='More actions' onClick={()=> false} />
                                </div>
                            </li>
                        </ul>

                        <hr />

                        <h3 className="docs-page__h3 sd-margin-y--0 sd-margin-t--3">Table list with items between</h3>

                        <hr />

                        <ul className='table-list table-list--contained'>
                            <li className='table-list__item-container'>
                                <div className='table-list__item table-list__item--clickable table-list__item--draggable'>
                                    <div className='table-list__item-content'>
                                        <div className='table-list__item-content-block'>
                                            <Label style='translucent' text='aacc' />
                                            <Label style='translucent' type='primary' text='prlg' />
                                        </div>
                                        <div className='table-list__item-content-block table-list__item-content-block--center'>
                                            <span>Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.</span>
                                        </div>
                                        <div className='table-list__item-content-block'>
                                            <IconLabel style='translucent' text='Label success' type='success' icon='time' />
                                        </div>
                                    </div>
                                    <div className='table-list__slide-in-actions'>
                                        <IconButton icon='dots-vertical' size='small' ariaValue='More actions' onClick={()=> false} />
                                    </div>
                                </div>

                                <div className='table-list__add-bar-container'>
                                    <Tooltip text='Add item' flow='top' appendToBody={true}>
                                        <div className='table-list__add-bar'>
                                            <Button type="primary" icon="plus-large" text="Add item" size="small" shape="round" iconOnly={true} onClick={()=> false} />
                                        </div>
                                    </Tooltip>
                                </div>
                            </li>

                            <li className='table-list__item-container'>
                                <div className='table-list__item table-list__item--clickable table-list__item--draggable'>
                                    <div className='table-list__item-content'>
                                        <div className='table-list__item-content-block'>
                                            <Label style='translucent' type='warning' text='pokr' />
                                            <Label style='translucent' text='slika' />
                                        </div>
                                        <div className='table-list__item-content-block table-list__item-content-block--center'>
                                            <span>Nullam id dolor id nibh ultricies vehicula ut id elit.</span>
                                        </div>
                                        <div className='table-list__item-content-block'>
                                            <IconLabel style='translucent' text='Label success' type='success' icon='time' />
                                        </div>
                                    </div>
                                    <div className='table-list__slide-in-actions'>
                                        <IconButton icon='dots-vertical' size='small' ariaValue='More actions' onClick={()=> false} />
                                    </div>
                                </div>

                                <div className='table-list__add-bar-container'>
                                    <Tooltip text='Add item' flow='top' appendToBody={true}>
                                        <div className='table-list__add-bar'>
                                            <Button type="primary" icon="plus-large" text="Add item" size="small" shape="round" iconOnly={true} onClick={()=> false} />
                                        </div>
                                    </Tooltip>
                                </div>
                            </li>

                            <li className='table-list__item-container'>
                                <div className='table-list__item table-list__item--clickable table-list__item--draggable'>
                                    <div className='table-list__item-content'>
                                        <div className='table-list__item-content-block'>
                                            <Label style='translucent' type='warning' text='pokr' />
                                            <Label style='translucent' text='slika' />
                                        </div>
                                        <div className='table-list__item-content-block table-list__item-content-block--center'>
                                            <span>Nullam id dolor id nibh ultricies vehicula ut id elit.</span>
                                        </div>
                                        <div className='table-list__item-content-block'>
                                            <IconLabel style='translucent' text='Label success' type='success' icon='time' />
                                        </div>
                                    </div>
                                    <div className='table-list__slide-in-actions'>
                                        <IconButton icon='pencil' size='small' ariaValue='More actions' onClick={()=> false} />
                                        <IconButton icon='trash' size='small' ariaValue='More actions' onClick={()=> false} />
                                    </div>
                                </div>

                                <div className='table-list__add-bar-container'>
                                    <Tooltip text='Add item' flow='top' appendToBody={true}>
                                        <div className='table-list__add-bar'>
                                            <Button type="primary" icon="plus-large" text="Add item" size="small" shape="round" iconOnly={true} onClick={()=> false} />
                                        </div>
                                    </Tooltip>
                                </div>
                            </li>
                        </ul>

                        <hr />

                        <h3 className="docs-page__h3 sd-margin-y--0">Checkbox</h3>

                        <hr />

                        <div className="sd-check__group-new sd-check__group-new--vertical">
                            <Checkbox label={{text: 'Label side not defined'}} onChange={(value) => console.log('value changed', value)} />
                            <Checkbox label={{text: 'Defined label side - right', side: 'end'}} onChange={(value) => console.log('value changed', value)} />
                            <Checkbox label={{text: 'This checkbox is disabled'}} onChange={(value) => console.log('value changed', value)} disabled={true} />
                        </div>

                        <hr />

                        <Checkbox label={{text: 'Defined label side - left', side: 'start'}} onChange={(value) => console.log('value changed', value)} />

                        <hr />

                        <Checkbox label={{text: 'The label is hidden here', hidden: true}} onChange={(value) => console.log('value changed', value)} />
                        
                        <hr />

                        <div className="sd-check-button__group sd-check-button__group--start">
                            <CheckboxButton label={{text: 'CheckboxButton rules!'}} onChange={(value) => console.log('value changed', value)} />
                            <CheckboxButton label={{text: 'CheckboxButton rules again!', icon: 'th'}} onChange={(value) => console.log('value changed', value)} />
                            <CheckboxButton label={{text: 'Hell yeah!'}} onChange={(value) => console.log('value changed', value)} />
                        </div>

                        <hr />

                        <h3 className="docs-page__h3 sd-margin-y--0 sd-margin-b--3">Duration input</h3>

                        <div className="sd-input">
                            <label className="sd-input__label" id="duration01">Input label</label>
                            <div className="sd-input__duration-input" id="id06" aria-describedby="duration01">
                                <input type="number" className="" placeholder='00'/>
                                <span className="sd-input__suffix">h</span>
                                <input type="number" className="" placeholder='00'/>
                                <span className="sd-input__suffix">m</span>
                                <input type="number" className="" placeholder='00'/>
                                <span className="sd-input__suffix">s</span>
                            </div>
                            <div className="sd-input__char-count">0 / 30</div>
                            <div className="sd-input__message-box">
                                <div className="sd-input__hint">This is some hint message</div>
                            </div>
                        </div>

                        <h3 className="docs-page__h3 sd-margin-y--0 sd-margin-b--3">testiramt</h3>

                        <hr />

                        <h3 className="docs-page__h3 sd-margin-t--2 sd-margin-b--0">Radio</h3>

                        <hr />

                        <div className="sd-check__group-new">
                            <RadioGroup
                                value={this.state.value2}
                                options={[
                                    {label: "Radio 1", value: "somevalue1"},
                                    {label: "Radio 2", value: "somevalue2"},
                                    {label: "Radio 3", value: "somevalue3"},
                                ]}
                                onChange={(value) => this.setState(() => ({ value2: value }))}
                            />
                        </div>

                        <hr />

                        <div className="sd-check__group-new sd-check-button__group--left">
                            <RadioButtonGroup
                                value={this.state.value3}
                                options={[
                                    {label: "RadioButton with an icon", value: "somevalue4", icon: "th-list"},
                                    {label: "RadioButton with no visible text, only an icon", value: "somevalue5", icon: "th", labelHidden: true},
                                    {label: "Normal RadioButton", value: "somevalue6"},
                                ]}
                                onChange={(value) => this.setState(() => ({ value3: value }))}
                            />
                        </div>

                        <hr />

                        <div className="sd-thumb-carousel" data-theme="dark-ui">
                            <div className="sd-thumb-carousel__header">
                                <h4 className="sd-thumb-carousel__heading">Mountain bike Championships gallery</h4>
                                <Badge text='6' type='light' />
                                <div className="sd-thumb-carousel__header-block--r">
                                    <time>Today, 08. April 14:25</time>
                                    <IconButton icon="trash" ariaValue="Remove" onClick={()=> false} />
                                </div>
                            </div>
                            <div className="sd-thumb-carousel__content">
                                <div className="sd-thumb-carousel__container">
                                    <button className="icn-btn sd-thumb-carousel__btn--prev" aria-label="Previous">
                                        <Icon name="chevron-left-thin" />
                                    </button>
                                    <div className="sd-thumb-carousel__items-content">
                                        <div className="sd-thumb-carousel__items-container">
                                            <div className="sd-thumb-carousel__item">
                                                <div className="sd-thumb-carousel__cover-image-icon">
                                                    <Icon name="star" />
                                                </div>
                                                <div className="sd-thumb-carousel__item-inner">
                                                    <img src="/carousel-thumb--01.jpg" alt="test" />
                                                </div>
                                            </div>
                                            <div className="sd-thumb-carousel__item">
                                                <div className="sd-thumb-carousel__item-inner">
                                                    <img src="/carousel-thumb--02.jpg" alt="test" />
                                                </div>
                                            </div>
                                            <div className="sd-thumb-carousel__item">
                                                <div className="sd-thumb-carousel__item-inner">
                                                    <img src="/d_trump_2.jpg" alt="test" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <button className="icn-btn sd-thumb-carousel__btn--next" aria-label="Next">
                                        <Icon name="chevron-right-thin" />
                                    </button>
                                </div>
                                <ul className="sd-thumb-carousel__indicators">
                                    <li className="sd-thumb-carousel__indicator sd-thumb-carousel__indicator--highlight"><button aria-label="1"></button></li>
                                    <li className="sd-thumb-carousel__indicator"><button aria-label="2"></button></li>
                                    <li className="sd-thumb-carousel__indicator"><button aria-label="3"></button></li>

                                </ul>
                            </div>
                            <div className="sd-thumb-carousel__description">
                                Nulla vitae elit libero, a pharetra augue. Nulla vitae elit libero, a pharetra augue. 
                                Donec id elit non mi porta gravida at eget metus. Etiam porta sem malesuada magna mollis euismod. 
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cum sociis natoque penatibus et magnis dis 
                                parturient montes, nascetur ridiculus mus.
                            </div>
                        </div>

                        <hr />

                        <div className="button-group button-group--comfort">
                            <div className="color-swatch colour-test--1"></div>
                            <div className="color-swatch colour-test--2"></div>
                            <Spinner />
                        </div>

                        <hr />

                        <Container className='sd-padding--4 sd-panel-bg--100 sd-radius--large'>
                            <ThemeSelector
                                size='small'
                                options={[
                                    {label: 'Light', value: 'light', theme: 'light'},
                                    {label: 'Dark', value: 'dark', theme: 'dark'},
                                    {label: 'High Contrast', value: 'high-contrast', theme: 'contrast-light', disabled: true},
                                ]}
                                onChange={($event)=>{this.setState({selctedTheme: $event})}} value={this.state.selctedTheme}
                            />
                        </Container>

                        <hr />

                        <Container className='sd-padding--4 sd-panel-bg--100 sd-radius--large'>
                            <Button text="Exit" type='primary' onClick={()=> false} />
                            <Divider />
                            <Button text="Cancel" onClick={()=> false} />
                            <Divider />
                            <Button text="Save" type='primary' onClick={()=> false} />
                        </Container>

                        <hr />

                        <Container className='sd-padding--4 sd-panel-bg--100 sd-radius--large'>
                            <InputWrapper
                                label="Label"
                                invalid={false}>
                                <input type='text' />
                            </InputWrapper>
                        </Container>

                        <hr />

                        <Container className='sd-padding--4 sd-panel-bg--100 sd-radius--large'>
                            <div className='sd-dropzone__drop-target'>
                                <div className='sd-dropzone__target-border'></div>
                                <figure className='sd-dropzone__icon'>
                                    <Icon name='upload-alt' size='big' />
                                </figure>
                                <h4 className='sd-dropzone__heading'>
                                    Upload files
                                </h4>
                                <p className='sd-dropzone__description'>Drag one or more files here to upload them, or just click the button below.</p>
                                <button className='btn btn--hollow sd-dropzone__action'>Attach files</button>
                            </div>
                        </Container>
                    </Components.MainPanel>
                    {/* MAIN CONTENT (Monitoring) */}
                </Components.LayoutContainer>
            </Components.Layout >
        );
    }
}
