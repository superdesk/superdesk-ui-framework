import * as React from 'react';
import * as Markup from "../../js/react";

import { Icon, Prop, PropsList } from '../../../app-typescript';

import * as bigIconFont from '../../../app/styles/_big-icon-font.scss';

export default class BigIconFontDoc extends React.PureComponent{
    render(){
        const array = bigIconFont.icon.split(', ');
        const icons = array.map((icon, index) =>
            <li key={index}>
                <Icon name={icon} size='big'/>
                <span>{icon}</span>
            </li>
            );
        return(
            <section className="docs-page__container"> 
                <h2 className="docs-page__h2 docs-page__text-align--center">Big icon font</h2>
                <Markup.ReactMarkupCodePreview>{`
                    <Icon name="dashboard" size="big" />
                `}
                </Markup.ReactMarkupCodePreview>
                <ul className='docs-page__icon-font-list'>
                    {icons}
                </ul>

                <h3 className="docs-page__h3">Props</h3>
                <PropsList>
                    <Prop name='name' isRequered={false} type='string' default='/' description='Icon name value.' />
                    <Prop name='type' isRequered={false} type='default | primary | success | warning | alert | highlight | sd-green' default='default' description='Default + semantic colour variations (e.g. primary, success etc.)' />
                    <Prop name='size' isRequered={false} type='small | big' default='small' description='Specifies a small or big size of Icon.' />
                </PropsList>
            </section>);
    }
}
