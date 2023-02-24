import React, { useState } from 'react';
import Search from './search';
import { useSlidesContext } from '../context/slidesContext';

interface ICreateProps {
    closeCreate: any;
}

const Create = ({ closeCreate }: ICreateProps) => {
    const { addSlide } = useSlidesContext();
    const [icon, setIcon] = useState('');
    const [content, setContent] = useState({
        title: '',
        description: ''
    });

    const changeHandler = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
        setContent({
            ...content,
            [e.currentTarget.name]: e.currentTarget.value
        })
    }

    const createSlide = () => {
        const { title, description } = content;
        if (title !== '' || description !== '') {
            addSlide(icon, content.title, content.description);
            closeCreate();
        }
    }

    return (
        <div className='modal-bg'>
            <form className='modal'>
                <div className='modal-header'>
                    <h1> Create a new Slide </h1>
                    <hr />
                </div>
                <div className='modal-content'>
                    <Search setIcon={setIcon}/>
                    <div className='separator'></div>
                    <div className='modal-content-right'>
                        <span className='input-wrapper'>
                            <input
                                name='title'
                                value={content.title}
                                onChange={changeHandler}
                                required
                                />
                            <label htmlFor='title'>Title</label>
                        </span>
                        <span className='input-wrapper description'>
                            <textarea
                                name='description'
                                value={content.description}
                                onChange={changeHandler}
                                required
                                />
                            <label htmlFor='description'>Description</label>
                        </span>
                    </div>
                </div>
                <div className='modal-footer'>
                    <hr />
                    <div>
                        <button type='reset' className='cancel' onClick={closeCreate}>Cancel</button>
                        <button onClick={createSlide}>Create</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Create;