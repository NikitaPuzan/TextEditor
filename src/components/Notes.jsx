import React from 'react'
import {IconButton} from "@mui/material"
import DeleteIcon from "@mui/icons-material/Delete"

const Notes = ({deleteNote, filteredNotes, setSelectedNote}) => {
  return (
    <div className="note">
      {
        filteredNotes.map(({id, title, hashtag}) => <div className="note-container" key={id} onClick={() => setSelectedNote(id)}>
          <div className="note-icons">
            <strong>{title.length > 0 ? title : "Untitled Note"}</strong>
            <div>
              <IconButton color="error" onClick={() => deleteNote(id)}>
                <DeleteIcon fontSize="small"/>
              </IconButton>
            </div>
          </div>
            {hashtag.length !== 0 && hashtag.map((tag, index) => <span key={index} className='hashtag'>{tag}</span>)}
        </div>)
      }
    </div>
  )
}
export default Notes
