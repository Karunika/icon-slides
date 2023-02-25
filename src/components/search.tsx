import React, { useState } from 'react';
import json from '../_data/codepoints.json';

interface SearchProps {
    icon: string;
    setIcon: any;
}

const Search = ({icon, setIcon}: SearchProps) => {
    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setIcon(e.currentTarget.value)
    }
    const iconClickHandler = (icon: string) => {
        setIcon(icon);
    }
    return (
        <div className='search-wrapper'>
            <span className='input-wrapper'>
                <input
                    name='search-icon'
                    value={icon}
                    onChange={changeHandler}
                    required
                />
                <label htmlFor='search-icon'>Search Icons</label>
            </span>
            <div className='search-results'>
                {Object.keys(json).map((ic: string, i) => (
                    ic.startsWith(icon) &&
                    <span
                        className={`material-icons ${icon === ic ? 'selected-icon' : ''}`}
                        key={i}
                        onClick={() => iconClickHandler(ic)}>
                        {ic}
                    </span>
                ))}
            </div>
        </div>
    )
}

export default Search;