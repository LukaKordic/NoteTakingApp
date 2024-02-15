import { NoteStorage } from "./NoteStorage"
import { Note } from "./model/Note"

export class LocalNoteStorage implements NoteStorage {
    private notes = Array<Note>()

    getNotes(): Array<Note> {
        return this.notes
    }

    saveNote(note: Note): void {
        this.notes.push(note)
    }
    updateNote(note: Note): Note {
        let noteToUpdate = this.notes.find((note) => {
            noteToUpdate = note
        })
        if (!noteToUpdate) throw new Error("Note ${note.title} cannot be found");

        const index = this.notes.indexOf(note)
        this.notes.splice(index, 1, noteToUpdate)
        return noteToUpdate
    }
    deleteNote(noteId: string): Note | undefined{
        const index = this.notes.findIndex((note) => {
            note.id === noteId
        })
        if (index === -1) return undefined
        return this.notes.splice(index, 1)[0]
    }

}