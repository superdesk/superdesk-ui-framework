import * as React from 'react';
import { Carousel as PrimeCarousel } from '@superdesk/primereact/carousel';
import { Badge } from './Badge';

interface IImage {
    src: string;
    alt: string;
}

interface IProps {
    images: Array<IImage>;
    title?: string;
    description?: string;
    imageCount?: number;
    headerActions?: JSX.Element;
    id?: string;
    className?: string;
    theme?: string;
    numVisible?: number;
    numScroll?: number;
    page?: number;
    circular?: boolean;
    autoplayInterval?: number;
    responsiveOptions?: Array<IPropsResponsive>;
    onPageChange?(e: {page: number}): void;
}

interface IPropsResponsive {
    breakpoint: string;
    numVisible: number;
    numScroll: number;
}

export class Carousel extends React.PureComponent<IProps, {}> {
    render() {

        const header = (
            <div className="sd-thumb-carousel__header">
                {this.props.title && (
                    <h4 className="sd-thumb-carousel__heading">{this.props.title}</h4>
                )}
                {this.props.imageCount && (
                    <Badge text={'' + this.props.imageCount} type='light' />
                )}
                {this.props.headerActions && (
                    <div className="sd-thumb-carousel__header-block--r">
                        {this.props.headerActions}
                    </div>
                )}
            </div>
        );

        const footer = this.props.description ? (
            <div className="sd-thumb-carousel__description">
                {this.props.description}
            </div>
        ) : null;

        const itemTemplate = (props: IImage) => (
            <div className="sd-thumb-carousel__item">
                <div className="sd-thumb-carousel__item-inner">
                    <img src={props.src} alt={props.alt} />
                </div>
            </div>
        );

        return <div style={{display: 'content'}}
            data-theme={this.props.theme !== 'dark' ? '' : 'dark-ui' }
            className={this.props.className}>
            <PrimeCarousel
                id={this.props.id}
                value={this.props.images}
                numVisible={this.props.numVisible}
                numScroll={this.props.numScroll}
                responsiveOptions={this.props.responsiveOptions}
                itemTemplate={itemTemplate}
                header={header}
                footer={footer}
                indicatorsContentClassName='sd-thumb-carousel__indicators'
                onPageChange={this.props.onPageChange}
            />
        </div>;
    }
}
