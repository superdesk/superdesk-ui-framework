/* eslint-disable react/no-multi-comp */
/* eslint-disable eqeqeq */

import {reactToAngular1} from './helpers/react-to-angular-1';
import {Positioner as _Positioner} from '../../app-typescript/components/_Positioner';

export const Positioner = _Positioner;

// one event listener;

/*
    Maintain a variable, weakmap of boxes

    close others - easy
    close if clicked outside - check all maps and close all where outside
*/

angular.module('superdesk-ui.positioner', [])
    .component('sdPositioner', reactToAngular1(Positioner, ['triggerSelector', 'placement', 'zIndex', 'className']));

/*
    Usage:

        Angularjs:
            <div>
                <button id="open">Open</button>
                <sd-positioner triggerSelector="'#open'" placement="'bottom-end'" class-name="'dropdown2">
                    <div>--contents--</div>
                </sd-positioner>
            </div>

        React:
            <div>
                <button id="open">Open</button>
                <Positioner triggerSelector="#open" placement="bottom-end" className="dropdown2">
                    <div>--contents--</div>
                </Positioner>
            </div>
*/