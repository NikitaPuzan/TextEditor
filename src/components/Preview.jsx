import React, {useState} from 'react';
import EditIcon from '@mui/icons-material/Edit';
import {Button, IconButton} from "@mui/material";

const Preview = ({selectedNote, setToggle}) => {

  return (
    <div>
      <div className="preview-note">
        <h1>{selectedNote.title}
        <IconButton color="error" onClick={() => setToggle(true)}>
          <EditIcon fontSize="small"/>
        </IconButton>
        </h1>
        {selectedNote.body}
      </div>
    </div>
  );
};

export default Preview;
