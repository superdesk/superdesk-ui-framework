import * as React from 'react';
interface IImage {
    src: string;
    alt?: string;
}
interface IProps {
    images: Array<IImage>;
    title?: string;
    description?: string;
    /** total number of images in the gallery, fallback to images.length */
    imageCount?: number;
    /** header metadata section */
    headerMeta?: JSX.Element;
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
export declare class Carousel extends React.PureComponent<IProps, {}> {
    render(): JSX.Element;
}
export {};
