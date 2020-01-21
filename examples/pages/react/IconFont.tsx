import * as React from 'react';
import * as Markup from "../../js/react";

import { Icon } from '../../../app-typescript';

import * as iconFont from '../../../app/styles/_icon-font.scss';

export default class IconFontDoc extends React.PureComponent{
    render(){
        const array = iconFont.icon.split(', ');
        const icons = array.map((icon, index) =>
            <li key={index}>
                <Icon name={icon}/>
                <span>icon-{icon}</span>
            </li>
            );
        return(
            <section className="docs-page__container"> 
                <h2 className="docs-page__h2 docs-page__text-align--center">Icon font</h2>
                <Markup.ReactMarkupCodePreview>{`
                    <Icon name="photo" />
                `}
                </Markup.ReactMarkupCodePreview>
                <ul className='docs-page__icon-font-list'>
                    {icons}
                </ul>
            </section>);
    }
}
