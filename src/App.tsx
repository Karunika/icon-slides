import React, { useState } from 'react';
import Input from './components/input';
import Slides from './components/slides';
import Create from './components/create';
import SlidesProvider from './context/slidesContext';

function App() {
  const [title, setTitle] = useState('my title');
  const [create, setCreate] = useState(false);
  return (
    <div>
      <SlidesProvider>
        <Input text={title} setText={setTitle} initialText={title} />
        <Slides />
        <button onClick={() => setCreate(true)}>create</button>
        {create && <Create closeCreate={() => setCreate(false)} />}
      </SlidesProvider>
    </div>
  );
}

export default App;
