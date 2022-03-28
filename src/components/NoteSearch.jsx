import React, {useState} from 'react'
import DeleteIcon from "@mui/icons-material/Delete"
import Notes from "./Notes";
import {Button} from "@mui/material";

const NoteSearch = ({setSearchValue, filteredNotes, deleteNote, notes, setNotes, setSelectedNote}) => {
  const [tags, setTags] = useState([])

  const addTags = event => {
    if (event.target.value !== "") {
      setTags([...tags, event.target.value])
      let value = event.target.value.toLowerCase()
      setSearchValue(value);
      event.target.value = ""
    }
  }
  const removeTags = indexToRemove => {
    setTags(tags.filter((_, index) => index !== indexToRemove))
    setSearchValue('')
  }
  const addNote = () => {
    const newNote = {
      id: Date.now(),
      title: "New Note",
      body: "",
      hashtag: []
    }
    setNotes([ newNote, ...notes])
  }

  return (
    <div className="sidebar">
      <div className="header">
        <h2 >Text editor with tags</h2>
        <Button variant="contained" onClick={addNote}>Add new note</Button>
      </div>
      <div className="tags-input">
        <ul id="tags">
          {
            tags.map((tag, index) => <li className="tag" key={index}>
              <span className='tag-title'>{tag}</span>
              <DeleteIcon fontSize="small" onClick={() => removeTags(index)}/>
            </li>)
          }
        </ul>
        <input type="search" placeholder="Press enter to add tag.."
               onKeyUp={event => event.key === "Enter" ? addTags(event) : null}
        />
      </div>
      <Notes filteredNotes={filteredNotes}  deleteNote={deleteNote} setSelectedNote={setSelectedNote}/>
    </div>
  )
}

export default NoteSearch