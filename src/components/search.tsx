import React, { useState } from 'react';
import json from '../_data/codepoints.json';

interface SearchProps {
    icon: string;
    setIcon: any;
}

const Search = ({icon, setIcon}: SearchProps) => {
    const [prevIcon, setPrevIcon] = useState(icon);
    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setIcon(e.currentTarget.value)
    }
    const iconClickHandler = (icon: string) => {
        setIcon(icon);
    }
    const focusHandler = () => {
        setPrevIcon(icon);
    }
    const blurHandler = () => {
        const select = Object.keys(json).find(k => k.startsWith(icon));
        if (select) {
            setIcon(select);
        } else {
            setIcon(prevIcon);
        }
    }
    return (
        <div className='search-wrapper'>
            <span className='input-wrapper'>
                <input
                    name='search-icon'
                    value={icon}
                    onChange={changeHandler}
                    onFocus={focusHandler}
                    onBlur={blurHandler}
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