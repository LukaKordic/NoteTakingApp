import { NoteStorage } from "./NoteStorage";
import { Note } from "./model/Note";
import HttpError from "../errors/HttpError";
import { unixTimestampInSeconds } from "../utils/TimeUtils";

export class LocalNoteStorage implements NoteStorage {
  private notes = new Map<string, Note>();

  getNotes(): Array<Note> {
    const notesArray: Array<Note> = [];
    for (let note of this.notes.values()) {
      notesArray.push(note);
    }
    return notesArray;
  }

  saveNote(note: Note): Note {
    if (this.notes.has(note.id))
      throw new HttpError(409, `A note with id ${note.id} already exists.`);
    this.notes.set(note.id, note);
    return note;
  }

  updateNote(noteId: string, title: string, content: string): Note {
    let noteToUpdate = this.notes.get(noteId);
    if (!noteToUpdate)
      throw new HttpError(404, `Note with Id ${noteId} cannot be found`);
    noteToUpdate.updatedAt = unixTimestampInSeconds();
    noteToUpdate.title = title;
    noteToUpdate.content = content;
    this.notes.set(noteId, noteToUpdate);
    return noteToUpdate;
  }

  deleteNote(noteId: string): string | undefined {
    if (this.notes.delete(noteId)) {
      return noteId;
    } else {
      throw new HttpError(404, `Note with id ${noteId} doesn't exist`);
    }
  }
}
