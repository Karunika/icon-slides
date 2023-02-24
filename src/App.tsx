import React, { useState } from 'react';
import Input from './components/input';
import Slides from './components/slides';
import Create from './components/create';
import Doc from './components/document';
import SlidesProvider from './context/slidesContext';
import { PDFViewer, PDFDownloadLink } from '@react-pdf/renderer';

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
          <button>render</button>
        </div>
        {create && <Create closeCreate={() => setCreate(false)} />}
        <PDFViewer>
          <Doc />
        </PDFViewer>
        <PDFDownloadLink document={<Doc />}>
          <button>download</button>
        </PDFDownloadLink>
      </div>
    </SlidesProvider>
  );
}

export default App;
