import * as React from 'react';
import classNames from 'classnames';
import {DragHandle} from './DragHandle';

interface IProps {
    text: string;
    label?: string;
    keyValue?: number;
    size?: 'small' | 'normal'; // default normal
    shade?: 'light' | 'darker' | 'highlight1' | 'highlight2' | 'inverse'; // default light
    shape?: 'round' | 'square'; // default round
    readOnly?: boolean;
    draggable?: boolean;
    onClick?(): void;
}

export const Tag = ({text, keyValue, shade, shape, readOnly, onClick, label, draggable, size}: IProps) => {
    let classes = classNames('tag-label', {
        [`tag-label--${shade}`]: shade && shade !== 'light',
        'tag-label--square': shape === 'square',
        'tag-label--draggable': draggable === true,
        [`tag-label--${size}`]: size !== 'normal' && size !== undefined,
    });

    const removeButton =
        onClick == null || readOnly === true ? null : (
            <button className="tag-label__remove" onClick={onClick}>
                <i className="icon-close-small"></i>
            </button>
        );

    return (
        <>
            {label ? (
                <span className={classes} key={keyValue}>
                    {draggable && <DragHandle blank={true} dotsInRow="3" dotRows="4" />}
                    <span className="tag-label--text-wrapper">
                        <span className="tag-label--text-label">{label}:</span>
                        <span className="tag-label--text">{text}</span>
                    </span>
                    {removeButton}
                </span>
            ) : (
                <span className={classes} key={keyValue}>
                    {draggable && <DragHandle blank={true} dotsInRow="3" dotRows="4" />}
                    <span className="tag-label--text">{text}</span>
                    {removeButton}
                </span>
            )}
        </>
    );
};
