import * as React from 'react';

import * as Markup from '../../js/react';
import { HeadingText } from '../../../app-typescript';
import toast from '../../../app-typescript/components/Toast';

export default class TestDoc extends React.Component {
    //top
    showTop = () => {
        toast.notify("I'm a tasty default Toast message!", { position: 'top' });
    }
    showTopSuccess = () => {
        toast.notify("I'm a tasty default Toast message!", { position: 'top', type: 'success' });
    }
    showTopRight = () => {
        toast.notify("Danger! Condimentum ridiculus ultricies ornare mollis!", { position: 'top-right', type: 'alert' });
    }
    showTopRightTwo = () => {
        toast.notify("Condimentum ridiculus ultricies ornare mollis!", { position: 'top-right', type: 'highlight' });
    }
    //bottom
    showBottom = () => {
        toast.notify(<HeadingText heading='I have Toaster heading!' text='Nulla vitae elit libero, a pharetra augue. Nullam id dolor id nibh ultricies vehicula ut id elit. Donec id elit non mi porta gravida at eget metus.' />, { type: 'primary', icon: 'info-sign', position: 'bottom' });
    }
    showBottomIcon = () => {
        toast.notify("Nulla vitae elit libero, a pharetra augue.", { type: 'alert', icon: 'exclamation-sign', position: 'bottom' });
    }
    showBottomLeftP = () => {
        toast.notify("Condimentum ridiculus ultricies ornare mollis.", { type: 'primary', icon: 'exclamation-sign', position: 'bottom-left' });
    }
    showBottomLeftW = () => {
        toast.notify("Danger! Condimentum ridiculus ultricies ornare mollis.", { type: 'success', icon: 'exclamation-sign', position: 'bottom-left' });
    }
    showBottomCenter = () => {
        toast.notify(" Nullam id dolor id nibh ultricies vehicula ut id elit.", { position: 'bottom' });
    }

    //size
    showFixedSizeTopXl = () => {
        toast.notify("I'm a very successful Toast message!", { type: 'success', position: 'top-left', size: 'fixed-xl' });
    }
    showFixedSizeTopM = () => {
        toast.notify("I'm a primary Toast message!", { type: 'primary', position: 'top-left', size: 'fixed-m' });
    }
    showFixedSizeTopS = () => {
        toast.notify("I'm a alert Toast message!", { type: 'warning', position: 'top-left', size: 'fixed-s' });
    }

    //duration
    showTopD = () => {
        toast.notify("Condimentum ridiculus ultricies ornare mollis.", { position: 'top', duration: 4000 });
    }
    showBottomD = () => {
        toast.notify("Condimentum ridiculus ultricies ornare mollis.", { type: 'highlight', position: 'bottom', duration: 2000 });
    }

    //datestamp
    showRight = () => {
        toast.notify(<HeadingText heading='Martin Mustermann' text='Nulla vitae elit libero, a pharetra augue. Nullam id dolor id nibh ultricies vehicula ut id elit.' timestamp={new Date('August 19, 2019 23:15:30')} />, { position: 'bottom-right', type: 'alert' })
    }
    render() {
        return (
            <section className="docs-page__container">
                <h2 className="docs-page__h2">Testings Toast</h2>

                <h3 className="docs-page__h3">Top</h3>
                <button className='btn' onClick={this.showTop}>top default</button>
                <button className='btn btn--success' onClick={this.showTopSuccess}>top success</button>
                <button className='btn btn--alert' onClick={this.showTopRight}>top-right alert</button>
                <button className='btn btn--highlight' onClick={this.showTopRightTwo}>top-right highligh</button>

                <h3 className="docs-page__h3">Bottom </h3>
                <button className='btn btn--primary' onClick={this.showBottomLeftP}>bottom-left primary</button>
                <button className='btn btn--sd-green' onClick={this.showBottomLeftW}>bottom-left sd-green</button>
                <button className='btn' onClick={this.showBottomCenter}>bottom default</button>

                <h3 className="docs-page__h3">Size </h3>
                <button className='btn btn--warning' onClick={this.showFixedSizeTopS}>top-left fixed-s</button>
                <button className='btn btn--success' onClick={this.showFixedSizeTopXl}>top-left fixed-xl</button>
                <button className='btn btn--primary' onClick={this.showFixedSizeTopM}>top-left fixed-m</button>

                <h3 className="docs-page__h3">Duration </h3>
                <button className='btn btn--light' onClick={this.showTopD}>top duration 4s</button>
                <button className='btn btn--highlight' onClick={this.showBottomD}>bottom duration 2s</button>

                <h3 className="docs-page__h3">Datestamp</h3>
                <button className='btn btn--alert' onClick={this.showRight}>datestamp, customized</button>
            </section>
        )
    }
}
