import React from 'react';
import { Carousel as PrimeCarousel } from '@superdesk/primereact/carousel';

interface IProps {
    id?: string;
    className?: string;
    theme?: string;
    page?: number;
    items: any;
    circular?: boolean;
    autoplayInterval?: number;
    numVisible?: number;
    numScroll?: number;
    responsiveOptions?: Array<IPropsResponsive>;
    headerTemplate?: JSX.Element;
    footerTemplate?: JSX.Element;
    itemTemplate(item: any): JSX.Element;
    onPageChange?(e: {page: number}): void;
}

interface IPropsResponsive {
    breakpoint: string;
    numVisible: number;
    numScroll: number;
}

export class Carousel extends React.Component<IProps, {}> {
    render() {
        return <div style={{display: 'content'}}
            data-theme={this.props.theme !== 'dark' ? '' : 'dark-ui' }
            className={this.props.className}>
            <PrimeCarousel
                id={this.props.id}
                value={this.props.items}
                numVisible={this.props.numVisible}
                numScroll={this.props.numScroll}
                responsiveOptions={this.props.responsiveOptions}
                itemTemplate={this.props.itemTemplate}
                header={this.props.headerTemplate}
                footer={this.props.footerTemplate}
                indicatorsContentClassName='sd-thumb-carousel__indicators'
                onPageChange={this.props.onPageChange}
            />
        </div>;
    }
}
