"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LocalNoteStorage = void 0;
class LocalNoteStorage {
    constructor() {
        this.notes = new Map();
    }
    getNotes() {
        const notesArray = [];
        for (let note of this.notes.values()) {
            notesArray.push(note);
        }
        return notesArray;
    }
    saveNote(note) {
        if (this.notes.has(note.id))
            throw new HttpError(409, `A note with id ${note.id} already exists.`);
        this.notes.set(note.id, note);
        return note;
    }
    updateNote(note) {
        let noteToUpdate = this.notes.get(note.id);
        if (!noteToUpdate)
            throw new Error(`Note ${note.title} cannot be found`);
        noteToUpdate = note;
        this.notes.set(note.id, noteToUpdate);
        return note;
    }
    deleteNote(noteId) {
        if (this.notes.delete(noteId)) {
            return noteId;
        }
        else {
            throw Error(`Note with ${noteId} doesn't exist`);
        }
    }
}
exports.LocalNoteStorage = LocalNoteStorage;
