import React from 'react';
import Preview from "./Preview";

const EditNotes = ({selectedNote, onUpdateNote}) => {
  const onEditField = (field, value) => {
    onUpdateNote({
      ...selectedNote,
      [field]: value,
    })
  }

  const handleChange = (e) => {
    selectedNote.hashtag = e.target.value.split(/(#[a-z\d-]+)/ig).filter(element => element.charAt(0) === '#')
    onEditField("body", e.target.value)
  }

  if (!selectedNote) return <div className="missing-note">No Selected Note</div>;

  return (
    <div className="content">
      <div className="editor">
        <div className="title-editor">
          <input type="text" value={selectedNote.title} placeholder="Title here.."
                 onChange={event => onEditField("title", event.target.value)}/>
        </div>
        <div className="text-editor">
        <textarea
          placeholder="Enter your note here.."
          rows={5}
          value={selectedNote.body}
          onChange={event => handleChange(event)}
        />
        </div>
      </div>
      <Preview selectedNote={selectedNote}/>
    </div>
  )
}

export default EditNotes
