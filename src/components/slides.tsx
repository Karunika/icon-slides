import React, { useEffect, useState } from "react";
import SlideCard from './slidecard';
import { useSlidesContext, ISlide } from "../context/slidesContext";
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import type {
    OnDragEndResponder,
    DroppableProvided,
} from 'react-beautiful-dnd';


const Slides = () => {
    const { slides, rearrangeSlides } = useSlidesContext();
    const [offset, setOffset] = useState(0);

    const dragEndHandler: OnDragEndResponder = e => {
        const { source, destination } = e;
        if (!destination) return;
        rearrangeSlides(source.index, destination.index);
    };

    const leftButtonHandler = () => {
        setOffset(o => Math.max(0, o-1))
    }

    const rightButtonHandler = () => {
        if (slides.length < 3) return;
        setOffset(o => Math.min(slides.length -3, o+1))
    }

    useEffect(() => {
        document.getElementById('train')!.style.marginLeft = -offset*232 + 'px';
    }, [offset])

    return (
        <DragDropContext onDragEnd={dragEndHandler}>
            <Droppable droppableId='droppable-slides' direction='horizontal'>
                {(provided: DroppableProvided) => (
                   <div className='slides flex-h'
                    ref={provided.innerRef}
                    {...provided.droppableProps}>
                        <span className='left-button' onClick={leftButtonHandler}>{'<'}</span>
                        <div className='frame'>
                            <div id='train'>
                                {slides.map((slide: ISlide, i: number) => (
                                    <SlideCard key={slide.id} slide={slide} index={i} />
                                ))}
                                {provided.placeholder}
                            </div>
                        </div>
                        <span className='right-button' onClick={rightButtonHandler}>{'>'}</span>
                    </div>
                )}
            </Droppable>
        </DragDropContext>
    )
}

export default Slides;
