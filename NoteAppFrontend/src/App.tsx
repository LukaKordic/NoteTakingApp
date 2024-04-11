import { FormEvent, useState } from "react";
import "./App.css";
import { Note } from "./models/export interface Note {";
import NoteInput from "./components/NoteInput/NoteInput";
import NotesList from "./components/NotesContent/NotesList";

function App() {
  const [notes, setNotes] = useState<Note[]>([]);

  function addNewNote(event: FormEvent, title: string, content: string) {
    event.preventDefault();

    setNotes([
      ...notes,
      {
        id: notes.length.toString(),
        title,
        content,
        createdAt: Number(Date.now),
        updatedAt: null,
      },
    ]);
  }

  return (
    <>
      <h1 id={"pageTitle"}>Note Taker App</h1>
      <div id={"notesContainer"}>
        <NoteInput onNoteSave={addNewNote} />
        <NotesList notes={notes} />
      </div>
    </>
  );
}

export default App;
