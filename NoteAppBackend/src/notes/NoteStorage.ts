import { Note } from "./model/Note";

export interface NoteStorage {
  getNotes(): Array<Note>;
  saveNote(note: Note): void;
  updateNote(noteId: string, title: string, content: string): Note;
  deleteNote(noteId: string): string | undefined;
}
