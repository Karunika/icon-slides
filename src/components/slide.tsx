import React from 'react';
import Input from './input';
import { ISlide, useSlidesContext } from '../context/slidesContext';
import { Draggable, DraggableProvided } from 'react-beautiful-dnd';

interface ISlideProp {
    slide: ISlide;
    index: number;
}

const Slide = ({slide: { id, icon, title, description}, index}: ISlideProp) => {
    const { editTitle } = useSlidesContext();
    return (
        <Draggable draggableId={id} index={index}>
            {(provided: DraggableProvided) => (
                <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    className='slide'
                >
                    <span className='material-icons'>{icon}</span>
                    <Input text={title} setText={editTitle(id)} initialText={title} />
                    <span>{description}</span>
                </div>
            )}
        </Draggable>
    )
}

export default Slide;
