import React, { useState, useEffect, createRef} from 'react';

interface InputProp {
    text: string;
    setText: any;
    initialText: string;
    className?: string;
}

const Input = ({text, setText, initialText, className = ''}: InputProp) => {
    const inputRef = createRef<HTMLInputElement>();
    const [cacheInput, setCacheInput] = useState(initialText);
    const [editingMode, setEditingMode] = useState(false);
    const changeHandler = (e: React.FormEvent<HTMLInputElement>) => {
        setText(e.currentTarget.value);
    }
    const keyDownHandler = (e: any) => {
        if (e.key === 'Enter' && text !== '') {
            setEditingMode(false);
        }
    }

    const blurHandler = () => {
        if (text === '') {
            setText(cacheInput);
        }
        setEditingMode(false);
    }

    useEffect(() => {
        if (editingMode) {
            setCacheInput(text);
            inputRef.current?.focus();
        }
    }, [editingMode])
    return (
        <div>
        { editingMode ?
          <input
            ref={inputRef}
            value={text}
            onChange={changeHandler}
            onBlur={blurHandler}
            onKeyDown={keyDownHandler}
            className={className}
          /> :
          <span
            onDoubleClick={() => setEditingMode(true)}
            className={className}>
              {text}
          </span>
        }
        </div>
    )
}

export default Input;
