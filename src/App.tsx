import React, { useState } from 'react';
import Input from './components/input';
import Slides from './components/slides';
import Create from './components/create';
import { ISlide, useSlidesContext } from './context/slidesContext';
// @ts-ignore
import * as html2pdf from 'html2pdf.js';

const App = () => {
  const { slides } = useSlidesContext();
  const [title, setTitle] = useState('my title');
  const [create, setCreate] = useState(false);

  const downloadButtonHandler = () => {
    // TODO: styles
    const view = document.createElement('div');

    slides.forEach((slide: ISlide) => {
      const span = document.createElement('span');

      const icon = document.createElement('span');
      icon.classList.add('material-icons');
      icon.innerText = slide.icon;

      const title = document.createElement('h3');
      title.innerText = slide.title;

      const description = document.createElement('p');
      description.innerText = slide.title;

      span.appendChild(icon);
      span.appendChild(title);
      span.appendChild(description);

      view.appendChild(span);
    })

    html2pdf().from(view).save();
  }

  return (
    <div className='app'>
      <Input text={title} setText={setTitle} initialText={title} className='main-title' />
      <Slides />
      <div className='app-buttons'>
        <button onClick={() => setCreate(true)}>create</button>
        <button onClick={downloadButtonHandler}>export to pdf</button>
      </div>
      {create && <Create closeCreate={() => setCreate(false)} />}
      <div className='notes'>
        Features:
        <ol>
          <li>Double click to edit main-title, slide title and slide description</li>
          <li>Drag and drop the slides to rearrange slides</li>
        </ol>
      </div>
    </div>
  );
}

export default App;
