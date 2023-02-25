import React, { createContext, useContext, useState } from 'react';
// import { v4 } from 'uuid';

export interface ISlide {
    id: string;
    icon: string;
    title: string;
    description: string;
}

interface ISlideContext {
    slides: ISlide[];
    addSlide: (icon: string, title: string, description: string) => void;
    deleteSlide: (id: string) => void;
    editSlide: (id: string, isTitle?: boolean) => (newString: string) => void;
    rearrangeSlides: (dragId: number, dropId: number) => void;
}

const SlidesContext = createContext<ISlideContext>({} as ISlideContext);

const SlidesProvider = ({children}: any) => {
    const [slides, setSlides] = useState<ISlide[]>([
        {
            id: '1',
            icon: 'air',
            title: 'this is a title 1',
            description: 'this is the description'
        },
        {
            id: '2',
            icon: 'air',
            title: 'this is a title 2',
            description: 'this is the description'
        },
        {
            id: '3',
            icon: 'air',
            title: 'this is a title 3',
            description: 'this is the description'
        },
        {
            id: '4',
            icon: 'air',
            title: 'this is a title 4',
            description: 'this is the description'
        },
    ]);

    const addSlide = (icon: string, title: string, description: string) => {
        const newSlide = {
            id: String(Math.random()),
            icon,
            title,
            description
        }
        setSlides(slides => [...slides, newSlide])
    }

    const deleteSlide = (id: string) => {
        setSlides((slides) => slides.filter((slide) => slide.id !== id));
    }

    const editSlide = (id: string, isTitle = true) => {
        return (newString: string) => {
            setSlides(slides => (
                slides.map(slide => slide.id === id ? {
                    ...slide,
                    [isTitle ? 'title' : 'description']: newString
                } : slide)
            ))
        }
    }

    const rearrangeSlides = (dragId: number, dropId: number) => {
        setSlides(slides => {
            slides.splice(dropId, 0, slides.splice(dragId, 1)[0]);
            return slides;
        });
    }

    return (
        <SlidesContext.Provider value={{slides, addSlide, deleteSlide, editSlide, rearrangeSlides}}>
            {children}
        </SlidesContext.Provider>
    )
}

export const useSlidesContext = () => useContext(SlidesContext)
export default SlidesProvider;
