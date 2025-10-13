import * as React from 'react';
import * as Components from './components/Index';
import {IconButton, ButtonGroup, Heading, Container} from '../../../../app-typescript/index';

interface IProps {
    children?: React.ReactNode;
}

interface IState {
    selctedTheme: string;
    thisTheme: string;
}

export class Colors extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {
            selctedTheme: 'light',
            thisTheme: 'light-ui',
        };
    }

    changeStatus(item: any, status: string) {
        if (item.status.includes(status)) {
            item.status.splice(item.status.indexOf(status), 1);
        } else {
            item.status.push(status);
        }
    }

    toggleTheme = () => {
        this.setState({
            thisTheme: this.state.thisTheme === 'light-ui' ? 'dark-ui' : 'light-ui',
        });
    };

    render() {
        return (
            <Components.Layout header="Colors testing" theme={this.state.thisTheme}>
                <Components.LayoutContainer>
                    <Components.MainPanel className="surface-color-base">
                        <Container className="p-sticky top-0 z-2">
                            <ButtonGroup align="end">
                                <IconButton
                                    icon="adjust"
                                    ariaValue="Toggle theme"
                                    onClick={this.toggleTheme}
                                    toolTipFlow="left"
                                />
                            </ButtonGroup>
                        </Container>

                        <Heading type="h2" fontStyle="serif" color="light" weight="strong" className="mb-2">
                            Semantic
                        </Heading>
                        <div className="d-flex flex-col">
                            <div className="color-swatch_grid mb-1">
                                <div className="color-swatch_item surface-color-primary">
                                    <span className="text-color-on-dark">primary</span>
                                </div>
                                <div
                                    className="color-swatch_item"
                                    style={{backgroundColor: 'var(--color-primary-highlight)'}}
                                >
                                    <span className="text-color-on-dark">primary</span>
                                </div>
                                <div
                                    className="color-swatch_item"
                                    style={{backgroundColor: 'var(--color-primary-translucent-strong)'}}
                                >
                                    <span className="text-color-primary">primary</span>
                                </div>
                                <div
                                    className="color-swatch_item"
                                    style={{backgroundColor: 'var(--color-primary-translucent)'}}
                                >
                                    <span className="text-color-primary">primary</span>
                                </div>
                                <div className="color-swatch_item">
                                    <span className="text-color-primary">primary</span>
                                </div>
                            </div>
                            <div className="color-swatch_grid mb-1">
                                <div className="color-swatch_item surface-color-success">
                                    <span className="text-color-on-dark">success</span>
                                </div>
                                <div
                                    className="color-swatch_item"
                                    style={{backgroundColor: 'var(--color-success-highlight)'}}
                                >
                                    <span className="text-color-on-dark">success</span>
                                </div>
                                <div className="color-swatch_item surface-color-success-translucent">
                                    <span className="text-color-success">success</span>
                                </div>
                                <div className="color-swatch_item">
                                    <span className="text-color-success">success</span>
                                </div>
                            </div>
                            <div className="color-swatch_grid mb-1">
                                <div className="color-swatch_item surface-color-warning">
                                    <span className="text-color-on-dark">warning</span>
                                </div>
                                <div
                                    className="color-swatch_item"
                                    style={{backgroundColor: 'var(--color-warning-highlight)'}}
                                >
                                    <span className="text-color-on-dark">warning</span>
                                </div>
                                <div className="color-swatch_item surface-color-warning-translucent">
                                    <span className="text-color-warning">warning</span>
                                </div>
                                <div className="color-swatch_item">
                                    <span className="text-color-warning">warning</span>
                                </div>
                            </div>
                            <div className="color-swatch_grid mb-1">
                                <div className="color-swatch_item surface-color-alert">
                                    <span className="text-color-on-dark">alert</span>
                                </div>
                                <div
                                    className="color-swatch_item"
                                    style={{backgroundColor: 'var(--color-alert-highlight)'}}
                                >
                                    <span className="text-color-on-dark">alert</span>
                                </div>
                                <div className="color-swatch_item surface-color-alert-translucent">
                                    <span className="text-color-alert">alert</span>
                                </div>
                                <div className="color-swatch_item">
                                    <span className="text-color-alert">alert</span>
                                </div>
                            </div>
                            <div className="color-swatch_grid mb-1">
                                <div className="color-swatch_item surface-color-highlight">
                                    <span className="text-color-on-dark">highlight</span>
                                </div>
                                <div
                                    className="color-swatch_item"
                                    style={{backgroundColor: 'var(--color-highlight-highlight)'}}
                                >
                                    <span className="text-color-on-dark">highlight</span>
                                </div>
                                <div className="color-swatch_item surface-color-highlight-translucent">
                                    <span className="text-color-highlight">highlight</span>
                                </div>
                                <div className="color-swatch_item">
                                    <span className="text-color-highlight">highlight</span>
                                </div>
                            </div>
                            <div className="color-swatch_grid">
                                <div className="color-swatch_item surface-color-info">
                                    <span className="text-color-on-dark">info</span>
                                </div>
                                <div
                                    className="color-swatch_item"
                                    style={{backgroundColor: 'var(--color-info-highlight)'}}
                                >
                                    <span className="text-color-on-dark">info</span>
                                </div>
                                <div className="color-swatch_item surface-color-info-translucent">
                                    <span className="text-color-info">info</span>
                                </div>
                                <div className="color-swatch_item">
                                    <span className="text-color-info">info</span>
                                </div>
                            </div>
                        </div>

                        <Heading type="h4" color="light" className="mt-3 mb-1-5">
                            Surface
                        </Heading>

                        <div className="surface-color-swatch_grid mb-1">
                            <div className="surface-color-swatch_item surface-color-base">
                                <span className="text-color-muted">Surface base</span>
                            </div>
                            <div className="surface-color-swatch_item surface-color-muted">
                                <span className="text-color-muted">Surface muted</span>
                            </div>
                            <div className="surface-color-swatch_item surface-color-subdued">
                                <span className="text-color-muted">Surface subdued</span>
                            </div>
                            <div className="surface-color-swatch_item surface-color-faded">
                                <span className="text-color-muted">Surface faded</span>
                            </div>
                            <div
                                className="surface-color-swatch_item"
                                style={{backgroundColor: 'var(--color-surface-dimmed)'}}
                            >
                                <span className="text-color-muted">Surface dimmed</span>
                            </div>
                            <div
                                className="surface-color-swatch_item"
                                style={{backgroundColor: 'var(--color-surface-deep)'}}
                            >
                                <span className="text-color-muted">Surface deep</span>
                            </div>
                            <div
                                className="surface-color-swatch_item"
                                style={{backgroundColor: 'var(--color-surface-dark)'}}
                            >
                                <span className="text-color-on-dark">Surface dark</span>
                            </div>
                            <div
                                className="surface-color-swatch_item"
                                style={{backgroundColor: 'var(--color-surface-inverted-medium)'}}
                            >
                                <span className="text-color-on-dark">Inverted medium</span>
                            </div>
                            <div
                                className="surface-color-swatch_item"
                                style={{backgroundColor: 'var(--color-surface-inverted-strong)'}}
                            >
                                <span className="text-color-inverse">Inverted strong</span>
                            </div>
                        </div>

                        <div className="surface-color-swatch_grid mb-1 mt-2">
                            <div className="surface-color-swatch_item"></div>
                            <div
                                className="surface-color-swatch_item"
                                style={{backgroundColor: 'var(--color-surface-muted-translucent)'}}
                            >
                                <span className="text-color-muted">Surf. muted trans.</span>
                            </div>
                            <div
                                className="surface-color-swatch_item"
                                style={{backgroundColor: 'var(--color-surface-subdued-translucent)'}}
                            >
                                <span className="text-color-muted">Surf. subdued trans.</span>
                            </div>
                            <div
                                className="surface-color-swatch_item"
                                style={{backgroundColor: 'var(--color-surface-faded-translucent)'}}
                            >
                                <span className="text-color-muted">Surf. faded trans.</span>
                            </div>
                        </div>

                        <Heading type="h4" color="light" className="mt-3 mb-1-5">
                            Text
                        </Heading>

                        <div className="surface-color-swatch_grid mb-1">
                            <div className="surface-color-swatch_item surface-color-muted">
                                <span className="text-color-normal">Text normal</span>
                            </div>
                            <div className="surface-color-swatch_item surface-color-muted">
                                <span className="text-color-muted">Text muted</span>
                            </div>
                            <div className="surface-color-swatch_item surface-color-muted">
                                <span className="text-color-subdued">Text subdued</span>
                            </div>
                            {/* <div className='surface-color-swatch_item surface-color-muted'>
                                <span className='text-color-muted'>Surface faded</span>
                            </div> */}
                        </div>

                        <Heading type="h4" color="light" className="mt-3 mb-1-5">
                            Line / Border
                        </Heading>

                        <div className="d-flex flex-col gap-2 mb-5">
                            <div
                                style={{height: '8px', borderWidth: '1px 0 0 0', borderStyle: 'solid'}}
                                className="border-color-x-light"
                            ></div>
                            <div
                                style={{height: '8px', borderWidth: '1px 0 0 0', borderStyle: 'solid'}}
                                className="border-color-light"
                            ></div>
                            <div
                                style={{height: '8px', borderWidth: '1px 0 0 0', borderStyle: 'solid'}}
                                className="border-color-medium"
                            ></div>
                            <div
                                style={{height: '8px', borderWidth: '1px 0 0 0', borderStyle: 'solid'}}
                                className="border-color-strong"
                            ></div>
                        </div>

                        <Heading type="h4" color="light" className="mt-3 mb-1-5">
                            Shadows
                        </Heading>
                        <div className="d-flex flex-row gap-2 mb-5">
                            <div
                                style={{height: '80px', width: '80px'}}
                                className="d-flex items-center justify-center surface-color-base sd-shadow--z1 radius-lg"
                            >
                                z1
                            </div>
                            <div
                                style={{height: '80px', width: '80px'}}
                                className="d-flex items-center justify-center surface-color-base sd-shadow--z2 radius-lg"
                            >
                                z2
                            </div>
                            <div
                                style={{height: '80px', width: '80px'}}
                                className="d-flex items-center justify-center surface-color-base sd-shadow--z3 radius-lg"
                            >
                                z3
                            </div>
                            <div
                                style={{height: '80px', width: '80px'}}
                                className="d-flex items-center justify-center surface-color-base sd-shadow--z4 radius-lg"
                            >
                                z4
                            </div>
                        </div>

                        <hr />

                        <Heading type="h2" fontStyle="serif" color="light" weight="strong" className="mb-2 mt-5">
                            Brand Colors
                        </Heading>
                        <Heading type="h4" color="light" className="mb-1">
                            Brand primary
                        </Heading>
                        <div className="color-swatch_grid">
                            <div style={{backgroundColor: 'var(--brand-primary-200)'}} className="color-swatch_item">
                                <span className="text-color-on-light">200</span>
                            </div>
                            <div style={{backgroundColor: 'var(--brand-primary-300)'}} className="color-swatch_item">
                                <span className="text-color-on-light">300</span>
                            </div>
                            <div style={{backgroundColor: 'var(--brand-primary-400)'}} className="color-swatch_item">
                                <span className="text-color-on-light">400</span>
                            </div>
                            <div style={{backgroundColor: 'var(--brand-primary)'}} className="color-swatch_item">
                                <span className="text-color-on-dark">Base</span>
                            </div>
                            <div style={{backgroundColor: 'var(--brand-primary-600)'}} className="color-swatch_item">
                                <span className="text-color-on-dark">600</span>
                            </div>
                            <div style={{backgroundColor: 'var(--brand-primary-700)'}} className="color-swatch_item">
                                <span className="text-color-on-dark">700</span>
                            </div>
                            <div style={{backgroundColor: 'var(--brand-primary-800)'}} className="color-swatch_item">
                                <span className="text-color-on-dark">800</span>
                            </div>
                            <div style={{backgroundColor: 'var(--brand-primary-950)'}} className="color-swatch_item">
                                <span className="text-color-on-dark">950</span>
                            </div>
                        </div>
                        <div className="color-swatch_grid mt-1">
                            <div style={{backgroundColor: 'var(--brand-primary-a12)'}} className="color-swatch_item">
                                <span>a12</span>
                            </div>
                            <div style={{backgroundColor: 'var(--brand-primary-a16)'}} className="color-swatch_item">
                                <span>a16</span>
                            </div>
                            <div style={{backgroundColor: 'var(--brand-primary-a24)'}} className="color-swatch_item">
                                <span>a24</span>
                            </div>
                            <div style={{backgroundColor: 'var(--brand-primary-a32)'}} className="color-swatch_item">
                                <span>a32</span>
                            </div>
                        </div>

                        <Heading type="h4" color="light" className="mt-2 mb-1">
                            Brand secondary
                        </Heading>
                        <div className="color-swatch_grid">
                            <div style={{backgroundColor: 'var(--brand-secondary-200)'}} className="color-swatch_item">
                                <span className="text-color-on-light">200</span>
                            </div>
                            <div style={{backgroundColor: 'var(--brand-secondary-300)'}} className="color-swatch_item">
                                <span className="text-color-on-light">300</span>
                            </div>
                            <div style={{backgroundColor: 'var(--brand-secondary-400)'}} className="color-swatch_item">
                                <span className="text-color-on-light">400</span>
                            </div>
                            <div style={{backgroundColor: 'var(--brand-secondary)'}} className="color-swatch_item">
                                <span className="text-color-on-dark">Base</span>
                            </div>
                            <div style={{backgroundColor: 'var(--brand-secondary-600)'}} className="color-swatch_item">
                                <span className="text-color-on-dark">600</span>
                            </div>
                            <div style={{backgroundColor: 'var(--brand-secondary-700)'}} className="color-swatch_item">
                                <span className="text-color-on-dark">700</span>
                            </div>
                            <div style={{backgroundColor: 'var(--brand-secondary-800)'}} className="color-swatch_item">
                                <span className="text-color-on-dark">800</span>
                            </div>
                            <div style={{backgroundColor: 'var(--brand-secondary-950)'}} className="color-swatch_item">
                                <span className="text-color-on-dark">950</span>
                            </div>
                        </div>
                        <div className="color-swatch_grid mt-1">
                            <div style={{backgroundColor: 'var(--brand-secondary-a12)'}} className="color-swatch_item">
                                <span>a12</span>
                            </div>
                            <div style={{backgroundColor: 'var(--brand-secondary-a16)'}} className="color-swatch_item">
                                <span>a16</span>
                            </div>
                            <div style={{backgroundColor: 'var(--brand-secondary-a24)'}} className="color-swatch_item">
                                <span>a24</span>
                            </div>
                            <div style={{backgroundColor: 'var(--brand-secondary-a32)'}} className="color-swatch_item">
                                <span>a32</span>
                            </div>
                        </div>

                        <hr />

                        <Heading type="h2" fontStyle="serif" color="light" weight="strong" className="mb-2 mt-5">
                            Primitives
                        </Heading>
                        <Heading type="h4" color="light" className="mb-2">
                            Neutral color
                        </Heading>
                        <div className="color-swatch_grid">
                            <div
                                style={{backgroundColor: 'var(--buoyant-grey-000)'}}
                                className="color-swatch_item text-color-on-light"
                            >
                                000
                            </div>
                            <div
                                style={{backgroundColor: 'var(--buoyant-grey-050)'}}
                                className="color-swatch_item text-color-on-light"
                            >
                                050
                            </div>
                            <div
                                style={{backgroundColor: 'var(--buoyant-grey-100)'}}
                                className="color-swatch_item text-color-on-light"
                            >
                                100
                            </div>
                            <div
                                style={{backgroundColor: 'var(--buoyant-grey-125)'}}
                                className="color-swatch_item text-color-on-light"
                            >
                                125
                            </div>
                            <div
                                style={{backgroundColor: 'var(--buoyant-grey-150)'}}
                                className="color-swatch_item text-color-on-light"
                            >
                                150
                            </div>
                            <div
                                style={{backgroundColor: 'var(--buoyant-grey-200)'}}
                                className="color-swatch_item text-color-on-light"
                            >
                                200
                            </div>
                            <div
                                style={{backgroundColor: 'var(--buoyant-grey-300)'}}
                                className="color-swatch_item text-color-on-light"
                            >
                                300
                            </div>
                            <div
                                style={{backgroundColor: 'var(--buoyant-grey-400)'}}
                                className="color-swatch_item text-color-on-light"
                            >
                                400
                            </div>
                            <div
                                style={{backgroundColor: 'var(--buoyant-grey-500)'}}
                                className="color-swatch_item text-color-on-dark"
                            >
                                500
                            </div>
                            <div
                                style={{backgroundColor: 'var(--buoyant-grey-600)'}}
                                className="color-swatch_item text-color-on-dark"
                            >
                                600
                            </div>
                            <div
                                style={{backgroundColor: 'var(--buoyant-grey-700)'}}
                                className="color-swatch_item text-color-on-dark"
                            >
                                700
                            </div>
                            <div
                                style={{backgroundColor: 'var(--buoyant-grey-800)'}}
                                className="color-swatch_item text-color-on-dark"
                            >
                                800
                            </div>
                            <div
                                style={{backgroundColor: 'var(--buoyant-grey-825)'}}
                                className="color-swatch_item text-color-on-dark"
                            >
                                825
                            </div>
                            <div
                                style={{backgroundColor: 'var(--buoyant-grey-850)'}}
                                className="color-swatch_item text-color-on-dark"
                            >
                                850
                            </div>
                            <div
                                style={{backgroundColor: 'var(--buoyant-grey-900)'}}
                                className="color-swatch_item text-color-on-dark"
                            >
                                900
                            </div>
                            <div
                                style={{backgroundColor: 'var(--buoyant-grey-950)'}}
                                className="color-swatch_item text-color-on-dark"
                            >
                                950
                            </div>
                            <div
                                style={{backgroundColor: 'var(--buoyant-grey-999)'}}
                                className="color-swatch_item text-color-on-dark"
                            >
                                999
                            </div>
                        </div>
                        <Heading type="h4" color="light" className="mt-3 mb-1-5">
                            Neutral with alpha
                        </Heading>
                        <div className="d-flex flex-col">
                            <div className="color-swatch_grid">
                                <div
                                    style={{backgroundColor: 'var(--buoyant-grey-200-a12)'}}
                                    className="color-swatch_item"
                                >
                                    200 a12
                                </div>
                                <div
                                    style={{backgroundColor: 'var(--buoyant-grey-200-a16)'}}
                                    className="color-swatch_item"
                                >
                                    200 a16
                                </div>
                                <div
                                    style={{backgroundColor: 'var(--buoyant-grey-200-a24)'}}
                                    className="color-swatch_item"
                                >
                                    200 a24
                                </div>
                                <div
                                    style={{backgroundColor: 'var(--buoyant-grey-200-a32)'}}
                                    className="color-swatch_item"
                                >
                                    200 a32
                                </div>
                                <div
                                    style={{backgroundColor: 'var(--buoyant-grey-200-a40)'}}
                                    className="color-swatch_item"
                                >
                                    200 a40
                                </div>
                            </div>
                            <div className="color-swatch_grid">
                                <div
                                    style={{backgroundColor: 'var(--buoyant-grey-300-a12)'}}
                                    className="color-swatch_item"
                                >
                                    300 a12
                                </div>
                                <div
                                    style={{backgroundColor: 'var(--buoyant-grey-300-a16)'}}
                                    className="color-swatch_item"
                                >
                                    300 a16
                                </div>
                                <div
                                    style={{backgroundColor: 'var(--buoyant-grey-300-a24)'}}
                                    className="color-swatch_item"
                                >
                                    300 a24
                                </div>
                                <div
                                    style={{backgroundColor: 'var(--buoyant-grey-300-a32)'}}
                                    className="color-swatch_item"
                                >
                                    300 a32
                                </div>
                                <div
                                    style={{backgroundColor: 'var(--buoyant-grey-300-a40)'}}
                                    className="color-swatch_item"
                                >
                                    300 a40
                                </div>
                            </div>
                            <div className="color-swatch_grid">
                                <div
                                    style={{backgroundColor: 'var(--buoyant-grey-400-a12)'}}
                                    className="color-swatch_item"
                                >
                                    400 a12
                                </div>
                                <div
                                    style={{backgroundColor: 'var(--buoyant-grey-400-a16)'}}
                                    className="color-swatch_item"
                                >
                                    400 a16
                                </div>
                                <div
                                    style={{backgroundColor: 'var(--buoyant-grey-400-a24)'}}
                                    className="color-swatch_item"
                                >
                                    400 a24
                                </div>
                                <div
                                    style={{backgroundColor: 'var(--buoyant-grey-400-a32)'}}
                                    className="color-swatch_item"
                                >
                                    400 a32
                                </div>
                                <div
                                    style={{backgroundColor: 'var(--buoyant-grey-400-a40)'}}
                                    className="color-swatch_item"
                                >
                                    400 a40
                                </div>
                            </div>
                            <div className="color-swatch_grid">
                                <div
                                    style={{backgroundColor: 'var(--buoyant-grey-500-a12)'}}
                                    className="color-swatch_item"
                                >
                                    500 a12
                                </div>
                                <div
                                    style={{backgroundColor: 'var(--buoyant-grey-500-a16)'}}
                                    className="color-swatch_item"
                                >
                                    500 a16
                                </div>
                                <div
                                    style={{backgroundColor: 'var(--buoyant-grey-500-a24)'}}
                                    className="color-swatch_item"
                                >
                                    500 a24
                                </div>
                                <div
                                    style={{backgroundColor: 'var(--buoyant-grey-500-a32)'}}
                                    className="color-swatch_item"
                                >
                                    500 a32
                                </div>
                                <div
                                    style={{backgroundColor: 'var(--buoyant-grey-500-a40)'}}
                                    className="color-swatch_item"
                                >
                                    500 a40
                                </div>
                            </div>
                            <div className="color-swatch_grid">
                                <div
                                    style={{backgroundColor: 'var(--buoyant-grey-600-a12)'}}
                                    className="color-swatch_item"
                                >
                                    600 a12
                                </div>
                                <div
                                    style={{backgroundColor: 'var(--buoyant-grey-600-a16)'}}
                                    className="color-swatch_item"
                                >
                                    600 a16
                                </div>
                                <div
                                    style={{backgroundColor: 'var(--buoyant-grey-600-a24)'}}
                                    className="color-swatch_item"
                                >
                                    600 a24
                                </div>
                                <div
                                    style={{backgroundColor: 'var(--buoyant-grey-600-a32)'}}
                                    className="color-swatch_item"
                                >
                                    600 a32
                                </div>
                                <div
                                    style={{backgroundColor: 'var(--buoyant-grey-600-a40)'}}
                                    className="color-swatch_item"
                                >
                                    600 a40
                                </div>
                            </div>
                        </div>

                        <Heading type="h4" color="light" className="mt-2">
                            Core colors
                        </Heading>

                        <div className="d-flex flex-col gap-1">
                            <div className="color-swatch_grid">
                                <div className="color-swatch_item">100</div>
                                <div className="color-swatch_item">200</div>
                                <div className="color-swatch_item">300</div>
                                <div className="color-swatch_item">400</div>
                                <div className="color-swatch_item">500</div>
                                <div className="color-swatch_item">600</div>
                                <div className="color-swatch_item">700</div>
                                <div className="color-swatch_item">800</div>
                            </div>
                            <div className="color-swatch_grid">
                                <div
                                    style={{backgroundColor: 'var(--morocco-red-100)'}}
                                    className="color-swatch_item"
                                ></div>
                                <div
                                    style={{backgroundColor: 'var(--morocco-red-200)'}}
                                    className="color-swatch_item"
                                ></div>
                                <div
                                    style={{backgroundColor: 'var(--morocco-red-300)'}}
                                    className="color-swatch_item"
                                ></div>
                                <div
                                    style={{backgroundColor: 'var(--morocco-red-400)'}}
                                    className="color-swatch_item"
                                ></div>
                                <div
                                    style={{backgroundColor: 'var(--morocco-red-500)'}}
                                    className="color-swatch_item"
                                ></div>
                                <div
                                    style={{backgroundColor: 'var(--morocco-red-600)'}}
                                    className="color-swatch_item"
                                ></div>
                                <div
                                    style={{backgroundColor: 'var(--morocco-red-700)'}}
                                    className="color-swatch_item"
                                ></div>
                                <div
                                    style={{backgroundColor: 'var(--morocco-red-800)'}}
                                    className="color-swatch_item"
                                ></div>
                            </div>
                            <div className="color-swatch_grid">
                                <div
                                    style={{backgroundColor: 'var(--syrah-soil-100)'}}
                                    className="color-swatch_item"
                                ></div>
                                <div
                                    style={{backgroundColor: 'var(--syrah-soil-200)'}}
                                    className="color-swatch_item"
                                ></div>
                                <div
                                    style={{backgroundColor: 'var(--syrah-soil-300)'}}
                                    className="color-swatch_item"
                                ></div>
                                <div
                                    style={{backgroundColor: 'var(--syrah-soil-400)'}}
                                    className="color-swatch_item"
                                ></div>
                                <div
                                    style={{backgroundColor: 'var(--syrah-soil-500)'}}
                                    className="color-swatch_item"
                                ></div>
                                <div
                                    style={{backgroundColor: 'var(--syrah-soil-600)'}}
                                    className="color-swatch_item"
                                ></div>
                                <div
                                    style={{backgroundColor: 'var(--syrah-soil-700)'}}
                                    className="color-swatch_item"
                                ></div>
                                <div
                                    style={{backgroundColor: 'var(--syrah-soil-800)'}}
                                    className="color-swatch_item"
                                ></div>
                            </div>
                            <div className="color-swatch_grid">
                                <div
                                    style={{backgroundColor: 'var(--green-brier-100)'}}
                                    className="color-swatch_item"
                                ></div>
                                <div
                                    style={{backgroundColor: 'var(--green-brier-200)'}}
                                    className="color-swatch_item"
                                ></div>
                                <div
                                    style={{backgroundColor: 'var(--green-brier-300)'}}
                                    className="color-swatch_item"
                                ></div>
                                <div
                                    style={{backgroundColor: 'var(--green-brier-400)'}}
                                    className="color-swatch_item"
                                ></div>
                                <div
                                    style={{backgroundColor: 'var(--green-brier-500)'}}
                                    className="color-swatch_item"
                                ></div>
                                <div
                                    style={{backgroundColor: 'var(--green-brier-600)'}}
                                    className="color-swatch_item"
                                ></div>
                                <div
                                    style={{backgroundColor: 'var(--green-brier-700)'}}
                                    className="color-swatch_item"
                                ></div>
                                <div
                                    style={{backgroundColor: 'var(--green-brier-800)'}}
                                    className="color-swatch_item"
                                ></div>
                            </div>
                            <div className="color-swatch_grid">
                                <div
                                    style={{backgroundColor: 'var(--sorcerer-blue-100)'}}
                                    className="color-swatch_item"
                                ></div>
                                <div
                                    style={{backgroundColor: 'var(--sorcerer-blue-200)'}}
                                    className="color-swatch_item"
                                ></div>
                                <div
                                    style={{backgroundColor: 'var(--sorcerer-blue-300)'}}
                                    className="color-swatch_item"
                                ></div>
                                <div
                                    style={{backgroundColor: 'var(--sorcerer-blue-400)'}}
                                    className="color-swatch_item"
                                ></div>
                                <div
                                    style={{backgroundColor: 'var(--sorcerer-blue-500)'}}
                                    className="color-swatch_item"
                                ></div>
                                <div
                                    style={{backgroundColor: 'var(--sorcerer-blue-600)'}}
                                    className="color-swatch_item"
                                ></div>
                                <div
                                    style={{backgroundColor: 'var(--sorcerer-blue-700)'}}
                                    className="color-swatch_item"
                                ></div>
                                <div
                                    style={{backgroundColor: 'var(--sorcerer-blue-800)'}}
                                    className="color-swatch_item"
                                ></div>
                            </div>
                            <div className="color-swatch_grid">
                                <div
                                    style={{backgroundColor: 'var(--palatinate-blue-100)'}}
                                    className="color-swatch_item"
                                ></div>
                                <div
                                    style={{backgroundColor: 'var(--palatinate-blue-200)'}}
                                    className="color-swatch_item"
                                ></div>
                                <div
                                    style={{backgroundColor: 'var(--palatinate-blue-300)'}}
                                    className="color-swatch_item"
                                ></div>
                                <div
                                    style={{backgroundColor: 'var(--palatinate-blue-400)'}}
                                    className="color-swatch_item"
                                ></div>
                                <div
                                    style={{backgroundColor: 'var(--palatinate-blue-500)'}}
                                    className="color-swatch_item"
                                ></div>
                                <div
                                    style={{backgroundColor: 'var(--palatinate-blue-600)'}}
                                    className="color-swatch_item"
                                ></div>
                                <div
                                    style={{backgroundColor: 'var(--palatinate-blue-700)'}}
                                    className="color-swatch_item"
                                ></div>
                                <div
                                    style={{backgroundColor: 'var(--palatinate-blue-800)'}}
                                    className="color-swatch_item"
                                ></div>
                            </div>
                            <div className="color-swatch_grid">
                                <div
                                    style={{backgroundColor: 'var(--purple-spot-100)'}}
                                    className="color-swatch_item"
                                ></div>
                                <div
                                    style={{backgroundColor: 'var(--purple-spot-200)'}}
                                    className="color-swatch_item"
                                ></div>
                                <div
                                    style={{backgroundColor: 'var(--purple-spot-300)'}}
                                    className="color-swatch_item"
                                ></div>
                                <div
                                    style={{backgroundColor: 'var(--purple-spot-400)'}}
                                    className="color-swatch_item"
                                ></div>
                                <div
                                    style={{backgroundColor: 'var(--purple-spot-500)'}}
                                    className="color-swatch_item"
                                ></div>
                                <div
                                    style={{backgroundColor: 'var(--purple-spot-600)'}}
                                    className="color-swatch_item"
                                ></div>
                                <div
                                    style={{backgroundColor: 'var(--purple-spot-700)'}}
                                    className="color-swatch_item"
                                ></div>
                                <div
                                    style={{backgroundColor: 'var(--purple-spot-800)'}}
                                    className="color-swatch_item"
                                ></div>
                            </div>
                            <div className="color-swatch_grid">
                                <div
                                    style={{backgroundColor: 'var(--blissful-berry-100)'}}
                                    className="color-swatch_item"
                                ></div>
                                <div
                                    style={{backgroundColor: 'var(--blissful-berry-200)'}}
                                    className="color-swatch_item"
                                ></div>
                                <div
                                    style={{backgroundColor: 'var(--blissful-berry-300)'}}
                                    className="color-swatch_item"
                                ></div>
                                <div
                                    style={{backgroundColor: 'var(--blissful-berry-400)'}}
                                    className="color-swatch_item"
                                ></div>
                                <div
                                    style={{backgroundColor: 'var(--blissful-berry-500)'}}
                                    className="color-swatch_item"
                                ></div>
                                <div
                                    style={{backgroundColor: 'var(--blissful-berry-600)'}}
                                    className="color-swatch_item"
                                ></div>
                                <div
                                    style={{backgroundColor: 'var(--blissful-berry-700)'}}
                                    className="color-swatch_item"
                                ></div>
                                <div
                                    style={{backgroundColor: 'var(--blissful-berry-800)'}}
                                    className="color-swatch_item"
                                ></div>
                            </div>
                        </div>

                        <Heading type="h4" color="light" className="mt-3">
                            Core colors with alpha
                        </Heading>

                        <div className="d-flex flex-col gap-1">
                            <div className="color-swatch_grid">
                                <div className="color-swatch_item">a12</div>
                                <div className="color-swatch_item">a16</div>
                                <div className="color-swatch_item">a24</div>
                                <div className="color-swatch_item">a32</div>
                            </div>
                            <div className="color-swatch_grid">
                                <div
                                    style={{backgroundColor: 'var(--morocco-red-500-a12)'}}
                                    className="color-swatch_item"
                                ></div>
                                <div
                                    style={{backgroundColor: 'var(--morocco-red-500-a16)'}}
                                    className="color-swatch_item"
                                ></div>
                                <div
                                    style={{backgroundColor: 'var(--morocco-red-500-a24)'}}
                                    className="color-swatch_item"
                                ></div>
                                <div
                                    style={{backgroundColor: 'var(--morocco-red-500-a32)'}}
                                    className="color-swatch_item"
                                ></div>
                            </div>
                            <div className="color-swatch_grid">
                                <div
                                    style={{backgroundColor: 'var(--syrah-soil-500-a12)'}}
                                    className="color-swatch_item"
                                ></div>
                                <div
                                    style={{backgroundColor: 'var(--syrah-soil-500-a16)'}}
                                    className="color-swatch_item"
                                ></div>
                                <div
                                    style={{backgroundColor: 'var(--syrah-soil-500-a24)'}}
                                    className="color-swatch_item"
                                ></div>
                                <div
                                    style={{backgroundColor: 'var(--syrah-soil-500-a32)'}}
                                    className="color-swatch_item"
                                ></div>
                            </div>
                            <div className="color-swatch_grid">
                                <div
                                    style={{backgroundColor: 'var(--green-brier-500-a12)'}}
                                    className="color-swatch_item"
                                ></div>
                                <div
                                    style={{backgroundColor: 'var(--green-brier-500-a16)'}}
                                    className="color-swatch_item"
                                ></div>
                                <div
                                    style={{backgroundColor: 'var(--green-brier-500-a24)'}}
                                    className="color-swatch_item"
                                ></div>
                                <div
                                    style={{backgroundColor: 'var(--green-brier-500-a32)'}}
                                    className="color-swatch_item"
                                ></div>
                            </div>
                            <div className="color-swatch_grid">
                                <div
                                    style={{backgroundColor: 'var(--sorcerer-blue-500-a12)'}}
                                    className="color-swatch_item"
                                ></div>
                                <div
                                    style={{backgroundColor: 'var(--sorcerer-blue-500-a16)'}}
                                    className="color-swatch_item"
                                ></div>
                                <div
                                    style={{backgroundColor: 'var(--sorcerer-blue-500-a24)'}}
                                    className="color-swatch_item"
                                ></div>
                                <div
                                    style={{backgroundColor: 'var(--sorcerer-blue-500-a32)'}}
                                    className="color-swatch_item"
                                ></div>
                            </div>
                            <div className="color-swatch_grid">
                                <div
                                    style={{backgroundColor: 'var(--palatinate-blue-500-a12)'}}
                                    className="color-swatch_item"
                                ></div>
                                <div
                                    style={{backgroundColor: 'var(--palatinate-blue-500-a16)'}}
                                    className="color-swatch_item"
                                ></div>
                                <div
                                    style={{backgroundColor: 'var(--palatinate-blue-500-a24)'}}
                                    className="color-swatch_item"
                                ></div>
                                <div
                                    style={{backgroundColor: 'var(--palatinate-blue-500-a32)'}}
                                    className="color-swatch_item"
                                ></div>
                            </div>
                            <div className="color-swatch_grid">
                                <div
                                    style={{backgroundColor: 'var(--purple-spot-500-a12)'}}
                                    className="color-swatch_item"
                                ></div>
                                <div
                                    style={{backgroundColor: 'var(--purple-spot-500-a16)'}}
                                    className="color-swatch_item"
                                ></div>
                                <div
                                    style={{backgroundColor: 'var(--purple-spot-500-a24)'}}
                                    className="color-swatch_item"
                                ></div>
                                <div
                                    style={{backgroundColor: 'var(--purple-spot-500-a32)'}}
                                    className="color-swatch_item"
                                ></div>
                            </div>
                            <div className="color-swatch_grid">
                                <div
                                    style={{backgroundColor: 'var(--blissful-berry-500-a12)'}}
                                    className="color-swatch_item"
                                ></div>
                                <div
                                    style={{backgroundColor: 'var(--blissful-berry-500-a16)'}}
                                    className="color-swatch_item"
                                ></div>
                                <div
                                    style={{backgroundColor: 'var(--blissful-berry-500-a24)'}}
                                    className="color-swatch_item"
                                ></div>
                                <div
                                    style={{backgroundColor: 'var(--blissful-berry-500-a32)'}}
                                    className="color-swatch_item"
                                ></div>
                            </div>
                        </div>
                        <hr />
                    </Components.MainPanel>
                    {/* MAIN CONTENT (Monitoring) */}
                </Components.LayoutContainer>
            </Components.Layout>
        );
    }
}
