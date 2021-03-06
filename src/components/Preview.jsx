import React from 'react';
import EditIcon from '@mui/icons-material/Edit';
import { IconButton} from "@mui/material";

const Preview = ({selectedNote, setToggle}) => {

  return (
    <div>
      <div className="preview-note">
        <h1>{selectedNote.title}
        <IconButton color="error" onClick={() => setToggle(true)}>
          <EditIcon fontSize="medium" variant="contained"/>
        </IconButton>
        </h1>
        <p>{selectedNote.body}</p>
      </div>
    </div>
  );
};

export default Preview;
