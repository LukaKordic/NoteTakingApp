"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LocalNoteStorage = void 0;
class LocalNoteStorage {
    constructor() {
        this.notes = Array();
    }
    getNotes() {
        return this.notes;
    }
    saveNote(note) {
        this.notes.push(note);
    }
    updateNote(note) {
        let noteToUpdate = this.notes.find((note) => {
            noteToUpdate = note;
        });
        if (!noteToUpdate)
            throw new Error("Note ${note.title} cannot be found");
        const index = this.notes.indexOf(note);
        this.notes.splice(index, 1, noteToUpdate);
        return noteToUpdate;
    }
    deleteNote(noteId) {
        const index = this.notes.findIndex((note) => {
            note.id === noteId;
        });
        if (index === -1)
            return undefined;
        return this.notes.splice(index, 1)[0];
    }
}
exports.LocalNoteStorage = LocalNoteStorage;
