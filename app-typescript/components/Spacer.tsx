import * as React from 'react';
import classNames from 'classnames';

export interface IPropsSpacer {
    h?: boolean; // horizontal
    v?: boolean; // vertical
    gap: '0' | '4' | '8' | '16' | '32' | '64';
    justifyContent?: 'start' | 'end' | 'center' | 'space-around' | 'space-between' | 'space-evenly' | 'stretch';
    alignItems?: 'start' | 'end' | 'center' | 'stretch';
    noGrow?: boolean;

    /**
     * Will not wrap children in div elements.
     * `noGrow` prop would then not be relevant.
     */
    noWrap?: boolean;

    style?: React.CSSProperties;

    children: Array<React.ReactNode>;
}

export class Spacer extends React.PureComponent<IPropsSpacer> {
    constructor(props: IPropsSpacer) {
        super(props);
        this.state = {
            items: [],
        };

    }
    render() {
        const {h, v, gap, justifyContent, alignItems, noGrow, noWrap} = this.props;

        const justifyContentDefault: IPropsSpacer['justifyContent'] = h ? 'space-between' : 'start';
        const alignItemsDefault: IPropsSpacer['alignItems'] = h ? 'center' : 'start';

        return (
            <div
                style={{
                    display: 'flex',
                    flexDirection: v ? 'column' : 'row',
                    gap: `${gap}px`,
                    justifyContent: justifyContent ?? justifyContentDefault,
                    alignItems: alignItems ?? alignItemsDefault,
                    width: noGrow === true ? undefined : '100%',
                    ...(this.props.style ?? {}),
                }}
            >
                {this.props.children.map((el, i) => noWrap ? el : (
                    <div
                        key={i}
                        style={{
                            width: noGrow === true ? undefined : '100%',
                        }}
                    >
                        {el}
                    </div>
                ))}
            </div>
        );
    }
}

/**
 * Renders a standalone spacing block - similar to <br />
 */
export interface ISpacerBlock {
    h?: boolean; // horizontal
    v?: boolean; // vertical
    gap: '4' | '8' | '16' | '32' | '64';
}

export class SpacerBlock extends React.PureComponent<ISpacerBlock> {
    render() {
        const {gap, h, v} = this.props;

        return (
            <span
                style={{
                    display: h === true ? 'inline-block' : 'block',
                    width: h === true ? `${gap}px` : undefined,
                    height: v === true ? `${gap}px` : undefined,
                }}
            />
        );
    }
}
