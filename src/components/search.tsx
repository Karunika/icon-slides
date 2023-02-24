import React, { useState } from 'react';
import json from '../_data/codepoints.json';

// type json = {[key: string]: string}
interface SearchProps {
    setIcon: any;
}

const Search = ({setIcon}: SearchProps) => {
    const [search, setSearch] = useState('');
    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.currentTarget.value)
    }
    const iconClickHandler = (icon: string) => {
        setSearch(icon);
    }
    return (
        <div className='search-wrapper'>
            <span className='input-wrapper'>
                <input
                    name='search-icon'
                    value={search}
                    onChange={changeHandler}
                    required
                />
                <label htmlFor='search-icon'>Search Icons</label>
            </span>
            <div className='search-results'>
                {Object.keys(json).map((icon: string, i) => (
                    icon.startsWith(search) &&
                    <span
                        className={`material-icons ${search === icon ? 'selected-icon' : ''}`}
                        key={i}
                        onClick={() => iconClickHandler(icon)}>
                        {icon}
                    </span>
                ))}
            </div>
        </div>
    )
}

export default Search;