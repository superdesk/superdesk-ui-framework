import * as React from 'react';
import '../../app/styles/_drag-handle.scss';
import dragHandleImg from '../../app/img/dots.svg';

export class DragHandle extends React.PureComponent {
    render() {
        return (
            <div className="drag-handle-wrapper">
                <img src={dragHandleImg} className="drag-handle" draggable={false} />
            </div>
        );
    }
}
