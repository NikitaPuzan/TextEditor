import React, {useEffect, useState} from "react"
import "./styles.scss"
import data from "./Notes.json"
import NoteSearch from "./components/NoteSearch"
import EditNotes from "./components/EditNotes"


function App() {
  const [notes, setNotes] = useState(data.notes)
  const [selectedNote, setSelectedNote] = useState(false)
  const [filteredNotes, setFilteredNotes] = useState([])
  const [searchValue, setSearchValue] = useState('')

  const deleteNote = idToDelete => {
    setNotes(notes.filter(note => note.id !== idToDelete))
  }

  useEffect(() => {
    if (searchValue !== '') {
      let values = notes.filter(note => note.hashtag.toString().toLowerCase().indexOf(searchValue.toLowerCase()) !== -1)
      setFilteredNotes(values)
    } else {
      setFilteredNotes(notes)
    }
  }, [notes, searchValue])


  const getSelectedNote = () => {
    return notes.find(({ id }) => id === selectedNote)
  }

  const onUpdateNote = (updatedNote) => {
    const updatedNotesArr = notes.map((note) => {
      if (note.id === updatedNote.id) {
        return updatedNote
      }
      return note
    })
    setNotes(updatedNotesArr)
  }

  return (
    <div className="App">
      <NoteSearch setSearchValue={setSearchValue}
                  filteredNotes={filteredNotes}
                  setSelectedNote={setSelectedNote}
                  deleteNote={deleteNote}
                  notes={notes} setNotes={setNotes}
      />
      <EditNotes  onUpdateNote={onUpdateNote} selectedNote={getSelectedNote()}/>
    </div>
  )
}
export default App