import React, { useState } from 'react';
import './App.css';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; //style sheet

const App = () => {
  const [html, setHtml] = useState('');
  const handleChange = e => {
    setHtml({ html: e });
  };

  const handleDone = () => {
    console.log(html);
  };
  return (
    <div className="App">
      <ReactQuill
        onChange={e => handleChange(e)}
        /* value={html} */
        modules={App.modules}
        formats={App.formats}
        bounds={'.app'}
        placeholder={'Tell your story'}
      />
      <button
        onClick={() => {
          handleDone();
        }}
        className="done-editting-btn"
      >
        Save
      </button>
    </div>
  );
};

App.modules = {
  toolbar: [
    [{ header: '1' }, { header: '2' }],
    [{ size: [] }],
    ['bold', 'italic', 'underline', 'blockquote'],
    [
      { list: 'ordered' },
      { list: 'bullet' },
      { indent: '-1' },
      { indent: '+1' }
    ],
    ['link'],
    ['clean']
  ],
  clipboard: {
    // toggle to add extra line breaks when pasting HTML:
    matchVisual: false
  }
};

App.formats = [
  'header',
  'size',
  'bold',
  'italic',
  'underline',
  'blockquote',
  'list',
  'bullet',
  'indent',
  'link'
];

export default App;
