import React, {forwardRef, useState, useRef, useCallback, useImperativeHandle, useEffect, useMemo} from 'react';
import classNames from 'classnames';
import debounce from 'lodash/debounce';
import {Icon} from './Icon';

interface IProps {
    /**
     * Defaults to `expanded`
     */
    type?: 'expanded' | 'collapsed';

    placeholder: string;
    boxed?: boolean;

    hideSearchButton?: boolean;

    searchOptions?: {
        searchOnType: true;

        /**
         * Defaults to 300ms
         */
        searchDelay: number;
    };

    onSubmit(value: string): void;
}

export const SearchBar = forwardRef<{focus: () => void; search: () => void}, IProps>((props, ref) => {
    const {type = 'expanded', boxed = false} = props;

    const [focused, setFocused] = useState(false);
    const [keyDown, setKeyDown] = useState(false);
    const [value, setValue] = useState('');

    const inputRef = useRef<HTMLDivElement>(null);
    const searchInputRef = useRef<HTMLInputElement>(null);

    /**
     * Use a ref to keep track of the input value, so that the debounced search
     * can have latest instances while also the latest value.
     */
    const valueRef = useRef(value);

    const search = useCallback(() => {
        const currentValue = valueRef.current;

        // Require at least 3 characters before triggering search, or allow empty string to clear
        if (currentValue.length > 0 && currentValue.length < 3) {
            return;
        }

        props.onSubmit(currentValue);
    }, [props.onSubmit]);

    const handleDebouncedSearch = useMemo(
        () => debounce(search, props.searchOptions?.searchDelay ?? 300),
        [search, props.searchOptions?.searchDelay],
    );

    useImperativeHandle(ref, () => ({
        focus: () => {
            setFocused(true);
        },
        search,
    }));

    useEffect(() => {
        if (focused) {
            searchInputRef.current?.focus();
        }
    }, [focused]);

    useEffect(() => {
        const mouseDownHandler = (event: MouseEvent) => {
            if (inputRef.current && !inputRef.current.contains(event.target as Node)) {
                setFocused(false);
            }
        };

        document.addEventListener('mousedown', mouseDownHandler);

        return () => {
            handleDebouncedSearch.cancel();
            document.removeEventListener('mousedown', mouseDownHandler);
        };
    }, [handleDebouncedSearch]);

    const containerClasses = classNames('sd-searchbar', {
        [`sd-searchbar--${type}`]: type,
        'sd-searchbar--expanded': type === 'expanded',
        'sd-searchbar--focused': focused,
        'sd-searchbar--boxed': boxed,
    });
    const searchButtonClasses = classNames('sd-searchbar__search-btn', {
        'sd-searchbar__search-btn--active': keyDown,
    });

    return (
        <div className={containerClasses} ref={inputRef}>
            {props.children}
            <label className="sd-searchbar__icon"></label>
            <input
                id="search-input"
                ref={searchInputRef}
                className="sd-searchbar__input"
                type="text"
                placeholder={props.placeholder}
                value={value}
                onKeyPress={(event) => {
                    if (event.key === 'Enter') {
                        handleDebouncedSearch.cancel();

                        props.onSubmit(value);
                        setKeyDown(true);
                    }
                }}
                onKeyUp={(event) => {
                    if (event.key === 'Enter') {
                        setKeyDown(false);
                    }
                }}
                onChange={(event) => {
                    const newValue = event.target.value;

                    setValue(newValue);
                    valueRef.current = newValue;

                    if (props.searchOptions?.searchOnType) {
                        handleDebouncedSearch();
                    }
                }}
                onFocus={() => setFocused(true)}
            />
            {value && (
                <button
                    className="sd-searchbar__cancel"
                    onClick={() => {
                        handleDebouncedSearch.cancel();
                        setValue('');

                        props.onSubmit('');
                    }}
                >
                    <Icon name="remove-sign" />
                </button>
            )}
            {!props.hideSearchButton && (
                <button
                    id="sd-searchbar__search-btn"
                    className={searchButtonClasses}
                    onClick={() => {
                        handleDebouncedSearch.cancel();

                        props.onSubmit(value);
                    }}
                >
                    <Icon name="chevron-right-thin" />
                </button>
            )}
        </div>
    );
});
