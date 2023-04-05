import * as React from "react";
import * as Markup from "../../js/react";
import { Carousel, IconButton, PropsList, Prop } from "../../../app-typescript";

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

        const images = [
            { "src": "/carousel-thumb--01.jpg"},
            { "src": "/carousel-thumb--02.jpg" },
            { "src": "/d_trump_2.jpg" },
            { "src": "/carousel-thumb--01.jpg" },
            { "src": "/carousel-thumb--02.jpg" },
            { "src": "/d_trump_2.jpg" },
        ];

        return (
            <section className="docs-page__container">
                <h2 className="docs-page__h2">Carousel</h2>
                <Markup.ReactMarkupCodePreview>{`
                    <Carousel images={images}></Carousel>
                `}
                </Markup.ReactMarkupCodePreview>

                <h3 className="docs-page__h3">Basic Carousel</h3>
                <p className="docs-page__paragraph">
                    This is minimal required configuration for Carousel. You need to define <code>images</code> as array of image links.
                </p>
                <Markup.ReactMarkup>
                    <Markup.ReactMarkupPreview>
                        <Carousel images={images}></Carousel>
                    </Markup.ReactMarkupPreview>
                    <Markup.ReactMarkupCode>{`
                        const images = ${JSON.stringify(images, null, 2)};
<Carousel images={images}></Carousel>
                    `}</Markup.ReactMarkupCode>
                </Markup.ReactMarkup>

                <h3 className="docs-page__h3">Full Carousel</h3>
                <p className="docs-page__paragraph">
                    This is carousel with all possible options (<code>title</code>, <code>description</code>, <code>actions</code>...)
                </p>
                <Markup.ReactMarkup>
                    <Markup.ReactMarkupPreview>
                        <Carousel
                            images={images}
                            title={"Mountain bike Championships gallery"}
                            description={`
                                Nulla vitae elit libero, a pharetra augue. Nulla vitae elit libero, a pharetra augue.
                                Donec id elit non mi porta gravida at eget metus. Etiam porta sem malesuada magna mollis euismod.
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cum sociis natoque penatibus et magnis dis
                                parturient montes, nascetur ridiculus mus.
                            `}
                            headerMeta={(
                                <>
                                    <time>Today, 08. April 14:25</time>
                                    <IconButton icon="trash" ariaValue="Remove" onClick={() => false} />
                                </>
                            )}
                            numVisible={3}
                            numScroll={3}
                            theme="dark"
                            responsiveOptions={responsiveOptions}>
                        </Carousel>
                    </Markup.ReactMarkupPreview>
                    <Markup.ReactMarkupCode>{`
                        <Carousel
                            images={images}
                            title={"Mountain bike Championships gallery"}
                            description={\`
                                Nulla vitae elit libero, a pharetra augue. Nulla vitae elit libero, a pharetra augue.
                                Donec id elit non mi porta gravida at eget metus. Etiam porta sem malesuada magna mollis euismod.
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cum sociis natoque penatibus et magnis dis
                                parturient montes, nascetur ridiculus mus.
                            \`}
                            headerMeta={(
                                <>
                                    <time>Today, 08. April 14:25</time>
                                    <IconButton icon="trash" ariaValue="Remove" onClick={() => false} />
                                </>
                            )}
                            numVisible={3}
                            numScroll={3}
                            theme="dark"
                            responsiveOptions={responsiveOptions}>
                        </Carousel>

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
                    <Prop name='images' isRequired={true} type='Array<{src: string; alt?: string;}' default='null' description='An array of images to display' />
                    <Prop name='title' isRequired={false} type='string' default='null' description='Gallery title' />
                    <Prop name='description' isRequired={false} type='string' default='null' description='Gallery description' />
                    <Prop name='imageCount' isRequired={false} type='number' default='null' description='If there are more images in gallery than what is visible you can set total count here.' />
                    <Prop name='headerMeta' isRequired={false} type='JSX.Element' default='null' description='Additional metadata section displayed top right if provided' />
                    <Prop name='id' isRequired={false} type='string' default='images.length' description='Unique identifier of the element' />
                    <Prop name='className' isRequired={false} type='string' default='null' description='Style class of the component' />
                    <Prop name='theme' isRequired={false} type='light | dark' default='light' description='Item style' />
                    <Prop name='page' isRequired={false} type='number' default='0' description='Index of the first item.' />
                    <Prop name='circular' isRequired={false} type='boolean' default='false' description='Defines if scrolling would be infinite' />
                    <Prop name='autoplayInterval' isRequired={false} type='number' default='0' description='Time in milliseconds to scroll items automatically' />
                    <Prop name='numVisible' isRequired={false} type='number' default='1' description='Number of items per page' />
                    <Prop name='numScroll' isRequired={false} type='number' default='1' description='Number of items to scroll' />
                    <Prop name='responsiveOptions' isRequired={false} type='object[]' default='null' description='An array of options for responsive design' />
                    <Prop name='onPageChange' isRequired={false} type='function' default='null' description='Callback to invoke after scroll' />
                </PropsList>
            </section>
        )
    }
}
