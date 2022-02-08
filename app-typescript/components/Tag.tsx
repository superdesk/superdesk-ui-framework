import * as React from 'react';
import classNames from 'classnames';

interface IProps {
    text: string;
    keyValue?: number;
    shade?: 'light' | 'darker' | 'highlight1' | 'highlight2' | 'inverse'; // default light
    shape?: 'round' | 'square'; // default round
    readOnly?: boolean;
    onClick(): void;
}

export const Tag = ({ text, keyValue, shade, shape, readOnly, onClick }: IProps) => {
    let classes = classNames('tag-label', {
        [`tag-label--${shade}`]: shade && shade !== 'light',
        'tag-label--square': shape === 'square',
    });
    return (
        <span className={classes} key={keyValue}>
            {text}
            {!readOnly ? <button className='tag-label__remove' onClick={onClick}>
                <i className='icon-close-small'></i>
            </button> : null}
        </span>
    );
};
