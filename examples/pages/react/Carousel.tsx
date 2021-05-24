import * as React from "react";
import * as Markup from "../../js/react";
import { Carousel, Icon, Badge, IconButton, PropsList, Prop } from "../../../app-typescript";

export default class CarouselDoc extends React.Component {
    render() {

        const responsiveOptions = [
            {
                breakpoint: '1024px',
                numVisible: 3,
                numScroll: 3
            },
            {
                breakpoint: '600px',
                numVisible: 3,
                numScroll: 3
            },
            {
                breakpoint: '480px',
                numVisible: 3,
                numScroll: 3
            }
        ];

        const products = [
            { "id": "1", "image": "/carousel-thumb--01.jpg", "cover": true },
            { "id": "1", "image": "/carousel-thumb--02.jpg" },
            { "id": "1", "image": "/d_trump_2.jpg" },
            { "id": "1", "image": "/carousel-thumb--01.jpg" },
            { "id": "1", "image": "/carousel-thumb--02.jpg" },
            { "id": "1", "image": "/d_trump_2.jpg" },
        ];

        const productTemplate = (product: any) => {
            return (
                <div className="sd-thumb-carousel__item">
                    {product.cover ?
                        <div className="sd-thumb-carousel__cover-image-icon">
                            <Icon name="star" />
                        </div> : null}
                    <div className="sd-thumb-carousel__item-inner">
                        <img src={product.image} alt="test" />
                    </div>
                </div>
            );
        }

        const headerTemplate = (
            <div className="sd-thumb-carousel__header">
                <h4 className="sd-thumb-carousel__heading">Mountain bike Championships gallery</h4>
                <Badge text='6' type='light' />
                <div className="sd-thumb-carousel__header-block--r">
                    <time>Today, 08. April 14:25</time>
                    <IconButton icon="trash" ariaValue="Remove" onClick={() => false} />
                </div>
            </div>
        );

        const footerTemplate = (
            <div className="sd-thumb-carousel__description">
                Nulla vitae elit libero, a pharetra augue. Nulla vitae elit libero, a pharetra augue.
                Donec id elit non mi porta gravida at eget metus. Etiam porta sem malesuada magna mollis euismod.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cum sociis natoque penatibus et magnis dis
                parturient montes, nascetur ridiculus mus.
            </div>
        );

        return (
            <section className="docs-page__container">
                <h2 className="docs-page__h2">Carousel</h2>
                <Markup.ReactMarkupCodePreview>{`
                    <Carousel items={products} itemTemplate={productTemplate}></Carousel>
                `}
                </Markup.ReactMarkupCodePreview>

                <h3 className="docs-page__h3">Basic Carousel</h3>
                <p className="docs-page__paragraph">
                    This is minimal required configuration for Carousel. You need to define <code>items</code> as array of image links or array of objects with some extra configuration per item.
                    Second required thing is <code>itemTemplate</code> which should be defined as function returning html template for single item.
                </p>
                <Markup.ReactMarkup>
                    <Markup.ReactMarkupPreview>
                        <Carousel items={products} itemTemplate={productTemplate} theme="dark"></Carousel>
                    </Markup.ReactMarkupPreview>
                    <Markup.ReactMarkupCode>{`
                        <Carousel items={products} itemTemplate={productTemplate}></Carousel>

                        const products = [
                            { "id": "1", "image": "/carousel-thumb--01.jpg", "cover": true },
                            { "id": "2", "image": "/carousel-thumb--02.jpg" },
                            { "id": "3", "image": "/d_trump_2.jpg" },
                            { "id": "4", "image": "/carousel-thumb--01.jpg" },
                            { "id": "5", "image": "/carousel-thumb--02.jpg" },
                            { "id": "6", "image": "/d_trump_2.jpg" },
                        ];

                        const productTemplate = (item: any) => {
                            return (
                                <div className="sd-thumb-carousel__item">
                                    <div className="sd-thumb-carousel__item-inner">
                                        <img src={item.image} alt="test" />
                                    </div>
                                </div>
                            );
                        }
                    `}
                    </Markup.ReactMarkupCode>
                </Markup.ReactMarkup>

                <h3 className="docs-page__h3">Full Carousel</h3>
                <p className="docs-page__paragraph">
                    This is carousel with all possible options (<code>header</code>, <code>footer</code>, <code>multi items</code>...)
                </p>
                <Markup.ReactMarkup>
                    <Markup.ReactMarkupPreview>
                        <Carousel
                            items={products}
                            itemTemplate={productTemplate}
                            headerTemplate={headerTemplate}
                            footerTemplate={footerTemplate}
                            numVisible={3}
                            numScroll={3}
                            theme="dark"
                            responsiveOptions={responsiveOptions}>
                        </Carousel>
                    </Markup.ReactMarkupPreview>
                    <Markup.ReactMarkupCode>{`
                        <Carousel
                            items={products}
                            itemTemplate={productTemplate}
                            headerTemplate={headerTemplate}
                            footerTemplate={footerTemplate}
                            numVisible={3}
                            numScroll={3}
                            theme="dark"
                            responsiveOptions={responsiveOptions}>
                        </Carousel>

                        const products = [
                            { "id": "1", "image": "/carousel-thumb--01.jpg" },
                            { "id": "2", "image": "/carousel-thumb--02.jpg" },
                            { "id": "3", "image": "/d_trump_2.jpg" },
                            { "id": "4", "image": "/carousel-thumb--01.jpg" },
                            { "id": "5", "image": "/carousel-thumb--02.jpg" },
                            { "id": "6", "image": "/d_trump_2.jpg" },
                        ];

                        const productTemplate = (item: any) => {
                            return (
                                <div className="sd-thumb-carousel__item">
                                    <div className="sd-thumb-carousel__item-inner">
                                        <img src={item.image} alt="test" />
                                    </div>
                                </div>
                            );
                        }

                        const headerTemplate = (
                            <div className="sd-thumb-carousel__header">
                                <h4 className="sd-thumb-carousel__heading">Mountain bike Championships gallery</h4>
                                <Badge text='6' type='light' />
                                <div className="sd-thumb-carousel__header-block--r">
                                    <time>Today, 08. April 14:25</time>
                                    <IconButton icon="trash" ariaValue="Remove" onClick={() => false} />
                                </div>
                            </div>
                        );
                
                        const footerTemplate = (
                            <div className="sd-thumb-carousel__description">
                                Nulla vitae elit libero, a pharetra augue. Nulla vitae elit libero, a pharetra augue.
                                Donec id elit non mi porta gravida at eget metus. Etiam porta sem malesuada magna mollis euismod.
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cum sociis natoque penatibus et magnis dis
                                parturient montes, nascetur ridiculus mus.
                            </div>
                        );

                        const responsiveOptions = [
                            {
                                breakpoint: '1024px',
                                numVisible: 3,
                                numScroll: 3
                            },
                            {
                                breakpoint: '600px',
                                numVisible: 3,
                                numScroll: 3
                            },
                            {
                                breakpoint: '480px',
                                numVisible: 3,
                                numScroll: 3
                            }
                        ];
                    `}
                    </Markup.ReactMarkupCode>
                </Markup.ReactMarkup>

                <h3 className="docs-page__h3">Props</h3>
                <PropsList>
                    <Prop name='id' isRequered={false} type='string' default='null' description='Unique identifier of the element' />
                    <Prop name='className' isRequered={false} type='string' default='null' description='Style class of the component' />
                    <Prop name='theme' isRequered={false} type='light | dark' default='light' description='Item style' />
                    <Prop name='page' isRequered={false} type='number' default='0' description='Index of the first item.' />
                    <Prop name='headerTemplate' isRequered={false} type='element' default='null' description='Label of header' />
                    <Prop name='footerTemplate' isRequered={false} type='element' default='null' description='Label of footer' />
                    <Prop name='items' isRequered={true} type='object[]' default='null' description='An array of objects to display' />
                    <Prop name='circular' isRequered={false} type='boolean' default='false' description='Defines if scrolling would be infinite' />
                    <Prop name='autoplayInterval' isRequered={false} type='number' default='0' description='Time in milliseconds to scroll items automatically' />
                    <Prop name='numVisible' isRequered={false} type='number' default='1' description='Number of items per page' />
                    <Prop name='numScroll' isRequered={false} type='number' default='1' description='Number of items to scroll' />
                    <Prop name='responsiveOptions' isRequered={false} type='object[]' default='null' description='An array of options for responsive design' />
                    <Prop name='itemTemplate' isRequered={true} type='function' default='null' description='Function that gets an item in the value and returns the content for it' />
                    <Prop name='onPageChange' isRequered={false} type='function' default='null' description='Callback to invoke after scroll' />
                </PropsList>
            </section>
        )
    }
}
