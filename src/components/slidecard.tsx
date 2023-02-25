import React from 'react';
import Input from './input';
import { ISlide, useSlidesContext } from '../context/slidesContext';
import { Draggable, DraggableProvided } from 'react-beautiful-dnd';

interface ISlideProp {
    slide: ISlide;
    index: number;
}

const SlideCard = ({slide: { id, icon, title, description}, index}: ISlideProp) => {
    const { editSlide, deleteSlide } = useSlidesContext();
    const deleteButtonHandler = () => {
        const res = window.confirm('Slide, once deleted, can not be recovered back. Are you sure you want to delete it?');
        if (res) {
            deleteSlide(id);
        }
    }
    return (
        <Draggable draggableId={id} index={index}>
            {(provided: DraggableProvided) => (
                <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    className='slidecard'
                >
                    <span className='material-icons'>{icon}</span>
                    <Input text={title} setText={editSlide(id)} initialText={title} className='slidecard-title' />
                    <Input text={description} setText={editSlide(id, false)} initialText={description} />
                    <a className='anchor-delete' onClick={deleteButtonHandler}>delete</a>
                </div>
            )}
        </Draggable>
    )
}

export default SlideCard;
