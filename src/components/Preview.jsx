import React from 'react';

const Preview = ({selectedNote}) => {
  return (
    <div>
      <div className="preview-note">
        <h1>{selectedNote.title}</h1>
        {selectedNote.body}
      </div>
    </div>
  );
};

export default Preview;
