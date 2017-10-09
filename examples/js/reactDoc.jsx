import React from 'react';
import {Modal} from 'superdesk-ui';

export default class ReactDoc extends React.Component {
    render() {
        return (
            <div>
                <button className="btn btn--primary">Lupni me!</button>
                <Modal className="radi" />
            </div>
        )
    }
}

