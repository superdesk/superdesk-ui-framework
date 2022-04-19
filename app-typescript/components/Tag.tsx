import * as React from 'react';
import classNames from 'classnames';

interface IProps {
    text: string;
    label?: string;
    keyValue?: number;
    shade?: 'light' | 'darker' | 'highlight1' | 'highlight2' | 'inverse'; // default light
    shape?: 'round' | 'square'; // default round
    readOnly?: boolean;
    onClick(): void;
}

export const Tag = ({ text, keyValue, shade, shape, readOnly, onClick, label }: IProps) => {
    let classes = classNames('tag-label', {
        [`tag-label--${shade}`]: shade && shade !== 'light',
        'tag-label--square': shape === 'square',

    });
    return (
        <>
            {label
                ?
                <span className={classes} key={keyValue}>
                    <span className='tag-label--text-wrapper'>
                        <span className='tag-label--text-label'>
                            {label}:
                        </span>
                        <span className='tag-label--text'>
                            {text}
                        </span>
                    </span>
                    {!readOnly ? <button className='tag-label__remove' onClick={onClick}>
                        <i className='icon-close-small'></i>
                    </button> : null}
                </span>
                :
                <span className={classes} key={keyValue}>
                    <span className='tag-label--text'>
                        {text}
                    </span>
                    {!readOnly ? <button className='tag-label__remove' onClick={onClick}>
                        <i className='icon-close-small'></i>
                    </button> : null}
                </span>
            }
        </>
    );
};
