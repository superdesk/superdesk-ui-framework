import * as React from 'react';
import { AutoComplete } from 'primereact/autocomplete';

import { clone } from 'lodash';

interface ITagInput {
    items?: Array<any>;
}

export const TagInput = ({ items }: ITagInput) => {
    const [tags, setTags] = React.useState<Array<any>>([]);
    const inputRef = React.useRef(null);

    // autocomlete
    const [filteredMultiple, setFilteredMultiple] = React.useState<Array<any>>([]);
    const [selectedItems, setSelectedItems] = React.useState<Array<any>>([]);

    // number for select
    const [selectNumber, setSelectNumber] = React.useState(-1);

    const filterMultiple = (event: { query: string }) => {
        if (items) {
            setTimeout(() => {
                let results = items.filter((country: any) => {
                    return country.toLowerCase().startsWith(event.query.toLowerCase());
                });
                setFilteredMultiple(results);
            }, 250);
        }
    };

    function inputKeyDown(e: any) {
        const val = e.target.value;
        if (e.key === 'Enter' && val) {
            setTags((tag) => tag.concat(val));
            let inputRefVariable: any = inputRef.current;
            if (inputRefVariable) {
                inputRefVariable.value = null;
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

    if (items) {
        return (
            <AutoComplete value={selectedItems} suggestions={filteredMultiple} completeMethod={filterMultiple}
                minLength={1} placeholder="test placeholder" multiple={true} onChange={(e) => setSelectedItems(e.value)}
                inputClassName='tags-input__input' />
        );
    } else {
        return (
            <div className='tags-input'>
                <div className='tags-input__tags'>
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
                            <input type='text' className='tags-input__input' onKeyDown={inputKeyDown} ref={inputRef} />
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
};
