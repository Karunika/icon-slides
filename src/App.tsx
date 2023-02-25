import React, { useState } from 'react';
import Input from './components/input';
import Slides from './components/slides';
import Create from './components/create';
import SlidesProvider from './context/slidesContext';

function App() {
  const [title, setTitle] = useState('my title');
  const [create, setCreate] = useState(false);
  return (
    <SlidesProvider>
      <div className='app'>
        <Input text={title} setText={setTitle} initialText={title} className='main-title' />
        <Slides />
        <div className='app-buttons'>
          <button onClick={() => setCreate(true)}>create</button>
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
    </SlidesProvider>
  );
}

export default App;
