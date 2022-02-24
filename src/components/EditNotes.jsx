import React, {useState} from 'react';
import {Button} from "@mui/material";

const CreateNotes = ({notes, setNotes}) => {
  const [text, setText] = useState('')
  const [title, setTitle] = useState('')

  const changeText = event => {
    setText(event.target.value)
  }
  const changeTitle = event => {
    setTitle(event.target.value)
  }
  const addNote = () => {
    let newNote = {
      id: Date.now(),
      title: title,
      body: text
    }
    setNotes([newNote, ...notes])
    setText('')
  }
  return (
    <div className="editor">
      <div className="title-editor">
        <input type="text" value={title} placeholder="Enter your title here..." onChange={changeTitle}/>
      </div>
      <div className="text-editor">
        <textarea
          placeholder="Enter your note here..."
          rows={5}
          value={text}
          onChange={changeText}
        />
        <Button variant="contained" onClick={addNote}>Add</Button>
      </div>
    </div>
  )
}

export default CreateNotes
