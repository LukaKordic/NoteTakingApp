import { Note } from "./model/Note"

export interface NoteStorage {
    getNotes(): Array<Note>
    saveNote(note: Note): void
    updateNote(note: Note): Note
    deleteNote(noteId: string): Note | undefined
}