import React from "react";
import Slide from './slide';
import { useSlidesContext, ISlide } from "../context/slidesContext";
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import type {
    OnDragEndResponder,
    DroppableProvided,
} from 'react-beautiful-dnd';

const Slides = () => {
    const { slides, rearrangeSlides } = useSlidesContext();
    const dragEndHandler: OnDragEndResponder = e => {
        const { source, destination } = e;
        if (!destination) return;
        rearrangeSlides(source.index, destination.index);
    };
    return (
        <DragDropContext onDragEnd={dragEndHandler}>
            <Droppable droppableId='droppable-slides' direction='horizontal'>
                {(provided: DroppableProvided) => (
                   <div className='flex-h'
                    ref={provided.innerRef}
                    {...provided.droppableProps}>
                        {slides.map((slide: ISlide, i: number) => (
                            <Slide key={slide.id} slide={slide} index={i} />
                        ))}
                        {provided.placeholder}
                    </div>
                )}
            </Droppable>
        </DragDropContext>
    )
}

export default Slides;
