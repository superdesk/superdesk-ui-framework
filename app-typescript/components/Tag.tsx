import * as React from 'react';
import classNames from 'classnames';

interface IProps {
    text: string;
    key?: number;
    shade?: 'light' | 'darker' | 'highlight1' | 'highlight2';
    shape?: 'rounded' | 'square';
    onClick(): void;
}

export const Tag = ({ text, key, shade, shape, onClick }: IProps) => {
    let classes = classNames('tag-label', {
        [`tag-label--${shade}`]: shade && shade !== 'light',
        'tag-label--square': shape === 'square',
    });
    return (
        <div className={classes} key={key}>
            {text}
            <button className='tag-label__remove' onClick={onClick}>
                <i className='icon-close-small'></i>
            </button>
        </div>
    );
};
