import * as React from 'react';
interface IProps {
    illustration: 'headlines' | 'keywords' | 'optimise' | 'summary' | 'translate';
}
export declare class SvgIconIllustration extends React.PureComponent<IProps> {
    renderSVG(): JSX.Element | null;
    render(): JSX.Element;
}
export {};
