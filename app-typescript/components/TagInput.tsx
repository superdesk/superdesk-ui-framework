import * as React from 'react';
import classNames from 'classnames';

import { clone } from 'lodash';

interface ITagInput {
    items?: Array<any>;
    label: string;
}

export const TagInput = ({ items, label }: ITagInput) => {
    const [tags, setTags] = React.useState<Array<any>>([]);
    const inputRef = React.useRef(null);

    // number for select
    const [selectNumber, setSelectNumber] = React.useState(-1);

    // autocomplete
    const [suggestions, setSuggestions] = React.useState<Array<any>>([]);
    // const [selectItem, setSelectItem] = React.useState(-1);

    // focused
    const [focus, setFocus] = React.useState(false);

    // invalid-tag
    const [invalid, setInvalid] = React.useState(false);

    function inputKeyDown(e: any) {
        const val = e.target.value;
        if (val.length > 1) {
            setInvalid(false);
        }
        if (e.key === 'Enter' && val) {
            if (val.length > 2) {
                setInvalid(false);
                setTags((tag) => tag.concat(val));
                let inputRefVariable: any = inputRef.current;
                if (inputRefVariable) {
                    inputRefVariable.value = null;
                }
            } else {
                setInvalid(true);
            }
        } else if (e.key === 'Backspace' && !val) {
            setSelectNumber(tags.length - 1);
            if (selectNumber !== -1) {
                removeTag(selectNumber);
                setSelectNumber(-1);
            }
        } else if (e.key === 'ArrowLeft' && !val) {
            if (selectNumber > 0) {
                setSelectNumber(selectNumber - 1);
            } else {
                setSelectNumber(tags.length - 1);
            }
        } else if (e.key === 'ArrowRight' && !val) {
            if (selectNumber !== -1 && selectNumber < tags.length - 1) {
                setSelectNumber(selectNumber + 1);
            } else {
                setSelectNumber(0);
            }
        }
    }

    function removeTag(i: number) {
        let newTags = clone(tags);
        newTags.splice(i, 1);
        setTags(newTags);
    }

    function onTextChanged(e: any) {
        if (items) {
            const value = e.target.value;
            let newSuggestions = [];
            if (value.length > 1) {
                const regex = new RegExp(`^${value}`, 'i');
                newSuggestions = items.sort().filter((v) => regex.test(v));
            }
            setSuggestions(newSuggestions);
        }
    }

    function addTag(item: any) {
        setTags((tag) => tag.concat(item));
        let inputRefVariable: any = inputRef.current;
        if (inputRefVariable) {
            inputRefVariable.value = null;
        }
        setSuggestions([]);
    }

    function renderSuggestions() {
        if (suggestions.length === 0) {
            return null;
        }

        return (
            <div className='autocomplete' style={{ display: suggestions.length === 0 ? 'none' : 'block' }}>
                <ul className='suggestion-list'>
                    {suggestions.map((item, index) =>
                        <li className={'suggestion-item' + (index === 0 ? ' selected' : '')}
                            onClick={() => addTag(item)}
                            key={index}>
                            {item}
                        </li>,
                    )}
                </ul>
            </div>
        );
    }

    function toggleFocus() {
        if (!focus) {
            setFocus(true);
            document.addEventListener('click', closeMenu);
        } else {
            setFocus(false);
        }
    }

    function closeMenu() {
        document.removeEventListener('click', closeMenu);
        setFocus(false);
    }

    let classes = classNames('tags-input__tags', {
        'focused': focus,
        'tag-input__invalid-tag': invalid,
    });

    return (
        <div className='sd-tag-input' data-label={label}>
            <label className='tags-input__label'>{label}</label>
            <div className='tags-input'>
                <div className={classes} >
                    {items ?
                        <button className="tags-input__add-button"><i className="icon-plus-large"></i></button> : null}
                    <ul className='tags-input__tag-list'>
                        {tags.map((tag, i) => {
                            return (
                                <li className={'tags-input__tag-item' + (selectNumber === i ? ' selected' : '')}
                                    key={i}>
                                    {tag}
                                    <a type='button' className='tags-input__remove-button' onClick={() => removeTag(i)}>
                                        <i className='icon-close-small'></i>
                                    </a>
                                </li>
                            );
                        })}
                        <li className='input-tag__tags__input'>
                            <input
                                type='text'
                                className={'tags-input__input' + (invalid ? ' invalid-tag' : '')}
                                onChange={onTextChanged}
                                ref={inputRef}
                                onKeyDown={inputKeyDown}
                                onClick={toggleFocus} />
                        </li>
                    </ul>
                </div>
                {items ? renderSuggestions() : null}
            </div>
        </div>
    );
};
