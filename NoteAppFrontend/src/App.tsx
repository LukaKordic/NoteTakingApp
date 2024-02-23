import { FormEvent, useState } from 'react'
import './App.css'
import { NoteComponent } from './components/NoteComponent'
import { Note } from './models/export interface Note {'

function App() {
  const [notes, setNotes] = useState<Note[]>([])
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")

  function addNewNote(event: FormEvent) {
    event.preventDefault()

    setNotes([
      ...notes, {
        id: notes.length.toString(),
        title,
        content,
        createdAt: Number(Date.now),
        updatedAt: null,
      }
    ])
  }

  function NotesContent() {
    if (!notes.length) {
      return <p>You don't have any notes at the moment</p>
    }

    return (
      notes.map(note => (
        <div>
          <NoteComponent title={note.title} content={note.content} />
        </div>
      ))
    )
  }

  return (
    <>
      <h1>Note Taker App</h1>
      <form onSubmit={addNewNote}>
        <label htmlFor="input-title">Title</label>
        <input type='text' name='content' id='input-title'
          value={title}
          onChange={(e) => setTitle(e.target.value)} />
        <label htmlFor="input-content">Content</label>
        <input type="text" name="content" id="input-content"
        value={content}
        onChange={(e) => setContent(e.target.value)} />
        <button disabled={!title || !content}>Save</button>
      </form>
      <NotesContent />
    </>
  )
}


export default App
