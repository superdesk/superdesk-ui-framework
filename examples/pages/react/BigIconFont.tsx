import * as React from 'react';

import { Icon } from '../../../app-typescript';

import * as bigIconFont from '../../../app/styles/_big-icon-font.scss';

export default class BigIconFontDoc extends React.PureComponent{
    render(){
        const array = bigIconFont.icon.split(', ');
        const icons = array.map((icon, index) =>
            <li key={index}>
                <Icon name={icon} size='big'/>
                <span>big-icon--{icon}</span>
            </li>
            );
        return(
            <section className="docs-page__container"> 
                <h2 className="docs-page__h2 docs-page__text-align--center">Big icon font</h2>
                <p className="docs-page__paragraph  docs-page__text-align--center">Big icons are added with a custom icon font. Example: <code>&lt;i class="big-icon--photo"&gt;&lt;/i&gt;</code></p>
                <ul className='docs-page__icon-font-list'>
                    {icons}
                </ul>
            </section>);
    }
}
