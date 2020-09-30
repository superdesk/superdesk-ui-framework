import * as React from 'react';
import classNames from 'classnames';
import { createPopper } from '@popperjs/core';
import { clone } from 'lodash';

//   work in progress from scratch miss:
//  1. css for selected item
//  2. category select
//  3. json as items
interface ITagInput {
    items?: Array<any>;
    label: string;
    freetype?: boolean;
}

export const TagInput = ({ items, label, freetype }: ITagInput) => {
    const [tags, setTags] = React.useState<Array<any>>([]);
    const [openSuggestion, setOpenSuggestion] = React.useState(false);
    const inputRef = React.useRef(null);
    const refTagInput = React.useRef(null);
    const refSuggestions = React.useRef(null);

    // number for select
    const [selectNumber, setSelectNumber] = React.useState(-1);

    // autocomplete
    const [suggestions, setSuggestions] = React.useState<Array<any>>([]);

    // focused
    const [focus, setFocus] = React.useState(false);

    // invalid-tag
    const [invalid, setInvalid] = React.useState(false);

    React.useEffect(() => {
        let menuRef = refSuggestions.current;
        let toggleRef = refTagInput.current;
        if (toggleRef && menuRef) {
            createPopper(toggleRef, menuRef, {
                placement: 'bottom-start',
            });
        }
    }, [suggestions]);

    function inputKeyDown(e: any) {
        const val = e.target.value;
        if (val.length > 1) {
            setInvalid(false);
        }
        if (e.key === 'Enter' && val) {
            if (val.length > 2 && freetype) {
                setInvalid(false);
                if (checkTag(val) === 0) {
                    setTags((tag) => tag.concat(val));
                    let inputRefVariable: any = inputRef.current;
                    if (inputRefVariable) {
                        inputRefVariable.value = null;
                    }
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

    function checkTag(newTag: any) {
        let count = 0;
        tags.forEach(function(tag) {
            if (tag === newTag) {
                count = 1;
            }
        });
        return count;
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
        if (checkTag(item) === 0) {
            setTags((tag) => tag.concat(item));
            let inputRefVariable: any = inputRef.current;
            if (inputRefVariable) {
                inputRefVariable.value = null;
            }
        }
        setSuggestions([]);
    }

    function toggleSuggestions() {
        if (!openSuggestion) {
            setOpenSuggestion(true);
            document.addEventListener('click', closeSuggestions);
        } else {
            setOpenSuggestion(false);
        }
    }

    function closeSuggestions() {
        document.removeEventListener('click', closeSuggestions);
        setOpenSuggestion(false);
    }

    function toggleFocus() {
        if (!focus) {
            setFocus(true);
            document.addEventListener('click', removeFocus);
        } else {
            setFocus(false);
        }
    }

    function removeFocus() {
        document.removeEventListener('click', removeFocus);
        setFocus(false);
    }

    function renderSuggestions() {
        if (openSuggestion) {
            return (
                <div className='autocomplete' ref={refSuggestions}>
                    <ul className='suggestion-list' >
                        {suggestions.length !== 0 ? (
                            suggestions.map((item, index) =>
                                <li className={'suggestion-item'}
                                    onClick={() => addTag(item)}
                                    key={index}>
                                    {item}
                                </li>,
                            )
                        ) : (
                                items?.map((item, index) =>
                                    <li className={'suggestion-item'}
                                        onClick={() => addTag(item)}
                                        key={index}>
                                        {item}
                                    </li>,
                                )
                            )}
                    </ul>
                </div>
            );
        } else if (suggestions.length === 0) {
            return null;
        } else {
            return (
                <div className='autocomplete' ref={refSuggestions}>
                    <ul className='suggestion-list' >
                        {suggestions.map((item, index) =>
                            <li className={'suggestion-item'}
                                onClick={() => addTag(item)}
                                key={index}>
                                {item}
                            </li>,
                        )}
                    </ul>
                </div>
            );
        }
    }

    let classes = classNames('tags-input__tags', {
        'focused': focus,
        'tag-input__invalid-tag': invalid,
    });

    return (
        <div className='sd-tag-input' data-label={label} >
            <label className='tags-input__label'>{label}</label>
            <div className='tags-input' ref={refTagInput}>
                <div className={classes} >
                    {items ?
                        <button className="tags-input__add-button"
                            onClick={toggleSuggestions}>
                            <i className="icon-plus-large"></i>
                        </button> : null}
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
